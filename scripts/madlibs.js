// Random number helper
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

// Pick choice

let choice = [
  "Become a doctor",
  "Become a warrior",
  "Become a wise leader"
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

   let picker = randomNumber(0, 2);
   console.log("Your choice is : " + choice[picker])

    // closing array
  /* let index = randomNumber(0, 5); */
  let index = randomNumber(0, closings.length - 1)
    console.log("Your selected closing: " + closings[index]); 

  let number = randomNumber(0, 100);
  console.log("Your number is: " + number)
  }
   
makeCard();



 











