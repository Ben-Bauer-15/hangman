import { Component, OnInit } from '@angular/core';
import { HangmanComponent } from "../hangman/hangman.component";

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  name = ''
  errors;
  constructor(private _component : HangmanComponent) { }

  ngOnInit() {
  }

  dismiss(){
    console.log(this.name)
    if (this.name != ''){
      this._component.name = this.name
      this._component._component.name = this.name
      this.errors = undefined
      this._component.welcomeVisible = false

    }
    else{
      this.errors = 'Name cannot be empty'
    }
  }

}
