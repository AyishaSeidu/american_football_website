import styled from '@emotion/styled'
import React from 'react'

function Site() {
  return (
    <Canvas>
        <Container></Container>
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
// background-repeat: no-repeat;
// background-size: cover;
width: 90%;
height: 90%;
margin: auto auto 0rem auto; 
display: grid;
grid-template-rows: 4rem 1fr;
grid-template-areas: 
'nav'
'details';

padding: 1rem 1rem 0rem 1rem;
`;