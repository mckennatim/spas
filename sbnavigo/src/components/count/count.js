import count_html from './count.html'
import Rx from 'rxjs/Rx';
import Immutable from 'immutable';
console.log('in count.js')

var map1 = Immutable.Map({a:1, b:2, c:3});
var map2 = map1.set('b', 50);
console.log(map1.get('b')); // 2
console.log(map2.get('b')); // 50


const count = ()=>{
	document.querySelector('#rt').innerHTML = count_html
	var increaseButton = document.querySelector('#increase');
	var increase = Rx.Observable.fromEvent(increaseButton, 'click')
		.map(() => state => Object.assign({}, state, {count: state.count + 1}));

	var decreaseButton = document.querySelector('#decrease');
	var decrease = Rx.Observable.fromEvent(decreaseButton, 'click')
		.map(() => state => Object.assign({}, state, {count: state.count - 1}));

	var inputElement = document.querySelector('#inp');
	var input = Rx.Observable.fromEvent(inputElement, 'keypress')
	  .map(event => state => Object.assign({}, state, {inputValue: event.target.value}));		

	var state = Rx.Observable
		.merge(increase, decrease, input)
		.scan((state, changeFn) => changeFn(state), {count: 0})

	state.subscribe((state) => {
	  document.querySelector('#cnt').innerHTML = state.count;
	  document.querySelector('#outp').innerHTML = 'Hello ' + state.inputValue;
	});	
}

export {count }

//immutable version not working, state.get('count') not a function
// const count = ()=>{
// 	var initialState = {
// 	  count: 0,
// 	  inputValue: 'dog'
// 	};
// 	var imm = Immutable.fromJS(initialState)
// 	console.log(imm)
// 	document.querySelector('#rt').innerHTML = count_html
// 	var increaseButton = document.querySelector('#increase');
// 	var increase = Rx.Observable.fromEvent(increaseButton, 'click')
// 		.map(() => state => Object.assign({}, state, {count: state.count + 1}));

// 	var decreaseButton = document.querySelector('#decrease');
// 	var decrease = Rx.Observable.fromEvent(decreaseButton, 'click')
// 		.map(() => state => Object.assign({}, state, {count: state.count - 1}));

// 	var inputElement = document.querySelector('#inp');
// 	var input = Rx.Observable.fromEvent(inputElement, 'keypress')
// 	  .map(event => state => Object.assign({}, state, {inputValue: event.target.value}));		

// 	var state = Rx.Observable
// 		.merge(increase, decrease, input)
// 		.scan((state, changeFn) => changeFn(state), Immutable.fromJS(initialState))

// 	state.subscribe((state) => {
// 		console.log(state)
// 	  document.querySelector('#cnt').innerHTML = state.get('count');
// 	  document.querySelector('#outp').innerHTML = 'Hell ' + state.get('inputValue');
// 	});	
// }