import { Component, OnInit } from '@angular/core';
import { Hangman } from "./hangman";
import { Title } from '@angular/platform-browser';
import * as io from 'socket.io-client'
import { ActivatedRoute, Params } from '@angular/router'


 @Component({
  selector: 'app-hangman',
  templateUrl: './hangman.component.html',
  styleUrls: ['./hangman.component.css']
})
export class HangmanComponent implements OnInit {
  hangman : Hangman
  socket;
  roomID;
  linkToShare;
  address;
  clickedOnPlayMulti = false
  chatsActivated = false

   constructor(private _titleService : Title,
    private _route : ActivatedRoute) { 
    

    this.setTitle()
   }

   ngOnInit() {

    this._route.params.subscribe((params : Params) => {
      if (params['id']){
        this.roomID = params['id']
        this.socket = io()
        this.socket.on('welcome', (data) => {
          this.socket.emit('joinRoom', {roomID : this.roomID})
        })

        this.socket.on('clicked', (data) => {
          console.log('game board updated', data.game)
          this.hangman = data.game
        })

        this.socket.on('currentGameBoard', (data) => {
          this.hangman = data.game
        })
      }

      else {
        this.hangman = new Hangman()

        this.socket = io()
        this.socket.on('welcome', (data) => {
         this.roomID = data.roomID
         this.address = data.address
         this.linkToShare = "http://" + this.address + ":5000/room/" + this.roomID
         this.socket.emit('firstUser', {roomID : this.roomID})
       })
       this.socket.on('otherUser', (data) => {
         this.socket.emit('currentGameBoard', {game : this.hangman, roomID : this.roomID})
       })

       this.socket.on('clicked', (data) => {
         console.log('game board updated', data.game)
         this.hangman = data.game
       })
      }
    })


  }

  setTitle(){
    this._titleService.setTitle("Hangman")
  }

  selectLetter(letter){
    console.log(this.hangman)

    //there's a bug somewhere in here to fix. invited player isn't able to click a letter
    //for some reason, only the properties, and not the methods, of the hangman object are being sent back and forth
    var letterObj = this.hangman.findLetterInDict(letter, this.hangman.alphabetDict)
    if (!letterObj.clicked){
      this.hangman.selectLetter(letter)
      this.socket.emit('clicked', {roomID : this.roomID, game : this.hangman})
    }
  }

  newGame(){
    this.hangman = new Hangman()
    this.socket.emit('clicked', {roomID : this.roomID, game : this.hangman})
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
