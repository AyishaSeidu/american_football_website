import React from 'react';
import styled from '@emotion/styled';
import {Triangle} from  'react-feather';
import {Section, Values, ValueDescription, ValueIcon, ValueName, ValueNumber} from './Style'

function Section2() {
  return (
    <Section sectionName="section2"> 

<CompanyName>
  <span>AMERICAN</span>
  <span>FOOTBALL</span>
</CompanyName>

</Section>
  )
}

export default Section2

const CompanyName = styled.div`
display: flex;
flex-direction: column;
justify-content: space-around;
text-align: left;
font-size: 6vw;
color: white;
font-weight: bold;
width: 95%;
height: 70%;
background-color: black;
margin: 0.5rem auto;
letter-spacing: 0.5rem;
`;