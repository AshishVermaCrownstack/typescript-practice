export { }
enum constants {
    pi = 3.14,
    log2 = 0.301,
    e = 2.73
}



function area(radius: number) {
    let circleArea: number = constants.pi * radius * radius;
    return console.log(`Area of circle is ${circleArea}`)
}

function circum(radius: number) {
    let circleCircum: number = 2 * constants.pi * radius;
    return console.log(`Circumfrance of circle is ${circleCircum}`)
}

let r: number = 4;

area(r);
circum(r)

type numORstr = number | string;
type ItemList = {
    item: numORstr,
    price: number
}

function itemList(item: numORstr, price: number) {
    return console.log(`${item} is of Rs.${price}`);
}

function itemList2(items: ItemList) {
    return console.log(`${items.item} is of Rs.${items.price}`)
}

let IL = {
    item: "Salt",
    price: 30
}

itemList("salt", 20);
itemList2(IL);

let arr = [];
arr.push(2);
arr.push(true);
arr.push("Ashish")
console.log(arr)


class Point {
    constructor(private _x?: number, private _y?: number) {

    }

    get x() {
        return this._x;
    }

    set x(value) {
        this._x = value;
    }

    draw() {
        console.log('X: ' + this._x + ', y: ' + this._y);
    }
}


let point = new Point(2, 3);

let x = point.x;
point.draw();
console.log(x)

point.x = 10;
point.draw();