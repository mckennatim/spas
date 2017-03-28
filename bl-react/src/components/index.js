import React from 'react';
import {store} from '../store'
import {El1} from './El1'
import {El2} from './El2'
import {El3} from './El3'

const Wel = (props) =>(
	<h5>inner {props.name}</h5>
)

class Welc extends React.Component{
	render(){
		return(
				<h5>welc {this.props.name}</h5>				
			)
	}
}

const Welco = React.createClass({
	componentDidMount: function() {
		console.log('yard mounted')
	},
	componentWillUnmount: function(){
		console.log('yard unmountd')
	},	
	render: function(){
		return(
				<h5>welco {this.props.name}</h5>				
			)
	}	
})

function Welcom(props){
	console.log("in Welcom")
	return(
			<h5>welcom {props.name}</h5>				
		)
}


export {Wel, Welc, Welco, Welcom, El1, El2, El3}