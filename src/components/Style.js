import styled from "@emotion/styled";

export const Section = styled.div`
grid-area: ${({sectionName})=>sectionName};
display: flex;
flex-direction: column;
max-height: 100%;
width: 100%;
justify-content: space-around;
border-left: 0.15rem solid black;
`;

export const BoldDescription = styled.div`
font-weight: bold;
font-size: 1rem;
width: 80%;
margin: 2rem auto;
`
export const NormalText = styled.span`
width: 80%;
margin: 0 auto;
`
export const Name = styled.span`
font-weight: bold;
font-size: 1.1rem;
text-decoration: underline;
:after {
    content: ' \\2197';
    text-decoration: none;
}
`;

export const RedCircle = styled.div`
display: flex;
align-items: center;
background-color: crimson;
border: 0.1rem solid crimson;
border-radius: 50%;
width: 4rem;
height:4rem;
font-size: 0.6rem;
color: white;
margin: 1rem;
padding: 0.2rem;
text-align: center;
transform: rotate(-30deg)
`;

export const Values = styled.div`
grid-area: ${({value})=>value};
display: flex;
flex-direction: column;
width: 90%;
height: 10rem;
background-color: black;
align-self: center;
color: white;
margin: 0rem auto;
justify-content: space-between;
align-self: flex-end;
align-items: center;
`;

export const ValueNumber = styled.span`
display: flex;
align-self: flex-start;
padding: 0.5rem;
color: grey;
`;
export const ValueIcon = styled.span`
color: crimson;
top: 0;
`;
export const ValueName = styled.span`
font-weight: bold;
`;

export const ValueDescription = styled.span`
font-size: 0.7rem;
color: grey;
padding-bottom: 0.5rem;
`;