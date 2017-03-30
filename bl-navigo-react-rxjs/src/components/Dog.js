import React from 'react'
import {pStyle} from '../styles'

function Dog(props){
  console.log('in do dog')
  const { name } = props;
  return(
    <div style={pStyle.outer} ><h4>in doDog {name} </h4></div>
    )
}

export {Dog}
