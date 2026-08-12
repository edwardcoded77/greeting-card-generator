
/* 
// User Input
let name = prompt("A name:");
let adjective = prompt("An adjective:");
let noun = prompt("A noun:");


// Output 
function makeCard() {
  console.log("Dear " + name + ",");
  console.log("You are as " + adjective + " as a " + noun + ".");
  console.log("Happy birthday from the generator.");
}

makeCard();



 function makeGreeting

function makeGreeting(){
    console.log("Hello everyone, my name is " + name );
}

makeGreeting()  
*/



/*========================================================= */
/*
let name = prompt("A name:");
let adjective = prompt("An adjective:");
let noun = prompt("A noun:");


let closings = [
  "You are a legend.",
  "Stay golden.",
  "Signs point to awesome.",
];

function randomNumber(a, b) {
  return Math.floor(Math.random() * (b - a + 1)) + a;
}

function makeCard() {
  console.log("Dear " + name + ",");
  console.log("You are as " + adjective + " as a " + noun + ".");
  let index = randomNumber(0, closings.length - 1);
  console.log(closings[index]);
}

makeCard();


============================================== */

let style = prompt("Fancy or Silly ?");
let name = prompt("A name:");

function makeCard(){
  if (style.toLowerCase() === "fancy"){
   console.log("Dearest " + name + ",");
   } 
   else {
      console.log("YO " + name + "!");
   }


  // rest of the card unchanged 
   console.log("You are awseome!.");
}

makeCard();
