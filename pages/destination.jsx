import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import NavBar from '../components/Navbar/NavBar';
import Header from '../components/Header';
import data from '../data/data.json';
import DestinationChoiceButton from '../components/Destination/DestinationChoiceButton';
import DestinationDescription from '../components/Destination/DestinationDescription';
export default function Destination() {
  const [currentPage, setCurrentPage] = useState('');
  const [menuActive, setMenuActive] = useState(false);
  // As default is moon (index 0)
  const [currentDestination, setCurrentDestination] = useState(
    data.destinations[0]
  );

  useEffect(() => {
    setCurrentPage('Destination');
  }, []);

  return (
    <div>
      <Head>
        <title>{currentPage}</title>
        <link rel="icon" href="/assets/favicon-32x32.png" />
      </Head>
      <main className="bg-destination-mobile md:bg-destination-tablet lg:bg-destination-desktop min-h-screen bg-cover text-white">
        <NavBar
          setMenuActive={setMenuActive}
          menuActive={menuActive}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
        <div className="flex flex-col items-center mt-6 gap-7 p-6 pt-0">
          <Header number="01" name="Pick your destination" />
          <div className="w-[170px] h-[170px] md:w-[300px] md:h-[300px]">
            <img
              src={currentDestination.images?.png}
              className=""
              alt={currentDestination.name}
            />
          </div>
          <div className="flex gap-7 mb-5">
            {data.destinations.map((destination, idx) => {
              return (
                <DestinationChoiceButton
                  key={idx}
                  idx={idx}
                  name={destination.name}
                  setCurrentDestination={setCurrentDestination}
                  destinationActive={currentDestination === destination}
                />
              );
            })}
          </div>
        </div>
        <main className="flex flex-col items-center text-center md:px-[100px]">
          <h2 className="uppercase text-[56px] md:text-[80px] font-bellefair">
            {currentDestination.name}
          </h2>
          <p className="text-secondary mb-8 font-barlowCondensed md:leading-[28px]">
            {currentDestination.description}
          </p>
        </main>
        <hr className="border-[#383B4B]" />
        <DestinationDescription currentDestination={currentDestination} />
      </main>
    </div>
  );
}
