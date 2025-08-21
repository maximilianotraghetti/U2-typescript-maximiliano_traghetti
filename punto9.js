var CarPrivate = /** @class */ (function () {
    function CarPrivate(make) {
        this.make = make;
    }
    CarPrivate.prototype.drive = function () {
        console.log("Driving a ".concat(this.make));
    };
    CarPrivate.prototype.getMake = function () {
        return this.make;
    };
    return CarPrivate;
}());
var car = new CarPrivate("Honda");
car.drive();
console.log(car.getMake());
