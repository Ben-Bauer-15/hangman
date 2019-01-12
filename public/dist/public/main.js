(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _hangman_hangman_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hangman/hangman.component */ "./src/app/hangman/hangman.component.ts");




var routes = [
    { path: '', component: _hangman_hangman_component__WEBPACK_IMPORTED_MODULE_3__["HangmanComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'public';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _hangman_hangman_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./hangman/hangman.component */ "./src/app/hangman/hangman.component.ts");






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _hangman_hangman_component__WEBPACK_IMPORTED_MODULE_5__["HangmanComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/hangman/hangman.component.css":
/*!***********************************************!*\
  !*** ./src/app/hangman/hangman.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".title {\n    text-align: center;\n    font-size: 6em;\n    font-style: italic;\n}\n.underline{\n    margin-top: 0%;\n    font-size: 7em;\n    margin-bottom: 3%;\n    margin-right: 3%;\n    margin-top: -1%;\n    color: #f2b362;\n    margin-right: 1%;\n}\n.hangmanContainer{\n    text-align: center;\n}\n#guesses{\n    text-align: center;\n    font-size: 4em;\n    margin-top: 2%;\n}\n#new, #done{\n    color: white;\n    width: 71%;\n    font-style: italic;\n    cursor: pointer;\n    font-size: 4.5rem;\n    font-family: inherit;\n    background-color: #337ab7;\n    border-color: #2e6da4;\n    border-radius: 5px;\n}\n#done {\n    font-size: 2rem;\n    width: 25%;\n}\n#new:hover, #done:hover {\n    background-color: #24639a;\n}\n.underline, .keyboard {\n    display: inline-block;\n    vertical-align: top;\n    \n}\n.keyboard{\n    font-style: italic;\n    box-sizing: border-box;\n    margin-top: 0;\n    border: 1px solid gray;\n    border-radius: 5px;\n    width: 5%;\n    font-size: 3em;\n    padding: 7px;\n    margin-right: 5px;\n    margin-bottom: 1%;\n}\n.keyboard:hover {\n    background-color: #677077;\n    cursor: pointer;\n}\n.clicked {\n    background-color: #677077;\n}\n#connect, #linkToShare, #chatRoom, #activeChats {\n    padding: 7px;\n    border: 1px solid gray;\n    position: absolute;\n    left: 1%;\n    font-size: 1.2em;\n    box-sizing: border-box;\n    border-radius: 5px;\n    top: 2%;\n}\n#chatRoom {\n    left: 90%;\n    -webkit-animation: pulsate 3s infinite;\n            animation: pulsate 3s infinite;\n}\n#activeChats {\n    left: 90%;\n    max-height: 320px;\n    overflow-y: scroll;\n    /* animation:   */\n}\n#connect {\n    -webkit-animation: pulsate 3s infinite;\n            animation: pulsate 3s infinite;\n}\n#linkToShare {\n    -webkit-animation: displayLink 0.75s forwards ease-out;\n            animation: displayLink 0.75s forwards ease-out;\n    text-align: center;\n}\n@-webkit-keyframes displayLink {\n    0%{\n        left: -45%;\n    }\n    100%{\n        left: 2%;\n    }\n}\n@keyframes displayLink {\n    0%{\n        left: -45%;\n    }\n    100%{\n        left: 2%;\n    }\n}\n#connect:hover, #chatRoom:hover{\n    background-color: #b5b5b7;\n    color: #252938;\n    cursor: pointer;\n}\n@-webkit-keyframes pulsate {\n    0% {\n        box-shadow: none;\n    }\n    50% {\n        box-shadow: 0px 0px 50px 30px grey;\n    }\n    100% {\n        box-shadow: none;\n    }\n}\n@keyframes pulsate {\n    0% {\n        box-shadow: none;\n    }\n    50% {\n        box-shadow: 0px 0px 50px 30px grey;\n    }\n    100% {\n        box-shadow: none;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGFuZ21hbi9oYW5nbWFuLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLG1CQUFtQjtDQUN0QjtBQUNEO0lBQ0ksZUFBZTtJQUNmLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsaUJBQWlCO0NBQ3BCO0FBRUQ7SUFDSSxtQkFBbUI7Q0FDdEI7QUFFRDtJQUNJLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsZUFBZTtDQUNsQjtBQUVEO0lBQ0ksYUFBYTtJQUNiLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsMEJBQTBCO0lBQzFCLHNCQUFzQjtJQUN0QixtQkFBbUI7Q0FDdEI7QUFFRDtJQUNJLGdCQUFnQjtJQUNoQixXQUFXO0NBQ2Q7QUFFRDtJQUNJLDBCQUEwQjtDQUM3QjtBQUVEO0lBQ0ksc0JBQXNCO0lBQ3RCLG9CQUFvQjs7Q0FFdkI7QUFFRDtJQUNJLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsY0FBYztJQUNkLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsVUFBVTtJQUNWLGVBQWU7SUFDZixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLGtCQUFrQjtDQUNyQjtBQUVEO0lBQ0ksMEJBQTBCO0lBQzFCLGdCQUFnQjtDQUNuQjtBQUVEO0lBQ0ksMEJBQTBCO0NBQzdCO0FBRUQ7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixTQUFTO0lBQ1QsaUJBQWlCO0lBQ2pCLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsUUFBUTtDQUNYO0FBRUQ7SUFDSSxVQUFVO0lBQ1YsdUNBQStCO1lBQS9CLCtCQUErQjtDQUNsQztBQUVEO0lBQ0ksVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsa0JBQWtCO0NBQ3JCO0FBSUQ7SUFDSSx1Q0FBK0I7WUFBL0IsK0JBQStCO0NBQ2xDO0FBRUQ7SUFDSSx1REFBK0M7WUFBL0MsK0NBQStDO0lBQy9DLG1CQUFtQjtDQUN0QjtBQUVEO0lBQ0k7UUFDSSxXQUFXO0tBQ2Q7SUFDRDtRQUNJLFNBQVM7S0FDWjtDQUNKO0FBUEQ7SUFDSTtRQUNJLFdBQVc7S0FDZDtJQUNEO1FBQ0ksU0FBUztLQUNaO0NBQ0o7QUFHRDtJQUNJLDBCQUEwQjtJQUMxQixlQUFlO0lBQ2YsZ0JBQWdCO0NBQ25CO0FBR0Q7SUFDSTtRQUNJLGlCQUFpQjtLQUNwQjtJQUNEO1FBQ0ksbUNBQW1DO0tBQ3RDO0lBQ0Q7UUFDSSxpQkFBaUI7S0FDcEI7Q0FDSjtBQVZEO0lBQ0k7UUFDSSxpQkFBaUI7S0FDcEI7SUFDRDtRQUNJLG1DQUFtQztLQUN0QztJQUNEO1FBQ0ksaUJBQWlCO0tBQ3BCO0NBQ0oiLCJmaWxlIjoic3JjL2FwcC9oYW5nbWFuL2hhbmdtYW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50aXRsZSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogNmVtO1xuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbn1cbi51bmRlcmxpbmV7XG4gICAgbWFyZ2luLXRvcDogMCU7XG4gICAgZm9udC1zaXplOiA3ZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMyU7XG4gICAgbWFyZ2luLXJpZ2h0OiAzJTtcbiAgICBtYXJnaW4tdG9wOiAtMSU7XG4gICAgY29sb3I6ICNmMmIzNjI7XG4gICAgbWFyZ2luLXJpZ2h0OiAxJTtcbn1cblxuLmhhbmdtYW5Db250YWluZXJ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4jZ3Vlc3Nlc3tcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiA0ZW07XG4gICAgbWFyZ2luLXRvcDogMiU7XG59XG5cbiNuZXcsICNkb25le1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB3aWR0aDogNzElO1xuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgZm9udC1zaXplOiA0LjVyZW07XG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMzN2FiNztcbiAgICBib3JkZXItY29sb3I6ICMyZTZkYTQ7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4jZG9uZSB7XG4gICAgZm9udC1zaXplOiAycmVtO1xuICAgIHdpZHRoOiAyNSU7XG59XG5cbiNuZXc6aG92ZXIsICNkb25lOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjQ2MzlhO1xufVxuXG4udW5kZXJsaW5lLCAua2V5Ym9hcmQge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICAgIFxufVxuXG4ua2V5Ym9hcmR7XG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgbWFyZ2luLXRvcDogMDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBncmF5O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICB3aWR0aDogNSU7XG4gICAgZm9udC1zaXplOiAzZW07XG4gICAgcGFkZGluZzogN3B4O1xuICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICAgIG1hcmdpbi1ib3R0b206IDElO1xufVxuXG4ua2V5Ym9hcmQ6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM2NzcwNzc7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uY2xpY2tlZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzY3NzA3Nztcbn1cblxuI2Nvbm5lY3QsICNsaW5rVG9TaGFyZSwgI2NoYXRSb29tLCAjYWN0aXZlQ2hhdHMge1xuICAgIHBhZGRpbmc6IDdweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBncmF5O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAxJTtcbiAgICBmb250LXNpemU6IDEuMmVtO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIHRvcDogMiU7XG59XG5cbiNjaGF0Um9vbSB7XG4gICAgbGVmdDogOTAlO1xuICAgIGFuaW1hdGlvbjogcHVsc2F0ZSAzcyBpbmZpbml0ZTtcbn1cblxuI2FjdGl2ZUNoYXRzIHtcbiAgICBsZWZ0OiA5MCU7XG4gICAgbWF4LWhlaWdodDogMzIwcHg7XG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICAgIC8qIGFuaW1hdGlvbjogICAqL1xufVxuXG5cblxuI2Nvbm5lY3Qge1xuICAgIGFuaW1hdGlvbjogcHVsc2F0ZSAzcyBpbmZpbml0ZTtcbn1cblxuI2xpbmtUb1NoYXJlIHtcbiAgICBhbmltYXRpb246IGRpc3BsYXlMaW5rIDAuNzVzIGZvcndhcmRzIGVhc2Utb3V0O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuQGtleWZyYW1lcyBkaXNwbGF5TGluayB7XG4gICAgMCV7XG4gICAgICAgIGxlZnQ6IC00NSU7XG4gICAgfVxuICAgIDEwMCV7XG4gICAgICAgIGxlZnQ6IDIlO1xuICAgIH1cbn1cblxuXG4jY29ubmVjdDpob3ZlciwgI2NoYXRSb29tOmhvdmVye1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNiNWI1Yjc7XG4gICAgY29sb3I6ICMyNTI5Mzg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5cbkBrZXlmcmFtZXMgcHVsc2F0ZSB7XG4gICAgMCUge1xuICAgICAgICBib3gtc2hhZG93OiBub25lO1xuICAgIH1cbiAgICA1MCUge1xuICAgICAgICBib3gtc2hhZG93OiAwcHggMHB4IDUwcHggMzBweCBncmV5O1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/hangman/hangman.component.html":
/*!************************************************!*\
  !*** ./src/app/hangman/hangman.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class = 'title'>Hangman</div>\n<div id = 'guesses'>{{hangman.guessesRemaining}}</div>\n<div class = 'hangmanContainer'>\n  <div class = 'underline' *ngFor = 'let letter of hangman.secretWordLetters'>{{letter.placeholder}}</div>\n  \n  \n  <div *ngFor = 'let row of hangman.alphabetDict'>\n\n    <div \n      *ngFor = 'let dict of row'\n      [ngClass] = \"{'clicked' : dict.clicked}\"\n      (click) = 'selectLetter(dict.letter)' \n      class = 'keyboard' \n      >{{dict.letter}}</div>\n    </div>\n\n  <button (click) = 'newGame()' id = 'new'>New Puzzle</button>\n  \n</div>\n\n<div *ngIf = '!clickedOnPlayMulti' (click) = 'displayLinkToShare()' id = 'connect'>Play Multiplayer!</div>\n\n<div *ngIf = 'clickedOnPlayMulti' id = 'linkToShare'>\n  <h3>Share this link with a friend to play together!</h3>\n  <h4>ben-bauer.net</h4>\n  <button id = 'done' (click) = 'hideLinkDiv()'>Done</button>\n</div>\n\n<div (click) = 'displayActiveChats()' id = 'chatRoom' *ngIf = '!chatsActivated'>Group Chat</div>\n<div *ngIf = 'chatsActivated' id = 'activeChats'>\n  <h4>You: hey! What letter should I guess next?</h4>\n  <h4>You: hey!</h4>\n  <h4>You: hey!</h4>\n  <h4>You: hey!</h4>\n  <h4>You: hey!</h4>\n  <h4>You: hey!</h4>\n  <h4>You: hey!</h4>\n  <h4>You: hey!</h4>\n</div>"

/***/ }),

/***/ "./src/app/hangman/hangman.component.ts":
/*!**********************************************!*\
  !*** ./src/app/hangman/hangman.component.ts ***!
  \**********************************************/
/*! exports provided: HangmanComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HangmanComponent", function() { return HangmanComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _hangman__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hangman */ "./src/app/hangman/hangman.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");




var HangmanComponent = /** @class */ (function () {
    function HangmanComponent(_titleService) {
        this._titleService = _titleService;
        this.clickedOnPlayMulti = false;
        this.chatsActivated = false;
        this.hangman = new _hangman__WEBPACK_IMPORTED_MODULE_2__["Hangman"]();
        this.setTitle();
    }
    HangmanComponent.prototype.ngOnInit = function () {
    };
    HangmanComponent.prototype.setTitle = function () {
        this._titleService.setTitle("Hangman");
    };
    HangmanComponent.prototype.selectLetter = function (letter) {
        var letterObj = this.hangman.findLetterInDict(letter, this.hangman.alphabetDict);
        if (!letterObj.clicked) {
            this.hangman.selectLetter(letter);
        }
    };
    HangmanComponent.prototype.newGame = function () {
        this.hangman = new _hangman__WEBPACK_IMPORTED_MODULE_2__["Hangman"]();
    };
    HangmanComponent.prototype.displayLinkToShare = function () {
        this.clickedOnPlayMulti = true;
    };
    HangmanComponent.prototype.hideLinkDiv = function () {
        this.clickedOnPlayMulti = false;
    };
    HangmanComponent.prototype.displayActiveChats = function () {
        this.chatsActivated = true;
    };
    HangmanComponent.prototype.hideActiveChats = function () {
        this.chatsActivated = false;
    };
    HangmanComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-hangman',
            template: __webpack_require__(/*! ./hangman.component.html */ "./src/app/hangman/hangman.component.html"),
            styles: [__webpack_require__(/*! ./hangman.component.css */ "./src/app/hangman/hangman.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"]])
    ], HangmanComponent);
    return HangmanComponent;
}());



/***/ }),

/***/ "./src/app/hangman/hangman.ts":
/*!************************************!*\
  !*** ./src/app/hangman/hangman.ts ***!
  \************************************/
/*! exports provided: Hangman */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Hangman", function() { return Hangman; });
var Hangman = /** @class */ (function () {
    function Hangman() {
        this.alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        this.correctGuesses = [];
        this.alphabetDict = [[], []];
        this.winner = false;
        this.loser = false;
        this.secretWordLetters = [];
        this.guessesRemaining = 5;
        this.readTextFile('./assets/words.txt');
    }
    Hangman.prototype.readTextFile = function (file) {
        var _this = this;
        var rawFile = new XMLHttpRequest();
        rawFile.open("GET", file, false);
        rawFile.onreadystatechange = function () {
            if (rawFile.readyState === 4) {
                if (rawFile.status === 200 || rawFile.status == 0) {
                    var rawWords = rawFile.responseText;
                    _this.allWords = rawWords.split(' ');
                    var idx = Math.floor(Math.random() * (_this.allWords.length - 1));
                    _this.wordToGuess = _this.allWords[idx];
                    _this.createAlphabetDict();
                    _this.createSecretWordArray();
                }
            }
        };
        rawFile.send(null);
    };
    Hangman.prototype.createSecretWordArray = function () {
        for (var i = 0; i < this.wordToGuess.length; i++) {
            var secretLetter = this.wordToGuess[i].toUpperCase();
            this.secretWordLetters.push({ letter: secretLetter, placeholder: '_' });
            var letterObj = this.findLetterInDict(secretLetter, this.alphabetDict);
            letterObj.isInSecretWord = true;
        }
    };
    Hangman.prototype.createAlphabetDict = function () {
        for (var i = 0; i < this.alphabet.length; i++) {
            var letterFromAlphabet = this.alphabet[i];
            if (i < 13) {
                this.alphabetDict[0].push({ letter: letterFromAlphabet, isInSecretWord: false, clicked: false });
            }
            else {
                this.alphabetDict[1].push({ letter: letterFromAlphabet, isInSecretWord: false, clicked: false });
            }
        }
    };
    Hangman.prototype.selectLetter = function (input) {
        var correctGuess = false;
        var letterObj = this.findLetterInDict(input, this.alphabetDict);
        letterObj.clicked = true;
        for (var i = 0; i < this.secretWordLetters.length; i++) {
            var secretLetterObj = this.secretWordLetters[i];
            if (secretLetterObj.letter == input) {
                secretLetterObj.placeholder = input.toLowerCase();
                this.correctGuesses.push(input);
                if (this.correctGuesses.length == this.secretWordLetters.length) {
                    this.winner = true;
                    alert('You won!');
                }
                correctGuess = true;
            }
        }
        if (!correctGuess) {
            this.guessesRemaining--;
        }
        if (this.guessesRemaining == 0 && this.correctGuesses.length != this.secretWordLetters.length && !this.winner) {
            alert('You lost. The correct answer was: ' + this.wordToGuess);
        }
    };
    Hangman.prototype.findLetterInDict = function (input, dict) {
        for (var i = 0; i < dict.length; i++) {
            for (var j = 0; j < dict[i].length; j++) {
                if (dict[i][j].letter == input) {
                    return dict[i][j];
                }
            }
        }
    };
    return Hangman;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/bbauer/Desktop/hangman/public/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map