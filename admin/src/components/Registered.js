import React from 'react'
import ReactDOM from 'react-dom'
import {pStyle} from '../styles'
import {getApps} from '../actions'
import {getCfg, ls, parseQuery} from '../utilities'

const cfg = getCfg()

const style = {
	...pStyle, outer: {...pStyle.outer, background: '#FF9966'}
}
pStyle.outer.background='#C4A265'

// const parseQuery = (query)=>{
// 	var obj = {};
// 	query.split('&')
// 		.map((term)=>{
// 			var ar = term.split('=')
// 			obj[ar[0]]=ar[1]
// 		}
// 	)
// 	return obj
// }
console.log('RUNNING FILE')

function Registered(props){
  //console.log('in Registe5red')
  // console.log(props)

  const query= props.responsive.page.params.query;
  var mobj = parseQuery(query)
  
  console.log('RUNNING Registered')
  ls.addToSet(mobj)

  const handleGetApps=()=>{
  	console.log('handling get apps')
    // ls.deleteToken('tim2@sitebuilt.net')
    // console.log(ls.getItem())
  	getApps(mobj)
  }

  return(
    <div style={style.outer} >
    	<h4>You Be Registered {mobj.email} </h4>
    	<button onClick={handleGetApps}>get your apps and devices</button>
      <span></span>
    </div>
    )
}

export {Registered}
