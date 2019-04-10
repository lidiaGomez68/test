const obj = { p1: {
                    p2: 'value'
                }
            }
function accesor(obj,defValue,path){
var result ="";
console.log('Entra en la funcion');
if(path != null && path != ""){
	if(obj.hasOwnProperty(path)){
  	result = obj[path];
  	console.log(result)
  
  } else {
  	result = defValue;
  }
} else {
	//funcion secundaria accesor path
}
	
  return result;
}

console.log(accesor(obj,null,'p1'));
