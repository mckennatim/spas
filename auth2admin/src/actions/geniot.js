import { actionCreator } from '../rxred';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/observable/dom/ajax';
import { map } from 'lodash';
import env from '../../env.json'
var cfg= env[process.env.NODE_ENV||'development']

const getUrApps = actionCreator((payload) => {
	console.log(payload)
	const url = `${cfg.service.url}:${cfg.service.port}${cfg.service.path}/reg/postauth/${payload}/${cfg.appid}`
	const token = localStorage.getItem(cfg.appid)
	console.log(url)
	console.log(token)
	return{
    type: 'UR_APPS_LOADING',
    payload: Observable.ajax(url)
    	.map((xhr)=>{
    		console.log(xhr.response)
      	return({
	        type: 'UR_APPS_LOADED',
	        payload: xhr.response
	      })
    	})
	}
})

export {getUrApps}