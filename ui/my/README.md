#spas/ui/my

## k3
uses modules

###plan
const onSchedChange=(decan)=>{
    var sched = this.state.sched
    sched[decan.key] = decan.val
    this.setState(sched)
}

this.state.sched ={
    day: "daily, weekday, weekend, 1256"
    loc: "tobins rm"
    deflo: 62,
    defhi: 68,
    raw: [
        [0,0,59],
        [9,10,74],
        [9,40,62],
        [17,0,68],
        [22,30,58]
    ]
    decans: {
        g1: [0.0, 9.13, 59],
        g2: [9.13, 9.66, 74],
        g3: [9.66, 17.00, 62],
        g4: [17.00, 22.33, 67],
        g5: [22.33, 0.0, 58]
    }
} 

<sb-timer sched={schedarr} schedChange={onSchedChange}/>

params{
    width,
    height,    
}
derivedParams {
    ctr: {x:width/2, y:height/2},
    rlo: ctr.x*.6,
    rhi: rlo *1.4*
}

rad = coord2rad({x,y})
{x,y} = rad2coord(rad,r)
{hr,min} = rad2time(rad)
rad = time2rad({hr,min})
setval = rlen2setval(rlen)
rlen = setval2rlen(setval)
moveTouchPt(el, rad, rlen)
appendDecan(rad, rlo, rhi, hrs)
    idx = getIndex()  //outside tracker
    ptarr = [[],[],[],[]] = makeDecarr(rad, rlo, rhi, hrs, )
    ds = {leg1: ,leg2: , arc:, corner:} makeDs(ptarr, idx)
    //g ={gname: 'g'+idx, idx: idx}
    var g
    makeGs(ds, g, idx){
        g = document.createElementNS( svgURI, 'g' );
        g,setAttribute("id" "g"+idx) 
        g.setAttribute( 'stroke-width', "5")
        g.setAttribute( 'stroke', "firebrick")
        g.setAttribute( 'fill', "none")

        parts = []
        for (i=0,i<3){
            parts[i] = document.createElementNS( svgURI, 'path' );)
            parts[i].setAttribute("id" "g"+idx+i+1)
            parts[i].setAttribute("d" ds[i])
        }
        for(j=2,j<5){
            parts[i] = document.createElementNS( svgURI, 'circle' );)
            parts[i].setAttribute("id" "g"+idx+i+1)
            parts[i].setAttribute("cx" ds[i][0])
            parts[i].addEventListener(ltype, redrawDecan)
        }
    }

    displayDecan(newg){
        svg.appendChild(g)
    }
    
    g2.addListeners(inputType.move, adjDecan)
adjDecan(ev) {
   target = circle#id 
   type = mousemove
}

posOnArc = {x,y}= followArc(ev, el, rad)
moveTouchPt(el, {x,y})
redrawDecan(g, {x,y})





##path forward

* build an svg image of a daysched
* add listeners to parts of it

if too complicated

* build a couple of paths with id's
* add listeners to them and see what happens
