var alphabet = [
    "a","b","c","d","e","f","g","h","i","j","k","l","m",
    "n","o","p","q","r","s","t","u","v","w","x","y","z",
];

var guessedLetters = [];
var guesses = 9;
var wins = 0;
var losses = 0;
var answer;


document.getElementById("wins").innerHTML = wins;
document.getElementById("losses").innerHTML = losses;
document.getElementById("guesses").innerHTML = guesses;

function computerGuess() {
    
         answer = alphabet[Math.floor(Math.random() * alphabet.length)];
     
     console.log(answer);
     return answer;
 }

 computerGuess();

document.onkeypress = function(event) {
    var userGuess = event.key;

    
    if (answer === userGuess) {
                   
        wins++;
        document.getElementById("wins").innerHTML = wins;
        document.getElementById("message").innerHTML = "<h2>You win! The letter was " + answer + ". <br /> Guess what letter I'm thinking of now.</h2>";
        computerGuess();

    }

    else {

        guesses--;

        document.getElementById("guesses").innerHTML = guesses;

        guessedLetters.push(userGuess);

        document.getElementById("guessedLetters").innerHTML = guessedLetters;

    }

    if (guesses === 0) {
        
        guessedLetters = [];

        guesses = 9;

        losses++;

        document.getElementById("losses").innerHTML = losses;

        computerGuess();
    }

}