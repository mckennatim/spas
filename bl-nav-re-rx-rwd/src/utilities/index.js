import React from 'react'
import ReactDOM from 'react-dom';
import { Observable } from 'rxjs/Observable';

const get=(path, props)=>{
  return path.split(".")
  	.slice(1)
  	.reduce((xs,x)=>(xs && xs[x]) ? xs[x] : null , props)
}

const isObservable = obs => obs instanceof Observable;

const log = console.log.bind(console);

function el(id){
	return document.getElementById(id)
}

const dog = (cat)=>{
	console.log(cat)
	return 'girl'
}

const render = (pg, para)=>{
  ReactDOM.render(React.createElement(pg, para), document.getElementById('rt')) 
}



export {get, dog, render, isObservable, log}