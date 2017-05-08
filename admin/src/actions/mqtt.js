import { actionCreator } from '../rxred';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/observable/dom/ajax';
import { map } from 'lodash';
import { fromMqtt$ } from './fromMqtt';

/* ----------------helper functions-----------------------------*/

var mqtt$ = {
  next(value) {},
  error(err) {throw err;},
  complete() {}
}

var storeCopy = {mqtt: {currentDevId: 'instorcopy'}}
const copyStore= (props)=>{
  storeCopy = props
}
const connectAndSubscribe= (devId)=>{
  //mqtt$.next('end')
  mqtt$ = fromMqtt$(devId)
  mqtt$.subscribe(
    function (e) {
      var sp = e.topic.split("/")
      var job = sp[1];
      switch(job){
        case "ready":
          if(e.payload.ready){
            console.log('THIS SHIT IS READY') 
            mqtt$.next(`{\"id\":2,\"req\":\"flags\"}`)
            mqtt$.next(`{\"id\":3,\"req\":\"timr\"}`)
            mqtt$.next(`{\"id\":0,\"req\":\"srstates\"}`)
            mqtt$.next(`{\"id\":1,\"req\":\"progs\"}`) 
          } 
          break;
        case "srstate":
          grabSrstateData(e.payload) 
          break;
        case "timr":
          grabTimrData(e.payload)
          break;
        case "flags":
          grabFlagData(e.payload)
          break;
        case "sched":
          // console.log('grabSchedData')
          grabSchedData(e)
          break;
      }
  });  
}
/*-----------------actions---------------------------------------*/
const disconnect = actionCreator((payload)=>{
  console.log('disconnection')
  mqtt$.next('end')
  return {
    type: 'DISCONNECT',
    payload: {isConnected: false}
  }
})
const changeDevInfo = actionCreator((payload) => {
  console.log(`${storeCopy.route.currentDevId} != ${payload.par.id}`)
  if (storeCopy.route.currentDevId != payload.par.id){
    connectAndSubscribe(payload.par.id)
  }  
  return {
    type: 'DEVINFO_CHANGED',
    payload
  }
});
const grabTimrData = actionCreator((payload) => {
  return {
    type: 'TIMR_CHANGED',
    payload
  }
});
const reqSchedData = actionCreator((payload) => {
  //mqtt$.next(`{\"id\":1,\"req\":\"progs\"}`)
  return {
    type: 'REQ_SCHED',
    payload
  }
});
const grabSchedData = actionCreator((payload) => {
  // console.log('inaction grabSchedData')
  let pl={}
  pl.sched = payload.payload
  var sp = payload.topic.split("/")
  const devId = sp[0]
  pl.devId = devId
  return {
    type: 'SCHED_CHANGED',
    payload: pl
  }
});
const grabSrstateData = actionCreator((payload) => {
  return {
    type: 'SRSTATE_CHANGED',
    payload
  }
});
const grabFlagData = actionCreator((payload) => {
  return {
    type: 'FLAGS_CHANGED',
    payload 
  }
});

export {copyStore, changeDevInfo, grabFlagData, grabSrstateData, grabSchedData, grabTimrData, disconnect}