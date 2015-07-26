wordCheck = {
		
	column1WordCheck: function(index){
		index -= 7;
		var str;
		var yValue = getY(index);
		var xValue = getX(index);
	//7
		if(isALetter((index+1)) && isALetter((index+2)) && isALetter((index+3)) && isALetter((index+4)) &&
		isALetter((index+5)) && isALetter((index+6))){
			str = makeString(xValue ,yValue ,7);
			if(set.contains(7, str)){
				removeWord(index, 7);
				removeValue(xValue, yValue, 7);
				smart(index, 6, 5);
				smart(index, 5, 4);
				smart(index, 4, 3);
				smart(index, 3, 2);
				smart(index, 2, 1);
				smart(index, 1, 0);
				core.calculateScore(str, 7);
				view.displayMessage2("Last word spelt: " + str);
				return;
			}
		}
	//6
		if(isALetter((index+1)) && isALetter((index+2)) && isALetter((index+3)) && isALetter((index+4)) &&
		isALetter((index+5))){
			str = makeString(xValue ,yValue ,6);
			if(set.contains(6, str)){
				removeWord(index, 6);
				removeValue(xValue, yValue, 6);
				smart(index, 6, 5);
				smart(index, 5, 4);
				smart(index, 4, 3);
				smart(index, 3, 2);
				smart(index, 2, 1);
				core.calculateScore(str, 6);
				view.displayMessage2("Last word spelt: " + str);
				return;
			}
		}
	//5
		if(isALetter((index+1)) && isALetter((index+2)) && isALetter((index+3)) && isALetter((index+4))){
			str = makeString(xValue ,yValue ,5);
			if(set.contains(5, str)){
				removeWord(index, 5);
				removeValue(xValue, yValue, 5);
				smart(index, 6, 5);
				smart(index, 5, 4);
				smart(index, 4, 3);
				smart(index, 3, 2);
				core.calculateScore(str, 5);
				view.displayMessage2("Last word spelt: " + str);
				return;
			}
		}
	//4
		if(isALetter((index+1)) && isALetter((index+2)) && isALetter((index+3))){
			str = makeString(xValue ,yValue ,4);
			if(set.contains(4, str)){
				removeWord(index, 4);
				removeValue(xValue, yValue, 4);
				smart(index, 6, 5);
				smart(index, 5, 4);
				smart(index, 4, 3);
				core.calculateScore(str, 4);
				view.displayMessage2("Last word spelt: " + str);
				return;
			}
		}
	},

	column2WordCheck: function(index){
		index -= 7;
		var str;
		var yValue = getY(index);
		var xValue = getX(index);
		var shouldReturn = 0;    //boolean
	//7             
		if(isALetter((index-1)) && isALetter((index+1)) && isALetter((index+2)) && isALetter((index+3)) &&
		isALetter((index+4)) && isALetter((index+5))){
			str = makeString((xValue-1) ,yValue ,7);
			if(set.contains(7, str)){
				removeWord((index-1), 7);
				removeValue((xValue-1), yValue, 7);
				smart(index, 8, 7);
				smart(index, 6, 5);
				smart(index, 5, 4);
				smart(index, 4, 3);
				smart(index, 3, 2);
				smart(index, 2, 1);
				core.calculateScore(str, 7);
				view.displayMessage2("Last word spelt: " + str);
				return;
			}
		}
	//6's
		//Calculate score difference to figure out find to remove
		if(isALetter((index-1)) && isALetter((index+1)) && isALetter((index+2)) && isALetter((index+3)) &&
		isALetter((index+4))){
			str = makeString((xValue-1) ,yValue ,6);
			if(set.contains(6, str)){
				removeWord((index-1), 6);
				removeValue((xValue-1), yValue, 6);
				shouldReturn = 1;
				smart(index, 8, 7);
				smart(index, 6, 5);
				smart(index, 5, 4);
				smart(index, 4, 3);
				smart(index, 3, 2);
				core.calculateScore(str, 6);
				view.displayMessage2("Last word spelt: " + str);
			}
		}
		if(isALetter((index+1)) && isALetter((index+2)) && isALetter((index+3)) &&
		isALetter((index+4)) && isALetter((index+5))){
			str = makeString((xValue) ,yValue ,6);
			if(set.contains(6, str)){
				removeWord((index), 6);
				removeValue((xValue), yValue, 6);
				shouldReturn = 1;
				smart(index, 6, 5);
				smart(index, 5, 4);
				smart(index, 4, 3);
				smart(index, 3, 2);
				smart(index, 2, 1);
				core.calculateScore(str, 6);
				view.displayMessage2("Last word spelt: " + str);
			}
		}

	//5's
		//once again calc score diff
		if(isALetter((index-1)) && isALetter((index+1)) && isALetter((index+2)) && isALetter((index+3))){
			str = makeString((xValue-1) ,yValue ,5);
			if(set.contains(5, str)){
				removeWord((index-1), 5);
				removeValue((xValue-1), yValue, 5);
				shouldReturn = 1;
				smart(index, 8, 7);
				smart(index, 6, 5);
				smart(index, 5, 4);
				smart(index, 4, 3);
				core.calculateScore(str, 5);
				view.displayMessage2("Last word spelt: " + str);
			}
		}
		if(isALetter((index+1)) && isALetter((index+2)) && isALetter((index+3)) &&
		isALetter((index+4))){
			str = makeString((xValue) ,yValue ,5);
			if(set.contains(5, str)){
				removeWord((index), 5);
				removeValue((xValue), yValue, 5);
				shouldReturn = 1;
				smart(index, 6, 5);
				smart(index, 5, 4);
				smart(index, 4, 3);
				smart(index, 3, 2);
				core.calculateScore(str, 5);
				view.displayMessage2("Last word spelt: " + str);
			}
		}


	//4's
		//see above 
		if(isALetter((index-1)) && isALetter((index+1)) && isALetter((index+2))){
			str = makeString((xValue-1) ,yValue ,4);
			if(set.contains(4, str)){
				removeWord((index-1), 4);
				removeValue((xValue-1), yValue, 4);
				shouldReturn = 1;
				smart(index, 8, 7);
				smart(index, 6, 5);
				smart(index, 5, 4);
				core.calculateScore(str, 4);
				view.displayMessage2("Last word spelt: " + str);
			}
		}
		if(isALetter((index+1)) && isALetter((index+2)) && isALetter((index+3))){
			str = makeString((xValue) ,yValue ,4);
			if(set.contains(4, str)){
				removeWord((index), 4);
				removeValue((xValue), yValue, 4);
				shouldReturn = 1;
				smart(index, 6, 5);
				smart(index, 5, 4);
				smart(index, 4, 3);
				core.calculateScore(str, 4);
				view.displayMessage2("Last word spelt: " + str);
			}
		}

		if(shouldReturn == 1){
			return;
		}	
	},

	column3WordCheck: function(index){
		index -= 7;
		var str;
		var yValue = getY(index);
		var xValue = getX(index);
		var shouldReturn = 0;    //boolean
	//7             
		if(isALetter((index-2)) && isALetter((index-1)) && isALetter((index+1)) && isALetter((index+2)) &&
		isALetter((index+3)) && isALetter((index+4))){
			str = makeString((xValue-2) ,yValue ,7);
			if(set.contains(7, str)){
				removeWord((index-2), 7);
				removeValue((xValue-2), yValue, 7);
				smart(index, 9, 8);
				smart(index, 8, 7);
				smart(index, 6, 5);
				smart(index, 5, 4);
				smart(index, 4, 3);
				smart(index, 3, 2);
				core.calculateScore(str, 7);
				view.displayMessage2("Last word spelt: " + str);
				return;
			}
		}
	//6's
		//Calculate score difference to figure out find to remove
		if(isALetter((index-2)) && isALetter((index-1)) && isALetter((index+1)) && isALetter((index+2)) &&
		isALetter((index+3))){
			str = makeString((xValue-2) ,yValue ,6);
			if(set.contains(6, str)){
				removeWord((index-2), 6);
				removeValue((xValue-2), yValue, 6);
				shouldReturn = 1;
				smart(index, 9, 8);
				smart(index, 8, 7);
				smart(index, 6, 5);
				smart(index, 5, 4);
				smart(index, 4, 3);
				core.calculateScore(str, 6);
				view.displayMessage2("Last word spelt: " + str);
			}
		}
		if(isALetter((index-1)) && isALetter((index+1)) && isALetter((index+2)) &&
		isALetter((index+3)) && isALetter((index+4))){
			str = makeString((xValue-1) ,yValue ,6);
			if(set.contains(6, str)){
				removeWord((index-1), 6);
				removeValue((xValue-1), yValue, 6);
				shouldReturn = 1;
				smart(index, 8, 7);
				smart(index, 6, 5);
				smart(index, 5, 4);
				smart(index, 4, 3);
				smart(index, 3, 2);
				core.calculateScore(str, 6);
				view.displayMessage2("Last word spelt: " + str);
			}
		}

		if(shouldReturn == 1){
			return;
		}
	//5's
		//once again calc score diff
		if(isALetter((index-2)) && isALetter((index-1)) && isALetter((index+1)) && isALetter((index+2))){
			str = makeString((xValue-2) ,yValue ,5);
			if(set.contains(5, str)){
				removeWord((index-2), 5);
				removeValue((xValue-2), yValue, 5);
				shouldReturn = 1;
				smart(index, 9, 8);
				smart(index, 8, 7);
				smart(index, 6, 5);
				smart(index, 5, 4);
				core.calculateScore(str, 5);
				view.displayMessage2("Last word spelt: " + str);
			}
		}

		if(isALetter((index-1)) && isALetter((index+1)) && isALetter((index+2)) &&
		isALetter((index+3))){
			str = makeString((xValue-1) ,yValue ,5);
			if(set.contains(5, str)){
				removeWord((index-1), 5);
				removeValue((xValue-1), yValue, 5);
				shouldReturn = 1;
				smart(index, 8, 7);
				smart(index, 6, 5);
				smart(index, 5, 4);
				smart(index, 4, 3);
				core.calculateScore(str, 5);
				view.displayMessage2("Last word spelt: " + str);
			}
		}
		if(isALetter((index+1)) && isALetter((index+2)) && isALetter((index+3)) &&
		isALetter((index+4))){
			str = makeString((xValue) ,yValue ,5);
			if(set.contains(5, str)){
				removeWord((index), 5);
				removeValue((xValue), yValue, 5);
				shouldReturn = 1;
				smart(index, 6, 5);
				smart(index, 5, 4);
				smart(index, 4, 3);
				smart(index, 3, 2);
				core.calculateScore(str, 5);
				view.displayMessage2("Last word spelt: " + str);
			}
		}
	//4's
		//see above 
		if(isALetter((index-2)) && isALetter((index-1)) && isALetter((index+1))){
			str = makeString((xValue-2) ,yValue ,4);
			if(set.contains(4, str)){
				removeWord((index-2), 4);
				removeValue((xValue-2), yValue, 4);
				shouldReturn = 1;
				smart(index, 9, 8);
				smart(index, 8, 7);
				smart(index, 6, 5);
				core.calculateScore(str, 4);
				view.displayMessage2("Last word spelt: " + str);
			}
		}
		if(isALetter((index-1)) && isALetter((index+1)) && isALetter((index+2))){
			str = makeString((xValue-1) ,yValue ,4);
			if(set.contains(4, str)){
				removeWord((index-1), 4);
				removeValue((xValue-1), yValue, 4);
				shouldReturn = 1;
				smart(index, 8, 7);
				smart(index, 6, 5);
				smart(index, 5, 4);
				core.calculateScore(str, 4);
				view.displayMessage2("Last word spelt: " + str);
			}
		}
		if(isALetter((index+1)) && isALetter((index+2)) && isALetter((index+3))){
			str = makeString((xValue) ,yValue ,4);
			if(set.contains(4, str)){
				removeWord((index), 4);
				removeValue((xValue), yValue, 4);
				shouldReturn = 1;
				smart(index, 6, 5);
				smart(index, 5, 4);
				smart(index, 4, 3);
				core.calculateScore(str, 4);
				view.displayMessage2("Last word spelt: " + str);
			}
		}

		if(shouldReturn == 1){
			return;
		}
	},


	column4WordCheck: function(index){
		index -= 7;
		var str;
		var yValue = getY(index);
		var xValue = getX(index);
		var shouldReturn = 0;    //boolean
	//7             
		if(isALetter((index-3)) && isALetter((index-2)) && isALetter((index-1)) && isALetter((index+1)) &&
		isALetter((index+2)) && isALetter((index+3))){
			str = makeString((xValue-3) ,yValue ,7);
			if(set.contains(7, str)){
				removeWord((index-3), 7);
				removeValue((xValue-3), yValue, 7);
				smart(index, 10, 9);
				smart(index, 9, 8);
				smart(index, 8, 7);
				smart(index, 6, 5);
				smart(index, 5, 4);
				smart(index, 4, 3);
				core.calculateScore(str, 7);
				view.displayMessage2("Last word spelt: " + str);
				return;
			}
		}
	//6's
		//Calculate score difference to figure out find to remove
		if(isALetter((index-3)) && isALetter((index-2)) && isALetter((index-1)) && isALetter((index+1)) &&
		isALetter((index+2))){
			str = makeString((xValue-3) ,yValue ,6);
			if(set.contains(6, str)){
				removeWord((index-3), 6);
				removeValue((xValue-3), yValue, 6);
				shouldReturn = 1;
				smart(index, 10, 9);
				smart(index, 9, 8);
				smart(index, 8, 7);
				smart(index, 6, 5);
				smart(index, 5, 4);
				core.calculateScore(str, 6);
				view.displayMessage2("Last word spelt: " + str);
			}
		}
		if(isALetter((index-2)) && isALetter((index-1)) && isALetter((index+1)) &&
		isALetter((index+2)) && isALetter((index+3))){
			str = makeString((xValue-2) ,yValue ,6);
			if(set.contains(6, str)){
				removeWord((index-2), 6);
				removeValue((xValue-2), yValue, 6);
				shouldReturn = 1;
				smart(index, 9, 8);
				smart(index, 8, 7);
				smart(index, 6, 5);
				smart(index, 5, 4);
				smart(index, 4, 3);
				core.calculateScore(str, 6);
				view.displayMessage2("Last word spelt: " + str);
			}
		}

		if(shouldReturn == 1){
			return;
		}
	//5's
		//once again calc score diff
		if(isALetter((index-3)) && isALetter((index-2)) && isALetter((index-1)) && isALetter((index+1))){
			str = makeString((xValue-3) ,yValue ,5);
			if(set.contains(5, str)){
				removeWord((index-3), 5);
				removeValue((xValue-3), yValue, 5);
				shouldReturn = 1;
				smart(index, 10, 9);
				smart(index, 9, 8);
				smart(index, 8, 7);
				smart(index, 6, 5);
				core.calculateScore(str, 5);
				view.displayMessage2("Last word spelt: " + str);
			}
		}

	if(isALetter((index-2)) && isALetter((index-1)) && isALetter((index+1)) &&
		isALetter((index+2))){
			str = makeString((xValue-2) ,yValue ,5);
			if(set.contains(5, str)){
				removeWord((index-2), 5);
				removeValue((xValue-2), yValue, 5);
				shouldReturn = 1;
				smart(index, 9, 8);
				smart(index, 8, 7);
				smart(index, 6, 5);
				smart(index, 5, 4);
				core.calculateScore(str, 5);
				view.displayMessage2("Last word spelt: " + str);
			}
		}
		if(isALetter((index-1)) && isALetter((index+1)) && isALetter((index+2)) &&
		isALetter((index+3))){
			str = makeString((xValue-1) ,yValue ,5);
			if(set.contains(5, str)){
				removeWord((index-1), 5);
				removeValue((xValue-1), yValue, 5);
				shouldReturn = 1;
				smart(index, 8, 7);
				smart(index, 6, 5);
				smart(index, 5, 4);
				smart(index, 4, 3);
				core.calculateScore(str, 5);
				view.displayMessage2("Last word spelt: " + str);
			}
		}
	//4's
		//see above 
		if(isALetter((index-3)) && isALetter((index-2)) && isALetter((index-1))){
			str = makeString((xValue-3) ,yValue ,4);
			if(set.contains(4, str)){
				removeWord((index-3), 4);
				removeValue((xValue-3), yValue, 4);
				shouldReturn = 1;
			        smart(index, 10, 9);
				smart(index, 9, 8);
				smart(index, 8, 7);
				core.calculateScore(str, 4);
				view.displayMessage2("Last word spelt: " + str);	
			}
		}
		if(isALetter((index-2)) && isALetter((index-1)) && isALetter((index+1))){
			str = makeString((xValue-2) ,yValue ,4);
			if(set.contains(4, str)){
				removeWord((index-2), 4);
				removeValue((xValue-2), yValue, 4);
				shouldReturn = 1;
				smart(index, 9, 8);
				smart(index, 8, 7);
				smart(index, 6, 5);
				core.calculateScore(str, 4);
				view.displayMessage2("Last word spelt: " + str);
			}
		}
		if(isALetter((index-1)) && isALetter((index+1)) && isALetter((index+2))){
			str = makeString((xValue-1) ,yValue ,4);
			if(set.contains(4, str)){
				removeWord((index-1), 4);
				removeValue((xValue-1), yValue, 4);
				shouldReturn = 1;
				smart(index, 8, 7);
				smart(index, 6, 5);
				smart(index, 5, 4);
				core.calculateScore(str, 4);
				view.displayMessage2("Last word spelt: " + str);
			}
		}
		if(isALetter((index+1)) && isALetter((index+2)) && isALetter((index+3))){
			str = makeString((xValue) ,yValue ,4);
			if(set.contains(4, str)){
				removeWord((index), 4);
				removeValue((xValue), yValue, 4);
				shouldReturn = 1;
				smart(index, 6, 5);
				smart(index, 5, 4);
				smart(index, 4, 3);
				core.calculateScore(str, 4);
				view.displayMessage2("Last word spelt: " + str);
			}
		}

		if(shouldReturn == 1){
			return;
		}
	},

	column5WordCheck: function(index){
		index -= 7;
		var str;
		var yValue = getY(index);
		var xValue = getX(index);
		var shouldReturn = 0;    //boolean
	//7             
		if(isALetter((index-4)) && isALetter((index-3)) && isALetter((index-2)) && isALetter((index-1)) &&
		isALetter((index+1)) && isALetter((index+2))){
			str = makeString((xValue-4) ,yValue ,7);
			if(set.contains(7, str)){
				removeWord((index-4), 7);
				removeValue((xValue-4), yValue, 7);
				smart(index, 11, 10);
				smart(index, 10, 9);
				smart(index, 9, 8);
				smart(index, 8, 7);
				smart(index, 6, 5);
				smart(index, 5, 4);
				core.calculateScore(str, 7);
				view.displayMessage2("Last word spelt: " + str);
				return;
			}
		}
	//6's
		//Calculate score difference to figure out find to remove
		if(isALetter((index-4)) && isALetter((index-3)) && isALetter((index-2)) && isALetter((index-1)) &&
		isALetter((index+1))){
			str = makeString((xValue-4) ,yValue ,6);
			if(set.contains(6, str)){
				removeWord((index-4), 6);
				removeValue((xValue-4), yValue, 6);
				shouldReturn = 1;
				smart(index, 11, 10);
				smart(index, 10, 9);
				smart(index, 9, 8);
				smart(index, 8, 7);
				smart(index, 6, 5);
				core.calculateScore(str, 6);
				view.displayMessage2("Last word spelt: " + str);
			}
		}
		if(isALetter((index-3)) && isALetter((index-2)) && isALetter((index-1)) &&
		isALetter((index+1)) && isALetter((index+2))){
			str = makeString((xValue-3) ,yValue ,6);
			if(set.contains(6, str)){
				removeWord((index-3), 6);
				removeValue((xValue-3), yValue, 6);
				shouldReturn = 1;
				smart(index, 10, 9);
				smart(index, 9, 8);
				smart(index, 8, 7);
				smart(index, 6, 5);
				smart(index, 5, 4);
				core.calculateScore(str, 6);
				view.displayMessage2("Last word spelt: " + str);	
			}
		}

		if(shouldReturn == 1){
			return;
		}
	//5's
		//once again calc score diff
		if(isALetter((index-4)) && isALetter((index-3)) && isALetter((index-2)) && isALetter((index-1))){
			str = makeString((xValue-4) ,yValue ,5);
			if(set.contains(5, str)){
				removeWord((index-4), 5);
				removeValue((xValue-4), yValue, 5);
				shouldReturn = 1;
				smart(index, 11, 10);
				smart(index, 10, 9);
				smart(index, 9, 8);
				smart(index, 8, 7);
				core.calculateScore(str, 5);
				view.displayMessage2("Last word spelt: " + str);
			}
		}
		if(isALetter((index-3)) && isALetter((index-2)) && isALetter((index-1)) &&
		isALetter((index+1))){
			str = makeString((xValue-3) ,yValue ,5);
			if(set.contains(5, str)){
				removeWord((index-3), 5);
				removeValue((xValue-3), yValue, 5);
				shouldReturn = 1;
				smart(index, 10, 9);
				smart(index, 9, 8);
				smart(index, 8, 7);
				smart(index, 6, 5);
				core.calculateScore(str, 5);
				view.displayMessage2("Last word spelt: " + str);
			}
		}
		if(isALetter((index-2)) && isALetter((index-1)) && isALetter((index+1)) &&
		isALetter((index+2))){
			str = makeString((xValue-2) ,yValue ,5);
			if(set.contains(5, str)){
				removeWord((index-2), 5);
				removeValue((xValue-2), yValue, 5);
				shouldReturn = 1;
				smart(index, 9, 8);
				smart(index, 8, 7);
				smart(index, 6, 5);
				smart(index, 5, 4);
				core.calculateScore(str, 5);
				view.displayMessage2("Last word spelt: " + str);
			}
		}
	//4's
		//see above 
		if(isALetter((index-3)) && isALetter((index-2)) && isALetter((index-1))){
			str = makeString((xValue-3) ,yValue ,4);
			if(set.contains(4, str)){
				removeWord((index-3), 4);
				removeValue((xValue-3), yValue, 4);
				shouldReturn = 1;
				smart(index, 10, 9);
				smart(index, 9, 8);
				smart(index, 8, 7);
				core.calculateScore(str, 4);
				view.displayMessage2("Last word spelt: " + str);
			}
		}
		if(isALetter((index-2)) && isALetter((index-1)) && isALetter((index+1))){
			str = makeString((xValue-2) ,yValue ,4);
			if(set.contains(4, str)){
				removeWord((index-2), 4);
				removeValue((xValue-2), yValue, 4);
				shouldReturn = 1;
				smart(index, 9, 8);
				smart(index, 8, 7);
				smart(index, 6, 5);
				core.calculateScore(str, 4);
				view.displayMessage2("Last word spelt: " + str);
			}
		}
		if(isALetter((index-1)) && isALetter((index+1)) && isALetter((index+2))){
			str = makeString((xValue-1) ,yValue ,4);
			if(set.contains(4, str)){
				removeWord((index-1), 4);
				removeValue((xValue-1), yValue, 4);
				shouldReturn = 1;
				smart(index, 8, 7);
				smart(index, 6, 5);
				smart(index, 5, 4);
				core.calculateScore(str, 4);
				view.displayMessage2("Last word spelt: " + str);
			}
		}

		if(shouldReturn == 1){
			return;
		}
	},

	column6WordCheck: function(index){
		index -= 7;
		var str;
		var yValue = getY(index);
		var xValue = getX(index);
		var shouldReturn = 0;    //boolean
	//7             
		if(isALetter((index-5)) && isALetter((index-4)) && isALetter((index-3)) && isALetter((index-2)) &&
		isALetter((index-1)) && isALetter((index+1))){
			str = makeString((xValue-5) ,yValue ,7);
			if(set.contains(7, str)){
				removeWord((index-5), 7);
				removeValue((xValue-5), yValue, 7);
				smart(index, 12, 11);
				smart(index, 11, 10);
				smart(index, 10, 9);
				smart(index, 9, 8);
				smart(index, 8, 7);
				smart(index, 6, 5);
				core.calculateScore(str, 7);
				view.displayMessage2("Last word spelt: " + str);
				return;
			}
		}
	//6's
		//Calculate score difference to figure out find to remove
		if(isALetter((index-5)) && isALetter((index-4)) && isALetter((index-3)) && isALetter((index-2)) &&
		isALetter((index-1))){
			str = makeString((xValue-5) ,yValue ,6);
			if(set.contains(6, str)){
				removeWord((index-5), 6);
				removeValue((xValue-5), yValue, 6);
				shouldReturn = 1;
				smart(index, 12, 11);
				smart(index, 11, 10);
				smart(index, 10, 9);
				smart(index, 9, 8);
				smart(index, 8, 7);
				core.calculateScore(str, 6);
				view.displayMessage2("Last word spelt: " + str);
			}
		}
		if(isALetter((index-4)) && isALetter((index-3)) && isALetter((index-2)) &&
		isALetter((index-1)) && isALetter((index+1))){
			str = makeString((xValue-4) ,yValue ,6);
			if(set.contains(6, str)){
				removeWord((index-4), 6);
				removeValue((xValue-4), yValue, 6);
				shouldReturn = 1;
				smart(index, 11, 10);
				smart(index, 10, 9);
				smart(index, 9, 8);
				smart(index, 8, 7);
				smart(index, 6, 5);
				core.calculateScore(str, 6);
				view.displayMessage2("Last word spelt: " + str);
			}
		}

		if(shouldReturn == 1){
			return;
		}
	//5's
		//once again calc score diff
		if(isALetter((index-4)) && isALetter((index-3)) && isALetter((index-2)) && isALetter((index-1))){
			str = makeString((xValue-4) ,yValue ,5);
			if(set.contains(5, str)){
				removeWord((index-4), 5);
				removeValue((xValue-4), yValue, 5);
				shouldReturn = 1;
				smart(index, 11, 10);
				smart(index, 10, 9);
				smart(index, 9, 8);
				smart(index, 8, 7);
				core.calculateScore(str, 5);
				view.displayMessage2("Last word spelt: " + str);
			}
		}
		if(isALetter((index-3)) && isALetter((index-2)) && isALetter((index-1)) &&
		isALetter((index+1))){
			str = makeString((xValue-3) ,yValue ,5);
			if(set.contains(5, str)){
				removeWord((index-3), 5);
				removeValue((xValue-3), yValue, 5);
				shouldReturn = 1;
				smart(index, 10, 9);
				smart(index, 9, 8);
				smart(index, 8, 7);
				smart(index, 6, 5);
				core.calculateScore(str, 5);
				view.displayMessage2("Last word spelt: " + str);
			}
		}
	//4's
		//see above 
		if(isALetter((index-3)) && isALetter((index-2)) && isALetter((index-1))){
			str = makeString((xValue-3) ,yValue ,4);
			if(set.contains(4, str)){
				removeWord((index-3), 4);
				removeValue((xValue-3), yValue, 4);
				shouldReturn = 1;
				smart(index, 10, 9);
				smart(index, 9, 8);
				smart(index, 8, 7);
				core.calculateScore(str, 4);
				view.displayMessage2("Last word spelt: " + str);
			}
		}
		if(isALetter((index-2)) && isALetter((index-1)) && isALetter((index+1))){
			str = makeString((xValue-2) ,yValue ,4);
			if(set.contains(4, str)){
				removeWord((index-2), 4);
				removeValue((xValue-2), yValue, 4);
				shouldReturn = 1;
				smart(index, 9, 8);
				smart(index, 8, 7);
				smart(index, 6, 5);
				core.calculateScore(str, 4);
				view.displayMessage2("Last word spelt: " + str);
			}
		}

		if(shouldReturn == 1){
			return;
		}
	},

	column7WordCheck: function(index){
		index -= 7;
		var str;
		var yValue = getY(index);
		var xValue = getX(index);
		var shouldReturn = 0;    //boolean
	//7             
		if(isALetter((index-6)) && isALetter((index-5)) && isALetter((index-4)) && isALetter((index-3)) &&
		isALetter((index-2)) && isALetter((index-1))){
			str = makeString((xValue-6) ,yValue ,7);
			if(set.contains(7, str)){
				removeWord((index-6), 7);
				removeValue((xValue-6), yValue, 7);
				smart(index, 13, 12);
				smart(index, 12, 11);
				smart(index, 11, 10);
				smart(index, 10, 9);
				smart(index, 9, 8);
				smart(index, 8, 7);
				core.calculateScore(str, 7);
				view.displayMessage2("Last word spelt: " + str);
				return;
			}
		}
	//6's
		//Calculate score difference to figure out find to remove
		if(isALetter((index-5)) && isALetter((index-4)) && isALetter((index-3)) && isALetter((index-2)) &&
		isALetter((index-1))){
			str = makeString((xValue-5) ,yValue ,6);
			if(set.contains(6, str)){
				removeWord((index-5), 6);
				removeValue((xValue-5), yValue, 6);
				smart(index, 12, 11);
				smart(index, 11, 10);
				smart(index, 10, 9);
				smart(index, 9, 8);
				smart(index, 8, 7);
				core.calculateScore(str, 6);
				view.displayMessage2("Last word spelt: " + str);
				return;
			}
		}
	//5's
		//once again calc score diff
		if(isALetter((index-4)) && isALetter((index-3)) && isALetter((index-2)) && isALetter((index-1))){
			str = makeString((xValue-4) ,yValue ,5);
			if(set.contains(5, str)){
				removeWord((index-4), 5);
				removeValue((xValue-4), yValue, 5);
				smart(index, 11, 10);
				smart(index, 10, 9);
				smart(index, 9, 8);
				smart(index, 8, 7);
				core.calculateScore(str, 5);
				view.displayMessage2("Last word spelt: " + str);
				return;
			}
		}
	//4's
		//see above 
		if(isALetter((index-3)) && isALetter((index-2)) && isALetter((index-1))){
			str = makeString((xValue-3) ,yValue ,4);
			if(set.contains(4, str)){
				removeWord((index-3), 4);
				removeValue((xValue-3), yValue, 4);
				smart(index, 10, 9);
				smart(index, 9, 8);
				smart(index, 8, 7);
				core.calculateScore(str, 4);
				view.displayMessage2("Last word spelt: " + str);
				return;
			}
		}
	}

};
