let makeButton = document.getElementById("make-button");

let nameInput  = document.getElementById("name-input");
let adjectiveInput = document.getElementById("adjective-input");
let nounInput = document.getElementById("noun-input");

function makeCard(){
alert("click");
}

makeButton.addEventListener("click", makeCard);
ansSpace.textContent = choices[randomNumber(0 , 4)];