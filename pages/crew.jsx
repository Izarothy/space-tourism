import React from 'react';
import Head from 'next/head';
import { useState, useEffect } from 'react';
import NavBar from '../components/Navbar/NavBar';
import Header from '../components/Header';
import data from '../data/data.json';
import CrewChoiceButton from '../components/Crew/CrewChoiceButton';
import CrewDescription from '../components/Crew/CrewDescription';
const crewData = data.crew;
export default function crew() {
  const [currentPage, setCurrentPage] = useState('Home');
  const [menuActive, setMenuActive] = useState(false);
  const [currentCrew, setCurrentCrew] = useState(crewData[0]);
  useEffect(() => {
    setCurrentPage('Crew');
  }, []);

  return (
    <div>
      <Head>
        <title>{currentPage}</title>
      </Head>
      <div className="bg-crew-mobile md:bg-crew-tablet lg:bg-crew-desktop min-h-screen bg-cover bg-norepeat bg-center text-white">
        <NavBar
          setMenuActive={setMenuActive}
          menuActive={menuActive}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
        <main className="p-6 pt-0 flex flex-col gap-8 items-center text-center">
          <Header number={'02'} name="Meet your crew" />
          <img src={currentCrew.images.png} className="w-1/3" />
          <hr className="border-gray-700 -mt-8 w-full" />
          <div className="flex gap-4">
            {crewData.map((crew, idx) => {
              return (
                <CrewChoiceButton
                  number={idx}
                  idx={idx}
                  crewButtonActive={crew === currentCrew}
                  setCurrentCrew={setCurrentCrew}
                />
              );
            })}
          </div>
          <CrewDescription currentCrew={currentCrew} />
        </main>
      </div>
    </div>
  );
}
