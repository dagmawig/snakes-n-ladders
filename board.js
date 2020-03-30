const val =["pics/Alea_0.png", "pics/Alea_1.png", "pics/Alea_2.png", "pics/Alea_3.png", "pics/Alea_4.png", "pics/Alea_5.png", "pics/Alea_6.png"];

var elem = document.createElement("img");
elem.src = "pics/smiley.png";
elem.alt = "image of location";
elem.title = "smiley";
elem.id = "emoji";

var position = 0;

//document.getElementById(position.toString()).appendChild(elem);

var pending = false;

document.getElementById("message1").innerHTML = "ROLL A DIE!";
document.getElementById("message2").innerHTML = "...OR TWO DICE!!";

function roll() {
	console.log(pending);
	
		
	document.getElementById("rolldice").disabled = true; 
	document.getElementById("roll2dice").disabled = true;
	var a = Math.floor(Math.random()*6+1)
	document.getElementById("dice1").src = val[a];
	document.getElementById("message1").innerHTML = "YOU ROLLED  " + a +"!";
	document.getElementById("message2").innerHTML = "YOU MOVE  " + a +" PLACE(S)!";
	position += a;
	var move = position % 100;
	
	setTimeout(function(){  
	if (position == 16 || position == 47 || position == 49 || position == 56 || position == 62 || position == 64 || position == 87 || position == 93 || position == 95 || position == 98 || position == 1 || position == 4 || position == 9 || position == 21 || position == 28 || position == 36 || position == 51 || position == 71 || position == 80 || position > 100){ 
		document.getElementById("message1").innerHTML = "WAIT!";
		document.getElementById("message1").style.color = "red"; 
		document.getElementById("message2").style.color = "red"; 
			if (position == 16){document.getElementById("message2").innerHTML = "WOOPS! YOU LANDED ON SNAKE'S HEAD!  " + "YOU ARE GOING BACK DOWN TO 6!"; position = 6; setTimeout(function(){document.getElementById(position.toString()).appendChild(elem); document.getElementById("message1").style.color = "black"; document.getElementById("message2").style.color = "black"; document.getElementById("message1").innerHTML = "TRY YOUR LUCK!"; document.getElementById("message2").innerHTML = "ROLL AGAIN!"; document.getElementById("rolldice").disabled = false; document.getElementById("roll2dice").disabled = false;}, 5000); 
	}
			else if (position == 47){document.getElementById("message2").innerHTML = "WOOPS! YOU LANDED ON SNAKE'S HEAD!  " + "YOU ARE GOING BACK DOWN TO 26!"; position = 26; setTimeout(function(){document.getElementById(position.toString()).appendChild(elem); document.getElementById("message1").style.color = "black"; document.getElementById("message2").style.color = "black"; document.getElementById("message1").innerHTML = "TRY YOUR LUCK!"; document.getElementById("message2").innerHTML = "ROLL AGAIN!"; document.getElementById("rolldice").disabled = false; document.getElementById("roll2dice").disabled = false;}, 5000); 
	}
			else if (position == 49){document.getElementById("message2").innerHTML = "WOOPS! YOU LANDED ON SNAKE'S HEAD!  " + "YOU ARE GOING BACK DOWN TO 11!"; position = 11; setTimeout(function(){document.getElementById(position.toString()).appendChild(elem); document.getElementById("message1").style.color = "black"; document.getElementById("message2").style.color = "black"; document.getElementById("message1").innerHTML = "TRY YOUR LUCK!"; document.getElementById("message2").innerHTML = "ROLL AGAIN!"; document.getElementById("rolldice").disabled = false; document.getElementById("roll2dice").disabled = false;}, 5000); 
	}
			else if (position == 56){document.getElementById("message2").innerHTML = "WOOPS! YOU LANDED ON SNAKE'S HEAD!  " + "YOU ARE GOING BACK DOWN TO 53!"; position = 53; setTimeout(function(){document.getElementById(position.toString()).appendChild(elem); document.getElementById("message1").style.color = "black"; document.getElementById("message2").style.color = "black"; document.getElementById("message1").innerHTML = "TRY YOUR LUCK!"; document.getElementById("message2").innerHTML = "ROLL AGAIN!"; document.getElementById("rolldice").disabled = false; document.getElementById("roll2dice").disabled = false;}, 5000); 
	}
			else if (position == 62){document.getElementById("message2").innerHTML = "WOOPS! YOU LANDED ON SNAKE'S HEAD!  " + "YOU ARE GOING BACK DOWN TO 19!"; position = 19; setTimeout(function(){document.getElementById(position.toString()).appendChild(elem); document.getElementById("message1").style.color = "black"; document.getElementById("message2").style.color = "black"; document.getElementById("message1").innerHTML = "TRY YOUR LUCK!"; document.getElementById("message2").innerHTML = "ROLL AGAIN!"; document.getElementById("rolldice").disabled = false; document.getElementById("roll2dice").disabled = false;}, 5000); 
	}
			else if (position == 64){document.getElementById("message2").innerHTML = "WOOPS! YOU LANDED ON SNAKE'S HEAD!  " + "YOU ARE GOING BACK DOWN TO 60!"; position = 60; setTimeout(function(){document.getElementById(position.toString()).appendChild(elem); document.getElementById("message1").style.color = "black"; document.getElementById("message2").style.color = "black"; document.getElementById("message1").innerHTML = "TRY YOUR LUCK!"; document.getElementById("message2").innerHTML = "ROLL AGAIN!"; document.getElementById("rolldice").disabled = false; document.getElementById("roll2dice").disabled = false;}, 5000); 
	}
			else if (position == 87){document.getElementById("message2").innerHTML = "WOOPS! YOU LANDED ON SNAKE'S HEAD!  " + "YOU ARE GOING BACK DOWN TO 24!"; position = 24; setTimeout(function(){document.getElementById(position.toString()).appendChild(elem); document.getElementById("message1").style.color = "black"; document.getElementById("message2").style.color = "black"; document.getElementById("message1").innerHTML = "TRY YOUR LUCK!"; document.getElementById("message2").innerHTML = "ROLL AGAIN!"; document.getElementById("rolldice").disabled = false; document.getElementById("roll2dice").disabled = false;}, 5000); 
	}
			else if (position == 93){document.getElementById("message2").innerHTML = "WOOPS! YOU LANDED ON SNAKE'S HEAD!  " + "YOU ARE GOING BACK DOWN TO 73!"; position = 73; setTimeout(function(){document.getElementById(position.toString()).appendChild(elem); document.getElementById("message1").style.color = "black"; document.getElementById("message2").style.color = "black"; document.getElementById("message1").innerHTML = "TRY YOUR LUCK!"; document.getElementById("message2").innerHTML = "ROLL AGAIN!"; document.getElementById("rolldice").disabled = false; document.getElementById("roll2dice").disabled = false;}, 5000); 
	}
			else if (position == 95){document.getElementById("message2").innerHTML = "WOOPS! YOU LANDED ON SNAKE'S HEAD!  " + "YOU ARE GOING BACK DOWN TO 75!"; position = 75; setTimeout(function(){document.getElementById(position.toString()).appendChild(elem); document.getElementById("message1").style.color = "black"; document.getElementById("message2").style.color = "black"; document.getElementById("message1").innerHTML = "TRY YOUR LUCK!"; document.getElementById("message2").innerHTML = "ROLL AGAIN!"; document.getElementById("rolldice").disabled = false; document.getElementById("roll2dice").disabled = false;}, 5000); 
	}
			else if (position == 98){document.getElementById("message2").innerHTML = "WOOPS! YOU LANDED ON SNAKE'S HEAD!  " + "YOU ARE GOING BACK DOWN TO 78!"; position = 78; setTimeout(function(){document.getElementById(position.toString()).appendChild(elem); document.getElementById("message1").style.color = "black"; document.getElementById("message2").style.color = "black"; document.getElementById("message1").innerHTML = "TRY YOUR LUCK!"; document.getElementById("message2").innerHTML = "ROLL AGAIN!"; document.getElementById("rolldice").disabled = false; document.getElementById("roll2dice").disabled = false;}, 5000); 
	}
			else if (position == 1){document.getElementById("message2").innerHTML = "NICE!! YOU LANDED AT THE BOTTOM OF A LADDER!  " + "YOU ARE MOVING UP TO 38!"; position = 38; setTimeout(function(){document.getElementById(position.toString()).appendChild(elem); document.getElementById("message1").style.color = "black"; document.getElementById("message2").style.color = "black"; document.getElementById("message1").innerHTML = "LET'S KEEP GOING!"; document.getElementById("message2").innerHTML = "ROLL AGAIN!"; document.getElementById("rolldice").disabled = false; document.getElementById("roll2dice").disabled = false;}, 5000); 
	}
			else if (position == 4){document.getElementById("message2").innerHTML = "NICE!! YOU LANDED AT THE BOTTOM OF A LADDER!  " + "YOU ARE MOVING UP TO 14!"; position = 14; setTimeout(function(){document.getElementById(position.toString()).appendChild(elem); document.getElementById("message1").style.color = "black"; document.getElementById("message2").style.color = "black"; document.getElementById("message1").innerHTML = "LET'S KEEP GOING!"; document.getElementById("message2").innerHTML = "ROLL AGAIN!"; document.getElementById("rolldice").disabled = false; document.getElementById("roll2dice").disabled = false;}, 5000); 
	}
			else if (position == 9){document.getElementById("message2").innerHTML = "NICE!! YOU LANDED AT THE BOTTOM OF A LADDER!  " + "YOU ARE MOVING UP TO 31!"; position = 31; setTimeout(function(){document.getElementById(position.toString()).appendChild(elem); document.getElementById("message1").style.color = "black"; document.getElementById("message2").style.color = "black"; document.getElementById("message1").innerHTML = "LET'S KEEP GOING!"; document.getElementById("message2").innerHTML = "ROLL AGAIN!"; document.getElementById("rolldice").disabled = false; document.getElementById("roll2dice").disabled = false;}, 5000); 
	}
			else if (position == 21){document.getElementById("message2").innerHTML = "NICE!! YOU LANDED AT THE BOTTOM OF A LADDER!  " + "YOU ARE MOVING UP TO 42!"; position = 42; setTimeout(function(){document.getElementById(position.toString()).appendChild(elem); document.getElementById("message1").style.color = "black"; document.getElementById("message2").style.color = "black"; document.getElementById("message1").innerHTML = "LET'S KEEP GOING!"; document.getElementById("message2").innerHTML = "ROLL AGAIN!"; document.getElementById("rolldice").disabled = false; document.getElementById("roll2dice").disabled = false;}, 5000); 
	}
			else if (position == 28){document.getElementById("message2").innerHTML = "NICE!! YOU LANDED AT THE BOTTOM OF A LADDER!  " + "YOU ARE MOVING UP TO 84!"; position = 84; setTimeout(function(){document.getElementById(position.toString()).appendChild(elem); document.getElementById("message1").style.color = "black"; document.getElementById("message2").style.color = "black"; document.getElementById("message1").innerHTML = "LET'S KEEP GOING!"; document.getElementById("message2").innerHTML = "ROLL AGAIN!"; document.getElementById("rolldice").disabled = false; document.getElementById("roll2dice").disabled = false;}, 5000); 
	}
			else if (position == 36){document.getElementById("message2").innerHTML = "NICE!! YOU LANDED AT THE BOTTOM OF A LADDER!  " + "YOU ARE MOVING UP TO 44!"; position = 44; setTimeout(function(){document.getElementById(position.toString()).appendChild(elem); document.getElementById("message1").style.color = "black"; document.getElementById("message2").style.color = "black"; document.getElementById("message1").innerHTML = "LET'S KEEP GOING!"; document.getElementById("message2").innerHTML = "ROLL AGAIN!"; document.getElementById("rolldice").disabled = false; document.getElementById("roll2dice").disabled = false;}, 5000); 
	}
			else if (position == 51){document.getElementById("message2").innerHTML = "NICE!! YOU LANDED AT THE BOTTOM OF A LADDER!  " + "YOU ARE MOVING UP TO 67!"; position = 67; setTimeout(function(){document.getElementById(position.toString()).appendChild(elem); document.getElementById("message1").style.color = "black"; document.getElementById("message2").style.color = "black"; document.getElementById("message1").innerHTML = "LET'S KEEP GOING!"; document.getElementById("message2").innerHTML = "ROLL AGAIN!"; document.getElementById("rolldice").disabled = false; document.getElementById("roll2dice").disabled = false;}, 5000); 
	}
			else if (position == 71){document.getElementById("message2").innerHTML = "NICE!! YOU LANDED AT THE BOTTOM OF A LADDER!  " + "YOU ARE MOVING UP TO 91!"; position = 91; setTimeout(function(){document.getElementById(position.toString()).appendChild(elem); document.getElementById("message1").style.color = "black"; document.getElementById("message2").style.color = "black"; document.getElementById("message1").innerHTML = "LET'S KEEP GOING!"; document.getElementById("message2").innerHTML = "ROLL AGAIN!"; document.getElementById("rolldice").disabled = false; document.getElementById("roll2dice").disabled = false;}, 5000); 
	}
			else if (position == 80){document.getElementById(move.toString()).appendChild(elem); document.getElementById("message2").innerHTML = "NICE!! YOU LANDED AT THE BOTTOM OF A LADDER!  " + "YOU ARE MOVING UP TO 100!"; position = 100; setTimeout(function(){document.getElementById(position.toString()).appendChild(elem); document.getElementById("message1").style.color = "blue"; document.getElementById("message2").style.color = "blue"; document.getElementById("message1").innerHTML = "   YOU JUST HIT 100!!!    YOU ARE A CHAMP!!!"; document.getElementById("message2").innerHTML = "TO PLAY AGAIN, REFRESH PAGE!!"; }, 2000); 
	}
			else if (position > 100){ position = position % 100; document.getElementById("message2").innerHTML = "WOOPS! YOU WENT PAST 100!  " + "YOU ARE GOING BACK DOWN TO " + position + "!";  setTimeout(function(){document.getElementById(position.toString()).appendChild(elem); document.getElementById("message1").style.color = "black"; document.getElementById("message2").style.color = "black"; document.getElementById("message1").innerHTML = "TRY YOUR LUCK!"; document.getElementById("message2").innerHTML = "ROLL AGAIN!"; document.getElementById("rolldice").disabled = false; document.getElementById("roll2dice").disabled = false;}, 5000); 
	}	
	
	}
	else {document.getElementById(move.toString()).appendChild(elem); if (move != 100) {document.getElementById("message1").style.color = "black"; document.getElementById("message2").style.color = "black"; document.getElementById("message1").innerHTML = "LET'S KEEP GOING!"; document.getElementById("message2").innerHTML = "ROLL AGAIN!"; document.getElementById("rolldice").disabled = false; document.getElementById("roll2dice").disabled = false;} else {document.getElementById("message1").style.color = "blue"; document.getElementById("message2").style.color = "blue"; document.getElementById("message1").innerHTML = "YOU JUST HIT 100!!!! YOU ARE A CHAMP!!!"; document.getElementById("message2").innerHTML = "TO PLAY AGAIN, REFRESH PAGE!!";}  }
	
	}, 2000);
	
	return a;
	
	
	//console.log(document.getElementById("message1").innerHTML);
}

function roll2() {
	document.getElementById("rolldice").disabled = true;
	document.getElementById("roll2dice").disabled = true;
	var b = Math.floor(Math.random()*6+1)
	document.getElementById("dice2").src = val[b];
	var c = Math.floor(Math.random()*6+1)
	document.getElementById("dice3").src = val[c];
	var sum = b + c;
	document.getElementById("message1").innerHTML = "YOU ROLLED  " + b +  " & " + c+ "!";
	document.getElementById("message2").innerHTML = "YOU MOVE  " + sum +" PLACE(S)!";
	position += sum;
	var move = position %100;
	
	setTimeout(function(){  
	if (position == 16 || position == 47 || position == 49 || position == 56 || position == 62 || position == 64 || position == 87 || position == 93 || position == 95 || position == 98 || position == 1 || position == 4 || position == 9 || position == 21 || position == 28 || position == 36 || position == 51 || position == 71 || position == 80 || position > 100){ 
		document.getElementById("message1").innerHTML = "WAIT!";
		document.getElementById("message1").style.color = "red"; 
		document.getElementById("message2").style.color = "red"; 
			if (position == 16){document.getElementById(move.toString()).appendChild(elem); document.getElementById("message2").innerHTML = "WOOPS! YOU LANDED ON SNAKE'S HEAD!  " + "YOU ARE GOING BACK DOWN TO 6!"; position = 6; setTimeout(function(){document.getElementById(position.toString()).appendChild(elem); document.getElementById("message1").style.color = "black"; document.getElementById("message2").style.color = "black"; document.getElementById("message1").innerHTML = "TRY YOUR LUCK!"; document.getElementById("message2").innerHTML = "ROLL AGAIN!"; document.getElementById("rolldice").disabled = false; document.getElementById("roll2dice").disabled = false;}, 5000); 
	}
			else if (position == 47){document.getElementById(move.toString()).appendChild(elem); document.getElementById("message2").innerHTML = "WOOPS! YOU LANDED ON SNAKE'S HEAD!  " + "YOU ARE GOING BACK DOWN TO 26!"; position = 26; setTimeout(function(){document.getElementById(position.toString()).appendChild(elem); document.getElementById("message1").style.color = "black"; document.getElementById("message2").style.color = "black"; document.getElementById("message1").innerHTML = "TRY YOUR LUCK!"; document.getElementById("message2").innerHTML = "ROLL AGAIN!"; document.getElementById("rolldice").disabled = false; document.getElementById("roll2dice").disabled = false;}, 5000); 
	}
			else if (position == 49){document.getElementById(move.toString()).appendChild(elem); document.getElementById("message2").innerHTML = "WOOPS! YOU LANDED ON SNAKE'S HEAD!  " + "YOU ARE GOING BACK DOWN TO 11!"; position = 11; setTimeout(function(){document.getElementById(position.toString()).appendChild(elem); document.getElementById("message1").style.color = "black"; document.getElementById("message2").style.color = "black"; document.getElementById("message1").innerHTML = "TRY YOUR LUCK!"; document.getElementById("message2").innerHTML = "ROLL AGAIN!"; document.getElementById("rolldice").disabled = false; document.getElementById("roll2dice").disabled = false;}, 5000); 
	}
			else if (position == 56){document.getElementById(move.toString()).appendChild(elem); document.getElementById("message2").innerHTML = "WOOPS! YOU LANDED ON SNAKE'S HEAD!  " + "YOU ARE GOING BACK DOWN TO 53!"; position = 53; setTimeout(function(){document.getElementById(position.toString()).appendChild(elem); document.getElementById("message1").style.color = "black"; document.getElementById("message2").style.color = "black"; document.getElementById("message1").innerHTML = "TRY YOUR LUCK!"; document.getElementById("message2").innerHTML = "ROLL AGAIN!"; document.getElementById("rolldice").disabled = false; document.getElementById("roll2dice").disabled = false;}, 5000); 
	}
			else if (position == 62){document.getElementById(move.toString()).appendChild(elem); document.getElementById("message2").innerHTML = "WOOPS! YOU LANDED ON SNAKE'S HEAD!  " + "YOU ARE GOING BACK DOWN TO 19!"; position = 19; setTimeout(function(){document.getElementById(position.toString()).appendChild(elem); document.getElementById("message1").style.color = "black"; document.getElementById("message2").style.color = "black"; document.getElementById("message1").innerHTML = "TRY YOUR LUCK!"; document.getElementById("message2").innerHTML = "ROLL AGAIN!"; document.getElementById("rolldice").disabled = false; document.getElementById("roll2dice").disabled = false;}, 5000); 
	}
			else if (position == 64){document.getElementById(move.toString()).appendChild(elem); document.getElementById("message2").innerHTML = "WOOPS! YOU LANDED ON SNAKE'S HEAD!  " + "YOU ARE GOING BACK DOWN TO 60!"; position = 60; setTimeout(function(){document.getElementById(position.toString()).appendChild(elem); document.getElementById("message1").style.color = "black"; document.getElementById("message2").style.color = "black"; document.getElementById("message1").innerHTML = "TRY YOUR LUCK!"; document.getElementById("message2").innerHTML = "ROLL AGAIN!"; document.getElementById("rolldice").disabled = false; document.getElementById("roll2dice").disabled = false;}, 5000); 
	}
			else if (position == 87){document.getElementById(move.toString()).appendChild(elem); document.getElementById("message2").innerHTML = "WOOPS! YOU LANDED ON SNAKE'S HEAD!  " + "YOU ARE GOING BACK DOWN TO 24!"; position = 24; setTimeout(function(){document.getElementById(position.toString()).appendChild(elem); document.getElementById("message1").style.color = "black"; document.getElementById("message2").style.color = "black"; document.getElementById("message1").innerHTML = "TRY YOUR LUCK!"; document.getElementById("message2").innerHTML = "ROLL AGAIN!"; document.getElementById("rolldice").disabled = false; document.getElementById("roll2dice").disabled = false;}, 5000); 
	}
			else if (position == 93){document.getElementById(move.toString()).appendChild(elem); document.getElementById("message2").innerHTML = "WOOPS! YOU LANDED ON SNAKE'S HEAD!  " + "YOU ARE GOING BACK DOWN TO 73!"; position = 73; setTimeout(function(){document.getElementById(position.toString()).appendChild(elem); document.getElementById("message1").style.color = "black"; document.getElementById("message2").style.color = "black"; document.getElementById("message1").innerHTML = "TRY YOUR LUCK!"; document.getElementById("message2").innerHTML = "ROLL AGAIN!"; document.getElementById("rolldice").disabled = false; document.getElementById("roll2dice").disabled = false;}, 5000); 
	}
			else if (position == 95){document.getElementById(move.toString()).appendChild(elem); document.getElementById("message2").innerHTML = "WOOPS! YOU LANDED ON SNAKE'S HEAD!  " + "YOU ARE GOING BACK DOWN TO 75!"; position = 75; setTimeout(function(){document.getElementById(position.toString()).appendChild(elem); document.getElementById("message1").style.color = "black"; document.getElementById("message2").style.color = "black"; document.getElementById("message1").innerHTML = "TRY YOUR LUCK!"; document.getElementById("message2").innerHTML = "ROLL AGAIN!"; document.getElementById("rolldice").disabled = false; document.getElementById("roll2dice").disabled = false;}, 5000); 
	}
			else if (position == 98){document.getElementById(move.toString()).appendChild(elem); document.getElementById("message2").innerHTML = "WOOPS! YOU LANDED ON SNAKE'S HEAD!  " + "YOU ARE GOING BACK DOWN TO 78!"; position = 78; setTimeout(function(){document.getElementById(position.toString()).appendChild(elem); document.getElementById("message1").style.color = "black"; document.getElementById("message2").style.color = "black"; document.getElementById("message1").innerHTML = "TRY YOUR LUCK!"; document.getElementById("message2").innerHTML = "ROLL AGAIN!"; document.getElementById("rolldice").disabled = false; document.getElementById("roll2dice").disabled = false;}, 5000); 
	}
			else if (position == 1){document.getElementById(move.toString()).appendChild(elem); document.getElementById("message2").innerHTML = "NICE!! YOU LANDED AT THE BOTTOM OF A LADDER!  " + "YOU ARE MOVING UP TO 38!"; position = 38; setTimeout(function(){document.getElementById(position.toString()).appendChild(elem); document.getElementById("message1").style.color = "black"; document.getElementById("message2").style.color = "black"; document.getElementById("message1").innerHTML = "LET'S KEEP GOING!"; document.getElementById("message2").innerHTML = "ROLL AGAIN!"; document.getElementById("rolldice").disabled = false; document.getElementById("roll2dice").disabled = false;}, 5000); 
	}
			else if (position == 4){document.getElementById(move.toString()).appendChild(elem); document.getElementById("message2").innerHTML = "NICE!! YOU LANDED AT THE BOTTOM OF A LADDER!  " + "YOU ARE MOVING UP TO 14!"; position = 14; setTimeout(function(){document.getElementById(position.toString()).appendChild(elem); document.getElementById("message1").style.color = "black"; document.getElementById("message2").style.color = "black"; document.getElementById("message1").innerHTML = "LET'S KEEP GOING!"; document.getElementById("message2").innerHTML = "ROLL AGAIN!"; document.getElementById("rolldice").disabled = false; document.getElementById("roll2dice").disabled = false;}, 5000); 
	}
			else if (position == 9){document.getElementById(move.toString()).appendChild(elem); document.getElementById("message2").innerHTML = "NICE!! YOU LANDED AT THE BOTTOM OF A LADDER!  " + "YOU ARE MOVING UP TO 31!"; position = 31; setTimeout(function(){document.getElementById(position.toString()).appendChild(elem); document.getElementById("message1").style.color = "black"; document.getElementById("message2").style.color = "black"; document.getElementById("message1").innerHTML = "LET'S KEEP GOING!"; document.getElementById("message2").innerHTML = "ROLL AGAIN!"; document.getElementById("rolldice").disabled = false; document.getElementById("roll2dice").disabled = false;}, 5000); 
	}
			else if (position == 21){document.getElementById(move.toString()).appendChild(elem); document.getElementById("message2").innerHTML = "NICE!! YOU LANDED AT THE BOTTOM OF A LADDER!  " + "YOU ARE MOVING UP TO 42!"; position = 42; setTimeout(function(){document.getElementById(position.toString()).appendChild(elem); document.getElementById("message1").style.color = "black"; document.getElementById("message2").style.color = "black"; document.getElementById("message1").innerHTML = "LET'S KEEP GOING!"; document.getElementById("message2").innerHTML = "ROLL AGAIN!"; document.getElementById("rolldice").disabled = false; document.getElementById("roll2dice").disabled = false;}, 5000); 
	}
			else if (position == 28){document.getElementById(move.toString()).appendChild(elem); document.getElementById("message2").innerHTML = "NICE!! YOU LANDED AT THE BOTTOM OF A LADDER!  " + "YOU ARE MOVING UP TO 84!"; position = 84; setTimeout(function(){document.getElementById(position.toString()).appendChild(elem); document.getElementById("message1").style.color = "black"; document.getElementById("message2").style.color = "black"; document.getElementById("message1").innerHTML = "LET'S KEEP GOING!"; document.getElementById("message2").innerHTML = "ROLL AGAIN!"; document.getElementById("rolldice").disabled = false; document.getElementById("roll2dice").disabled = false;}, 5000); 
	}
			else if (position == 36){document.getElementById(move.toString()).appendChild(elem); document.getElementById("message2").innerHTML = "NICE!! YOU LANDED AT THE BOTTOM OF A LADDER!  " + "YOU ARE MOVING UP TO 44!"; position = 44; setTimeout(function(){document.getElementById(position.toString()).appendChild(elem); document.getElementById("message1").style.color = "black"; document.getElementById("message2").style.color = "black"; document.getElementById("message1").innerHTML = "LET'S KEEP GOING!"; document.getElementById("message2").innerHTML = "ROLL AGAIN!"; document.getElementById("rolldice").disabled = false; document.getElementById("roll2dice").disabled = false;}, 5000); 
	}
			else if (position == 51){document.getElementById(move.toString()).appendChild(elem); document.getElementById("message2").innerHTML = "NICE!! YOU LANDED AT THE BOTTOM OF A LADDER!  " + "YOU ARE MOVING UP TO 67!"; position = 67; setTimeout(function(){document.getElementById(position.toString()).appendChild(elem); document.getElementById("message1").style.color = "black"; document.getElementById("message2").style.color = "black"; document.getElementById("message1").innerHTML = "LET'S KEEP GOING!"; document.getElementById("message2").innerHTML = "ROLL AGAIN!"; document.getElementById("rolldice").disabled = false; document.getElementById("roll2dice").disabled = false;}, 5000); 
	}
			else if (position == 71){document.getElementById(move.toString()).appendChild(elem); document.getElementById("message2").innerHTML = "NICE!! YOU LANDED AT THE BOTTOM OF A LADDER!  " + "YOU ARE MOVING UP TO 91!"; position = 91; setTimeout(function(){document.getElementById(position.toString()).appendChild(elem); document.getElementById("message1").style.color = "black"; document.getElementById("message2").style.color = "black"; document.getElementById("message1").innerHTML = "LET'S KEEP GOING!"; document.getElementById("message2").innerHTML = "ROLL AGAIN!"; document.getElementById("rolldice").disabled = false; document.getElementById("roll2dice").disabled = false;}, 5000); 
	}
			else if (position == 80){document.getElementById(move.toString()).appendChild(elem); document.getElementById("message2").innerHTML = "NICE!! YOU LANDED AT THE BOTTOM OF A LADDER!  " + "YOU ARE MOVING UP TO 100!"; position = 100; setTimeout(function(){document.getElementById(position.toString()).appendChild(elem); document.getElementById("message1").style.color = "blue"; document.getElementById("message2").style.color = "blue"; document.getElementById("message1").innerHTML = "   YOU JUST HIT 100!!!    YOU ARE A CHAMP!!!"; document.getElementById("message2").innerHTML = "TO PLAY AGAIN, REFRESH PAGE!!"; }, 2000); 
	}
			else if (position > 100){ position = position % 100; document.getElementById("message2").innerHTML = "WOOPS! YOU WENT PAST 100!  " + "YOU ARE GOING BACK DOWN TO " + position + "!";  setTimeout(function(){document.getElementById(position.toString()).appendChild(elem); document.getElementById("message1").style.color = "black"; document.getElementById("message2").style.color = "black"; document.getElementById("message1").innerHTML = "TRY YOUR LUCK!"; document.getElementById("message2").innerHTML = "ROLL AGAIN!"; document.getElementById("rolldice").disabled = false; document.getElementById("roll2dice").disabled = false;}, 5000); 
	}		
	
	}
	else {document.getElementById(move.toString()).appendChild(elem); if (move != 100) {document.getElementById("message1").style.color = "black"; document.getElementById("message2").style.color = "black"; document.getElementById("message1").innerHTML = "LET'S KEEP GOING!"; document.getElementById("message2").innerHTML = "ROLL AGAIN!"; document.getElementById("rolldice").disabled = false; document.getElementById("roll2dice").disabled = false;} else {document.getElementById("message1").style.color = "blue"; document.getElementById("message2").style.color = "blue"; document.getElementById("message1").innerHTML = "   YOU JUST HIT 100!!!    YOU ARE A CHAMP!!!"; document.getElementById("message2").innerHTML = "TO PLAY AGAIN, REFRESH PAGE!!";} }
	
	}, 2000);
	
	return b + c;
}



