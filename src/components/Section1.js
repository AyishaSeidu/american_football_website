import React from 'react';
import styled from '@emotion/styled';
import {Section,BoldDescription, NormalText, RedCircle} from './Style'

function Section1() {
  return (
    <Section sectionName="section1" style={{borderLeft: 0}}> 

    <DescriptionContainer>
<BoldDescription> Become a football star with prof. world class player</BoldDescription>
<NormalText> Complete the first stage of the path to your dream of a football career. 
Learn all the basic elements of football and get the opportunity to win
personal training with <Name>Alex</Name> </NormalText>

<RedCircle> Become a soccer star</RedCircle>
</DescriptionContainer>

</Section>

  )
}

export default Section1;

const Name = styled.span`
font-weight: bold;
font-size: 1.1rem;
text-decoration: underline;
cursor: pointer;
:after {
    content: ' \\2197';
    text-decoration: none;
}
:hover {
  font-size: 1.2rem;
}
`;

const DescriptionContainer = styled.div`
height: 70%;
display: flex;
flex-direction: column;
justify-content: space-around;
`;