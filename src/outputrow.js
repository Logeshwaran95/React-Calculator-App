import React, { Component } from 'react'
import './outputrow.css';

const Outputrow = props =>{
    return(
        <div>
            <input type="text" readOnly className="screen" style={props.textsize} value={props.value}></input>
        </div>
    )
}
export default Outputrow
