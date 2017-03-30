import React from 'react'
import ReactDOM from 'react-dom';
import {routing} from './routing'
import {App} from './components'

var vprops = {name: 'magillicutty'}
ReactDOM.render(<App {...vprops}/>, document.getElementById('app'))	
var router=routing()

export{router}

