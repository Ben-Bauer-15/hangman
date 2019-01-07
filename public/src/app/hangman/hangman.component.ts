import { Component, OnInit } from '@angular/core';
import { Hangman } from "../hangman";

@Component({
  selector: 'app-hangman',
  templateUrl: './hangman.component.html',
  styleUrls: ['./hangman.component.css']
})
export class HangmanComponent implements OnInit {
  hangman

  constructor() { 
    this.hangman = new Hangman()

  }

  ngOnInit() {
  }

}
