import Head from 'next/head';
import { getUsers } from '../lib/users.js';

import Layout, { siteTitle } from '../components/layout';

export async function getStaticProps() {
  const lodges = await getUsers();
  return {
    props: {
      lodges,
    },
  };
}

export default function Home({ lodges }) {
  console.log(lodges);
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
    </Layout>
  );
}
