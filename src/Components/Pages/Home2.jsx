// src/components/HomePage.js
import React from 'react';
import CountryCard from '../Cards/Cards';
import NavBar from '../Hearder/Header';
import NavBar2 from '../Hearder/NavBar2';

const Home2 = () => {
    // const [counteries,setCountries]=useState([]);
    // useEffect(()=>{
    //     fecthData()
    // },[])

    // const fecthData= async()=>{
    //     const res=await fetch("https://restcountries.com/v3.1/all");
    //     const data=await res.json();
    //     setCountries(data)
    // }
    return (
        
        <div>
            <NavBar/>
            {/* <NavBar2/> */}

            <CountryCard/>
            <CountryCard/>
            <CountryCard/>
            <CountryCard/>
            <CountryCard/>
            <CountryCard/>
       
     
    </div>
    );
};

const homeStyle = {
    padding: '20px',
    textAlign: 'center',
    
};

export default Home2;