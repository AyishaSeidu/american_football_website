import React, {useState} from 'react'
import styled from '@emotion/styled';
import {css, keyframes} from '@emotion/react';
import {Menu, PhoneCall} from 'react-feather';

function Navbar() {

    
    const [showMobilMenu, setShowMobilMenu] = useState(false);

  return (

   <Bar>
       <MenuContainer> 
           
           <Menu size={30} onClick = {(e)=>{e.preventDefault(); setShowMobilMenu(!showMobilMenu)}}/></MenuContainer>

       <NavItems show= {showMobilMenu}>
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

       <MobileNavItems show = {showMobilMenu}>
               <Item>expert</Item>
               <Item>benefits</Item>
               <Item>testimonials</Item>
               <Item>rates</Item>
               <Item>program</Item>
               <Item>contacts</Item>     
       </MobileNavItems>

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
color: rgba(0,0,0,0.8);
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


@media (max-width: 600px) {
    display: none;
}
`;

const LeftNavItems = styled.ul`
display: flex;
list-style: none;

@media (max-width: 600px)  {
    display: block;
}

`;
const RightNavItems = styled.ul`
display: flex;
list-style: none;
justify-self: flex-end;
@media (max-width: 600px)  {
   disolay: block;
}

`;

const showMobileNavAnimation = keyframes`
0% {
    transform: translateX(-20rem);
}
100% {
    transform: translateX(1rem);

};
`;

const MobileNavItems = styled.div`
display: none;
@media (max-width: 600px) {
    grid-area: navItems;
    ${({show})=> show===true && css`
    display: inherit;
    flex-direction: column;
    position: fixed;
    width: 80vw;
    height: 70vh;
    justify-content: center;
    z-index: 1;
    color: black;
    //background-image: url("background.jpg");
    background-color: seashell;
    margin-top: 4.1rem;
    animation: ${showMobileNavAnimation} 1.5s ease-in;
`
}

}
`;

const Item = styled.li`
display: flex;
margin: auto 1rem;
cursor: pointer;
font-size: 0.8rem;
:hover {
    border: 0.1rem solid red;
    font-size: 1.2rem;
}
`;