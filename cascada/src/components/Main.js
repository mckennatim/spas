var React = require('react');
var Yard = require('./Yard');
import {stripQuery, ck4query, ck4token, cfg} from '../utilities'

ck4token()
ck4query(cfg)

var imgurl = 'img/bkg-water.png'
var mStyle = {
	li: {
		display: 'inline',
		padding: '10px'
	},
	ul: {
	},
  span:{
    color: 'yellow'
  },
  div: {
    height: '900', 
    background: 'green',
    backgroundImage: "url("+imgurl+")"
  }
};

const register = ()=>{
  console.log('in register')
  console.log(stripQuery())
  window.history.pushState("object or string", "Title", "/"+stripQuery() );
  console.log(cfg.soauth)
  console.log(encodeURIComponent(cfg.soauth))
  const url = cfg.soauth+"/spa/"+cfg.appid+"?apiURL="+encodeURIComponent(cfg.api)+"&cbPath="+encodeURIComponent(cfg.cbPath)
  console.log(url)
  window.location=url  
}

const Main = ()=>{
  return (
    <div style={mStyle.div}>
      <ul>
      <li style={mStyle.li}><span style={mStyle.span}> yard </span></li>
      <li style={mStyle.li} onClick={register}><span style={mStyle.span}> register </span></li>
      </ul>
      <div className="container">
        <Yard/>
      </div>
    </div>
  )
};

// var Main = React.createClass({
//   register: function(){
//     console.log('clicked register')
//   },
//   render: function(){
//     return (
//       <div style={mStyle.div}>
//         <ul>
//         <li style={mStyle.li}><span style={mStyle.span}> yard </span></li>
//         <li style={mStyle.li} onClick={this.register()}><span style={mStyle.span}> register </span></li>
//         </ul>
//         <div className="container">
//           <Yard/>
//         </div>
//       </div>
//     )
//   }
// });

module.exports = Main;