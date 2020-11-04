//JavaScript goes here

var c = document.querySelector('canvas');
var ctx = c.getContext('2d');
var mario = new Image();
mario.src = '../images/mario.png';
//Timer
var timer = requestAnimationFrame(main)
var x = 0;



function main(){
    timer = requestAnimationFrame(main)
    //clear the canvas
    ctx.clearRect(0,0,800,600)
    //Draw the box
    drawBox();
//update x
 x++;
 if (x > c.width){
     x = -100;
 }
 console.log("animating")

    /*
    //example of lines
    ctx.moveTo(0,0);
    ctx.lineTo(800,600);
    ctx.stroke();
    
    ctx.moveTo(800,0);
    ctx.lineTo(0,600);
    ctx.stroke();
    
    //this draws a box
    ctx.fillStyle = 'purple'
    ctx.fillRect(c.width/4,c.height/4,c.width/2,c.height/2);
    
    //this draws a circle
    
    ctx.beginPath();
    ctx.arc(c.width/2, c.height/2, 50, 0, 2*Math.PI,false);
    ctx.fillStyle = 'orange'
    ctx.strokeStyle = 'yellow'
    ctx.lineWidth= 10
    ctx.fill();
    ctx.stroke();
    
    
    //Draw some Text
    ctx.lineWidth = 1;
    ctx.strokeStyle = 'black';
    ctx.font = "50px Arial";
    ctx.fillText("Week 4 Lab",c.width/2 -130, 50);
    ctx.strokeText("Week 4 Lab",c.width/2 -130, 50);
    
    */
    //Draw image to canvas
    ctx.drawImage(mario,x,0,200,200);}

function drawBox(){
    ctx.fillStyle = 'purple'
    ctx.fillRect(x,c.height/2,100,50);
} 
main();