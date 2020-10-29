//JavaScript goes here

var c = document.querySelector('canvas');
var ctx = c.getContext('2d');
var mario = new Image();
mario.src = 'images/mario.png';
//Timer
var timer = requestAnimationFrame(main)
var x = 0;

//variables for start and finish line
var start = 110;
var finish = 700;

//Fuel variables
var startFuel = 610;
var fuel = startFuel;
var barFullWidth = 300;

//Start timer stuff
var sec = 3;
var fps = 60;
var frames = fps;

function main() {
    timer = requestAnimationFrame(main)
    //clear the canvas
    ctx.clearRect(0, 0, 800, 600)
    //Draw the game objects
    drawStartLine();
    drawFinishLine();
    drawBox();
    drawSprite();
    drawFuelBar();
    drawFuelText();

    if(sec > 0){
        runStartTimer();
        drawStartTimer();
    }
    else{
        if (fuel > 0) {
        //update x
        x += 1;
        fuel -= 1;
    }
    }
    
    //checks to  see if player made it to the finish line
    if (fuel <= 0 || x + 100 > finish) {
        drawResults();
    }
    console.log("animating")
    //Draw some text
    ctx.lineWidth = 1;
    ctx.strokeStyle = 'black';
    ctx.font = "50px Arial";
    ctx.textAlign = "center";
    ctx.fillText("Week 4 Lab", c.width / 2 - 130, 50);
    ctx.strokeText("Week 4 Lab", c.width / 2 - 130, 50);



    function drawBox() {
        ctx.fillStyle = 'purple'
        ctx.fillRect(x, c.height / 2, 100, 50);
    }
    function drawSprite() {
        ctx.drawImage(mario, x, 110, 100, 100);
    }
}

function drawStartLine() {
    ctx.fillStyle = "red"
    ctx.fillRect(start, 100, 10, 400);
}
function drawFinishLine() {
    ctx.fillStyle = "blue"
    ctx.fillRect(finish, 100, 10, 400);
}
function drawFuelBar() {
    var barCurrentWidth = barFullWidth * getFuelPercentage();
    ctx.fillStyle = "orange"
    ctx.fillRect(start, 80, barCurrentWidth, 10);
}

function drawFuelText() {
    ctx.fillStyle = 'black'
    ctx.font = '30px Arial'
    ctx.fillText(fuel, start, 50);
}

function getFuelPercentage() {
    return fuel / startFuel;
}

function drawResults() {
    if (x + 100 > finish) {
        //winning condition
        ctx.fillStyle = "black";
        ctx.font = "30px Arial"
        ctx.textAlign = 'center';
        ctx.fillText("You made it to the Finish Line! You Won!", c.width / 2, c.height / 2);
    }
    else {
        //losing condition
        ctx.fillStyle = "black";
        ctx.font = "30px Arial"
        ctx.textAlign = 'center';
        ctx.fillText("You ran out of fuel, too bad :(", c.width / 2, c.height / 2);

    }
}

function runStartTimer() {
    frames -= 1;
    if (frames < 0) {
        frames = fps;
        sec -= 1;
    }
}


function drawStartTimer() {
    ctx.fillStyle = "black";
    ctx.font = "30px Arial"
    ctx.textAlign = 'center';
    ctx.fillText(sec, c.width / 2, c.height / 2);
}