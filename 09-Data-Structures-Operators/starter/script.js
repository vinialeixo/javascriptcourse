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
// Coding Challenge #1

/* 
We're building a football betting app (soccer for my American friends 😅)!

Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')

2. The first player in any player array is the goalkeeper and the others are field players.
For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, 
and one array ('fieldPlayers') with all the remaining 10 field players

3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

*/
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

//1
const [player1, player2] = game.players;
// console.log(player1, player2);

/*2.*/

// const [gk, ...fieldPlayers] = game.players;
// console.log(gk, fieldPlayers);

//3.
// const allPlayers = [...player1, ...player2];
// console.log(allPlayers);

//4
// const players1Final = [...player1, 'Thiago', 'Coutinho', 'Perisic'];
// console.log(players1Final);

//5
// const { team1, x: draw, team2 } = { ...game.odds };
// console.log(team1, draw, team2);

//6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array)
// and prints each of them to the console, along with the number of goals that were scored in total
//(number of player names passed in)

const prinGoals = function (...players) {
  console.log(players);
  console.log(`${players.length} goals were scored`);
};

prinGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
prinGoals('Davies', 'Muller');
prinGoals(...game.scored);

//7. The team with the lower odd is more likely to win.
//Print to the console which team is more likely to win,
//WITHOUT using an if/else statement or the ternary operator.

/////////
// const rest1 = {
//   name: 'Capri',
//   numGuests: 0,
// };

// const rest2 = {
//   name: 'La piazza',
//   owner: 'Giovanni Rossi',
// };

//OR assigment operator
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

// //nullish assigment operator (null or undefined)
// rest1.numGuests ??= 10;
// rest2.numGuests ??= 10;

// //AND assigment operator
// rest1.owner &&= 'ANONYMOUS';
// rest2.owner &&= 'ANONYMOUS';

// console.log(rest1);
// console.log(rest2);

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
//escrever o nomes exatos da propriedade para o destructuring
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
