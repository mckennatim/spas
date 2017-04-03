//import Rx from 'rxjs'
import { Observable } from 'rxjs/Observable';
import from from 'rxjs/add/observable/from';
import filter from 'rxjs/add/operator/filter';

const dog=(a)=>console.log(a)

const array = [1, 2, 3, 4, 5, 6, 7 , 8]

const evenNumbers = Observable.from(array)
  .filter(x => {
  	return x % 2 === 0
	})

		
export{dog, evenNumbers}