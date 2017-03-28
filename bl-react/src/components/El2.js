import React from 'react';
import {store} from '../store'
import {mapPropsToElement} from '../funcs'


function El2(props){
	return(
			<h4>OK Now El2 {props.name}</h4>				
		)
}

const mapStoreToProps= (store) => ({
		name: 'not realy a duck'
	})

El2 = mapPropsToElement(El2)(mapStoreToProps(store))

export {El2}