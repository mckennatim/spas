import React from 'react';
import ReactDOM from 'react-dom';
import {dog, showRt} from './funcs'
import {Wel, Welc, Welco, Welcom, El1, El2, El3} from './components'

dog('frog')

var vprops = {name: 'magillicutty'}

function muRts(ip){
	console.log(ip)
	var nip
	var that = this
	setTimeout(function() {
		console.log(ip)
		ip={...ip, name: 'not really Magillicutty'}
		console.log(ip)
		return ip
	}, 2000);
}

class App2 extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
    	el3: {name: "mcmurry"},
    	we: {name: "curtis"},
    	otherwise: "dogshit"
  	};
  	this.pros=this.state.el3
  }	
  componentDidMount= ()=>{
  	setTimeout(this.ch, 2000)	
  	setTimeout(()=>this.setState({we: {name: "dermit"}}),3000)	
  }
  ch =()=>{
  	console.log('in ch')
  	this.setState({el3: {name: "froggy"}})
  	this.pros = this.state.el3
  }
	render(){
		return(
			<div>
			<h4>hello blank es6 react</h4>
			<Wel name='fred'/>
			<Welc name='dirt'/>
			<Welco name='funcy'/>
			<Welcom name={this.state.we.name}/>
			{showRt(El1)}
			{El2}
			{El3(this.state.el3)}
			<div id="rte"></div>
			</div>
		)
	}
}

const container = document.getElementById('app');

ReactDOM.render(<App2 {...vprops}/>, container)

