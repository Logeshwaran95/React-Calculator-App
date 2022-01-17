import React from 'react';
import Outputrow from './outputrow';

const Output = props => {
return(
    <div>
        <Outputrow value={props.answer} textsize={{fontsize:"20px"}}></Outputrow>
        <Outputrow value={props.user} ></Outputrow>
    </div>
)
}  
export default Output;