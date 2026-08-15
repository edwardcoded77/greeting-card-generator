let makeButton = document.getElementById("make-button");
let nameInput  = document.getElementById("name-input");
let adjectiveInput = document.getElementById("adjective-input");
let nounInput = document.getElementById("noun-input");
let cardText = document.getElementById("card-text");
let closeSpace = document.getElementById("closing-text")
let surpriseInput =  document.getElementById("surprise-button");
let cardSection = document.getElementById("card-section");




let closings = [
  "The race to victory starts now.",
  "Prepare yourself for the battle ahead.",
  "Failure is not an option.",
  "You are on the winning side.",
  "Let the drums roll!"
];





function randomNumber(a, b){
  return Math.floor(Math.random() * (b-a+1) + a );
}

function makeCard(){
// alert("click");
cardSection.hidden = false;
let name = nameInput.value;
let adjective = adjectiveInput.value;
let noun = nounInput.value;
cardText.textContent = "Dear " + name + " , you are as " + adjective + " as a " + noun + ". Happy birthday from the pluto. "
closeSpace.textContent = closings[randomNumber(0 , 4)];

}


function surpriseMe(){
    let index = randomNumber(0, closings.length - 1);
    closeSpace.textContent = closings[index];
}

surpriseInput.addEventListener("click", surpriseMe)

makeButton.addEventListener("click", makeCard);
