import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import Layout from '../../components/layout';

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>HIGHKER - Berliner Hütte</title>
      </Head>
      <h1>Berliner Hütte</h1>
      {/* <Image
        src="/images/tower.jpg" // Route of the image file
        height={5030} // Desired size with correct aspect ratio
        width={4024} // Desired size with correct aspect ratio
        alt="Nice picture of a tower"
      /> */}
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </Layout>
  );
}
