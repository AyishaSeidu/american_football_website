import React from 'react';
import styled from '@emotion/styled';
import {Value, ValueNumber, ValueIcon, ValueName, ValueDescription} from './Style';
import {Codesandbox, Triangle, Square} from  'react-feather';

function Values() {
  return (
    <ValuesContainer>
        <>
        <Value >
<ValueNumber> 01 </ValueNumber>
 <ValueIcon>
     <Codesandbox size={40}/>
 </ValueIcon>
<ValueName > Self Improvement</ValueName>
<ValueDescription> Every footballer getting</ValueDescription>
<ValueDescription> better version of myself</ValueDescription>
</Value>
        </>


<>

<Value >
<ValueNumber> 02 </ValueNumber>
 <ValueIcon>
     <Triangle size={40}/>
 </ValueIcon>
<ValueName > Originality</ValueName>
<>
<ValueDescription>  We appreciate and develop </ValueDescription>
<ValueDescription> individual characteristics footballer</ValueDescription>
</>
</Value>

</>

<>
<Value>
<ValueNumber> 03 </ValueNumber>
 <ValueIcon style={{transfrom: "rotate(60deg)"}}>
     <Square size={40}/>
 </ValueIcon>
<ValueName > Purposeful</ValueName>
<>
<ValueDescription>  Every footballer is constantly </ValueDescription>
<ValueDescription> sets new goals and achieve them</ValueDescription>
</>
</Value>
</>


    </ValuesContainer>
  )
}

export default Values;

const ValuesContainer = styled.div`
grid-area: values;
width: 100%;
display: grid;
grid-template-columns: repeat(3, 1fr);

`;