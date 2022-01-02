let Calculator = function () {
  return this.a + this.b;
};
let calculator = new Calculator();
calculator.a = 1;
calculator.b = 1;
Calculator.prototype.add = function (a, b) {
  this.a = a;
  this.b = b;
  return this.a + this.b;
};
calculator.subtract = function (a, b) {
  this.a = a;
  this.b = b;
  return this.a - this.b;
};
calculator.multiple = function (a, b) {
  this.a = a;
  this.b = b;
  return this.a * this.b;
};
calculator.divide = function (a, b) {
  this.a = a;
  this.b = b;
  return this.a / this.b;
};
console.log(calculator.add(1, 1));
console.log(calculator.subtract(2, 2));
console.log(calculator.multiple(3, 3));
console.log(calculator.divide(4, 4));
