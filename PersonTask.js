let Person = function(name, age) {
    this.age = age
    this.name = name
  return this.age
}
const p1 = new Person("Samuel", 24)
const p2 = new Person("Joel", 36)
const p3 = new Person("Lily", 24)
Person.prototype.compareAge = function(param) {
    if( this.age > param.age){
         return this.name + ` is older from ` + param.name
    }
     else if(this.age < param.age){
         return this.name + ` is less from ` + param.name
     }
     else{
         this.name + ` is same as ` + param.name
     }
} 

console.log(p2.compareAge(p1))