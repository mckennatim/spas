import React from 'react'
import ReactDOM from 'react-dom';
import { Observable } from 'rxjs/Observable';
import * as compoi from './components'

const get=(path, props)=>{
  return path.split(".")
  	.slice(1)
  	.reduce((xs,x)=>(xs && xs[x]) ? xs[x] : null , props)
}

const isObservable = obs => obs instanceof Observable;


const log = console.log.bind(console);

function el(id){
	return document.getElementById(id)
}

const dog = (cat)=>{
	console.log(cat)
	return 'girl'
}

const render = (pg, para)=>{
  ReactDOM.render(React.createElement(pg, para), document.getElementById('rt')) 
}

const responsivePage=(state)=>{
	let elArr = []
  const {types, sizes, browser, size, page} = state.responsive
  const pageName = page.name
  const browserTypeIdx = types.indexOf(browser)
  const panesPerType = compoi.panes[browserTypeIdx]
  const pageList = compoi.multi.filter((amul,i)=>(amul.pri==pageName))
  if(pageList.length==0){
    const singleElement = compoi[pageName](state)
    elArr.push(singleElement)    
  }else{ 
    const multiList= pageList[0].mul.filter((mu)=>(mu.length==panesPerType))
    // console.log(multiList.length)
    if (multiList.length==0){
      // console.log('no multiList for this screensize -> 1 screen')
      const singleElement = compoi[pageName](state)
      elArr.push(singleElement)    
    }else{
      // console.log(multiList[0])
      const elList = multiList[0].map((pgStr, i)=>{
        const pg = compoi[pgStr](state)
        return pg
      })
      elArr = elList
    }
  }
  console.log(elArr)
  return elArr   
}

export {get, dog, render, isObservable, log, responsivePage}