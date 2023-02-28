'use strict';

//DEFAULT PARAMETERS
// const bookings = [];

// const createBooking = function (
//   flightNum,
//   numPassengers = 1,
//   price = 199 * numPassengers
// ) {
//   //ES5
//   //   numPassengers = numPassengers || 1;
//   //   price = price || 199;

//   const booking = {
//     flightNum,
//     numPassengers,
//     price,
//   };

//   console.log(booking);
//   bookings.push();
// };

// createBooking('LH1994');
// createBooking('LH1995', 2, 800);
// createBooking('LH1996', 5);

// createBooking('LH1997', undefined, 100);

const flight = 'LH1234';
const jonas = {
  name: 'Vinicius Dias',
  passport: 444445324,
};

const checkIn = function (flightNum, passenger) {
  // (flightNum = 'LH999'), nao troca o valor da variavel
  passenger.name = 'Mr.' + passenger.name;

  if (passenger.passport === 444445324) {
    alert('Check in');
  } else {
    alert('Wrong passport!');
  }
};

// checkIn(flight, jonas);
// console.log(jonas);

/* Dois funcoes para o mesmo objeto pode causar confusao */
const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 10000000);
  console.log(jonas);
  console.log(person.passport);
};

newPassport(jonas);
checkIn(flight, jonas);

//JS NAO TEM PASSAGEM POR REFERENCIA, APENAS POR VALUE.
