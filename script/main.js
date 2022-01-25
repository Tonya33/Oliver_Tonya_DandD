(() => {
	// collect the buttons at the bottom of the page
	let theThumbnails = document.querySelectorAll("#buttonHolder img"),
	gameBoard = document.querySelector(".puzzle-board");

	function changeBGImg() {
		gameBoard.style.backgroundImage = `url(images/backGround${this.dataset.bgref}.jpg)`
		// debugger;
	}
	theThumbnails.forEach(thumb => thumb.addEventListener("click", changeBGImg));


})();
