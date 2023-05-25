class Robot {
  constructor() { // default constructor
    this.step = 10;
    this.upPressed = false;
    this.downPressed = false;
    this.xPos = width / 4;
    this.yPos = height / 2;
    this.robotSize = 0.5; 
    this.color = color(255, 234, 0, 100)
    
  }

  display() {
    push();
    translate(this.xPos, this.yPos);
    scale(this.robotSize);
    if (mouseIsPressed == true) {
      //CONTOUR
	        noStroke(   )
        fill(38, 166, 255)
        beginShape();
        vertex(22,125)
        vertex(160,147)
        vertex(95,191)   
        vertex(178,227)
        vertex(72,200)
        vertex(97,161)
        endShape();

        beginShape();
        vertex(232,229)
        vertex(339,203)
        vertex(313,163)
        vertex(388,127)
        vertex(250,149)
        vertex(315,193)
        endShape();
    
        //ACHTERGROND
        noStroke(   )
        fill(151, 209, 210)
        beginShape();
        vertex(25,126)
        vertex(98,160)
        vertex(73,200)
        vertex(171,225)
        vertex(93,191)
        vertex(158,147)
        endShape();

        beginShape();
        vertex(238,227)
        vertex(337,202)
        vertex(312,162)
        vertex(385,128)
        vertex(252,149)
        vertex(317,193)
        endShape();
    
        //ELECTRICITEIT
        noStroke(   )
        fill(250, 250, 255)
        triangle(39,130,77,137,80,147)
        beginShape();
        vertex(81,137)
        vertex(147,148)
        vertex(81,193)
        vertex(104,159)
        vertex(84,150)
        endShape();
        triangle(77,198,90,193,147,216)


        triangle(362,135,322,155,317,142)
        beginShape();
        vertex(314,143)
        vertex(319,155)
        vertex(306,162)
        vertex(317,177)
        vertex(296,176)
        vertex(261,150)
        endShape();
    
        beginShape();
        vertex(304,179)
        vertex(321,182)
        vertex(334,200)
        vertex(271,216)
        vertex(321,193)
        endShape();
    
    
        noStroke()
        //CONTOUR
        fill(38, 166, 255)
        circle(200,200,123)
        ellipse(200,270,70,60)
        triangle(200,14,164,160,236,160)
        triangle(200,356,178,290,222,290)


        //ACHTERGROND    
        fill(151, 209, 210)
        circle(200,200,120)
        ellipse(200,270,67,57)
        triangle(200,20,165,160,235,160)
        triangle(200,350,180,290,220,290)

        //ZWARTE RAND
        fill(38, 166, 255)
        circle(200,200,102)
        circle(200,265,42)
        triangle(200,35,179,160,221,160)


        //ORANGE VOORGROND
        fill(239, 130, 76)
        circle(200,200,100)
        circle(200,265,40)
        triangle(200,40,180,160,220,160)

        //mond
        fill(255,255,255)
        ellipse(200,220,46,14)
        fill(239, 130, 76)
        ellipse(200,213,70,20)

        //OGEn
        stroke(0,0,0)
        strokeWeight(1)
        fill(249, 249, 249)
        ellipse(180,190,18,48)
        ellipse(220,190,18,48)

        strokeWeight(1)   
        line(171,190,189,190)
        line(211,190,229,190)


        fill(26, 99, 166)
        ellipse(180,190,8,35)
        ellipse(220,190,8,35)
    
    
        //LASERBODY
        noStroke()
        fill(this.color,100)
        beginShape();
        vertex(200,0)
        vertex(239,141)
        vertex(400,123)
        vertex(323,168)
        vertex(352,210)
        vertex(264,229)
        vertex(251,248)
        vertex(238,259)
        vertex(236,281)
        vertex(227,293)
        vertex(200,400)
        vertex(180,293)
        vertex(164,281)
        vertex(156,261)
        vertex(154,248)
        vertex(139,227)
        vertex(66,206)
        vertex(90,168)
        vertex(0,120)
        vertex(167,141)
        endShape();

        //LASER
        push();
        resetMatrix();
        stroke(this.color); // set stroke color to red
        line(this.xPos+100, this.yPos, mouseX, mouseY);
        line(this.xPos+100, this.yPos+200, mouseX, mouseY);
        pop();



    } else {
        //CONTOUR
        noStroke()
        fill(38, 166, 255)
        beginShape();
        vertex(225,227)
        vertex(332,254)   
        vertex(306,294)
        vertex(381,329)
        vertex(243,308)
        vertex(308,263)
        endShape();

        beginShape();
        vertex(179,225)
        vertex(69,253)
        vertex(96,294)
        vertex(21,329)
        vertex(160,308)
        vertex(93,263)
        endShape();
    
        //ACHTERGROND
        noStroke()
        fill(151, 209, 210)
        beginShape();
        vertex(231,229)
        vertex(330,254)
        vertex(305,294)
        vertex(378,328)
        vertex(245,308)
        vertex(310,263)
        endShape();

        beginShape();
        vertex(170,228)
        vertex(91,262)
        vertex(157,307)
        vertex(23,328)
        vertex(96,294)
        vertex(70,253)
        endShape();
    
        //ELECTRICITEIT
        noStroke(   )
        fill(250, 250, 255)
        triangle(85,301,90,315,45,321)
        beginShape();
        vertex(146,306)
        vertex(112,280)
        vertex(91,279)
        vertex(102,294)
        vertex(89,301)
        vertex(94,313)
        endShape();

        beginShape();
        vertex(105,276)
        vertex(88,262)
        vertex(137,239)
        vertex(74,255)
        vertex(88,273)
        endShape();

        triangle(326,256,313,261,256,238)
        beginShape();
        vertex(322,261)
        vertex(311,267)
        vertex(256,306)
        vertex(322,316)
        vertex(320,304)
        vertex(300,295)
        endShape();
        triangle(325,307,327,317,365,325)
            noStroke()
      //CONTOUR
      fill(38, 166, 255)
      circle(200,200,123)
      ellipse(200,270,70,60)
      triangle(200,14,164,160,236,160)
      triangle(200,356,178,290,222,290)
    
    
      //ACHTERGROND    
      fill(151, 209, 210)
      circle(200,200,120)
      ellipse(200,270,67,57)
      triangle(200,20,165,160,235,160)
      triangle(200,350,180,290,220,290)
    
      //ZWARTE RAND
      fill(38, 166, 255)
      circle(200,200,102)
      circle(200,265,42)
      triangle(200,35,179,160,221,160)
    
    
      //ORANGE VOORGROND
      fill(239, 130, 76)
      circle(200,200,100)
      circle(200,265,40)
      triangle(200,40,180,160,220,160)
    
      //mond
      fill(255,255,255)
      ellipse(200,220,46,14)
      fill(239, 130, 76)
      ellipse(200,213,70,20)
    
      //OGEn
      stroke(0,0,0)
      strokeWeight(1)
      fill(249, 249, 249)
      ellipse(180,190,18,48)
      ellipse(220,190,18,48)
    
      strokeWeight(1)   
      line(171,190,189,190)
      line(211,190,229,190)
      
    
      fill(26, 99, 166)
      ellipse(180,190,8,35)
      ellipse(220,190,8,35)
    }
    pop();
  }
		

  beweging() {
    if (this.upPressed && this.yPos > 2) {
      this.yPos -= this.step;
    }
    if (this.downPressed && this.yPos < height-200) {
      this.yPos += this.step;
    }
  }
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    myRobot.upPressed = true;
  } else if (keyCode === DOWN_ARROW) {
    myRobot.downPressed = true;
  }
}

function keyReleased() {
  if (keyCode === UP_ARROW) {
    myRobot.upPressed = false;
  } else if (keyCode === DOWN_ARROW) {
    myRobot.downPressed = false;
  }
}