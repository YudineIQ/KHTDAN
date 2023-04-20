	var imageIndex = 1;
	var musicIndex = 1;
	var image = document.getElementById("image");
	function switchImageAndMusic() {
		// Switch the image
		if (imageIndex == 1) {
			image.src = "image1.gif";
			imageIndex = 2;
		} else {
			image.src = "image2.gif";
			imageIndex = 1;
		}
		
		// Switch the music
		var music1 = document.getElementById("music1");
		var music2 = document.getElementById("music2");
		if (musicIndex == 1) {
			music1.currentTime = 0; // reset to beginning
			music1.pause();
			music2.currentTime = 0; // reset to beginning
			music2.play();
			music2.volume = 0.5;
			musicIndex = 2;
		} else {
			music2.currentTime = 0; // reset to beginning
			music2.pause();
			music1.currentTime = 0; // reset to beginning
			music1.play();
			music1.volume = 0.2;
			musicIndex = 1;
		}
		var clickAudio = new Audio("click.mp3");
        clickAudio.Audio = 0.5;
        clickAudio.play();
		// Show the image
		/*image.style.display = "block";*/
	}
