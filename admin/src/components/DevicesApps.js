import React from 'react';
import DeviceAppList from './DeviceAppList'

function DevicesApps(props){
  const {devices, name} = props
  return(
    <div>
      <div style={styles.outer} >
        <h4>in Devices {name}</h4>
        <DeviceAppList name={name} devices={devices} />
      </div>
    </div>
    )    
}
function mapStoreToProps(anElement){
  //returns a function called later with store as its arg and anElement from here
  return (store)=>{  
    console.log(store)
    const props= {
        devices: store.mqtt.currentApps.apps,
        name: store.mqtt.currentApps.id
      }
    return React.createElement(anElement, props)
  }
}

DevicesApps = mapStoreToProps(DevicesApps)

export {DevicesApps}
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