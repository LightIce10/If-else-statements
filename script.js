// 4 Booleans
// let x = 10, y = 0, z = "pop",  w = "POP";

// console.log(x > y); // true
// console.log(x != y); // true
// console.log(x < y); // false
// console.log(z == w); // false
// console.log(z.toUpperCase() == w); // true

// Example: student says that x = 10 is a boolean expression
// = is the assignment operator, for assigning data to variables
// == is the equality compasison operator which checks if two calues are the same

// Example. Surfs Up.
// var surfHeight = +prompt("How tall are the waves?");
// if (surfHeight >= 6) {
//   alert("Great day for surfing");
// } else {
//   alert("Go body boarding!");
// }

// // Example. Comics.
// var comicChar = prompt("Enter a comic book character");
// if (comicChar.toLowerCase() == "batman") {
//   alert(`${comicChar} is from DC Comics`);
// }

// // if (comicChar.toLowerCase() == "wonder woman") {
// //   alert(`${comicChar} is from DC Comics`);
// // }

// // if (comicChar.toLowerCase() == "spiderman") {
// //   alert(`${comicChar} is from Marvel Comics`);
// // }

// // if (comicChar.toLowerCase() == "ironman") {
// //   alert(`${comicChar} is from Marvel Comics`);
// //}

// // Example Secret Number
// const SECRET_NUMBER = Math.floor(Math.random() * 11);
// let guess = +prompt("Guess a number between 1 and 10");

// if (guess == SECRET_NUMBER) {
//   alert("You guessed it!");
// } else {
//   alert("INCORRECT");
// }

// console.log(SECRET_NUMBER);

// // Example. Surfs Up Part 2.

// Example. Circle Area.
// let rad = +prompt("Enter circle radius");
// let area = Math.PI * rad ** 2;

// if (rad > 0) {
//     // radius entered was good
//   alert("The area of circle with radius " + rad + " is " + area.toFixed(2));
// } else {
//     // radies entered was bad
//   alert("It is not allowed to be a negative number");
// }

// Example Secret Number Part 2.
// const SECRET_NUMBER = Math.floor(Math.random() * 11);
// let guess = +prompt("Guess a number between 1 and 10");

// if (guess == SECRET_NUMBER) {
//   alert("You guessed it!");
// } else {
//   alert("INCORRECT");

//   // after getting it wrong
//   // tell them more info
//   if (guess > SECRET_NUMBER) {
//     alert("Your guess was too high");
//   } else {
//     alert("Your guess was too low");
//   }

//   alert(`The secret # was ${SECRET_NUMBER}`);
// }

// Example. Even or Odd.
// Example. Write an evens application that prompts the user for a number bigger than 100 and then displays "Even Number" or "Odd Number" appropriately
// var number = +prompt("Enter a number greater than 100");
// if (number >= 100) {
//   // now say if it is even or odd
//   let remainder = number % 2;
//   if (remainder == 1) {
//     alert("Your # is odd");
//   } else {
//     alert("Your # is even");
//   }
// } else {
//   alert("Your # is too small");
// }

// // Example. Surfs Up Part 3.
// > Example. Modify the Surfs Up application to display “Great day for surfing!” when the waves are 6 feet or over, “Go
// > body boarding!” when the waves are between 3 and 6 feet, ”Go for a swim.” when the waves are from 0 to
// > 3 feet, and “Whoa! What kind of surf is that?” otherwise.

// var surfHeight = +prompt("How tall are the waves?");
// if (surfHeight >= 6) {
//   alert("Great day for surfing");
// } else if (surfHeight >= 3) {
//   alert("Go body boarding!");
// } else if (surfHeight >= 0) {
//   alert("Go for a swim");
// } else {
//   alert("Whoa! What kind of surf is that?");
// }

// Assingment - Excercise 1
var numberOfCopies = +prompt("Enter the # of copies to be printed");
if (0 > numberOfCopies) {
  alert("Can't compute");
} else if (numberOfCopies <= 99) {
  pricePerCopy = 0.3;
} else if (numberOfCopies <= 499) {
  pricePerCopy = 0.28;
} else if (numberOfCopies <= 749) {
  pricePerCopy = 0.27;
} else if (numberOfCopies <= 1000) {
  pricePerCopy = 0.26;
} else if (1000 < numberOfCopies) {
  pricePerCopy = 0.25;
}

totalCost = pricePerCopy * numberOfCopies;
alert(
  `Price per copy is: $${pricePerCopy.toFixed(
    2
  )}\nTotal cost is $${totalCost.toFixed(2)}`
);

// Assignment - Excercise 3
var numOfEgg = +prompt("Enter the amount of eggs purchased");

var numOfEggDozen = Math.floor(numOfEgg / 12);
var numOfExtraEggs = numOfEgg % 12; // 25 % 12

if (numOfEggDozen < 0) {
  alert("Can't compute");
} else if (numOfEggDozen < 4) {
  pricePerDozen = 0.5;
} else if (numOfEggDozen < 6) {
  pricePerDozen = 0.45;
} else if (numOfEggDozen < 11) {
  pricePerDozen = 0.4;
} else if (numOfEggDozen > 11) {
  pricePerDozen = 0.35;
}

pricePerExtras = (1 / 12) * pricePerDozen;
priceOfExtras = numOfExtraEggs * pricePerExtras;

totalCost = numOfEggDozen * pricePerDozen + priceOfExtras;

alert(`The total cost is: $${totalCost.toFixed(2)}`);

// Assignment - Excercise 5

var grade = +prompt("Enter a percentage");

if (grade < 60) {
  alert("The corresponding letter grade is: F");
} else if (grade < 69) {
  alert("The corresponding letter grade is: D");
} else if (grade < 79) {
  alert("The corresponding letter grade is: C");
} else if (grade < 89) {
  alert("The corresponding letter grade is: B");
} else if (grade < 100) {
  alert("The corresponding letter grade is: A");
}

// Assingment - Excercise 2
alert("Enter package dimensions");
var Weight = +prompt("Enter weight in kilograms");
var Length = +prompt("Enter length in centimeters");
var Height = +prompt("Enter height in centimeters");
var Width = +prompt("Enter width in centimeters");

// calc of volume
var packageVolume = Length * Height * Width;

if (Weight > 27 && packageVolume > 100000) {
  alert("Too heavy and too large");
} else if (Weight > 27) {
  alert("Too heavy");
} else if (packageVolume > 100000) {
  alert("Too large");
}
