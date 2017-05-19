import React from 'react';
import {router} from '../routing'


const handleNavigate = (data) => () =>
	//console.log(params)
  router.navigate(data);

export default function DevicesList(props){
  const { devices, name } = props;
  devices.map((dev)=>{
  })

  return(
    <div>
    	<h5>in DeviceAppList for {name}</h5>
    	<ul style={styles.ul}>
        {devices.map(function(dev){
          return <li key={dev.appid} style={styles.li}>
              <a onClick={handleNavigate('/'+ dev.appid +'/'+dev.devid)}>
                {dev.appid} 
                <span>  {dev.devid}</span>
              </a>
          	</li>;
        })}
    	</ul>
    	<button onClick={handleNavigate('/cat')}>goto cat</button>
    </div> 
    )
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