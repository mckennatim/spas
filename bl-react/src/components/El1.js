import React from 'react';
import {store} from '../store'
import {mapPropsToElement} from '../funcs'


function El1(props){
	return(
			<h5>El1 {props.name}</h5>				
		)
}

const mapStoreToProps= (store) => ({
		name: store.duck
	})

El1 = mapPropsToElement(El1)(mapStoreToProps(store))

export {El1}