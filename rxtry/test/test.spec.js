import {expect} from 'chai';
import {dog} from '../src/utilities/funcs';

describe("a dog is a duck",()=>{
	it('tries dog badly ok', ()=> {
		var ani = "duck"
		dog(ani)
		expect(ani).to.equal("duck");
	})
	it('sees if ... is workin',()=>{
		var state = {name: 'James', rtpg: 'jand'}
		state = {...state, rtpg: 'dog'}
		console.log(state);
		expect(state.rtpg).to.equal('dog');
	})
})