export class Hangman {
    guessesRemaining
    wordToGuess
    allWords
    alphabet = [
        ['A','B','C','D','E','F','G','H','I','J','K','L','M'],
        ['N','O','P','Q','R','S','T','U','V','W','X','Y','Z']]

     constructor(){
        this.guessesRemaining = 5

         this.readTextFile('./assets/words.txt')

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
                        this.allWords = rawWords.split(' ')
                        var idx = Math.floor(Math.random() * (this.allWords.length - 1))
                        this.wordToGuess = this.allWords[idx]
                }
            }
        }
        rawFile.send(null);
}
}
