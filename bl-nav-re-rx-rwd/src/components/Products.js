import React from	'react'
import {get} from '../funcs'
import {pStyle} from '../styles'
const style = {
	...pStyle, outer: {...pStyle.outer, background: '#99FF99'}
}

const Products = (props) =>{

	const renderProducts=()=> {
		if(hayParams()){
			return(
				<div>
				<h3> Product</h3>
				<h4>pruduct ID: {props.id} description: {props.inv}</h4>
		    </div>
		  ); 
		} else {
			return(
				<div>
				<h3> Products</h3>
		    <ul>{ props.test.users.map((user, index) => <li key={index}>{user}</li>) }</ul>
		    </div>
		  ); 
		}
	}

	const hayParams=()=>{
		if(get('props.id', props)){
			return true
		}else {
			return false
		}
	}
	hayParams()
	return(
		<div style={style.outer}>
			{renderProducts()}
		</div>
	)
}

export{Products}