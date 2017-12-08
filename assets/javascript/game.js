

var words = ["pizza", "nuggets", "burger", "hoagie", "milkshake", 
			"beer", "sandwich", "panini", "fries", "soda", "burrito", "taco", "salad",
			"hotdog", "wings", "chips", "nuts", "wine", "lasanga", "spaghetti", "hummus",
			"carrots", "apple", "candy", "dessert", "juice", "cake", "cookie"];
var hiddenWord = words[Math.floor(Math.random() * words.length)];
var wordLetters = hiddenWord.split("");


var wins = 0;
var guesses = 12;
var userGuesses = [];
var currentLetters = [];



function pointSystem(){
	document.getElementById("guesses").textContent = guesses;
	document.getElementById("wins").textContent = wins;

}

function reset(){
	hiddenWord = words[Math.floor(Math.random() * words.length)];
	wordLetters = hiddenWord.split("");
	guesses = 12;
	userGuesses = [];
	document.getElementById("guesses").textContent = guesses;
	document.getElementById("user-guesses").textContent =
		userGuesses;
}

pointSystem();



for(var i = 0; i < wordLetters.length; i++){
	currentLetters.push("- ");
	document.getElementById("current-word").textContent =
	currentLetters.join("");
	}





document.onkeyup = function(event) {

	var userGuess = event.key


	if(guesses <= 1) {
		alert("Game Over! You lose!");
		reset();
		currentLetters = [];
		for(var i = 0; i < wordLetters.length; i++){
			currentLetters.push("- ");
			document.getElementById("current-word").textContent =
			currentLetters.join("");
		};
	} 



	if (wordLetters.indexOf(userGuess) > -1 ){

		for(var i = 0; i < wordLetters.length; i++){

			if(wordLetters[i] === userGuess){
				currentLetters[i] = userGuess;
				document.getElementById("current-word").textContent = currentLetters.join("");

			}
		}	
	}
	 else if (userGuesses.indexOf(" " + userGuess) < 0 ) {
	 	guesses--;
		userGuesses.push(" " + userGuess);
		document.getElementById("user-guesses").textContent =
		userGuesses;
		document.getElementById("guesses").textContent = guesses;
	 } 



		if(wordLetters.join("") == currentLetters.join("")){
		wins++;
		alert("You win! The word was " + hiddenWord)
		reset();
		currentLetters = [];
		document.getElementById("wins").textContent = wins;
		for(var i = 0; i < wordLetters.length; i++){
			currentLetters.push("- ");
			document.getElementById("current-word").textContent =
			currentLetters.join("");
			}
	}
	

}






