"use strict";
exports.__esModule = true;
exports.Point = void 0;
var Point = /** @class */ (function () {
    function Point(_x, _y) {
        this._x = _x;
        this._y = _y;
    }
    Point.prototype.draw = function () {
        console.log("X - " + this._x + " Y - " + this._y);
    };
    Object.defineProperty(Point.prototype, "x", {
        get: function () {
            return this._x;
        },
        set: function (newValue) {
            if (newValue < 0) {
                throw new Error("Value can't be less than 0");
            }
            else {
                this._x = newValue;
            }
        },
        enumerable: false,
        configurable: true
    });
    return Point;
}());
exports.Point = Point;
