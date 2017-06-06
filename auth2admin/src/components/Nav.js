import React from 'react' 
import {mStyle} from '../styles'
import {getCfg} from '../utilities'
var cfg = getCfg()
// import env from '../../env.json'
// var cfg= env[process.env.NODE_ENV||'development']

const url = cfg.auth.url+":"+cfg.auth.port+"/spa/"+cfg.appid+"/"+
encodeURIComponent(cfg.service.url+":"+cfg.service.port+cfg.service.path+"/reg/auth")
console.log(url)


const style = {
	background: '#CCCCCC'
}

const Nav = (props) =>(
	<div id="nav" style={style}>
		<h3>navigo-react-rxjs-responsive demo </h3>
		<div id="menu"> <ul>
			<li style={mStyle.li}><a style={mStyle.a} href={url}>register</a></li>
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

