// ----Word.js----: Contains a constructor, Word that depends on the Letter constructor. This is used to create an object representing the current word the user is attempting to guess. That means the constructor should define:
let Letter = require("./letter");

let Word = function (word) {
    this.word = word;
    this.letterArray = this.word.split("");

    this.wordArray = [];

    // An array of `new` Letter objects representing the letters of the underlying word
    this.addLetters = function (char) {
        this.wordArray.push(new Letter(char));
    }
    this.createArrayOfLetterObjects = function () {
        this.letterArray.forEach(item => {
            // this.addLetters(item);
            this.addLetters(item);
        });
        // console.log(this.wordArray);
    }

    this.createArrayOfLetterObjects();

    // A function that returns a string representing the word. This should call the function on each letter object (the first function defined in `Letter.js`) that displays the character or an underscore and concatenate those together.
    this.wordString = "";
    this.returnString = function () {
        this.wordArray.forEach(item => {
            // console.log(item)
            this.wordString += item.returnChar();

        });
        console.log(this.wordString);
    };


    // A function that takes a character as an argument and calls the guess function on each letter object (the second function defined in `Letter.js`)
    this.runGuess = function () {
        this.wordArray.forEach(item => {
            // console.log(item)
            item.compareLetters(process.argv[2]);
            // console.log(item.compareLetters(process.argv[2])); 
        });
        this.returnString();
        // console.log(this.wordString);
    }
    this.runGuess();

}

let hubble = new Word("hubble");

// module.exports = Word;