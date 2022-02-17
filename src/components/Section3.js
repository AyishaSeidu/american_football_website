import styled from '@emotion/styled';
import React from 'react';
import {Section} from './Style'

function Section3() {
  return (
    
<Section sectionName="section3" > 
<Container> 
  <Statistic>
<StatNumber> 20</StatNumber> 
<StatDescription> More than 20 video lessons with practical exercises</StatDescription> 
</Statistic>

<Statistic> 
<StatNumber> 24</StatNumber> 
<StatDescription> Access to course is available for another 24 months</StatDescription> 
</Statistic>

<Statistic> 
<StatNumber> 30</StatNumber>  
<StatDescription> 30 minutes a day is the minimum amount of time to complete the course</StatDescription> 
</Statistic>
</Container>

</Section>
  )
}

export default Section3;

const Container = styled.div`
height: 70%;
display: flex;
flex-direction: column;
justify-content: space-around;
`;


const Statistic = styled.div`
display: flex;
flex-direction: row;
align-items: center;
margin: auto;
width: 70%;
`;
const StatNumber = styled.span`
color: crimson;
font-size: 4rem;
font-weight: bold;
margin-right: 1rem;
`;
const StatDescription = styled.span`
font-weight: bold;
`