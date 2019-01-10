export class Hangman {
    alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

    guessesRemaining
    wordToGuess
    allWords
    correctGuesses = []
    alphabetDict = [[],[]]
    winner = false
    loser = false
    secretWordLetters = []

    constructor(){
        this.guessesRemaining = 5
        this.readTextFile('./assets/words.txt')
    }
        
    readTextFile(file){
        var rawFile = new XMLHttpRequest();
        rawFile.open("GET", file, false);
        rawFile.onreadystatechange = () => {
            if(rawFile.readyState === 4){
                if(rawFile.status === 200 || rawFile.status == 0){
                    var rawWords = rawFile.responseText;
                    this.allWords = rawWords.split(' ')
                    var idx = Math.floor(Math.random() * (this.allWords.length - 1))
                    this.wordToGuess = this.allWords[idx]
                    this.createAlphabetDict()
                    this.createSecretWordArray()
                }
            }
        }
        rawFile.send(null);
    }

    createSecretWordArray(){
        for (var i = 0; i < this.wordToGuess.length; i++){
            var secretLetter = this.wordToGuess[i].toUpperCase()

            this.secretWordLetters.push({letter : secretLetter, placeholder : '_'})

            var letterObj = this.findLetterInDict(secretLetter, this.alphabetDict)
            letterObj.isInSecretWord = true
        }
    }

    createAlphabetDict(){
        for (var i = 0; i < this.alphabet.length; i++){
            var letterFromAlphabet = this.alphabet[i]
            if (i < 13){
                this.alphabetDict[0].push( {letter : letterFromAlphabet, isInSecretWord : false, clicked : false} )
            }
            else{
                this.alphabetDict[1].push( {letter : letterFromAlphabet, isInSecretWord : false, clicked : false} )
            }
        }
    }

    selectLetter(input){
        
        var correctGuess = false

        var letterObj = this.findLetterInDict(input, this.alphabetDict)
        letterObj.clicked = true
        for (var i = 0; i < this.secretWordLetters.length; i++){
            var secretLetterObj = this.secretWordLetters[i]
            
            if (secretLetterObj.letter == input){
                
                secretLetterObj.placeholder = input.toLowerCase()
                this.correctGuesses.push(input)
                if (this.correctGuesses.length == this.secretWordLetters.length){
                    this.winner = true
                    alert('You won!')
                }
                correctGuess = true
            }
        }

        if (!correctGuess){
            this.guessesRemaining --
        }
        if (this.guessesRemaining == 0 && this.correctGuesses.length != this.secretWordLetters.length && !this.winner){
            alert('You lost. The correct answer was: ' + this.wordToGuess)
        }
    }

    findLetterInDict(input, dict){
        for (var i = 0; i < dict.length; i++){
            for (var j = 0; j < dict[i].length; j++){
                if (dict[i][j].letter == input){
                    return dict[i][j]
                }
            }
        }
    }
}
