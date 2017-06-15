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
	console.log(t)
	return t
}