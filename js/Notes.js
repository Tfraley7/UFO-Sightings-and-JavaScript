// import the data from data.js
const tableData = data;
// Reference the HTML table using d3
var tbody = d3.select("tbody");
// Simple JavaScript console.log statement
function printHello() {
    console.log("Hello there!");
  }
  // Takes two numbers and adds them
  function addition(a, b) {
    return a+b;
  }
  // Functions can call other functions
function doubleAddition(c, d) {
    var total = addition(c, d) * 2;
    return total;
  }
  // Simple JavaScript log statement
function printHello() {
    return "Hello there!";
  }
  printHello = () => "Hello there!";
  // Original addition function
function addition(a, b) {
    return a + b;
  }
  // Converted to an arrow function
addition = (a, b) => a + b;
// Original doubleAddition function
function doubleAddition(c, d) {
    var total = addition(c, d) * 2;
    return total;
  }
  doubleAddition = (c, d) => addition(c, d) * 2;

  //print statement for addition
console.log(addition(4, 5));
addition(4, 5);


///Arrow Functions
// Simple JavaScript log statement
function printHello() {
    return "Hello there!";
}
//Condense the code even further
printHello = () => "Hello there!";

// Original addition function
function addition(a, b){
    return a+b;
}

//Converted to an arrow function
addition = (a, b) => a + b;

 // Original doubleAddition function
function doubleAddition(c, d) {
    var total = addition(c, d) * 2;
    return total;
  }
  
  //Conveted to an arrow function
  doubleAddition = (c, d) => addition(c, d)* 2;

  //Create a for loop
  function listLoop(userList){
    for (var i = 0; i < userList.length; i++){
        console.log(userList[i]);
    }
  }

  var vegetables = ["Carrots", "Peas", "Lettuce", "Tomatoes"];

  for (var i = 0; i < vegetables.length; i++) {
      console.log("I love " + vegetables[i]);
  }


//loop the numbers using an array
for (var i = 0; i < 5; i++) {
    console.log("I am " + i);
 }

 //strings
 console.log('Hello ${name}!');

 //String format converted into numeric format
 parseInt();

 //Conditional with logical operators: and
 if (x === 2 && y === 10) {
    console.log("Both values returned true");
 }

 if (x < 45||)