import { useState, useEffect } from 'react';
import Head from 'next/head';
import NavBar from '../components/Navbar/NavBar';
import HeroButton from '../components/Home/HeroButton';
import Header from '../components/Header';
export default function Home() {
  const [menuActive, setMenuActive] = useState(false);
  const [currentPage, setCurrentPage] = useState('Home');

  useEffect(() => {
    setCurrentPage('Home');
  }, []);
  return (
    <div>
      <Head>
        <title>Space Tourism</title>
      </Head>
      <div className="bg-home-mobile md:bg-home-tablet lg:bg-home-desktop min-h-screen bg-cover bg-norepeat bg-center text-white">
        <NavBar
          setMenuActive={setMenuActive}
          menuActive={menuActive}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
        <main className="flex flex-col grid-4 justify-center text-center font-barlowCondensed mt-6 p-6">
          <Header desc="So, you want to travel to" name="space" />
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
