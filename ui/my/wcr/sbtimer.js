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
	return {x:(r*Math.cos(rad)+ctr.x), y: (-r*Math.sin(rad)+ctr.y)}
}

const getDist=(st, end)=>{
	var dist = Math.sqrt(Math.pow(st.x-end.x,2)+Math.pow(st.y-end.y,2))
	return dist
}

const rad2time=(rad)=>{
	var hrs = rad/(2*Math.PI)*24
	var hr = Math.floor(hrs)
	var min = Math.round((hrs-hr)*60)
	return {hr: hr, min: min, hrs: hrs}
}

const drawSegment= (el, st, end, attr)=>{
	var d = `M${st.x} ${st.y} L${end.x} ${end.y}`
	var seg1 = document.createElementNS( svgURI, 'path' );
	seg1.setAttribute( 'd', d)
  Object.keys(attr).forEach((key=>{
  	seg1.setAttribute( key, attr[key])
  }))
	el.appendChild(seg1)
}

const drawRadius= (el, ctr, rad, dist, attr)=>{
	var end = polar2cart(dist, rad, ctr)
	var d = `M${ctr.x} ${ctr.y} L${end.x} ${end.y}`
	var seg1 = document.createElementNS( svgURI, 'path' );
	seg1.setAttribute( 'd', d)
  Object.keys(attr).forEach((key=>{
  	seg1.setAttribute( key, attr[key])
  }))
	el.appendChild(seg1)	
}


const zxc=()=>{
  var size= {w:342,h:342}
  var ctr= {x: size.w/2, y: size.h/2}
  var rlo= ctr.x*.6
  var rhi= rlo*1.4
  var param = {tpsz: 12, radiff: .35, far: 30, deflo: 58, defhi: 68}
	return {
		stpt: {},
		endpt: {},
		bb: {},
		size: size,
		ctr: ctr,
		rlo: rlo,
		rhi: rhi,
		param: param,
		els: {
			itpo: {}
		},
		gs: [],

		handleItpoStart: (e)=>{
			e.preventDefault()
			var x= zx.els.itpo.getAttribute("cx")
			var y= zx.els.itpo.getAttribute("cy")
			zx.els.itpo.setAttribute('r', zx.param.tpsz*1.4)
			zx.els.rect.setAttribute("fill", "yellow")
		  var dx = x-ctr.x
		  var dy = ctr.y-y
		  var rad = calcRad(dy,dx)
			zx.stpt = {x:x, y:y, rad:rad}
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
		  var ay= e.clientY - zx.els.bb.y //i dont know why
		  var dx = ax-ctr.x
		  var dy = ctr.y-ay
		  var mrad = calcRad(dy,dx) 
		  zx.els.mes.innerHTML = JSON.stringify(rad2time(mrad))
		  var cart = polar2cart(rlo, mrad, ctr)
			zx.els.itpo.setAttribute('cx', cart.x)
			zx.els.itpo.setAttribute('cy', cart.y)
		},
		handleItpoEnd: (ev)=>{
		  ev.preventDefault();
		  console.log(sbt.getAttribute("sched"))
		  console.log(sbt.sched)
		  var e
		  if(pointerType=="mouse"){
		  	zx.els.svg.removeEventListener("mousemove", zx.handleItpoMove, false);
		    e= ev
		  }else{
		    e=ev.changedTouches[0]
		  }
		  zx.els.itpo.setAttribute('r', zx.param.tpsz)
		  zx.els.rect.setAttribute("fill", "none")
		  zx.endpt ={x:e.clientX - zx.els.bb.x, y:e.clientY - zx.els.bb.y-40}
		  var dex = zx.endpt.x-ctr.x
		  var dey = ctr.y - zx.endpt.y
		  var dist = getDist(zx.endpt, zx.ctr)
		  var far = getDist(zx.endpt, zx.stpt)
		  zx.endpt.rad = calcRad(dey,dex)
		  if(Math.abs(zx.endpt.rad-zx.stpt.rad)<zx.param.radiff && far>zx.param.far){
		  // drawSegment(zx.els.svg, zx.stpt, zx.endpt, {"stroke-width": 5, "stroke": "cadetblue"})
		  // drawSegment(zx.els.svg, zx.ctr, zx.endpt, {"stroke-width": 2, "stroke": "darkolivegreen"})
		  	drawRadius(zx.els.svg, zx.ctr, zx.stpt.rad, dist, {"stroke-width": 2, "stroke": "red"})
		  //drawRadius(zx.els.svg, zx.ctr, mrad, dist)
		  // console.log(dey, dex,dist, mrad, zx.endpt)
			}
		},
		appendDecan: (when, lopt, hipt, forhrs)=>{
			/*
			check if it will overlap, if so move others out of the way or replace
			or its ok so add a g to gs and get its index 
			g = document.createElementNS( svgURI, 'g' );

			gs.push(g)

			makeDecan(fromrad, rlo, rhi, torad){
				
			}
			*/

		}
	}
}

const zx = zxc()

class SbTimer extends HTMLElement{
  static get observedAttributes() {
    return ['sched'];
  }	
  constructor() {
    super();
    this.shadow = this.createShadowRoot();
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
	    	zx.els.itpo.addEventListener("touchend", zx.handleItpoEnd, false);		  
	    }
		}
    var template = `
      <div >
      	<h4>sb-timer</h4>
        <div >
        	<svg id="svg" width=${zx.size.w} height=${zx.size.h} xmlns="http://www.w3.org/2000/svg" version="1.1" >
    				<rect id ="rect" x="1" y="1" width=${zx.size.w-2}  height=${zx.size.h-2} fill="none" stroke="blue" stroke-width="1" />
    				<circle id="circle" cx=${zx.ctr.x} cy=${zx.ctr.y} r=${zx.rlo} fill="none" stroke="blue" stroke-width="3"/>
    				<circle id="itpo" cx=${zx.ctr.x+zx.rlo} cy=${zx.ctr.y} r=${zx.param.tpsz} fill="lightgrey" stroke="lightgrey" stroke-width="1"/>
    			</svg>
        </div>
      </div>
			<style>
			  h4 {
			    touch-action:none;
			    user-select: none;
			  }      
		  </style>
    `;
    this.shadow.innerHTML = template;
    zx.els.itpo = this.shadow.getElementById('itpo')
    zx.els.svg = this.shadow.getElementById('svg')
    zx.els.rect = this.shadow.getElementById('rect')
    //console.log(zx.els.svg.getBoundingClientRect())
    var x = zx.els.svg.getBoundingClientRect().left
    var y = zx.els.svg.getBoundingClientRect().top
    zx.els.bb = {x:x, y:y}
    var st, mo, en 

  }
  disconnectedCallback() {

  }
  attributeChangedCallback(attrName, oldVal, newVal) {
  	console.log('attribute changed', attrName, oldVal, newVal)
  }
 
}
window.customElements.define('sb-timer', SbTimer);  	
