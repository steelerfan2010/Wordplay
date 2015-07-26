letterVal = {
	getValue: function(letter){
		if(letter == "Q" || letter == "Z"){
			return 10;
		}
		else if(letter == "J" || letter == "X"){
			return 8;
		}
		else if(letter == "K"){
			return 5;
		}
		else if(letter == "F" || letter == "H" || letter == "V" || letter == "W" || letter == "Y"){
			return 4;
		}
		else if(letter == "B" || letter == "C" || letter == "M" || letter == "P"){
			return 3;
		}
		else if(letter == "D" || letter == "G"){
			return 2;
		}
		else{
			return 1;
		}
	}
};
