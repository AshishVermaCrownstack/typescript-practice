"use strict";
exports.__esModule = true;
function count10() {
    for (var count = 1; count < 10; count++) {
        console.log(count);
    }
    // console.log(count);
}
count10();
// Data Types
var a;
var b;
var c;
var d;
var e;
var f;
var g;
// Arrays
var h = ['a', 'b', 'c'];
var i = [1, 2, 3, 4, 5];
var j = ['a', 32, 45, 'b'];
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Blue"] = 2] = "Blue";
    Color[Color["Green"] = 3] = "Green";
})(Color || (Color = {}));
var backgroundColor = Color.Red;
console.log("Background Color - " + backgroundColor);
// Type assertion
var message;
message = "Hello";
var endsWithO = message.endsWith('o');
var alternativeWay = message.endsWith('o');
console.log("String ends with O - " + endsWithO + " " + alternativeWay);
// Interface
// interface Point {
//     x: number,
//     y: number
// }
// let draw = (point: Point) => {
//     console.log(point.x + " " + point.y)
// }
// draw({
//     x: 3,
//     y: 7
// })
// Class 
// class Point {
//     constructor(private _x?: number, private _y?: number) {
//     }
//     draw() {
//         console.log("X - " + this._x + " Y - " + this._y);
//     }
//     get x() {
//         return this._x;
//     }
//     set x(newValue) {
//         if (newValue < 0) {
//             throw new Error("Value can't be less than 0");
//         }
//         else {
//             this._x = newValue;
//         }
//     }
// }
// Module
var point_1 = require("./point");
var point = new point_1.Point(3, 5);
var x = point.x;
point.draw();
