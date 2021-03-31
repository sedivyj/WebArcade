(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/coreyford/Development/PokeFace/src/main.ts */"zUnb");


/***/ }),

/***/ "AytR":
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
const environment = {
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

/***/ "HklD":
/*!*******************************!*\
  !*** ./src/app/state.enum.ts ***!
  \*******************************/
/*! exports provided: State */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "State", function() { return State; });
var State;
(function (State) {
    State[State["Resting"] = 0] = "Resting";
    State[State["Heating"] = 1] = "Heating";
    State[State["Apoplectic"] = 2] = "Apoplectic";
    State[State["Cooling"] = 3] = "Cooling";
})(State || (State = {}));


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _state_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./state.enum */ "HklD");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _meter_meter_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./meter/meter.component */ "xLCh");



class AppComponent {
    constructor() {
        this.elapsedMs = 1000;
        this.annoyanceFactor = 0;
        this.state = _state_enum__WEBPACK_IMPORTED_MODULE_0__["State"].Resting;
        setInterval(() => {
            this.decay();
            this.updateState();
        }, 250);
    }
    stateClass() {
        return `state-${_state_enum__WEBPACK_IMPORTED_MODULE_0__["State"][this.state].toLowerCase()}`;
    }
    decay() {
        this.elapsedMs += 250;
        const af = this.annoyanceFactor;
        if (af == 0)
            return;
        if (af > 0)
            this.annoyanceFactor -= 7;
        else
            this.annoyanceFactor = 0;
        return;
    }
    updateState() {
        let newState;
        if (this.annoyanceFactor <= 0)
            newState = _state_enum__WEBPACK_IMPORTED_MODULE_0__["State"].Resting;
        else if (this.annoyanceFactor >= 100)
            newState = _state_enum__WEBPACK_IMPORTED_MODULE_0__["State"].Apoplectic;
        else if (this.elapsedMs > 250)
            newState = _state_enum__WEBPACK_IMPORTED_MODULE_0__["State"].Cooling;
        else
            newState = _state_enum__WEBPACK_IMPORTED_MODULE_0__["State"].Heating;
        if (newState !== this.state) {
            console.log(_state_enum__WEBPACK_IMPORTED_MODULE_0__["State"][newState]);
            this.state = newState;
        }
    }
    poke() {
        this.annoyanceFactor += 9;
        this.elapsedMs = 0;
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 4, consts: [[1, "container"], ["id", "face", 3, "click"], [3, "progress"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_Template_div_click_1_listener() { return ctx.poke(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "app-meter", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx.stateClass());
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("progress", ctx.annoyanceFactor);
    } }, directives: [_meter_meter_component__WEBPACK_IMPORTED_MODULE_2__["MeterComponent"]], styles: [".container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  justify-content: center;\n  align-items: baseline;\n  align-content: space-around;\n}\n\n#face[_ngcontent-%COMP%] {\n  height: 100vh;\n  width: 100vh;\n  display: inline-block;\n  border-color: rebeccapurple;\n  background-size: cover;\n  cursor: pointer;\n}\n\napp-meter[_ngcontent-%COMP%] {\n  display: inline-block;\n  position: absolute;\n  margin: 10px;\n  z-index: 100;\n  top: 10px;\n  left: 84vw;\n}\n\n.state-resting[_ngcontent-%COMP%] {\n  background-image: url('PokeFace_Cage_Resting.gif');\n}\n\n.state-heating[_ngcontent-%COMP%] {\n  background-image: url('PokeFace_Cage_BeingPoked.gif');\n}\n\n.state-cooling[_ngcontent-%COMP%] {\n  background-image: url('PokeFace_Cage_CoolingDown.gif');\n}\n\n.state-apoplectic[_ngcontent-%COMP%] {\n  background-image: url('PokeFace_Cage_Apoplectic.png');\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQkFBQTtFQUNBLDJCQUFBO0FBQ0o7O0FBR0E7RUFDSSxhQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsMkJBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7QUFBSjs7QUFFQTtFQUNJLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FBQ0o7O0FBRUE7RUFDSSxrREFBQTtBQUNKOztBQUNBO0VBQ0kscURBQUE7QUFFSjs7QUFBQTtFQUNJLHNEQUFBO0FBR0o7O0FBREE7RUFDSSxxREFBQTtBQUlKIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBmbGV4LXdyYXA6IG5vd3JhcDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XG4gICAgYWxpZ24tY29udGVudDogc3BhY2UtYXJvdW5kO1xuXG59XG5cbiNmYWNlIHtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIHdpZHRoOiAxMDB2aDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgYm9yZGVyLWNvbG9yOiByZWJlY2NhcHVycGxlO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuYXBwLW1ldGVyIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIG1hcmdpbjogMTBweDtcbiAgICB6LWluZGV4OiAxMDA7XG4gICAgdG9wOiAxMHB4O1xuICAgIGxlZnQ6IDg0dnc7XG59XG5cbi5zdGF0ZS1yZXN0aW5nIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vYXNzZXRzL1Bva2VGYWNlX0NhZ2VfUmVzdGluZy5naWYpO1xufVxuLnN0YXRlLWhlYXRpbmcge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi9hc3NldHMvUG9rZUZhY2VfQ2FnZV9CZWluZ1Bva2VkLmdpZik7XG59XG4uc3RhdGUtY29vbGluZyB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uL2Fzc2V0cy9Qb2tlRmFjZV9DYWdlX0Nvb2xpbmdEb3duLmdpZik7XG59XG4uc3RhdGUtYXBvcGxlY3RpYyB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uL2Fzc2V0cy9Qb2tlRmFjZV9DYWdlX0Fwb3BsZWN0aWMucG5nKTtcbn1cblxuIl19 */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _meter_meter_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./meter/meter.component */ "xLCh");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"],
        _meter_meter_component__WEBPACK_IMPORTED_MODULE_2__["MeterComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]] }); })();


/***/ }),

/***/ "xLCh":
/*!******************************************!*\
  !*** ./src/app/meter/meter.component.ts ***!
  \******************************************/
/*! exports provided: MeterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MeterComponent", function() { return MeterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");


const _c0 = function (a0) { return { background: a0 }; };
class MeterComponent {
    constructor() {
        // Default color
        this.progress = 0;
        this.label = '';
        // setInterval(()=>{ this.progress += 1}, 200);
    }
    ngOnInit() { }
    backgroundCss() {
        const s = `-webkit-linear-gradient(bottom, #db3f02 0%, #db3f02 ${this.progress}%, 
      #fff ${this.progress}%, #fff 100%)`;
        return s;
    }
}
MeterComponent.ɵfac = function MeterComponent_Factory(t) { return new (t || MeterComponent)(); };
MeterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MeterComponent, selectors: [["app-meter"]], inputs: { progress: "progress", label: "label" }, decls: 3, vars: 4, consts: [[1, "container"], [1, "meter", 3, "ngStyle"]], template: function MeterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, ctx.backgroundCss()));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.label);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"]], styles: [".meter[_ngcontent-%COMP%] {\n  margin: 60px 26px 0;\n  left: -15px;\n  top: -60px;\n  width: 22px;\n  height: 150px;\n  display: block;\n  font: bold 14px/152px helvetica, arial, sans-serif;\n  text-indent: 36px;\n  border-radius: 22px 22px 0 0;\n  border: 5px solid #4a1c03;\n  border-bottom: none;\n  position: relative;\n  box-shadow: inset 0 0 0 4px #fff;\n  color: #4a1c03;\n}\n\n.meter[_ngcontent-%COMP%]:before {\n  content: \" \";\n  width: 44px;\n  height: 44px;\n  display: block;\n  position: absolute;\n  top: 142px;\n  left: -16px;\n  z-index: -1;\n  \n  background: #db3f02;\n  border-radius: 44px;\n  border: 5px solid #4a1c03;\n  box-shadow: inset 0 0 0 4px #fff;\n}\n\n.meter[_ngcontent-%COMP%]:after {\n  content: \" \";\n  width: 14px;\n  height: 7px;\n  display: block;\n  position: absolute;\n  top: 146px;\n  left: 4px;\n  background: #db3f02;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL21ldGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdDQUFBO0FBQ0E7RUFDSSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0Esa0RBQUE7RUFDQSxpQkFBQTtFQUNBLDRCQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxjQUFBO0FBQ0o7QUFDQSxxQkFBQTtBQUNDO0VBQ0csWUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0Esb0NBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxnQ0FBQTtBQUVKO0FBQUEsc0RBQUE7QUFDQztFQUNHLFlBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7QUFHSiIsImZpbGUiOiJtZXRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFRoZXJtb21ldGVyIGNvbHVtbiBhbmQgdGV4dCAqL1xuLm1ldGVyIHtcbiAgICBtYXJnaW46NjBweCAyNnB4IDA7XG4gICAgbGVmdDotMTVweDtcbiAgICB0b3A6LTYwcHg7XG4gICAgd2lkdGg6MjJweDtcbiAgICBoZWlnaHQ6MTUwcHg7XG4gICAgZGlzcGxheTpibG9jaztcbiAgICBmb250OmJvbGQgMTRweC8xNTJweCBoZWx2ZXRpY2EsIGFyaWFsLCBzYW5zLXNlcmlmO1xuICAgIHRleHQtaW5kZW50OiAzNnB4O1xuICAgIGJvcmRlci1yYWRpdXM6MjJweCAyMnB4IDAgMDtcbiAgICBib3JkZXI6NXB4IHNvbGlkICM0YTFjMDM7XG4gICAgYm9yZGVyLWJvdHRvbTpub25lO1xuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xuICAgIGJveC1zaGFkb3c6aW5zZXQgMCAwIDAgNHB4ICNmZmY7XG4gICAgY29sb3I6IzRhMWMwMztcbn1cbi8qIFRoZXJtb21ldGVyIEJ1bGIgKi9cbiAubWV0ZXI6YmVmb3JlIHtcbiAgICBjb250ZW50OicgJztcbiAgICB3aWR0aDo0NHB4O1xuICAgIGhlaWdodDo0NHB4O1xuICAgIGRpc3BsYXk6YmxvY2s7XG4gICAgcG9zaXRpb246YWJzb2x1dGU7XG4gICAgdG9wOjE0MnB4O1xuICAgIGxlZnQ6LTE2cHg7XG4gICAgei1pbmRleDotMTtcbiAgICAvKiBQbGFjZSB0aGUgYnVsYiB1bmRlciB0aGUgY29sdW1uICovXG4gICAgYmFja2dyb3VuZDojZGIzZjAyO1xuICAgIGJvcmRlci1yYWRpdXM6NDRweDtcbiAgICBib3JkZXI6NXB4IHNvbGlkICM0YTFjMDM7XG4gICAgYm94LXNoYWRvdzppbnNldCAwIDAgMCA0cHggI2ZmZjtcbn1cbi8qIFRoaXMgcGllY2UgaGVyZSBjb25uZWN0cyB0aGUgY29sdW1uIHdpdGggdGhlIGJ1bGIgKi9cbiAubWV0ZXI6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6JyAnO1xuICAgIHdpZHRoOjE0cHg7XG4gICAgaGVpZ2h0OjdweDtcbiAgICBkaXNwbGF5OmJsb2NrO1xuICAgIHBvc2l0aW9uOmFic29sdXRlO1xuICAgIHRvcDoxNDZweDtcbiAgICBsZWZ0OjRweDtcbiAgICBiYWNrZ3JvdW5kOiNkYjNmMDI7XG59Il19 */"] });


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map