function formatDate(userDate) {
  var userDateYear = userDate.substring(6,10);
  var userDateMonth = userDate.substring(0,2);
  var userDateDay = userDate.substring(3,5);
  
  var formattedDate = userDateYear.concat(userDateMonth,userDateDay);
  return formattedDate;
}  
console.log(formatDate('11/26/2019'));//Introducir el valor deseado
