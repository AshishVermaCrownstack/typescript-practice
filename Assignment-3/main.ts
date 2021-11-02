export { }
function count10() {
    for (let count = 1; count < 10; count++) {
        console.log(count);
    }

    // console.log(count);
}
count10();

// Data Types

let a: number;
let b: string;
let c: boolean;
let d: null;
let e: undefined;

let f: any;
let g: unknown;

// Arrays

let h: string[] = ['a', 'b', 'c'];
let i: number[] = [1, 2, 3, 4, 5];

let j: any[] = ['a', 32, 45, 'b'];

enum Color { Red = 1, Blue = 2, Green = 3 }
let backgroundColor = Color.Red;
console.log("Background Color - " + backgroundColor)

// Type assertion

let message;
message = "Hello";

let endsWithO = (<string>message).endsWith('o');
let alternativeWay = (message as string).endsWith('o');

console.log("String ends with O - " + endsWithO + " " + alternativeWay)

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

import { Point } from './point'

let point = new Point(3, 5);
let x = point.x;
point.draw();


