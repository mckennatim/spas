import React from 'react' 
import {mStyle} from '../styles'
const style = {
	background: '#CCCCCC'
}

const Nav = (props) =>(
	<div id="nav" style={style}>
		<h3>other app demo </h3>
		<div id="menu"> <ul>
			<li style={mStyle.li}><a style={mStyle.a} href="http://localhost:7080/spa/otherapp">register</a></li>
			<li style={mStyle.li}><a style={mStyle.a} href="home" data-navigo>home</a></li>
			<li style={mStyle.li}><a style={mStyle.a} href="about" data-navigo>about</a></li>
			<li style={mStyle.li}><a style={mStyle.a} href="products" data-navigo>products</a></li>
			<li style={mStyle.li}><a style={mStyle.a} href="products/333/inv" data-navigo>a product</a></li>
			<li style={mStyle.li}><a style={mStyle.a} href="dog" data-navigo>dog</a></li>
			<li style={mStyle.li}><a style={mStyle.a} href="registered" data-navigo>registered</a></li>
		</ul></div><br/>
		<hr/>
	</div>
	)
export {Nav}

