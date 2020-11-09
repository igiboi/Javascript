'use stric'

const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
  console.log(this); // undefined 
}

calcAge(1994);

const calcAgeArrow = birthYear => {
  console.log(2037 - birthYear);
  console.log(this); // returns parent function Global scale aka Window parent because of the arrow function
}