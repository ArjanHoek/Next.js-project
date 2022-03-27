import Layout from '../../components/layout';
import { getLodgeById } from '../../db/lodges';
import Link from 'next/link';

import { useRouter } from 'next/router';

export default function Lodge({ data: { name, country, _id } }) {
  if (!_id) {
    return (
      <Layout>
        <h3>This lodge doesn't exist anymore...</h3>
      </Layout>
    );
  }

  const router = useRouter();

  const onDelete = async () => {
    await fetch(`/api/lodges/${_id}`, {
      method: 'DELETE',
    });

    router.push('/lodges');
  };

  return (
    <Layout>
      <h3>{name}</h3>
      <p>{country}</p>
      <div>
        <button onClick={onDelete}>Delete</button>

        <Link href={`/lodges/edit/${_id}`}>
          <a>Edit</a>
        </Link>
      </div>
    </Layout>
  );
}

export async function getServerSideProps({ params: { id } }) {
  const lodge = await getLodgeById(id);

  return { props: { data: lodge || {} } };
}
