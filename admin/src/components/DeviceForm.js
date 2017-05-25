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
    //e.preventDefault()
    // console.log(e.target.value)
    // console.log(e.target.name)
    // console.log(e.target.id)
    // console.log(e.target)
    devChanged({key: e.target.name, val:e.target.value})
  }

  return(
    <div>
      <div  >
        <h4>in DeviceForm</h4>
        {/*
        */}    
        <label htmlFor="devid">devid:</label>
        <input type="text" id="devid" name="id" value={device.id} onChange={handleOnChange}/>
        <label htmlFor="devpwd">devpwd:</label>
        <input type="text" id="devpwd" name="devpwd" value={device.devpwd} onChange={handleOnChange}/>
        <label htmlFor="description">description:</label>
        <input type="text" id="description" name="description" value={device.description} onChange={handleOnChange}/>
        <label htmlFor="bizid">bizid:</label>
        <input type="text" id="bizid" name="bizid" value={device.bizid} onChange={handleOnChange}/>
        <label htmlFor="address">address:</label>
        <input type="text" id="address" name="address" value={device.address} onChange={handleOnChange}/>
        <label htmlFor="location">location:</label>
        <input type="text" id="location" name="location" value={device.location} onChange={handleOnChange}/>
        <label htmlFor="timezone">timezone:</label>
        <input type="text" id="timezone" name="timezone" value={device.timezone} onChange={handleOnChange}/>
        <label htmlFor="url">server url:</label>
        <input type="text" id="url" name="url" value={device.url} onChange={handleOnChange}/>
        <label htmlFor="mqtt">mqtt:</label>
        <input type="text" id="mqtt" name="mqtt" value={device.mqtt} onChange={handleOnChange}/>
        <label htmlFor="express">express:</label>
        <input type="text" id="express" name="express" value={device.express} onChange={handleOnChange}/>
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