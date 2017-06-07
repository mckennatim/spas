import React from 'react';
import {router} from '../routing'
import { getCfg} from '../utilities/getCfg'

console.log(getCfg())

const handleNavigate = (dev) => () =>{
	console.log(dev)
  if(dev.appid=='super'){
    router.navigate('/'+ dev.appid +'/'+dev.devid);
  }else{
    if(dev.bizid && dev.appid){
      var url = getCfg().url.base+'/'+dev.bizid+'/'+dev.appid+'/dist/#'
      console.log(url)
      window.location=url
    }    
  }
  //window.location="http://10.0.1.102/spas/sbs/user/dist"
}

export default function DevicesList(props){
  const { devices, name } = props;
  if (devices){
    devices.map((dev)=>{
    })

    return(
      <div>
      	<h5>in DeviceAppList for {name}</h5>
      	<ul style={styles.ul}>
          {devices.map(function(dev){
            return <li key={dev.bizid+dev.appid} style={styles.li}>
                <a onClick={handleNavigate(dev)}>
                  <span>  {dev.bizid}</span> 
                  <span>  {dev.appid}</span> 
                  <span>  {dev.devid}</span>
                </a>
            	</li>;
          })}
      	</ul>
      	<button onClick={handleNavigate('/cat')}>goto cat</button>
      </div> 
      )
  }else return null
}

const styles = {
	ul: {
	  listStyleType: 'none',
	  margin: 0,
	  padding: 0
	},
	li: {
		height: 34,
		background:'#d2ef8f',
		borderBottom: '1px solid black',
		paddiing: '5 5 5 5'
	}
}