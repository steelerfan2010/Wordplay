array = {
	createArray: function(){
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
	},

	printArray: function(){
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
	//      alert(test);
	},

	updateLetterArray: function(index, letterVal){
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
	},

	removeWord: function(index, wordSize){
		for(var i = 0; i < wordSize; i++){
			view.removeLetter(index+i);
		}
	},

	removeValue: function(x, y, wordSize){
		for(var i = 0; i < wordSize; i++){
			letterValues[x+i][y] = "-";
		}
	},

	makeString: function(x,y, wordSize){
		var string = "";
		for(var i = 0; i < wordSize; i++){
			string += letterValues[x+i][y];
		}
		return string;
	},

	getY: function(index){
		var y = 0;
		while(index > 6){
			y++;
			index -= 7;
		}
		return y;
	},

	getX: function(index){
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
};

