import React from 'react'
import {cfg, ls} from '../utilities/getCfg'

import {pStyle} from '../styles'
const style = {
	...pStyle, outer: {...pStyle.outer, background: '#C4A265'}
}
pStyle.outer.background='#C4A265'

class Admin extends React.Component{
  constructor(props) {
    super(props);
    var dev = props.responsive.page.params.devid
    var addend = {
    	devid: dev,
    }
    console.log('c0nstruction')
    this.state = {...this.state, mode:'add', dev:addend}
  }

  addUser=()=>{
  	console.log('in addUser for ', this.state.dev)
  	this.setState({...this.state, mode:'add'})
  }

  searchUsers=()=>{
  	console.log('in searchUsers for ', this.state.dev.devid)
    var url=cfg.url.api+'/dedata/users/'+this.state.dev.devid
    console.log(url)
    fetch(url,{
      headers: {
        'Authorization': 'Bearer ' + ls.getCurrentToken().token
      }
    })
      .then((response)=>response.json())
      .then((json)=>{
        this.setState({...this.state, mode:'search', dev:{...this.state.dev, users:json}})
        console.log(this.state)
      })  	
  }

  editUser=(i)=>{
  	console.log('editing user ',i)
  }

  displayWhich=(mode)=>{
  	console.log('IN dispalwhich ',mode)
  	console.log(this.state)
    switch(true){
      case mode=='add':
        return(         
          <div>
          	<h5>adding</h5>
          </div>        )
        break
      case mode=='search':
        const users = this.state.dev.users
        console.log(users) 
        const u = users.map((us,i)=>{
        	return (
        		<li key={i} onClick={this.editUser.bind(this,i)}>
        			<span> {us.bizid}</span>
        			<span> {us.userid}</span>
        			<span> {us.appid}</span>
        			<span> {us.role}</span>
        		</li>
        	)
        },this) 
        return(
          <div>
          <h5>yo searching</h5>
          <ul>{u}</ul>
          </div>
        )              
        break  
      default:
        return(<h5>hey dog</h5>)  
    } 
  }  

  render() {
  	return(
	    <div style={style.outer} >
	      <div>
	      	<span><strong>in doAdmin for {this.state.dev.devid}</strong></span><br/>
	        <button onClick={this.addUser}>add new user</button>
	        <button onClick={this.searchUsers}>search users</button>
	      </div>
	      {this.displayWhich(this.state.mode)}
	    </div>
	  )  	
  }
}

function mapStoreToProps(anElement){
  //returns a function called later with store as its arg and anElement from here
  return (store)=>{  
    //console.log(store)
    const props= store
    return React.createElement(anElement, props, null)
  }
}

Admin = mapStoreToProps(Admin)

export {Admin}