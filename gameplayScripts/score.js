core = {
	calculateScore: function(word, size){
		var tempScore = 0;
		var addToScore = 0;
		var i = 0;
		while(i < size){
			tempScore += letterVal.getValue(word.substring(i, i+1));
			i++;
		}
		if(size == 4){
			addToScore += tempScore;
		}
		else if(size == 5){
			addToScore += (2 * tempScore);
		}
		else if(size == 6){
			addToScore += (3 * tempScore);
		}
		else if(size == 7){
			addToScore += (4 * tempScore);
		}
		else{
			//error
		}
		score += addToScore;
		if(addToScore > bestScore){
			bestScore = addToScore;
			bestWord = word;
			view.displayMessage3("Best word: " + bestWord);
			view.displayMessage4("Worth: " + bestScore + " points");
		}
	}
};

