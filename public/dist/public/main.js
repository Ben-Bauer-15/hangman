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
/* harmony import */ var _stats_stats_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./stats/stats.component */ "./src/app/stats/stats.component.ts");





var routes = [
    { path: '', component: _hangman_hangman_component__WEBPACK_IMPORTED_MODULE_3__["HangmanComponent"] },
    { path: 'room/:id', component: _hangman_hangman_component__WEBPACK_IMPORTED_MODULE_3__["HangmanComponent"] },
    { path: 'room/:id/:name', component: _hangman_hangman_component__WEBPACK_IMPORTED_MODULE_3__["HangmanComponent"] },
    { path: 'data', component: _stats_stats_component__WEBPACK_IMPORTED_MODULE_4__["StatsComponent"] },
    { path: 'hangman/:name', component: _hangman_hangman_component__WEBPACK_IMPORTED_MODULE_3__["HangmanComponent"] }
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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./welcome/welcome.component */ "./src/app/welcome/welcome.component.ts");
/* harmony import */ var _stats_stats_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./stats/stats.component */ "./src/app/stats/stats.component.ts");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ng5_slider__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng5-slider */ "./node_modules/ng5-slider/esm5/ng5-slider.js");












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _hangman_hangman_component__WEBPACK_IMPORTED_MODULE_5__["HangmanComponent"],
                _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_7__["WelcomeComponent"],
                _stats_stats_component__WEBPACK_IMPORTED_MODULE_8__["StatsComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
                ng5_slider__WEBPACK_IMPORTED_MODULE_11__["Ng5SliderModule"]
            ],
            providers: [_http_service__WEBPACK_IMPORTED_MODULE_9__["HttpService"]],
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

module.exports = ".title {\n    text-align: center;\n    font-size: 6em;\n    margin-top: 3%;\n    font-style: italic;\n}\n.underline{\n    margin-top: 0%;\n    font-size: 7em;\n    margin-bottom: 3%;\n    margin-right: 3%;\n    margin-top: -1%;\n    color: #f2b362;\n    margin-right: 1%;\n}\n.hangmanContainer{\n    text-align: center;\n}\n#closeChat{\n    position: fixed;\n    left: 92%;\n    top: 4%;\n    -webkit-animation: displayClose 0.4s forwards;\n    animation: displayClose 0.4s forwards;\n}\n@-webkit-keyframes displayClose{\n    0%{\n        left: 100%;\n    }\n    90%{\n        left: 89%;\n    }\n    100%{\n        left: 92%;\n    }\n}\n@keyframes displayClose{\n    0%{\n        left: 100%;\n    }\n    90%{\n        left: 89%;\n    }\n    100%{\n        left: 92%;\n    }\n}\n#guesses{\n    text-align: center;\n    font-size: 4em;\n    margin-top: 2%;\n}\n#new, #done, .newChat button, .dataBtn, #closeChat{\n    color: white;\n    width: 71%;\n    font-style: italic;\n    cursor: pointer;\n    font-size: 4.5rem;\n    font-family: inherit;\n    background-color: #337ab7;\n    border-color: #2e6da4;\n    border-radius: 5px;\n}\n.dataBtn {\n    font-size: 1rem;\n    width: 6%;\n    position: absolute;\n    top: 625px;\n    left: 28px;\n    padding: 5px 5px 5px 5px;\n}\n#done {\n    font-size: 2rem;\n    width: 25%;\n}\n#new:hover, #done:hover, .newChat button:hover, .dataBtn:hover {\n    background-color: #24639a;\n}\n.underline, .keyboard {\n    display: inline-block;\n    vertical-align: top;\n    \n}\n.keyboard{\n    font-style: italic;\n    box-sizing: border-box;\n    margin-top: 0;\n    border: 1px solid gray;\n    border-radius: 5px;\n    width: 5%;\n    font-size: 3em;\n    padding: 7px;\n    margin-right: 5px;\n    margin-bottom: 1%;\n}\n.keyboard:hover {\n    background-color: #677077;\n    cursor: pointer;\n}\n.clicked {\n    background-color: #677077;\n}\n#connect, #linkToShare, #chatRoom, #activeChats, #speech, .speechInfo {\n    padding: 7px;\n    border: 1px solid gray;\n    position: absolute;\n    left: 1%;\n    font-size: 1.2em;\n    box-sizing: border-box;\n    border-radius: 5px;\n    top: 2%;\n}\n#linkToShare h4{\n    font-size: 1rem;\n}\n.speechInfo{\n    top: 30%;\n    left: 0;\n    right: 0;\n    text-align: center;\n    position: absolute;\n    width: 500px;\n    margin-left: auto;\n    margin-right: auto;\n    box-shadow: 0px 0px 600px 200px black;\n    background-color: #292844;\n    -webkit-animation: fadeout 7s forwards;\n            animation: fadeout 7s forwards;\n}\n@-webkit-keyframes fadeout{\n    0%{\n        opacity: 1;\n    }\n    90%{\n        opacity: 0.9;\n    }\n    100%{\n        opacity: 0;\n        display: none;\n    }\n}\n@keyframes fadeout{\n    0%{\n        opacity: 1;\n    }\n    90%{\n        opacity: 0.9;\n    }\n    100%{\n        opacity: 0;\n        display: none;\n    }\n}\n#speech{\n    margin-left: auto;\n    margin-right: auto;\n    top: 2%;\n    left: 0;\n    right: 0;\n    width: 190px;\n    cursor: pointer;\n}\n#chatRoom {\n    left: 90%;\n}\n#activeChats {\n    left: 78%;\n    height: 320px;\n    width: 19%;\n    padding: 0;\n    overflow-y: scroll;\n    -webkit-animation: displayChats 0.4s forwards;\n    animation: displayChats 0.4s forwards;\n}\n#activeChats h4 {\n    margin-left: 7px;\n    margin-top: 0;\n    margin-bottom: 40px;\n}\n@-webkit-keyframes displayChats{\n    0%{\n        left: 100%;\n    }\n    90%{\n        left: 75%;\n    }\n    100%{\n        left: 78%;\n    }\n}\n@keyframes displayChats{\n    0%{\n        left: 100%;\n    }\n    90%{\n        left: 75%;\n    }\n    100%{\n        left: 78%;\n    }\n}\n#linkToShare {\n    -webkit-animation: displayLink 0.4s forwards ease-out;\n            animation: displayLink 0.4s forwards ease-out;\n    text-align: center;\n    width: 493px;\n}\n@-webkit-keyframes displayLink {\n    0%{\n        left: -45%;\n    }\n    90%{\n        left: 4%;\n    }\n    100%{\n        left: 1%;\n    }\n}\n@keyframes displayLink {\n    0%{\n        left: -45%;\n    }\n    90%{\n        left: 4%;\n    }\n    100%{\n        left: 1%;\n    }\n}\n#connect:hover, #chatRoom:hover, #speech:hover{\n    background-color: #b5b5b7;\n    color: #252938;\n    cursor: pointer;\n}\n.newChat {\n    text-align: center;\n    height: 11%;\n    background-color: #5d7394;\n    border-top: 1px solid gray;\n    position: -webkit-sticky;\n    position: sticky;\n    top: 89%;\n}\n.newChat input {\n    margin-right: 20px;\n    margin-top: 3px;\n    height: 55%;\n    border-radius: 5px;\n}\n.newChat button, #closeChat {\n    width: 55px;\n    font-size: 13px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGFuZ21hbi9oYW5nbWFuLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsY0FBYztJQUNkLGNBQWM7SUFDZCxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGNBQWM7SUFDZCxjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsY0FBYztJQUNkLGdCQUFnQjtBQUNwQjtBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBRUE7SUFDSSxlQUFlO0lBQ2YsU0FBUztJQUNULE9BQU87SUFDUCw2Q0FBNkM7SUFDN0MscUNBQXFDO0FBQ3pDO0FBRUE7SUFDSTtRQUNJLFVBQVU7SUFDZDtJQUNBO1FBQ0ksU0FBUztJQUNiO0lBQ0E7UUFDSSxTQUFTO0lBQ2I7QUFDSjtBQVZBO0lBQ0k7UUFDSSxVQUFVO0lBQ2Q7SUFDQTtRQUNJLFNBQVM7SUFDYjtJQUNBO1FBQ0ksU0FBUztJQUNiO0FBQ0o7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsY0FBYztBQUNsQjtBQUlBO0lBQ0ksWUFBWTtJQUNaLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixvQkFBb0I7SUFDcEIseUJBQXlCO0lBQ3pCLHFCQUFxQjtJQUNyQixrQkFBa0I7QUFDdEI7QUFFQTtJQUNJLGVBQWU7SUFDZixTQUFTO0lBQ1Qsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixVQUFVO0lBQ1Ysd0JBQXdCO0FBQzVCO0FBRUE7SUFDSSxlQUFlO0lBQ2YsVUFBVTtBQUNkO0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixtQkFBbUI7O0FBRXZCO0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsc0JBQXNCO0lBQ3RCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxjQUFjO0lBQ2QsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixpQkFBaUI7QUFDckI7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixlQUFlO0FBQ25CO0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7QUFFQTtJQUNJLFlBQVk7SUFDWixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixnQkFBZ0I7SUFDaEIsc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixPQUFPO0FBQ1g7QUFFQTtJQUNJLGVBQWU7QUFDbkI7QUFFQTtJQUNJLFFBQVE7SUFDUixPQUFPO0lBQ1AsUUFBUTtJQUNSLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIscUNBQXFDO0lBQ3JDLHlCQUF5QjtJQUN6QixzQ0FBOEI7WUFBOUIsOEJBQThCO0FBQ2xDO0FBRUE7SUFDSTtRQUNJLFVBQVU7SUFDZDtJQUNBO1FBQ0ksWUFBWTtJQUNoQjtJQUNBO1FBQ0ksVUFBVTtRQUNWLGFBQWE7SUFDakI7QUFDSjtBQVhBO0lBQ0k7UUFDSSxVQUFVO0lBQ2Q7SUFDQTtRQUNJLFlBQVk7SUFDaEI7SUFDQTtRQUNJLFVBQVU7UUFDVixhQUFhO0lBQ2pCO0FBQ0o7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsT0FBTztJQUNQLE9BQU87SUFDUCxRQUFRO0lBQ1IsWUFBWTtJQUNaLGVBQWU7QUFDbkI7QUFFQTtJQUNJLFNBQVM7QUFDYjtBQUVBO0lBQ0ksU0FBUztJQUNULGFBQWE7SUFDYixVQUFVO0lBQ1YsVUFBVTtJQUNWLGtCQUFrQjtJQUNsQiw2Q0FBNkM7SUFDN0MscUNBQXFDO0FBQ3pDO0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLG1CQUFtQjtBQUN2QjtBQUVBO0lBQ0k7UUFDSSxVQUFVO0lBQ2Q7SUFDQTtRQUNJLFNBQVM7SUFDYjtJQUNBO1FBQ0ksU0FBUztJQUNiO0FBQ0o7QUFWQTtJQUNJO1FBQ0ksVUFBVTtJQUNkO0lBQ0E7UUFDSSxTQUFTO0lBQ2I7SUFDQTtRQUNJLFNBQVM7SUFDYjtBQUNKO0FBR0E7SUFDSSxxREFBNkM7WUFBN0MsNkNBQTZDO0lBQzdDLGtCQUFrQjtJQUNsQixZQUFZO0FBQ2hCO0FBRUE7SUFDSTtRQUNJLFVBQVU7SUFDZDtJQUNBO1FBQ0ksUUFBUTtJQUNaO0lBQ0E7UUFDSSxRQUFRO0lBQ1o7QUFDSjtBQVZBO0lBQ0k7UUFDSSxVQUFVO0lBQ2Q7SUFDQTtRQUNJLFFBQVE7SUFDWjtJQUNBO1FBQ0ksUUFBUTtJQUNaO0FBQ0o7QUFHQTtJQUNJLHlCQUF5QjtJQUN6QixjQUFjO0lBQ2QsZUFBZTtBQUNuQjtBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCx5QkFBeUI7SUFDekIsMEJBQTBCO0lBQzFCLHdCQUF3QjtJQUN4QixnQkFBZ0I7SUFDaEIsUUFBUTtBQUNaO0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLFdBQVc7SUFDWCxrQkFBa0I7QUFDdEI7QUFFQTtJQUNJLFdBQVc7SUFDWCxlQUFlO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvaGFuZ21hbi9oYW5nbWFuLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGl0bGUge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDZlbTtcbiAgICBtYXJnaW4tdG9wOiAzJTtcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XG59XG4udW5kZXJsaW5le1xuICAgIG1hcmdpbi10b3A6IDAlO1xuICAgIGZvbnQtc2l6ZTogN2VtO1xuICAgIG1hcmdpbi1ib3R0b206IDMlO1xuICAgIG1hcmdpbi1yaWdodDogMyU7XG4gICAgbWFyZ2luLXRvcDogLTElO1xuICAgIGNvbG9yOiAjZjJiMzYyO1xuICAgIG1hcmdpbi1yaWdodDogMSU7XG59XG5cbi5oYW5nbWFuQ29udGFpbmVye1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuI2Nsb3NlQ2hhdHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgbGVmdDogOTIlO1xuICAgIHRvcDogNCU7XG4gICAgLXdlYmtpdC1hbmltYXRpb246IGRpc3BsYXlDbG9zZSAwLjRzIGZvcndhcmRzO1xuICAgIGFuaW1hdGlvbjogZGlzcGxheUNsb3NlIDAuNHMgZm9yd2FyZHM7XG59XG5cbkBrZXlmcmFtZXMgZGlzcGxheUNsb3Nle1xuICAgIDAle1xuICAgICAgICBsZWZ0OiAxMDAlO1xuICAgIH1cbiAgICA5MCV7XG4gICAgICAgIGxlZnQ6IDg5JTtcbiAgICB9XG4gICAgMTAwJXtcbiAgICAgICAgbGVmdDogOTIlO1xuICAgIH1cbn1cblxuI2d1ZXNzZXN7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogNGVtO1xuICAgIG1hcmdpbi10b3A6IDIlO1xufVxuXG5cblxuI25ldywgI2RvbmUsIC5uZXdDaGF0IGJ1dHRvbiwgLmRhdGFCdG4sICNjbG9zZUNoYXR7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHdpZHRoOiA3MSU7XG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBmb250LXNpemU6IDQuNXJlbTtcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzM3YWI3O1xuICAgIGJvcmRlci1jb2xvcjogIzJlNmRhNDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5kYXRhQnRuIHtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgd2lkdGg6IDYlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDYyNXB4O1xuICAgIGxlZnQ6IDI4cHg7XG4gICAgcGFkZGluZzogNXB4IDVweCA1cHggNXB4O1xufVxuXG4jZG9uZSB7XG4gICAgZm9udC1zaXplOiAycmVtO1xuICAgIHdpZHRoOiAyNSU7XG59XG5cbiNuZXc6aG92ZXIsICNkb25lOmhvdmVyLCAubmV3Q2hhdCBidXR0b246aG92ZXIsIC5kYXRhQnRuOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjQ2MzlhO1xufVxuXG4udW5kZXJsaW5lLCAua2V5Ym9hcmQge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICAgIFxufVxuXG4ua2V5Ym9hcmR7XG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgbWFyZ2luLXRvcDogMDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBncmF5O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICB3aWR0aDogNSU7XG4gICAgZm9udC1zaXplOiAzZW07XG4gICAgcGFkZGluZzogN3B4O1xuICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICAgIG1hcmdpbi1ib3R0b206IDElO1xufVxuXG4ua2V5Ym9hcmQ6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM2NzcwNzc7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uY2xpY2tlZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzY3NzA3Nztcbn1cblxuI2Nvbm5lY3QsICNsaW5rVG9TaGFyZSwgI2NoYXRSb29tLCAjYWN0aXZlQ2hhdHMsICNzcGVlY2gsIC5zcGVlY2hJbmZvIHtcbiAgICBwYWRkaW5nOiA3cHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgZ3JheTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMSU7XG4gICAgZm9udC1zaXplOiAxLjJlbTtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICB0b3A6IDIlO1xufVxuXG4jbGlua1RvU2hhcmUgaDR7XG4gICAgZm9udC1zaXplOiAxcmVtO1xufVxuXG4uc3BlZWNoSW5mb3tcbiAgICB0b3A6IDMwJTtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDUwMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDYwMHB4IDIwMHB4IGJsYWNrO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyOTI4NDQ7XG4gICAgYW5pbWF0aW9uOiBmYWRlb3V0IDdzIGZvcndhcmRzO1xufVxuXG5Aa2V5ZnJhbWVzIGZhZGVvdXR7XG4gICAgMCV7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxuICAgIDkwJXtcbiAgICAgICAgb3BhY2l0eTogMC45O1xuICAgIH1cbiAgICAxMDAle1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbn1cblxuI3NwZWVjaHtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgdG9wOiAyJTtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIHdpZHRoOiAxOTBweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbiNjaGF0Um9vbSB7XG4gICAgbGVmdDogOTAlO1xufVxuXG4jYWN0aXZlQ2hhdHMge1xuICAgIGxlZnQ6IDc4JTtcbiAgICBoZWlnaHQ6IDMyMHB4O1xuICAgIHdpZHRoOiAxOSU7XG4gICAgcGFkZGluZzogMDtcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gICAgLXdlYmtpdC1hbmltYXRpb246IGRpc3BsYXlDaGF0cyAwLjRzIGZvcndhcmRzO1xuICAgIGFuaW1hdGlvbjogZGlzcGxheUNoYXRzIDAuNHMgZm9yd2FyZHM7XG59XG5cbiNhY3RpdmVDaGF0cyBoNCB7XG4gICAgbWFyZ2luLWxlZnQ6IDdweDtcbiAgICBtYXJnaW4tdG9wOiAwO1xuICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XG59XG5cbkBrZXlmcmFtZXMgZGlzcGxheUNoYXRze1xuICAgIDAle1xuICAgICAgICBsZWZ0OiAxMDAlO1xuICAgIH1cbiAgICA5MCV7XG4gICAgICAgIGxlZnQ6IDc1JTtcbiAgICB9XG4gICAgMTAwJXtcbiAgICAgICAgbGVmdDogNzglO1xuICAgIH1cbn1cblxuXG4jbGlua1RvU2hhcmUge1xuICAgIGFuaW1hdGlvbjogZGlzcGxheUxpbmsgMC40cyBmb3J3YXJkcyBlYXNlLW91dDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgd2lkdGg6IDQ5M3B4O1xufVxuXG5Aa2V5ZnJhbWVzIGRpc3BsYXlMaW5rIHtcbiAgICAwJXtcbiAgICAgICAgbGVmdDogLTQ1JTtcbiAgICB9XG4gICAgOTAle1xuICAgICAgICBsZWZ0OiA0JTtcbiAgICB9XG4gICAgMTAwJXtcbiAgICAgICAgbGVmdDogMSU7XG4gICAgfVxufVxuXG5cbiNjb25uZWN0OmhvdmVyLCAjY2hhdFJvb206aG92ZXIsICNzcGVlY2g6aG92ZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2I1YjViNztcbiAgICBjb2xvcjogIzI1MjkzODtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5uZXdDaGF0IHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgaGVpZ2h0OiAxMSU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzVkNzM5NDtcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgZ3JheTtcbiAgICBwb3NpdGlvbjogLXdlYmtpdC1zdGlja3k7XG4gICAgcG9zaXRpb246IHN0aWNreTtcbiAgICB0b3A6IDg5JTtcbn1cblxuLm5ld0NoYXQgaW5wdXQge1xuICAgIG1hcmdpbi1yaWdodDogMjBweDtcbiAgICBtYXJnaW4tdG9wOiAzcHg7XG4gICAgaGVpZ2h0OiA1NSU7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4ubmV3Q2hhdCBidXR0b24sICNjbG9zZUNoYXQge1xuICAgIHdpZHRoOiA1NXB4O1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/hangman/hangman.component.html":
/*!************************************************!*\
  !*** ./src/app/hangman/hangman.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class = 'title'>Hangman</div>\n<div id = 'guesses'>{{gameBoard.guessesRemaining}}</div>\n<div class = 'hangmanContainer'>\n  <div class = 'underline' *ngFor = 'let letter of gameBoard.secretWordLetters'>{{letter.placeholder}}</div>\n  \n  \n  <div *ngFor = 'let row of gameBoard.alphabetDict'>\n\n    <div \n      *ngFor = 'let dict of row'\n      [ngClass] = \"{'clicked' : dict.clicked}\"\n      (click) = 'selectLetter(dict.letter)' \n      class = 'keyboard' \n      >{{dict.letter}}</div>\n    </div>\n\n    <button (click) = 'newGame()' id = 'new'>New Puzzle</button>\n    \n  </div>\n  \n  <div *ngIf = '!clickedOnPlayMulti' (click) = 'displayLinkToShare()' id = 'connect'>Play Multiplayer!</div>\n  \n  <div *ngIf = 'clickedOnPlayMulti' id = 'linkToShare'>\n    <h3>Share this link with your friends to play together!</h3>\n    <h4>{{linkToShare}}</h4>\n    <button id = 'done' (click) = 'hideLinkDiv()'>Done</button>\n  </div>\n  \n  <div (click) = 'displayActiveChats()' id = 'chatRoom' *ngIf = '!chatsActivated'>Group Chat</div>\n  <div *ngIf = 'chatsActivated' id = 'activeChats' #scroll [scrollTop] = \"scroll.scrollHeight\">\n    <button (click) = 'hideActiveChats()' id = 'closeChat'>Close</button>\n    <div class = 'newChat'>\n      <input type = 'text' placeholder = 'New Message' name = 'newMsg' [(ngModel)] = 'newMsg'>\n      <button (click) = 'sendMsg()'>Send</button>\n    </div>\n    <h4 *ngFor = 'let msg of conversation'>{{msg.name}}{{msg.msg}}</h4>\n  </div>\n  \n<button class = 'dataBtn' [routerLink] = \"['/data']\">Game Statistics</button>\n  \n<app-welcome *ngIf = 'welcomeVisible'></app-welcome>"

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
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../app.component */ "./src/app/app.component.ts");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");








var HangmanComponent = /** @class */ (function () {
    function HangmanComponent(_titleService, _route, _component, _http) {
        this._titleService = _titleService;
        this._route = _route;
        this._component = _component;
        this._http = _http;
        this.clickedOnPlayMulti = false;
        this.chatsActivated = false;
        this.newMsg = '';
        this.conversation = [];
        this.speechClicked = false;
        this.setTitle();
        if (this._component.name) {
            this.welcomeVisible = false;
            this.name = this._component.name;
        }
        else {
            this.welcomeVisible = true;
        }
    }
    HangmanComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.hangman = new _hangman__WEBPACK_IMPORTED_MODULE_2__["Hangman"]();
        this.gameBoard = this.hangman.gameBoard;
        this._route.params.subscribe(function (params) {
            if (params['id']) {
                if (params['name']) {
                    _this._component.name = params['name'];
                    _this.name = _this._component.name;
                    _this.welcomeVisible = false;
                }
                _this.roomID = params['id'];
                _this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_4__();
                _this.socket.on('welcome', function (data) {
                    _this.socket.emit('joinRoom', { roomID: _this.roomID });
                });
                _this.socket.on('clicked', function (data) {
                    if (data.game.winner == true) {
                        alert('You won!');
                    }
                    else if (data.game.loser == true) {
                        alert('You lost. The correct answer was: ' + _this.gameBoard.wordToGuess);
                    }
                    else {
                        _this.gameBoard = data.game;
                    }
                });
                _this.socket.on('currentGameBoard', function (data) {
                    _this.gameBoard = data.game;
                    _this.conversation = data.messages;
                });
                _this.socket.on('newMsg', function (data) {
                    _this.conversation.push({ name: data.name, msg: data.msg });
                });
            }
            else {
                if (params['name']) {
                    _this._component.name = params['name'];
                    _this.name = params['name'];
                    _this.welcomeVisible = false;
                }
                else if (_this._component.name) {
                    _this.name = _this._component.name;
                    _this.welcomeVisible = false;
                }
                _this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_4__();
                _this.socket.on('welcome', function (data) {
                    _this.roomID = data.roomID;
                    _this.address = data.address;
                    _this.linkToShare = "http://hangman.ben-bauer.net/room/" + _this.roomID + "/guest";
                    _this.socket.emit('firstUser', { roomID: _this.roomID });
                });
                _this.socket.on('otherUser', function (data) {
                    _this.socket.emit('currentGameBoard', { game: _this.gameBoard, roomID: _this.roomID, messages: _this.conversation });
                });
                _this.socket.on('clicked', function (data) {
                    if (data.game.winner == true) {
                        alert('You won!');
                    }
                    else if (data.game.loser == true) {
                        alert('You lost. The correct answer was: ' + _this.gameBoard.wordToGuess);
                    }
                    else {
                        _this.gameBoard = data.game;
                    }
                });
                _this.socket.on('newMsg', function (data) {
                    _this.conversation.push({ name: data.name, msg: data.msg });
                });
            }
        });
    };
    HangmanComponent.prototype.setTitle = function () {
        this._titleService.setTitle("Hangman");
    };
    HangmanComponent.prototype.selectLetter = function (letter) {
        var letterObj = this.hangman.findLetterInDict(letter, this.gameBoard.alphabetDict);
        if (!letterObj.clicked && !this.welcomeVisible) {
            this.gameBoard = this.hangman.selectLetter(letter, this.gameBoard);
            if (this.gameBoard.loser == true) {
                this.socket.emit('updateData');
                var obs = this._http.newGame({
                    length: this.gameBoard.wordToGuess.length,
                    word: this.gameBoard.wordToGuess,
                    completed: false
                });
                obs.subscribe(function (data) {
                });
                this.socket.emit('clicked', { roomID: this.roomID, game: this.gameBoard });
                alert('You lost. The correct answer was: ' + this.gameBoard.wordToGuess);
            }
            else if (this.gameBoard.winner == true) {
                this.socket.emit('updateData');
                var obs = this._http.newGame({
                    length: this.gameBoard.wordToGuess.length,
                    word: this.gameBoard.wordToGuess,
                    completed: true
                });
                obs.subscribe(function (data) {
                });
                this.socket.emit('clicked', { roomID: this.roomID, game: this.gameBoard });
                alert('You won!');
            }
            this.socket.emit('clicked', { roomID: this.roomID, game: this.gameBoard });
        }
    };
    HangmanComponent.prototype.newGame = function () {
        this.hangman = new _hangman__WEBPACK_IMPORTED_MODULE_2__["Hangman"]();
        this.gameBoard = this.hangman.gameBoard;
        this.socket.emit('clicked', { roomID: this.roomID, game: this.gameBoard });
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
    HangmanComponent.prototype.sendMsg = function () {
        this.conversation.push({ name: this.name, msg: ": " + this.newMsg });
        this.socket.emit('newMsg', { roomID: this.roomID, msg: ": " + this.newMsg, name: this.name });
        this.newMsg = '';
    };
    HangmanComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-hangman',
            template: __webpack_require__(/*! ./hangman.component.html */ "./src/app/hangman/hangman.component.html"),
            styles: [__webpack_require__(/*! ./hangman.component.css */ "./src/app/hangman/hangman.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
            _http_service__WEBPACK_IMPORTED_MODULE_7__["HttpService"]])
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
        //this object of critical info will be sent back and forth over socket connections and used for HTML rendering
        this.gameBoard = { guessesRemaining: 5,
            wordToGuess: undefined,
            correctGuesses: [],
            alphabetDict: [[], []],
            winner: false,
            loser: false,
            secretWordLetters: [] };
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
                    _this.gameBoard.wordToGuess = _this.allWords[idx];
                    _this.createAlphabetDict();
                    _this.createSecretWordArray();
                }
            }
        };
        rawFile.send(null);
    };
    Hangman.prototype.createSecretWordArray = function () {
        for (var i = 0; i < this.gameBoard.wordToGuess.length; i++) {
            var secretLetter = this.gameBoard.wordToGuess[i].toUpperCase();
            this.gameBoard.secretWordLetters.push({ letter: secretLetter, placeholder: '_' });
            var letterObj = this.findLetterInDict(secretLetter, this.gameBoard.alphabetDict);
            letterObj.isInSecretWord = true;
        }
    };
    Hangman.prototype.createAlphabetDict = function () {
        for (var i = 0; i < this.alphabet.length; i++) {
            var letterFromAlphabet = this.alphabet[i];
            if (i < 13) {
                this.gameBoard.alphabetDict[0].push({ letter: letterFromAlphabet, isInSecretWord: false, clicked: false });
            }
            else {
                this.gameBoard.alphabetDict[1].push({ letter: letterFromAlphabet, isInSecretWord: false, clicked: false });
            }
        }
    };
    Hangman.prototype.selectLetter = function (inputLetter, gameBoard) {
        var correctGuess = false;
        var letterObj = this.findLetterInDict(inputLetter, gameBoard.alphabetDict);
        letterObj.clicked = true;
        for (var i = 0; i < gameBoard.secretWordLetters.length; i++) {
            var secretLetterObj = gameBoard.secretWordLetters[i];
            if (secretLetterObj.letter == inputLetter) {
                secretLetterObj.placeholder = inputLetter.toLowerCase();
                gameBoard.correctGuesses.push(inputLetter);
                if (gameBoard.correctGuesses.length == gameBoard.secretWordLetters.length) {
                    gameBoard.winner = true;
                }
                correctGuess = true;
            }
        }
        if (!correctGuess) {
            gameBoard.guessesRemaining--;
        }
        if (gameBoard.guessesRemaining == 0 && gameBoard.correctGuesses.length != gameBoard.secretWordLetters.length && !gameBoard.winner) {
            gameBoard.loser = true;
        }
        return gameBoard;
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

/***/ "./src/app/http.service.ts":
/*!*********************************!*\
  !*** ./src/app/http.service.ts ***!
  \*********************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var HttpService = /** @class */ (function () {
    function HttpService(_http) {
        this._http = _http;
    }
    HttpService.prototype.allGames = function () {
        return this._http.get('/allGames');
    };
    HttpService.prototype.newGame = function (obj) {
        return this._http.post('/newGame', obj);
    };
    HttpService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], HttpService);
    return HttpService;
}());



/***/ }),

/***/ "./src/app/stats/stats.component.css":
/*!*******************************************!*\
  !*** ./src/app/stats/stats.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".barChartContainer, .pieChartContainer{\n    display: inline-block;\n    vertical-align: top;\n    width: 40%;\n}\n\n.body{\n    text-align: center;\n}\n\n.slider{\n    width: 50%;\n}\n\n#back{\n    position: absolute;\n    top: 1%;\n    left: 1%;\n    color: white;\n    width: 5%;\n    font-style: italic;\n    cursor: pointer;\n    font-size: 1.5rem;\n    font-family: inherit;\n    background-color: #337ab7;\n    border-color: #2e6da4;\n    border-radius: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3RhdHMvc3RhdHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHFCQUFxQjtJQUNyQixtQkFBbUI7SUFDbkIsVUFBVTtBQUNkOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksVUFBVTtBQUNkOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLE9BQU87SUFDUCxRQUFRO0lBQ1IsWUFBWTtJQUNaLFNBQVM7SUFDVCxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixvQkFBb0I7SUFDcEIseUJBQXlCO0lBQ3pCLHFCQUFxQjtJQUNyQixrQkFBa0I7QUFDdEIiLCJmaWxlIjoic3JjL2FwcC9zdGF0cy9zdGF0cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhckNoYXJ0Q29udGFpbmVyLCAucGllQ2hhcnRDb250YWluZXJ7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gICAgd2lkdGg6IDQwJTtcbn1cblxuLmJvZHl7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uc2xpZGVye1xuICAgIHdpZHRoOiA1MCU7XG59XG5cbiNiYWNre1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDElO1xuICAgIGxlZnQ6IDElO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB3aWR0aDogNSU7XG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzM3YWI3O1xuICAgIGJvcmRlci1jb2xvcjogIzJlNmRhNDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/stats/stats.component.html":
/*!********************************************!*\
  !*** ./src/app/stats/stats.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class = 'body'>\n    \n    <div class = 'barChartContainer'>\n        <p>Game Winning Rates (%) vs Word Length</p>\n        \n    </div>\n    <div class = 'pieChartContainer'>\n        <p>% of Total Games Played of a Given Word Length</p>\n        <p *ngIf = 'allGames'>Number of Games Played: {{allGames.length}}</p>\n        \n    </div>\n</div>\n\n<button id = 'back' [routerLink] = \"['']\">Back</button>"

/***/ }),

/***/ "./src/app/stats/stats.component.ts":
/*!******************************************!*\
  !*** ./src/app/stats/stats.component.ts ***!
  \******************************************/
/*! exports provided: StatsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatsComponent", function() { return StatsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! d3 */ "./node_modules/d3/index.js");




var StatsComponent = /** @class */ (function () {
    function StatsComponent(_http) {
        this._http = _http;
        this.wordLengths = [];
        this.percentages = [];
    }
    StatsComponent.prototype.ngOnInit = function () {
        this.getAllGames();
    };
    StatsComponent.prototype.reset = function () {
        var barChart = d3__WEBPACK_IMPORTED_MODULE_3__["select"](".barChartContainer").selectAll("*").remove();
        var pieChart = d3__WEBPACK_IMPORTED_MODULE_3__["select"](".pieChartContainer").selectAll("*").remove();
        this.getAllGames();
    };
    StatsComponent.prototype.getAllGames = function () {
        var _this = this;
        var obs = this._http.allGames();
        obs.subscribe(function (data) {
            _this.allGames = data.rawData;
            _this.completionRates = data.completionRates;
            _this.lengthsAndPercentages = data.averageLengths;
            for (var i = 0; i < _this.lengthsAndPercentages.length; i++) {
                var obj = _this.lengthsAndPercentages[i];
                _this.percentages.push(obj.percentage);
            }
            for (var i = 0; i < _this.completionRates.length; i++) {
                var item = _this.completionRates[i];
                var length = item.length;
                _this.wordLengths.push(length);
            }
            _this.renderBarChart();
            _this.renderPieChart();
        });
    };
    // 888b.    db    888b.    .d88b 8   8    db    888b. 88888 
    // 8wwwP   dPYb   8  .8    8P    8www8   dPYb   8  .8   8   
    // 8   b  dPwwYb  8wwK'    8b    8   8  dPwwYb  8wwK'   8   
    // 888P' dP    Yb 8  Yb    `Y88P 8   8 dP    Yb 8  Yb   8   
    StatsComponent.prototype.renderBarChart = function () {
        var margin = {
            top: 30,
            right: 30,
            bottom: 40,
            left: 50
        };
        var animationDuration = 700;
        var animationDelay = 70;
        var height = 500 - margin.top - margin.bottom;
        var width = 500 - margin.right - margin.left;
        var padding = 5;
        var barWidth = ((1 / this.completionRates.length) * width) - padding;
        var vScale = d3__WEBPACK_IMPORTED_MODULE_3__["scaleLinear"]()
            .domain([0, 100])
            .range([0, height]);
        var hScale = d3__WEBPACK_IMPORTED_MODULE_3__["scaleLinear"]()
            .domain([0, this.completionRates.length])
            .range([0, width]);
        var hAxisScale = d3__WEBPACK_IMPORTED_MODULE_3__["scaleLinear"]()
            .domain([this.wordLengths[0], this.wordLengths[this.wordLengths.length - 1]])
            .range([0, width - (padding * this.wordLengths.length) - (barWidth / 2) + (padding * 2)]);
        var vAxisScale = d3__WEBPACK_IMPORTED_MODULE_3__["scaleLinear"]()
            .domain([100, 0])
            .range([0, height]);
        var canvas = d3__WEBPACK_IMPORTED_MODULE_3__["select"]('.barChartContainer').append('svg')
            .attr('width', width + margin.right + margin.left)
            .attr('height', height + margin.top + margin.bottom);
        var xLabel = canvas.append('text')
            .text('Word Length')
            .attr('fill', 'white')
            .attr('x', width / 2)
            .attr('y', height + margin.bottom + margin.top - 5);
        var yLabel = canvas.append('text')
            .text('Completion Rate (%)')
            .attr('fill', 'white')
            .attr('x', -1 * ((height / 2) - margin.bottom))
            .attr('y', margin.right - 12)
            .attr('transform', 'rotate(-90)')
            .attr('text-anchor', 'end');
        var hoverLabel = d3__WEBPACK_IMPORTED_MODULE_3__["select"]('app-stats').append('div')
            .style('position', 'absolute')
            .style('border-radius', '5px')
            .style('background', 'gray')
            .style('padding', '10px')
            .style('border', '1px solid black')
            .style('opacity', '0')
            .html('hello world');
        var barChart = canvas.selectAll('rect')
            .data(this.completionRates)
            .enter()
            .append('rect')
            .attr('height', '0')
            .attr('width', function () { return barWidth; })
            .attr('fill', 'green')
            .attr('y', height + margin.top)
            .attr('x', function (d, i) { return hScale(i) + padding + margin.left; })
            .on('mouseover', function (d) {
            d3__WEBPACK_IMPORTED_MODULE_3__["selectAll"]('*').interrupt();
            d3__WEBPACK_IMPORTED_MODULE_3__["select"](this).transition()
                .attr('fill', 'lightgreen');
            hoverLabel.transition()
                .style('opacity', '1');
            hoverLabel.html(d.completionRate + " %")
                .style('left', (d3__WEBPACK_IMPORTED_MODULE_3__["event"].pageX) + 'px')
                .style('top', (d3__WEBPACK_IMPORTED_MODULE_3__["event"].pageY) + 'px');
        })
            .on('mouseleave', function () {
            d3__WEBPACK_IMPORTED_MODULE_3__["selectAll"]('*').interrupt();
            d3__WEBPACK_IMPORTED_MODULE_3__["select"](this)
                .attr('fill', 'green');
            hoverLabel.transition()
                .style('opacity', '0');
        });
        barChart.transition()
            .attr('height', function (d) {
            return vScale(d.completionRate);
        })
            .attr('y', function (d) {
            return height - vScale(d.completionRate) + margin.top;
        })
            .duration(animationDuration)
            .delay(function (d, i) {
            return i * animationDelay;
        })
            .ease(d3__WEBPACK_IMPORTED_MODULE_3__["easeElastic"]);
        var xAxis = d3__WEBPACK_IMPORTED_MODULE_3__["axisBottom"]()
            .scale(hAxisScale)
            .ticks(this.wordLengths.length);
        var yAxis = d3__WEBPACK_IMPORTED_MODULE_3__["axisLeft"]()
            .scale(vAxisScale)
            .ticks(10);
        var hGuide = canvas.append('g')
            .call(xAxis)
            .attr('transform', "translate(" + ((barWidth / 2) + padding + margin.left) + ", " + (height + margin.top + 2) + ")");
        var vGuide = canvas.append('g')
            .call(yAxis)
            .attr('transform', 'translate(' + margin.left + ', ' + margin.top + ')');
    };
    // 888b. 888 8888    .d88b 8   8    db    888b. 88888 
    // 8  .8  8  8www    8P    8www8   dPYb   8  .8   8   
    // 8wwP'  8  8       8b    8   8  dPwwYb  8wwK'   8   
    // 8     888 8888    `Y88P 8   8 dP    Yb 8  Yb   8   
    StatsComponent.prototype.renderPieChart = function () {
        var r = 250;
        var colorScale = d3__WEBPACK_IMPORTED_MODULE_3__["scaleLinear"]()
            .domain([d3__WEBPACK_IMPORTED_MODULE_3__["min"](this.percentages), d3__WEBPACK_IMPORTED_MODULE_3__["max"](this.percentages)])
            .range(['#63ffa4', '#007732']);
        var height = 500;
        var width = 500;
        var canvas = d3__WEBPACK_IMPORTED_MODULE_3__["select"]('.pieChartContainer').append('svg')
            .attr('width', width)
            .attr('height', height);
        var hoverLabel = d3__WEBPACK_IMPORTED_MODULE_3__["select"]('.pieChartContainer').append('div')
            .style('position', 'absolute')
            .style('border-radius', '5px')
            .style('background', 'gray')
            .style('padding', '10px')
            .style('border', '1px solid black')
            .style('opacity', '0');
        var group = canvas.append('g')
            .attr('width', width)
            .attr('height', height)
            .attr('transform', 'translate(250, 250)');
        var arc = d3__WEBPACK_IMPORTED_MODULE_3__["arc"]()
            .innerRadius(r - 100)
            .outerRadius(r)
            .cornerRadius(5)
            .padAngle(0.01);
        var pie = d3__WEBPACK_IMPORTED_MODULE_3__["pie"]()
            .value(function (d) {
            return d.percentage;
        });
        var arcs = group.selectAll('.arc')
            .data(pie(this.lengthsAndPercentages))
            .enter()
            .append('g')
            .attr('class', 'arc');
        var paths = arcs.append('path')
            .attr('d', arc)
            .attr('fill', function (d) { return colorScale(d.data.percentage); })
            .on('mouseover', function (d) {
            d3__WEBPACK_IMPORTED_MODULE_3__["selectAll"]('*').interrupt();
            d3__WEBPACK_IMPORTED_MODULE_3__["select"](this)
                .transition()
                .attr('fill', 'lightblue');
            hoverLabel.transition()
                .style('opacity', '1');
            hoverLabel.html("Word length: " + d.data.length + " letters, " + d.data.percentage + "% of all games")
                .style('left', (d3__WEBPACK_IMPORTED_MODULE_3__["event"].pageX) + 'px')
                .style('top', (d3__WEBPACK_IMPORTED_MODULE_3__["event"].pageY) + 'px');
        })
            .on('mouseleave', function () {
            d3__WEBPACK_IMPORTED_MODULE_3__["selectAll"]('*').interrupt();
            d3__WEBPACK_IMPORTED_MODULE_3__["select"](this)
                .attr('fill', function (d) { return colorScale(d.data.percentage); });
            hoverLabel.style('opacity', '0');
        });
        var text = arcs.append('text')
            .attr('transform', function (d) { return 'translate(' + arc.centroid(d) + ')'; })
            .text(function (d) {
            return d.data.length;
        });
    };
    StatsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-stats',
            template: __webpack_require__(/*! ./stats.component.html */ "./src/app/stats/stats.component.html"),
            styles: [__webpack_require__(/*! ./stats.component.css */ "./src/app/stats/stats.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]])
    ], StatsComponent);
    return StatsComponent;
}());



/***/ }),

/***/ "./src/app/welcome/welcome.component.css":
/*!***********************************************!*\
  !*** ./src/app/welcome/welcome.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#welcomeMsg {\n    box-shadow: 0px 0px 600px 200px black;\n    margin-right: auto;\n    right: 0;\n    left: 0;\n    height: 320px;\n    width: 29%;\n    text-align: center;\n    padding: 7px;\n    border: 1px solid gray;\n    margin-left: auto;\n    position: absolute;\n    font-size: 1.2em;\n    box-sizing: border-box;\n    background-color: #292844;\n    border-radius: 5px;\n    top: 9%;\n}\n\n#welcomeMsg input{\n    height: 34px;\n    width: 65%;\n    font-size: 20px;\n    display: block;\n    margin-bottom: 37px;\n    margin-left: auto;\n    margin-right: auto;\n}\n\nbutton {\n    color: white;\n    width: 20%;\n    font-style: italic;\n    cursor: pointer;\n    font-size: 1.5rem;\n    font-family: inherit;\n    background-color: #337ab7;\n    border-color: #2e6da4;\n    border-radius: 5px;\n}\n\nbutton:hover{\n    background-color: #24639a;\n}\n\n.error {\n    color: red;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2VsY29tZS93ZWxjb21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxxQ0FBcUM7SUFDckMsa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixPQUFPO0lBQ1AsYUFBYTtJQUNiLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLHNCQUFzQjtJQUN0QixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixzQkFBc0I7SUFDdEIseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixPQUFPO0FBQ1g7O0FBRUE7SUFDSSxZQUFZO0lBQ1osVUFBVTtJQUNWLGVBQWU7SUFDZixjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLG9CQUFvQjtJQUNwQix5QkFBeUI7SUFDekIscUJBQXFCO0lBQ3JCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLFVBQVU7QUFDZCIsImZpbGUiOiJzcmMvYXBwL3dlbGNvbWUvd2VsY29tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3dlbGNvbWVNc2cge1xuICAgIGJveC1zaGFkb3c6IDBweCAwcHggNjAwcHggMjAwcHggYmxhY2s7XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgIHJpZ2h0OiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgaGVpZ2h0OiAzMjBweDtcbiAgICB3aWR0aDogMjklO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nOiA3cHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgZ3JheTtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgZm9udC1zaXplOiAxLjJlbTtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyOTI4NDQ7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIHRvcDogOSU7XG59XG5cbiN3ZWxjb21lTXNnIGlucHV0e1xuICAgIGhlaWdodDogMzRweDtcbiAgICB3aWR0aDogNjUlO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW4tYm90dG9tOiAzN3B4O1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbn1cblxuYnV0dG9uIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgd2lkdGg6IDIwJTtcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzdhYjc7XG4gICAgYm9yZGVyLWNvbG9yOiAjMmU2ZGE0O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuYnV0dG9uOmhvdmVye1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyNDYzOWE7XG59XG5cbi5lcnJvciB7XG4gICAgY29sb3I6IHJlZDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/welcome/welcome.component.html":
/*!************************************************!*\
  !*** ./src/app/welcome/welcome.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id = 'welcomeMsg'>\n  <h4>Welcome to Hangman! Please enter your name:</h4>\n  <input type = 'text' name = 'name' [(ngModel)] = 'name'>\n  <p class = 'error' *ngIf = 'errors'>{{errors}}</p>\n  <button (click) = 'dismiss()'>Enter</button>\n</div>"

/***/ }),

/***/ "./src/app/welcome/welcome.component.ts":
/*!**********************************************!*\
  !*** ./src/app/welcome/welcome.component.ts ***!
  \**********************************************/
/*! exports provided: WelcomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomeComponent", function() { return WelcomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _hangman_hangman_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hangman/hangman.component */ "./src/app/hangman/hangman.component.ts");



var WelcomeComponent = /** @class */ (function () {
    function WelcomeComponent(_component) {
        this._component = _component;
        this.name = '';
    }
    WelcomeComponent.prototype.ngOnInit = function () {
    };
    WelcomeComponent.prototype.dismiss = function () {
        console.log(this.name);
        if (this.name != '') {
            this._component.name = this.name;
            this._component._component.name = this.name;
            this.errors = undefined;
            this._component.welcomeVisible = false;
        }
        else {
            this.errors = 'Name cannot be empty';
        }
    };
    WelcomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-welcome',
            template: __webpack_require__(/*! ./welcome.component.html */ "./src/app/welcome/welcome.component.html"),
            styles: [__webpack_require__(/*! ./welcome.component.css */ "./src/app/welcome/welcome.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_hangman_hangman_component__WEBPACK_IMPORTED_MODULE_2__["HangmanComponent"]])
    ], WelcomeComponent);
    return WelcomeComponent;
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
    production: true
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


/***/ }),

/***/ 1:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map