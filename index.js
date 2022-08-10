//()[]{}++?:<>
console.log('working');
const computerChoiseDisplay = document.getElementById("computer-choise");
const UserDisplay = document.getElementById("User-choise");
const displayResult = document.getElementById("result");
const possibleChoices = document.querySelectorAll("button")

let userdata
let computerd
let result
possibleChoices.forEach(possibleChoices => possibleChoices.addEventListener('click',(e)=>{
      userdata=e.target.id
      UserDisplay.innerHTML=userdata
       generateComputerChoise()
      getResult()
}))

function generateComputerChoise(){
    const randomNumber = Math.floor(Math.random()*3)+1
    switch(randomNumber){
        case 1 : computerd ='Rock';
         break;
        case 2 :computerd='Scissor';
         break;
        case 3 :computerd= 'Paper';
         break;
       // default computerd.innerHTML=  'Rock' ;
    }
    computerChoiseDisplay.innerHTML = computerd
    
}
function getResult(){
     if (computerd === UserDisplay) result = "Draw"
     else if(computerd === 'Rock' && userdata==='Paper' ) result = "you have won"
     else if(computerd === 'Rock' && userdata==='Scissor' ) result = "you have lost"
     else if(computerd === 'Paper' && userdata==='Rock' ) result = "you have won"
     else if(computerd === 'Paper' && userdata==='Scissor' ) result = "you have lost"
     else if(computerd === 'Scissor' && userdata==='Paper' ) result = "you have won"
     else if(computerd === 'Scissor' && userdata==='Rock' ) result = "you have lost"
     displayResult.innerHTML = result
}
