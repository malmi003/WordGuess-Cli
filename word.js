// ----Word.js----: Contains a constructor, Word that depends on the Letter constructor. This is used to create an object representing the current word the user is attempting to guess. That means the constructor should define:
let fs = require("fs");
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

    this.readFile = function () {
        fs.readFile("letters.txt", "utf8", function(err, data) {
            if (err) throw err;

            this.wordArray = data;
        })
    }
    // this.readFile();

    // A function that returns a string representing the word. This should call the function on each letter object (the first function defined in `Letter.js`) that displays the character or an underscore and concatenate those together.

    //read from letters.txt
    this.wordString = "";
    this.returnString = function () {
        this.readFile();
        console.log(this.wordArray);
        this.wordArray.forEach(item => {
            // console.log(item)
            this.wordString += item.returnChar();
            // console.log(item);
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

        fs.writeFile("letters.txt", JSON.stringify(this.wordArray), function(err) {
            if (err) throw err;
        });

        this.returnString();
        // console.log(this.wordString);
    }
    this.runGuess();

}

let hubble = new Word("hubble");

// module.exports = Word;