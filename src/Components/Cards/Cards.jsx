import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const CountryCard = (props) => {
const{data:{name:{common},capital,continents,flags:{svg}}}=props
// console.log(svg)
  return (
    <StyledWrapper>
      <Link to={`/${common}`}  style={{textDecoration:"none"}}>
      <div className="card">
        <img src={svg} alt="flag" className='mt-2  max-h-36 min-w-full'/>
        <p className='text-2px font-bold'>{common}</p>
        <p className='text-2xl'>Capital:{capital}</p>
        <p>continent:{continents}</p>
      </div>
      </Link>
      
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .card {
    box-sizing: border-box;
    width: 250px;
    height: 300px;
    background: rgba(217, 217, 217, 0.58);
    border: 1px solid white;
    box-shadow: 12px 17px 51px rgba(0, 0, 0, 0.22);
    backdrop-filter: blur(6px);
    border-radius: 17px;
    text-align: center;
    cursor: pointer;
    transition: all 0.5s;
    display: flex;
    // align-items: center;
    // justify-content: center;
    user-select: none;
    // font-weight: bolder;
    color: black;
  }
    

  .card:hover {
    border: 1px solid black;
    transform: scale(1.05);
  }

  .card:active {
    transform: scale(0.95) rotateZ(1.7deg);
  }`;

export default CountryCard;
