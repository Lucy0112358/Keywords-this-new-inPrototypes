const Car = function ( model, milesPerGallon){
    this.model = model;
    this.milesPerGallon = milesPerGallon;
    this.odometer = 0;
    this.tank = 0
}
Car.prototype.fill = function(gallons){
     this.tank+=gallons
     return this
}
Car.prototype.drive = function (dist) {
  const drivableMiles = this.tank * this.milesPerGallon;
  if (dist <= drivableMiles) {
    this.odometer = this.odometer + dist;
    this.tank = this.tank - (dist / this.milesPerGallon)
  } else {
    this.odometer = this.odometer + drivableMiles;
    this.tank = 0;
    return `I ran out of fuel at ${this.odometer} miles!`
  }
  return this
}
let mercedes = new Car(`Mercedes`, 5)
console.log(mercedes.fill(12).drive(2000));