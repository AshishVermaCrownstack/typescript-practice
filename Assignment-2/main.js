"use strict";
exports.__esModule = true;
var constants;
(function (constants) {
    constants[constants["pi"] = 3.14] = "pi";
    constants[constants["log2"] = 0.301] = "log2";
    constants[constants["e"] = 2.73] = "e";
})(constants || (constants = {}));
function area(radius) {
    var circleArea = constants.pi * radius * radius;
    return console.log("Area of circle is " + circleArea);
}
function circum(radius) {
    var circleCircum = 2 * constants.pi * radius;
    return console.log("Circumfrance of circle is " + circleCircum);
}
var r = 4;
area(r);
circum(r);
function itemList(item, price) {
    return console.log(item + " is of Rs." + price);
}
function itemList2(items) {
    return console.log(items.item + " is of Rs." + items.price);
}
var IL = {
    item: "Salt",
    price: 30
};
itemList("salt", 20);
itemList2(IL);
var arr = [];
arr.push(2);
arr.push(true);
arr.push("Ashish");
console.log(arr);
var Point = /** @class */ (function () {
    function Point(_x, _y) {
        this._x = _x;
        this._y = _y;
    }
    Object.defineProperty(Point.prototype, "x", {
        get: function () {
            return this._x;
        },
        set: function (value) {
            this._x = value;
        },
        enumerable: false,
        configurable: true
    });
    Point.prototype.draw = function () {
        console.log('X: ' + this._x + ', y: ' + this._y);
    };
    return Point;
}());
var point = new Point(2, 3);
var x = point.x;
point.draw();
console.log(x);
point.x = 10;
point.draw();
