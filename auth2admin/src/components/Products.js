import React from	'react'
import {get} from '../utilities'
import {pStyle} from '../styles'
const style = {
	...pStyle, outer: {...pStyle.outer, background: '#99FF99'}
}

const Products = (props) =>{

	const renderProducts=()=> {
		if(get('props.responsive.page.params', props)){
			return(
				<div>
				<h3> Product</h3>
				<h4>pruduct ID: {props.responsive.page.params.id} description: {props.responsive.page.params.inv}</h4>
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

	return(
		<div style={style.outer}>
			{renderProducts()}
		</div>
	)
}

export{Products}