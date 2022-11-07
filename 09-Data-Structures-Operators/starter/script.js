'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

//DESTRUCTURING
// const arr = [2, 4, 5, 6];
// const [a, b, c, d] = arr;
// console.log(a, b, c, d);

// const [first, , second] = restaurant.categories;
// console.log(first, second);

//Switching variables
// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);

// [main, secondary] = [secondary, main];
// console.log(main, secondary);

//Receive two return values from a function
// const [start, main] = restaurant.order(2, 0);
// console.log(start, main);

//Nested Array Destructuring
// const nested = [2, 4, [5, 6]];
// const [i, , [j, k]] = nested;
// console.log(i, j, k);

//Default Values
// const [q, r, s] = [8, 9];
// console.log(q, r, s); //s will b undefined
const [q, r, s = 1] = [8, 9];
console.log(q, r, s);
