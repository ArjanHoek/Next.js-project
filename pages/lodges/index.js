import Head from 'next/head';

import Layout, { siteTitle } from '../../components/layout';
import Lodge from '../../components/cards/lodge.js';
import { getLodges } from '../../db/lodges';

export default function Lodges({ data: lodges }) {
  return (
    <Layout>
      <Head>
        <title>{siteTitle} | Lodges</title>
      </Head>
      <h3>Lodges</h3>

      {lodges.map(lodge => (
        <Lodge key={lodge._id} {...lodge} />
      ))}
    </Layout>
  );
}

export async function getServerSideProps() {
  const data = await getLodges();
  return { props: { data } };
}
