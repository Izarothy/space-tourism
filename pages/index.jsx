import Head from 'next/head';
export default function Home() {
  return (
    <div>
      <Head>
        <title>Space Tourism</title>
        <meta charSet="utf-8" />
      </Head>
      <div className="bg-home-mobile md:bg-home-tablet lg:bg-home-desktop h-screen bg-cover bg-norepeat bg-center">
        <nav>
          <div className="bg-white h-12 w-12"></div>
        </nav>
      </div>
    </div>
  );
}
