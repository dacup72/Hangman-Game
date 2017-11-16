
//================GLOBAL VARIABLES===============
var wrongGuess = 0;
var guessesLeft = 9;
var wrongGuessedLetters = [];
var correctGuessedLetters = [];
var correctGuess = 0;
var chosenWord;
var wins = 0;
var lose = 0;


//=============== OBJECTS / FUNCTIONS ===============
var game = {
	win: function() {
		//info box for winning
		wins++;
		game.reset();
	},
	lose: function() {
		//info box for losing
		loses++;
		game.reset();
	},
	reset: function() {
		guessesLeft = 9
		//choose random word
		//
	},
	randomWord: function() {
		var randomWord = ["budweiser", "coors", "modelo", "busch", "stone", "stella", "corona", "kona"];
		return randomWord[Math.floor(Math.random() * words.length)];
	}
}































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
















