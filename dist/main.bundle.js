webpackJsonp([1,5],{

/***/ 103:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 103;


/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(130);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home_component__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__about_about_component__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__posts_new_post_new_post_component__ = __webpack_require__(70);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: __WEBPACK_IMPORTED_MODULE_2__home_home_component__["a" /* HomeComponent */]
    },
    {
        path: 'about',
        component: __WEBPACK_IMPORTED_MODULE_3__about_about_component__["a" /* AboutComponent */]
    },
    {
        path: 'new-post',
        component: __WEBPACK_IMPORTED_MODULE_4__posts_new_post_new_post_component__["a" /* NewPostComponent */]
    }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(203),
        styles: [__webpack_require__(185)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing_module__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_login_module__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__about_about_component__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__home_home_component__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__posts_post_module__ = __webpack_require__(120);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_7__about_about_component__["a" /* AboutComponent */],
            __WEBPACK_IMPORTED_MODULE_8__home_home_component__["a" /* HomeComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_5__login_login_module__["a" /* LoginModule */],
            __WEBPACK_IMPORTED_MODULE_9__posts_post_module__["a" /* PostModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__login_service__ = __webpack_require__(69);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginComponent = (function () {
    function LoginComponent(loginService, zone) {
        this.loginService = loginService;
        this.zone = zone;
        this.isSignedIn = this.loginService.googleIsSignedIn();
        console.log('constructor name', this.name);
    }
    LoginComponent.prototype.ngAfterViewInit = function () {
        this.loginService.setSignInHandler(this);
        this.loginService.googleInit(this.signInButton.nativeElement);
    };
    LoginComponent.prototype.onSignIn = function (googleUser) {
        var _this = this;
        var profile = googleUser.getBasicProfile();
        // let token = googleUser.getAuthResponse().id_token;
        console.log('ID: ' + profile.getId());
        console.log('Name: ' + profile.getName());
        console.log('Image URL: ' + profile.getImageUrl());
        console.log('Email: ' + profile.getEmail());
        this.zone.run(function () {
            _this.name = profile.getName();
            console.log('zone name', _this.name);
            _this.isSignedIn = _this.loginService.googleIsSignedIn();
            console.log('zone is signed in?', _this.isSignedIn);
        });
    };
    LoginComponent.prototype.onSignOutClicked = function () {
        this.loginService.googleSignOut();
    };
    LoginComponent.prototype.onSignOut = function () {
        var _this = this;
        this.zone.run(function () {
            console.log('User signed out.');
            _this.isSignedIn = _this.loginService.googleIsSignedIn();
            console.log('zone Is logged in?: ', _this.loginService.googleIsSignedIn());
        });
    };
    return LoginComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* ViewChild */])('googleSignIn'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* ElementRef */]) === "function" && _a || Object)
], LoginComponent.prototype, "signInButton", void 0);
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
        selector: 'login',
        template: __webpack_require__(205)
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__login_service__["a" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__login_service__["a" /* LoginService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgZone */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgZone */]) === "function" && _c || Object])
], LoginComponent);

var _a, _b, _c;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_component__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_service__ = __webpack_require__(69);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Created by mancr on 3/12/2017.
 */





var LoginModule = (function () {
    function LoginModule() {
    }
    return LoginModule;
}());
LoginModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* HttpModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_4__login_service__["a" /* LoginService */]],
        declarations: [__WEBPACK_IMPORTED_MODULE_3__login_component__["a" /* LoginComponent */]],
        exports: [__WEBPACK_IMPORTED_MODULE_3__login_component__["a" /* LoginComponent */]],
        bootstrap: []
    })
], LoginModule);

//# sourceMappingURL=login.module.js.map

/***/ }),

/***/ 119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_masonry_layout__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_masonry_layout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_masonry_layout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__post_service__ = __webpack_require__(35);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by mancr on 19-May-17.
 */



var PostListComponent = (function () {
    function PostListComponent(postService) {
        this.postService = postService;
    }
    PostListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.postService.getAllPosts()
            .subscribe(function (posts) {
            _this.posts = posts;
            console.log("Got posts");
        }, function (error) { return console.log(error); });
    };
    PostListComponent.prototype.loadMasonry = function () {
        var _this = this;
        // Create masonry options object
        this.masonryOptions = {
            itemSelector: '.masonry-item',
            columnWidth: 250,
            gutter: 10,
            isFitWidth: true
        };
        // Initialize Masonry
        this.masonry = new __WEBPACK_IMPORTED_MODULE_1_masonry_layout__(this.masonryElementRef.nativeElement, this.masonryOptions);
        setTimeout(function () {
            _this.masonry.layout();
        });
    };
    return PostListComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* ViewChild */])('masonryElementRef'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* ElementRef */]) === "function" && _a || Object)
], PostListComponent.prototype, "masonryElementRef", void 0);
PostListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
        selector: 'post-list',
        template: __webpack_require__(207),
        styles: [__webpack_require__(188)]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__post_service__["a" /* PostService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__post_service__["a" /* PostService */]) === "function" && _b || Object])
], PostListComponent);

var _a, _b;
//# sourceMappingURL=post-list.component.js.map

/***/ }),

/***/ 120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__post_list_post_list_component__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__post_post_component__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__new_post_new_post_component__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__post_service__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__spotify_spotify_module__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__shared_pipes_spotify_track_to_track_pipe__ = __webpack_require__(36);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var PostModule = (function () {
    function PostModule() {
    }
    return PostModule;
}());
PostModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_9__spotify_spotify_module__["a" /* SpotifyModule */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_7__post_service__["a" /* PostService */],
            __WEBPACK_IMPORTED_MODULE_8__shared__["a" /* ApiService */],
            __WEBPACK_IMPORTED_MODULE_10__shared_pipes_spotify_track_to_track_pipe__["a" /* SpotifyTrackToTrackPipe */]
        ],
        // Make components, directives available inside post module
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__post_list_post_list_component__["a" /* PostListComponent */],
            __WEBPACK_IMPORTED_MODULE_5__post_post_component__["a" /* PostComponent */],
            __WEBPACK_IMPORTED_MODULE_6__new_post_new_post_component__["a" /* NewPostComponent */]
        ],
        // Make components, directives, pipes available outside post module
        exports: [
            __WEBPACK_IMPORTED_MODULE_4__post_list_post_list_component__["a" /* PostListComponent */],
            __WEBPACK_IMPORTED_MODULE_6__new_post_new_post_component__["a" /* NewPostComponent */]
        ],
        bootstrap: []
    })
], PostModule);

//# sourceMappingURL=post.module.js.map

/***/ }),

/***/ 121:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_models_post_model__ = __webpack_require__(71);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by mancr on 18-May-17.
 */


var PostComponent = (function () {
    function PostComponent() {
        this.init = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* EventEmitter */]();
        this.isPlaying = false;
    }
    PostComponent.prototype.ngAfterViewInit = function () {
        this.init.emit(null);
        this.audio = new Audio();
        this.audio.src = this.post.track.previewUrl;
    };
    PostComponent.prototype.toggleAudio = function () {
        if (this.isPlaying) {
            this.audio.pause();
        }
        else {
            this.audio.play();
        }
        this.isPlaying = !this.isPlaying;
    };
    return PostComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_models_post_model__["a" /* Post */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_models_post_model__["a" /* Post */]) === "function" && _a || Object)
], PostComponent.prototype, "post", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Output */])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* EventEmitter */]) === "function" && _b || Object)
], PostComponent.prototype, "init", void 0);
PostComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
        selector: 'post',
        template: __webpack_require__(208),
        styles: [__webpack_require__(189)]
    })
], PostComponent);

var _a, _b;
//# sourceMappingURL=post.component.js.map

/***/ }),

/***/ 122:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_api_service__ = __webpack_require__(73);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__services_api_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_post_model__ = __webpack_require__(71);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_track_model__ = __webpack_require__(123);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_spotify_track_model__ = __webpack_require__(72);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_user_model__ = __webpack_require__(124);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pipes_spotify_track_to_track_pipe__ = __webpack_require__(36);
/* unused harmony namespace reexport */






//# sourceMappingURL=index.js.map

/***/ }),

/***/ 123:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Track */
/**
 * Created by mancr on 17-May-17.
 */
var Track = (function () {
    function Track() {
    }
    return Track;
}());

//# sourceMappingURL=track.model.js.map

/***/ }),

/***/ 124:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export User */
/**
 * Created by mancr on 18-May-17.
 */
var User = (function () {
    function User() {
    }
    return User;
}());

//# sourceMappingURL=user.model.js.map

/***/ }),

/***/ 125:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_of__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_debounceTime__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_debounceTime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_distinctUntilChanged__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_distinctUntilChanged___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_distinctUntilChanged__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_switchMap__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__spotify_search_service__ = __webpack_require__(74);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpotifySearchComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by mancr on 3/12/2017.
 */


// Observable class extensions

// Observable operators





var SpotifySearchComponent = (function () {
    function SpotifySearchComponent(spotifyService) {
        this.spotifyService = spotifyService;
        this.tracks = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* EventEmitter */]();
        this.searchTerms = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
    }
    SpotifySearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.searchTerms
            .debounceTime(300) // wait 300ms after each keystroke before considering the term
            .distinctUntilChanged() // ignore if next search term is same as previous
            .switchMap(function (term) { return _this.spotifyService.search(term); })
            .subscribe(function (tracks) { return _this.tracks.emit(tracks); }, function (error) { return _this.tracks.emit([]); });
    };
    // Push a search term into the observable stream.
    SpotifySearchComponent.prototype.search = function (term) {
        this.searchTerms.next(term);
    };
    return SpotifySearchComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Output */])(),
    __metadata("design:type", Object)
], SpotifySearchComponent.prototype, "tracks", void 0);
SpotifySearchComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
        selector: 'spotify-search',
        template: __webpack_require__(209)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_7__spotify_search_service__["a" /* SpotifySearchService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__spotify_search_service__["a" /* SpotifySearchService */]) === "function" && _a || Object])
], SpotifySearchComponent);

var _a;
//# sourceMappingURL=spotify-search.component.js.map

/***/ }),

/***/ 126:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpotifyTrackListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by mancr on 3/12/2017.
 */

var SpotifyTrackListComponent = (function () {
    function SpotifyTrackListComponent() {
        this.trackSelected = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* EventEmitter */]();
    }
    SpotifyTrackListComponent.prototype.select = function (track) {
        this.trackSelected.emit(track);
    };
    return SpotifyTrackListComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* Input */])(),
    __metadata("design:type", Array)
], SpotifyTrackListComponent.prototype, "tracks", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Output */])(),
    __metadata("design:type", Object)
], SpotifyTrackListComponent.prototype, "trackSelected", void 0);
SpotifyTrackListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
        selector: 'spotify-track-list',
        template: __webpack_require__(210),
        styles: [__webpack_require__(190)]
    })
], SpotifyTrackListComponent);

//# sourceMappingURL=spotify-track-list.component.js.map

/***/ }),

/***/ 127:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpotifyTrackSelectorComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by mancr on 3/12/2017.
 */

var SpotifyTrackSelectorComponent = (function () {
    function SpotifyTrackSelectorComponent() {
        this.selected = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* EventEmitter */]();
        this.tracks = [];
    }
    SpotifyTrackSelectorComponent.prototype.setTracks = function (tracks) {
        this.tracks = tracks;
    };
    SpotifyTrackSelectorComponent.prototype.onTrackSelection = function (track) {
        this.selectedTrack = track;
        this.selected.emit(track);
    };
    return SpotifyTrackSelectorComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Output */])(),
    __metadata("design:type", Object)
], SpotifyTrackSelectorComponent.prototype, "selected", void 0);
SpotifyTrackSelectorComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
        selector: 'spotify-track-selector',
        template: __webpack_require__(211)
    }),
    __metadata("design:paramtypes", [])
], SpotifyTrackSelectorComponent);

//# sourceMappingURL=spotify-track-selector.component.js.map

/***/ }),

/***/ 128:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_models_spotify_track_model__ = __webpack_require__(72);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpotifyTrackComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by mancr on 3/12/2017.
 */


var SpotifyTrackComponent = (function () {
    function SpotifyTrackComponent() {
        this.hasSelectionButton = false;
        this.hasUnselectionButton = false;
        this.trackSelected = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* EventEmitter */]();
        this.trackUnselected = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* EventEmitter */]();
    }
    SpotifyTrackComponent.prototype.select = function () {
        this.trackSelected.emit(this.track);
    };
    SpotifyTrackComponent.prototype.unselect = function () {
        this.trackUnselected.emit(this.track);
    };
    return SpotifyTrackComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_models_spotify_track_model__["a" /* SpotifyTrack */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_models_spotify_track_model__["a" /* SpotifyTrack */]) === "function" && _a || Object)
], SpotifyTrackComponent.prototype, "track", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* Input */])(),
    __metadata("design:type", Boolean)
], SpotifyTrackComponent.prototype, "hasSelectionButton", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* Input */])(),
    __metadata("design:type", Boolean)
], SpotifyTrackComponent.prototype, "hasUnselectionButton", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Output */])(),
    __metadata("design:type", Object)
], SpotifyTrackComponent.prototype, "trackSelected", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Output */])(),
    __metadata("design:type", Object)
], SpotifyTrackComponent.prototype, "trackUnselected", void 0);
SpotifyTrackComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
        selector: 'spotify-track',
        template: __webpack_require__(212),
        styles: [__webpack_require__(191)]
    })
], SpotifyTrackComponent);

var _a;
//# sourceMappingURL=spotify-track.component.js.map

/***/ }),

/***/ 129:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__spotify_search_spotify_search_service__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__spotify_search_spotify_search_component__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__spotify_track_selector_spotify_track_selector_component__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__spotify_track_list_spotify_track_list_component__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__spotify_track_spotify_track_component__ = __webpack_require__(128);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpotifyModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Created by mancr on 3/12/2017.
 */








var SpotifyModule = (function () {
    function SpotifyModule() {
    }
    return SpotifyModule;
}());
SpotifyModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* HttpModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_3__spotify_search_spotify_search_service__["a" /* SpotifySearchService */]],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__spotify_search_spotify_search_component__["a" /* SpotifySearchComponent */],
            __WEBPACK_IMPORTED_MODULE_6__spotify_track_list_spotify_track_list_component__["a" /* SpotifyTrackListComponent */],
            __WEBPACK_IMPORTED_MODULE_7__spotify_track_spotify_track_component__["a" /* SpotifyTrackComponent */],
            __WEBPACK_IMPORTED_MODULE_5__spotify_track_selector_spotify_track_selector_component__["a" /* SpotifyTrackSelectorComponent */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_4__spotify_search_spotify_search_component__["a" /* SpotifySearchComponent */],
            __WEBPACK_IMPORTED_MODULE_5__spotify_track_selector_spotify_track_selector_component__["a" /* SpotifyTrackSelectorComponent */]
        ],
        bootstrap: []
    })
], SpotifyModule);

//# sourceMappingURL=spotify.module.js.map

/***/ }),

/***/ 130:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 185:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 186:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 187:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 188:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(false);
// imports


// module
exports.push([module.i, ".masonry {\n  margin: 0 auto;\n}\n.masonry:after {\n  content: '';\n  display: block;\n  clear: both;\n}\n.masonry-item {\n  width: 250px;\n  margin-bottom: 10px;\n  float: left;\n  border-radius: 5px;\n  background-color: #eee;\n}\n.masonry-item--height2 {\n  height: 200px;\n}\n.masonry-item--height3 {\n  height: 260px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 189:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(false);
// imports


// module
exports.push([module.i, ".thumbnail {\n  margin: 0;\n  padding: 0;\n}\n.caption {\n  padding: 1em;\n}\n.post-description {\n  color: #888;\n  background-color: #222;\n  padding: 1em;\n  overflow: auto;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 190:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 191:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 202:
/***/ (function(module, exports) {

module.exports = "<p>\r\n    About Works!\r\n</p>\r\n"

/***/ }),

/***/ 203:
/***/ (function(module, exports) {

module.exports = "<header>\r\n    <nav class=\"navbar navbar-default\">\r\n        <div class=\"container-fluid\">\r\n            <div class=\"navbar-header\">\r\n                <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\"\r\n                        data-target=\"#bs-example-navbar-collapse-1\">\r\n                    <span class=\"sr-only\">Toggle navigation</span>\r\n                    <span class=\"icon-bar\"></span>\r\n                    <span class=\"icon-bar\"></span>\r\n                    <span class=\"icon-bar\"></span>\r\n                </button>\r\n                <a class=\"navbar-brand\" href=\"#\">Brand</a>\r\n            </div>\r\n\r\n            <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\r\n                <ul class=\"nav navbar-nav\">\r\n                    <li class=\"active\"><a [routerLink]=\"['']\">Home <span class=\"sr-only\">(current)</span></a></li>\r\n                    <li><a [routerLink]=\"['about']\">About</a></li>\r\n                </ul>\r\n\r\n                <ul class=\"nav navbar-nav navbar-right\">\r\n                    <li>\r\n                        <login></login>\r\n                    </li>\r\n                </ul>\r\n            </div>\r\n        </div>\r\n    </nav>\r\n</header>\r\n<main>\r\n    <div class=\"container-fluid\">\r\n        <router-outlet></router-outlet>\r\n    </div>\r\n</main>\r\n"

/***/ }),

/***/ 204:
/***/ (function(module, exports) {

module.exports = "<div class=\"page-header\">\r\n    <h1>Post page\r\n        <small>Share your favourite songs!</small>\r\n        <button class=\"btn btn-primary\" [routerLink]=\"['/new-post']\">\r\n            <span class=\"glyphicon glyphicon-plus\" aria-hidden=\"true\"></span>\r\n        </button>\r\n    </h1>\r\n</div>\r\n\r\n<post-list></post-list>\r\n"

/***/ }),

/***/ 205:
/***/ (function(module, exports) {

module.exports = "<span [hidden]=\"isSignedIn\">\r\n    <button #googleSignIn id=\"googleSignIn\" class=\"btn btn-default navbar-btn\">Sign in with Google</button>\r\n</span>\r\n\r\n\r\n<span [hidden]=\"!isSignedIn\">\r\n    <p class=\"navbar-text\">Signed in as {{name}}</p>\r\n    <button id=\"googleSignOut\" class=\"btn btn-default navbar-btn\" (click)=\"onSignOutClicked()\">Sign out</button>\r\n</span>\r\n"

/***/ }),

/***/ 206:
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-6 col-lg-4 col-md-offset-3 col-lg-offset-4\">\r\n\r\n    <div class=\"page-header\">\r\n        <h1>Create a new post\r\n            <small>Share your favourite songs!</small>\r\n        </h1>\r\n    </div>\r\n\r\n\r\n    <form (ngSubmit)=\"onSubmit()\" #newPostForm=\"ngForm\">\r\n        <div class=\"form-group\">\r\n            <label>Step 1: Select your favourite song</label>\r\n            <spotify-track-selector (selected)=\"onTrackSelection($event)\"></spotify-track-selector>\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n            <label>Step 2: Add a caption</label>\r\n            <textarea [(ngModel)]=\"post.description\" name=\"description\"  class=\"form-control\" placeholder=\"Write your caption here\"></textarea>\r\n        </div>\r\n\r\n        <div [hidden]=\"!isSubmitted || isValidForm()\" class=\"alert alert-danger\" role=\"alert\"><span>Oh Snap!</span> {{errorMessage}}</div>\r\n\r\n        <button type=\"submit\" class=\"btn btn-primary\">Save\r\n            <span class=\"glyphicon glyphicon-ok\" aria-hidden=\"true\"></span>\r\n        </button>\r\n        <button class=\"btn btn-default\" (click)=\"newPostForm.reset(); onCancel()\">Cancel\r\n            <span class=\"glyphicon glyphicon-remove\" aria-hidden=\"true\"></span>\r\n        </button>\r\n    </form>\r\n\r\n</div>\r\n"

/***/ }),

/***/ 207:
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n    <div #masonryElementRef class=\"masonry\">\r\n        <div *ngFor=\"let post of posts\" class=\"masonry-item\">\r\n            <post [post]=\"post\" (init)=\"loadMasonry()\"></post>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ 208:
/***/ (function(module, exports) {

module.exports = "<div class=\"thumbnail\">\r\n    <img [src]=\"post.track.album.imageUrl\" alt=\"Album Image\">\r\n    <div class=\"caption\">\r\n        <h3>{{post.track.name}}</h3>\r\n        <h4>by {{post.track.artist.name}}</h4>\r\n        <h5>{{post.track.album.name}}</h5>\r\n        <button class=\"btn btn-primary\" (click)=\"toggleAudio()\">\r\n            <span class=\"glyphicon\"\r\n                  [ngClass]=\"{\r\n                  'glyphicon-play': !isPlaying,\r\n                  'glyphicon-pause': isPlaying }\"\r\n                  aria-hidden=\"true\">\r\n            </span>\r\n        </button>\r\n    </div>\r\n    <div class=\"post-description\">\r\n        <p>\r\n            {{post.description}}\r\n        </p>\r\n        <p><span class=\"pull-right\"> - {{post.user.name}}</span></p>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ 209:
/***/ (function(module, exports) {

module.exports = "<div class=\"input-group\">\r\n        <span class=\"input-group-btn\" id=\"search-btn\">\r\n            <button class=\"btn btn-primary\" (click)=\"search(searchBox.value)\">\r\n              <span class=\"glyphicon glyphicon-search\" aria-hidden=\"true\"></span>\r\n            </button>\r\n        </span>\r\n    <input #searchBox (keyup)=\"search(searchBox.value)\"\r\n           id=\"search-box\"\r\n           type=\"text\"\r\n           value=\"\"\r\n           class=\"form-control\"\r\n           placeholder=\"Search Track...\"\r\n           aria-describedby=\"search-btn\"\r\n    />\r\n</div>\r\n\r\n\r\n\r\n"

/***/ }),

/***/ 210:
/***/ (function(module, exports) {

module.exports = "<div class=\"list-group\">\r\n    <a *ngFor=\"let track of tracks\" class=\"list-group-item\">\r\n        <spotify-track [track]=\"track\" [hasSelectionButton]=\"true\" (trackSelected)=\"select($event)\"></spotify-track>\r\n    </a>\r\n</div>\r\n\r\n\r\n\r\n"

/***/ }),

/***/ 211:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"selectedTrack\">\r\n    <spotify-track [track]=\"selectedTrack\" [hasUnselectionButton]=\"true\" (trackUnselected)=\"onTrackSelection()\"></spotify-track>\r\n</div>\r\n<div *ngIf=\"selectedTrack === undefined\">\r\n    <spotify-search (tracks)=\"setTracks($event)\"></spotify-search>\r\n\r\n    <spotify-track-list [tracks]=\"tracks\" (trackSelected)=\"onTrackSelection($event)\"></spotify-track-list>\r\n\r\n</div>\r\n\r\n\r\n\r\n"

/***/ }),

/***/ 212:
/***/ (function(module, exports) {

module.exports = "<div class=\"media\">\r\n    <div class=\"media-left\">\r\n        <img class=\"media-object\" src=\"{{track.album.images[2].url}}\" alt=\"{{track.album.name}}\">\r\n    </div>\r\n    <div class=\"media-body\">\r\n        <h4 class=\"media-heading\">{{track.name}}</h4>\r\n        by <span *ngFor=\"let artist of track.artists\">{{artist.name}}</span>\r\n    </div>\r\n    <div class=\"media-left media-middle\">\r\n        <button *ngIf=\"hasUnselectionButton\" class=\"btn btn-primary\" (click)=\"unselect()\">\r\n            Unselect\r\n        </button>\r\n        <button *ngIf=\"hasSelectionButton\" class=\"btn btn-primary\" (click)=\"select()\">\r\n            Select\r\n        </button>\r\n    </div>\r\n</div>\r\n\r\n\r\n\r\n"

/***/ }),

/***/ 257:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(104);


/***/ }),

/***/ 35:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_services_api_service__ = __webpack_require__(73);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostService; });
/**
 * Created by mancr on 17-May-17.
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var PostService = (function () {
    function PostService(http, apiService) {
        this.http = http;
        this.apiService = apiService;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        this.url = this.apiService.url + '/posts';
    }
    PostService.prototype.getAllPosts = function () {
        return this.http.get(this.url)
            .map(function (response) {
            return response.json();
        })
            .catch(this.apiService.handleError);
    };
    PostService.prototype.createPost = function (post) {
        var body = JSON.stringify(post);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({
            headers: this.headers
        });
        return this.http.post(this.url, body, options)
            .map(function (response) {
            var responseMessage = response.json();
            console.log(response);
            console.log(responseMessage);
            return responseMessage;
        })
            .catch(this.apiService.handleError);
    };
    return PostService;
}());
PostService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__shared_services_api_service__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__shared_services_api_service__["a" /* ApiService */]) === "function" && _b || Object])
], PostService);

var _a, _b;
//# sourceMappingURL=post.service.js.map

/***/ }),

/***/ 36:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpotifyTrackToTrackPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/*
 * This Pipe transforms a SpotifyTrack object into a Track object recognized by SoundsUpApi
 */
var SpotifyTrackToTrackPipe = (function () {
    function SpotifyTrackToTrackPipe() {
    }
    SpotifyTrackToTrackPipe.prototype.transform = function (spotify) {
        var track = {
            spotifyId: spotify.id,
            name: spotify.name,
            previewUrl: spotify.preview_url,
            album: {
                name: spotify.album.name,
                id: spotify.album.id,
                imageUrl: spotify.album.images[0].url
            },
            artist: {
                name: spotify.artists[0].name,
                id: spotify.artists[0].id
            },
            externalUrls: spotify.external_urls
        };
        return track;
    };
    return SpotifyTrackToTrackPipe;
}());
SpotifyTrackToTrackPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Pipe */])({ name: 'spotifyToTrack' })
], SpotifyTrackToTrackPipe);

//# sourceMappingURL=spotify-track-to-track.pipe.js.map

/***/ }),

/***/ 67:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = (function () {
    function AboutComponent() {
        // Do stuff
    }
    AboutComponent.prototype.ngOnInit = function () {
        console.log('Hello About');
    };
    return AboutComponent;
}());
AboutComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
        selector: 'my-about',
        template: __webpack_require__(202)
    }),
    __metadata("design:paramtypes", [])
], AboutComponent);

//# sourceMappingURL=about.component.js.map

/***/ }),

/***/ 68:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
        selector: 'home',
        template: __webpack_require__(204),
        styles: [__webpack_require__(186)]
    })
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ 69:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by mancr on 3/12/2017.
 *
 * References: https://developers.google.com/identity/sign-in/web/reference#top_of_page
 */





var LoginService = (function () {
    function LoginService(http) {
        this.http = http;
        this.clientConfig = {
            client_id: '176022414732-multinga95b6se0j9024vogb8t24rvge.apps.googleusercontent.com',
            cookie_policy: 'single_host_origin',
            scope: [
                'profile',
                'email',
                'https://www.googleapis.com/auth/plus.me',
                'https://www.googleapis.com/auth/contacts.readonly',
                'https://www.googleapis.com/auth/admin.directory.user.readonly'
            ].join(' ')
        };
    }
    LoginService.prototype.setSignInHandler = function (component) {
        this.signInHandler = component;
    };
    LoginService.prototype.googleInit = function (element) {
        // Store reference of loginService to avoid scoping issues
        var loginService = this;
        gapi.load('auth2', function () {
            loginService.googleAuth = gapi.auth2.init(loginService.clientConfig);
            // GoogleAuth.attachClickHandler(container, options, onsuccess, onfailure)
            loginService.googleAuth.attachClickHandler(element, {}, loginService.googleSignIn.bind(loginService), loginService.handleError);
        });
    };
    LoginService.prototype.googleSignIn = function (googleUser) {
        console.log("SIGN IN WAS CLICKED");
        this.googleUser = googleUser;
        var token = googleUser.getAuthResponse().id_token;
        // YOUR CODE HERE
        // this.verifyToken(token)
        //     .subscribe(
        //         t => console.log('TOKEN = ', t),
        //         err => console.log('ERROR = ', err)
        //     );
        // Call sign in handler to do something in the component
        this.signInHandler.onSignIn(googleUser);
    };
    LoginService.prototype.verifyToken = function (token) {
        console.log('Verifying token = ', token);
        var apiUrl = 'http://localhost:8080/api/users';
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* RequestOptions */]({ headers: headers });
        var body = JSON.stringify({ id_token: token });
        return this.http.post(apiUrl, body, options)
            .map(function (res) {
            var b = res.json();
            console.log('Signed in as:' + b);
            return b.token_id || {};
        })
            .catch(this.handleError);
    };
    LoginService.prototype.handleError = function (error) {
        console.log('Something went wrong');
        console.log(JSON.stringify(error, undefined, 2));
        return error;
    };
    LoginService.prototype.googleIsSignedIn = function () {
        if (this.googleUser) {
            return this.googleUser.isSignedIn();
        }
        return false;
    };
    LoginService.prototype.googleSignOut = function () {
        var loginService = this;
        gapi.load('auth2', function () {
            loginService.googleAuth = gapi.auth2.getAuthInstance();
            loginService.googleAuth.signOut().then(function () {
                loginService.signInHandler.onSignOut();
            });
        });
    };
    return LoginService;
}());
LoginService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* Http */]) === "function" && _a || Object])
], LoginService);

var _a;
//# sourceMappingURL=login.service.js.map

/***/ }),

/***/ 70:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_pipes_spotify_track_to_track_pipe__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__post_service__ = __webpack_require__(35);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewPostComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by mancr on 19-May-17.
 */




var NewPostComponent = (function () {
    function NewPostComponent(location, trackPipe, postService) {
        this.location = location;
        this.trackPipe = trackPipe;
        this.postService = postService;
        this.post = {
            user: {
                id: 0 // TODO ADD ACTUAL USER
            },
            description: '',
            track: {}
        };
        this.isSubmitted = false;
        this.isCancelled = false;
        this.errorMessage = '';
    }
    NewPostComponent.prototype.onCancel = function () {
        this.isCancelled = true;
    };
    NewPostComponent.prototype.goBack = function () {
        this.location.back();
    };
    NewPostComponent.prototype.onTrackSelection = function (spotifyTrack) {
        var track = {};
        if (spotifyTrack) {
            track = this.trackPipe.transform(spotifyTrack);
        }
        this.post.track = track;
    };
    NewPostComponent.prototype.onSubmit = function () {
        var _this = this;
        if (!this.isCancelled) {
            this.isSubmitted = true;
            this.postService.createPost(this.post).subscribe(function (success) { return _this.goBack(); }, function (error) { return _this.errorMessage = 'Sorry there was a problem with creating your post. Please try again in a few minutes.'; });
        }
        else {
            this.goBack();
        }
    };
    NewPostComponent.prototype.isValidForm = function () {
        if (!this.post.track.name) {
            this.errorMessage = 'Please select a track';
        }
        else if (this.post.description === '') {
            this.errorMessage = 'Please enter your description';
        }
        else {
            this.errorMessage = '';
        }
        return this.errorMessage === '';
    };
    return NewPostComponent;
}());
NewPostComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
        selector: 'new-post',
        template: __webpack_require__(206),
        styles: [__webpack_require__(187)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* Location */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_pipes_spotify_track_to_track_pipe__["a" /* SpotifyTrackToTrackPipe */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_pipes_spotify_track_to_track_pipe__["a" /* SpotifyTrackToTrackPipe */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__post_service__["a" /* PostService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__post_service__["a" /* PostService */]) === "function" && _c || Object])
], NewPostComponent);

var _a, _b, _c;
//# sourceMappingURL=new-post.component.js.map

/***/ }),

/***/ 71:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Post; });
/**
 * Created by mancr on 17-May-17.
 */
var Post = (function () {
    function Post() {
    }
    return Post;
}());

//# sourceMappingURL=post.model.js.map

/***/ }),

/***/ 72:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpotifyTrack; });
var SpotifyTrack = (function () {
    function SpotifyTrack() {
    }
    return SpotifyTrack;
}());

//# sourceMappingURL=spotify-track.model.js.map

/***/ }),

/***/ 73:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ApiService = (function () {
    function ApiService() {
        // public url = 'https://sounds-up-api.herokuapp.com/api';
        this.url = 'http://localhost:8080/api';
    }
    ApiService.prototype.handleError = function (error) {
        console.log('Something went wrong');
        console.log(JSON.stringify(error, undefined, 2));
        return error;
    };
    return ApiService;
}());
ApiService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], ApiService);

//# sourceMappingURL=api.service.js.map

/***/ }),

/***/ 74:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpotifySearchService; });
/**
 * Created by mancr on 3/12/2017.
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SpotifySearchService = (function () {
    function SpotifySearchService(http) {
        this.http = http;
        this.spotifyApi = 'https://api.spotify.com/';
    }
    SpotifySearchService.prototype.search = function (track) {
        if (track) {
            return this.http
                .get(this.spotifyApi + "v1/search?q=" + track + "&type=track")
                .map(function (response) { return response.json().tracks.items; });
        }
        else {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].of([]);
        }
    };
    return SpotifySearchService;
}());
SpotifySearchService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object])
], SpotifySearchService);

var _a;
//# sourceMappingURL=spotify-search.service.js.map

/***/ })

},[257]);
//# sourceMappingURL=main.bundle.js.map