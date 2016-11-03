	var blankTile = 15;
	var move = "noMove";
	var puzzle = [];
window.onload= function(){
	puzzle = document.querySelectorAll("#puzzlearea div");
	var x = 0, y = 0, countRow = 0;
	for (var i = 0; i < puzzle.length;i++) {
		puzzle[i].setAttribute("class","puzzlepiece");
		puzzle[i].style.backgroundSize = "400px 400px";
		puzzle[i].style.float = "left";
		puzzle[i].style.left = x + "px";
		puzzle[i].style.top = y + "px";
		puzzle[i].style.position = "static";
		puzzle[i].style.backgroundPosition = "-" + x + "px -" + y + "px";
		countRow++;
		if(countRow==4){
			y+=100; 
			x = 0;
			countRow = 0;
		}
		else{
			x+=100;
		}
		puzzle[i].onmouseover = isMovable(puzzle[i]);
		puzzle[i].onclick = movePiece(puzzle[i]);
    }

     document.getElementById('shufflebutton').onclick =shufflePuzzle();

};

function isMovable(piece){
		if((parseInt(piece.style.left)+parseInt(piece.offsetWidth)) == parseInt(getBlankTileX()) && piece.style.top==getBlankTileY()){
			piece.setAttribute("class", piece.className + " movablepiece");
			move="right";
		}else if(parseInt(piece.style.left) == (parseInt(getBlankTileX())+parseInt(piece.offsetWidth)) && piece.style.top==getBlankTileY()){
			piece.setAttribute("class", piece.className + " movablepiece");			
			move= "left";
		}else if((parseInt(piece.style.top)+parseInt(piece.offsetHeight)) == parseInt(getBlankTileY()) && piece.style.left==getBlankTileX()){
			piece.setAttribute("class", piece.className + " movablepiece");			
			move= "down";
		}else if(parseInt(piece.style.top) == (parseInt(getBlankTileY())+parseInt(piece.offsetHeight)) && piece.style.left==getBlankTileX()){
			piece.setAttribute("class", piece.className + " movablepiece");			
			move= "up";
		}else{
			move= "noMove";
		}
}

function movePiece(piece){
	switch(move){
		case "right":
			piece.style.left = parseInt(piece.style.left)+100 +"px";
			blankTile-=1;
			str=piece.textContent;
			// shift();
			break;
		case "left":
			piece.style.left = parseInt(piece.style.left)-100 +"px";
			blankTile+=1;
			str=piece.textContent;
			// shift();
			break;
		case "down":
			piece.style.top = parseInt(piece.style.top)+100 +"px";
			blankTile-=4;
			str=piece.textContent;
			// shift();
			break;
		case "up":
			piece.style.top = parseInt(piece.style.top)-100 +"px";
			blankTile+=4;
			str=piece.textContent;
			// shift();
			break;
		default:
			break;
	}
}

// function shift(){
// 	var x = 0;
// 	for(var i=0; i<puzzle.length;i++){
// 		if(puzzle[i].textContent===str){
// 			x=i;	
// 		}
// 	}
// }

function shuffleMovable(piece){
		if((parseInt(piece.style.left)+parseInt(piece.offsetWidth)) === parseInt(getBlankTileX()) && piece.style.top===getBlankTileY()){
			move="right";
		}else if(parseInt(piece.style.left) === (parseInt(getBlankTileX())+parseInt(piece.offsetWidth)) && piece.style.top===getBlankTileY()){
			move= "left";
		}else if((parseInt(piece.style.top)+parseInt(piece.offsetHeight)) === parseInt(getBlankTileY()) && piece.style.left===getBlankTileX()){
			move= "down";
		}else if(parseInt(piece.style.top) === (parseInt(getBlankTileY())+parseInt(piece.offsetHeight)) && piece.style.left===getBlankTileX()){
			move= "up";
		}else{
			move= "noMove";
		}
		return move;
}

function shuffleMove(piece){
	switch(move){
		case "right":
			piece.style.left = parseInt(piece.style.left)+100 +"px";
			blankTile-=1;
			break;
		case "left":
			piece.style.left = parseInt(piece.style.left)-100 +"px";
			blankTile+=1;
			break;
		case "down":
			piece.style.top = parseInt(piece.style.top)+100 +"px";
			blankTile-=4;
			break;
		case "up":
			piece.style.top = parseInt(piece.style.top)-100 +"px";
			blankTile+=4;
			break;
		default:
			break;
	}
}

function shufflePuzzle(){
	for (var i = 0; i <100; i++) {
		var numArray = [];
		for (var x = 0; x < puzzle.length; x++) {
			if(shuffleMovable(puzzle[x])!="noMove"){
				numArray.push[x]
			}
		}
		if(numArray.length!=0){
			var r = numArray[Math.floor(Math.random() *numArray.length)];
			shuffleMovable(puzzle[r]);
			shuffleMove(puzzle[r]);
		}
		move = "noMove";
	}
}

function getBlankTileX(){
	if(blankTile>=0 && blankTile<4){
			return blankTile*100+'px';
		}else if(blankTile>=4 && blankTile<8){
			return (blankTile-4)*100+'px';
			
		}else if(blankTile>=8 && blankTile<12){
			return (blankTile-8)*100+'px';
			
		}else{
			return (blankTile-12)*100+'px';
			
		}
}

function getBlankTileY(){
		if(blankTile>=0 && blankTile<4){
			return '0px';
		}else if(blankTile>=4 && blankTile<8){
			return '100px';
			
		}else if(blankTile>=8 && blankTile<12){
			return '200px';
			
		}else{
			return '300px';
			
		}
}