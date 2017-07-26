/*-----------on saving sensor dataor not-----------------*/

const recoStates=()=>{
	console.log('in recoStates')
	var url=cfg.url.api+"/dedata/rec"
	var sdata=deviceId+':'+dsenrel.value
	var pdata ={id:sdata}
	superagent.post(url)
		.set('Authorization', 'Bearer ' + userToken)
		.send(pdata)
		.end(function(e, res) {
			console.log(!!e ? e.status: 'no error')
			console.log(res.body)
		})	
}
const noRecoStates=()=>{
	console.log('in noRecoStates')
	var url=cfg.url.api+"/dedata/rec"
	var sdata=deviceId+':'+dsenrel.value
	var pdata ={id:sdata}
	superagent.delete(url)
		.set('Authorization', 'Bearer ' + userToken)
		.send(pdata)
		.end(function(e, res) {
			console.log(!!e ? e.status: 'no error')
			console.log(res.body)
		})	
}

/*----------save program for senrel to mysql/geniot/scheds */

const saveProg=()=>{
	console.log("in saveProg")
	const sdata = `{"devid":"${deviceId}","dow":${dday.value},"senrel":${dsenrel.value},"sched":"${ddayprog.value}" }`
	const pdata= JSON.parse(sdata)
	var url=cfg.url.api+"/api/dedata/prg"
	superagent.post(url)
		.set('Authorization', 'Bearer ' + userToken)
		.send(pdata)
		.end(function(e, res) {
			console.log(!!e ? e.status: 'no error')
			console.log(res.body)
		})	
}

/*-----------utility functions-------------*/
const parseQuery = (query)=>{
	var obj = {};
	query.substr(1).split('&')
		.map((term)=>{
			var ar = term.split('=')
			obj[ar[0]]=ar[1]
		}
	)
	return obj
}

const stripQuery=()=>{
  var url = window.location.href;
  var value = url.substring(8)
  value=value.substring(value.indexOf('/')+1).split("?")[0];
  return value;     
}

const get=(path, props)=>{
  return path.split(".")
  	.slice(1)
  	.reduce((xs,x)=>(xs && xs[x]) ? xs[x] : null , props)
}

const getToken=(appid)=>{
	var t = JSON.parse(localStorage.getItem(appid))
	//console.log(t)
	return t
}