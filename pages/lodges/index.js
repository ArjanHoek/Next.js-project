import Head from 'next/head';

import Layout, { siteTitle } from '../../components/layout';
import LodgesList from '../../components/lists/LodgesList';
import { getLodges } from '../../db/lodges';

export default function Lodges({ data }) {
  return (
    <Layout>
      <Head>
        <title>{siteTitle} | Lodges</title>
      </Head>
      <h3>Lodges</h3>

      <LodgesList data={data} />
    </Layout>
  );
}

export async function getServerSideProps() {
  const data = await getLodges();
  return { props: { data } };
}
