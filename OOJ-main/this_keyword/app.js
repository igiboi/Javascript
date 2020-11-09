'use stric'

const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
 // console.log(this); // undefined 
}

calcAge(1994);

const calcAgeArrow = birthYear => {
  console.log(2037 - birthYear);
 // console.log(this); // returns parent function Global scale aka Window parent because of the arrow function does not get its own this keyword
}

const jonas = {
  year: 1991,
  calcAge: function() {
    console.log(this);
    console.log(2037 - this.year); // 2037 - 1991
  },
};
jonas.calcAge();

const matilda = {
  year: 2017,
}

matilda.calcAge = jonas.calcAge; // Method borrowing 
matilda.calcAge(); 