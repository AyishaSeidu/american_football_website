import React from 'react';
import styled from '@emotion/styled';
import {Triangle} from  'react-feather';
import {Section, Values, ValueDescription, ValueIcon, ValueName, ValueNumber} from './Style'

function Section2() {
  return (
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
  )
}

export default Section2