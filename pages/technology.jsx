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
export default function crew() {
  const [currentPage, setCurrentPage] = useState('Home');
  const [menuActive, setMenuActive] = useState(false);
  const [currentTechnology, setCurrentTechnology] = useState(technologyData[0]);
  useEffect(() => {
    setCurrentPage('Technology');
  }, []);

  return (
    <div>
      <Head>
        <title>{currentPage}</title>
      </Head>
      <div className="bg-technology-mobile md:bg-technology-tablet lg:bg-technology-desktop min-h-screen bg-cover bg-norepeat bg-center text-white flex flex-col items-center">
        <NavBar
          setMenuActive={setMenuActive}
          menuActive={menuActive}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
        <Header number={'03'} name="Space launch 101" />
        <div className="w-full h-1/3 mt-6">
          <Image
            src={currentTechnology.images?.landscape}
            alt={currentTechnology.name}
            width={377}
            height={170}
            layout="responsive"
          />
        </div>
        <main className="p-6 flex flex-col gap-8 items-center text-center">
          <div className="flex gap-4">
            {technologyData.map((technology, idx) => {
              return (
                <TechnologyChoiceButton
                  number={idx}
                  technologyActive={technology === currentTechnology}
                  setCurrentTechnology={setCurrentTechnology}
                />
              );
            })}
          </div>
          <TechnologyDescription currentTechnology={currentTechnology} />
        </main>
      </div>
    </div>
  );
}
