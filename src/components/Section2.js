import React from 'react';
import styled from '@emotion/styled';
import {Triangle} from  'react-feather';
import {Section, Values, ValueDescription, ValueIcon, ValueName, ValueNumber} from './Style'

function Section2() {
  return (
    <Section sectionName="section2"> 

<CompnanyName>
  <div>AMERICAN</div>
  <div>FOOTBALL</div>
</CompnanyName>
<Values>
<ValueNumber> 02 </ValueNumber>
 <ValueIcon>
     <Triangle size={50}/>
 </ValueIcon>
<ValueName > Originality</ValueName>
<>
<ValueDescription>  We appreciate and develop </ValueDescription>
<ValueDescription> individual characteristics footballer</ValueDescription>
</>
</Values>
</Section>
  )
}

export default Section2

const CompnanyName = styled.div`
display: flex;
flex-direction: column;
justify-content: space-around;
font-size: 7rem;
color: white;
font-weight: bold;
width: 95%;
height: 70%;
background-color: black;
margin: 1rem auto;
`;