
import React, { useState,useEffect} from 'react';
import { FaMoon,FaSun} from "react-icons/fa";

function ChangeMode() {

  const[darkMode,setDarkMode]=useState(false)

  const handleTheme=()=>{
    
    setDarkMode(!darkMode)

    darkMode?(document.body.style.backgroundColor="white"):(document.body.style.backgroundColor="black")

    if(document.body.style.backgroundColor==="black"){
      document.body.style.color="white"
    }else{
      document.body.style.color="black"
    }
   
  }

  return (
    <>
      <button onClick={handleTheme}>
        {darkMode?<FaSun className='text-yellow-500' size={25} />:<FaMoon size={25} className='text-white' />
        }
      </button>
    </>
  );
}

export default ChangeMode;