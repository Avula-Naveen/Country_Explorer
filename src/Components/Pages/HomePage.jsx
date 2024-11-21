import React, { useEffect, useState } from 'react';
import Header from '../Hearder/NavBar';
import CountryCard from '../Cards/Cards';
import Loader from '../Loader/Loader';
import SearchBar from '../Search/SearchBar';


const HomePage = () => {
  const [countriesData, setCountriesData] = useState([]);
  const [loading, setLoading] = useState(true); 

  const[filterCountries,setFilterCountries]=useState([])
  const[searchInput,setSearchInput]=useState("")

  useEffect(() => {
    fetchData();
  }, []);


// props changemode
const[darkMode,setDarkMode]=useState(false)

  const handleTheme=()=>{
    
    setDarkMode(!darkMode)

    darkMode?(document.body.style.backgroundColor="white"):(document.body.style.backgroundColor="black")
   
  }







  const fetchData = async () => {
    const res = await fetch("https://restcountries.com/v3.1/all");
    const data = await res.json();
    setCountriesData(data);
    setLoading(false); 
  };

  const searchCountries=(searchValue)=>{
    setSearchInput(searchValue)

    if (searchValue) {
      const filteredCountries = countriesData.filter((country) =>
        Object.values(country)
          .join("")
          .toLowerCase()
          .includes(searchValue.toLowerCase())
      );
      setFilterCountries(filteredCountries);
    } else {
      setFilterCountries(countriesData);
    }
  

    // if(searchInput){
    //   const filterCountries=countriesData.filter((country)=>(
    //     Object.values(country).join("").toLocaleLowerCase.includes(searchValue.toLocaleLowerCase())
    //   ))
    //   setFilterCountries(filterCountries)
    // }else{
    //   setFilterCountries(countriesData)
    // }

  }

  return (
    <>
      <Header />

      {/* <div className='grid grid-cols-2 gap-2 place-content-between h-38 mt-10 ml-10'>

      <SearchBar searchCountries={searchCountries} searchInput={searchInput} />

      <DropDown className="place-content-end"/>
      </div> */}


            <SearchBar searchCountries={searchCountries} searchInput={searchInput} setCountriesData={setCountriesData} />

      {searchInput.length>0?
       <div className="container px-5 py-5 grid lg:grid-cols-4 gap-10">
       {loading ? (
         <Loader/>
       ) : (
        filterCountries.map((eachCountry) => (
           <CountryCard key={eachCountry.cca3} data={eachCountry} /> 
         ))
       )}
     </div>: <div className="container px-5 py-5 grid 2xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-10">
        {loading ? (
          <Loader/>
        ) : (
          countriesData.map((eachCountry) => (
            <CountryCard key={eachCountry.cca3} data={eachCountry} /> 
          ))
        )}
      </div>
      }
      
      {/* <div className="container px-5 py-5 grid lg:grid-cols-4 gap-10">
        {loading ? (
          <Loader/>
        ) : (
          countriesData.map((eachCountry) => (
            <CountryCard key={eachCountry.cca3} data={eachCountry} /> // Added a key prop
          ))
        )}
      </div> */}
    </>
  );
};

export default HomePage;