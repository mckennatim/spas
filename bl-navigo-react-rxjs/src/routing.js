import Navigo from 'navigo'
import {render} from './funcs'
import {About, Products, Home, Dog} from './components'

import { changePage} from './actions';

var router

const routing = ()=>{
	const cfg ={root: null, useHash: true}
	router = new Navigo(cfg.root, cfg.useHash);
	router
	  .on({
	    'products': ()=> changePage(Products) ,
	    'products/:id': (params)=> changePage({pg: Products, params: params}),
	    'products/:id/:inv': (params)=> changePage({pg: Products, params: params}),
	    'about': ()=> changePage(About),
	    'dog': ()=>changePage(Dog),
	    '*': ()=> changePage(Home)
	  })
	  .resolve();
	return router  
}

export {routing}