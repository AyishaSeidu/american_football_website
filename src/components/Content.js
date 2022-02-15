import styled from '@emotion/styled'
import React from 'react';
import {Codesandbox, Triangle, Square} from 'react-feather'

function Content() {
  return (
    <Container>

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

<Section sectionName='s2'> 
<div>AMERICAN FOOTBAL</div>
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

<Section> 
<div> 
<span> 20</span> 
<span> More than 20 video lessons with practical exercises</span> 
</div>
<div> 
<span> 24</span> 
<span> Access to course is available for another 24 months</span> 
</div>
<div> 
<span> 30</span> 
<span> 30 minutes a day is the minimum amount of time to complete the course</span> 
</div>

<Values>
<ValueNumber> 03 </ValueNumber>
 <ValueIcon>
     <Square size={50}/>
 </ValueIcon>
<ValueName > Purposeful</ValueName>
<>
<ValueDescription>  Every footballer is constantly </ValueDescription>
<ValueDescription> sets new goals and achieve them</ValueDescription>
</>
</Values>
</Section>

    </Container>
  )
}

export default Content

const Container = styled.div`
color: rgba(0,0,0,0.7);
grid-area: content;
width: 100%;
height: 100%;
display: flex;
border: 0.15rem solid black;
border-top: 0rem;

`;

const Section = styled.div`
display: flex;
flex-direction: column;
max-height: 100%;
width: 100%;
justify-content: space-around;
border-left: 0.15rem solid black;
//border-bottom: 0.15rem solid black;

`;

const BoldDescription = styled.div`
font-weight: bold;
font-size: 1.5rem;
width: 80%;
margin: 2rem auto;
`
const NormalText = styled.span`
width: 80%;
margin: 0 auto;
`
const Name = styled.span`
font-weight: bold;
font-size: 1.1rem;
text-decoration: underline;
:after {
    content: ' \\2197';
    text-decoration: none;
}
`;

const RedCircle = styled.div`
display: flex;
align-items: center;
background-color: crimson;
border: 0.1rem solid crimson;
border-radius: 50%;
width: 20%;
height:5rem;
color: white;
margin: 1rem;
padding: 0.2rem;
font-size: 0.7rem;
transform: rotate(-30deg)
`;

const Values = styled.div`
display: flex;
flex-direction: column;
width: 90%;
height: 10rem;
background-color: black;
align-self: center;
color: white;
margin: auto;
justify-content: space-between;
justify-self: flex-end;
`;

const ValueNumber = styled.span`
display: flex;
align-self: flex-start;
padding: 0.2rem;
color: grey;
`;
const ValueIcon = styled.span`
color: crimson;
`;
const ValueName = styled.span``;

const ValueDescription = styled.span`
font-size: 0.7rem;
color: grey;
`;