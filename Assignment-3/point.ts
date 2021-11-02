export class Point {
    constructor(private _x?: number, private _y?: number) {
    }

    draw() {
        console.log("X - " + this._x + " Y - " + this._y);
    }

    get x() {
        return this._x;
    }

    set x(newValue) {
        if (newValue < 0) {
            throw new Error("Value can't be less than 0");
        }
        else {
            this._x = newValue;
        }
    }
}