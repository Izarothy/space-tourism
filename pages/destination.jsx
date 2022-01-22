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
      <div className="bg-destination-mobile md:bg-destination-tablet lg:bg-destination-desktop min-h-screen bg-cover text-white pb-14">
        <NavBar
          setMenuActive={setMenuActive}
          menuActive={menuActive}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
        <div className="flex flex-col w-full items-center mt-6 gap-7 p-6 pt-0">
          <Header number="01" name="Pick your destination" />
          <div className="lg:flex gap-14 justify-between w-full mt-14 mx-14">
            <div className="flex flex-col mx-auto lg:m-0 lg:flex-row lg:ml-16 w-[170px] h-[170px] md:w-[300px] md:h-[300px] lg:w-[445px] lg:h-[445px]">
              <img
                src={currentDestination.images?.png}
                alt={currentDestination.name}
              />
            </div>
            <DestinationDescription
              currentDestination={currentDestination}
              setCurrentDestination={setCurrentDestination}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
