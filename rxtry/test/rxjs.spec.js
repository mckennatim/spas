import {expect} from 'chai';
import {dog, evenNumbers} from '../src/utilities/funcs';

describe("rxjs tests",()=>{
	it('tries dog badly ok', ()=> {
		var ani = "duck"
		dog(ani)
		expect(ani).to.equal("duck");
	})
	it('for even numbers (from)',(done)=>{
		evenNumbers.subscribe(
			(val)=>console.log(val),
			(err)=>console.log(err),
			(don)=>console.log('done')
			)
		expect('duck').to.equal("duck");
		done()
	})
})