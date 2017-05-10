function getIndex(d,c){
  return d.map((dev)=>dev.id).indexOf(c)
}

const mqtt=(state, action) =>{
  switch (action.type) {
    case 'GET_APPS':
      return state
    case 'DISCONNECT':
      return {
        ...state,
        isConnected: false
      }
    case 'RECONNECT':
      return {
        ...state,
        shouldConnect: action.payload
      }       
    case 'DEVINFO_CHANGED':
      // console.log(action.payload)
      return {
        ...state,
        currentDevId: action.payload.par.id,
        currentDev: state.devices[getIndex(state.devices, action.payload.par.id )]
      };      
    case 'TIMR_CHANGED':
      return {
        ...state,
        timr: action.payload
      }
    case 'FLAGS_CHANGED':
      return {
        ...state,
        flags: action.payload
      }
    case 'SRSTATE_CHANGED':
      const ridx = action.payload.id;
      const newsr = state.srstate.slice()
      newsr[ridx]=action.payload        
      return {
        ...state, srstate: newsr
      }
    case 'SCHED_CHANGED':
      let devlist = state.devices.slice()
      const devicesCopy = devlist.map((dev, i)=>{
        if(dev.id == action.payload.devId){
          if(!dev.sched){
            let sched = []
            dev.sched = sched
          }
          dev.sched[action.payload.sched.id] = action.payload.sched
        }
        return dev
      })
      return {
        ...state, devices: devicesCopy
      }
    default:
      return state;
  }
}

export{mqtt}