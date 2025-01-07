let randomNum = (Math.floor(Math.random()*100+1))
let p = document.createElement('p')
let form = document.querySelector('form')
let previousGuess = document.querySelector('.guesses')
let remainGuess = document.querySelector('.lastResult')
remainGuess.innerText = 10
let lowOrHi = document.querySelector('.lowOrHi')
let guessVal;
let readyToPlay = true;

function letsPlay (){
form.addEventListener('submit',function(e){
  e.preventDefault()
  if(readyToPlay){
   guessVal = Number(document.querySelector('#guessField').value)
  

  if(guessVal === 0 || isNaN(guessVal) || guessVal > 100){
    lowOrHi.innerText = 'Enter a Valid Number'
  }
  else{
    previousGuess.innerText += `${guessVal} ,`
    remainGuess.innerText--
    if(guessVal < randomNum){
      lowOrHi.innerText = 'Less Than'
    }
    if(guessVal > randomNum){
      lowOrHi.innerText = 'Greater Than'
    }
    if(guessVal === randomNum){
      lowOrHi.innerText = ` Correct!!!, Number was ${randomNum} `
      endGame();
    }
    
  }
  if(remainGuess.innerText === '0'){
    endGame();
    lowOrHi.innerText = ` Out Of Turns , Number was ${randomNum} ,Better Luck Next Time.. `
  }
}
})

}

function endGame(){
  readyToPlay = false
}
letsPlay();




// Another version of javaScript Code

/**let randomNum = Math.floor(Math.random()*100+1)

const submit = document.querySelector('#subt')
const guessNum = document.querySelector('#guessField')
const previousGuess = document.querySelector('.guesses')
const remainGuess = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')

let remain = 1;
let letsPlay = true

if(letsPlay){
submit.addEventListener('click',function(e){
  e.preventDefault()
  let guess = parseInt(guessNum.value)
  guessNum.value = ''
  previous(guess)
  gameLogic(guess)
})
}

function gameLogic (guess){
  if(isNaN(guess)){
    message('Enter a valid number..')
  }
  if(guess <= 0){
    message('Enter a valid number..')
  }
  if(guess > 100){
    message('Enter a valid number..')
  }
  else{
      instruction(guess)
      // endGame();
    }
  }


function message (msg){
  lowOrHi.innerText = `${msg}`
}

function instruction (guess){
  if(guess < randomNum){
    message('The Number is Tooo lesss')
  }
  if(guess > randomNum){
    message('The Number is Tooo Biggg')
  }
  if(guess === randomNum){
    message('Correct, You guessed it right...')
  }
}

function previous (guess){
  if(guess < 0 || isNaN(guess) || guess > 100 ){
    message('Enter a valid number..')
  }
  else{
    previousGuess.innerText += `${guess} , `
    remain++
    remainGuess.innerText = `${11 - remain}`
  }
}
 */