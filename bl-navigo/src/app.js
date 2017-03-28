import Navigo from 'navigo'
import app_html from './app.html'
import {templatize, setContent, dog} from './funcs'

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
	    '*': ()=> comp('Home')
	  })
	  .resolve();
}

const init=()=>{
	setContent(app_templ, 'app')
	routing(rtcfg)
}

window.onload = init

window.goprod = ()=>{
	console.log('ducsss')
	router.navigate('/products/list');
}

dog('frog')