$(document).ready(function(){
	var puzzle = $("#puzzlearea div");
	for (var i = puzzle.length - 1; i >= 0; i--) {
		puzzle[i].setAttribute("class","puzzlepiece");
		puzzle[i].style.backgroundRepeat= "no-repeat";
		puzzle[i].style.backgroundSize = "400px 400px";
		puzzle[i].style.float = "left";
		puzzle[i].style.position = "static";
		puzzle[i].style.backgroundPosition = "-100px 0px"
    }
});
