var React = require('react');
//var Navigation = require('react-router').Navigation;
var Spots = require('../components/Spots');
//var mqtt = require('mqtt')
var Paho = require('paho.mqtt.js')
import {cfg} from '../utilities'

//var cfg = getCfg()
console.log(cfg)
//import Auth from '../services/AuthService';

var client = new Paho.Client(cfg.mqtt_server, cfg.mqtt_port, cfg.appid+Math.random());
client.onConnectionLost = onConnectionLost;
client.onMessageArrived = onMessageArrived;


var url = '73.249.62.27';
//var url = '10.0.1.155';
var port = '8088'

var socket, sse;
const deviceId ='CYURD002'
const timr = deviceId+'/timr'
const progs = deviceId+'/progs'
const prg = deviceId+'/prg'
const req = deviceId +'/req'
const devt = deviceId +'/time'
const devtim = deviceId +'/devtime'
const sched = deviceId +'/sched'

var Yard = React.createClass({
	//mixins: [Navigation],
	getInitialState: function() {
		return {spots: {"pond": {"spot": "pond", "tleft": -99, "state": "off"}, "center": {"spot": "center", "tleft": -99, "state": "off"}, "bridge": {"spot": "bridge", "tleft": -99, "state": "off"}}, authorized:false};

	},
	handleUserInput: function(timerSet){
		console.log('handling user input ' )
		if (this.state.authorized){
			console.log(timerSet)
			this.sendProg(timerSet);
		} else {
			console.log('yo not authorized')
		}
	},	

	calcStartNow: function(til){
		var da = new Date()
		var sh =da.getHours()
		var sm =da.getMinutes()
		var m0 = til*1+sm*1
		var m = m0%60;
		var mm = (90+16)%60;
		var h = (m0 -m)/60+sh
		var ret = [[sh,sm,1],[h,m,0]];
		return ret
	},

	sendProg: function(timerset){
		var sten, id, ev, numdata, pro;
		if (timerset.til>0){
			sten = this.calcStartNow(timerset.til);
			ev=2;
		}else{
			var onoff = 0;
			if (timerset.state=="on"){onoff=1;}
			sten = [[0,0,onoff]]
			ev=1;
		}
		pro = JSON.stringify(sten)
		switch(timerset.spot){
			case "pond": id = 4; break;
			case "bridge": id = 3; break;
			case "center": id = 2; break;
		}
		numdata=1;
		var thecmd =`{"id":${id},"ev":${ev},"numdata":${numdata},"pro":${pro}}`;
		console.log(thecmd)
		this.client.publish(prg, thecmd)
	},

	convertTleft: function(tleft){
		var ans = Math.floor(tleft/60)+":"+tleft%60
		return ans
	},

	componentDidMount: function() {
		console.log('yard mounted')
		//Auth.esbuenToken(this.tokenCallback);
		var that = this;
		client.connect()
		//this.client = mqtt.connect('wss://services.sitebuilt.net/geniot/ws:3333');
		// this.client = new Paho.MQTT.Client(cfg.mqtt_server, cfg.mqtt_port, cfg.appid+Math.random());
		// this.client.onConnectionLost = onConnectionLost;
		// this.client.onMessageArrived = onMessageArrived;
		// this.client.connect()
		// this.client.on('connect', function(){
		// 	console.log('maybe connected')
		// 	this.client.subscribe(devtim)
		// 	this.client.subscribe(timr) 
		// 	this.client.subscribe(progs)
		// 	this.client.on('message', function(topic, payload) {
		// 		var pls = payload.toString()
		// 		var plo = JSON.parse(pls)
		// 		//console.log(plo)
		// 		//console.log('['+topic+'] '+payload.toString())
		//     var sp = topic.split("/")
		//     var job = sp[1];	
		//     var newstate = Object.assign({}, this.state)
		//     switch(job){
		// 			case "timr":
		// 				var tleft4 = plo.tIMElEFT[4]
		// 				if(tleft4>0){
		// 					newstate.spots.pond.tleft = this.convertTleft(tleft4);
		// 					newstate.spots.pond.state = "timer"
		// 				}else{
		// 					newstate.spots.pond.tleft = -1;
		// 					newstate.spots.pond.state = "off"
		// 				}
		// 				var tleft2 = plo.tIMElEFT[3]
		// 				if(tleft2>0){
		// 					newstate.spots.bridge.tleft = this.convertTleft(tleft2);
		// 					newstate.spots.bridge.state = "timer"
		// 				}else{
		// 					newstate.spots.bridge.tleft = -1;
		// 					if((plo.ISrELAYoN & 8) == 8){
		// 						newstate.spots.bridge.state = "on"
		// 					}else {
		// 						newstate.spots.bridge.state = "off"
		// 					}
		// 				}
		// 				var tleft3 = plo.tIMElEFT[2]
		// 				if(tleft3>0){
		// 					newstate.spots.center.tleft = this.convertTleft(tleft3);
		// 					newstate.spots.center.state = "timer"
		// 				}else{
		// 					newstate.spots.center.tleft = -1;
		// 					if((plo.ISrELAYoN & 4) == 4){
		// 						newstate.spots.center.state = "on"
		// 					}else {
		// 						newstate.spots.center.state = "off"
		// 					}
		// 				}
		// 				break;
		//     };			
		// 		this.setState({spots: newstate.spots})
		// 		//console.log(this.state)
		// 	}.bind(this));	
		// 	this.client.publish('presence', 'Web Client is alive.. Test Ping! ');
		// 	this.client.publish(req, `{"id":3,"req":"timr"}`)
		// }.bind(this));		
	},

	tokenCallback: function(tf){
		this.setState({authorized: tf})
		console.log(tf)
	},

	componentWillUnmount: function(){
		console.log('yard unmountd')
		this.client.publish('presence', 'Help, wants to close! ');
		this.client.end();
	},
	
	render: function(){
		return (
			<div> 
				<Spots spots={this.state.spots} relayUserInput={this.handleUserInput} auth={this.state.authorized}/>
			</div>
			)
	}
})

module.exports = Yard;

function connect() {
	client.connect({
		onSuccess: onConnect,
		onFailure: function (message) {
	    console.log("Connection failed: " + message.errorMessage);
	    dmessage.innerHTML= "Connection failed: " + message.errorMessage;
	  },
		useSSL: true,
		userName: userEmail,
		password: userToken		
	});
}

function onConnect() {
	var cmess = `Connected to ${cfg.mqtt_server} on port ${cfg.mqtt_port} `
	console.log(cmess);
	// dmessage.innerHTML=cmess;
	// subscribe()
	// publish('presence', 'Web Client is alive.. Test Ping! ');
	// publish(`${cfg.devices[0]}/req`,'{"id":2,"req":"flags"}')
	// publish(`${cfg.devices[0]}/req`,'{"id":0,"req":"srstates"}')
	// publish(`${cfg.devices[0]}/req`,'{"id":1,"req":"progs"}')				
	// publish(`${cfg.devices[1]}/req`,'{"id":2,"req":"flags"}')
	// publish(`${cfg.devices[1]}/req`,'{"id":0,"req":"srstates"}')
	// publish(`${cfg.devices[1]}/req`,'{"id":1,"req":"progs"}')		
}

function onConnectionLost(responseObject) {
		if (responseObject.errorCode !== 0) {
			console.log('Connection Lost ' + responseObject.errorMessage);
		}
}	

const register=()=>{
	console.log(stripQuery())
	window.history.pushState("object or string", "Title", "/"+stripQuery() );
	console.log(cfg.soauth)
	console.log(encodeURIComponent(cfg.soauth))
	const url = cfg.soauth+"/spa/"+cfg.appid+"?apiURL="+encodeURIComponent(cfg.api)+"&cbPath="+encodeURIComponent(cfg.cbPath)
	console.log(url)
	window.location=url
}

function subscribe() {
	client.subscribe(`${cfg.devices[0]}/srstate` , {onFailure: subFailure}) 
	client.subscribe(`${cfg.devices[0]}/devtime` , {onFailure: subFailure}) 
	client.subscribe(`${cfg.devices[0]}/timr` , {onFailure: subFailure}) 
	client.subscribe(`${cfg.devices[0]}/sched` , {onFailure: subFailure}) 
	client.subscribe(`${cfg.devices[0]}/flags` , {onFailure: subFailure}) 
	client.subscribe(`${cfg.devices[1]}/srstate` , {onFailure: subFailure}) 
	client.subscribe(`${cfg.devices[1]}/devtime` , {onFailure: subFailure}) 
	client.subscribe(`${cfg.devices[1]}/sched` , {onFailure: subFailure}) 
	client.subscribe(`${cfg.devices[1]}/timr` , {onFailure: subFailure}) 
	client.subscribe(`${cfg.devices[1]}/flags` , {onFailure: subFailure}) 
}

function subFailure(message){
	console.log(message)
}

function subSuccess(message){
	console.log(message.grantedQos[0])
}

function publish(topic, payload){
	message = new Paho.MQTT.Message(payload);
	message.destinationName = topic;
	client.send(message)
}	

function onMessageArrived(message) {
	var topic = message.destinationName
	var pls = message.payloadString
	console.log(topic+ pls)
	var plo = JSON.parse(pls)
	//console.log(plo)
	console.log('['+topic+'] '+pls)
  var sp = topic.split("/")
  var job = sp[1];
  var dev =sp[0]
  // switch(job){
  // 	case "srstate":
		// 	if (plo.id==0 && dev==cfg.devices[0]){
		// 		document.getElementById('outside').innerHTML=plo.darr[0]
		// 	}
		// 	if (plo.id==0 && dev==cfg.devices[1]){
		// 		dgreentemp.innerHTML=plo.darr[0]
		// 	}
		// 	if (plo.id==1 && dev==cfg.devices[1]){
		// 		dgreenhumid.innerHTML=plo.darr[0]
		// 	}							
		// 	if (plo.id==2 && dev==cfg.devices[1]){
		// 		document.getElementById('lstate').innerHTML=plo.darr[0]
		// 	}
		// 	break;
		// case "timr":
		// 			document.getElementById('greenTleft').innerHTML=Math.round(plo.tIMElEFT[2]/60)
		// 	break;
		// case "sched":
		// 	break;
		// case "flags":
		// 	oflags = plo;
		// 	//console.log(JSON.stringify(oflags))
		// 	break;
  // }				
}	

function kill(){
	thecmd =`{\"id\":2,\"sra\":[0]}`
	console.log(thecmd);
	publish(`${cfg.devices[1]}/cmd`, thecmd)
}
function turnon(){
	thecmd =`{\"id\":2,\"sra\":[1]}`
	console.log(thecmd);
	publish(`${cfg.devices[1]}/cmd`, thecmd)
}
function aprg(){
	var id =2
	var str = prarr.value
	var arr = str.slice(1,-1).split(',').map(function(e){return parseInt(e)})
	var thecmd =  `{\"id\":${id}`
	var sl = str.length
	thecmd+=`,\"pro\":[${str}]}`
	console.log(str)
	console.log(thecmd);
	publish(`${cfg.devices[1]}/prg`, thecmd)
}