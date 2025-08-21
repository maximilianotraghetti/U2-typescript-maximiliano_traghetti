var CarWithConstructor = /** @class */ (function () {
    function CarWithConstructor(make) {
        this.make = make;
    }
    CarWithConstructor.prototype.drive = function () {
        console.log("Driving a ".concat(this.make));
    };
    return CarWithConstructor;
}());
var car = new CarWithConstructor("Ford");
car.drive();
