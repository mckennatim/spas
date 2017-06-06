import Navigo from 'navigo'
import {About, Products, Home, Dog} from './components'
import { changePage, switchPage} from './actions';

var router

function getParameterByName(name, query) {
		var query='&'+query
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(query);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

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
	    	console.log(query)
	    	const email = getParameterByName("email", query)
	    	const token = getParameterByName("token", query)
	    	switchPage({name: 'Registered', params: {email: email, token: token}});
	    },
	    '*': ()=>{switchPage({name: 'Home', params: null});}
	  })
	  .resolve();
	return router  
}

export {routing}