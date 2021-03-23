// all valid js is valid ts
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
var _this = this;
// notes on void
function logToConsole() {
    console.log('hi');
    return;
}
// => returns void
// notes on array syntax
var fruits;
var food;
var genericArray;
var genTuple;
// notes on object syntax
var user = {
    firstName: 'paula',
    lastName: 'dixon',
    username: 'pauladixon',
    getUsername: function () { return _this.username; }
};
// enums are another way to organize data
var DaysOfTheWeek;
(function (DaysOfTheWeek) {
    DaysOfTheWeek["MONDAY"] = "monday";
    DaysOfTheWeek[DaysOfTheWeek["TUESDAY"] = void 0] = "TUESDAY";
    DaysOfTheWeek[DaysOfTheWeek["WEDNESDAY"] = void 0] = "WEDNESDAY";
})(DaysOfTheWeek || (DaysOfTheWeek = {}));
var dayToday;
dayToday = DaysOfTheWeek.MONDAY;
var Continents;
(function (Continents) {
    Continents[Continents["North_America"] = 0] = "North_America";
    Continents[Continents["South_America"] = 1] = "South_America";
    Continents[Continents["Africa"] = 2] = "Africa";
    Continents[Continents["Asia"] = 3] = "Asia";
    Continents[Continents["Europe"] = 4] = "Europe";
    Continents[Continents["Antartica"] = 5] = "Antartica";
    Continents[Continents["Australia"] = 6] = "Australia";
})(Continents || (Continents = {}));
// usage
var region = Continents.Africa;
// if you're not ready to specify a type, you can use any
// let authorizedUser: any {
//     firstName: 'paula',
//     lastName: 'dixon',
// }
// but this lacks intellisense as opposed to:
var authorizedUser = {
    firstName: 'paula',
    lastName: 'dixon'
};
// functions with spread
// where the ? makes an argument optional
function add(x, y, z) {
    return x + y + z;
}
var numbers = [1, 2, 3];
console.log(add.apply(void 0, numbers));
// classes
var Person = /** @class */ (function () {
    function Person(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    Person.prototype.getFullName = function () {
        return this.firstName + " " + this.lastName;
    };
    return Person;
}());
var person = new Person("Paula", "Dixon, 30");
console.log(person.getFullName());
// or
var Person2 = /** @class */ (function () {
    function Person2(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    Person2.prototype.getFullName = function () {
        return this.firstName + " " + this.lastName;
    };
    return Person2;
}());
var person2 = new Person2("Paula", "Dixon, 30");
console.log(person.getFullName());
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(id, firstName, middleName, lastName, age) {
        var _this = _super.call(this, firstName, lastName, age) || this;
        _this.id = id;
        _this.middleName = middleName;
        return _this;
    }
    Employee.prototype.getFullName = function () {
        var nameSegments = _super.prototype.getFullName.call(this).split(' ');
        nameSegments.splice(1, 0, this.middleName);
        return nameSegments[0] + " " + nameSegments[1] + " " + nameSegments[2];
    };
    return Employee;
}(Person2));
var manager = new Employee(1, "paula", "pattison", "dixon", 30);
console.log("" + manager.getFullName());
