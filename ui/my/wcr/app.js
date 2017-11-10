console.log('appjs loaded')

var mes = document.getElementById('mes')
mes.innerHTML = JSON.stringify('hello dog')

var sbt = document.getElementById('sbt');

// var observer = new MutationObserver(function(mutations) {
//   mutations.forEach(function(mutation) {
//     //console.log(mutation);
//     if(mutation.attributeName=='sched'){
//     	console.log(sbt.getAttribute("sched"))
//     }
//   });    
// });

// var config = { attributes: true, childList: true, characterData: true };

// observer.observe(sbt, config);
const setPointer=(e)=>{
	if(e.pointerType!=sbt.getAttribute("bointer")){
		sbt.setAttribute("bointer", e.pointerType)
		console.log(sbt.getAttribute("bointer"))
	}
}
window.addEventListener("pointerdown", setPointer, false);



const sendSched=()=>{
	var scarr = [[0,0,34],[7,10,54]]
	sbt.setAttribute("sched", '[[0,0,45], [9,10,68]]')
	sbt.scarr=scarr
	console.log(sbt.getAttribute("sched"))
	console.log(sbt.scarr)
}