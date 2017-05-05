import {dog} from './funcs'
var Paho = require('paho.mqtt.js')

var tmr, progs, cmd, prg, req, trigtime, devtime, sched, client, srstate,flags,timr;
var deviceId = "CYURD001"
//publish to device
prg = deviceId+'/prg'
cmd = deviceId +'/cmd'
req = deviceId +'/req'
//publish to server
trigtime = deviceId +'/time'
//subscribe
devtime = deviceId +'/devtime'
srstate = deviceId+'/srstate'
sched = deviceId +'/sched'
flags = deviceId+'/flags'
//deprecate
timr = deviceId+'/timr'

function onConnect() {
	console.log('Connected to Sitebuilt.net:3333!');
	subscribe()
}

function subscribe() {
	client.subscribe(devtime)//device time
	client.subscribe(srstate) 
	client.subscribe(timr) 
	client.subscribe(sched)
	client.subscribe(flags)
}

function connect() {
	client.connect({onSuccess:onConnect, useSSL:true});
}

function onConnectionLost(responseObject) {
		if (responseObject.errorCode !== 0) {
			console.log('Connection Lost ' + responseObject.errorMessage);
		}
}	

function publish(topic, payload){
	message = new Paho.Message(payload);
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
	app.innerHTML+='['+topic+'] '+pls
}	

client = new Paho.Client("services.sitebuilt.net/geniot/ws", 3333, "pahoSB"+Math.random()*1000000);
client.onConnectionLost = onConnectionLost;
client.onMessageArrived = onMessageArrived;	

connect()
var app = document.getElementById('app')
app.innerHTML = '<h4>hello spass blank </h4>'

dog('frog')