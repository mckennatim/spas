import React from 'react'
import ReactDOM from 'react-dom';
import { Observable } from 'rxjs/Observable';
import {routing} from './routing'
import {App, Dog} from './components'
import { createStore } from './rxred';
import { log } from './funcs';
import {initState} from './store'
import {setDeviceType} from './actions'

Observable.fromEvent(window, 'resize')
  .debounceTime(300)
  .subscribe((e)=>setDeviceType(window.innerWidth));

const container = document.getElementById('app');
createStore(initState)
  .do(log)
  .subscribe((state) =>
    ReactDOM.render(<App {...state} />, container)
  );

var router=routing()

export{router}

