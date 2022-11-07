'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal=document.querySelector('.close-modal');
//const btnOpenModal=document.querySelector('.show-modal');		queryselector não seleciona todas as classes, apenas uma
const btnOpenModal=document.querySelectorAll('.show-modal')

//função

const openModel = function(){
		//console.log('Button clicked');
		modal.classList.remove('hidden');
		overlay.classList.remove('hidden');
	}

const closeModel=function(){
	modal.classList.add('hidden');
	overlay.classList.add('hidden');
}

console.log(btnOpenModal);
for (let i=0;i<btnOpenModal.length; i++)
	btnOpenModal[i].addEventListener('click',openModel); //não call it,apenas define, declare


//abrir a tela e fechar
btnCloseModal.addEventListener('click',closeModel);
overlay.addEventListener('click',closeModel);

//usando key press
document.addEventListener('keydown',function (e) {
	console.log(e.key);

	if (e.key==='Escape' && !modal.classList.contains('hidden')) {
		closeModel();
		}
	});
