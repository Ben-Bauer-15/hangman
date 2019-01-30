export class Hangman {
    alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    allWords


    //this object of critical info will be sent back and forth over socket connections and used for HTML rendering
    gameBoard = { guessesRemaining : 5,
                wordToGuess : undefined,
                correctGuesses : [],
                alphabetDict : [[],[]],
                winner : false,
                loser : false,
                secretWordLetters : [] }
    

    constructor(){
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
                    this.gameBoard.wordToGuess = this.allWords[idx]
                    this.createAlphabetDict()
                    this.createSecretWordArray()

                }
            }
        }
        rawFile.send(null);
    }

    createSecretWordArray(){
        for (var i = 0; i < this.gameBoard.wordToGuess.length; i++){
            var secretLetter = this.gameBoard.wordToGuess[i].toUpperCase()

            this.gameBoard.secretWordLetters.push({letter : secretLetter, placeholder : '_'})

            var letterObj = this.findLetterInDict(secretLetter, this.gameBoard.alphabetDict)
            letterObj.isInSecretWord = true
        }
    }

    createAlphabetDict(){
        for (var i = 0; i < this.alphabet.length; i++){
            var letterFromAlphabet = this.alphabet[i]
            if (i < 13){
                this.gameBoard.alphabetDict[0].push( {letter : letterFromAlphabet, isInSecretWord : false, clicked : false} )
            }
            else{
                this.gameBoard.alphabetDict[1].push( {letter : letterFromAlphabet, isInSecretWord : false, clicked : false} )
            }
        }
    }

    selectLetter(inputLetter, gameBoard){

        
        var correctGuess = false

        var letterObj = this.findLetterInDict(inputLetter, gameBoard.alphabetDict)
        letterObj.clicked = true
        for (var i = 0; i < gameBoard.secretWordLetters.length; i++){
            var secretLetterObj = gameBoard.secretWordLetters[i]
            
            if (secretLetterObj.letter == inputLetter){
                
                secretLetterObj.placeholder = inputLetter.toLowerCase()
                gameBoard.correctGuesses.push(inputLetter)
                if (gameBoard.correctGuesses.length == gameBoard.secretWordLetters.length){
                    gameBoard.winner = true
                    
                }
                correctGuess = true
            }
        }

        if (!correctGuess){
            gameBoard.guessesRemaining --
        }
        if (gameBoard.guessesRemaining == 0 && gameBoard.correctGuesses.length != gameBoard.secretWordLetters.length && !gameBoard.winner){
            gameBoard.loser = true
        }

        return gameBoard
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
