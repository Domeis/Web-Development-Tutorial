// variables and data types.
// var is the old way
// let and const is the new way (Constant variable usually used when it needs to be defined only once.)
// Const's value cannot be changed once it is defined)

// let is the malleable way of naming variables (the value can be changed later.)

var life = 100;
life = life - 10;

var character = "Wah";

var checkout = true; // (or false;) BOOLEAN

var box; //undefined variable

var box2 = null; // value of NOTHING

const dmg = 100;

let heal = 100;

console.log(life);

// functions and scopes (global and function)
// adding functions in functions scopes are not available in the global scope
// global scope is avail errwhere.

const name = "Whani";

// uppercasing function.

function toUpper(text) {
  const upperCased = text.toUpperCase();
  console.log(upperCased);
}

toUpper(name);

// add function

function adder(num1, num2) {
  console.log(num1 + num2);
}

adder(5, 10);

// declaring a function without writing the word function
// =>
const toLower = (text) => {
  const lowerCased = text.toLowerCase();
  console.log(lowerCased);
};
toLower(character);

//string concatenation
const myAge = 24;

const yourAge = 21;

console.log(myAge + yourAge);

console.log("Hello it's me MARIO");
console.log("IT's me mario");
console.log("hi my name is " + name + "my age is" + myAge + "yeah...");
console.log(
  `this works better because my name is ${name} and im ${myAge} year old`
);

const combined = name + myAge; // this results in a string rather than number

//If Else statements
const randomNumber = 19;
if (randomNumber === 19) {
  console.log("You are good to go");
} else if (randomNumber < 15) {
  console.log("Definitely Denied");
} else {
  console.log("Access Denied");
}
// double equals doesn't care about the value type. While triple equals does hence why we use triple
// For bigger than or equal to use ">="
// for less than or equal to use "<="
// for more options use "&&"
// or operator is "||"

const dice1 = 6;
const dice2 = 3;
if (dice1 === 6 && dice2 === 3) {
  console.log("Double roll");
} else {
  console.log("NVM");
}

//checking one value (Or Operator)
const dice3 = 6;
const dice4 = 3;
if (dice3 === 6 || dice4 === 6) {
  console.log("Hit");
} else {
  console.log("NVM");
}

//Arrays (variables with multiple values)
//Index for array starts with 0
const rollCall = [
  "jacqulyn ",
  "blake",
  "denice",
  "aaron",
  "timothy",
  "present",
];

console.log(rollCall);

rollCall[0];

//adding elements to arrays
rollCall.push("thank you!");
console.log(rollCall);

//deleting elements to arrays
// pop deletes last value if not specified
rollCall.pop("thank you!");
console.log(rollCall);

//deleting the first elements (rarely used)
rollCall.shift();

//adding elements to 0 index
rollCall.unshift("YO");
console.log(rollCall);

//finding index of an item s
console.log(rollCall.indexOf("blake"));

const blake = rollCall.indexOf("blake");

console.log(rollCall[blake]);

//object and keyword this
const user = {
  name: "Whani",
  age: 29,
  married: false,
  purchases: ["computer", "mouse", "keyboard"],

  sayName: function () {
    console.log(this.name);
  },
};

user.sayName();
console.log(user.purchases);

//THIS keyword opens the Window Object and shows you all the methods available
console.log(this);

//for loop and while loop
const names = ["me", "my", "self", "i"];

for (namess of names) {
  if (namess === "self") {
    console.log("in the list");
    break;
  }
  console.log(namess);
}

let loading = 0;

while (loading < 100) {
  console.log("Web loading");

  loading++;
  //or loading+= 1;
}

//DOM Manipulation
const heading = document.querySelector(".title");
const button = document.querySelector(".click");

//button.addEventListener("click", function () {
//  heading.classList.toggle("change");
// });

const userList = document.querySelectorAll(".name-list li");
const userLists = document.querySelector(".name-list");
const listInput = document.querySelector(".list-input");
const addListBtn = document.querySelector(".addListBtn");

for (users of userList) {
  users.addEventListener("click", function () {
    this.style.color = "red";
  });
}

addListBtn.addEventListener("click", function () {
  //Creat an li
  const newLi = document.createElement("LI");
  const liContent = document.createTextNode(listInput.value);
  //Add the input value inside the new li
  newLi.appendChild(liContent);
  //attaching the li to the user list
  userLists.appendChild(newLi);
});
