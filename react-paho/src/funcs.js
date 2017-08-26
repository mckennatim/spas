import envmy from '../envmy.json'
import env from '../env.json'

var cfg=env[envmy.m||'local']

const dog = (cat)=>{
	console.log(cat)
	return 'girl'
}


export {dog, cfg}