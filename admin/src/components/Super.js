import React from 'react'
import {pStyle} from '../styles'
const style = {
	...pStyle, outer: {...pStyle.outer, background: '#C4A265'}
}
pStyle.outer.background='#C4A265'

function Super(props){
	console.log(props)
  const { name } = props;
  const setupNewDevice=()=>{
  	console.log('setting up new device')
  }
  return(
    <div style={style.outer} >
    	<h4>in doSuper {name} </h4>
    	<button onClick={setupNewDevice}>setup new device</button>
    </div>
    )
}

export {Super}