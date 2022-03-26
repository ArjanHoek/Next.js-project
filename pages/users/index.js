import Head from 'next/head';

import Layout, { siteTitle } from '../../components/layout';
import { getUsers } from '../../lib/users.js';

export default function Users({ data }) {
  console.log(data);
  return (
    <Layout>
      <Head>
        <title>{siteTitle} | Users</title>
      </Head>
      <h3>Users</h3>
      <p>This page will display all users</p>
    </Layout>
  );
}

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await getUsers();
  const data = res;

  // Pass data to the page via props
  return { props: { data } };
}
