import React from 'react'
import {DeviceForm} from './DeviceForm.js'

import {pStyle} from '../styles'
const style = {
	...pStyle, outer: {...pStyle.outer, background: '#C4A265'}
}
pStyle.outer.background='#C4A265'

let device  =      {
      devid: 'CYURD',
      devpwd: 'geniot',
      description: '2 temps, 3 timers 1 relay demo board',
      bizid: 'sbs',
      address: '12 Parley Vale, Jamaica Plain, MA 02130',
      location: {lat: 222,lon: 333},
      timezone: 'America, East',
      url: '127.0.0.1', 
      mqtt:2345, 
      express: 3332, 
      specs: {
        HAStIMER: 28,
        notTimerTags: ["temp", "onoff", "hilimit", "lolimit"]
      }
    }

class Super extends React.Component{
  constructor(props) {
    super(props);
    console.log(props)
    this.state = device
  }  
  setupNewDevice=()=>{
    console.log('setting up new device')
  }
  searchDevices=()=>{
    console.log('search devices')
  }
  editDevice=()=>{
    console.log('editing device')
  }

  onDevChange = (item)=>{
    var f={}
    f[item.key]=item.val
    console.log(f)
    this.setState(f)
    console.log(this.state)
  }



  render(){
  return(
    <div style={style.outer} >
      <div>
      	<h4>in doSuper {name} </h4>
        <button onClick={this.setupNewDevice}>setup new device</button>
        <button onClick={this.searchDevices}>search devices</button>
        <button onClick={this.editDevice}>edit device</button>
      </div>
      <DeviceForm device={this.state}
                  devChanged={this.onDevChange}
      />
    </div>
    )
  }
}
function mapStoreToProps(anElement){
  //returns a function called later with store as its arg and anElement from here
  return (store)=>{  
    console.log(store)
    const props= store
    return React.createElement(anElement, props, null)
  }
}

Super = mapStoreToProps(Super)

export {Super}