const Person = function (name, age, stomach) {
  this.age = age;
  this.name = name;
  this.stomach = [];
  return this.age;
};
Person.prototype.eat = function () {
  if (this.stomach.length <= 10) {
    this.stomach.push("edible");
  }
  return this;
};
Person.prototype.poop = function () {
  this.stomach = [];
  return this;
};
Person.prototype.toString = function () {
  return this.name + ` ` + this.age;
};
let Poxos = new Person(`Poxos`, 35);
console.log(Poxos.toString());
