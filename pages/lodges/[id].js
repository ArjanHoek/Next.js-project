import { useRouter } from 'next/router';
import Layout from '../../components/layout';
import { getLodgeById } from '../../lib/lodges';

export default function Lodge({ data: { name, country } }) {
  return (
    <Layout>
      <h3>{name}</h3>
      <p>{country}</p>
    </Layout>
  );
}

export async function getServerSideProps({ params: { id } }) {
  return { props: { data: await getLodgeById(id) } };
}
