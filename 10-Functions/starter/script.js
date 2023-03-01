'use strict';

// //DEFAULT PARAMETERS
// // const bookings = [];

// // const createBooking = function (
// //   flightNum,
// //   numPassengers = 1,
// //   price = 199 * numPassengers
// // ) {
// //   //ES5
// //   //   numPassengers = numPassengers || 1;
// //   //   price = price || 199;

// //   const booking = {
// //     flightNum,
// //     numPassengers,
// //     price,
// //   };

// //   console.log(booking);
// //   bookings.push();
// // };

// // createBooking('LH1994');
// // createBooking('LH1995', 2, 800);
// // createBooking('LH1996', 5);

// // createBooking('LH1997', undefined, 100);

// const flight = 'LH1234';
// const jonas = {
//   name: 'Vinicius Dias',
//   passport: 444445324,
// };

// const checkIn = function (flightNum, passenger) {
//   // (flightNum = 'LH999'), nao troca o valor da variavel
//   passenger.name = 'Mr.' + passenger.name;

//   if (passenger.passport === 444445324) {
//     //alert('Check in');
//   } else {
//     //alert('Wrong passport!');
//   }
// };

// // checkIn(flight, jonas);
// // console.log(jonas);

// /* Dois funcoes para o mesmo objeto pode causar confusao */
// const newPassport = function (person) {
//   person.passport = Math.trunc(Math.random() * 10000000);
//   console.log(jonas);
//   console.log(person.passport);
// };

// newPassport(jonas);
// checkIn(flight, jonas);

//JS NAO TEM PASSAGEM POR REFERENCIA, APENAS POR VALUE.

/* HIGH-ORDER FUNCTION 
  - A function that receives another functions as an argument, that returns a new 
  function, or both
  -this is only possible because of first-class functions
*/

//Functions Accepting Callback Functions
/*
const oneWrod = function (str) {
  return str.replace(/ /g, '-').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

//HIGH-ORDER FUNCTION
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed by: ${fn(str)}`);

  console.log(`Transformed by: ${fn.name}`); //nome da funcao
};

transformer('JavaScript is the best!', upperFirstWord); //upperFirstWord = callback function
transformer('JavaScript is the best!', oneWrod);

//JS uses callbacks all the time
const highFive = function () {
  console.log('high five');
};

document.body.addEventListener('click', highFive); //highfive = callback functions

['jonas', 'Martha', 'Adma'].forEach(highFive);
*/
// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} - ${name}`);
//   };
// };

// const greeterHey = greet('hey');
// greeterHey('Jose');
// greeterHey('Muricy');

// greet('oi')('gabs');

//ARROW FUNCTIONS
const greet2 = greeting => name => {
  console.log(`${greeting} - ${name}`);
};

greet2('hi')('Caio');
