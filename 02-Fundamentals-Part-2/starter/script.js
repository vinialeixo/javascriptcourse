// The conditional Ternary operator
// age = 15;
// const drink = age>=18?"drink wine":"can not drink alcahool";
// console.log(drink);

function logger(){
    console.log('hello my darling');
}

//calling the fun//runing//invoking
// logger();
// logger();
// logger();

// function fruitProcessor(apples,oranges){
//     console.log(apples,oranges);
//     const juice = `Juice woth ${apples} apples and ${oranges} oranges.`;
//     return juice;
// }

// const fruitJuice = fruitProcessor(5,0);
// console.log(fruitJuice);

/*
//function declaration
function calcAge(birthYear){
    return 2000 - birthYear;
}

const age1  =  calcAge(1990);
//...........................//

//function expression,  expression produz values
const calcAge2 = function(birthYear){
    return 2000 - birthYear;
}
const age2  =  calcAge2(1980);

console.log(age1,age2);
*/


//Arrow Function
/*const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1999);
console.log(age3);

const yearsUntilAposentar = (birthYear,firstname) =>{
    const age = 2037 - birthYear;
    const aposentar = 65 - age;
    //return aposentar;
    return `${firstname} aposenta em ${aposentar}`
}

console.log(yearsUntilAposentar(1991, "Kleber"));
*/

/*
// const cutPieces = fruit => fruit*4;

// function fruitProcessor(apples,oranges){
//     const cutApples = cutPieces(apples);
//     const cutOranges = cutPieces(oranges);

//     const juice = `Juice with ${cutApples} pieces of apples and ${cutOranges} pieces of oranges.`;
//     return juice;
// }

console.log(fruitProcessor(2,4));
*/

/*
const calcAge = birthYear => 2037 - birthYear;

const yearsUntilAposentar = function (birthYear,firstname){
    const age = calcAge(birthYear);
    const aposentar = 65 - age;
    
    if (aposentar > 0){
        console.log(`${firstname} retires in ${aposentar}`);
        return aposentar;
    }else{
        console.log(`Alreday retirement`);
        return -1;
    }
    // return `${firstname} aposenta em ${aposentar}`
}


console.log(yearsUntilAposentar(1999 ,"Klebe"));
*/
//-----------------------------------------------------

/*
// const cutPieces = fruit => fruit*4;

// function fruitProcessor(apples,oranges){
//     const cutApples = cutPieces(apples);
//     const cutOranges = cutPieces(oranges);

//     const juice = `Juice with ${cutApples} pieces of apples and ${cutOranges} pieces of oranges.`;
//     return juice;
// }

console.log(fruitProcessor(2,4));
*/
//-----------------------------------------------------
/*
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
A team ONLY wins if it has at least DOUBLE the average score of the other team. Otherwise, no team wins!

1. Create an arrow function 'calcAverage' to calculate the average of 3 scores - OK
2. Use the function to calculate the average for both teams - OK
3.1 - . Create a function 'checkWinner' that takes the average score of each team as parameters ('avgDolhins' and 'avgKoalas'), 
//3.2 - and then logs the winner to the console, together with the victory points, according to the rule above. Example: "Koalas win (30 vs. 13)".
4. Use the 'checkWinner' function to determine the winner for both DATA 1 and DATA 2.
5. Ignore draws this time.

TEST DATA 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
TEST DATA 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27

HINT: To calculate average of 3 values, add them all together and divide by 3
HINT: To check if number A is at least double number B, check for A >= 2 * B. Apply this to the team's average scores 😉

GOOD LUCK 😀
*/




// const calcAverage = (score1,score2,score3) => (score1+score2+score3)/3;

// let dolphins = calcAverage(44,23,71);
// let koalas = calcAverage(65,54,49);


// function checkWinner (avgDolphins,avgKoalas){
    
//     console.log(`chegou o valor ${avgDolphins}, ${avgKoalas}`);

//     if(avgDolphins > 2*avgKoalas){
//         console.log(`Dolphins win (${avgDolphins} vs) ${avgKoalas}`);
        
//     }else if(avgKoalas > 2*avgDolphins){
//         console.log(`Koalas win (${avgKoalas} vs) ${avgDolphins}`);
//     }else{
//         console.log("nao é o dobro")
//     }
// }
// dolphins = calcAverage(85,54,41);
// koalas = calcAverage(23,34,27)
// checkWinner(dolphins,koalas);

/*ARRAAAAAYYY*/

/*function calcAge(birthYear){
    return 2037 - birthYear;
}

const year = [2000,1995,1889,1900,1995,2010];

const age1 = calcAge(year[year.length-1]);
const age2 =  calcAge(year[3]);

const ages = [calcAge(year[year.length-1]),calcAge(year[3])];
console.log(ages);
*/


// Coding Challenge #2

/*
Steven is still building his tip calculator, 
using the same rules as before: Tip 15% of the bill if the bill value is between 50 and 300,
and if the value is different, the tip is 20%.

1. Write a function 'calcTip' that takes any bill value as an input and returns the corresponding tip, 
calculated based on the rules above (you can check out the code from first tip calculator challenge if you need to).
Use the function type you like the most. Test the function using a bill value of 100. OK
2. And now let's use arrays! So create an array 'bills' containing the test data below.
3. Create an array 'tips' containing the tip value for each bill, 
calculated from the function you created before.
4. BONUS: Create an array 'total' containing the total values, so the bill + tip.

TEST DATA: 125, 555 and 44

HINT: Remember that an array needs a value in each position, and that value can actually be the returned value of a function! So you can just call a function as array values (so don't store the tip values in separate variables first, but right in the new array) 😉

GOOD LUCK 😀
*/

// const calctip = function(bill){
//     return bill>=50 && bill <=300 ? bill*0.15:bill*0.20;
// }
// const bills = [125,555,44];
// const tips=[calctip(bills[0]),calctip(bills[1],calctip(bills[2]))];
// console.log(bills,tips);

// const total = [tips[0]+bills[0],tips[1]+bills[1],tips[2]+bills[2]];
// console.log(total);


///////////////
//INTRODUCTION TO OBJECTS

// const jonas = {
//     firstName: 'Jonas',
//     lastName: 'Schmedtmann',
//     age: 2037 - 1991,
//     job: 'teacher',
//     friends: ['Michael', 'Peter', 'Steven']
//   }; 

// //   const nameKey = 'Name';
// //   console.log(jonas['first' + nameKey]);
// //   console.log(jonas['last' + nameKey]);

//  // const interestedIn = prompt('What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends');
//   //console.log(jonas[interestedIn]);
// //  jonas.location = 'Brazil';
// //  console.log(jonas);

// // Challenge
// // "Jonas has 3 friends, and his best friend is called Michael"
// console.log(`${jonas.firstName} has `+ jonas.friends.length +`, and  his best friend is `+jonas.friends[0])

// const jonas = {
//     firstName: 'Jonas',
//     lastName: 'Schmedtmann',
//     birthYeah: 1999,
//     job: 'teacher',
//     friends: ['Michael', 'Peter', 'Steven'],
//     hasDriversLicense: true,
  
//     // calcAge: function (birthYeah) {
//     //   return 2037 - birthYeah;
//     // }
//     calcAge: function () {
//         this.age = 2037 - this.birthYeah;
//         return this.age;
//       },
    
//     getSummary: function(){
//         return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and ${this.hasDriversLicense=true?"he does DI":"he does not hava"}`;
//     }
//   }; 

// //   console.log(jonas.calcAge());
// //   console.log(jonas.age );
// console.log(jonas.getSummary());

///////////////////////////////////////
// Coding Challenge #3

/*
Let's go back to Mark and John comparing their BMIs! This time, 
let's use objects to implement the calculations! 
Remember: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter)

1. For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith) - OK
2. Create a 'calcBMI' method on each object to calculate the BMI (the same method on both objects). ok
Store the BMI value to a property, and also return it from the method.
3. Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!"

TEST DATA: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.

GOOD LUCK 😀
*/

// const mark = {
//     firtsName: "Mark",
//     mass:78,
//     height:1.69,

//     calcBMI: function(){
//          this.bmi = this.mass/(this.height*this.height)
//         return this.bmi ;
//     }
// }

// const john = {
//     firtsName: "John",
//     mass: 78,
//     height: 1.65,

//     calcBMI: function(){
//         this.bmi = this.mass/(this.height*this.height);//cria um property
//         return this.bmi
//     }
// }

// console.log(mark.calcBMI());
// console.log(john.calcBMI());

// // The conditional Ternary operator
// // age = 15;
// // const drink = age>=18?"drink wine":"can not drink alcahool";
// // console.log(drink);

// console.log(mark.bmi>john.bmi?`Marks BMI is ${mark.bmi} is higher  than John ${john.bmi}`:`John BMI is ${john.bmi} is higher  than Mark ${mark.bmi}`)

///////////////////////////////////////
// Looping Arrays, Breaking and Continuing
// const jonas = [
//     'Jonas',
//     'Schmedtmann',
//     2037 - 1991,
//     'teacher',
//     ['Michael', 'Peter', 'Steven'],
//     true
//   ];
//   const types = [];
  
  // console.log(jonas[0])
  // console.log(jonas[1])
  // ...
  // console.log(jonas[4])
  // jonas[5] does NOT exist
  
//   for (let i = 0; i < jonas.length; i++) {
//     // Reading from jonas array
//     console.log(jonas[i], typeof jonas[i]);
  
//     // Filling types array
//     // types[i] = typeof jonas[i];
//     types.push(typeof jonas[i]);
//   }
  
//   console.log(types);
  
//   const years = [1991, 2007, 1969, 2020];
//   const ages = [];
  
//   for (let i = 0; i < years.length; i++) {
//     ages.push(2037 - years[i]);
//   }
//   console.log(ages);
  
  // continue and break
//   console.log('--- ONLY STRINGS ---')
//   for (let i = 0; i < jonas.length; i++) {
//     if (typeof jonas[i] !== 'string') continue;
  
//     console.log(jonas[i], typeof jonas[i]);
//   }
  
//   console.log('--- BREAK WITH NUMBER ---')
//   for (let i = 0; i < jonas.length; i++) {
//     if (typeof jonas[i] === 'number') break;
  
//     console.log(jonas[i], typeof jonas[i]);
//   }

  ///////////////////////////////////////
// Looping Backwards and Loops in Loops
// const jonas = [
//     'Jonas',
//     'Schmedtmann',
//     2037 - 1991,
//     'teacher',
//     ['Michael', 'Peter', 'Steven'],
//   ];

//   for (let i = jonas.length - 1;i>=0;i--){
//     console.log(i,jonas[i]);
//   }

// let dice = Math.trunc(Math.random() * 6) + 1;

// while (dice !== 6) {
//     console.log(`You rolled a ${dice}`);
//     dice = Math.trunc(Math.random() * 6) + 1;
//     if (dice === 6) console.log('Loop is about to end...');
//   }
  
///////////////////////////////////////
// Coding Challenge #4

/*
Let's improve Steven's tip calculator even more, this time using loops!

1. Create an array 'bills' containing all 10 test bill values - ok
2. Create empty arrays for the tips and the totals ('tips' and 'totals')
3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate tips and total values (bill + tip) 
for every bill value in the bills array. Use a for loop to perform the 10 calculations!

TEST DATA: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52

HINT: Call calcTip in the loop and use the push method to add values to the tips and totals arrays 😉

4. BONUS: Write a function 'calcAverage' which takes an array called 'arr' as an argument. This function calculates the average of all numbers in the given array. This is a DIFFICULT challenge (we haven't done this before)! Here is how to solve it:
  4.1. First, you will need to add up all values in the array. To do the addition, start by creating a variable 'sum' that starts at 0. Then loop over the array using a for loop. In each iteration, add the current value to the 'sum' variable. This way, by the end of the loop, you have all values added together
  4.2. To calculate the average, divide the sum you calculated before by the length of the array (because that's the number of elements)
  4.3. Call the function with the 'totals' array

GOOD LUCK 😀
*/

const tips = [];
const totals = [];
const calctip = function(bill){
    return bill>=50 && bill <=300 ? bill*0.15:bill*0.20;
}

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

for (let i=0;i<=bills.length-1;i++){
    tips.push(calctip(bills[i]))
    totals.push(calctip(bills[i])+bills[i]);
}

console.log('---TIPS---')
console.log(tips);
console.log('---TOTAL---')
console.log(totals);


