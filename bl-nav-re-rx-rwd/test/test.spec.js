import {expect} from 'chai';
import {dog, get} from '../src/utilities';

describe("a dog is a duck",()=>{
	it('tries dog badly ok', ()=> {
		var ani = "duck"
		console.log(dog(ani))
		expect(ani).to.equal("duck");
	})
	it('sees if ... is workin',()=>{
		var state = {name: 'James', rtpg: 'jand'}
		state = {...state, rtpg: 'dog'}
		console.log(state);
		expect(state.rtpg).to.equal('dog');
	})
	it('sees if deep search get() is workin +',()=>{
		var props ={trpg: {id: "333", inv: "inv"}}
		var gotten = get('props.trpg.id',props)
		console.log(gotten);
		expect(gotten).to.equal('333');
	})	
	it('sees if deep search get() is workin -',()=>{
		var props =  {test: {rtpg: 'Home', name: 'frog'}}
		var gotten = get('props.trpg.id',props)
		console.log(gotten);
		expect(gotten).to.equal(null);
	})	
})