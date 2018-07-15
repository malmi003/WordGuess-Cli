// ----Letter.js----: Contains a constructor, Letter. This constructor should be able to either display an underlying character or a blank placeholder (such as an underscore), depending on whether or not the user has guessed the letter. That means the constructor should define:

let Letter = function (char) {
    // A string value to store the underlying character for the letter
    this.char = char;

    // A boolean value that stores whether that letter has been guessed yet
    this.hasBeenGuessedBool = false;

    // A function that returns the underlying character if the letter has been guessed, or a placeholder (like an underscore) if the letter has not been guessed
    this.returnChar = function () {
        if (this.hasBeenGuessedBool) {
            return char;
        } else return "_ "
    }

    // A function that takes a character as an argument and checks it against the underlying character, updating the stored boolean value to true if it was guessed correctly
    this.compareLetters = function (guessedChar) {
        if (guessedChar == this.char) {
            this.hasBeenGuessedBool = true;
        }

        //may change this line so functions remain separate...
        console.log(this.returnChar());
    }
}

module.exports = Letter;

// let a = new Letter ("a")
// console.log(a)

// a.compareLetters(process.argv[2]);