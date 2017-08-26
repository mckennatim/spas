import {dog, cfg} from './funcs'
var Paho = require('paho.mqtt.js')

var userEmail = 'anybody'
var userToken = ''

var tmr, progs, cmd, prg, req, trigtime, devtime, sched, client, srstate,flags,timr;
var deviceId = cfg.devices[0]
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
	console.log(`Connected to ${cfg.mqtt_server} on port ${cfg.mqtt_port} `);
	subscribe()
	publish('presence', 'Web Client is alive.. Test Ping! ');
}

function subscribe() {
	console.log('subscribing')
	client.subscribe(devtime)//device time
	client.subscribe(srstate) 
	client.subscribe(timr) 
	client.subscribe(sched)
	client.subscribe(flags)
}

function connect() {
	client.connect({
		onSuccess: onConnect,
		onFailure: function (message) {
	    console.log("Connection failed: " + message.errorMessage);
	    //dmessage.innerHTML= "Connection failed: " + message.errorMessage;
	  },
		useSSL: true,
		userName: userEmail,
		password: userToken		
	});
}

function onConnectionLost(responseObject) {
		if (responseObject.errorCode !== 0) {
			console.log('Connection Lost ' + responseObject.errorMessage);
		}
}	

function publish(topic, payload){
	//console.log(topic)
	//console.log(payload)
	var message = new Paho.Message(payload);
	message.destinationName = topic;
	//console.log(message)
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

client = new Paho.Client(cfg.mqtt_server, cfg.mqtt_port, cfg.appid+Math.random());
client.onConnectionLost = onConnectionLost;
client.onMessageArrived = onMessageArrived;	

connect()
var app = document.getElementById('app')
app.innerHTML = '<h4>hello spass blank </h4>'

dog('frog')