'use strict'; 

//let hasDriversLicense = false;
//const passTest = true;

//if(passTest) hasDriversLicense = true;
//if (hasDriversLicense) console.log('I can drive:)');

//const interface = 'Audio';

/* function logger(){
	console.log('My name is Jonas');
}
//calling/running/incoking function
logger();
logger(); 



function fruitProcessor(apples,oranges){		//parametros
	console.log(apples,oranges);
	const juice=`juice with ${apples} apples and ${oranges} oranges`;
	return juice;
}

const appleJuice = fruitProcessor(5,0);		//inputs em apples and oranges arguments
console.log(appleJuice);
console.log(fruitProcessor(5,0));

const appleOrangeJuice=fruitProcessor(2,4);
console.log(appleOrangeJuice);

console.log (appleJuice);
//function declaration
function calcAge1(birthYear){
	return age=2037-birthYear;			//const age=2037-birthYear;
}

const age1=calcAge1(1991);
console.log(age1);

//function expression
const calcAge2=function (birthYear){
	return age=2037-birthYear;
}
const age2=calcAge2(1991);
console.log(age1,age2);

const calcAge2=function (birthYear){
	return age=2037-birthYear;
}
//Arrow function
const calcAge3=birthYear=>2037-birthYear;	//apenas 1 parametro
const age3=calcAge3(1991);
console.log(age3);

const yearsUntilRetiramente=(birthYear,firstName)=>{
	const age=2037-birthYear;
	const retirement = 65-age;
	//return retirement;
	return `${firstName} retires in ${retirement} years`
}

console.log(yearsUntilRetiramente(1991,'Vini'));
console.log(yearsUntilRetiramente(1980,'kleber')); 
//muliple functions
const cutPieces = function (fruit){
	return fruit*4;
}

function fruitProcessor(apples,oranges){
	const applePiece = cutPieces(apples);
	const orangePiece = cutPieces(oranges);

	const juice=`juice with ${applePiece} piece of apples and ${orangePiece} piece of oranges`;
	return juice;
}

console.log (fruitProcessor(2,3));

//challenge2


//arrow
//by vini
const calcAverage = (sum, sum2, sum3)=> (sum+sum2+sum3)/3;
let avgDoplhins= calcAverage(44,23,71);		//colocar let para alterar o valor depois, não pode colocar const 
let avgKoalas = calcAverage(65,54,49);


const checkWinner = function(Doplhins,Koalas){
	
	if (Doplhins>=Koalas*2){
		console.log(`Dolphins is winner ${Doplhins}`); 
	}
		
	else if(Koalas>=Doplhins*2){
		console.log(`Koalas is winner ${Koalas}`); 
		}
	else{
		console.log(`Ninguem ganhou, ${Doplhins} x ${Koalas}`);
	}
}


//checkWinner(avgDoplhins,avgKoalas);

//checkWinner(576,111);

//test 2
avgDoplhins = calcAverage(85,54,41);
avgKoalas = calcAverage(23,34,27);
checkWinner(avgDoplhins,avgKoalas);


const calcIMC=(peso,altura)=>peso/(altura*altura);
let calcIMCteste = calcIMC(80,2);
console.log(calcIMCteste);

const checkImc = function(xexe){
	
	if (xexe<18.5){
		console.log('Magreza');
	}
	else if (xexe<24.9){
		console.log('Normal');
	}
	else if(xexe<30){
		console.log('Sobrepeso');
	}

	else{
		console.log('Ta feia a coisa');
	}
}
checkImc(calcIMCteste);

calcIMCteste = calcIMC(80,1.75);
console.log(calcIMCteste);
checkImc(calcIMCteste);

const friends = ['Michael','Steven','Peter'];

//const years = new Array (1991,1992,1993,200);

console.log(friends[1]);
console.log(friends[0]);

console.log(friends.length);	//aqui consigo saber quantos elementos há no array
console.log(friends[friends.length-1]); //expression

//sub
friends[2] = 'Jay';
console.log(friends);

const firstName = 'Vinicius';
const vini = [firstName,'Dias',2037-1994,friends];
console.log(vini);


//exercise

const calcAge=function (birthYear){
	return 2037-birthYear;
}
const years = [1991,1967,2000,1995,1986,2018];
const age1=calcAge(years[0]);
const age2=calcAge(years[1]);
const age3=calcAge(years[years.length-1]);
console.log(age1,age2,age3);

const ages=[calcAge(years[-1]),calcAge(years[1]),calcAge(years[years.length-1])];
console.log(ages);

const friends = ['Michael','Steven','Peter'];

//add elements
const newLength=friends.push('Jay');		//consigo saber quantos elementos há no array adicionanado em uma variavel
console.log(friends);
console.log(newLength);

friends.unshift('John');
console.log(friends);

//remove elements
friends.pop(); //last element
friends.pop();
console.log(friends);

friends.shift();	//first element
console.log(friends);

console.log(friends.indexOf('Steven'));
console.log(friends.indexOf('Bob'));

console.log(friends.includes('Steven'));
console.log(friends.includes('Bob'));

console.log(friends);

if (friends.includes('Steven')){		//boolean
	console.log('Someone is calling u');
}else{
	console.log('não tá hahah')
}

//by me
const calcTip = function (bill){
	if(bill>50&&bill<300){
	const tip=bill*0.15;
	const totalTip=bill+(bill*0.15);
	return totalTip;
}	else{
	const tip=bill*0.20;
	const totalTip=bill+(bill*0.20);
	return totalTip;
}
	
}
// calcTip(500);

const bill = [125,555,44];
console.log(bill);

let calcTip0 = calcTip(bill[0]);
let calcTip1 = calcTip(bill[1]);
let calcTip2 = calcTip(bill[2]);
console.log(calcTip0,calcTip1,calcTip2);

const tip=[calcTip0,calcTip1,calcTip2];
console.log(tip);
//by instrutor
const calcTip = function (bill){
	return bill>=500&&bill<=300?bill*0.15:bill*0.2
}

const bills = [125,555,44];
const tips = [calcTip(bills[0]),calcTip(bills[1],calcTip(bills[2]];
calcTip(bills[2]);
const totals = [bills[0]+tips[0],bills[1]+tips[1],bills[2]+tips[2]]
console.log(bills,tips);

//OBJECTS




const jonas = {
	firstName: 'Jonas',
	lastName: 'Dias',
	age:2037-1991,
	job:'teacher',
	friends:['Michael','Steven','Peter']
};

console.log(jonas.lastName);
console.log(jonas['firstName']);

const namekey = 'Name';
console.log(jonas['first'+namekey]);

//const interstedIn = prompt('Oq vc quer saber sobre o jonas? Escolha entre firstName,lastName,age,location and friends');
//;
//if (jonas[interstedIn]){
	//console.log(jonas[interstedIn]);
//}else{
	//console.log('Escolha entre firstName,lastName,age,location and friends');
//}

//add em objetos
jonas.location='Portugal';
jonas['twitter']= '@vinidias';
console.log(jonas);

//chanllenge
//"Jonas has 3 frines, and his best friend is calles Michael"

//console.log(`${jonas.firstName} has ${jonas.friends.length}, and his best friend is called ${jonas.friens[0]} ` );

const jonas = {
	firstName: 'Jonas',
	lastName: 'Dias',
	birthYeah: 1991,
	job:'teacher',
	friends:['Michael','Steven','Peter'],
	hasDriversLicense: true,

//	calcAge: function (birthYeah){
//		return 2037-birthYeah;
//	}

//	calcAge: function (){
//		//console.log(this);
//		return 2037-this.birthYeah;  //this vai assumir o método que já existe, aponta para o jonas
//	}

	calcAge: function (){
		this.age=2037-this.birthYeah;
		return this.age;  
	},

	getSummary: function(){
		return `${this.firstName} is a ${this.calcAge()}-year old ${jonas.job} and he has ${this.hasDriversLicense?'a':'no'} driver's license`
	}

};

//para não ficar copiando varias vezes
console.log(jonas.calcAge());
console.log(jonas.age);
console.log(jonas.age);
console.log(jonas.age);

//Challenge
//"Jonas is a 46-year old teacher, and he has a driver's license"

//const Driverlicense = jonas.hasDriversLicense === true ? `has a driver's`:`has not a driver's`;
//console.log(`${jonas.firstName} is a ${jonas.age}-year old ${jonas.job}, and he ${Driverlicense} license `);


console.log(jonas.getSummary());


const mark= {
	name:'Mark Miller',
	weight:78,
	height:1.69,
	calcBMI: function (argument) {
		this.bmi=this.weight/(this.height)**2;
		return this.bmi;
	}
};

const john={
	name:'John Smith',
	weight:92,
	height:1.95,
	calcBMI: function (argument) {
	this.bmi=this.weight/(this.height)**2;
	return this.bmi;
	}

};

console.log (mark.bmi, john.bmi);

const jonas = [
	'jonas',
	'dias',
	2037-1991,
	'teacher',
	['Fred','PErter', 'Steven'],
	true
];

const types=[];


for(let i=0; i < jonas.length;i++){				//usar o length para automatizar a qtde
	console.log(jonas[i], typeof jonas[i]);

	//filling types array
	types.push(typeof jonas[i]);
}

console.log(types);

const years =[1991,2007,1969,2020];
const ages = [];

for (let i=0;i<years.length;i++){
	ages.push(2037-years[i]);
}
console.log(ages);


//continue and break
console.log("only strings");
for(let i=0; i < jonas.length;i++){				
	if(typeof jonas[i] !=='string') continue;

	console.log(jonas[i], typeof jonas[i]);
	
}

console.log("only number");
for(let i=0; i < jonas.length;i++){				
	if(typeof jonas[i] ==='number') break;

	console.log(jonas[i], typeof jonas[i]);
	
}


const jonas = [
	'jonas',
	'dias',
	2037-1991,
	'teacher',
	['Fred','PErter', 'Steven'],
	true
];

for(let i=jonas.length-1;i>=0;i--){
	console.log(jonas[i]);
}

for (let exercise=1;exercise<4;exercise++){
	console.log(`--------Starting exercise ${exercise}`)

	for(let rep=1;rep<6;rep++){
		console.log(`Exercicios ${exercise}: quantidade de repetições ${rep}`);
	}
}

let rep=1;
while(rep<=10){
	console.log	(`Lift up number ${rep}`)
	rep++;
}

let dice = Math.trunc(Math.random()*6)+1;

while (dice!==6){
	console.log(`You rolled ${dice}`);
	dice = Math.trunc(Math.random()*6)+1;
	if (dice===6) console.log('Loop acabou...')
}

*/

