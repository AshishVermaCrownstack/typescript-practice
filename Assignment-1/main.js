"use strict";
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
exports.__esModule = true;
var message = "Hello Ashish";
console.log(message);
var x = 1;
var y;
y = 4;
var sum = x + y;
console.log(sum);
var ans = true;
var age = 21;
var name = "Ashish";
var sentence = "Hello, My name is " + name + " .";
console.log(sentence);
var score = null;
var pass = undefined;
console.log(score + " / " + pass);
var sports1 = ["cricket", "Basketball", "Kabaddi"];
var sports2 = ["cricket", "Basketball", "Kabaddi"];
var list = ["cricket", 40];
console.log(sports1 + " / " + list);
var Color;
(function (Color) {
    Color[Color["red"] = 0] = "red";
    Color[Color["green"] = 1] = "green";
    Color[Color["blue"] = 2] = "blue";
})(Color || (Color = {}));
var clr = Color.green;
console.log(clr);
var myVariable = 3;
myVariable = "Ashish";
// myVariable();
// console.log(myVariable.name);
function hasName(obj) {
    return !!obj &&
        typeof obj === "object" &&
        "name" in obj;
}
if (hasName(myVariable)) {
    console.log(myVariable.name);
}
myVariable.toUpperCase();
var a;
a = 10;
a = true;
// let b = 10;
// b = false;
var multi;
multi = 10;
multi = true;
function add(num1, num2) {
    if (num2 === void 0) { num2 = 20; }
    if (num2) {
        return num1 + num2;
    }
    else {
        return num1;
    }
}
add(5, 10);
add(5);
function fullName(person) {
    console.log(person.firstName + " " + person.lastName);
}
var p = {
    firstName: "Ashish",
    lastName: "Verma"
};
fullName(p);
var employee = /** @class */ (function () {
    function employee(name) {
        this.employeeName = name;
    }
    employee.prototype.greet = function () {
        console.log("GOOD MORNING " + this.employeeName);
    };
    return employee;
}());
var emp1 = new employee("Ashish");
console.log(emp1.employeeName);
emp1.greet();
var manager = /** @class */ (function (_super) {
    __extends(manager, _super);
    function manager(managerName) {
        return _super.call(this, managerName) || this;
    }
    manager.prototype.delegateWork = function () {
        console.log("Manager delegating task");
    };
    return manager;
}(employee));
var m1 = new manager("Aashish");
console.log(m1.employeeName);
m1.greet();
m1.delegateWork();
