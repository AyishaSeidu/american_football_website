import React from 'react'
import styled from '@emotion/styled';
import {Menu, PhoneCall} from 'react-feather'

function Navbar() {
  return (
   <Bar>
       <MenuContainer> <Menu size={30}/></MenuContainer>

       <NavItems>
           <>
           <LeftNavItems>
               <Item>expert</Item>
               <Item>benefits</Item>
               <Item>testimonials</Item>
           </LeftNavItems>
           </>

<>
<RightNavItems>
               <Item>rates</Item>
               <Item>program</Item>
               <Item>contacts</Item>
           </RightNavItems>
</>

     
       </NavItems>
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
const NavItems = styled.div`
grid-area: navItems;
display: flex;
align-items: center;
justify-content: space-between;
width: 100%;
height: 100%;
`;

const LeftNavItems = styled.ul`
display: flex;
list-style: none;
//justify-content: space-between;
`;
const RightNavItems = styled.ul`
display: flex;
list-style: none;
justify-self: flex-end;
`;

const Item = styled.li`
display: flex;
margin: auto 1rem;
cursor: pointer;
:hover {
    border: 0.1rem solid red;
    font-size: 1.2rem;
}
`;