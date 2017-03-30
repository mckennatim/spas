import React from 'react'
import ReactDOM from 'react-dom';
import {routing} from './routing'
import {App, Dog} from './components'
import { createStore } from './rxflux';
import { log } from './funcs';
import {initState} from './store'

const container = document.getElementById('app');
createStore(initState)
  .do(log)
  .subscribe((state) =>
    ReactDOM.render(<App {...state} />, container)
  );

var router=routing()

export{router}

