import React from 'react'
import {pStyle} from '../styles'
import {getApps} from '../actions'

const style = {
	...pStyle, outer: {...pStyle.outer, background: '#FF9966'}
}
//pStyle.outer.background='#C4A265'

const parseQuery = (query)=>{
	var obj = {};
	query.split('&')
		.map((term)=>{
			var ar = term.split('=')
			obj[ar[0]]=ar[1]
		}
	)
	return obj
}

function Registered(props){
  console.log('in Registe5red')
  console.log(props)
  const query= props.responsive.page.params.query;
  var mobj = parseQuery(query)
  console.log(mobj)

  const handleGetApps=()=>{
  	console.log('handling get apps')
  	getApps(mobj)
  }

  return(
    <div style={style.outer} >
    	<h4>You Be Registered {mobj.email} </h4>
    	<button onClick={handleGetApps}>get your apps and devices</button>
    </div>
    )
}

export {Registered}
