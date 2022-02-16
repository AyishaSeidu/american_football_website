import styled from '@emotion/styled'
import React from 'react';
import Section1 from './Section1';
import Section2 from './Section2';
import Section3 from './Section3';


function Content() {
  return (
    <Container>

<Section1/>
<Section2/>
<Section3/>


    </Container>
  )
}

export default Content

const Container = styled.div`
color: rgba(0,0,0,0.7);
grid-area: content;
width: 100%;
height: 100%;
display: grid;
grid-template-columns: 1fr 1fr 1fr;
grid-template-areas: 'section1 section2 section3';
border: 0.15rem solid black;
border-top: 0rem;
overflow-y: auto;
`;