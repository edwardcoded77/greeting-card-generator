let askBtn  = document.getElementById("ask-button");
let ansSpace = document.getElementById("answer");

let choices = [
  "The future is murky",
  " Yes!",
  " No",
  "Most definitely",
  "Ask again late"
]

function randomNumber(a, b){
  return Math.floor(Math.random() * (b-a+1) + a );
}


function makeChoice(){
  // alert("You clicked the button");
  // ansSpace.textContent = "The future is murky!";
ansSpace.textContent = choices[randomNumber(0 , 4)];
};

askBtn.addEventListener("click", makeChoice);
