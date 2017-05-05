import React from 'react'
import {getUrApps} from '../actions';
import {pStyle} from '../styles'
import env from '../../env.json'
var cfg= env[process.env.NODE_ENV||'development']

const style = {
	...pStyle, outer: {...pStyle.outer, background: '#FF9966'}
}
//pStyle.outer.background='#C4A265'

const Registered=(props)=>{
  console.log('in Registered')
  console.log(props.responsive.page.params)
  const params= props.responsive.page.params;
  localStorage.setItem(cfg.appid, params.token)


  function handleGetUrApps(){
		console.log("in get ur apps")
		getUrApps(params.email)
	}
  return(
    <div style={style.outer} ><h4>You Be Registered {params.email} </h4>
			<button id="but" onClick={handleGetUrApps}>get your apps</button>
    </div>
    )
}

export {Registered}
