
//================GLOBAL VARIABLES===============
var guessesLeft;
var wins = 0;
var losses = 0;
var userGuess;

// var wrongGuesses = 0;
// var wrongGuessedLetters = [];
// var correctGuessedLetters = [];
// var correctGuess = 0;
// var chosenWord;



//=============== OBJECTS / FUNCTIONS ===============
var game = {
	guessedLetters: [],
	wordsArray: ["budweiser", "coors", "modelo", "busch", "stone", "stella", "corona", "kona"],
	randomWord: "",
	win: function() {
		//info box for winning
		wins++;
		game.reset();
	},
	lose: function() {
		//info box for losing
		losses++;
		game.reset();
	},
	reset: function() {
		guessesLeft = 9
		randomWord = [Math.floor(Math.random() * wordsArray.length)];
		guessedLetters = [];
	},
	compareGuess: function(userGuess) {
		if(!guessedLetters.indexOf(userGuess)) {
			guessedLetters.push(userGuess);
			page.addLetter();
		} else {
			page.addHangMan();
			guessesLeft--;
		}
	},
	compareScore: function() {
		if(userWord === randomWord) {
			game.win();
		} else {
			game.lose();
		}
	},
	wordToLetters: function(word) {
		word.toLowerCase().split("");
		return word;
	},
	lettersToWord: function(word) {
		word.toLowerCase().split(" ").join("");
		return word;
	}
}

var page = {
	addLetter: function() {

	},
	addHangMan: function() {

	}
}



//=============== PROCESS ================
$(document).ready(function() {
	reset();
	document.onkeyup = function(event) {
		if(event.keyCode <= 90 && event.keyCode >= 65 && !guessesLeft === 0) {

		} else {

		}
	}
});






























// $(document).ready(start());

// 	function start() {
// 		chosenWord = randomWord();
// 		for(var i = 0; i < chosenWord.length; i++) {
//        		var newLetterSpot = document.createElement('span');
//         	newLetterSpot.innerHTML = "_ ";
//         	newLetterSpot.id = i;
//         	$(".word").append(newLetterSpot);
//         	$(".wins").text("wins: " + wins);
//         	$(".losses").text("losses: " + lose);
// 		}
// 	}



// document.onkeyup = guessCheck;

// function randomWord() {
// 	var words = ["budweiser", "coors", "modelo", "busch", "stone", "stella", "corona", "kona"];
// 	return words[Math.floor(Math.random() * words.length)];	
// }



// function guessCheck(event) {
// 	$(".guesses-left").text("Guesses Left: " + guessesLeft);
// 	$(".wrong-guess").text("Wrong Guesses: " + wrongGuessedLetters);

// 	if (event.keyCode <= 90 && event.keyCode >= 65 && $.inArray(event.key, wrongGuessedLetters)) {
// 	var guess = event.key;
// 	var letterGuess = ($.inArray(guess, chosenWord));
// 	var scanCorrectLetters = ($.inArray(guess, correctGuessedLetters));
// 	//TRUE
// 		if (letterGuess != -1 && scanCorrectLetters == -1) {
// 			correctGuessedLetters.push(guess);
// 			for (var i = 0; i < chosenWord.length; i++) {
// 				if (guess == chosenWord[i]) {
// 		 			$("#" + i).text(chosenWord[i]);
// 		 			correctGuess++;
// 		 			guessesLeft--;	 			
// 				}
// 			}
// 		}
// 		if (letterGuess == -1) {
// 			wrongGuess++;
// 			guessesLeft--;
// 			console.log(wrongGuess);
// 			wrongGuessedLetters.push(guess);
// 		}
// 	}
// 	if (correctGuess >= (chosenWord.length)) {
// 		win();
// 	}
// 	if (wrongGuess >= 8 || guessesLeft <= 0) {
// 		lose();
// 	}
// 	function lose() {
// 	lose++;
	
// 	alert("You Lose!");
// 	reset();
// }
	
// }


// function win() {
// 	wins++;
	
// 	alert("You Win!");
// 	reset();
// }
// function reset() {
// 	wrongGuess = 0;
// 	guessesLeft = 10;
// 	wrongGuessedLetters = [];
// 	correctGuessedLetters = [];
// 	correctGuess = 0;
// 	$(".word").empty();
// 	start();

// }
















