import React from 'react';

import {pStyle} from '../styles'
const style = {
  ...pStyle, outer: {...pStyle.outer, background: '#C4A265'}
}
pStyle.outer.background='#C4A265'

function DeviceForm(props){
  console.log(props)
  const {device, devChanged} = props

  const handleOnSubmit= (e)=>{
    e.preventDefault()
    console.log('been submitted')
  }
  const handleOnChange= (e)=>{
    devChanged({key: e.target.name, val:e.target.value})
  }

  return(
    <div>
      <div  >
        {/*
        <h4>in DeviceForm</h4>
        */}    
        <label htmlFor="devid">devid:</label>
        <input type="text" id="devid" name="devid" value={device.devid} onChange={handleOnChange} size="8"/><br/>
        <label htmlFor="devpwd">devpwd:</label>
        <input type="text" id="devpwd" name="devpwd" value={device.devpwd} onChange={handleOnChange} size="8"/><br/>
        <label htmlFor="bizid">bizid:</label>
        <input type="text" id="bizid" name="bizid" value={device.bizid} onChange={handleOnChange} size="8"/><br/>
        <label htmlFor="description">description:</label>
        <input type="text" id="description" name="description" value={device.description} onChange={handleOnChange} size="54"/><br/>
        <label htmlFor="address">address:</label>
        <input type="text" id="address" name="address" value={device.address} onChange={handleOnChange} size="54"/><br/>
        <label htmlFor="location">location:</label>
        <input type="text" id="location" name="location" value={device.location} onChange={handleOnChange} size="48"/><br/>
        <label htmlFor="timezone">timezone:</label>
        <input type="text" id="timezone" name="timezone" value={device.timezone} onChange={handleOnChange} size="40"/><br/>
        <label htmlFor="server">server:</label>
        <input type="text" id="server" name="server" value={device.server} onChange={handleOnChange} size="54"/><br/>
        <label htmlFor="specs">specs:</label>
        <input type="text" id="specs" name="specs" value={device.specs} onChange={handleOnChange} size="54"/>
      </div>
    </div>
    )    
}
function mapStoreToProps(anElement){
  //returns a function called later with store as its arg and anElement from here
  return (store)=>{  
    const props= {
        devices: store.mqtt.devices,
        name: store.test.name
      }
    return React.createElement(anElement, props)
  }
}

//DeviceForm = mapStoreToProps(DeviceForm)
//console.log(DeviceForm())

export  { DeviceForm }

const styles= {
  outer: {
    background:'#9338f4',
    height: 400,
    textAlign: 'center'    
  },
  inner: {
    margin: '0 auto',
    background: '#FFF28E',
    height: 340,
    color: 'red',
    textAlign: 'center',
    fontSize: '300%'
  }
}