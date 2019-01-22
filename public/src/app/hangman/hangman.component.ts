import { Component, OnInit } from '@angular/core';
import { Hangman } from "./hangman";
import { Title } from '@angular/platform-browser';
import * as io from 'socket.io-client'
import { ActivatedRoute, Params } from '@angular/router'
import { AppComponent } from "../app.component";
import { HttpService } from "../http.service";


 @Component({
  selector: 'app-hangman',
  templateUrl: './hangman.component.html',
  styleUrls: ['./hangman.component.css']
})
export class HangmanComponent implements OnInit {
  hangman : Hangman
  socket;
  name;
  roomID;
  linkToShare;
  gameBoard;
  address;
  clickedOnPlayMulti = false
  chatsActivated = false
  newMsg = ''
  conversation = []
  welcomeVisible;

   constructor(private _titleService : Title,
    private _route : ActivatedRoute,
    public _component : AppComponent,
    private _http : HttpService) { 
    

    this.setTitle()

    if (this._component.name){
      this.welcomeVisible = false
      this.name = this._component.name
    }
    else{
      this.welcomeVisible = true
    }
   }

   ngOnInit() {

    this.hangman = new Hangman()
    this.gameBoard = this.hangman.gameBoard
    

    this._route.params.subscribe((params : Params) => {
      if (params['id']){
        this.roomID = params['id']
        this.socket = io()
        this.socket.on('welcome', (data) => {
          this.socket.emit('joinRoom', {roomID : this.roomID})  
        })

        this.socket.on('clicked', (data) => {
          if (data.game.winner == true){
            
            alert('You won!')
          }

          else if(data.game.loser == true){
            
            alert('You lost. The correct answer was: ' + this.gameBoard.wordToGuess)
           }
           else {
             this.gameBoard = data.game
           }
        })

        this.socket.on('currentGameBoard', (data) => {
          this.gameBoard = data.game
          console.log(data)
          this.conversation = data.messages
        })

        this.socket.on('newMsg', (data) => {
          this.conversation.push({name : data.name, msg : data.msg})
        })
      }

      else {


        this.socket = io()
        this.socket.on('welcome', (data) => {
         this.roomID = data.roomID
         this.address = data.address
         this.linkToShare = "http://hangman.ben-bauer.net/room/" + this.roomID
         this.socket.emit('firstUser', {roomID : this.roomID})
       })
       this.socket.on('otherUser', (data) => {
         this.socket.emit('currentGameBoard', {game : this.gameBoard, roomID : this.roomID, messages : this.conversation})
       })

       this.socket.on('clicked', (data) => {
         if (data.game.winner == true){
           alert('You won!')
         }

         else if(data.game.loser == true){
          alert('You lost. The correct answer was: ' + this.gameBoard.wordToGuess)
         }

         else {
           this.gameBoard = data.game
         }
        })

        this.socket.on('newMsg', (data) => {
          this.conversation.push({name : data.name, msg : data.msg})
        })
      }
    })
  }

  setTitle(){
    this._titleService.setTitle("Hangman")
  }

  selectLetter(letter){
    var letterObj = this.hangman.findLetterInDict(letter, this.gameBoard.alphabetDict)
    if (!letterObj.clicked && !this.welcomeVisible){
      this.gameBoard = this.hangman.selectLetter(letter, this.gameBoard)

      if (this.gameBoard.loser == true){

        let obs = this._http.newGame({
          length : this.gameBoard.wordToGuess.length, 
          word : this.gameBoard.wordToGuess, 
          completed : false})
        obs.subscribe((data) => {
          console.log(data)
        })

        this.socket.emit('clicked', {roomID : this.roomID, game : this.gameBoard})
        alert('You lost. The correct answer was: ' + this.gameBoard.wordToGuess)
      }
      
      else if (this.gameBoard.winner == true){

        let obs = this._http.newGame({
          length : this.gameBoard.wordToGuess.length, 
          word : this.gameBoard.wordToGuess, 
          completed : true})
        obs.subscribe((data) => {
          console.log(data)
        })

        this.socket.emit('clicked', {roomID : this.roomID, game : this.gameBoard})
        alert('You won!')
      }
      this.socket.emit('clicked', {roomID : this.roomID, game : this.gameBoard})
    }
  }

  newGame(){
    this.hangman = new Hangman()
    this.gameBoard = this.hangman.gameBoard
    this.socket.emit('clicked', {roomID : this.roomID, game : this.gameBoard})
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

  sendMsg(){
    this.conversation.push({name : this.name, msg : ": " + this.newMsg})
    this.socket.emit('newMsg', {roomID : this.roomID, msg : ": " + this.newMsg, name : this.name})
    this.newMsg = ''
  }
}
