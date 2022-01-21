import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import NavBar from '../components/Navbar/NavBar';
import Header from '../components/Header';
import data from '../data/data.json';
import DestinationChoiceButton from '../components/Destination/DestinationChoiceButton';
import DestinationDescription from '../components/Destination/DestinationDescription';
export default function destination() {
  const [currentPage, setCurrentPage] = useState('Home');
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
      </Head>
      <div className="bg-destination-mobile md:bg-destination-tablet lg:bg-destination-desktop min-h-screen bg-cover bg-norepeat bg-center text-white">
        <NavBar
          setMenuActive={setMenuActive}
          menuActive={menuActive}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
        <main className="p-6">
          <div className="flex flex-col items-center mt-6 gap-7">
            <Header number="01" name="Pick your destination" />
            <Image
              src={currentDestination.images?.png}
              width={170}
              height={170}
              className="z-[1]"
              alt={currentDestination.name}
            />
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
          <main className="flex flex-col items-center text-center">
            <h2 className="uppercase text-[56px] font-bellefair">
              {currentDestination.name}
            </h2>
            <p className="text-secondary mb-8 font-barlowCondensed">
              {currentDestination.description}
            </p>
          </main>
          <hr className="border-secondary" />
          <DestinationDescription currentDestination={currentDestination} />
        </main>
      </div>
    </div>
  );
}
