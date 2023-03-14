'use strict';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = '🎉 Voce Acertou!';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 20;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

const secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // caso não tenha um numero digitado
  if (!guess) {
    document.querySelector('.message').textContent = ' Digite um numero!!';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎉 Voce Acertou!';
  }
});
