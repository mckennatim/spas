import React from 'react'
import {router} from '../app'
import {App} from './App'
import {Nav} from './Nav'
import {Dog} from './Dog'
import {Products} from './Products'
import {pStyle} from '../styles'

const About = (props) =>{
	const style = {
		...pStyle, outer: {...pStyle.outer, background: '#99CCCC'}
	}
	return(
		<div style={style.outer}>
			<h3> About</h3>
		</div>
	)
}

const Home = (props) =>{
	function goprod(){
		console.log("in home goprod")
		router.navigate('/about');
	}
		const style = {
		...pStyle, outer: {...pStyle.outer, background: '#CC66CC'}
	}
	return(
		<div style={style.outer}>
			<h3> Home </h3>
			<button id="but" onClick={goprod}>goto about</button>
		</div>
	)
}	

const multi =[{pri:'About', mul:[
								['About', 'Products'],
								['Products', 'About', 'Home']]
							 },
							{pri:'Products', mul:[
								['Products', 'About'],
								['About', 'Products', 'Home']]
							 },
							{pri:'Dog', mul:[
								['Dog', 'Home'],
								['Dog', 'About', 'Home']]
							 },
							{pri:'Home', mul:[
								['Home', 'About'],
								['Dog', 'About', 'Home']]
							 }
							]

//['watch', 'phone', 'phoneL', 'tablet', 'tabletL', 'laptop']
const panes= [1,1,2,2,3,3]

export {About, Products, Home, Dog, App, Nav, multi, panes}