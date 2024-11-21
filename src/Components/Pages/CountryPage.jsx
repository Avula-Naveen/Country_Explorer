import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Loader from '../Loader/Loader';
import BackButton from '../Buttons/BackButton';


 const CountryPage = () => {
   const {id}= useParams()
 
  const[country,setCountry]= useState([]);

  useEffect(()=>{
    fetchCountry()
  },[id])

  const fetchCountry=async()=>{
    const res=await fetch(`https://restcountries.com/v3.1/name/${id}`);
    const data= await res.json();
    setCountry(data);
    console.log(data)

  }
  
  return (
    <>
    {country.length > 0 ? (
  

        <section >
           <span>
           <BackButton/>
           </span>
          
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      <img
        className="object-cover object-center rounded"
        alt="hero"
        src={country[0].flags.svg}
        style={{border:"1px solid" }}
      />
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium  ">
        {country[0].name.common}
      </h1>
      <p className="mb-8 leading-relaxed text-2xl">
        Capital : {country[0].capital[0]}
      </p>
      <p className='text-1xl'>
      {/* Currency :{country[0].currencies.SHP.symbol} */}
      Currency :  {Object.values(country[0].currencies)[0].symbol} {Object.values(country[0].currencies)[0].name}
      </p>
      <p className='text-1xl'>
      Continent : {country[0].continents[0]}
      </p>
      <p className='text-1xl'>
      {/* Languages : {country[0].languages.eng} */}
      Languages : {Object.values(country[0].languages)[0]}
      </p>
      <p className='text-1xl'>
      Population in Millions : {country[0].population}
      </p>
      <p className='text-1xl'>
      Timezones : {country[0].timezones[0]}
      </p>
    
    </div>
  </div>
 
</section>

      ) : (
        <Loader/>
      )}

    </>


  )
}
export default CountryPage