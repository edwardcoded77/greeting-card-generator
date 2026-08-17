let makeButton = document.getElementById("make-button");
let nameInput  = document.getElementById("name-input");
let adjectiveInput = document.getElementById("adjective-input");
let nounInput = document.getElementById("noun-input");
let cardText = document.getElementById("card-text");
let closeSpace = document.getElementById("closing-text")
let surpriseInput =  document.getElementById("surprise-button");
let cardSection = document.getElementById("card-section");
let resetBtn = document.getElementById("reset-button");
let bonusCount = document.getElementById("bonus-line");


let cardsMade = 0;

let closings = [
  "The race to victory starts now.",
  "Prepare yourself for the battle ahead.",
  "Failure is not an option.",
  "You are on the winning side.",
  "Good luck!"
];

function randomNumber(a, b){
  return Math.floor(Math.random() * (b-a+1) + a );
}

function makeCard(){
let name = nameInput.value;
let adjective = adjectiveInput.value;
let noun = nounInput.value;
cardText.textContent = "Dear " + name + ", you're as " + adjective + " as a " + noun + "! Have amazing birthday from Pluto!";
closeSpace.textContent = closings[randomNumber(0 , 4)];
cardSection.hidden = false;

cardsMade = cardsMade + 1 ;

if (cardsMade >= 5 ){
  bonusCount.hidden = false;
  }

}

function resetBtnfunctn(){
  nameInput.value ="";
  adjectiveInput.value="";
  nounInput.value="";
  cardSection.hidden = true;
}


function showRandomClosing() {
    let randomIndex = randomNumber(0, closings.length - 1);
    closeSpace.textContent = closings[randomIndex];
}

surpriseInput.addEventListener("click", showRandomClosing)
makeButton.addEventListener("click", makeCard);
resetBtn.addEventListener("click", resetBtnfunctn);
