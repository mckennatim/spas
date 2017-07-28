import React from 'react'
import ReactDOM from 'react-dom';
import { Observable } from 'rxjs/Observable';
var Main = require('./components/Main');

window.onblur = ()=>{
	console.log('in Main disconnect')
	//disconnect()
}

window.onfocus = ()=>{
	console.log('window on focus')
	//console.log(window.location.hash)
	//reconnect(window.location.hash)
}

const container = document.getElementById('app');
ReactDOM.render(<Main  />, container)
