import Head from 'next/head';
import Link from 'next/link';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hi, this is my first website created with Next.js</p>
        <Link href="/posts/first-post">
          <a>Go to my first post</a>
        </Link>
      </section>
    </Layout>
  );
}
