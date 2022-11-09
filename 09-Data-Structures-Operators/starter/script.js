'use strict';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },

    order: function (starterIndex, mainIndex) {
      return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },

    orderDelivery({ time, address, mainIndex, starterIndex }) {
      console.log(`Order received! ${this.starterMenu[starterIndex]} 
      and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
    },
  },
};

// Destructuring Objects
restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});

//OBJECT DESTRUCTURING
//escrever o nomes extatos da propriedade para o destructuring
// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

//para mudar o nomes das variaveis, devemos fazer o seguinte:

// const {
//   name: resturantName,
//   openingHours: restaurantHours,
//   categories: restaurantTags,
// } = restaurant;
// console.log(resturantName, restaurantHours, restaurantTags);

/*Default Values*/
//definir por padrao um valor, caso nao tenha valores vindo da api por exemplo
// const { menu = ['nao tem menu'], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);
//sem o [] o valor retornado será undefined

/* Mutating Values */
// valores já atribuidos a uma variavel, quero subtituir minha variavel com valores que estao no objeto({} = )
// let a = 999;
// let b = 8888;
// const obj = { a: 23, b: 34, c: 49 };
// ({ a, b } = obj);
// console.log(a, b);

/* Nested objects */
//destructruing objeto dentro de objeto
// const {
//   fri: { open: o, close: c },
// } = restaurantHours;

// console.log(o, c);

//--------------------------------------//
//ARRAY DESTRUCTURING
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
// const [q, r, s = 1] = [8, 9];
// console.log(q, r, s)
