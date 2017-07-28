var React = require('react');
var Yard = require('./Yard');
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


var Main = React.createClass({
  render: function(){
    return (
      <div style={mStyle.div}>
        <ul>
        <li style={mStyle.li}><span style={mStyle.span}> yard </span></li>
        <li style={mStyle.li}><span style={mStyle.span}> register </span></li>
        </ul>
        <div className="container">
          <Yard/>
        </div>
      </div>
    )
  }
});

module.exports = Main;