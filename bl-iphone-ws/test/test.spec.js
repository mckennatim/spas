import {expect} from 'chai';
import {dog} from '../src/funcs';

describe("a dog is a duck",()=>{
	it('tries dog', ()=> {
		var ani = "duck"
		console.log(dog(ani))
		expect(ani).to.equal("duck");
	})
})