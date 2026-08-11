let count = 0;
let speed = 1000;


function tick (){
    count = count + 1 ;
    console.log("tick " + count);
    
    if (count === 5){
    clearInterval(timer);
    }
}

let timer = setInterval(tick, speed);
