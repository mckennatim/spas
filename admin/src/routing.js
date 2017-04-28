import Navigo from 'navigo'
import {About, Products, Home, Dog} from './components'
import { changePage, switchPage} from './actions';

var router

const routing = ()=>{
	const cfg ={root: null, useHash: true}
	router = new Navigo(cfg.root, cfg.useHash);
	router
	  .on({
	    'products': ()=> {switchPage({name: 'Products', params: null});} ,
	    'products/:id': (params)=>{switchPage({name: 'Products', params: params});},
	    'products/:id/:inv': (params)=>{switchPage({name: 'Products', params: params});},
	    'about': ()=>{switchPage({name: 'About', params: null});},
	    'dog': ()=>{switchPage({name: 'Dog', params: null});},
	    'registered': (params, query)=>{
	    	console.log(params)
	    	console.log(query)
	    	switchPage({name: 'Registered', params: {email: query}});
	    },
	    '*': ()=>{switchPage({name: 'Home', params: null});}
	  })
	  .resolve();
	return router  
}

export {routing}