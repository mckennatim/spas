import React from 'react';
import {store} from '../store'
import {mapPropsToElement} from '../funcs'


function El3(props){
	console.log('in el3')
	console.log(props)
	return(
			<h4>OK Now El3 {props.name}</h4>				
		)
}

export {El3}