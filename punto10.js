var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var ElectricCar = /** @class */ (function (_super) {
    __extends(ElectricCar, _super);
    function ElectricCar(make, batteryLife) {
        var _this = _super.call(this, make) || this;
        _this.batteryLife = batteryLife;
        return _this;
    }
    ElectricCar.prototype.charge = function () {
        console.log("El coche el\u00E9ctrico ".concat(this.getMake(), " se est\u00E1 cargando \uD83D\uDD0B (Bater\u00EDa: ").concat(this.batteryLife, "%)"));
    };
    return ElectricCar;
}(CarPrivate));
var tesla = new ElectricCar("Tesla", 90);
tesla.drive();
tesla.charge();
