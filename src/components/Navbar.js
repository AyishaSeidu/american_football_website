import React from 'react'
import styled from '@emotion/styled';
import {Menu, PhoneCall} from 'react-feather'

function Navbar() {
  return (
   <Bar>
       <MenuContainer> <Menu size={30}/></MenuContainer>
       <PhoneContainer> <PhoneCall size={30}/></PhoneContainer>
   </Bar>
  )
}

export default Navbar;

const Bar = styled.div`
grid-area: nav;
width: 100%;
height: 100%;
border: 0.15rem solid black;
display: grid;
grid-template-columns: 5rem 1fr 5rem;
grid-template-areas: 'menu navItems call';

`;

const MenuContainer = styled.div`
grid-area: menu;
display: flex;
align-items: center;
justify-content: center;
margin: auto;
cursor: pointer;
border-right: 0.15rem solid black;
width: 100%;
height: 100%;
:hover {
    color: red;
}
`
const PhoneContainer = styled.div`
grid-area: call;
display: flex;
align-items: center;
justify-content: center;
margin: auto;
cursor: pointer;
border-left: 0.15rem solid black;
width: 100%;
height: 100%;
:hover {
    color: red;
}
`