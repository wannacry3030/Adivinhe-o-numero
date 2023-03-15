'use strict';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = '🎉 Voce Acertou!';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 20;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

const secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;

document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // caso não tenha um numero digitado
  if (!guess) {
    document.querySelector('.message').textContent = ' Digite um numero!!';
    // quando o jogador acerta
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎉 Voce Acertou!';
    document.querySelector('body').style.backgroundColor = '#60b437';
    document.querySelector('.number').style.width = '30rem';
    //  quando o jogador chuta um numero muito alto
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Muito alto! ☝️';
      score--;
      document.querySelector('.score').textContent = score;
      // quando o jogador perde
    } else {
      document.querySelector('.message').textContent = 'Você perdeu 😢';
      document.querySelector('.score').textContent = 0;
    }
    // quando o jogador chuta um numero muito baixo
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Muito baixo! ☝️';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'Você perdeu 😢';
      document.querySelector('.score').textContent = 0;
    }
  }
});
