var obj = {}
obj.x = 23
obj.y = 3
obj.sum = function(){
    return this.x + this.y;
}
console.log(obj)
console.log(obj.sum())

// class Plane extends vehicle

var vehicle = {maxSpeed: 300}
var plane = {maxAltitude: 10000}
// Inheritance in objects
plane.__proto__ = vehicle
console.log(plane.maxAltitude)
console.log(plane.maxSpeed)
console.log(plane)