
const storageLocal = (item)=>{
	var itemStr =  localStorage.getItem(item)
	const getItem=()=>{
		if(!localStorage.getItem(item)){
			return null
		}
		return JSON.parse(localStorage.getItem(item))
	}
	const setItem=(obj)=>{
		localStorage.setItem(item, JSON.stringify(obj))
	}
	var itemObj
	return{
		itemStr: itemStr,
		getItem: getItem,
		setItem: setItem,
		addToSet: (ob)=>{
			function isEmailIn(el,i,x){
				return (x[i].email==ob.email)
			}
			var x = getItem()
			if (!x){
				x=[]
			}else{
				var idx = x.findIndex(isEmailIn)
				if (idx >-1){
					console.log('already here')
					x[idx]=ob
				}else{
					console.log('not here adding new email/key')
					x.push(ob)
				}
			}
			setItem(x)
		}
	}
}


export{storageLocal}

/*currying example*/
const stoLo = (i, s, a) =>{
	return {
		i: i, 
		s: s, 
		a: a
	}
}
const sol = (i)=>((s,a)=>stoLo(i,s,a))
const sl = sol('item')
//console.log(sl("search", "array"))


