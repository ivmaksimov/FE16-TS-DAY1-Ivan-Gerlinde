"use strict";
// Basic ex 1
// Make a multiplication table using TypeScript loops from an array with number values 1 to 10 and the result should look like this:
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < numbers.length; i++) {
    for (let k = 0; k < numbers.length; k++) {
        let result = numbers[i] * numbers[k];
        console.log(`${numbers[i]} x ${numbers[k]} = ${result}`);
    }
    ;
}
;
// Basic ex 2
// 1. Print your full name in the browser (you will have an object that has 2 properties fName and lName).
// 2. Print your first name 10 times in the browser using a forEach loop (don't forget that forEach loop work on arrays, so you can put the object in an array and repeat it). 
// 3. A function should be triggered 5 seconds after opening the page that prints your last name in the console 10 times.
let myName = { fName: "Ivan", lName: "Maksimov" };
let fullName = document.getElementById("full-name");
fullName.innerHTML = myName.fName + " " + myName.lName;
let myNameArray = [];
let name10 = document.getElementById("name10");
for (let i = 0; i < 10; i++) {
    myNameArray.push(myName);
}
;
myNameArray.forEach(function printFName() {
    name10.innerHTML += " " + myName.fName + "<br>";
});
let printLName = () => {
    console.log(`${myName.lName}\n`.repeat(10));
};
setTimeout(printLName, 5000);
//     Basic ex 3
// Create an array of names, this array should only accept strings.
let names = ["Jon", "Jack", "Jordan", "Michael", "Frank"];
for (let i in names) {
    console.log(i);
}
for (let i in names) {
    console.log(names[i]);
}
for (let i in names) {
    console.log("index " + i + " name " + names[i]);
}
