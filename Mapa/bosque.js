var birdSound = new Audio("sonidos/pajaros.mp3");
birdSound.volume = 0.3;
birdSound.play();

var deer = document.createElement("img");
deer.src = "./deer.png";
deer.id = "deer";
document.getElementById("animals").appendChild(deer);

var rabbit = document.createElement("img");
rabbit.src = "./rabbit.png";
rabbit.id = "rabbit";
document.getElementById("animals").appendChild(rabbit);

var bird = document.createElement("img");
bird.src = "./bird.png";
bird.id = "bird";
document.getElementById("animals").appendChild(bird);
