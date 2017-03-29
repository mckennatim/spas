import React from 'react'
import ReactDOM from 'react-dom';
import Navigo from 'navigo'
import {templatize, setContent, render} from './funcs'
import {App, About, Products, Home} from './components'

const rtcfg ={root: null, useHash: true}
var router

const routing = (cfg)=>{
	router = new Navigo(cfg.root, cfg.useHash);
	router
	  .on({
	    'products': ()=> render(Products) ,
	    'products/:id': (params)=> render(Products, params) ,
	    'about': ()=> render(About),
	    '*': ()=> render(Home)
	  })
	  .resolve();
}

var vprops = {name: 'magillicutty'}

ReactDOM.render(<App {...vprops}/>, document.getElementById('app'))	
routing(rtcfg)

export{router}

