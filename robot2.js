function setup() {
    createCanvas(400,400);
  }
  
  function draw() {
    push()
    translate(mouseX-200,mouseY-200)
    background(200,200,200)
    noStroke()
    //CONTOUR
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
  
    
    fill(38, 166, 255)
    circle(200,200,123)
    ellipse(200,270,70,60)
    triangle(200,14,164,160,236,160)
    triangle(200,356,178,290,222,290)
  
  
    //ACHTERGROND
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
    pop()
    
  
  }