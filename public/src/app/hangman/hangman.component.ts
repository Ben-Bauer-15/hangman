import { Component, OnInit } from '@angular/core';
import { Hangman } from "./hangman";
import { Title } from '@angular/platform-browser';


 @Component({
  selector: 'app-hangman',
  templateUrl: './hangman.component.html',
  styleUrls: ['./hangman.component.css']
})
export class HangmanComponent implements OnInit {
  hangman : Hangman
  letters = []

   constructor(private _titleService : Title) { 
    this.hangman = new Hangman()
    console.log(this.hangman.wordToGuess)
    for (var i = 0; i < this.hangman.wordToGuess.length; i++){
      this.letters.push(this.hangman.wordToGuess[i])
    }
    console.log(this.letters)

    this.setTitle()
   }

   ngOnInit() {
  }

  setTitle(){
    this._titleService.setTitle("Hangman")
  }
}
