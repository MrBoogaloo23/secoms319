/*
William Schulte
Feb, 8, 2023
Activity06 = Variables
*/

console.log("Activity06 -- Variables");

//Q1 : Is it permited?
console.log("Q1 ---------------")
var var1 = "Iowa";
console.log(var1);

var var1 = 124;
console.log(var1);

//Is it permited?
console.log("Yes")

//Q2 : Is it valid?
console.log("Q2 ---------------")
let var2 = "Ames";
console.log(var2);
//let var2 = 124;

//Is it valid?
console.log("No, we cannot define var2 twice using let")

//Q3 : Is it valid?
console.log("Q3 ---------------")
let var3 = "ISU";
console.log(var3);
var3 = 2023;
console.log(var3);

console.log("Valid ? Yes, as we only define var3 once using let")

//Q4 : Explain the error
console.log("Q4 ---------------")
let var4;
//const var5;

console.log("What's the error ? A const is needed to intialize")

//Q5 : Explain the error
console.log("Q5 ---------------")
const var6 = 3.1415;
//var6 = 2.8;
console.log(var6);

console.log("What's the error ? we cannot redefine var6 as something else if its already a constant")

//Q6 : Explain the error
let firstName = "William";
console.log("Defining the variable with a space caused the error")
let numbers = [1,2];
console.log("cannot have a number as the first thing in a JS variable name")
let city_state = "Ames Iowa";
console.log("- does subsitute _ for a space")

//Q7 : What !! ??
let mainCity = "DesMoines";
console.log("This is the Capital", mainCity)

console.log("JS is case sensitive to what is being called, so change MainCity in the log to mainCity")

// Q8 : "let" and "const" scope vs "var" scope
if (5 === 5){
    var var7 = 100;
}
console.log(var7);

if(5 === 5){
    var8 = 100;
}
console.log(var8);

console.log("Let/Const does not define var8, using either for var8 throws an error")