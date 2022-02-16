import React from 'react';
import {Square} from  'react-feather';
import {Section,BoldDescription, NormalText, RedCircle, Values, ValueDescription, ValueIcon, ValueName, ValueNumber} from './Style'

function Section3() {
  return (
    
<Section sectionName="section3" > 
<div> 
<span> 20</span> 
<span> More than 20 video lessons with practical exercises</span> 
</div>
<div> 
<span> 24</span> 
<span> Access to course is available for another 24 months</span> 
</div>
<div> 
<span> 30</span> 
<span> 30 minutes a day is the minimum amount of time to complete the course</span> 
</div>

<Values>
<ValueNumber> 03 </ValueNumber>
 <ValueIcon>
     <Square size={50}/>
 </ValueIcon>
<ValueName > Purposeful</ValueName>
<>
<ValueDescription>  Every footballer is constantly </ValueDescription>
<ValueDescription> sets new goals and achieve them</ValueDescription>
</>
</Values>
</Section>
  )
}

export default Section3