import { useState, useEffect } from 'react';
import Head from 'next/head';
import NavBar from '../components/Navbar/NavBar';
import HeroButton from '../components/Home/HeroButton';
import Header from '../components/Header';
export default function Home() {
  const [menuActive, setMenuActive] = useState(false);
  const [currentPage, setCurrentPage] = useState('');

  useEffect(() => {
    setCurrentPage('Home');
  }, []);
  return (
    <div>
      <Head>
        <title>Space Tourism</title>
        <link rel="icon" href="/assets/favicon-32x32.png" />
      </Head>
      <div className="bg-home-mobile md:bg-home-tablet lg:bg-home-desktop lg:flex flex-col min-h-screen bg-cover bg-norepeat bg-center text-white pb-[90px] lg:pb-[130px]">
        <NavBar
          setMenuActive={setMenuActive}
          menuActive={menuActive}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
        <div className="lg:flex md:flex-col lg:flex-row lg:mt-auto">
          <main className="flex flex-col lg:gap-6 justify-center text-center lg:text-left font-barlowCondensed mt-6 p-6 pt-0 md:px-[159px] lg:max-w-3xl ">
            <Header desc="So, you want to travel to" name="space" />
            <p className="text-secondary leading-[25px] text-[15px] lg:text-[18px] lg:leading-8">
              Let’s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we’ll give you a truly out of
              this world experience!
            </p>
          </main>
          <HeroButton />
        </div>
      </div>
    </div>
  );
}
