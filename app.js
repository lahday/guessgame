

let user= prompt ("Welcome, please input your name") ;

function guessNumber () {
  let n = document.querySelector(".guessField").value ;
  let firstNumber = JSON.parse(localStorage.getItem('firstNumber')) || 2 ;
  let stage = JSON.parse(localStorage.getItem('stage')) || 1;
  
  console.log (n)
  const randomNumber = Math.ceil(Math.random() * Number (firstNumber) );
  console.log (randomNumber)
  if (n == randomNumber) {
    alert ('You guessed right')
    console.log('correct')
    firstNumber+=1
    stage+=1
    localStorage.setItem ('firstNumber' , firstNumber)
    localStorage.setItem ('stage' , stage)
    console.log(firstNumber)
  }
  else{
    console.log('incorrect')
  }

}