let randomNum = (Math.floor(Math.random()*100+1))
let form = document.querySelector('form')
let previousGuess = document.querySelector('.guesses')
let restartGameBtn = document.querySelector('#restart-game')
let remainGuess = document.querySelector('.lastResult')
remainGuess.innerText = 10
let lowOrHi = document.querySelector('.lowOrHi')
let guessVal = document.querySelector('#guessField')
let readyToPlay = true;

function letsPlay (){
   restartGameBtn.style.display = 'none'
form.addEventListener('submit',function(e){
  e.preventDefault()
  if(readyToPlay){

   guessVal1 = Number(guessVal.value)


  if(guessVal1 === 0 || isNaN(guessVal1) || guessVal1 > 100){
    lowOrHi.innerText = 'Enter a Valid Number'
    guessVal.value = ''
  }
  else{
    previousGuess.innerText += `${guessVal1} ,`
    remainGuess.innerText--
    if(guessVal1 < randomNum){
      lowOrHi.innerText = 'Less Than Random Number'
      guessVal.value = ''
    }
    if(guessVal1 > randomNum){
      lowOrHi.innerText = 'Greater Than Random Number'
      guessVal.value = ''
    }
    if(guessVal1 === randomNum){
      lowOrHi.innerText = ` Correct!!!, Number was ${randomNum} `
      guessVal.value = ''
      endGame();
    }
    
  }
  if(remainGuess.innerText === '0' ){
    if(guessVal1 === randomNum){
      lowOrHi.innerText = ` Correct!!!, Number was ${randomNum} `
        endGame();
    }
    else{
      endGame();
      remainGuess.innerText = 0
      lowOrHi.innerText = ` Out Of Turns , Number was ${randomNum} ,Better Luck Next Time.. `
      guessVal.value = ''
    }

  }
}
})

}

function endGame(){
  readyToPlay = false
  guessVal.setAttribute('disabled','')
  restartGame();
}
function restartGame(){
  randomNum = (Math.floor(Math.random()*100+1))
  restartGameBtn.style.display = 'inline-block'
  restartGameBtn.addEventListener('click',()=>{
    readyToPlay = true
    remainGuess.innerText = 10
  previousGuess.innerText = ''
  guessVal.removeAttribute('disabled','')
  hideRestart();
  })
}
function hideRestart(){
   restartGameBtn.style.display = 'none'
}
letsPlay();




// Another version of javaScript Code !not completed

// let randomNum = Math.floor(Math.random()*100+1)

// const submit = document.querySelector('#subt')
// const guessNum = document.querySelector('#guessField')
// const previousGuess = document.querySelector('.guesses')
// const remainGuess = document.querySelector('.lastResult')
// const lowOrHi = document.querySelector('.lowOrHi')

// let remain = 1;
// let letsPlay = true

// if(letsPlay){
// submit.addEventListener('click',function(e){
//   e.preventDefault()
//   let guess = parseInt(guessNum.value)
//   guessNum.value = ''
//   previous(guess)
//   gameLogic(guess)
// })
// }

// function gameLogic (guess){
//   if(isNaN(guess)){
//     message('Enter a valid number..')
//   }
//   if(guess <= 0){
//     message('Enter a valid number..')
//   }
//   if(guess > 100){
//     message('Enter a valid number..')
//   }
//   else{
//       instruction(guess)
//       // endGame();
//     }
//   }


// function message (msg){
//   lowOrHi.innerText = `${msg}`
// }

// function instruction (guess){
//   if(guess < randomNum){
//     message('The Number is Tooo lesss')
//   }
//   if(guess > randomNum){
//     message('The Number is Tooo Biggg')
//   }
//   if(guess === randomNum){
//     message('Correct, You guessed it right...')
//   }
// }

// function previous (guess){
//   if(guess < 0 || isNaN(guess) || guess > 100 ){
//     message('Enter a valid number..')
//   }
//   else{
//     previousGuess.innerText += `${guess} , `
//     remain++
//     remainGuess.innerText = `${11 - remain}`
//   }
// }
