// todo: menu
import Head from 'next/head';
import NavBar from '../components/NavBar';
import HeroButton from '../components/HeroButton';
export default function Home() {
  return (
    <div>
      <Head>
        <title>Space Tourism</title>
        <meta charSet="utf-8" />
        <style></style>
      </Head>
      <div className="bg-home-mobile md:bg-home-tablet lg:bg-home-desktop h-screen bg-cover bg-norepeat bg-center text-white p-6">
        <NavBar />
        <main className="flex flex-col grid-4 justify-center text-center font-barlowCondensed mt-12">
          <span className="text-secondary uppercase ">
            So, you want to travel to
          </span>
          <h1 className="uppercase font-bellefair text-[80px] ">Space</h1>
          <p className="text-secondary leading-[25px] text-[15px]">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </main>
        <HeroButton />
      </div>
    </div>
  );
}
