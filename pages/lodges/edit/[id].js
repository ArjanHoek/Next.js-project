import LodgeForm from '../../../components/forms/LodgeForm';
import Layout from '../../../components/layout';
import { getLodgeById } from '../../../db/lodges.js';

export default function ({ data }) {
  return (
    <Layout>
      <h3>Edit Lodge</h3>
      <LodgeForm data={data} />
    </Layout>
  );
}

export async function getServerSideProps({ params: { id } }) {
  const lodge = await getLodgeById(id);

  return { props: { data: lodge || {} } };
}
