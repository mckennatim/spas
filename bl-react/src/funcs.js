import React from 'react';

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

export {dog, mapPropsToElement, showRt}