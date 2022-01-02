const Person = function (name, age, stomach) {
  this.age = age;
  this.name = name;
  this.stomach = [];
};
let Baby = new Person();
Baby.favoriteToy = this.favoriteToy;
Baby.play = function (name, favoriteToy) {
  this.name = name;
  this.favoriteToy = favoriteToy;
  return this.name + ` plays with ` + this.favoriteToy;
};
let bab = Object.create(Baby);

console.log(bab.play(`Anna`, `a doll`));
