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
    { path: 'data', component: _stats_stats_component__WEBPACK_IMPORTED_MODULE_4__["StatsComponent"] }
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
                _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"]
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

module.exports = ".title {\n    text-align: center;\n    font-size: 6em;\n    font-style: italic;\n}\n.underline{\n    margin-top: 0%;\n    font-size: 7em;\n    margin-bottom: 3%;\n    margin-right: 3%;\n    margin-top: -1%;\n    color: #f2b362;\n    margin-right: 1%;\n}\n.hangmanContainer{\n    text-align: center;\n}\n#guesses{\n    text-align: center;\n    font-size: 4em;\n    margin-top: 2%;\n}\n#new, #done, .newChat button, .dataBtn{\n    color: white;\n    width: 71%;\n    font-style: italic;\n    cursor: pointer;\n    font-size: 4.5rem;\n    font-family: inherit;\n    background-color: #337ab7;\n    border-color: #2e6da4;\n    border-radius: 5px;\n}\n.dataBtn {\n    font-size: 1rem;\n    width: 5%;\n}\n#done {\n    font-size: 2rem;\n    width: 25%;\n}\n#new:hover, #done:hover, .newChat button:hover, .dataBtn:hover {\n    background-color: #24639a;\n}\n.underline, .keyboard {\n    display: inline-block;\n    vertical-align: top;\n    \n}\n.keyboard{\n    font-style: italic;\n    box-sizing: border-box;\n    margin-top: 0;\n    border: 1px solid gray;\n    border-radius: 5px;\n    width: 5%;\n    font-size: 3em;\n    padding: 7px;\n    margin-right: 5px;\n    margin-bottom: 1%;\n}\n.keyboard:hover {\n    background-color: #677077;\n    cursor: pointer;\n}\n.clicked {\n    background-color: #677077;\n}\n#connect, #linkToShare, #chatRoom, #activeChats {\n    padding: 7px;\n    border: 1px solid gray;\n    position: absolute;\n    left: 1%;\n    font-size: 1.2em;\n    box-sizing: border-box;\n    border-radius: 5px;\n    top: 2%;\n}\n#chatRoom {\n    left: 90%;\n    -webkit-animation: pulsate 3s infinite;\n            animation: pulsate 3s infinite;\n}\n#activeChats {\n    left: 78%;\n    height: 320px;\n    width: 19%;\n    padding: 0;\n    overflow-y: scroll;\n    -webkit-animation: displayChats 0.4s forwards;\n    animation: displayChats 0.4s forwards;\n}\n#activeChats h4 {\n    margin-left: 7px;\n    margin-top: 0;\n    margin-bottom: 40px;\n}\n@-webkit-keyframes displayChats{\n    0%{\n        left: 100%;\n    }\n    90%{\n        left: 75%;\n    }\n    100%{\n        left: 78%;\n    }\n}\n@keyframes displayChats{\n    0%{\n        left: 100%;\n    }\n    90%{\n        left: 75%;\n    }\n    100%{\n        left: 78%;\n    }\n}\n#connect {\n    -webkit-animation: pulsate 3s infinite;\n            animation: pulsate 3s infinite;\n}\n#linkToShare {\n    -webkit-animation: displayLink 0.4s forwards ease-out;\n            animation: displayLink 0.4s forwards ease-out;\n    text-align: center;\n}\n@-webkit-keyframes displayLink {\n    0%{\n        left: -45%;\n    }\n    90%{\n        left: 4%;\n    }\n    100%{\n        left: 1%;\n    }\n}\n@keyframes displayLink {\n    0%{\n        left: -45%;\n    }\n    90%{\n        left: 4%;\n    }\n    100%{\n        left: 1%;\n    }\n}\n#connect:hover, #chatRoom:hover{\n    background-color: #b5b5b7;\n    color: #252938;\n    cursor: pointer;\n}\n@-webkit-keyframes pulsate {\n    0% {\n        box-shadow: none;\n    }\n    50% {\n        box-shadow: 0px 0px 50px 30px grey;\n    }\n    100% {\n        box-shadow: none;\n    }\n}\n@keyframes pulsate {\n    0% {\n        box-shadow: none;\n    }\n    50% {\n        box-shadow: 0px 0px 50px 30px grey;\n    }\n    100% {\n        box-shadow: none;\n    }\n}\n.newChat {\n    text-align: center;\n    height: 11%;\n    background-color: #5d7394;\n    border-top: 1px solid gray;\n    position: -webkit-sticky;\n    position: sticky;\n    top: 89%;\n}\n.newChat input {\n    margin-right: 20px;\n    margin-top: 3px;\n    height: 55%;\n    border-radius: 5px;\n}\n.newChat button {\n    width: 55px;\n    font-size: 13px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGFuZ21hbi9oYW5nbWFuLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLG1CQUFtQjtDQUN0QjtBQUNEO0lBQ0ksZUFBZTtJQUNmLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsaUJBQWlCO0NBQ3BCO0FBRUQ7SUFDSSxtQkFBbUI7Q0FDdEI7QUFFRDtJQUNJLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsZUFBZTtDQUNsQjtBQUVEO0lBQ0ksYUFBYTtJQUNiLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsMEJBQTBCO0lBQzFCLHNCQUFzQjtJQUN0QixtQkFBbUI7Q0FDdEI7QUFFRDtJQUNJLGdCQUFnQjtJQUNoQixVQUFVO0NBQ2I7QUFFRDtJQUNJLGdCQUFnQjtJQUNoQixXQUFXO0NBQ2Q7QUFFRDtJQUNJLDBCQUEwQjtDQUM3QjtBQUVEO0lBQ0ksc0JBQXNCO0lBQ3RCLG9CQUFvQjs7Q0FFdkI7QUFFRDtJQUNJLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsY0FBYztJQUNkLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsVUFBVTtJQUNWLGVBQWU7SUFDZixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLGtCQUFrQjtDQUNyQjtBQUVEO0lBQ0ksMEJBQTBCO0lBQzFCLGdCQUFnQjtDQUNuQjtBQUVEO0lBQ0ksMEJBQTBCO0NBQzdCO0FBRUQ7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixTQUFTO0lBQ1QsaUJBQWlCO0lBQ2pCLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsUUFBUTtDQUNYO0FBRUQ7SUFDSSxVQUFVO0lBQ1YsdUNBQStCO1lBQS9CLCtCQUErQjtDQUNsQztBQUVEO0lBQ0ksVUFBVTtJQUNWLGNBQWM7SUFDZCxXQUFXO0lBQ1gsV0FBVztJQUNYLG1CQUFtQjtJQUNuQiw4Q0FBOEM7SUFDOUMsc0NBQXNDO0NBQ3pDO0FBRUQ7SUFDSSxpQkFBaUI7SUFDakIsY0FBYztJQUNkLG9CQUFvQjtDQUN2QjtBQUVEO0lBQ0k7UUFDSSxXQUFXO0tBQ2Q7SUFDRDtRQUNJLFVBQVU7S0FDYjtJQUNEO1FBQ0ksVUFBVTtLQUNiO0NBQ0o7QUFWRDtJQUNJO1FBQ0ksV0FBVztLQUNkO0lBQ0Q7UUFDSSxVQUFVO0tBQ2I7SUFDRDtRQUNJLFVBQVU7S0FDYjtDQUNKO0FBSUQ7SUFDSSx1Q0FBK0I7WUFBL0IsK0JBQStCO0NBQ2xDO0FBRUQ7SUFDSSxzREFBOEM7WUFBOUMsOENBQThDO0lBQzlDLG1CQUFtQjtDQUN0QjtBQUVEO0lBQ0k7UUFDSSxXQUFXO0tBQ2Q7SUFDRDtRQUNJLFNBQVM7S0FDWjtJQUNEO1FBQ0ksU0FBUztLQUNaO0NBQ0o7QUFWRDtJQUNJO1FBQ0ksV0FBVztLQUNkO0lBQ0Q7UUFDSSxTQUFTO0tBQ1o7SUFDRDtRQUNJLFNBQVM7S0FDWjtDQUNKO0FBR0Q7SUFDSSwwQkFBMEI7SUFDMUIsZUFBZTtJQUNmLGdCQUFnQjtDQUNuQjtBQUdEO0lBQ0k7UUFDSSxpQkFBaUI7S0FDcEI7SUFDRDtRQUNJLG1DQUFtQztLQUN0QztJQUNEO1FBQ0ksaUJBQWlCO0tBQ3BCO0NBQ0o7QUFWRDtJQUNJO1FBQ0ksaUJBQWlCO0tBQ3BCO0lBQ0Q7UUFDSSxtQ0FBbUM7S0FDdEM7SUFDRDtRQUNJLGlCQUFpQjtLQUNwQjtDQUNKO0FBRUQ7SUFDSSxtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLDBCQUEwQjtJQUMxQiwyQkFBMkI7SUFDM0IseUJBQXlCO0lBQ3pCLGlCQUFpQjtJQUNqQixTQUFTO0NBQ1o7QUFFRDtJQUNJLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLG1CQUFtQjtDQUN0QjtBQUVEO0lBQ0ksWUFBWTtJQUNaLGdCQUFnQjtDQUNuQiIsImZpbGUiOiJzcmMvYXBwL2hhbmdtYW4vaGFuZ21hbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRpdGxlIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiA2ZW07XG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xufVxuLnVuZGVybGluZXtcbiAgICBtYXJnaW4tdG9wOiAwJTtcbiAgICBmb250LXNpemU6IDdlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAzJTtcbiAgICBtYXJnaW4tcmlnaHQ6IDMlO1xuICAgIG1hcmdpbi10b3A6IC0xJTtcbiAgICBjb2xvcjogI2YyYjM2MjtcbiAgICBtYXJnaW4tcmlnaHQ6IDElO1xufVxuXG4uaGFuZ21hbkNvbnRhaW5lcntcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbiNndWVzc2Vze1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDRlbTtcbiAgICBtYXJnaW4tdG9wOiAyJTtcbn1cblxuI25ldywgI2RvbmUsIC5uZXdDaGF0IGJ1dHRvbiwgLmRhdGFCdG57XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHdpZHRoOiA3MSU7XG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBmb250LXNpemU6IDQuNXJlbTtcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzM3YWI3O1xuICAgIGJvcmRlci1jb2xvcjogIzJlNmRhNDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5kYXRhQnRuIHtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgd2lkdGg6IDUlO1xufVxuXG4jZG9uZSB7XG4gICAgZm9udC1zaXplOiAycmVtO1xuICAgIHdpZHRoOiAyNSU7XG59XG5cbiNuZXc6aG92ZXIsICNkb25lOmhvdmVyLCAubmV3Q2hhdCBidXR0b246aG92ZXIsIC5kYXRhQnRuOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjQ2MzlhO1xufVxuXG4udW5kZXJsaW5lLCAua2V5Ym9hcmQge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICAgIFxufVxuXG4ua2V5Ym9hcmR7XG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgbWFyZ2luLXRvcDogMDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBncmF5O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICB3aWR0aDogNSU7XG4gICAgZm9udC1zaXplOiAzZW07XG4gICAgcGFkZGluZzogN3B4O1xuICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICAgIG1hcmdpbi1ib3R0b206IDElO1xufVxuXG4ua2V5Ym9hcmQ6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM2NzcwNzc7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uY2xpY2tlZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzY3NzA3Nztcbn1cblxuI2Nvbm5lY3QsICNsaW5rVG9TaGFyZSwgI2NoYXRSb29tLCAjYWN0aXZlQ2hhdHMge1xuICAgIHBhZGRpbmc6IDdweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBncmF5O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAxJTtcbiAgICBmb250LXNpemU6IDEuMmVtO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIHRvcDogMiU7XG59XG5cbiNjaGF0Um9vbSB7XG4gICAgbGVmdDogOTAlO1xuICAgIGFuaW1hdGlvbjogcHVsc2F0ZSAzcyBpbmZpbml0ZTtcbn1cblxuI2FjdGl2ZUNoYXRzIHtcbiAgICBsZWZ0OiA3OCU7XG4gICAgaGVpZ2h0OiAzMjBweDtcbiAgICB3aWR0aDogMTklO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBkaXNwbGF5Q2hhdHMgMC40cyBmb3J3YXJkcztcbiAgICBhbmltYXRpb246IGRpc3BsYXlDaGF0cyAwLjRzIGZvcndhcmRzO1xufVxuXG4jYWN0aXZlQ2hhdHMgaDQge1xuICAgIG1hcmdpbi1sZWZ0OiA3cHg7XG4gICAgbWFyZ2luLXRvcDogMDtcbiAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xufVxuXG5Aa2V5ZnJhbWVzIGRpc3BsYXlDaGF0c3tcbiAgICAwJXtcbiAgICAgICAgbGVmdDogMTAwJTtcbiAgICB9XG4gICAgOTAle1xuICAgICAgICBsZWZ0OiA3NSU7XG4gICAgfVxuICAgIDEwMCV7XG4gICAgICAgIGxlZnQ6IDc4JTtcbiAgICB9XG59XG5cblxuXG4jY29ubmVjdCB7XG4gICAgYW5pbWF0aW9uOiBwdWxzYXRlIDNzIGluZmluaXRlO1xufVxuXG4jbGlua1RvU2hhcmUge1xuICAgIGFuaW1hdGlvbjogZGlzcGxheUxpbmsgMC40cyBmb3J3YXJkcyBlYXNlLW91dDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbkBrZXlmcmFtZXMgZGlzcGxheUxpbmsge1xuICAgIDAle1xuICAgICAgICBsZWZ0OiAtNDUlO1xuICAgIH1cbiAgICA5MCV7XG4gICAgICAgIGxlZnQ6IDQlO1xuICAgIH1cbiAgICAxMDAle1xuICAgICAgICBsZWZ0OiAxJTtcbiAgICB9XG59XG5cblxuI2Nvbm5lY3Q6aG92ZXIsICNjaGF0Um9vbTpob3ZlcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjViNWI3O1xuICAgIGNvbG9yOiAjMjUyOTM4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuXG5Aa2V5ZnJhbWVzIHB1bHNhdGUge1xuICAgIDAlIHtcbiAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICB9XG4gICAgNTAlIHtcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDBweCA1MHB4IDMwcHggZ3JleTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgfVxufVxuXG4ubmV3Q2hhdCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGhlaWdodDogMTElO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM1ZDczOTQ7XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIGdyYXk7XG4gICAgcG9zaXRpb246IC13ZWJraXQtc3RpY2t5O1xuICAgIHBvc2l0aW9uOiBzdGlja3k7XG4gICAgdG9wOiA4OSU7XG59XG5cbi5uZXdDaGF0IGlucHV0IHtcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gICAgbWFyZ2luLXRvcDogM3B4O1xuICAgIGhlaWdodDogNTUlO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLm5ld0NoYXQgYnV0dG9uIHtcbiAgICB3aWR0aDogNTVweDtcbiAgICBmb250LXNpemU6IDEzcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/hangman/hangman.component.html":
/*!************************************************!*\
  !*** ./src/app/hangman/hangman.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class = 'title'>Hangman</div>\n<div id = 'guesses'>{{gameBoard.guessesRemaining}}</div>\n<div class = 'hangmanContainer'>\n  <div class = 'underline' *ngFor = 'let letter of gameBoard.secretWordLetters'>{{letter.placeholder}}</div>\n  \n  \n  <div *ngFor = 'let row of gameBoard.alphabetDict'>\n\n    <div \n      *ngFor = 'let dict of row'\n      [ngClass] = \"{'clicked' : dict.clicked}\"\n      (click) = 'selectLetter(dict.letter)' \n      class = 'keyboard' \n      >{{dict.letter}}</div>\n    </div>\n\n  <button (click) = 'newGame()' id = 'new'>New Puzzle</button>\n  \n</div>\n\n<div *ngIf = '!clickedOnPlayMulti' (click) = 'displayLinkToShare()' id = 'connect'>Play Multiplayer!</div>\n\n<div *ngIf = 'clickedOnPlayMulti' id = 'linkToShare'>\n  <h3>Share this link with your friends to play together!</h3>\n  <h4>{{linkToShare}}</h4>\n  <button id = 'done' (click) = 'hideLinkDiv()'>Done</button>\n</div>\n\n<div (click) = 'displayActiveChats()' id = 'chatRoom' *ngIf = '!chatsActivated'>Group Chat</div>\n<div *ngIf = 'chatsActivated' id = 'activeChats'>\n  <div class = 'newChat'>\n    <input type = 'text' placeholder = 'New Message' name = 'newMsg' [(ngModel)] = 'newMsg'>\n    <button (click) = 'sendMsg()'>Send</button>\n  </div>\n  <h4 *ngFor = 'let msg of conversation'>{{msg.name}}{{msg.msg}}</h4>\n</div>\n\n<button class = 'dataBtn' [routerLink] = \"['data']\">Cool Data!</button>\n\n<app-welcome *ngIf = 'welcomeVisible'></app-welcome>"

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
                    console.log(data);
                    _this.conversation = data.messages;
                });
                _this.socket.on('newMsg', function (data) {
                    _this.conversation.push({ name: data.name, msg: data.msg });
                });
            }
            else {
                _this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_4__();
                _this.socket.on('welcome', function (data) {
                    _this.roomID = data.roomID;
                    _this.address = data.address;
                    _this.linkToShare = "http://" + _this.address + "/room/" + _this.roomID;
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
                var obs = this._http.newGame({
                    length: this.gameBoard.wordToGuess.length,
                    word: this.gameBoard.wordToGuess,
                    completed: false
                });
                obs.subscribe(function (data) {
                    console.log(data);
                });
                this.socket.emit('clicked', { roomID: this.roomID, game: this.gameBoard });
                alert('You lost. The correct answer was: ' + this.gameBoard.wordToGuess);
            }
            else if (this.gameBoard.winner == true) {
                var obs = this._http.newGame({
                    length: this.gameBoard.wordToGuess.length,
                    word: this.gameBoard.wordToGuess,
                    completed: true
                });
                obs.subscribe(function (data) {
                    console.log(data);
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
                    console.log(_this.gameBoard.wordToGuess);
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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0YXRzL3N0YXRzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/stats/stats.component.html":
/*!********************************************!*\
  !*** ./src/app/stats/stats.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

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
    }
    StatsComponent.prototype.ngOnInit = function () {
        this.start();
    };
    StatsComponent.prototype.getAllGames = function () {
        var obs = this._http.allGames();
        obs.subscribe(function (data) {
        });
    };
    StatsComponent.prototype.start = function () {
        d3__WEBPACK_IMPORTED_MODULE_3__["select"]('body')
            .append('p')
            .text('Hello world!');
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

module.exports = "#welcomeMsg {\n    box-shadow: 0px 0px 600px 200px black;\n    margin-right: auto;\n    right: 0;\n    left: 0;\n    height: 320px;\n    width: 29%;\n    text-align: center;\n    padding: 7px;\n    border: 1px solid gray;\n    margin-left: auto;\n    position: absolute;\n    font-size: 1.2em;\n    box-sizing: border-box;\n    background-color: #292844;\n    border-radius: 5px;\n    top: 9%;\n}\n\n#welcomeMsg input{\n    height: 34px;\n    width: 65%;\n    font-size: 20px;\n    display: block;\n    margin-bottom: 37px;\n    margin-left: auto;\n    margin-right: auto;\n}\n\nbutton {\n    color: white;\n    width: 20%;\n    font-style: italic;\n    cursor: pointer;\n    font-size: 1.5rem;\n    font-family: inherit;\n    background-color: #337ab7;\n    border-color: #2e6da4;\n    border-radius: 5px;\n}\n\nbutton:hover{\n    background-color: #24639a;\n}\n\n.error {\n    color: red;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2VsY29tZS93ZWxjb21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxzQ0FBc0M7SUFDdEMsbUJBQW1CO0lBQ25CLFNBQVM7SUFDVCxRQUFRO0lBQ1IsY0FBYztJQUNkLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQix1QkFBdUI7SUFDdkIsMEJBQTBCO0lBQzFCLG1CQUFtQjtJQUNuQixRQUFRO0NBQ1g7O0FBRUQ7SUFDSSxhQUFhO0lBQ2IsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2Ysb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQixtQkFBbUI7Q0FDdEI7O0FBRUQ7SUFDSSxhQUFhO0lBQ2IsV0FBVztJQUNYLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQiwwQkFBMEI7SUFDMUIsc0JBQXNCO0lBQ3RCLG1CQUFtQjtDQUN0Qjs7QUFFRDtJQUNJLDBCQUEwQjtDQUM3Qjs7QUFFRDtJQUNJLFdBQVc7Q0FDZCIsImZpbGUiOiJzcmMvYXBwL3dlbGNvbWUvd2VsY29tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3dlbGNvbWVNc2cge1xuICAgIGJveC1zaGFkb3c6IDBweCAwcHggNjAwcHggMjAwcHggYmxhY2s7XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgIHJpZ2h0OiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgaGVpZ2h0OiAzMjBweDtcbiAgICB3aWR0aDogMjklO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nOiA3cHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgZ3JheTtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgZm9udC1zaXplOiAxLjJlbTtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyOTI4NDQ7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIHRvcDogOSU7XG59XG5cbiN3ZWxjb21lTXNnIGlucHV0e1xuICAgIGhlaWdodDogMzRweDtcbiAgICB3aWR0aDogNjUlO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW4tYm90dG9tOiAzN3B4O1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbn1cblxuYnV0dG9uIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgd2lkdGg6IDIwJTtcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzdhYjc7XG4gICAgYm9yZGVyLWNvbG9yOiAjMmU2ZGE0O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuYnV0dG9uOmhvdmVye1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyNDYzOWE7XG59XG5cbi5lcnJvciB7XG4gICAgY29sb3I6IHJlZDtcbn1cbiJdfQ== */"

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