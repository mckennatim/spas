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
					<h3>bl-navigo-react demo</h3>
					<div id="menu"> <ul>
						<li style={mStyle.li}><a style={mStyle.a} href="home" data-navigo>home</a></li>
						<li style={mStyle.li}><a style={mStyle.a} href="about" data-navigo>about</a></li>
						<li style={mStyle.li}><a style={mStyle.a} href="products" data-navigo>products</a></li>
						<li style={mStyle.li}><a style={mStyle.a} href="products/333" data-navigo>a product</a></li>
					</ul></div><br/>
				</div>
				<hr/>
				<div id="rt"></div>
			</div>
			)
	}
}
export{App}

var mStyle = {
	li: {
		display: 'inline',
		padding: '10px',
		backgroundColor: '#FFFFCC'
	},
	ul: {
	},
  span:{
    color: 'yellow'
  },
  div: {
    height: '900',
    background: 'green'
  },
  a: {
  	textDecoration: 'none',
  	color: 'green'
  }
};