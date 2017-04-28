import React from 'react'
import {getUrApps} from '../actions';
import {pStyle} from '../styles'
const style = {
	...pStyle, outer: {...pStyle.outer, background: '#FF9966'}
}
//pStyle.outer.background='#C4A265'

const Registered=(props)=>{
  console.log('in Registe5red')
  console.log(props)
  const email= props.responsive.page.params.email;
  function handleGetUrApps(){
		console.log("in get ur apps")
		getUrApps(email)
	}
  return(
    <div style={style.outer} ><h4>You Be Registered {email} </h4>
			<button id="but" onClick={handleGetUrApps}>get your apps</button>
    </div>
    )
}

export {Registered}
