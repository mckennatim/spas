var cx=200;
var cy=200;
var r=100
var pi=Math.PI
var bx,by, orad, erad, eang, oang;
var inner = document.getElementById('inner');
var prad = document.getElementById('prad');
var circle = document.getElementById('circle');
var smcircle = document.getElementById('smcircle');
var mes = document.getElementById('mes');
var mes1 = document.getElementById('mes1');
//console.log(smcircle)
smcircle.addEventListener("touchstart", handleStart, false);
//smcircle.addEventListener("mousedown", handleStart, false);
smcircle.addEventListener("touchend", handleEnd, false);
smcircle.addEventListener("touchcancel", handleCancel, false);
smcircle.addEventListener("touchmove", handleMove, false);    
//smcircle.addEventListener("mousemove", handleMouseMove, false);   

window.addEventListener("pointerdown", detectInputType, false);

function detectInputType(e){
    console.log('detecting ', e.pointerType)
    //mes.innerHTML=e.width+e.pointerType
}   

function handleStart(e){
  e.preventDefault();
  bx = Math.round(smcircle.getAttribute("cx"))
  by = Math.round(smcircle.getAttribute("cy"))
  console.log('center '+bx+','+by)
  var dex = bx-cx
  var dey = cy-by
  orad = calcAng(dey,dex)  
  oang = (orad*180/Math.PI).toFixed(1)
  smcircle.setAttribute("r", 10)
  mes.innerHTML=oang
  console.log("start ang ", orad)
}

function calcAng(dy,dx){
  var ang
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

function handleEnd(e){
  e.preventDefault();
  var touchobj = e.changedTouches[0]
  var ex = Math.round(touchobj.pageX)
  var ey = Math.round(touchobj.pageY)
  var dex = ex-cx
  var dey = cy-ey
  var dist = (Math.sqrt(Math.pow(bx-ex,2)+Math.pow(by-ey,2))).toFixed(1)
  erad = calcAng(dey,dex)
  eang =(erad*180/Math.PI).toFixed(1)
  // var erad = (Math.atan2(dey,dex)*180/Math.PI).toFixed(1)      
  smcircle.setAttribute("r", 12)
  mes1.innerHTML="angend "+eang+" angbeg "+oang+" dist "+dist
  if(Math.abs(eang-oang)<10 && dist>40){
    console.log("is a swipe")
    mes.innerHTML="Swiped "
    drawRadius(orad)
  }
  console.log("handleEnd")
}

function putOnLine(x,y){

}

function drawRadius(orad){
  var xo = Math.round(r*1.4*Math.cos(orad)+cx)
  var yo = Math.round(-r*1.4*Math.sin(orad)+cy)
  var str = `M${cx} ${cy} L${xo} ${yo} `
  console.log(str)
  prad.setAttribute("d", str)
  smcircle.setAttribute("cx", xo)
  smcircle.setAttribute("cy", yo)    
}

function handleCancel(e){
  e.preventDefault();
  smcircle.setAttribute("r", 12)
  mes1.innerHTML="LOSTit"
  console.log("handleCancel")
}
var tx, ty, dx, dy, nx, ny, ang, fang, mrad;


function handleMove(e){
  e.preventDefault();
  tx = Math.round(e.touches[0].clientX)
  ty = Math.round(e.touches[0].clientY)
  dx = tx-cx
  dy = ty-cy
  mrad = calcAng(dy,dx) 
  nx =  (r*Math.cos(mrad)+cx).toFixed(1)
  ny = (r*Math.sin(mrad)+cy).toFixed(1)
  mes1.innerHTML = (24-mrad*3.819719).toFixed(1)
  smcircle.setAttribute("cx", nx)
  smcircle.setAttribute("cy", ny)
}
function handleMouseMove(e){
  e.preventDefault();
  tx = Math.round(e.clientX)
  ty = Math.round(e.clientY)
  dx = tx-cx
  dy = ty-cy
  mrad = calcAng(dy,dx) 
  nx =  (r*Math.cos(mrad)+cx).toFixed(1)
  ny = (r*Math.sin(mrad)+cy).toFixed(1)
  mes1.innerHTML = (24-mrad*3.819719).toFixed(1)
  smcircle.setAttribute("cx", nx)
  smcircle.setAttribute("cy", ny)
}
