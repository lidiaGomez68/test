var numArray = new Array;
function orderNumbers(number) {
 var numberLength = number.length;
 
 for(i=0; i<numberLength; i++){
 	var numValue = number.charAt(i);
 	numArray.push(numValue);
 }
 
 var numArraySorted= numArray.sort();
 var numArrayReversed = numArraySorted.reverse();
 var arrayToString = numArrayReversed.join("");
 
 return arrayToString;
  
}  
console.log(orderNumbers('valorNumerico')); //Introducir el valor deseado