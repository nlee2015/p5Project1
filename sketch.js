let showText = false;
let circleX = 10;
let circleY = 50;


function setup() {
  createCanvas(850, 500);
  angleMode(DEGREES);
}

function draw() {
  background(137, 207, 240);
  noStroke();
  fill("#05445e");
  square(0, 350, 500,);
  fill("#0a7b83");
  square(500,0,550)
  
  //instructions
  fill('white');
  textSize(20);
  text("Instructions", 530, 40);
  textSize(15);
  text("Press the mouse to make the snowman wave", 525, 80);
  text("Press any key to show the text appear", 525, 120);
  text("Move the mouse to make snow appear", 525, 160);

  
  //snowman body
  fill('white');
  circle(250,200,75);
  circle(250,270,100);
  circle (250,360,140);

  //snoman face
  fill('black');
  circle(235,188,9);
  circle(264,188,9);
  circle(230,208,6);
  circle(236,215,6)
  circle(245,220,6);
  circle(255,220,6)
  circle(265,215,6);
  circle(271,208,6);
  fill('orange');
  triangle(245, 190, 255, 190, 240, 215);

  //arms
  stroke('brown');
  strokeWeight(5);

  //leftarm
  /*push();
    //translate(-200,-260);
    //rotate();
    //translate(200,260);
    line(130, 230, 200, 261);

    strokeWeight(2);
    line(145, 210, 155, 240);
    line(125, 245, 155, 240);
  pop();*/

  if(mouseIsPressed){
    push();
      translate(185,200);
      rotate(200);
      //rect(0,0,20,20);
      line(-65,-65,25,25);//The key is putting shoulder joint at 0,0
      line(25,25,25,35);
      line(25,25,35,35);
      line(25,25,35,25);
    pop();
    
  }
  else {
      
  push();
    translate(161,200);
    rotate(180);
    //rect(0,0,20,20);
    line(-65,-65,25,25);
    line(25,25,25,35);
    line(25,25,35,35);
    line(25,25,35,25);
  pop();
  }

  //rightarm
  strokeWeight(5);
  line(380,230,290,261);
  strokeWeight(2);
  line(356, 240, 385, 245);
  line(371, 210, 350, 240);

  //hat
  noStroke();
  fill('black');
  ellipse(250, 165, 88, 20);
  rect(224,80, 55, 80);

  //scarf
  noStroke();
  fill('red');
  rect(212,228, 75, 15);
  rect(212,230, 20, 65);

  //buttons
  noStroke();
  fill('black');
  circle(250,253,9);
  circle(250,268,9);
  circle(250,285,9);

  
//happyHolidaysText
if (showText) {
  fill('#006400');
  textSize(36);
  textFont('Georgia');
  text("Happy Holidays!", 128, 50);
}
}
  function keyPressed(){
  showText= true;
}

//snow
function mouseMoved(){
  fill('white');
 circle(circleY, 400, 25);
 circle(circleX, 200, 20);
 circleDiameter = random(10, 80);
 circle(circleX, circleY, circleDiameter);
 
 circleX = random(0, 499);
 circleY = random(0, 499);
 
 frameRate (10);
}






  

