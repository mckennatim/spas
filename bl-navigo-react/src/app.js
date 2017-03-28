import Navigo from 'navigo'
import React from 'react';
import ReactDOM from 'react-dom';
import app_html from './app.html'
import {templatize, setContent, dog} from './funcs'

var store={
	name: "Jean Marie",
	dog: 'Fred',
	duck: 'quak'
}

function Welcom(props){
	return(
			<h5>welcom {props.name}</h5>				
		)
}

function rtpg(props){
	return(
			<h5>rtpg</h5>				
		)
}

function mapStoreToProps(store){
		console.log(store)
		return {name: store.name}
}

function mapPropsToElement(anElement){
	return (props)=>{
		console.log(props)
    var el = React.createElement(anElement, props)
    return el		
	}
}

Welcom = mapPropsToElement(Welcom)(mapStoreToProps(store))
//console.log(Welcom(nprops()))
var rtpg = React.createElement(rtpg,{})

function changeEl(nel){
	rtpg = nel
	console.log(rtpg)
	console.log('no rtpg')
	return rtpg
}



const comp = (cont)=>{
	var id = 'rt'
	return setContent(cont,id)
}

const app_templ = templatize(app_html)({dog: "Ulysses"}) 
//console.log(app_templ)

const rtcfg ={root: null, useHash: true}
var router

const routing = (cfg)=>{
	router = new Navigo(cfg.root, cfg.useHash);
	router
	  .on({
	    'products': ()=> comp('Products') ,
	    'products/:id': (params)=> comp('A product ' +params.id) ,
	    'about': ()=> comp('About'),
	    'welcom': ()=> changeEl(Welcom),
	    '*': ()=> comp('Home')
	  })
	  .resolve();
}

const App = (props) =>{
	return(
		<div id="nav">
			<h3>bl-navigo-react is a </h3>
			<div id="menu"> 
				<a href="about" data-navigo>about</a>
				<a href="welcom" data-navigo>welcom</a>
				<a href="products" data-navigo>products</a>
				<a href="products/333" data-navigo>a product</a>
				<button id="but" onClick={goprod()}>goto products</button>
			</div><br/>
			<hr/>
			<div id="rt"></div>
			{changeEl}
		</div>
)}



const init=()=>{

	routing(rtcfg)
}

const container = document.getElementById('app');
ReactDOM.render(<App />, container)

window.onload = init

function goprod(){
	console.log('ducsss')
	//router.navigate('/products/list');
}

dog('frog')


