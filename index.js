var add = (a, b) => a + b;
var subtract = (a, b) => a - b;
var multiply = (a, b) => a * b;
var divide = (a, b) => a / b;
var inc = (a) => a + 1;
var dec = (a) => a - 1;
var makeInt = (a) => {
  if (a.toString() == true) {  
    parseInt(a, 10);
  }
};
var makeInt = (a) => parseInt(a, 2);
var makeInt = (a) => {
  if(isNaN(a)) {
    return true;
  }
}
var preserveDecimal = (a) => parseFloat(a);
