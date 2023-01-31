'use strict';
const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },

  [weekdays[2]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours,

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

//SET:
/* SETs: nunca pode ter um conjunto com duplicatadas */

///////////////////////////////////////
// Coding Challenge #2

/* 
Let's continue with our football betting app!

1. Loop over the game.scored array and print each player name to the console,
 along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console 
(We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }

GOOD LUCK 😀
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

//1. Loop over the game.scored array and print each player name to the console,
//along with the goal number (Example: "Goal 1: Lewandowski")

// for (const [i, name] of game.scored.entries())
//   console.log(`Goal ${i + 1}: ${name} `);

//   2. Use a loop to calculate the average odd and log it to the console
// (We already studied how to calculate averages, you can go check if you don't remember)

//The Object.keys() method returns an array of a given object's own enumerable property names,
//iterated in the same order that a normal loop would.

// console.log(openingHours);
// const props = Object.keys(openingHours);
// console.log(props);

// let openStr = `We are open at ${props.length} days `;
// for (const day of props) {
//   openStr += `${day},`;
// }
// console.log(openStr);

/*PROPERTY VALUERS */
//The Object.values() method returns an array of a given object's own enumerable property values,
//in the same order as that provided by a for...in loop.

// const values = Object.values(openingHours);
// console.log(values);

//The Object.entries() method returns an array of a
//given object's own enumerable string-keyed property [key, value] pairs.

// const entries = Object.entries(openingHours);
// // console.log(entries);

// for (const [key, { open, close }] of entries) {
//   console.log(`On ${key} we open at ${open} and close at ${close} `);
// }

/////////////////////////////////
/*Optional Chaining? */

// console.log(restaurant.openingHours.mon.open); //se existe um valor no open? retorna erro.
// console.log(restaurant.openingHours.mon?.open); //o ? ve se o mon existe, se caso nao, volta undefined
// console.log(restaurant.openingHours?.mon?.open);

// const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

// for (const day of days) {
//   const open = restaurant.openingHours[day]?.open ?? 'close'; //nullsih operator
//   console.log(`On ${day}, we open at ${open}`);
// }

//Methods
// console.log(restaurant.order?.(0, 1) ?? 'Methods does not exist');
// console.log(restaurant.orderPizaa?.(0, 1) ?? 'Methods does not exist');

//Array
// const users = [
//   {
//     name: 'Jonas',
//     age: 35,
//   },
// ];
// const users = [];

// console.log(users[3]?.name ?? 'user does not exist');

/*LOOPING ARRAYS for-of */

// const menu = [...restaurant.mainMenu, ...restaurant.categories];
//for (const item of menu) console.log(item);

//para sabermos o indice precisamos utilizar o entries
//sem fazer o destructuring
// for (const item of menu.entries()) {
//   console.log(`${item[0] + 1} : ${item[1]}`);
// }

//podemos fazer destructuring dentro do looping
// for (const [i, element] of menu.entries()) {
//   console.log(`${i + 1} : ${element}`);
// }

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


//1
// const [player1, player2] = game.players;
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

// const prinGoals = function (...players) {
//   console.log(players);
//   console.log(`${players.length} goals were scored`);
// };

// prinGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
// prinGoals('Davies', 'Muller');
// prinGoals(...game.scored);

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
