// Home.js
import React, { useState } from 'react';
import Head from 'next/head';
import FilterBox from '@/components/Filter';
import Card from '@/components/Card';
import { data } from '../../data';
import Header from '@/components/Header';

const Home = () => {
  const [selectedFilters, setSelectedFilters] = useState([])

  const handleFilter = (value) => {
    if (selectedFilters == undefined) {
      setSelectedFilters([value])
    } else {
      if (!selectedFilters.includes(value)) {
        setSelectedFilters([...selectedFilters, value])
      }
    }
  }

  const filteredData = data.filter((item) => {
    return selectedFilters?.every((filter) => {
      return (
        item.role == filter || item.level == filter || item.tools.includes(filter) || item.languages.includes(filter)
      )
    })
  })

  console.log('filteredData', filteredData);

  return (
    <>
      <Head>
        <title>Job Listing Challenge</title>
      </Head>
      <div className='body bg-[#f0fafb]'>
        <Header />
        {/* FILTER BOX */}

        <div className={`filter-box flex flex-row items-center justify-between relative bottom-[34px] h-[70px] px-6 py-3 mx-32 bg-white rounded-lg shadow-lg transition-all duration-300 ${selectedFilters.length == 0 ? 'opacity-0' :'opacity-100'}`}>
          <div className='flex flex-row items-center'>

            {selectedFilters.map((filter) => (
              <>
                <div className='filter-box-item ml-3'>
                  <span className='font-semibold text-[--dark-cyan] px-2 py-1 bg-[--light-cyan] rounded-l-md '>
                    {filter}
                  </span>
                  <span
                    className='bg-[--dark-cyan] px-3 py-1 text-white font-semibold rounded-r-md cursor-pointer hover:bg-black'
                    onClick={() => setSelectedFilters((prevFilters) => prevFilters?.filter((element) => element !== filter))}
                  >
                    X
                  </span>
                </div>
              </>
            ))}
          </div>

          <div className='clear'>
            <span onClick={() => setSelectedFilters([])} className='font-semibold text-[--dark-cyan] cursor-pointer hover:underline'>Clear</span>
          </div>
        </div>



        <Card data={filteredData} onFilterClick={handleFilter} />
      </div>
    </>
  );
};

export default Home;
