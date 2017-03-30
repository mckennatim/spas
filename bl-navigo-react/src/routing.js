import Navigo from 'navigo'
import {render} from './funcs'
import {About, Products, Home} from './components'

var router

const routing = ()=>{
	const cfg ={root: null, useHash: true}
	router = new Navigo(cfg.root, cfg.useHash);
	router
	  .on({
	    'products': ()=> render(Products) ,
	    'products/:id': (params)=> render(Products, params) ,
	    'about': ()=> render(About),
	    '*': ()=> render(Home)
	  })
	  .resolve();
	return router  
}

export {routing}