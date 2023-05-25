let weatherData;
let raining = false;
let img;
let afbx = 0;
let myRobot;
let fireballs = [];
let counter = 0;
let gameOver = false;
let resetButton;
let laserSound;
let backgroundSound;
let failSound;
let aant_geluid = 0;
let level = 1;
let showNextLevel = false;
let startTime;
let showBalloon = false;
canWidth = innerWidth - 1;
canHeigt =innerHeight - 1;

function preload() {
  img = loadImage('data/city_background_night.png');
  soundFormats('mp3');
  laserSound =loadSound('data/lasergun.mp3');
  backgroundSound = loadSound('data/background.mp3');
  failSound = loadSound('data/fail.mp3');
}

function setup() {
  startTime = millis();
  let cityID = 2794055; // Kortrijk, België
  let apiKey = "dfb3d515d84e96bcb2391771d8882419";
  
  let url = `https://api.openweathermap.org/data/2.5/weather?id=${cityID}&appid=${apiKey}`;
  
  httpGet(url, 'json', false, function(response) {
    weatherData = response;
    
    // Controleer of het regent in Kortrijk
    if (weatherData.weather[0].main === 'Rain') {
      raining = true;
    } else {
      raining = false;
    }
  });

  createCanvas(canWidth, canHeigt);
  myRobot = new Robot();
  resetButton = createButton('Reset');
  resetButton.position(width / 2, height / 2 + 50);
  resetButton.mousePressed(resetGame);
  resetButton.hide();
  
  // Pas de grootte van de knop aan
  resetButton.style('font-size', '24px');
  resetButton.style('padding', '10px 20px');
  
  // Centreer de knop
  resetButton.position(width / 2 - resetButton.width / 2, height / 2 + 50);
}

function gotWeatherData(data) {
  weatherData = data;
}


function checkCollision(myRobot, fireballs) {
  for (let fireball of fireballs) {
    let dx = (myRobot.xPos + 30) - (fireball.x + 30);
    let dy = (myRobot.yPos + 50) - (fireball.y + 50);
    let distance = sqrt(dx * dx + dy * dy);
    if (distance < 50 + 50) {
      // collision detected
      gameOver = true;
    }
  }
}

function mouseClicked() {
  for (let i = fireballs.length - 1; i >= 0; i--) {
    let fireball = fireballs[i];
    if (mouseX > fireball.x && mouseX < fireball.x + 100 && mouseY > fireball.y && mouseY < fireball.y + 100) {
      fireballs.splice(i, 1); // Verwijder de geraakte vuurbal
    }
  }
  if (laserSound.isPlaying()) {
    laserSound.stop();
    laserSound.play();
  } else {
    laserSound.play();
  }

  // Controleer of alle vuurballen zijn vernietigd
  if (fireballs.length === 0) {
    showNextLevel = true; // Toon "Next Level"
    setTimeout(startNextLevel, 3000); // Wacht 3 seconden voordat het volgende level start
  }
}

function startNextLevel() {
  showNextLevel = false; // Verberg "Next Level"
  level++; // Verhoog het level
  nextLevelTimer = setTimeout(startNextLevel, 3000);
  
}

function mouseReleased() {
  myRobot.laserActive = false;
}

function resetGame() {
  counter = 0;
  level = 1;
  showNextLevel= false;
  aant_geluid = 0;
  gameOver = false;
  myRobot = new Robot();
  fireballs = [];
  for (let i = 0; i < level; i++) {
    fireballs.push(new fireball());
  }
}

function drawBalloon() {
  let x = 20; // x-positie van de tekstballon
  let y = 40; // y-positie van de tekstballon
  let balloonWidth = 150; // breedte van de tekstballon
  let balloonHeight = 80; // hoogte van de tekstballon
  let cornerRadius = 10; // hoekradius van de tekstballon
  
  // Tekstballon
  fill(255);
  stroke(0);
  strokeWeight(1);
  rect(x, y, balloonWidth, balloonHeight, cornerRadius);
  
  // Tekst
  textAlign(CENTER, CENTER);
  textSize(16);
  fill(0);
  noStroke();
  text('Goed bezig!', x + balloonWidth / 2, y + balloonHeight / 2);
}



function draw() {
  checkCollision(myRobot, fireballs);
  if (gameOver) {
    if (aant_geluid === 0 && !failSound.isPlaying()) {
      failSound.play();
      aant_geluid += 1;
    }
    background(0);
    fill(255);
    textSize(40);
    textAlign(CENTER, CENTER);
    text("You Died", width / 2, height / 2);
    resetButton.show();
  } else {
    let imgWidth = img.width * (windowHeight / img.height);
    image(img, afbx, 0, imgWidth, windowHeight);
    image(img, afbx + imgWidth, 0, imgWidth, windowHeight);
    afbx -= 2;
    counter += 1;
    if (afbx < -imgWidth) {
      afbx = 0;
    }
    fill(255);
    textSize(32);
    textAlign(CENTER, BOTTOM);
    text("DISTANCE: " + round(counter/100) + "m", width/2, height);
  
    myRobot.display();
    myRobot.beweging();
  
    // Voeg een nieuwe vuurbal toe als er minder vuurballen zijn dan het huidige level
    if (fireballs.length < level) {
      fireballs.push(new fireball());
    }
  
    // Update en teken de vuurballen
    for (let fireball of fireballs) {
      fireball.update();
      fireball.draw();
    }

    if (raining) {
      stroke(0, 0, 255);
      for (let i = 0; i < 100; i++) {
        let x = random(width);
        let y = random(height);
        line(x, y, x, y + 10); 
      }
    }

    // Toon "Next Level" als alle vuurballen zijn vernietigd
    if (showNextLevel) {
      textSize(40);
      textAlign(CENTER, CENTER);
      text("Next Level", width / 2, height / 2);
    }

    resetButton.hide();

    
    if ((millis() - startTime) % 10000 > 0 && (millis() - startTime) % 10000 < 3000) { // Toon het ballonnetje elke 10 seconden gedurende 3 seconden
      showBalloon = true;
    } else {
      showBalloon = false;
    }
  
    if (showBalloon) {
      drawBalloon();
    }
  }
}
