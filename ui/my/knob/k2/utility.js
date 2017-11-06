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

function moveTouchPoint(el,rad,r){
  var xo = Math.round(r*Math.cos(rad)+cx)
  var yo = Math.round(-r*Math.sin(rad)+cy)
  var str = `M${cx} ${cy} L${xo} ${yo} `
  console.log(str)
  prad.setAttribute("d", str)
  el.setAttribute("cx", xo)
  el.setAttribute("cy", yo)    
}