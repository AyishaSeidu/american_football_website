import styled from "@emotion/styled";

export const Section = styled.div`
grid-area: ${({sectionName})=>sectionName};
display: flex;
flex-direction: column;
height: 100%;
width: 100%;
border-left: 0.15rem solid black;
@media (max-width: 600px) {
height: 100vh;
border: none;
}
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


export const Value = styled.div`
display: flex;
flex-direction: column;
width: 90%;
height: 10rem;
background-color: black;
align-self: center;
color: white;
margin: auto;
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