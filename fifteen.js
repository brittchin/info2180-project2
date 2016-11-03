$(document).ready(function(){
	var puzzle = $("#puzzlearea div");
	var x = 0;
	var y = 0;
	var countRow = 0;
	for (var i = 0; i < puzzle.length;i++) {
		puzzle[i].setAttribute("class","puzzlepiece");
		puzzle[i].style.backgroundRepeat= "no-repeat";
		puzzle[i].style.backgroundSize = "400px 400px";
		puzzle[i].style.float = "left";
		puzzle[i].style.position = "static";
		puzzle[i].style.backgroundPosition = "-" + x + "px -" + y + "px";
		countRow++;
		if(countRow==4){
			y+=96; 
			x = 0;
			countRow = 0;
		}
		else{
			x+=96;
		}
    }

    var	blankTile =  document.createElement("div");
    blankTile.style.border = "2px solid black";
    $("#puzzlearea").append(blankTile);

});