var Car = /** @class */ (function () {
    function Car() {
        this.make = "fiat600";
    }
    Car.prototype.drive = function () {
        console.log("Driving a ".concat(this.make));
    };
    return Car;
}());
