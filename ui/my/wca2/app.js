console.log('appjs loaded')
zx.els.mes = document.getElementById('mes')
zx.els.mes.innerHTML = JSON.stringify(zx.els.bb)

var sbt = document.getElementById('sbt');

var observer = new MutationObserver(function(mutations) {
  mutations.forEach(function(mutation) {
    //console.log(mutation);
    if(mutation.attributeName=='sched'){
    	console.log(sbt.getAttribute("sched"))
    }
  });    
});

var config = { attributes: true, childList: true, characterData: true };

observer.observe(sbt, config);

const sendSched=()=>{
	console.log('schedule sent')
	sbt.setAttribute("sched", '[[0,0,45], [9,10,68]]')
	sbt.asched = [[0,0,45], [9,10,68]]
	console.log(sbt.getAttribute("sched"))
	console.log('sbt.asched is ', sbt.asched)
}