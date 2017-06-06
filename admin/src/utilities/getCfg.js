import env from '../../env.json'
const cfg= env[process.env.NODE_ENV||'development']

//console.log(cfg)

const getCfg =()=>{
	return cfg
}

export{getCfg}