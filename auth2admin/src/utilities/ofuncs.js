import { Observable } from 'rxjs/Observable';
import {from} from 'rxjs/add/observable/from';
import {filter} from 'rxjs/add/operator/filter';
import {map} from 'rxjs/add/operator/map';

const array = [1, 2, 3, 4, 5, 6]
const evenNumbers = Observable.from(array)
  .filter(x => {
  	return x % 2===0
	})

export{evenNumbers}