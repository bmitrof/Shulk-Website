//load sounds at start of webpage
function loadSounds() {
	if (!createjs.Sound.initializeDefaultPlugins()) {
		window.alert("problem loading sounds");
		return;
	}
	
	var sounds = [
		{src: "feelingit.ogg", id: "feels"},
		{src: "mainmusic.ogg", id: "gaurplains"}
	];
	createjs.Sound.alternateExtensions = ["mp3"];
	
	for (var i = 0; i < sounds.length; i++) {
		createjs.Sound.registerSound(sounds[i].src, sounds[i].id, 50);
	}
}

var numberoffeels = 0;
function displayFeels() {
	numberoffeels ++;
	document.getElementById("counter").innerHTML = "FEELS: " + numberoffeels;
}

var firstplay = true;
function playSound() {
	if (firstplay) {
		createjs.Sound.play("gaurplains", "none", 0, 0, 0, .75);
		firstplay = false;
	}
	createjs.Sound.play("feels", "none", 0, 0, 0, 1);
	displayFeels();
}


