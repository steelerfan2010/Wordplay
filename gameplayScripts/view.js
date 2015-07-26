view = {
        displayMessage: function(msg){
                var message = document.getElementById("message");
                message.innerHTML = msg;
        },

	displayMessage2: function(msg){
		var mes = document.getElementById("message2");
		mes.innerHTML = msg;
	},

	displayMessage3: function(msg){
		var mes = document.getElementById("message3");
		mes.innerHTML = msg;
	},
	
	displayMessage4: function(msg){
		var mes = document.getElementById("message4");
		mes.innerHTML = msg;
	},

        displayLetter: function(tableValue, randomNumber){
                var cell = document.getElementById(tableValue);
                if(randomNumber < 8168){
                        cell.setAttribute("class", "letterA");
                	letter = "A";
		}
                else if(randomNumber > 8167 && randomNumber < 9661 ){
                        cell.setAttribute("class", "letterB");
                	letter = "B";
		}
                else if(randomNumber > 9660 && randomNumber < 12443){
                        cell.setAttribute("class", "letterC");
                	letter = "C";
		}
                else if(randomNumber > 12442 && randomNumber < 16696){
                        cell.setAttribute("class", "letterD");
                	letter = "D";
		}
                else if(randomNumber > 16695 && randomNumber < 29398){
                        cell.setAttribute("class", "letterE");
               		letter = "E";
		 }
                else if(randomNumber > 29397 && randomNumber < 31626){
                        cell.setAttribute("class", "letterF");
               		letter = "F";
		 }
                else if(randomNumber > 31625 && randomNumber < 33641){
                        cell.setAttribute("class", "letterG");
                	letter = "G";
		}
                else if(randomNumber > 33640 && randomNumber < 39735){
                        cell.setAttribute("class", "letterH");
                	letter = "H";
		}
                else if(randomNumber > 39734 && randomNumber < 46701){
                        cell.setAttribute("class", "letterI");
                	letter = "I";
		}
                else if(randomNumber > 46700 && randomNumber < 46854){
                        cell.setAttribute("class", "letterJ");
                	letter = "J";
		}
                else if(randomNumber > 46853 && randomNumber < 47626){
                        cell.setAttribute("class", "letterK");
                	letter = "K";
		}
                else if(randomNumber > 47625 && randomNumber < 51651){
                        cell.setAttribute("class", "letterL");
                	letter = "L";
		}
		else if(randomNumber > 51650 && randomNumber < 54057){
                        cell.setAttribute("class", "letterM");
                	letter = "M";
		}
                else if(randomNumber > 54056 && randomNumber < 60806){
                        cell.setAttribute("class", "letterN");
                	letter = "N";
		}
                else if(randomNumber > 60805 && randomNumber < 68313){
                        cell.setAttribute("class", "letterO");
                	letter = "O";
		}
                else if(randomNumber > 68312 && randomNumber < 70242){
                        cell.setAttribute("class", "letterP");
                	letter = "P";
		}
                else if(randomNumber > 70241 && randomNumber < 70337){
                        cell.setAttribute("class", "letterQ");
                	letter = "Q";
		}
                else if(randomNumber > 70336 && randomNumber < 76324){
                        cell.setAttribute("class", "letterR");
                	letter = "R";
		}
                else if(randomNumber > 76323 && randomNumber < 82651){
                        cell.setAttribute("class", "letterS");
                	letter = "S";
		}
                else if(randomNumber > 82650 && randomNumber < 91707){
                        cell.setAttribute("class", "letterT");
                	letter = "T";
		}
                else if(randomNumber > 91706 && randomNumber < 94465){
                        cell.setAttribute("class", "letterU");
                	letter = "U";
		}
                else if(randomNumber > 94464 && randomNumber < 95443){
                        cell.setAttribute("class", "letterV");
                	letter = "V";
		}
                else if(randomNumber > 95442 && randomNumber < 97803){
                        cell.setAttribute("class", "letterW");
                	letter = "W";
		}
                else if(randomNumber > 97802 && randomNumber < 97953){
                        cell.setAttribute("class", "letterX");
                	letter = "X";
		}
                else if(randomNumber > 97952 && randomNumber < 99927){
                        cell.setAttribute("class", "letterY");
                	letter = "Y";
		}
                else if(randomNumber > 99926 && randomNumber < 100001 ){
                        cell.setAttribute("class", "letterZ");
                	letter = "Z";
		}
                else{
                        //after testing can change to E (to mask any problems)
                        alert("Leak in the random numbers");
                }
        },

	getNumber: function(letter){
		if(letter == "A"){
			return 10;
		}
		else if(letter == "B"){
			return 9000;
		}
		else if(letter == "C"){
			return 10000;
		}
		else if(letter == "D"){
			return 13000;
		}
		else if(letter == "E"){
			return 20000;
		}
		else if(letter == "F"){
			return 30000;
		}
		else if(letter == "G"){
			return 32000;
		}
		else if(letter == "H"){
			return 35000;
		}
		else if(letter == "I"){
			return 40000;
		}
		else if(letter == "J"){
			return 46750;
		}
		else if(letter == "K"){
			return 47000;
		}
		else if(letter == "L"){
			return 50000;
		}
		else if(letter == "M"){
			return 52000;
		}
		else if(letter == "N"){
			return 55000;
		}
		else if(letter == "O"){
			return 65000;
		}
		else if(letter == "P"){
			return 70000;
		}
		else if(letter == "Q"){
			return 70250;
		}
		else if(letter == "R"){
			return 72000;
		}
		else if(letter == "S"){
			return 80000;
		}
		else if(letter == "T"){
			return 85000;
		}
		else if(letter == "U"){
			return 92000;
		}
		else if(letter == "V"){
			return 95000;
		}
		else if(letter == "W"){
			return 96000;
		}
		else if(letter == "X"){
			return 97900;
		}
		else if(letter == "Y"){
			return 98000
		}
		else{	//letter == "Z"
			return 99999;
		}
	},

	getLetter: function(randomNumber2){
                if(randomNumber2 < 8168){
                	return "A";
		}
                else if(randomNumber2 > 8167 && randomNumber2 < 9661 ){
                	return "B";
		}
                else if(randomNumber2 > 9660 && randomNumber2 < 12443){
                	return "C";
		}
                else if(randomNumber2 > 12442 && randomNumber2 < 16696){
                	return "D";
		}
                else if(randomNumber2 > 16695 && randomNumber2 < 29398){
               		return "E";
		 }
                else if(randomNumber2 > 29397 && randomNumber2 < 31626){
               		return "F";
		 }
                else if(randomNumber2 > 31625 && randomNumber2 < 33641){
                	return "G";
		}
                else if(randomNumber2 > 33640 && randomNumber2 < 39735){
                	return "H";
		}
                else if(randomNumber2 > 39734 && randomNumber2 < 46701){
                	return "I";
		}
                else if(randomNumber2 > 46700 && randomNumber2 < 46854){
                	return "J";
		}
                else if(randomNumber2 > 46853 && randomNumber2 < 47626){
                	return "K";
		}
                else if(randomNumber2 > 47625 && randomNumber2 < 51651){
                	return "L";
		}
		else if(randomNumber2 > 51650 && randomNumber2 < 54057){
                	return "M";
		}
                else if(randomNumber2 > 54056 && randomNumber2 < 60806){
                	return "N";
		}
                else if(randomNumber2 > 60805 && randomNumber2 < 68313){
                	return "O";
		}
                else if(randomNumber2 > 68312 && randomNumber2 < 70242){
                	return "P";
		}
                else if(randomNumber2 > 70241 && randomNumber2 < 70337){
                	return "Q";
		}
                else if(randomNumber2 > 70336 && randomNumber2 < 76324){
                	return "R";
		}
                else if(randomNumber2 > 76323 && randomNumber2 < 82651){
                	return "S";
		}
                else if(randomNumber2 > 82650 && randomNumber2 < 91707){
                	return "T";
		}
                else if(randomNumber2 > 91706 && randomNumber2 < 94465){
                	return "U";
		}
                else if(randomNumber2 > 94464 && randomNumber2 < 95443){
                	return "V";
		}
                else if(randomNumber2 > 95442 && randomNumber2 < 97803){
                	return "W";
		}
                else if(randomNumber2 > 97802 && randomNumber2 < 97953){
                	return "X";
		}
                else if(randomNumber2 > 97952 && randomNumber2 < 99927){
                	return "Y";
		}
                else if(randomNumber2 > 99926 && randomNumber2 < 100001 ){
                	return "Z";
		}
                else{
                	return "E";
		}
        },

	

        removeLetter: function(tableValue){
                document.getElementById(tableValue).removeAttribute("class");
        }

};

