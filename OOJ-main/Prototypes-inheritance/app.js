'use strict';

// Person constructor 
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

// Greeting
Person.prototype.greeting = () => {
  return `Hello there ${this.firstName} ${this.lastName}`; 
}

const person1 = new Person('Luigi', 'Matias');

// Customer constructor
function Customer(firstName, lastName, phone, membership) {
  Person.call(this, firstName, lastName);

  this.phone = phone;
  this.membership = membership;
}

// Inherit the Person prototype methods
Customer.prototype = Object.create(Person.prototype);

// Create customer
const customer1 = new Customer('Luigi', 'Matias', '123-456-7890', 'BlackCard');

console.log(customer1);

// Error because there is there is no inherit to the Person
console.log(customer1.greeting());