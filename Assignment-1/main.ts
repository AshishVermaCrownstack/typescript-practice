export { }
let message = "Hello Ashish";
console.log(message);

let x = 1;
let y;
y = 4;
const sum = x + y;
console.log(sum);

let ans: boolean = true;
let age: number = 21;
let name: string = "Ashish";
let sentence: string = `Hello, My name is ${name} .`;
console.log(sentence);

let score: number = null;
let pass: boolean = undefined;
console.log(score + " / " + pass)

let sports1: string[] = ["cricket", "Basketball", "Kabaddi"];
let sports2: Array<string> = ["cricket", "Basketball", "Kabaddi"];

let list: [string, number] = ["cricket", 40];
console.log(sports1 + " / " + list);

enum Color { red, green, blue }
let clr: Color = Color.green;
console.log(clr);

let myVariable: unknown = 3;
myVariable = "Ashish";

// myVariable();
// console.log(myVariable.name);

function hasName(obj: any): obj is { name: string } {
    return !!obj &&
        typeof obj === "object" &&
        "name" in obj
}

if (hasName(myVariable)) {
    console.log(myVariable.name);
}

(myVariable as string).toUpperCase();

let a;
a = 10;
a = true;

// let b = 10;
// b = false;


let multi: number | boolean;
multi = 10;
multi = true;

function add(num1: number, num2: number = 20): number {
    if (num2) {
        return num1 + num2;
    }
    else {
        return num1;
    }
}

add(5, 10);
add(5);

interface Person {
    firstName: string,
    lastName?: string
}

function fullName(person: Person) {
    console.log(`${person.firstName} ${person.lastName}`)
}

let p = {
    firstName: "Ashish",
    lastName: "Verma"
}

fullName(p);



class employee {
    public employeeName: string;

    constructor(name: string) {
        this.employeeName = name;
    }

    greet() {
        console.log(`GOOD MORNING ${this.employeeName}`)
    }
}

let emp1 = new employee("Ashish");
console.log(emp1.employeeName)
emp1.greet();

class manager extends employee {
    constructor(managerName: string) {
        super(managerName);
    }

    delegateWork() {
        console.log(`Manager delegating task`)
    }
}

let m1 = new manager("Aashish")
console.log(m1.employeeName)
m1.greet();
m1.delegateWork();


