export class Hangman {
    guessesRemaining
    wordToGuess
    allWords

     constructor(){
        this.guessesRemaining = 5

         this.readTextFile('./assets/words.txt')

         var idx = Math.floor(Math.random() * (this.allWords.length - 1))
        this.wordToGuess = this.allWords[idx]
        console.log(this.wordToGuess)
    }

     readTextFile(file) {
        var rawFile = new XMLHttpRequest();
        rawFile.open("GET", file, false);
        rawFile.onreadystatechange = () =>
        {
            if(rawFile.readyState === 4)
            {
                if(rawFile.status === 200 || rawFile.status == 0)
                {
                    var rawWords = rawFile.responseText;
                    console.log(rawWords)
                    this.allWords = rawWords.split(' ')
                }
            }
        }
        rawFile.send(null);
}
}
