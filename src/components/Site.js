import React from 'react'
import styled from '@emotion/styled';
import Navbar
 from './Navbar';
 import Content from './Content';

function Site() {
  return (
    <Canvas>
        <Container>
            <Navbar/>
            <Content/>
        </Container>
    </Canvas>
  )
}

export default Site

const Canvas = styled.div`
height: 100vh;
width: 100vw;
background-color: seashell;
display: flex;
`;

const Container = styled.div`
background-image: url("background.jpg");
font-size: 0.7rem;
text-align: left;
width: 90%;
height: 90%;
margin: auto auto 0rem auto; 
display: grid;
grid-template-rows: 4rem 1fr;
grid-template-areas: 
'nav'
'content';
color: gray;
padding: 1rem 1rem 0rem 1rem;
overflow: auto;

@media (max-width: 600px) {
  font-size: 1rem}
`;