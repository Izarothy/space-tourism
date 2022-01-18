import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import NavBar from '../components/NavBar';
import Header from '../components/Header';
import data from '../data/data.json';
import PlanetsBarItem from '../components/PlanetsBarItem';

export default function destination() {
  const [currentPage, setCurrentPage] = useState('');
  const [menuActive, setMenuActive] = useState(false);
  const [currentDestination, setCurrentDestination] = useState('Moon');
  useEffect(() => {
    setCurrentPage('Destination');
  }, []);

  return (
    <div>
      <Head>
        <title>{currentPage}</title>
      </Head>
      <div className="bg-destination-mobile md:bg-destination-tablet lg:bg-destination-desktop h-screen bg-cover bg-norepeat bg-center text-white p-6">
        <NavBar
          setMenuActive={setMenuActive}
          menuActive={menuActive}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
        <div className="flex flex-col items-center mt-6">
          <Header number="01" name="Pick your destination" />

          <div className="flex gap-7">
            {data.destinations.map((destination, idx) => {
              return (
                <PlanetsBarItem
                  key={idx}
                  name={destination.name}
                  setCurrentDestination={setCurrentDestination}
                  destinationActive={currentDestination === destination.name}
                />
              );
            })}
          </div>
          <hr />
        </div>
      </div>
    </div>
  );
}
