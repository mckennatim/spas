import React from 'react'
import {pStyle} from '../styles'
const style = {
	...pStyle, outer: {...pStyle.outer, background: '#FF9966'}
}
//pStyle.outer.background='#C4A265'

function Registered(props){
  console.log('in Registe5red')
  console.log(props)
  const email= props.responsive.page.params.email;
  return(
    <div style={style.outer} ><h4>You Be Registered {email} </h4></div>
    )
}

export {Registered}
