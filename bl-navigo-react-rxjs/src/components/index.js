import React from 'react'
import {router} from '../app'
import {App} from './App'
import {Nav} from './Nav'
import {Dog} from './Dog'
import {Products} from './Products'


const About = (props) =>(
	<h3> About</h3>
)

const Home = (props) =>{
	function goprod(){
		console.log("in home goprod")
		router.navigate('/about');
	}
	return(
		<div>
			<h3> Home </h3>
			<button id="but" onClick={goprod}>goto about</button>
		</div>
	)
}	

export {App, About, Products, Home, Nav, Dog}