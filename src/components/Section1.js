import React from 'react';
import styled from '@emotion/styled';
import {Codesandbox} from  'react-feather';
import {Section,BoldDescription, NormalText, RedCircle, Values, ValueDescription, ValueIcon, ValueName, ValueNumber} from './Style'

function Section1() {
  return (
    <Section style={{borderLeft: 0}}> 
<BoldDescription> Become a football star with prof. world class player</BoldDescription>
<NormalText> Complete the first stage of the path to your dream of a football career. 
Learn all the basic elements of football and get the opportunity to win
personal training with <Name>Alex</Name> </NormalText>

<RedCircle> Become a soccer star</RedCircle>

<Values>
<ValueNumber> 01 </ValueNumber>
 <ValueIcon>
     <Codesandbox size={40}/>
 </ValueIcon>
<ValueName > Self Improvement</ValueName>
<>
<ValueDescription> Every footballer getting</ValueDescription>
<ValueDescription> better version of myself</ValueDescription>
</>
</Values>

</Section>

  )
}

export default Section1;

const Name = styled.span`
font-weight: bold;
font-size: 1.1rem;
text-decoration: underline;
:after {
    content: ' \\2197';
    text-decoration: none;
}
`;