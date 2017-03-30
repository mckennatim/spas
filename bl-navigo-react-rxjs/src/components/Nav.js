import React from 'react' 
import {mStyle} from '../styles'

const Nav = (props) =>(
	<div id="nav">
		<h3>navigo-react-rxjs demo </h3>
		<div id="menu"> <ul>
			<li style={mStyle.li}><a style={mStyle.a} href="home" data-navigo>home</a></li>
			<li style={mStyle.li}><a style={mStyle.a} href="about" data-navigo>about</a></li>
			<li style={mStyle.li}><a style={mStyle.a} href="products" data-navigo>products</a></li>
			<li style={mStyle.li}><a style={mStyle.a} href="products/333/inv" data-navigo>a product</a></li>
			<li style={mStyle.li}><a style={mStyle.a} href="dog" data-navigo>dog</a></li>
		</ul></div><br/>
		<hr/>
	</div>
	)
export {Nav}

