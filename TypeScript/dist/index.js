"use strict";
function greeter(person) {
    return "Hello," + person;
}
var user = "Asterwen";
function warnUser() {
    console.log('Get Me1');
}
warnUser();
var Animal = (function () {
    function Animal(name, numFeet) {
        this.feet = 18;
    }
    return Animal;
}());
var Size = (function () {
    function Size(meters) {
        this.feet = 20;
    }
    return Size;
}());
var a;
var ss;
console.log(ss = a);
console.log(a = ss);
//# sourceMappingURL=index.js.map