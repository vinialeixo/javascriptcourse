/*
let country = "Brazil";
let continent = "South America";
let population = 10000000000;

console.log(country,continent,population); 

true;
let javascriptIsFun= true;
console.log(javascriptIsFun);
console.log(typeof true);

javascriptIsFun='Yes'; //muda o valor da variavel
console.log(javascriptIsFun);

//undefinited
let year;
console.log(year);
console.log(typeof year);

year=2000;
console.log(year);
console.log(typeof year);

let age = 30;				//let pode alterar a a variavel
age=31;

//const birthYear=1991;		//const faz com que a variavel não mude, exemplo ano de nascimento = imutavel
//birthYear = 1999;

var job = 'programar';		//por enquanto 
job = "teacher"



const now = 2037;
const ageJonas = now - 1991;
const ageVini = now - 1999;
console.log(ageJonas,ageVini);

console.log(ageJonas*2,ageJonas/10, 2**3);

const firsName = 'Vinicius';
const lastName = 'Dias';
console.log(firsName + ' '+ lastName);

//Assisgment operators
let x = 10+5;
x+=10; //x=x+10
x*=4;
x++;//x=x+1
x--;
x--;
console.log(x);

//Comparison operators
console.log(ageJonas>ageVini);
console.log(ageVini>=18);

const isFullAge = ageVini>=18;
console.log(now-1991>now-1999);

const now = 2037;
const ageJonas = now - 1991;
const ageVini = now - 1999;
console.log(now-1991>now-1999);

let x,y;
x=y=25-10-5; //x=y=10,x=10
console.log(x,y);
const averageAge = (ageJonas+ageVini)/2;
console.log(ageJonas,ageVini,averageAge);

const markWeight=78;
const markheight=1.69;
const johnWeight=92;
const johnheight=1.95;
const markBmi=markWeight/(markheight**2);
const johnBmi=johnWeight/(johnheight**2);

console.log(markBmi,johnBmi);
console.log(markBmi>johnBmi);
const firsName='Vini';
const job='teacher';
const birthYear=1990;
const year=2037

const jonas="I'm"+ firsName + ', a '+ (year - birthYear) + 'years old' + '!' ;
console.log(jonas); 

const jonasNew=`I'm ${firsName}, a ${year - birthYear} year old ${job}`;	//ajusta os espaços
console.log(jonasNew);

console.log(`string		
	multiple
	kkkk`);			//mesma coisa que usar \n\

const age = 10;

if(age>=18){
	console.log('Sarah can star DL');
} else{
	const yearsLeft=18-age;
	console.log(`Sara is too young ${yearsLeft} years to drive `);
}


const birthYear = 2012;
let century;
if (birthYear<=2000){
	century = 20;
}	else{
	century=21;
}
console.log(century);
const markWeight=78;
const markheight=2.69;
const johnWeight=92;
const johnheight=1.95;
const markBmi=markWeight/(markheight**2);
const johnBmi=johnWeight/(johnheight**2);

if (markWeight>johnWeight){
	console.log(`Mark is way havier than John, beacause mark has ${markWeight} and John ${johnWeight}`);
} else{
	console.log(`John's wheith is ${johnWeight}`);
}
if (markheight<johnheight){
	console.log(` Baixinho, a altura do john é ${johnheight}`);
}else{
	console.log(`MArk não é baixinho`);
}

//type conversion
const inputYear ='1991';
console.log(Number(inputYear),inputYear);
console.log(Number(inputYear)+18);

console.log(Number('Vinicius'));

console.log(String(23));


//type coercion
console.log('23'/'2');
console.log('23'>'2');
console.log ('Im ' + 23 + 'years old');

let n = '1'+ 1; //11
n=n-1; //converte a número
console.log(n);
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('jonas'));
console.log(Boolean({}));
 
 const money=0;	//0 é Fasle
 if (money){
 	console.log("Dont spden it all;");
 }else{
 	console.log('You fave job');
 }

 let heigth=0;
 if (heigth){
 	console.log('Defined');
 }else{
 	console.log('undefined')
 }

const favorite =Number(prompt(" Qual é seu nome favorito? "));
console.log(favorite);

if (favorite===23){ 
	console.log('Cool number');
} else if(favorite==7){
	console.log('7 is daora');
}else{
	console.log('não é 23 e 7')
;}
const hasDriversLincese = true;
const hasGoodVision = true;

console.log(hasDriversLincese|| hasGoodVision);
console.log(!hasDriversLincese); //not

const shouldDrive=hasDriversLincese&&hasGoodVision;


const isTire=false;
console.log(hasDriversLincese&&hasGoodVision&&isTire);

if (hasDriversLincese&&hasGoodVision&&!isTire){
	console.log('pode dirigir');	
} else{
	console.log('vc não pode');
}
//data1
const dolphinsScore=(96+108+89)/3;
console.log(dolphinsScore);
const dolphinsScoreAvarage=dolphinsScore
const koalasScore=(88+91+110)/3;
console.log(koalasScore);
const koalasScoreAvarage=koalasScore;

if(dolphinsScoreAvarage===koalasScoreAvarage){
	console.log(`It's a Draw!`);
}else if (dolphinsScoreAvarage>koalasScoreAvarage){
	console.log(`Dolphins Wins`);
}else if(koalasScoreAvarage>dolphinsScoreAvarage){
	console.log(`koalas Wins`);
}
//data2
const dolphinsScore=(97+112+101)/3;
console.log(dolphinsScore);
const dolphinsScoreAvarage=dolphinsScore
const koalasScore=(109+95+123)/3;
console.log(koalasScore);
const koalasScoreAvarage=koalasScore;


if(dolphinsScoreAvarage===koalasScoreAvarage){
	console.log(`It's a Draw!`);
}else if (dolphinsScoreAvarage>koalasScoreAvarage){
	console.log(`Dolphins Wins`);
}else if(koalasScoreAvarage>dolphinsScoreAvarage){
	console.log(`koalas Wins`);
}

//TERNARY OPERATOR!
const age=10;
age>=18 ? console.log('I like drink wine') : //condição if
console.log('I like drink water');			// condição else

const drink=age>=18? 'wine':'water';
console.log(drink);

let drink2;
if(age>=18){
	drink2='wine';
}else{
	drink2='water';
}
console.log(drink2);


console.log(`I like to drink ${age>=18? 'wine':'water'}`);
*/

//5 falsy values: 0,'',undefined,null,NaN

const bill= 40;

if(bill>50&&bill<300){
	let tip=bill*0.15;
	let totalTip=bill+(bill*0.15);
	console.log(`The bill was ${bill}, the tip was ${tip}, and total value ${totalTip}`);
}else{
	let tip=bill*0.20;
	let totalTip=bill+(bill*0.20);
	console.log(`The bill was ${bill}, the tip was ${tip}, and total value ${totalTip}`);
}


const tip=(bill>50&&bill<300)? bill*0.15:bill*0.2
console.log(`The bill was ${bill}, the tip was ${tip}, and total value ${bill+tip}`);
