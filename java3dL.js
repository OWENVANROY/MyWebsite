
/*aanmaken en definieren van het canvas*/
const canvas = document.querySelector(".canvas");
canvas.width = window.innerWidth/2;
canvas.height = window.innerHeight;

/*omdat het geen json file is, spreken we nog steeds van 2d*/
const context = canvas.getContext("2d");

/*aantal frames*/
const frameCount = 360;



/*currentFrame is een constante die word aangemaakt om telkemalen de volgende foto aan te spreken*/
const currentFrame = (index) => `./images/lamp/${(index + 1).toString()}.png`;

/* nieuwe lege lijst aanmaken, waarin alle fotos in geplaatst kunnen worden*/
const images = [];

/*zorgt ervoor dat de frames op de eerste foto starten */
let ball = { frame: 0 };


/*doordat er meerdere fotos worden gebruikt, moet er een for lus doorlopen framecount is het aantal frames die er beschikbaar zijn
  aan het begin van de lus word de constante i gelijk gesteld aan nul, telkens deze doorlopen word, word er 1 bij i opgeteld (i++)*/
for (let i = 0; i < frameCount; i++) {
  const img = new Image();
  img.src = currentFrame(i);
  console.log(currentFrame(i));
  images.push(img);
}

/*zorgt ervoor dat de geometrie meedraaid met de scroller van de muis*/
gsap.to(ball, {
  frame: frameCount - 1,
  snap: "frame",
  ease: "none",
  scrollTrigger: {
    scrub: 0.5,
    pin: "canvas",
    end: "500%",
  },
  /*zorgt ervoor dat de scrolltrigger en de functie render zin connectie staan*/
  onUpdate: render,
});

/*upload de geladen foto van in de lijst naar de functie render zodat deze telkens een nieuwe fotogebruikt bij elke scrolltrigger*/
images[0].onload = render;

function render() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.drawImage(images[ball.frame], (canvas.width-images[0].width)/2, (canvas.height-images[0].height)/2);
}