import React from 'react';
import styled from "styled-components";

function Card(props) {
  return (
    <CardComponent>
      <h4>{props.cardTitle}</h4>
      <h1><span>$</span> {props.cardPrice}</h1>
      <PackageDetails>
        <p>{props.cardDetails[0]}</p>
        <p>{props.cardDetails[1]}</p>
        <p>{props.cardDetails[2]}</p>
      </PackageDetails>
      <button>Learn more</button>
    </CardComponent>
  )
}

export default Card;



const CardComponent = styled.div`

`

const PackageDetails = styled.div`

`