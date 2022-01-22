import React from 'react';
import Head from 'next/head';
import { useState, useEffect } from 'react';
import NavBar from '../components/Navbar/NavBar';
import Header from '../components/Header';
import data from '../data/data.json';
import CrewChoiceButton from '../components/Crew/CrewChoiceButton';
import CrewDescription from '../components/Crew/CrewDescription';
const crewData = data.crew;
export default function Crew() {
  const [currentPage, setCurrentPage] = useState('');
  const [menuActive, setMenuActive] = useState(false);
  const [currentCrew, setCurrentCrew] = useState(crewData[0]);
  useEffect(() => {
    setCurrentPage('Crew');
  }, []);

  return (
    <div>
      <Head>
        <title>{currentPage}</title>
        <link rel="icon" href="/assets/favicon-32x32.png" />
      </Head>
      <div className="bg-crew-mobile md:bg-crew-tablet lg:bg-crew-desktop min-h-screen bg-cover bg-norepeat bg-center text-white">
        <NavBar
          setMenuActive={setMenuActive}
          menuActive={menuActive}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
        <main className="px-6 flex flex-col gap-8 items-center text-center md:px-[155px]">
          <Header number={'02'} name="Meet your crew" />
          <div className="lg:flex justify-between w-full self-start">
            <div className="order-last">
              <img
                src={currentCrew.images.png}
                className="md:w-2/3 ml-auto md:order-4 lg:w-4/5 lg:h-auto"
              />
              <hr className="border-gray-700 -mt-8 w-full md:hidden" />
            </div>
            <div className="lg:flex flex-col max-w-xl text-left gap-24">
              <div className="flex gap-4 md:order-3">
                {crewData.map((crew, idx) => {
                  return (
                    <CrewChoiceButton
                      number={idx}
                      key={idx}
                      crewButtonActive={crew === currentCrew}
                      setCurrentCrew={setCurrentCrew}
                    />
                  );
                })}
              </div>
              <CrewDescription currentCrew={currentCrew} />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
