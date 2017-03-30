import React from 'react'
import {router} from '../app'
import {Nav} from '../components'

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
    	el3: {name: "mcmurry"},
    	we: {name: "curtis"},
    	otherwise: "dogshit"
  	};
  }	
  componentDidMount= ()=>{
  	console.log('component did mount')
  }
  loadNav=()=>{
  	console.log('loading nav')
  	return Nav()
  }

  showRt=(rtpg)=>{
  	if(typeof rtpg != 'function'){
  		return rtpg.pg(rtpg.params)
  	}
  	  return rtpg(this.props)
  }	
	
	render(){
		return(
			<div>
				{this.loadNav()}
				<div id="rt"></div>
				{this.showRt(this.props.rtpg)}
			</div>
			)
	}
}
export{App}

