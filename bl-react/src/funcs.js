import React from 'react';
import { Observable } from 'rxjs/Observable';

const isObservable = obs => obs instanceof Observable;
const log = console.log.bind(console);

const dog = (cat)=>{
	console.log(cat)
	return 'girl'
}

function mapPropsToElement(anElement){
	return (props)=>{
		console.log(props)
    var el = React.createElement(anElement, props)
    return el		
	}
}

function showRt(el){
	return el
}

export {isObservable, log,dog, mapPropsToElement, showRt}