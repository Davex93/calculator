var add = function(number1, number2) {
  return number1 + number2;
};
var subtract =function(number1,number2){
  return number1 - number2;
};
var multiply =function(number1,number2){
  return number1*number2;
};
var divide=function(number1,number2){
  return number1/number2;
};
var number1 = parseInt(prompt("Enter a number:"));
var number2 = parseInt(prompt("Enter another number:"));
var addresult = add(number1, number2);
var subresult = subtract(number1, number2);
var multresult = multiply(number1, number2);
var divresult = divide(number1, number2);
alert("add:"+addresult+", subtract:"+subresult+", multiply:"+multresult+", divide:"+divresult);
