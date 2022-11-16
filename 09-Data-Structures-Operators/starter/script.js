'use strict';
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
  },

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
  orderPasta(ing1, ing2, ing3) {
    console.log(`You ingridients are ${ing1}, ${ing2}, ${ing3}`);
  },
};

///////////////////////////////////////
const rest1 = {
  name: 'Capri',
  numGuests: 0,
};

const rest2 = {
  name: 'La piazza',
  owner: 'Giovanni Rossi',
};

//OR assigment operator
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;
rest1.numGuests ||= 10;
rest2.numGuests ||= 10;

//nullish assigment operator (null or undefined)
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

//AND assigment operator
rest1.owner &&= 'ANONYMOUS';
rest2.owner &&= 'ANONYMOUS';

console.log(rest1);
console.log(rest2);

//Nullish Operator: bring null and undefined(not 0 or empty)

// restaurant.numGuests = null;
// const guest2 = restaurant.numGuests || 10;
// console.log(guest2);

// const guest = restaurant.numGuests ?? 10; //se caso for undefined ou null, ele mostra o 10
// console.log(guest);

// Short Circuiting (&& and ||)

///OR OPERATOR
// Use ANY data type, return ANY data type, short-circuiting
// console.log(3 || 'Jonas'); //se o primeiro elemento for verdadeiro, sempre irá considera-lo
// console.log('' || 'Jonas');
// console.log(true || 0);
// console.log(undefined || null);
// console.log(undefined || 0 || '' || 'Hello' || 23 || null);

// restaurant.numGuests = 25;
// const guest1 = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guest1);

// const guest2 = restaurant.numGuests || 10;
// console.log(guest2);

// ////AND OPERATOR
// console.log(0 && 'Jonas'); //quando o primeiro elemento for falso
// console.log(7 && 'Jonas'); //o ultimo elemento volta, pq se os dois elementos forem verdadeiro

//Spread Element
// const arr = [8, 9, 0];
// const newArr = [1, 2, 3, ...arr];
// console.log(newArr);

// console.log(...newArr);

//add elements inside of object of array
// const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// console.log(restaurant);

//copy array
// const mainMenuCopy = [...restaurant.mainMenu];
// console.log(mainMenuCopy);

//copy 2 arrays
// const menuCopy = [...restaurant.mainMenu, ...restaurant.categories];
// console.log(menuCopy);

// Iterables: arrays, strings, maps, sets. NOT objects
//esperando quando passamos em uma functions ou em Arrays
// const str = 'Vinicius';
// const letters = [...str, ' '];
// console.log(letters);

// const ingredients = [
//   prompt('Write you first ingrisient: '),
//   prompt('the second ingridient: '),
//   prompt('the third ingridient: '),
// ];

// console.log(ingredients);

//old fashion
// restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
//spread operator
// restaurant.orderPasta(...ingredients);

//Objects
// const newRestauranteCopy = {
//   foundedIn: 1995,
//   ...restaurant,
//   founder: 'Vinicius dias',
// };
// console.log(newRestauranteCopy);

// const restauranteCopy = { ...newRestauranteCopy };
// restauranteCopy.name = 'Ristaurante do Dias';
// console.log(restauranteCopy.name);
// console.log(restaurant.name);

/*Rest Pattern */
//usa os tres pontos, mas faz o oposto do Spread Operator
//pack elementos to an array

/////////////////////

// Destructuring Objects
// restaurant.orderDelivery({
//   time: '22:30',
//   address: 'Via del Sole, 21',
//   mainIndex: 2,
//   starterIndex: 2,
// });

// restaurant.orderDelivery({
//   address: 'Via del Sole, 21',
//   starterIndex: 1,
// });

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
