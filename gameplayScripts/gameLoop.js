/*****************************************
	To do:
	--jquery fade in/out
	---show upcoming letter
	---store letter
	---add a scoreboard
	---set up database to record high scores (local/global)
	----make menu/tutorial shit
*****************************************/

/*########################################
	Issues:
########################################*/

/*@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
	Notes:
	-Add alert(test) back after demo
	-Delete the leak in random numbers if works after testing
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@*/

var startNumber = 3;

function isALetter(tableValue){
        if(document.getElementById(tableValue).hasAttribute("class")){
                return true
        }
        else{
                return false;
        }
}

function createArray(){
	var letterMap = new Array(7);
	for(var i = 0; i < 7; i++){
		letterMap[i] = new Array(20);
	}

	for(var i = 0; i < 7; i++){
		for(var j = 0; j < 20; j++){
			letterMap[i][j] = "-";
		}
	}
	return letterMap;
}

function printArray(){
	var test;
	for(var i = 0; i < 20; i++){
		test += "\n";
		for(var j = 0; j < 7; j++){
			test += letterValues[j][i].toString();
			if(j == 6){
				continue;
			}
			test += ",";
		}
	}
//	alert(test);
}

function updateLetterArray(index, letterVal){
        var yValue = -1;
        var xValue = 0;
        while(index > 6){
                yValue++;
                index -= 7;
        }
        while(index > 0){
                xValue++;
                index--;
        }
        letterValues[xValue][yValue] = letterVal;
        printArray();
}

function removeWord(index, wordSize){
	for(var i = 0; i < wordSize; i++){
		view.removeLetter(index+i);
	}
}

function removeValue(x, y, wordSize){
	for(var i = 0; i < wordSize; i++){
		letterValues[x+i][y] = "-";
	}
}

function makeString(x,y, wordSize){
	var string = "";
	for(var i = 0; i < wordSize; i++){
		string += letterValues[x+i][y];
	}
	return string;
}

function getY(index){
	var y = 0;
	while(index > 6){
		y++;
		index -= 7;
	}	
	return y;
}

function getX(index){
	var x = 0;
	while(index > 6){
		index -= 7;
	}
	while(index > 0){
		x++;
		index--;
	}
	return x;
}

//i=start, f=end
function smart(index, i, f){
	var xx;
	var yy;
	var notRandomTemp;
	var notRandom;
	var complement;

	while(i > f){
		while(isALetter(index-i)){
			complement = (7-i); //clever
			xx = getX(index-i);
                        yy = getY(index-i);
                        notRandomTemp = (letterValues[xx][yy]).toString();
	          
			letterValues[xx][yy+1] = notRandomTemp;
			letterValues[xx][yy] = "-";

        		notRandom = view.getNumber(notRandomTemp);
                        view.displayLetter(index+complement,notRandom);
                        view.removeLetter((index-i).toString());
                        index -= 7;

                }
		i--;
	}
}

function end(){
	if(isALetter(3) && isALetter(10)){
		return true;
	}
}

var randomNumber = Math.floor((Math.random()*100000) + 1); 

var letter = "E";
var nextLetter = "T";
var letterAfter = "S";

var oneT = "";
var twoT = "";
var threeT = "";
//var storeNum = "";

var score = 1;

var bestWord = "";
var bestScore = 0;

function repeat(letterArr){
	var timer = setInterval(function() {
	view.displayMessage("Score: " + score);
	if(end()){
		alert("Game Over\n Your Score is: " + score);
		clearInterval(timer);
	}
//	view.displayLetter((300).toString(), randomNumber);
		if((startNumber < 126)){  
			if(isALetter((startNumber.toString()))){
				updateLetterArray(startNumber, letter);
				if(startNumber %7 == 0){
					wordCheck.column1WordCheck(startNumber);
				}
				else if(startNumber %7 == 1){
					wordCheck.column2WordCheck(startNumber);
				}
				else if(startNumber %7 == 2){
					wordCheck.column3WordCheck(startNumber);
				}
				else if(startNumber %7 == 3){
					wordCheck.column4WordCheck(startNumber);
				}
				else if(startNumber %7 == 4){
					wordCheck.column5WordCheck(startNumber);
				}
				else if(startNumber %7 == 5){	
					wordCheck.column6WordCheck(startNumber);
				}
				else{	// %7 == 6
					wordCheck.column7WordCheck(startNumber);
				}
				startNumber = 3;
				randomNumber = Math.floor((Math.random()*100000) + 1);
				score++;
			}
			else{
				view.displayLetter((startNumber).toString(),randomNumber);
				if(startNumber > 6){
					view.removeLetter((startNumber-7).toString());
				}
				startNumber += 7;
			}
		}
		else{
			updateLetterArray(startNumber, letter);
			if(startNumber %7 == 0){
				wordCheck.column1WordCheck(startNumber);
			}
			else if(startNumber %7 == 1){
				wordCheck.column2WordCheck(startNumber);
			}
			else if(startNumber %7 == 2){
				wordCheck.column3WordCheck(startNumber);
			}
			else if(startNumber %7 == 3){
				wordCheck.column4WordCheck(startNumber);
			}
			else if(startNumber %7 == 4){
				wordCheck.column5WordCheck(startNumber);
			}
			else if(startNumber %7 == 5){	
				wordCheck.column6WordCheck(startNumber);
			}
			else{	// %7 == 6
				wordCheck.column7WordCheck(startNumber);
			}
			startNumber = 3;
			randomNumber = Math.floor((Math.random()*100000) + 1); 
			score++;
		}
	}, 500);
}

	var letterValues = createArray();

function gameLoop(){
	repeat(letterValues);
}

gameLoop();
