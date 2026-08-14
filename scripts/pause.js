function makeCard(){
 console.log("Dear Ada,");
 console.log("You are as brave as a volcano");
console.log("Generator loaded.");

}

console.log("Warning up the generator...");

setTimeout(() => {
 // this happens after 3 seconds

  let generator = setInterval(makeCard, 2000);

  setTimeout(() => {
    // this happens 10 seconds later
    clearInterval(generator);
  }, 10000);

}, 3000);



