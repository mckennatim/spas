import React from	'react'
import {get} from '../funcs'
import {loadGithubFollowers} from '../actions'

const Products = (props) =>{
	const renderUsers=(users)=> {
	  if (!users) return;
	  return (
	    <ul>{ users.map((user, index) => <li key={index}>{user}</li>) }</ul>
	  );
	}

	const ckProps=()=>{
		if(!props.id){
			console.log('no params')
			//loadGithubFollowers('ryardley')
		}
	}
	ckProps()
	return(
		<div>
			<h3> Products {props.id} {props.inv}</h3>
			{renderUsers(props.users)}
		</div>
	)
}

export{Products}