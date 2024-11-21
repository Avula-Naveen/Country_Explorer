import React, { useEffect, useState } from 'react';
import Loader from '../Loader/Loader';

const SearchBar = ({ searchCountries, searchInput, setCountriesData }) => {
  const [loading, setLoading] = useState(true);
  const [selectedRegion, setSelectedRegion] = useState('Africa'); 

  const regions = ['Africa', 'Asia', 'Oceania', 'Americas', 'Europe'];

  useEffect(() => {
    fetchCountriesByRegion(selectedRegion); 
  }, [selectedRegion]);

  const fetchCountriesByRegion = async (region) => {
    const response = await fetch(`https://restcountries.com/v3.1/region/${region}`);
    const data = await response.json();
    setCountriesData(data);
    setLoading(false);
  };

  return (
    <div className='grid lg:grid-flow-col md:grid-flow-col '>
      <form className="form relative mt-10 ml-20">
        <button className="absolute left-2 -translate-y-1/2 top-1/2 p-1" type="button">
          <svg
            width={50}
            height={16}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-labelledby="search"
            className="w-5 h-5 text-gray-700"
          >
            <path
              d="M7.667 12.667A5.333 5.333 0 107.667 2a5.333 5.333 0 000 10.667zM14.334 14l-2.9-2.9"
              stroke="currentColor"
              strokeWidth="1.333"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        
        <input
          className="input rounded-full px-8 py-3 border-2 border-transparent focus:outline-none focus:border-blue-500 placeholder-gray-400 transition-all duration-300 shadow-md mr:10 dark:background-grey dark:text-black"
          placeholder="Search..."
          required
          type="search"
          name="search"
          id="search"
          value={searchInput}
          onChange={(e) => searchCountries(e.target.value)}
        />
      </form>

      <select
        name="select"
        id="select"
        className="py-2 px-4 rounded shadow ml-5 md:mr-5 md:ml-0 mt-10 w-50 dark:text-black"
        value={selectedRegion}
        onChange={(e) => setSelectedRegion(e.target.value)} 
        
      >
        {regions.map((region) => (
          <option key={region} value={region}>
            {region}
          </option>
        ))}
        
      </select>



      {loading && <Loader/>}
    </div>
  );
};

export default SearchBar;
