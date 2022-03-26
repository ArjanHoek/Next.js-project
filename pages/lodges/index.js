import Head from 'next/head';
import { getLodges } from '../../lib/lodges.js';

import Layout, { siteTitle } from '../../components/layout';
import Lodge from '../../components/cards/lodge.js';

export default function Lodges({ data: lodges }) {
  console.log(lodges);
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
  return { props: { data: await getLodges() } };
}
