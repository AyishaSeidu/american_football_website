import React from 'react';
import styled from '@emotion/styled';
import {Section} from './Style'

function Section2() {
  return (
    <Section sectionName="section2"> 

<CompanyNameContainer>
  <Name>
    <span>A</span>
    <span>M</span>
    <span>E</span>
    <span>R</span>
    <span>I</span>
    <span>C</span>
    <span>A</span>
    <span>N</span>
  </Name>
  <Name>
    <span>F</span>
    <span>O</span>
    <span>O</span>
    <span>T</span>
    <span>B</span>
    <span>A</span>
    <span>L</span>
    <span>L</span>
  </Name></CompanyNameContainer>

</Section>
  )
}

export default Section2

const CompanyNameContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: left;
width: 95%;
height: 100%;
background-color: black;
margin: 0.5rem;
`;

const Name = styled.span`
display: flex;
justify-content: space-around;
align-self: left;
width: 100%;
height: 30%;
font-size: 4rem;
color: white;
font-weight: bold;
//margin: 0.5rem;
//padding: 0.5rem;
`;