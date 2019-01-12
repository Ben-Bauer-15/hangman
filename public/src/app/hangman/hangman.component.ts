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
  clickedOnPlayMulti = false
  chatsActivated = false

   constructor(private _titleService : Title) { 
    this.hangman = new Hangman()

    this.setTitle()
   }

   ngOnInit() {
  }

  setTitle(){
    this._titleService.setTitle("Hangman")
  }

  selectLetter(letter){
    var letterObj = this.hangman.findLetterInDict(letter, this.hangman.alphabetDict)
    if (!letterObj.clicked){
      this.hangman.selectLetter(letter)
    }
    
  }

  newGame(){
    this.hangman = new Hangman()
  }

  displayLinkToShare(){
    this.clickedOnPlayMulti = true
  }

  hideLinkDiv(){
    this.clickedOnPlayMulti = false
  }

  displayActiveChats(){
    this.chatsActivated = true
  } 
  
  hideActiveChats(){
    this.chatsActivated = false
  }
}
