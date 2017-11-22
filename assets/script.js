

// //=============== OBJECTS / FUNCTIONS ===============
// var game = {
// 	wins: 0,
// 	losses: 0,
// 	guessesLeft: 0,
// 	wordsArray: ["budweiser", "coors", "modelo", "busch", "stone", "stella", "corona", "kona"],
// 	chosenWord: "",
// 	letterGuessed: "",
// 	guessedLetters: [],
// 	win: function() {
// 		//info box for winning
// 		this.wins++;
// 		this.reset();
// 	},
// 	lose: function() {
// 		//info box for losing
// 		this.losses++;
// 		this.reset();
// 	},
// 	reset: function() {
// 		this.guessesLeft = 9
// 		this.chosenWord = [Math.floor(Math.random() * this.wordsArray.length)];
// 		this.guessedArray = [];
// 		this.letterGuessed = "";

// 	},
// 	compareGuess: function() {
// 		if(!this.guessedArray.indexOf(this.letterGuessed)) {
// 			this.guessedArray.push(this.letterGuessed);
// 			this.addLetter();
// 		} else {
// 			this.addHangMan();
// 			this.guessesLeft--;
// 		}
// 	},
// 	compareScore: function() {
// 		if(this.userWord === this.chosenWord) {
// 			this.win();
// 		}
// 	},
// 	wordToLetters: function(word) {
// 		word.toLowerCase().split("");
// 		return word;
// 	},
// 	lettersToWord: function(word) {
// 		word.toLowerCase().split(" ").join("");
// 		return word;
// 	},
// 	process: function() {
// 		if(this.guessesLeft >= 1) {
// 			this.compareGuess();
// 			this.compareScore();
// 		} else {
// 			this.lose();
// 		}


// 	},
// 	addLetter: function() {

// 	},
// 	addHangMan: function() {

// 	}
// }



// //=============== PROCESS ================
// $(document).ready(function() {
// 	game.reset();
// 	document.onkeyup = function(event) {
// 		if(event.keyCode <= 90 && event.keyCode >= 65) {
// 			game.letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
// 			game.process();
// 		} else {
// 			//that is not a letter, please guess a letter
// 		}
// 	}
// });






var wins = 0;
var losses = 0;
var guessesLeft = 12;
var chosenWord = "";

var wrongGuess = 0;
var wrongGuessedLetters = [];
var correctGuessedLetters = [];
var correctGuess = 0;

function start() {
	chosenWord = randomWord();
	for (var i = 0; i < chosenWord.length; i++) {
		var newLetterSpot = document.createElement('span');
		newLetterSpot.innerHTML = "_ ";
		newLetterSpot.id = i;
		$(".word").append(newLetterSpot);
		$(".wins").text("wins: " + wins);
		$(".losses").text("losses: " + losses);
	}
}



document.onkeyup = guessCheck;

function randomWord() {
	var words = ["budweiser", "coors", "modelo", "busch", "stone", "stella", "corona", "kona"];
	return words[Math.floor(Math.random() * words.length)];
}



function guessCheck(event) {
	$(".guesses-left").text("Guesses Left: " + guessesLeft);
	

	if (event.keyCode <= 90 && event.keyCode >= 65 && $.inArray(event.key, wrongGuessedLetters)) {
		var guess = event.key;
		var letterGuess = ($.inArray(guess, chosenWord));
		var scanCorrectLetters = ($.inArray(guess, correctGuessedLetters));
		//TRUE
		if (letterGuess != -1 && scanCorrectLetters == -1) {
			correctGuessedLetters.push(guess);
			for (var i = 0; i < chosenWord.length; i++) {
				if (guess == chosenWord[i]) {
					$("#" + i).text(chosenWord[i]);
					correctGuess++;
					guessesLeft--;
				}
			}
		}
		if (letterGuess == -1) {
			wrongGuess++;
			guessesLeft--;
			console.log(wrongGuess);
			wrongGuessedLetters.push(guess);
			$(".wrong-guess").text("Wrong Guesses: " + wrongGuessedLetters);
		}
	}
	if (correctGuess >= (chosenWord.length)) {
		win();
	}
	if (wrongGuess >= 8 || guessesLeft <= 0) {
		lose();
	}
	function lose() {
		losses++;

		alert("You Lose!");
		reset();
	}

}


function win() {
	wins++;

	alert("You Win!");
	reset();
}
function reset() {
	guessesLeft = 12;
	chosenWord = "";
	wrongGuess = 0;
	wrongGuessedLetters = [];
	correctGuessedLetters = [];
	correctGuess = 0;
	$(".guesses-left").text("Guesses Left: " + guessesLeft);
	$(".word").empty();
	$(".wrong-guess").text("Wrong Guesses: ");
	start();

}

start();















