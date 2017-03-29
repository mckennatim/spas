import React from 'react'
import {router} from '../app'

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
	render(){
		return(
			<div>
				<div id="nav">
					<h3>bl-navigo is a </h3>
					<div id="menu"> 
						<a href="home" data-navigo>home</a>
						<a href="about" data-navigo>about</a>
						<a href="products" data-navigo>products</a>
						<a href="products/333" data-navigo>a product</a>
					</div><br/>
				</div>
				<hr/>
				<div id="rt"></div>
			</div>
			)
	}
}
export{App}