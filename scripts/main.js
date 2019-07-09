class Train{
    constructor(speed){
        this.speed = speed;
        this.t = 0;
    }

    choo(){
        console.log("chooo... chooo....");
    }

    display(){
        if(this.t < 100){
            noStroke();
            fill("#f00");
            rect(100 + this.speed * this.t, 100, 100);
        }
    }
}

let train;
function setup(){
    createCanvas(windowWidth, windowHeight);
    train = new Train(100);
}

function draw(){
    background("#333");
    TransitionEvent.display();
}
