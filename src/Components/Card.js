import React from 'react';
import styled from "styled-components";


function Card(props) {
  return (
    <CardComponent highlited={props.highlightCard}>
      <h4>{props.cardTitle}</h4>
      <h1><span>$</span>{props.cardPrice}</h1>
      {/* ================== Package details component. ================== */}
      <PackageDetails highlited={props.highlightCard}>
        <p>{props.cardDetails[0]}</p>
        <p>{props.cardDetails[1]}</p>
        <p>{props.cardDetails[2]}</p>
      </PackageDetails>

      <button>Learn more</button>
    </CardComponent>
  )
}

export default Card;



// ================== Card component.
const CardComponent = styled.div`
  background: ${({highlited}) => (highlited ? 'rgb(163,168,240)' : "#ffffff")} ;
  background: ${({highlited}) => (highlited ? 'linear-gradient(148deg, rgba(163,168,240,1) 0%, rgba(105,111,221,1) 62%)' : "#ffffff")} ;
  width: min(85%, 350px);
  margin: 1rem auto;
  padding: 2.5rem 1.5rem 2rem;
  border-radius: 10px;
  box-shadow: ${({highlited}) => (highlited ? "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px" : "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px")};

  @media (min-width: 1000px) {
    margin: 0;
    padding: ${({highlited}) => (highlited ? "3.5rem 1.5rem" : "2.5rem 1.5rem")};
  }


  // ========= h4.
  h4 {
    color: ${({highlited}) => (highlited ? "#ffffff" : "var(--grayish-blue)")};
    font-size: 14px;
    letter-spacing: 0.5px;
    text-transform: capitalize;

    @media (min-width: 768px) {
      font-size: 15px;
    }
  }


  // ========= h1.
  h1 {
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${({highlited}) => (highlited ? "#ffffff" : "var(--dark-grayish-blue)")};
    font-size: 55px;
    margin: 1.7rem 0;

    span {
      font-size: 30px;
      margin-right: 0.1rem;
    }
  }


  // ========= button.
  button {
    width: 100%;
    height: 40px;
    background: ${({highlited}) => (highlited ? "#ffffff" : 'rgb(163,168,240)')};
    background: ${({highlited}) => (highlited ? "#ffffff" : 'linear-gradient(90deg, rgba(163,168,240,1) 0%, rgba(105,111,221,1) 55%)')};
    color: ${({highlited}) => (highlited ? '#696fdd' : "#ffffff")};
    margin: 1.5rem 0 0;
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 1px;
    border: 1px solid transparent;
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.35s ease-in-out;

    &:hover {
      background: transparent;
      border: ${({highlited}) => (highlited ? "1px solid #ffffff" : "1px solid rgba(105,111,221,1)")};
      color: ${({highlited}) => (highlited ? "#ffffff" : "rgba(105,111,221,1)")};
    }
  }
`


// ================== Package details component.
const PackageDetails = styled.div`
  p {
    color: ${({highlited}) => (highlited ? "#ffffff" : "var(--grayish-blue)")};
    font-size: 13px;
    letter-spacing: 0.5px;
    padding: 1rem 0;
    border-bottom: 1px solid #e2e2eb;

    &:first-of-type {
      border-top: 1px solid #e2e2eb;
    }
  }
  
`