keyboard = {

        leftArrowPressed: function(){
                if((startNumber %7 > 0) && (startNumber < 126) && (!isALetter((startNumber-1)))){
                        --startNumber;
                        view.removeLetter((startNumber - 6).toString());
                }
        },

        rightArrowPressed: function(){
                if((startNumber %7 < 6) && (startNumber < 126) && (!isALetter((startNumber+1)))){
                        ++startNumber;
                        view.removeLetter((startNumber - 8).toString());
                }
        },

        downArrowPressed: function(){
                if((startNumber < 119) && (!isALetter((startNumber+7)))){
                        startNumber += 7;
                        view.removeLetter((startNumber - 14).toString());
                }
        },

        spacebarPressed: function(){
                var loop = startNumber;
                while(loop < 119){
                        loop += 7;
                }
		var notRandomTemp;
		var notRandom;
		var x2;
		var y2;
		
                while(isALetter(loop)){
                        loop -= 7;
                }
                view.displayLetter(loop,randomNumber);
		updateLetterArray((loop + 7), letter);
		if(loop %7 == 0){	
			wordCheck.column1WordCheck((loop+7));
		}
		else if(loop %7 == 1){
			wordCheck.column2WordCheck((loop+7));
		}
		else if(loop %7 == 2){
			wordCheck.column3WordCheck((loop+7));
		}
		else if(loop %7 == 3){
			wordCheck.column4WordCheck((loop+7));
		}
		else if(loop %7 == 4){
			wordCheck.column5WordCheck((loop+7));
		}
		else if(loop %7 == 5){
			wordCheck.column6WordCheck((loop+7));
		}
		else{	//loop %7 == 6
			wordCheck.column7WordCheck((loop+7));
		}
		randomNumber = Math.floor((Math.random()*100000) + 1);
                view.removeLetter(startNumber-7);
                startNumber = 3;
		score++;
        },

	one: function(){
		var storeNum;
		if(oneT == ""){
			oneT = letter;
			view.displayLetter((300).toString(), randomNumber);
			randomNumber = Math.floor((Math.random()*100000) + 1);
			view.removeLetter(startNumber-7);
			startNumber = 3;
			score++;
		}
		else{
			storeNum = oneT;
			oneT = letter;
			letter = storeNum;

			view.displayLetter((300).toString(), view.getNumber(oneT));
			randomNumber = view.getNumber(storeNum);
		}
	},

	two: function(){
		var storeNum;
		if(twoT == ""){
			twoT = letter;
			view.displayLetter((301).toString(), randomNumber);
			randomNumber = Math.floor((Math.random()*100000) + 1);
			view.removeLetter(startNumber-7);
			startNumber = 3;
			score++;
		}
		else{
			storeNum = twoT;
			twoT = letter;
			letter = storeNum;

			view.displayLetter((301).toString(), view.getNumber(twoT));
			randomNumber = view.getNumber(storeNum);
		}
	},

	three: function(){
		var storeNum;
		if(threeT == ""){
			threeT = letter;
			view.displayLetter((302).toString(), randomNumber);
			randomNumber = Math.floor((Math.random()*100000) + 1);
			view.removeLetter(startNumber-7);
			startNumber = 3;
			score++;
		}
		else{
			storeNum = threeT;
			threeT = letter;
			letter = storeNum;

			view.displayLetter((302).toString(), view.getNumber(threeT));
			randomNumber = view.getNumber(storeNum);
		}	
	}
};


document.onkeyup = function(evt){
    evt = evt || window.event;
    switch (evt.keyCode) {
        case 37:
                keyboard.leftArrowPressed();
                break;
        case 39:
                keyboard.rightArrowPressed();
                break;
        case 40:
                keyboard.downArrowPressed();
                break;
        case 32:
                keyboard.spacebarPressed();
                break;
	case 49:
		keyboard.one();
		break;
	case 50:
		keyboard.two();
		break;
	case 51:
		keyboard.three();
		break;
    }
};

