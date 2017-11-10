(function() {

	class SbTimer extends HTMLElement{
	  static get observedAttributes() {
	    return ['sched', "bointer"];
	  }	
	  constructor() {
	    super();
	    this.shadow = this.createShadowRoot();
		  this.size= {w:342,h:342}
		  this.ctr= {x: this.size.w/2, y: this.size.h/2}
		  this.rlo= this.ctr.x*.6
		  this.rhi= this.rlo*1.4
		  this.param = {tpsz: 12, radiff: .35, far: 30, deflo: 58, defhi: 68}
		  this.els = {
		  	itpo:{}
		  }
		  this.pointerType = ""   
	    var template = `
	      <div >
	      	<h4>sb-timer</h4>
	        <div >
	        	<svg id="svg" width=${this.size.w} height=${this.size.h} xmlns="http://www.w3.org/2000/svg" version="1.1" >
	    				<rect id ="rect" x="1" y="1" width=${this.size.w-2}  height=${this.size.h-2} fill="none" stroke="blue" stroke-width="1" />
	    				<circle id="circle" cx=${this.ctr.x} cy=${this.ctr.y} r=${this.rlo} fill="none" stroke="blue" stroke-width="3"/>
	    				<circle id="itpo" cx=${this.ctr.x+this.rlo} cy=${this.ctr.y} r=${this.param.tpsz} fill="lightgrey" stroke="lightgrey" stroke-width="1"/>
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
	    this.els.itpo = this.shadow.getElementById('itpo')
	    this.els.svg = this.shadow.getElementById('svg')
	    this.els.rect = this.shadow.getElementById('rect')
	    console.log(this.els.itpo)
	    //console.log(this.els.svg.getBoundingClientRect())
	    var x = this.els.svg.getBoundingClientRect().left
	    var y = this.els.svg.getBoundingClientRect().top
	    this.els.bb = {x:x, y:y}
	    var st, mo, en 
			// this.addEventListener("pointerdown", detectInputType, false);
			// //pointerType="touch"
			// function detectInputType(e){
			//   this.pointerType=e.pointerType
			//   console.log(this.pointerType)
		 //    if(this.pointerType=='mouse'){
		 //    	this.els.itpo.addEventListener("mousedown", this.handleItpoStart.bind(this), false);
		 //   	 	this.els.svg.addEventListener("mousemove", this.handleItpoMove, false);		  
		 //   	 	this.els.svg.addEventListener("mouseup", this.handleItpoEnd, false);		  
		 //    } else{
		 //    	this.els.itpo.addEventListener("touchstart", this.handleItpoStart.bind(this), false);
		 //    	this.els.itpo.addEventListener("touchmove", this.handleItpoMove, false);	
		 //    	this.els.itpo.addEventListener("touchend", this.handleItpoEnd, false);		  
		 //    }
			// }    
	  }
	  set sched(val){
	  	console.log('in set sched')
	  	this.setAttribute("sched",val)
	  }
	  get sched(){
	  	console.log('in get sched')
	  	return this.getAttribute("sched")
	  }

	  connectedCallback() {
	  //   //console.log(this.els.svg.getBoundingClientRect())
	  //   var x = this.els.svg.getBoundingClientRect().left
	  //   var y = this.els.svg.getBoundingClientRect().top
	  //   this.els.bb = {x:x, y:y}
	  //   var st, mo, en 
			// this.addEventListener("pointerdown", detectInputType, false);
			// //pointerType="touch"
			// function detectInputType(e){
			//   this.pointerType=e.pointerType
			//   console.log(this.pointerType)
				// console.log(this.bointer)
				// console.log(this.getAttribute("bointer"))
		  //   if(this.bointer=='mouse'){
		  //   	this.els.itpo.addEventListener("mousedown", this.handleItpoStart.bind(this), false);
		  //  	 	this.els.svg.addEventListener("mousemove", this.handleItpoMove, false);		  
		  //  	 	this.els.svg.addEventListener("mouseup", this.handleItpoEnd, false);		  
		  //   } else{
		  //   	this.els.itpo.addEventListener("touchstart", this.handleItpoStart.bind(this), false);
		  //   	this.els.itpo.addEventListener("touchmove", this.handleItpoMove, false);	
		  //   	this.els.itpo.addEventListener("touchend", this.handleItpoEnd, false);		  
		  //   }
			// }    
		}
	  disconnectedCallback() {
	  	console.log('disconnect callback')
	  }
	  attributeChangedCallback(attrName, oldVal, newVal) {
	  	console.log('attribute changed', attrName, oldVal, newVal)
	  	switch(attrName){
	  		case 'bointer':
	  			if(oldVal!=newVal){
	  				console.log('pointer changed to', newVal)
				    if(newVal=='mouse'){
				    	console.log(this.els.itpo)
				    	this.els.itpo.removeEventListener("touchstart", this.handleItpoStart, false);
				    	this.els.itpo.removeEventListener("touchmove", this.handleItpoMove, false);	
				    	this.els.itpo.removeEventListener("touchend", this.handleItpoEnd, false);		  
				    	this.els.itpo.addEventListener("mousedown", this.handleItpoStart.bind(this), false);
				   	 	this.els.svg.addEventListener("mousemove", this.handleItpoMove.bind(this), false);		  
				   	 	this.els.svg.addEventListener("mouseup", this.handleItpoEnd.bind(this), false);		  
				    } else{
				    	this.els.itpo.removeEventListener("mousedown", this.handleItpoStart, false);
				   	 	this.els.svg.removeEventListener("mousemove", this.handleItpoMove, false);		  
				   	 	this.els.svg.removeEventListener("mouseup", this.handleItpoEnd, false);		  
				    	this.els.itpo.addEventListener("touchstart", this.handleItpoStart.bind(this), false);
				    	this.els.itpo.addEventListener("touchmove", this.handleItpoMove.bind(this), false);	
				    	this.els.itpo.addEventListener("touchend", this.handleItpoEnd.bind(this), false);		  
				    }	  				
	  			}
	  			break
	  		case 'sched':
	  			this.newSched=newVal
	  			break	
	  	}

	  	
	  }
	 	handleItpoStart() {
	 		console.log('in start')
	 		// console.log(this.getAttribute("sched"))
	 		// console.log(this.newSched)
	 		// console.log(this.sched)
	 		// console.log(this.rlo)
	 	}
	 	handleItpoMove(){
	 		console.log("in move")
	 	}
	 	handleItpoEnd(){
	 		console.log("in end")
	 	}
	}
	window.customElements.define('sb-timer', SbTimer);  	
})();