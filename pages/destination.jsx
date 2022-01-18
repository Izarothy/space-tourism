import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import NavBar from '../components/NavBar';
import Header from '../components/Header';
import data from '../data/data.json';
import PlanetsBarItem from '../components/PlanetsBarItem';

export default function destination() {
  const [currentPage, setCurrentPage] = useState('Home');
  const [menuActive, setMenuActive] = useState(false);
  const [currentDestination, setCurrentDestination] = useState('Moon');
  const [currentDestinationData, setCurrentDestinationData] = useState(
    data.destinations[0]
  );

  useEffect(() => {
    setCurrentPage('Destination');
  }, []);

  useEffect(() => {
    setCurrentDestinationData(
      data.destinations.find((planet) => planet.name === currentDestination)
    );
  }, [currentDestination]);

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
        <div className="flex flex-col items-center mt-6 gap-7">
          <Header number="01" name="Pick your destination" />
          <Image
            src={currentDestinationData.images?.png}
            width={170}
            height={170}
            className="z-[1]"
          />
          <div className="flex gap-7 mb-5">
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
        </div>
        <main className="flex flex-col items-center text-center">
          <h2 className="uppercase text-[56px] font-bellefair">
            {currentDestinationData.name}
          </h2>
          <p className="text-secondary mb-8 font-barlowCondensed">
            {currentDestinationData.description}
          </p>
        </main>
        <hr className="border-secondary" />
        <div className="text-center tracking-wider">
          <h2 className="uppercase text-[28px] font-barlowCondensed">
            <span className="text-[14px] text-secondary font-bellefair">
              avg. distance
            </span>
            <br />
            {currentDestinationData.distance}
          </h2>
          <h2 className="uppercase text-[28px] font-barlowCondensed">
            <span className="text-[14px] text-secondary font-bellefair">
              est. travel time
            </span>
            <br />
            {currentDestinationData.travel}
          </h2>
        </div>
      </div>
    </div>
  );
}
