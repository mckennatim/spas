function el(id){
	return document.getElementById(id)
}

const dog = (cat)=>{
	console.log(cat)
	return 'girl'
}

const setContent = (content, id)=> {
  el(id).innerHTML = content;
};

var templatize = (function(){
  var cache = {};
  function generateTemplate(template){
    var fn = cache[template];
    if (!fn){
      // Replace ${expressions} (etc) with ${map.expressions}.
      var sanitized = template
        .replace(/\$\{([\s]*[^;\s]+[\s]*)\}/g, function(_, match){
            return `\$\{map.${match.trim()}\}`;
        })
        // Afterwards, replace anything that's not ${map.expressions}' (etc) with a blank string.
        .replace(/(\$\{(?!map\.)[^}]+\})/g, '');
      fn = Function('map', `return \`${sanitized}\``);
    }
    return fn;
  };
return generateTemplate;
})();

export {dog, setContent, templatize}