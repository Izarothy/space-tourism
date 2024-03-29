import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import NavBar from '../components/Navbar/NavBar';
import Header from '../components/Header';
import TechnologyChoiceButton from '../components/Technology/TechnologyChoiceButton';
import TechnologyDescription from '../components/Technology/TechnologyDescription';
import data from '../data/data.json';
const technologyData = data.technology;
export default function Technology() {
  const [currentPage, setCurrentPage] = useState('');
  const [menuActive, setMenuActive] = useState(false);
  const [currentTechnology, setCurrentTechnology] = useState(technologyData[0]);
  useEffect(() => {
    setCurrentPage('Technology');
  }, []);

  return (
    <div>
      <Head>
        <title>{currentPage}</title>
        <link rel="icon" href="/assets/favicon-32x32.png" />
      </Head>
      <div className="bg-technology-mobile md:bg-technology-tablet lg:bg-technology-desktop min-h-screen bg-cover bg-norepeat bg-center text-white flex flex-col items-center">
        <NavBar
          setMenuActive={setMenuActive}
          menuActive={menuActive}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
        <Header number={'03'} name="Space launch 101" leftPad={true} />
        <div className="lg:hidden w-full h-1/3 mt-6">
          <Image
            src={currentTechnology.images?.landscape}
            alt={currentTechnology.name}
            width={377}
            height={170}
            layout="responsive"
          />
        </div>
        <main className="p-6 flex flex-col lg:flex-row  lg:w-full lg:justify-between gap-8 items-center text-center md:px-[155px] md:pb-[100px] lg:pr-0">
          <div className="flex lg:flex-col lg:gap-8 gap-4 md:mt-14 md:mb-11">
            {technologyData.map((technology, idx) => {
              return (
                <TechnologyChoiceButton
                  number={idx}
                  key={idx}
                  technologyActive={technology === currentTechnology}
                  setCurrentTechnology={setCurrentTechnology}
                />
              );
            })}
          </div>
          <TechnologyDescription currentTechnology={currentTechnology} />
          <img
            src={currentTechnology.images?.portrait}
            alt={currentTechnology.name}
            className=""
          />
        </main>
      </div>
    </div>
  );
}
