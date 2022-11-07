'use strict';

/*console.log(document.querySelector('.message').textContent);
			//isso chama a clasee message do html

document.querySelector('.number').textContent=13;
document.querySelector('.score').textContent=10;

document.querySelector('.guess').value=23;
console.log (document.querySelector('.guess').value);

*/

let secretNumber = Math.trunc(Math.random()*20)+1;
let highscore=0;

let score=20;

const displayMessage = function(message){
	document.querySelector('.message').textContent=message;



}

document.querySelector('.check').addEventListener(
	'click', function(){
		const guess=Number(document.querySelector('.guess').value);	//mudar a string para número
		console.log(guess, typeof guess);
		
		if(!guess){
			//document.querySelector('.message').textContent='No number';
			displayMessage('No Number');
			//when players wins
		} else if(guess===secretNumber){
			//document.querySelector('.message').textContent='Correct Number';
			displayMessage ('Correct Number');
			document.querySelector('.number').textContent=secretNumber;
			
			document.querySelector('body').style.backgroundColor = '#60b347';
			document.querySelector('.number').style.width='30rem';

			if (score>highscore){
				highscore=score;
				document.querySelector('.highscore').textContent=highscore;

			}

		}
		//when guess is worng
		else if (guess!=secretNumber) {
		
		if (score>1){
		//document.querySelector('.message').textContent=
		//guess>secretNumber?'Too High':'Too Low';
		displayMessage(guess>secretNumber?'Too High':'Too Low');
		score--;
		document.querySelector('.score').textContent=score;

		} else{
			//document.querySelector('.message').textContent='You lost the game!!XD';
			displayMessage('You lost the game!!XD');
			}

		}})
		/* else if(guess>secretNumber){
			if (score>1){
			document.querySelector('.message').textContent='Too High';
			score--;
			document.querySelector('.score').textContent=score;

			} else{
				document.querySelector('.message').textContent='You lost the game!!XD';

			}

		} else if (guess<secretNumber){

			if (score>0) {
			document.querySelector('.message').textContent='Too Low';
			score--;
			document.querySelector('.score').textContent=score;

			}else{
				document.querySelector('.message').textContent='You lost the game!!XD';

			}


		}


	});*/

document.querySelector('.again').addEventListener('click',function (){
    let score=20;
    secretNumber = Math.trunc(Math.random()*20)+1;

    displayMessage('Start Guessing...');
    document.querySelector('.score').textContent=score;
    document.querySelector('.number').textContent='?';
    document.querySelector('.guess').value='';
    document.querySelector('body').style.backgroundColor = '#222';
	document.querySelector('.number').style.width='15rem';

})


