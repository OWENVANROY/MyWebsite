class fireball {
    constructor() {
      this.x = width + 500;
      this.y = random(height);
      this.speed = random(1, 20);
      this.visible = true;
    }
  
    update() {
      if (this.visible){
      this.x -= this.speed;
      if (this.x + 400 < 0) {
        this.x = width;
        this.y = random(height);
        this.visible = true;
      }
    }
    }
  
    
  
    draw() {
      if (this.visible) {
        push();
        translate(this.x,this.y)
        push();
        scale(0.4)  
        noStroke()
        fill(255,154,81)
        beginShape()
        vertex(95,135)
        vertex(283,145)
        vertex(252,163)
        vertex(361,158)
        vertex(311,178)
        vertex(386,187)
        vertex(334,201)
        vertex(373,223)
        vertex(255,234)
        vertex(334,243)
        vertex(110,263)
        vertex(70,258)
        vertex(41,234)
        vertex(31,198)
        vertex(44,163)
        vertex(63,145)
        endShape()
        fill(237,32,39)
        circle(92,200,93)
        fill(250,237,34)
        circle(92,200,93)
        fill(237,32,39)
        ellipse(87,200,73,83)
        beginShape()
        vertex(120,147)
        vertex(199,153)
        vertex(181,162)
        vertex(253,157)
        vertex(212,169)
        vertex(324,166)
        vertex(206,188)
        vertex(355,187)
        vertex(292,200)
        vertex(334,209)
        vertex(251,212)
        vertex(300,224)
        vertex(215,225)
        vertex(255,241)
        vertex(194,237)
        vertex(207,247)
        vertex(116,252)
        vertex(141,228)
        vertex(150,198)
        vertex(143,171)
        endShape()
        fill(250,237,34)
        beginShape()
        vertex(143,156)
        vertex(164,163)
        vertex(160,167)
        vertex(178,177)
        vertex(193,171)
        vertex(178,189)
        vertex(216,201)
        vertex(263,201)
        vertex(226,212)
        vertex(248,215)
        vertex(187,223)
        vertex(209,230)
        vertex(139,244)
        vertex(157,226)
        vertex(164,199)
        vertex(157,180)
        endShape()
        pop();
        pop();
    }
  }
  }