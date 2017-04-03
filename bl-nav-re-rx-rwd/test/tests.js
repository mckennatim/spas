import {evenNumbers} from 	'../src/utilities/ofuncs'

evenNumbers.subscribe(
		function (x){console.log(x)},
		function (err){console.log('err: '+err)},
		function (){console.log('done')}
	)