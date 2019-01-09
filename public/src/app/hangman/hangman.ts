export class Hangman {
    guessesRemaining
    wordToGuess
    allWords

     constructor(){
        this.guessesRemaining = 5

         this.readTextFile('./assets/words.txt')

        }
        
        readTextFile(file) {
            var rawFile = new XMLHttpRequest();
            rawFile.open("GET", file, true);
            rawFile.onreadystatechange = () =>
            {
                if(rawFile.readyState === 4)
                {
                    if(rawFile.status === 200 || rawFile.status == 0)
                    {
                        var rawWords = rawFile.responseText;
                        this.allWords = rawWords.split(' ')
                        var idx = Math.floor(Math.random() * (this.allWords.length - 1))
                        this.wordToGuess = this.allWords[idx]
                        console.log(this.wordToGuess)
                }
            }
        }
        rawFile.send(null);
}
}
