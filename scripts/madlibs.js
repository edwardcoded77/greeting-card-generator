// Random function

function randomNumber(a, b) {
return Math.floor(Math.random() * (b - a + 1)) + a; 
}

// User Input
let name = prompt("A name:");
let adjective = prompt("An adjective:");
let noun = prompt("A noun:");
let style = prompt("Fancy or Silly ?");


// closing array

let closings = [
  "You are a legend.",
  "Stay golden.",
  "Signs point to awesome.",
  "I deserve a mountain of good food.",
  "Keep reaching for the new height.",
  "Coding requires constant practice."
];

// Output 
function makeCard() {
    // tolowerCase section
if (style.toLowerCase() === "fancy"){
   console.log("Dearest " + name + ".");
   } 
   else {
      console.log("YO " + name + "!");
   }
   
   console.log("You are as " + adjective + " as a " + noun + ".");
   console.log("Happy birthday from the pluto.");

// closing array
  /* let index = randomNumber(0, 5); */
  let index = randomNumber(0, closings.length - 1)
    console.log(closings[index]); 
  }

makeCard();




 











