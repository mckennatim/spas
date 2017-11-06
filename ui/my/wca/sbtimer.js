var itpo, pointerType
var svgURI = 'http://www.w3.org/2000/svg';

const calcRad=(dy,dx)=>{
  var ang, pi=Math.PI
  if(dx==0){
    dy>0 ? ang=pi/2 :ang=3*pi/2
  }else{ang=Math.atan(dy/dx)}
  if(dx>0&&dy<0){
    ang=ang+2*pi
  }else if (dx<0){
    ang=ang+pi
  }
  return ang
}

const polar2cart=(r, rad, ctr)=>{
	return {x:(r*Math.cos(rad)+ctr.x), y: (r*Math.sin(rad)+ctr.y)}
}

const drawSegment= (el, st, end, attr)=>{
	console.log("in draw segment")
	var d = `M${st.x} ${st.y} L${end.x} ${end.y}`
	var seg1 = document.createElementNS( svgURI, 'path' );
	seg1.setAttribute( 'd', d)
	// seg1.setAttribute( 'stroke-width', "5")
  // seg1.setAttribute( 'stroke', "firebrick")
  Object.keys(attr).forEach((key=>{
  	console.log(key, attr[key])
  	seg1.setAttribute( key, attr[key])
  }))
	console.log("in draw segment", d)
	console.log(el)
	el.appendChild(seg1)
}

const drawRadius= (el, ctr, rad, dist)=>{
	console.log("in draw radius")
	var d = `M${ctr.x} ${ctr.y} L${end.x} ${end.y}`
	var seg1 = document.createElementNS( svgURI, 'path' );
	seg1.setAttribute( 'd', d)
	seg1.setAttribute( 'stroke-width', "2")
  seg1.setAttribute( 'stroke', "firebrick")
	console.log("in draw segment", d)
	console.log(el)
	el.appendChild(seg1)	
}


const zxc=()=>{
  var size= {w:342,h:342}
  var ctr= {x: size.w/2, y: size.h/2}
  var rlo= ctr.x*.6
  var rhi= rlo*1.4
  var tp=20  
	return {
		stpt: {},
		endpt: {},
		bb: {},
		size: size,
		ctr: ctr,
		rlo: rlo,
		rhi: rhi,
		els: {
			itpo: {}
		},
		handleItpoStart: (e)=>{
			e.preventDefault()
			zx.els.itpo.setAttribute('r', 15)
			zx.stpt = {x:zx.els.itpo.getAttribute("cx"), y:zx.els.itpo.getAttribute("cy")}
		},
		handleItpoMove: (ev)=>{
		  ev.preventDefault();
		  var e
		  if(pointerType=="mouse"){
		    e= ev
		  }else{
		    e=ev.touches[0]
		  }
		  var ax= e.clientX - zx.els.bb.x
		  var ay= e.clientY - zx.els.bb.y-40 //i dont know why
		  // var ax= e.clientX
		  // var ay= e.clientY
		  var dx = ax-ctr.x
		  var dy = ay-ctr.y
		  var mrad = calcRad(dy,dx) 
		  var cart = polar2cart(rlo, mrad, ctr)
		  //console.log('cart', cart, "touch", {x:ax, y:ay}, "ctr", ctr, "rlo", rlo)
		  // console.log(zx.els.svg.getBoundingClientRect())
		  // console.log(zx.els.bb)
			zx.els.itpo.setAttribute('cx', cart.x)
			zx.els.itpo.setAttribute('cy', cart.y)
		},
		handleItpoEnd: (ev)=>{
		  ev.preventDefault();
		  var e
		  if(pointerType=="mouse"){
		  	zx.els.svg.removeEventListener("mousemove", zx.handleItpoMove, false);
		    e= ev
		  }else{
		    e=ev.changedTouches[0]
		  }
		  zx.endpt ={x:e.clientX - zx.els.bb.x, y:e.clientY - zx.els.bb.y-40}
		  var dex = zx.endpt.x-ctr.x
		  var dey = zx.endpt.y-ctr.y
		  var dist = (Math.sqrt(Math.pow(zx.stpt.x-zx.endpt.x,2)+Math.pow(zx.stpt.x-zx.endpt.y,2)))
		  var mrad = calcRad(dey,dex)
		  drawSegment(zx.els.svg, zx.stpt, zx.endpt, {"stroke-width": 5, "stroke": "cadetblue"})
		  drawSegment(zx.els.svg, zx.ctr, zx.endpt, {"stroke-width": 2, "stroke": "darkolivegreen"})
		  //drawRadius(zx.els.svg, zx.ctr, mrad, dist)
		  console.log(dey, dex,dist, mrad, zx.endpt)
		}
	}
}
const zx = zxc()


// const handleItpoStart=(e)=>{
// 	e.preventDefault()
// 	console.log('in it ', e.type)
// 	itpo.setAttribute('r', 15)
// }

// const handleItpoMove=(ev)=>{
//   ev.preventDefault();
//   var e
//   if(pointerType=="mouse"){
//     e= ev
//   }else{
//     e=ev.touches[0]
//   }
//   var dx = e.clientX-cx
//   var dy = e.clientY-cy
//   mrad = calcRad(dy,dx) 
// }

class SbTimer extends HTMLElement{
  constructor() {
    super();
    this.shadow = this.createShadowRoot();
    this.size={w:342,h:342}
    this.ctr={x:this.size.w/2, y:this.size.h/2}
    this.rlo=this.ctr.x*.6
    this.rhi=this.rlo*1.4
    this.tp=20   
  }


  connectedCallback() {
		window.addEventListener("pointerdown", detectInputType, false);
		//pointerType="touch"
		function detectInputType(e){
		  pointerType=e.pointerType
	    if(pointerType=='mouse'){
	    	zx.els.itpo.addEventListener("mousedown", zx.handleItpoStart, false);
	   	 	zx.els.svg.addEventListener("mousemove", zx.handleItpoMove, false);		  
	   	 	zx.els.svg.addEventListener("mouseup", zx.handleItpoEnd, false);		  
	    } else{
	    	zx.els.itpo.addEventListener("touchstart", zx.handleItpoStart, false);
	    	zx.els.itpo.addEventListener("touchmove", zx.handleItpoMove, false);		  
	    }
		}
    var template = `
      <div >
      	<h4>sb-timer</h4>
        <div >
        	<svg id="svg" width=${this.size.w} height=${this.size.h} xmlns="http://www.w3.org/2000/svg" version="1.1" >
    				<rect id ="rect" x="1" y="1" width=${this.size.w-2}  height=${this.size.h-2} fill="none" stroke="blue" stroke-width="1" />
    				<circle id="circle" cx=${this.ctr.x} cy=${this.ctr.y} r=${this.rlo} fill="none" stroke="blue" stroke-width="3"/>
    				<circle id="itpo" cx=${this.ctr.x+this.rlo} cy=${this.ctr.y} r=${this.tp/2} fill="lightgrey" stroke="lightgrey" stroke-width="1"/>
    			</svg>
        </div>
      </div>
    `;
    this.shadow.innerHTML = template;
    zx.els.itpo = this.shadow.getElementById('itpo')
    zx.els.svg = this.shadow.getElementById('svg')
    //console.log(zx.els.svg.getBoundingClientRect())
    var x = zx.els.svg.getBoundingClientRect().left
    var y = zx.els.svg.getBoundingClientRect().top
    zx.els.bb = {x:x, y:y}
    var st, mo, en 

  }
  disconnectedCallback() {

  }
  attributeChangedCallback(attrName, oldVal, newVal) {

  }
 
}
window.customElements.define('sb-timer', SbTimer);  	
