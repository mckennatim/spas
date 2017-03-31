import Navigo from 'navigo'
import {render} from './funcs'
import {About, Products, Home, Dog} from './components'
import { changePage, switchPage} from './actions';

var router

const routing = ()=>{
	const cfg ={root: null, useHash: true}
	router = new Navigo(cfg.root, cfg.useHash);
	router
	  .on({
	    'products': ()=> {switchPage({name: 'Products', params: {}});} ,
	    'products/:id': (params)=>{switchPage({name: 'Products', params: params});},
	    'products/:id/:inv': (params)=>{switchPage({name: 'Products', params: params});},
	    'about': ()=>{switchPage({name: 'About', params: {}});},
	    'dog': ()=>{switchPage({name: 'Dog', params: {}});},
	    '*': ()=>{switchPage({name: 'Home', params: {}});}
	  })
	  .resolve();
	return router  
}

export {routing}