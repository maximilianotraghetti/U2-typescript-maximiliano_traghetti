var Color;
(function (Color) {
    Color["Red"] = "Red";
    Color["Green"] = "Green";
    Color["Blue"] = "Blue";
})(Color || (Color = {}));
function showColor(color) {
    return "El color elegido es ".concat(color);
}
console.log(showColor(Color.Red));
console.log(showColor(Color.Green));
