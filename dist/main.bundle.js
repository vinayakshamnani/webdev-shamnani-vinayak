webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: "<router-outlet></router-outlet>",
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_test_test_component__ = __webpack_require__("../../../../../src/app/components/test/test.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routing__ = __webpack_require__("../../../../../src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_user_login_login_component__ = __webpack_require__("../../../../../src/app/components/user/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_user_profile_profile_component__ = __webpack_require__("../../../../../src/app/components/user/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_user_register_register_component__ = __webpack_require__("../../../../../src/app/components/user/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_website_website_new_website_new_component__ = __webpack_require__("../../../../../src/app/components/website/website-new/website-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_website_website_edit_website_edit_component__ = __webpack_require__("../../../../../src/app/components/website/website-edit/website-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_website_website_list_website_list_component__ = __webpack_require__("../../../../../src/app/components/website/website-list/website-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_page_page_new_page_new_component__ = __webpack_require__("../../../../../src/app/components/page/page-new/page-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_page_page_edit_page_edit_component__ = __webpack_require__("../../../../../src/app/components/page/page-edit/page-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_page_page_list_page_list_component__ = __webpack_require__("../../../../../src/app/components/page/page-list/page-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_widget_widget_choose_widget_choose_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-choose/widget-choose.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_widget_widget_edit_widget_edit_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_widget_widget_list_widget_list_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-list/widget-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_widget_widget_edit_widget_header_widget_header_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-header/widget-header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_widget_widget_edit_widget_image_widget_image_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-image/widget-image.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_widget_widget_edit_widget_youtube_widget_youtube_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__services_website_service_client__ = __webpack_require__("../../../../../src/app/services/website.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__services_page_service_client__ = __webpack_require__("../../../../../src/app/services/page.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
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
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        // Declare components here
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_3__components_home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_4__components_test_test_component__["a" /* TestComponent */],
            __WEBPACK_IMPORTED_MODULE_8__components_user_login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_9__components_user_profile_profile_component__["a" /* ProfileComponent */],
            __WEBPACK_IMPORTED_MODULE_10__components_user_register_register_component__["a" /* RegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_11__components_website_website_new_website_new_component__["a" /* WebsiteNewComponent */],
            __WEBPACK_IMPORTED_MODULE_12__components_website_website_edit_website_edit_component__["a" /* WebsiteEditComponent */],
            __WEBPACK_IMPORTED_MODULE_13__components_website_website_list_website_list_component__["a" /* WebsiteListComponent */],
            __WEBPACK_IMPORTED_MODULE_14__components_page_page_new_page_new_component__["a" /* PageNewComponent */],
            __WEBPACK_IMPORTED_MODULE_15__components_page_page_edit_page_edit_component__["a" /* PageEditComponent */],
            __WEBPACK_IMPORTED_MODULE_16__components_page_page_list_page_list_component__["a" /* PageListComponent */],
            __WEBPACK_IMPORTED_MODULE_17__components_widget_widget_choose_widget_choose_component__["a" /* WidgetChooseComponent */],
            __WEBPACK_IMPORTED_MODULE_18__components_widget_widget_edit_widget_edit_component__["a" /* WidgetEditComponent */],
            __WEBPACK_IMPORTED_MODULE_19__components_widget_widget_list_widget_list_component__["a" /* WidgetListComponent */],
            __WEBPACK_IMPORTED_MODULE_20__components_widget_widget_edit_widget_header_widget_header_component__["a" /* WidgetHeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_21__components_widget_widget_edit_widget_image_widget_image_component__["a" /* WidgetImageComponent */],
            __WEBPACK_IMPORTED_MODULE_22__components_widget_widget_edit_widget_youtube_widget_youtube_component__["a" /* WidgetYoutubeComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_5__app_routing__["a" /* Routing */]
        ],
        // Client Side services here
        providers: [__WEBPACK_IMPORTED_MODULE_23__services_user_service_client__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_24__services_website_service_client__["a" /* WebsiteService */], __WEBPACK_IMPORTED_MODULE_25__services_page_service_client__["a" /* PageService */], __WEBPACK_IMPORTED_MODULE_26__services_widget_service_client__["a" /* WidgetService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_user_login_login_component__ = __webpack_require__("../../../../../src/app/components/user/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_user_register_register_component__ = __webpack_require__("../../../../../src/app/components/user/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_user_profile_profile_component__ = __webpack_require__("../../../../../src/app/components/user/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_page_page_edit_page_edit_component__ = __webpack_require__("../../../../../src/app/components/page/page-edit/page-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_page_page_list_page_list_component__ = __webpack_require__("../../../../../src/app/components/page/page-list/page-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_page_page_new_page_new_component__ = __webpack_require__("../../../../../src/app/components/page/page-new/page-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_website_website_edit_website_edit_component__ = __webpack_require__("../../../../../src/app/components/website/website-edit/website-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_website_website_list_website_list_component__ = __webpack_require__("../../../../../src/app/components/website/website-list/website-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_website_website_new_website_new_component__ = __webpack_require__("../../../../../src/app/components/website/website-new/website-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_widget_widget_choose_widget_choose_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-choose/widget-choose.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_widget_widget_edit_widget_edit_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_widget_widget_list_widget_list_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-list/widget-list.component.ts");
/**
 * Created by sesha on 7/26/17.
 */













var APP_ROUTES = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_1__components_user_login_login_component__["a" /* LoginComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_1__components_user_login_login_component__["a" /* LoginComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_2__components_user_register_register_component__["a" /* RegisterComponent */] },
    { path: 'user/:uid', component: __WEBPACK_IMPORTED_MODULE_3__components_user_profile_profile_component__["a" /* ProfileComponent */] },
    { path: 'user/:uid/website', component: __WEBPACK_IMPORTED_MODULE_8__components_website_website_list_website_list_component__["a" /* WebsiteListComponent */] },
    { path: 'user/:uid/website/new', component: __WEBPACK_IMPORTED_MODULE_9__components_website_website_new_website_new_component__["a" /* WebsiteNewComponent */] },
    { path: 'user/:uid/website/:wid', component: __WEBPACK_IMPORTED_MODULE_7__components_website_website_edit_website_edit_component__["a" /* WebsiteEditComponent */] },
    { path: 'user/:uid/website/:wid/page', component: __WEBPACK_IMPORTED_MODULE_5__components_page_page_list_page_list_component__["a" /* PageListComponent */] },
    { path: 'user/:uid/website/:wid/page/new', component: __WEBPACK_IMPORTED_MODULE_6__components_page_page_new_page_new_component__["a" /* PageNewComponent */] },
    { path: 'user/:uid/website/:wid/page/:pid', component: __WEBPACK_IMPORTED_MODULE_4__components_page_page_edit_page_edit_component__["a" /* PageEditComponent */] },
    { path: 'user/:uid/website/:wid/page/:pid/widget', component: __WEBPACK_IMPORTED_MODULE_12__components_widget_widget_list_widget_list_component__["a" /* WidgetListComponent */] },
    { path: 'user/:uid/website/:wid/page/:pid/widget/new', component: __WEBPACK_IMPORTED_MODULE_10__components_widget_widget_choose_widget_choose_component__["a" /* WidgetChooseComponent */] },
    { path: 'user/:uid/website/:wid/page/:pid/widget/:wgid', component: __WEBPACK_IMPORTED_MODULE_11__components_widget_widget_edit_widget_edit_component__["a" /* WidgetEditComponent */] }
];
// Export the routes as module providers
var Routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forRoot(APP_ROUTES);
//# sourceMappingURL=app.routing.js.map

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\">\n\n  <h1>\n    Angular 4 MEAN stack app\n  </h1>\n\n\n  <h3>\n    App works\n  </h3>\n\n\n  <h4>\n    <a href=\"test\">Test MongoDB</a>\n  </h4>\n\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/components/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/page/page-edit/page-edit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/page/page-edit/page-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-fixed-top navbar-custom\">\n  <div class=\"row\">\n    <div class=\"col-xs-4 hidden-xs\">\n      <a class=\"navbar-brand\"\n         [routerLink]=\"['/user/',userId, 'website', websiteId, 'page']\">\n                <span\n                  class=\"glyphicon glyphicon-chevron-left c1-text-bold font-little-large c1-color-black pull-left glyph-color\">\n                </span>\n      </a>\n      <span\n        class=\"navbar-brand c1-text-bold font-little-large c1-color-black\">\n                Pages\n            </span>\n      <a class=\"navbar-brand c1-text-bold font-little-large c1-color-black pull-right\"\n         [routerLink]=\"['/user/',userId, 'website', websiteId, 'page', 'new']\">\n                <span\n                  class=\"glyphicon glyphicon-plus glyph-color\">\n\n                </span>\n      </a>\n    </div>\n\n    <div class=\"col-xs-12 col-sm-8\">\n      <a class=\"navbar-brand visible-xs\"\n         [routerLink]=\"['/user/',userId, 'website', websiteId, 'page']\">\n                <span\n                  class=\"glyphicon c1-text-bold font-little-large c1-color-black glyphicon-chevron-left pull-left\">\n                </span>\n      </a>\n      <span\n        class=\"navbar-brand c1-text-bold font-little-large c1-color-black\">\n               New Page\n            </span>\n\n      <a class=\"navbar-brand pull-right c1-text-bold font-little-large c1-color-black\"\n         [routerLink]=\"['/user/',userId, 'website', websiteId, 'page']\" (click)=\"update()\">\n                <span class=\"glyphicon glyphicon-ok glyph-color\">\n                </span>\n      </a>\n    </div>\n  </div>\n</nav>\n\n<div class=\"container-fluid top-margin full-height\">\n  <div class=\"row full-height\">\n    <div class=\"col-xs-4 hidden-xs overflow right-border full-height\">\n      <ul class=\"list-group\">\n        <li class=\"list-group-item\" *ngFor=\"let x of pages\">\n          <a [routerLink]=\"['/user', userId,'website', x.websiteId, 'page', x._id, 'widget']\">\n            <span class=\"c1-text-bold colored-link\">{{x.name}}</span>\n          </a>\n          <a [routerLink]=\"['/user', userId,'website', x.websiteId, 'page', x._id]\">\n            <span class=\"glyphicon glyphicon-cog pull-right colored-link\"></span>\n          </a>\n        </li>\n        </ul>\n\n    </div>\n    <div class=\"col-xs-12 col-sm-8 overflow full-height\">\n      <form class=\"form-signin\" #f=\"ngForm\">\n        <div class=\"form-group\">\n          <label for=\"name\"\n                 class=\"c1-text-bold font-little-large c1-color-black\">\n            Name\n          </label>\n          <input type=\"text\"\n                 id=\"name\"\n                 class=\"form-control\"\n                 placeholder=\"Name\"\n                 name=\"name\"\n                 value=\"Blog Post\"\n                 [(ngModel)]=\"page['name']\" required autofocus>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"title\"\n                 class=\"c1-text-bold font-little-large c1-color-black\"\n          >\n            Title\n          </label>\n          <input type=\"text\"\n                 id=\"title\"\n                 class=\"form-control\"\n                 placeholder=\"Title\"\n                 name=\"title\"\n                 required>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"title\"\n                 class=\"c1-text-bold font-little-large c1-color-black\"\n          >\n            Description\n          </label>\n          <input type=\"text\"\n                 id=\"descr\"\n                 class=\"form-control\"\n                 placeholder=\"Description\"\n                 name=\"descr\"\n                 [(ngModel)]=\"page['description']\"\n                 required>\n        </div>\n        <div class=\"form-group\">\n          <a [routerLink]=\"['/user/',userId, 'website', websiteId, 'page']\"\n             class=\"btn btn-lg btn-block btn-danger\"\n             type=\"submit\" (click) = \"delete()\">\n            Delete\n          </a>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n\n<nav class=\"navbar navbar-fixed-bottom navbar-custom\">\n  <div class=\"container-fuild\">\n    <a [routerLink]=\"['/user/',userId]\"\n       class=\"navbar-link navbar-text pull-right c1-color-black c1-text-bold cl-icon-padding\">\n            <span class=\"glyphicon glyphicon-user glyph-color\">\n\n            </span>\n    </a>\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/page/page-edit/page-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_page_service_client__ = __webpack_require__("../../../../../src/app/services/page.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PageEditComponent = (function () {
    function PageEditComponent(activatedRoute, pageService, titleService) {
        this.activatedRoute = activatedRoute;
        this.pageService = pageService;
        this.titleService = titleService;
    }
    PageEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.userId = params['uid'];
            _this.websiteId = params['wid'];
            _this.pageId = params['pid'];
            _this.pages = _this.pageService.findPageByWebsiteId(_this.websiteId);
            _this.page = _this.pageService.findPageById(_this.pageId);
            _this.titleService.setTitle('Edit Page');
        });
    };
    PageEditComponent.prototype.update = function () {
        this.page['name'] = this.editForm.value.name;
        this.page['description'] = this.editForm.value.descr;
        this.pageService.updatePage(this.pageId, this.page);
    };
    PageEditComponent.prototype.delete = function () {
        this.pageService.deletePage(this.pageId);
    };
    return PageEditComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('f'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NgForm */]) === "function" && _a || Object)
], PageEditComponent.prototype, "editForm", void 0);
PageEditComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-page-edit',
        template: __webpack_require__("../../../../../src/app/components/page/page-edit/page-edit.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/page/page-edit/page-edit.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_page_service_client__["a" /* PageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_page_service_client__["a" /* PageService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["c" /* Title */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["c" /* Title */]) === "function" && _d || Object])
], PageEditComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=page-edit.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/page/page-list/page-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/page/page-list/page-list.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-fixed-top navbar-custom\">\n  <div class=\"container-fluid\">\n    <a class=\"navbar-brand\"\n       [routerLink]=\"['/user/',userId, 'website']\">\n            <span\n              class=\"glyphicon c1-color-black glyphicon-chevron-left pull-left glyph-color\">\n\n            </span>\n    </a>\n    <span\n      class=\"navbar-brand\">\n                Pages\n        </span>\n    <a class=\"navbar-brand pull-right\"\n       [routerLink]=\"['/user/',userId, 'website', webId, 'page', 'new']\">\n            <span\n              class=\"glyphicon glyphicon-plus glyph-color\">\n\n            </span>\n    </a>\n  </div>\n</nav>\n\n\n<div class=\"container-fluid overflow center-container top-margin\">\n  <ul class=\"list-group\">\n    <li class=\"list-group-item\" *ngFor=\"let x of pages\">\n      <a [routerLink]=\"['/user', userId,'website', x.websiteId, 'page', x._id, 'widget']\">\n        <span class=\"c1-text-bold colored-link\">{{x.name}}</span>\n      </a>\n      <a [routerLink]=\"['/user', userId,'website', x.websiteId, 'page', x._id]\">\n        <span class=\"glyphicon glyphicon-cog pull-right colored-link\"></span>\n      </a>\n    </li>\n\n    <!-- if there are no pages for a website-->\n\n\n    <li class=\"colored-link list-unstyled\" *ngIf=\"pages.length == 0\">\n      <i>No Pages Found</i>\n      <hr>\n      <span class=\"glyphicon glyphicon-plus glyph-color left-margin\"></span>\n      <a class=\"colored-link\" [routerLink]=\"['new']\">\n        Create New Page\n      </a>\n\n    </li>\n\n  </ul>\n</div>\n\n<nav class=\"navbar navbar-fixed-bottom navbar-custom\">\n  <div class=\"container-fluid\">\n    <a [routerLink]=\"['/user/', userId]\"\n       class=\"navbar-link navbar-text pull-right c1-color-black c1-text-bold cl-icon-padding\">\n            <span class=\"glyphicon glyphicon-user glyph-color\">\n\n            </span>\n    </a>\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/page/page-list/page-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_page_service_client__ = __webpack_require__("../../../../../src/app/services/page.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PageListComponent = (function () {
    function PageListComponent(route, pageService, titleService) {
        this.route = route;
        this.pageService = pageService;
        this.titleService = titleService;
    }
    PageListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.userId = params['uid'];
            _this.webId = params['wid'];
            _this.pageId = params['pid'];
            _this.pages = _this.pageService.findPageByWebsiteId(_this.webId);
            _this.titleService.setTitle('Page List');
        });
    };
    return PageListComponent;
}());
PageListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-page-list',
        template: __webpack_require__("../../../../../src/app/components/page/page-list/page-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/page/page-list/page-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_page_service_client__["a" /* PageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_page_service_client__["a" /* PageService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["c" /* Title */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["c" /* Title */]) === "function" && _c || Object])
], PageListComponent);

var _a, _b, _c;
//# sourceMappingURL=page-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/page/page-new/page-new.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/page/page-new/page-new.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-fixed-top navbar-custom\">\n  <div class=\"row\">\n    <div class=\"col-xs-4 hidden-xs\">\n      <a class=\"navbar-brand\"\n         [routerLink]=\"['/user', userId, 'website', websiteId, 'page']\">\n                <span\n                  class=\"glyphicon glyphicon-chevron-left c1-text-bold font-little-large c1-color-black pull-left glyph-color\">\n                </span>\n      </a>\n      <span\n        class=\"navbar-brand c1-text-bold font-little-large c1-color-black\">\n                Pages\n            </span>\n      <a class=\"navbar-brand c1-text-bold font-little-large c1-color-black pull-right\"\n         [routerLink]=\"['/user', userId, 'website', websiteId, 'page', 'new']\">\n                <span\n                  class=\"glyphicon glyphicon-plus glyph-color\">\n\n                </span>\n      </a>\n    </div>\n\n    <div class=\"col-xs-12 col-sm-8\">\n      <a class=\"navbar-brand visible-xs\"\n         [routerLink]=\"['/user', userId, 'website', websiteId, 'page']\">\n                <span\n                  class=\"glyphicon c1-text-bold font-little-large c1-color-black glyphicon-chevron-left pull-left\">\n                </span>\n      </a>\n      <span\n        class=\"navbar-brand c1-text-bold font-little-large c1-color-black\">\n               New Page\n            </span>\n\n      <a (click)=\"add()\" class=\"navbar-brand pull-right c1-text-bold font-little-large c1-color-black\"\n         [routerLink]=\"['/user', userId, 'website', websiteId, 'page']\">\n                <span class=\"glyphicon glyphicon-ok glyph-color\">\n                </span>\n      </a>\n    </div>\n  </div>\n</nav>\n\n\n<div class=\"container-fluid top-margin full-height\">\n  <div class=\"row full-height\">\n    <div class=\"col-xs-4 hidden-xs overflow right-border full-height\">\n      <ul class=\"list-group\">\n        <li class=\"list-group-item\" *ngFor=\"let x of pages\">\n          <a [routerLink]=\"['/user', userId,'website', x.websiteId, 'page', x._id, 'widget']\">\n            <span class=\"c1-text-bold colored-link\">{{x.name}}</span>\n          </a>\n          <a [routerLink]=\"['/user', userId,'website', x.websiteId, 'page', x._id]\">\n            <span class=\"glyphicon glyphicon-cog pull-right colored-link\"></span>\n          </a>\n        </li>\n      </ul>\n    </div>\n    <div class=\"col-xs-12 col-sm-8 overflow full-height\">\n      <form class=\"form-signin\" #f=\"ngForm\">\n        <div class=\"form-group\">\n          <label for=\"name\"\n                 class=\"c1-text-bold font-little-large c1-color-black\">\n            Name\n          </label>\n          <input type=\"text\"\n                 id=\"name\"\n                 class=\"form-control\"\n                 placeholder=\"Name\"\n                 name=\"name\"\n                 #name=\"\"\n                 required autofocus\n          ngModel>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"title\"\n                 class=\"c1-text-bold font-little-large c1-color-black\">\n            Title\n          </label>\n          <input type=\"text\"\n                 id=\"title\"\n                 name=\"title\"\n                 class=\"form-control\"\n                 placeholder=\"Title\"\n                 required\n          ngModel>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"descr\"\n                 class=\"c1-text-bold font-little-large c1-color-black\">\n            Description\n          </label>\n          <input type=\"text\"\n                 id=\"descr\"\n                 name=\"descr\"\n                 class=\"form-control\"\n                 placeholder=\"Description\"\n                 required\n          ngModel>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n\n<nav class=\"navbar navbar-fixed-bottom navbar-custom\">\n  <div class=\"container-fuild\">\n    <a [routerLink]=\"['/user/', userId]\"\n       class=\"navbar-link navbar-text pull-right c1-color-black c1-text-bold cl-icon-padding\">\n            <span class=\"glyphicon glyphicon-user glyph-color\">\n\n            </span>\n    </a>\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/page/page-new/page-new.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageNewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_page_service_client__ = __webpack_require__("../../../../../src/app/services/page.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PageNewComponent = (function () {
    function PageNewComponent(activatedRoute, pageService, router, titleService) {
        this.activatedRoute = activatedRoute;
        this.pageService = pageService;
        this.router = router;
        this.titleService = titleService;
    }
    PageNewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.userId = params['uid'];
            _this.websiteId = params['wid'];
            _this.pages = _this.pageService.findPageByWebsiteId(_this.websiteId);
            _this.titleService.setTitle('New Page');
        });
    };
    PageNewComponent.prototype.add = function () {
        var page = {};
        this.name = this.newForm.value.name;
        this.descr = this.newForm.value.descr;
        page['name'] = this.name;
        page['description'] = this.descr;
        this.pageService.createPage(this.websiteId, page);
        this.router.navigate(['user', this.userId, 'website', this.websiteId, 'page']);
    };
    return PageNewComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('f'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* NgForm */]) === "function" && _a || Object)
], PageNewComponent.prototype, "newForm", void 0);
PageNewComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-page-new',
        template: __webpack_require__("../../../../../src/app/components/page/page-new/page-new.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/page/page-new/page-new.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_page_service_client__["a" /* PageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_page_service_client__["a" /* PageService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["c" /* Title */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["c" /* Title */]) === "function" && _e || Object])
], PageNewComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=page-new.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/test/test.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/test/test.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\">\n\n  <h1>Test</h1>\n\n  <div *ngIf=\"alertMessage\"\n       class=\"alert alert-danger\">\n    \"Failed to create\"\n  </div>\n\n  <div *ngIf=\"successMessage\"\n       class=\"alert alert-success\">\n    \"Succesfully created/deleted\"\n  </div>\n\n  <table class=\"table\">\n    <thead>\n    <tr>\n      <th>Test Message</th>\n      <th>&nbsp;</th>\n    </tr>\n\n\n    <tr>\n      <td>\n        <input [(ngModel)]=\"message\"\n               placeholder=\"message\"\n               class=\"form-control\"/>\n      </td>\n\n\n      <td>\n        <button (click)=\"createMessage()\"\n                class=\"btn btn-primary pull-right\">\n          <span class=\"glyphicon glyphicon-plus\"></span>\n        </button>\n      </td>\n    </tr>\n    </thead>\n\n\n    <tbody>\n    <tr *ngFor=\"let message of messages\">\n      <td>\n        {{message.message}}\n      </td>\n      <td>\n        <button (click)=\"deleteMessage(message._id)\"\n                class=\"btn btn-danger pull-right\">\n          <span class=\"glyphicon glyphicon-remove\"></span>\n        </button>\n      </td>\n    </tr>\n    </tbody>\n  </table>\n\n</div>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/components/test/test.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_test_service_client__ = __webpack_require__("../../../../../src/app/services/test.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TestComponent = (function () {
    function TestComponent(_testService) {
        this._testService = _testService;
        this.alertMessage = false;
        this.successMessage = false;
        this.messages = [];
    }
    TestComponent.prototype.ngOnInit = function () {
        this.findAllMessages();
    };
    TestComponent.prototype.findAllMessages = function () {
        var _this = this;
        return this._testService.findAllMessages()
            .subscribe(function (data) {
            _this.messages = data;
        });
    };
    TestComponent.prototype.createMessage = function () {
        var _this = this;
        return this._testService.createMessage(this.message)
            .subscribe(function (data) {
            _this.successMessage = true;
            _this.ngOnInit();
            _this.message = null;
        });
    };
    TestComponent.prototype.deleteMessage = function (messageId) {
        var _this = this;
        return this._testService.deleteMessage(messageId)
            .subscribe(function (data) {
            _this.successMessage = true;
            _this.ngOnInit();
        });
    };
    return TestComponent;
}());
TestComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-test',
        template: __webpack_require__("../../../../../src/app/components/test/test.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/test/test.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_test_service_client__["a" /* TestService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_test_service_client__["a" /* TestService */]) === "function" && _a || Object])
], TestComponent);

var _a;
//# sourceMappingURL=test.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/user/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div *ngIf=\"errorFlag\"\n       class=\"alert alert-danger\">\n    {{errorMsg}}\n  </div>\n\n  <h1>Login</h1>\n  <form (ngSubmit) = \"login()\" #f=\"ngForm\">\n  <input placeholder=\"username\"\n         name=\"username\"\n         type=\"text\"\n         class=\"form-control bottom-buffer\"\n         ngModel required autofocus\n         #username=\"ngModel\"/>\n    <span class=\"help-block\" *ngIf=\"!username.valid && username.touched\">Please enter a username! </span>\n  <input placeholder=\"password\"\n         type=\"password\"\n         name=\"password\"\n         ngModel\n         class=\"form-control bottom-buffer\"\n         #password=\"ngModel\" required/>\n    <span class=\"help-block\" *ngIf=\"!password.valid && password.touched\">Please enter a password! </span>\n  <button class=\"btn btn-primary btn-block bottom-buffer\" type=\"submit\" [disabled]=\"!f.valid\">Login</button>\n  <button class=\"btn btn-success btn-block bottom-buffer\" [routerLink]=\"['/register']\" >Register</button>\n</form>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/user/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
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
    function LoginComponent(router, userService, titleService) {
        this.router = router;
        this.userService = userService;
        this.titleService = titleService;
        this.errorMsg = 'Invalid credentials!';
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.titleService.setTitle('Login');
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.username = this.loginForm.value.username;
        this.password = this.loginForm.value.password;
        this.userService.findUserByCredentials(this.username, this.password)
            .subscribe(function (user) {
            _this.errorFlag = false;
            _this.router.navigate(['/user', user._id]);
        }, function (error) {
            _this.errorFlag = true;
        });
    };
    return LoginComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('f'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NgForm */]) === "function" && _a || Object)
], LoginComponent.prototype, "loginForm", void 0);
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/components/user/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/user/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["c" /* Title */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["c" /* Title */]) === "function" && _d || Object])
], LoginComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/user/profile/profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-fixed-top navbar-custom \">\n  <div class=\"container-fluid\">\n\n\n    <p class=\"navbar-header pull-left\">\n      <a class=\"navbar-brand glyph-color\">\n        <b>Profile</b>\n      </a>\n    </p>\n\n    <p class=\"navbar-text pull-right\">\n      <a (click) = \"update()\" [routerLink]=\"['/user', userId]\" class=\"navbar-link\">\n        <span class=\"glyphicon glyphicon-ok glyph-color\"></span>\n      </a>\n    </p>\n\n  </div>\n</nav>\n\n\n<div class=\"container top-margin\">\n  <form #f=\"ngForm\">\n    <div class=\"form-group\">\n      <label for=\"username\">Username</label>\n      <input [(ngModel)]=\"username\" name=\"username\" type=\"text\" class=\"form-control bottom-buffer\" id=\"username\" placeholder=\"vshamnani\" readonly>\n    </div>\n\n\n\n    <div class=\"form-group\">\n      <label for=\"email\">Email address</label>\n      <input name=\"email\" type=\"email\" class=\"form-control bottom-buffer\" id=\"email\" placeholder=\"shamnani.v@husky.neu.edu\">\n    </div>\n\n\n\n    <div class=\"form-group\">\n      <label for=\"first-name\">First Name</label>\n      <input [(ngModel)]=\"firstName\" name=\"firstName\" type=\"text\" class=\"form-control bottom-buffer\" id=\"first-name\" placeholder=\"Vinayak\">\n    </div>\n\n\n\n    <div class=\"form-group\">\n      <label for=\"last-name\">Last Name</label>\n      <input [(ngModel)]=\"lastName\" name=\"lastName\"type=\"text\" class=\"form-control bottom-buffer\" id=\"last-name\" placeholder=\"Shamnani\">\n    </div>\n\n  <a class=\"btn btn-primary btn-block\"\n     [routerLink]=\"['/user/',userId,'website']\">Websites</a>\n  <a class=\"btn btn-danger btn-block bottom-margin\"\n     [routerLink]=\"['/login']\" >Logout</a>\n  </form>\n</div>\n\n\n<nav class=\"navbar navbar-fixed-bottom navbar-custom\">\n  <div class=\"container-fluid\">\n    <p class=\"navbar-text pull-right\">\n      <a [routerLink]=\"['/user/',userId]\" class=\"navbar-link navbar-text pull-right c1-color-black c1-text-bold cl-icon-padding\">\n        <span class=\"glyphicon glyphicon-user glyph-color\"></span>\n      </a>\n    </p>\n\n  </div>\n</nav>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/components/user/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProfileComponent = (function () {
    function ProfileComponent(userService, activatedRoute, titleService) {
        this.userService = userService;
        this.activatedRoute = activatedRoute;
        this.titleService = titleService;
        this.user = {};
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.titleService.setTitle('User Profile');
        this.activatedRoute.params.subscribe(function (params) {
            _this.userId = params['uid'];
            _this.user = _this.userService.findUserById(_this.userId).subscribe(function (user) {
                _this.user = user;
                _this.username = _this.user['username'];
                _this.email = _this.user['email'];
                _this.firstName = _this.user['firstName'];
                _this.lastName = _this.user['lastName'];
                console.log('FirstName is ' + _this.firstName);
            }, function (error) {
                console.log(error);
            });
        });
    };
    ProfileComponent.prototype.update = function () {
        var _this = this;
        this.user['username'] = this.profileForm.value.username;
        this.user['email'] = this.profileForm.value.email;
        this.user['firstName'] = this.profileForm.value.firstName;
        this.user['lastName'] = this.profileForm.value.lastName;
        this.userService.updateUser(this.userId, this.user)
            .subscribe(function (updatedUser) {
            if (updatedUser) {
                _this.user = updatedUser;
            }
        }, function (err) {
        });
    };
    return ProfileComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('f'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* NgForm */]) === "function" && _a || Object)
], ProfileComponent.prototype, "profileForm", void 0);
ProfileComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-profile',
        template: __webpack_require__("../../../../../src/app/components/user/profile/profile.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/user/profile/profile.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_user_service_client__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["c" /* Title */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["c" /* Title */]) === "function" && _d || Object])
], ProfileComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=profile.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/user/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div *ngIf=\"userExistsFlag\"\n       class=\"alert alert-danger\">\n    {{userExistsMessage}}\n  </div>\n  <div *ngIf=\"errorFlag\"\n       class=\"alert alert-danger\">\n    {{errorMessage}}\n  </div>\n  <h1>User Registration</h1>\n  <form (ngSubmit) = \"register()\" #f=\"ngForm\">\n  <input placeholder=\"Username\"\n         name=\"username\"\n         type=\"text\"\n         class=\"form-control bottom-buffer\"\n         ngModel\n         required\n         #username=\"ngModel\"/>\n    <span class=\"help-block\" *ngIf=\"!username.valid && username.touched\">\n      Username cannot be blank!\n    </span>\n  <input placeholder=\"password\"\n         name=\"password\"\n         type=\"password\"\n         class=\"form-control bottom-buffer\"\n         ngModel\n         required\n         #password=\"ngModel\"\n         />\n    <span class=\"help-block\" *ngIf=\"!password.valid && password.touched\">\n      Please enter a valid password!\n   </span>\n  <input placeholder=\"Verify Password\"\n         type=\"password\"\n         name=\"verifypwd\"\n         ngModel\n         required\n         #verifypwd=\"ngModel\"\n         class=\"form-control bottom-buffer\"\n  />\n    <span class=\"help-block\" *ngIf=\"!verifypwd.valid && verifypwd.touched\">\n      Please re-enter your password!\n   </span>\n  <button class=\"btn btn-primary btn-block bottom-buffer\" type=\"submit\" [disabled]=\"!f.valid\">Register</button>\n  <button class=\"btn btn-danger btn-block bottom-buffer  \"\n     [routerLink]=\"['/login']\" >Cancel</button>\n  </form>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/user/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterComponent = (function () {
    function RegisterComponent(router, userService, titleService) {
        this.router = router;
        this.userService = userService;
        this.titleService = titleService;
        this.errorMessage = 'Passwords do not match';
        this.userExistsMessage = 'Username not available. Choose a different username.';
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.titleService.setTitle('Register');
    };
    RegisterComponent.prototype.register = function () {
        var _this = this;
        var user = {};
        this.username = this.registrationForm.value.username;
        this.password = this.registrationForm.value.password;
        this.verifypwd = this.registrationForm.value.verifypwd;
        var user2 = this.userService.findUserByUsername(this.username)
            .subscribe(function (user) {
            _this.userExistsFlag = true;
        }, function (error) {
            if (_this.password === _this.verifypwd) {
                var user_1 = { _id: '', username: _this.username, password: _this.password, firstName: '', lastName: '' };
                _this.userService.createUser(user_1)
                    .subscribe(function (user2) {
                    _this.router.navigate(['/user', user2._id]);
                }, function (error) {
                    _this.errorFlag = true;
                    _this.errorMessage = 'Error registering';
                });
            }
            else {
                _this.errorFlag = true;
            }
        });
    };
    return RegisterComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('f'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* NgForm */]) === "function" && _a || Object)
], RegisterComponent.prototype, "registrationForm", void 0);
RegisterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-register',
        template: __webpack_require__("../../../../../src/app/components/user/register/register.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/user/register/register.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["c" /* Title */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["c" /* Title */]) === "function" && _d || Object])
], RegisterComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=register.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/website/website-edit/website-edit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/website/website-edit/website-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-fixed-top navbar-custom\">\n  <div class=\"row \">\n    <div class=\"col-xs-4 hidden-xs\">\n      <a class=\"navbar-brand\"\n         [routerLink]=\"['/user/',userId,'website']\">\n                <span\n                  class=\"glyphicon glyphicon-chevron-left pull-left glyph-color\">\n                </span>\n      </a>\n\n      <span\n        class=\"navbar-brand\">\n                Websites\n            </span>\n      <a class=\"navbar-brand pull-right navbar-custom\"\n         [routerLink]=\"['/user/',userId,'website','new']\">\n                <span\n                  class=\"glyphicon glyphicon-plus\">\n                </span>\n      </a>\n\n\n    </div>\n    <div class=\"col-xs-12 col-sm-8\">\n      <a class=\"navbar-brand visible-xs\"\n         [routerLink]=\"['/user/',userId,'website']\">\n                <span\n                  class=\"glyphicon glyphicon-chevron-left pull-left glyph-color\">\n                </span>\n      </a>\n      <span\n        class=\"navbar-brand \">\n               New Website\n            </span>\n      <a class=\"navbar-brand pull-right\" (click)=\"update()\"\n         [routerLink]=\"['/user/',userId,'website']\">\n                <span class=\"glyphicon glyphicon-ok glyph-color\">\n                </span>\n      </a>\n    </div>\n  </div>\n</nav>\n\n<div class=\"body row container-fluid top-margin\">\n  <div class=\"col-sm-4 hidden-xs\">\n    <ul class=\"list-group\">\n      <li class=\"list-group-item\" *ngFor=\"let x of websites\">\n        <a class=\"colored-link\" [routerLink]=\"['/user/',userId,'website',x._id,'page']\"><b>{{x.name}}</b> </a>\n        <a class=\"colored-link\" [routerLink]=\"['/user/',userId,'website',x._id]\"> <span class=\"pull-right glyphicon glyphicon-cog\"></span></a>\n      </li>\n    </ul>\n  </div>\n\n  <div class=\"col-sm-8 \">\n    <form #f = \"ngForm\">\n      <div class=\"form-group\">\n        <label for=\"inputName\">Name</label>\n        <input [(ngModel)]='name' name =\"name\"\n               type=\"text\" class=\"form-control\" id=\"inputName\" placeholder=\"Website Name\" ngModel #nameng = \"ngModel\">\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"desc\">Description</label>\n        <textarea [(ngModel)]='descr' name =\"desc\"\n                  class=\"form-control\" rows=\"5\" id=\"desc\" placeholder=\"Website Description\" ngModel #description = \"ngModel\"></textarea>\n      </div>\n      <a (click)=\"delete()\"  [routerLink]=\"['/user/',userId,'website']\" class=\"btn btn-danger btn-block\">Delete</a>\n    </form>\n  </div>\n</div>\n\n  <nav class=\"navbar navbar-fixed-bottom navbar-custom\">\n  <div class=\"container-fuild\">\n    <a [routerLink]=\"['/user/', userId]\" class=\"navbar-link navbar-text pull-right c1-color-black c1-text-bold cl-icon-padding\">\n      <span class=\"glyphicon glyphicon-user glyph-color\"></span>\n    </a>\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/website/website-edit/website-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebsiteEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_website_service_client__ = __webpack_require__("../../../../../src/app/services/website.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var WebsiteEditComponent = (function () {
    function WebsiteEditComponent(route, websiteService, titleService) {
        this.route = route;
        this.websiteService = websiteService;
        this.titleService = titleService;
        this.website = {};
    }
    WebsiteEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.userId = params['uid'];
            _this.websiteId = params['wid'];
            _this.website = _this.websiteService.findWebsiteById(_this.websiteId);
            _this.websites = _this.websiteService.findWebsiteByUser(_this.userId);
            _this.descr = _this.websiteService.findWebsiteById(_this.websiteId).description;
            _this.name = _this.websiteService.findWebsiteById(_this.websiteId).name;
        });
        this.titleService.setTitle('Edit Website');
    };
    WebsiteEditComponent.prototype.update = function () {
        this.website['name'] = this.editForm.value.name;
        this.website['description'] = this.editForm.value.desc;
        this.websiteService.updateWebsite(this.websiteId, this.website);
    };
    WebsiteEditComponent.prototype.delete = function () {
        this.websiteService.deleteWebsite(this.websiteId);
    };
    return WebsiteEditComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('f'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* NgForm */]) === "function" && _a || Object)
], WebsiteEditComponent.prototype, "editForm", void 0);
WebsiteEditComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-website-edit',
        template: __webpack_require__("../../../../../src/app/components/website/website-edit/website-edit.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/website/website-edit/website-edit.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_website_service_client__["a" /* WebsiteService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_website_service_client__["a" /* WebsiteService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["c" /* Title */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["c" /* Title */]) === "function" && _d || Object])
], WebsiteEditComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=website-edit.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/website/website-list/website-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/website/website-list/website-list.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-fixed-top navbar-custom\">\n  <div class=\"container-fluid\">\n    <p class=\"navbar-text pull-left\">\n      <a [routerLink]=\"['/user/',userId]\"\n         class=\"navbar-link font-little-large\">\n                <span class=\"glyphicon glyphicon-chevron-left glyph-color\">\n                </span>\n      </a>\n    </p>\n\n    <span class=\"navbar-brand\">\n            Websites\n        </span>\n\n    <a [routerLink]=\"['/user/',userId,'website','new']\" class=\"navbar-link navbar-text pull-right cl-icon-padding\">\n      <span class=\"glyphicon glyphicon-plus glyph-color\"></span>\n    </a>\n  </div>\n</nav>\n\n\n<div class=\"container-fluid top-margin\">\n  <ul class=\"list-group\" >\n    <li class=\"list-group-item\" *ngFor=\"let x of websites\">\n      <a [routerLink]=\"['/user/',userId,'website',x._id,'page']\"><span class=\"c1-text-bold colored-link\">{{x.name}}</span></a>\n      <a [routerLink]=\"['/user/',userId,'website',x._id]\">\n        <span class=\"glyphicon glyphicon-cog pull-right colored-link\"></span></a>\n    </li>\n\n    <li class=\"colored-link list-unstyled\" *ngIf=\"websites.length == 0\">\n      <i>No Websites Found</i>\n      <hr>\n      <span class=\"glyphicon glyphicon-plus colored-link left-margin\"></span>\n      <a class=\"no-color \" [routerLink]=\"['new']\">\n        Create New Website\n      </a>\n\n    </li>\n  </ul>\n</div>\n\n\n\n<nav class=\"navbar navbar-fixed-bottom navbar-custom\">\n  <div class=\"container-fuild\">\n    <a [routerLink]=\"['/user/',userId]\" class=\"navbar-link navbar-text pull-right c1-color-black c1-text-bold cl-icon-padding\">\n      <span class=\"glyphicon glyphicon-user glyph-color\"></span>\n    </a>\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/website/website-list/website-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebsiteListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_website_service_client__ = __webpack_require__("../../../../../src/app/services/website.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WebsiteListComponent = (function () {
    function WebsiteListComponent(route, websiteService, titleService) {
        this.route = route;
        this.websiteService = websiteService;
        this.titleService = titleService;
    }
    WebsiteListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.userId = params['uid'];
            _this.websites = _this.websiteService.findWebsiteByUser(_this.userId);
        });
        this.titleService.setTitle('Website List');
    };
    return WebsiteListComponent;
}());
WebsiteListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-website-list',
        template: __webpack_require__("../../../../../src/app/components/website/website-list/website-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/website/website-list/website-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_website_service_client__["a" /* WebsiteService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_website_service_client__["a" /* WebsiteService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["c" /* Title */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["c" /* Title */]) === "function" && _c || Object])
], WebsiteListComponent);

var _a, _b, _c;
//# sourceMappingURL=website-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/website/website-new/website-new.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/website/website-new/website-new.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-fixed-top navbar-custom\">\n  <div class=\"row \">\n    <div class=\"col-xs-4 hidden-xs\">\n      <a class=\"navbar-brand\"\n         [routerLink]=\"['/user/',userId,'website']\">\n                <span\n                  class=\"glyphicon glyphicon-chevron-left pull-left glyph-color\">\n                </span>\n      </a>\n      <span\n        class=\"navbar-brand c1-text-bold font-little-large c1-color-black\">\n                Websites\n            </span>\n      <a class=\"navbar-brand pull-right navbar-custom\"\n         [routerLink]=\"['/user/',userId,'website','new']\">\n                <span\n                  class=\"glyphicon glyphicon-plus\">\n                </span>\n      </a>\n\n\n    </div>\n    <div class=\"col-xs-12 col-sm-8\">\n      <a class=\"navbar-brand visible-xs\"\n         [routerLink]=\"['/user/',userId,'website']\">\n                <span\n                  class=\"glyphicon glyphicon-chevron-left pull-left\">\n                </span>\n      </a>\n      <span\n        class=\"navbar-brand \">\n               New Website\n            </span>\n      <a class=\"navbar-brand pull-right\"\n         (click)=\"add()\" [routerLink]=\"['/user/',userId,'website']\">\n                <span class=\"glyphicon glyphicon-ok glyph-color\">\n                </span>\n      </a>\n    </div>\n  </div>\n</nav>\n\n<div class=\"container-fluid top-margin row\">\n  <div class=\"col-sm-4 hidden-xs\">\n\n      <ul class=\"list-group\">\n        <li class=\"list-group-item\" *ngFor=\"let x of websites\">\n          <a class=\"colored-link\" [routerLink]=\"['/user/',userId,'website',x._id,'page']\"><span class=\"colored-link\">{{x.name}}</span> </a>\n          <a class=\"colored-link\" [routerLink]=\"['/user/',userId,'website',x._id]\"> <span class=\"pull-right glyphicon glyphicon-cog colored-link\"></span></a>\n        </li>\n      </ul>\n\n  </div>\n\n\n  <div class=\"col-sm-8\">\n    <div class=\"form-group\">\n      <label for=\"inputName\">Name</label>\n      <input [(ngModel)]='name' type=\"text\" class=\"form-control\" id=\"inputName\" placeholder=\"Website Name\">\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"descr\">Description</label>\n      <textarea [(ngModel)]='descr' class=\"form-control\" rows=\"5\" id=\"descr\" placeholder=\"Website Description\"></textarea>\n    </div>\n\n  </div>\n\n</div>\n\n<nav class=\"navbar navbar-fixed-bottom navbar-custom\">\n  <div class=\"container-fuild\">\n    <a [routerLink]=\"['/user/',userId]\" class=\"navbar-link navbar-text pull-right c1-color-black c1-text-bold cl-icon-padding\">\n      <span class=\"glyphicon glyphicon-user glyph-color\"></span>\n    </a>\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/website/website-new/website-new.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebsiteNewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_website_service_client__ = __webpack_require__("../../../../../src/app/services/website.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WebsiteNewComponent = (function () {
    function WebsiteNewComponent(route, websiteService, titleService) {
        this.route = route;
        this.websiteService = websiteService;
        this.titleService = titleService;
    }
    WebsiteNewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.userId = params['uid'];
            _this.websites = _this.websiteService.findWebsiteByUser(_this.userId);
            _this.websiteId = params['wid'];
        });
        this.titleService.setTitle('New Website');
    };
    WebsiteNewComponent.prototype.add = function () {
        this.websiteService.createWebsite(this.userId, { _id: '', name: this.name, developerId: this.userId, description: this.descr });
    };
    return WebsiteNewComponent;
}());
WebsiteNewComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-website-new',
        template: __webpack_require__("../../../../../src/app/components/website/website-new/website-new.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/website/website-new/website-new.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_website_service_client__["a" /* WebsiteService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_website_service_client__["a" /* WebsiteService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["c" /* Title */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["c" /* Title */]) === "function" && _c || Object])
], WebsiteNewComponent);

var _a, _b, _c;
//# sourceMappingURL=website-new.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-choose/widget-choose.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-choose/widget-choose.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid custom-center-container\">\n\n  <nav class=\"navbar navbar-fixed-top navbar-custom\">\n    <div class=\"container-fluid\">\n      <a class=\"navbar-brand\" [routerLink]=\"['/user',userId,\n          'website',websiteId,\n          'page',pageId,'widget']\"><span\n        class=\"glyphicon glyphicon-chevron-left pull-left glyph-color\"></span></a>\n      <span class=\"navbar-brand\">\n              Choose a Widget\n            </span>\n    </div>\n  </nav>\n  <div class=\"top-margin\">\n    <ul class=\"list-group\">\n      <li class=\"list-group-item\">\n        <a class=\"colored-link\" (click)=\"add('HEADING')\">Header</a>\n      </li>\n      <li class=\"list-group-item\">\n        <a class=\"colored-link\" (click)=\"add('IMAGE')\">Image</a>\n      </li>\n      <li class=\"list-group-item\">\n        <a class=\"colored-link\" (click)=\"add('YOUTUBE')\">Youtube</a>\n      </li>\n    </ul>\n  </div>\n\n  <nav class=\"navbar navbar-fixed-bottom navbar-custom\">\n    <div class=\"container-fluid\">\n      <a class=\"navbar-link navbar-text c1-color-black c1-text-bold cl-icon-padding\" href=\"#\"><span class=\"glyphicon glyphicon-play glyph-color\"></span></a>\n      <a class=\"navbar-link navbar-text c1-color-black c1-text-bold cl-icon-padding\" href=\"#\"><span class=\"glyphicon glyphicon-eye-open glyph-color\"></span></a>\n      <a class=\"navbar-link navbar-text pull-right c1-color-black c1-text-bold cl-icon-padding\" [routerLink]=\"['/user', userId]\"><span class=\"glyphicon glyphicon-user glyph-color\"></span></a>\n    </div>\n  </nav>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-choose/widget-choose.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetChooseComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WidgetChooseComponent = (function () {
    function WidgetChooseComponent(route, router, widgetService, titleService) {
        this.route = route;
        this.router = router;
        this.widgetService = widgetService;
        this.titleService = titleService;
    }
    WidgetChooseComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.userId = params['uid'];
            _this.websiteId = params['wid'];
            _this.pageId = params['pid'];
            _this.titleService.setTitle('Choose a Widget');
        });
    };
    WidgetChooseComponent.prototype.add = function (wType) {
        var widget = {
            widgetType: wType,
            _id: '0',
        };
        widget = this.widgetService.createWidget(this.pageId, widget);
        this.router.navigate(['../' + widget._id], { relativeTo: this.route });
    };
    return WidgetChooseComponent;
}());
WidgetChooseComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-widget-choose',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-choose/widget-choose.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-choose/widget-choose.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__["a" /* WidgetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__["a" /* WidgetService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["c" /* Title */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["c" /* Title */]) === "function" && _d || Object])
], WidgetChooseComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=widget-choose.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-edit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<div [ngSwitch]=\"widget['widgetType']\">\n\n  <div *ngSwitchCase='header'>\n    <app-widget-header></app-widget-header>\n  </div>\n\n  <div *ngSwitchCase='image'>\n    <app-widget-image></app-widget-image>\n  </div>\n\n  <div *ngSwitchCase='youtube'>\n    <app-widget-youtube></app-widget-youtube>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WidgetEditComponent = (function () {
    function WidgetEditComponent(router, activatedRoute, widgetService, titleService) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.widgetService = widgetService;
        this.titleService = titleService;
        this.header = 'HEADING';
        this.image = 'IMAGE';
        this.youtube = 'YOUTUBE';
    }
    WidgetEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.userId = params['uid'];
            _this.websiteId = params['wid'];
            _this.pageId = params['pid'];
            _this.widgetId = params['wgid'];
            _this.widget = _this.widgetService.findWidgetById(_this.widgetId);
        });
        this.titleService.setTitle('Edit Widget');
    };
    return WidgetEditComponent;
}());
WidgetEditComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-widget-edit',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-edit.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-edit.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__["a" /* WidgetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__["a" /* WidgetService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["c" /* Title */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["c" /* Title */]) === "function" && _d || Object])
], WidgetEditComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=widget-edit.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-header/widget-header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-header/widget-header.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar-custom navbar-fixed-top\">\n  <div class=\"row\">\n    <div class=\"col-xs-12\">\n      <a class=\"navbar-brand\" [routerLink]=\"['/user',userId,\n          'website',websiteId,\n          'page',pageId,\n          'widget']\"><span\n        class=\"glyphicon glyphicon-chevron-left pull-left glyph-color\"></span></a>\n      <span class=\"navbar-brand\">\n                <strong>Widget Edit</strong>\n            </span>\n      <a class=\"navbar-brand pull-right\" (click)=\"update()\"><span class=\"glyphicon glyphicon-ok glyph-color\"></span></a>\n    </div>\n  </div>\n</nav>\n\n<div class=\"container-fluid custom-center-container top-margin\">\n  <div class=\"row\">\n    <div class=\"col-xs-12\">\n      <form>\n        <div class=\"form-group\">\n          <label for=\"name\" class=\"c1-text-bold font-little-large c1-color-black\">Name</label>\n          <input type=\"text\" id=\"name\" class=\"form-control\" placeholder=\"Name\"\n                 data-toggle=\"tooltip\"\n                 title=\"Enter Widget Name\"\n                 name=\"name\"\n                 required autofocus\n                 ngModel\n                 [(ngModel)]=\"widget.name\"\n                 name=\"name\"\n                 #name=\"ngModel\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"text\" class=\"c1-text-bold font-little-large c1-color-black\">Text</label>\n          <input type=\"text\" id=\"text\" class=\"form-control\" placeholder=\"Text\"\n                 data-toggle=\"tooltip\"\n                 title=\"Enter Widget Text\"\n                 name=\"text\"\n                 id=\"text\"\n                 #text=\"ngModel\"\n                 ngModel required\n                 [(ngModel)]=\"widget.text\"\n          >\n        </div>\n        <div class=\"form-group\">\n          <label for=\"size\" class=\"c1-text-bold font-little-large c1-color-black\">Size</label>\n          <input type=\"number\" id=\"size\" class=\"form-control\" placeholder=\"Size\" value=\"6\"\n                 data-toggle=\"tooltip\"\n                 title=\"Enter Widget Size\" min=\"1\" max=\"6\" required\n                 #size=\"ngModel\"\n                  ngModel\n                 name=\"size\"\n                 [(ngModel)]=\"widget.size\"\n              >\n        </div>\n        <div class=\"form-group\">\n          <a (click)=\"delete()\" [routerLink]=\"['user',userId, 'website', websiteId, 'page', pageId, 'widget']\"  class=\"btn btn-lg btn-block btn-danger\" type=\"submit\">Delete</a>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n<nav class=\"navbar-custom navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n    <ul class=\"nav navbar-nav navbar-right\">\n      <li><a [routerLink]=\"['/user', userId]\"><span class=\"glyphicon glyphicon-user pull-right glyph-color\"></span></a></li>\n    </ul>\n\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-header/widget-header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetHeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var WidgetHeaderComponent = (function () {
    function WidgetHeaderComponent(activatedRoute, widgetService, router, titleService) {
        this.activatedRoute = activatedRoute;
        this.widgetService = widgetService;
        this.router = router;
        this.titleService = titleService;
    }
    WidgetHeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.userId = params['uid'];
            _this.websiteId = params['wid'];
            _this.pageId = params['pid'];
            _this.widgetId = params['wgid'];
            _this.widget = _this.widgetService.findWidgetById(_this.widgetId);
        });
        this.titleService.setTitle('Header Widget');
    };
    WidgetHeaderComponent.prototype.update = function () {
        this.widgetService.updateWidget(this.widgetId, this.widget);
        this.router.navigate(['/user', this.userId,
            'website', this.websiteId,
            'page', this.pageId,
            'widget']);
    };
    WidgetHeaderComponent.prototype.delete = function () {
        this.widgetService.deleteWidget(this.widgetId);
    };
    return WidgetHeaderComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('f'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NgForm */]) === "function" && _a || Object)
], WidgetHeaderComponent.prototype, "editForm", void 0);
WidgetHeaderComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-widget-header',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-header/widget-header.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-header/widget-header.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_widget_service_client__["a" /* WidgetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_widget_service_client__["a" /* WidgetService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["c" /* Title */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["c" /* Title */]) === "function" && _e || Object])
], WidgetHeaderComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=widget-header.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-image/widget-image.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-image/widget-image.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar-custom navbar-fixed-top\">\n  <div class=\"row\">\n    <div class=\"col-xs-12\">\n      <a class=\"navbar-brand\" [routerLink]=\"['/user',userId,\n          'website',websiteId,\n          'page',pageId,\n          'widget']\"><span\n        class=\"glyphicon glyphicon-chevron-left pull-left glyph-color\"></span></a>\n      <span class=\"navbar-brand\">\n                <strong>Widget Edit</strong>\n            </span>\n      <a class=\"navbar-brand pull-right\" [routerLink]=\"['/user',userId,\n          'website',websiteId,\n          'page',pageId,\n          'widget']\"><span class=\"glyphicon glyphicon-ok glyph-color\"></span></a>\n    </div>\n  </div>\n</nav>\n\n\n<div class=\"container-fluid custom-center-container top-margin\">\n  <div class=\"row\">\n    <div class=\"col-xs-12\">\n      <form>\n        <div class=\"form-group\">\n          <label for=\"name\" class=\"c1-text-bold font-little-large c1-color-black\">Name</label>\n          <input type=\"text\" id=\"name\" class=\"form-control\" placeholder=\"Name\" value=\"Sample Image\"\n                 data-toggle=\"tooltip\"\n                 title=\"Enter Widget Name\" required autofocus\n          name=\"name\"\n          ngModel [(ngModel)]=\"widget.name\"\n          >\n        </div>\n        <div class=\"form-group\">\n          <label for=\"text\" class=\"c1-text-bold font-little-large c1-color-black\">Text</label>\n          <input type=\"text\" id=\"text\" class=\"form-control\" placeholder=\"Title\"\n                 data-toggle=\"tooltip\"\n                 title=\"Enter Widget Text\"\n                 value=\"Widget Text Here\" required\n                 name=\"name\"\n                 ngModel [(ngModel)]=\"widget.text\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"url\" class=\"c1-text-bold font-little-large c1-color-black\">URL</label>\n          <input type=\"text\" id=\"url\" class=\"form-control\" placeholder=\"URL\"\n                 data-toggle=\"tooltip\"\n                 title=\"Enter Widget URL\"\n                 value=\"https://thumb1.shutterstock.com/display_pic_with_logo/3973673/602824259/stock-vector-presentation-business-infographic-template-with-options-vector-illustration-602824259.jpg\"\n                 required\n                 name=\"url\"\n                 ngModel [(ngModel)]=\"widget.url\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"width\" class=\"c1-text-bold font-little-large c1-color-black\">Width</label>\n          <input type=\"text\" id=\"width\" class=\"form-control\"\n                  data-toggle=\"tooltip\"\n                  title=\"Enter Widget width\" required\n                  name=\"width\"\n                  ngModel [(ngModel)]=\"widget.width\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"upload\" class=\"c1-text-bold font-little-large c1-color-black\">Upload</label>\n          <input type=\"file\" id=\"upload\" multiple class=\"form-control\"\n                 data-toggle=\"tooltip\"\n                 title=\"Select Widget image\"\n                 required>\n        </div>\n\n        <div class=\"form-group\">\n          <a (click)=\"delete()\"\n             [routerLink]=\"['/user',userId,\n                            'website',websiteId,\n                            'page',pageId,\n                            'widget']\"\n             class=\"btn btn-lg btn-block btn-danger\"\n             type=\"submit\">Delete</a>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n<nav class=\"navbar-custom navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n    <ul class=\"nav navbar-nav navbar-right\">\n      <li><a [routerLink]=\"['/user',userId]\"><span class=\"glyphicon glyphicon-user pull-right glyph-color\"></span></a></li>\n    </ul>\n\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-image/widget-image.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetImageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WidgetImageComponent = (function () {
    function WidgetImageComponent(widgetService, activatedRoute, router, titleService) {
        this.widgetService = widgetService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.titleService = titleService;
    }
    WidgetImageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.userId = params['uid'];
            _this.websiteId = params['wid'];
            _this.pageId = params['pid'];
            _this.widgetId = params['wgid'];
            _this.widget = _this.widgetService.findWidgetById(_this.widgetId);
        });
        this.titleService.setTitle('Image Widget');
    };
    WidgetImageComponent.prototype.delete = function () {
        this.widgetService.deleteWidget(this.widgetId);
    };
    return WidgetImageComponent;
}());
WidgetImageComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-widget-image',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-image/widget-image.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-image/widget-image.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__["a" /* WidgetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__["a" /* WidgetService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["c" /* Title */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["c" /* Title */]) === "function" && _d || Object])
], WidgetImageComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=widget-image.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar-custom navbar-fixed-top\">\n  <div class=\"row\">\n    <div class=\"col-xs-12\">\n      <a class=\"navbar-brand\" [routerLink]=\"['/user',userId,\n          'website',websiteId,\n          'page',pageId,\n          'widget']\"><span\n        class=\"glyphicon glyphicon-chevron-left pull-left glyph-color\"></span></a>\n      <span class=\"navbar-brand\">\n                <strong>Widget Edit</strong>\n            </span>\n      <a class=\"navbar-brand pull-right\" [routerLink]=\"['/user',userId,\n          'website',websiteId,\n          'page',pageId,\n          'widget']\"><span class=\"glyphicon glyphicon-ok glyph-color\"></span></a>\n    </div>\n  </div>\n</nav>\n\n\n<div class=\"container-fluid top-margin\">\n  <div class=\"row\">\n    <div class=\"col-xs-12\">\n      <form>\n        <div class=\"form-group\">\n          <label for=\"name\" >\n            Name\n          </label>\n          <input\n            type=\"text\"\n            id=\"name\"\n            class=\"form-control\"\n            placeholder=\"Name\"\n            [(ngModel)]=\"widget.name\"\n            name=\"name\"\n            required autofocus>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"text\"\n                 class=\"c1-text-bold\">\n            Text\n          </label>\n          <input\n            type=\"text\"\n            id=\"text\"\n            class=\"form-control\"\n            placeholder=\"Title\"\n            data-toggle=\"tooltip\"\n            title=\"Enter Widget Text\"\n            name=\"text\"\n            [(ngModel)]=\"widget.text\"  required>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"url\" class=\"c1-text-bold\">\n            URL\n          </label>\n          <input type=\"text\"\n                 id=\"url\"\n                 class=\"form-control\"\n                 placeholder=\"URL\"\n                 data-toggle=\"tooltip\"\n                 title=\"Enter Widget URL\"\n                 [(ngModel)]=\"widget.url\"\n                 name=\"url\"\n                 required>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"width\"\n                 class=\"c1-text-bold\">\n            Width\n          </label>\n          <input type=\"text\" id=\"width\"\n                  class=\"form-control\"\n                  data-toggle=\"tooltip\"\n                  name=\"width\"required\n                 [(ngModel)]=\"widget.width\">\n\n\n        </div>\n        <div class=\"form-group\">\n          <a (click)=\"delete()\" [routerLink]=\"['/user',userId,\n          'website',websiteId,\n          'page',pageId,\n          'widget']\"\n             class=\"btn btn-lg btn-block btn-danger\"\n             type=\"submit\">\n            Delete\n          </a>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n<nav class=\"navbar navbar-custom navbar-fixed-bottom\">\n  <div class=\"container-fuild\">\n    <a [routerLink]=\"['/user',userId]\"\n       class=\"navbar-link navbar-text pull-right c1-color-black c1-text-bold cl-icon-padding\">\n            <span class=\"glyphicon glyphicon-user glyph-color\">\n            </span>\n    </a>\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetYoutubeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WidgetYoutubeComponent = (function () {
    function WidgetYoutubeComponent(widgetService, activatedRoute, titleService) {
        this.widgetService = widgetService;
        this.activatedRoute = activatedRoute;
        this.titleService = titleService;
        this.widget = {};
    }
    WidgetYoutubeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.userId = params['uid'];
            _this.websiteId = params['wid'];
            _this.pageId = params['pid'];
            _this.widgetId = params['wgid'];
            _this.widget = _this.widgetService.findWidgetById(_this.widgetId);
        });
        this.titleService.setTitle('Youtube Widget');
    };
    WidgetYoutubeComponent.prototype.delete = function () {
        this.widgetService.deleteWidget(this.widgetId);
    };
    return WidgetYoutubeComponent;
}());
WidgetYoutubeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-widget-youtube',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__["a" /* WidgetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__["a" /* WidgetService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["c" /* Title */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["c" /* Title */]) === "function" && _c || Object])
], WidgetYoutubeComponent);

var _a, _b, _c;
//# sourceMappingURL=widget-youtube.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-list/widget-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-list/widget-list.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-fixed-top navbar-custom\">\n  <div class=\"container-fluid\">\n    <a class=\"navbar-brand\" [routerLink]=\"['/user/', userId, 'website', websiteId, 'page']\"><span\n      class=\"glyphicon glyphicon-chevron-left pull-left glyph-color\"></span></a>\n    <span class=\"navbar-brand\">\n              Widgets\n            </span>\n    <a class=\"navbar-brand pull-right\" [routerLink]=\"['/user/', userId, 'website', websiteId, 'page', pageId, 'widget', 'new']\"><span\n      class=\"glyphicon glyphicon-plus glyph-color\"></span></a>\n\n\n  </div>\n</nav>\n\n\n\n\n  <div *ngFor=\"let widget of widgets\">\n\n    <div [ngSwitch]=\"widget.widgetType\">\n<div class=\"row custom-widget top-margin bottom-margin\" *ngSwitchCase=\"'HEADING'\" [ngSwitch]=\"widget.size\">\n  <div class=\"col-xs-12\" *ngSwitchCase=\"'1'\">\n    <div class=\"custom-widget-toolbar custom-widget-toolbar-ontop\">\n      <a class=\"colored-link\" href=\"#\"><span\n        class=\"glyphicon glyphicon-menu-hamburger pull-right glyph-color\"></span></a>\n      <a class=\"glyph-color\" [routerLink]=\"['/user/', userId, 'website', websiteId, 'page', pageId, 'widget', widget._id]\">\n      <span class= \" glyphicon glyphicon-cog pull-right\"></span></a>\n    </div>\n    <h1>{{widget.text}}</h1>\n  </div>\n\n  <div class=\"col-xs-12\" *ngSwitchCase=\"'2'\">\n    <div class=\"custom-widget-toolbar custom-widget-toolbar-ontop\">\n      <a class=\"colored-link\" href=\"#\"><span\n        class=\"glyphicon glyphicon-menu-hamburger pull-right glyph-color\"></span></a>\n      <a class=\"glyph-color\" [routerLink]=\"['/user/', userId, 'website', websiteId, 'page', pageId, 'widget', widget._id]\">\n        <span class= \" glyphicon glyphicon-cog pull-right\"></span></a>\n    </div>\n    <h2>{{widget.text}}</h2>\n  </div>\n\n  <div class=\"col-xs-12\" *ngSwitchCase=\"'3'\">\n    <div class=\"custom-widget-toolbar custom-widget-toolbar-ontop\">\n      <a class=\"colored-link\" href=\"#\"><span\n        class=\"glyphicon glyphicon-menu-hamburger pull-right glyph-color\"></span></a>\n      <a class=\"glyph-color\" [routerLink]=\"['/user/', userId, 'website', websiteId, 'page', pageId, 'widget', widget._id]\">\n        <span class= \" glyphicon glyphicon-cog pull-right\"></span></a>\n    </div>\n    <h3>{{widget.text}}</h3>\n  </div>\n\n  <div class=\"col-xs-12\" *ngSwitchCase=\"'4'\">\n    <div class=\"custom-widget-toolbar custom-widget-toolbar-ontop\">\n      <a class=\"colored-link\" href=\"#\"><span\n        class=\"glyphicon glyphicon-menu-hamburger pull-right glyph-color\"></span></a>\n      <a class=\"glyph-color\" [routerLink]=\"['/user/', userId, 'website', websiteId, 'page', pageId, 'widget', widget._id]\">\n        <span class= \" glyphicon glyphicon-cog pull-right\"></span></a>\n    </div>\n    <h4>{{widget.text}}</h4>\n  </div>\n\n  <div class=\"col-xs-12\" *ngSwitchCase=\"'5'\">\n    <div class=\"custom-widget-toolbar custom-widget-toolbar-ontop\">\n      <a class=\"colored-link\" href=\"#\"><span\n        class=\"glyphicon glyphicon-menu-hamburger pull-right glyph-color\"></span></a>\n      <a class=\"glyph-color\" [routerLink]=\"['/user/', userId, 'website', websiteId, 'page', pageId, 'widget', widget._id]\">\n        <span class= \" glyphicon glyphicon-cog pull-right\"></span></a>\n    </div>\n    <h5>{{widget.text}}</h5>\n  </div>\n\n  <div class=\"col-xs-12\" *ngSwitchCase=\"'6'\">\n    <div class=\"custom-widget-toolbar custom-widget-toolbar-ontop\">\n      <a class=\"colored-link\" href=\"#\"><span\n        class=\"glyphicon glyphicon-menu-hamburger pull-right glyph-color\"></span></a>\n      <a class=\"glyph-color\" [routerLink]=\"['/user/', userId, 'website', websiteId, 'page', pageId, 'widget', widget._id]\">\n        <span class= \" glyphicon glyphicon-cog pull-right\"></span></a>\n    </div>\n    <h6>{{widget.text}}</h6>\n  </div>\n</div>\n\n\n      <div class=\"row custom-widget top-margin bottom-margin\" *ngSwitchCase=\"'IMAGE'\">\n        <div class=\"col-xs-12\">\n          <div class=\"custom-widget-toolbar custom-widget-toolbar-ontop\">\n            <a class=\"colored-link\" href=\"#\"><span\n              class=\"glyphicon glyphicon-menu-hamburger pull-right glyph-color\"></span></a>\n            <a class=\"glyph-color\" [routerLink]=\"['/user/', userId, 'website', websiteId, 'page', pageId, 'widget', widget._id]\"><span\n              class=\"glyphicon glyphicon-cog pull-right\"></span></a>\n          </div>\n          <img src=\"{{widget.url}}\" [style.width]=\"widget.width\">\n        </div>\n      </div>\n\n\n      <div class=\"row custom-widget top-margin bottom-margin\" *ngSwitchCase=\"'YOUTUBE'\">\n        <div class=\"col-xs-12\">\n          <div class=\"custom-widget-toolbar custom-widget-toolbar-ontop\">\n            <a class=\"colored-link\" href=\"#\"><span\n              class=\"glyphicon glyphicon-menu-hamburger pull-right glyph-color\"></span></a>\n            <a class=\"glyph-color\" [routerLink]=\"['/user/', userId, 'website', websiteId, 'page', pageId, 'widget', widget._id]\"><span\n              class=\"glyphicon glyphicon-cog pull-right\"></span></a>\n          </div>\n          <div class=\"custom-responsive-video\">\n          <iframe  [src]=\"sanitizeUrl(widget.url)\" [style.width]=\"widget.width\" height=\"315\"\n                   frameborder=\"0\" allowfullscreen></iframe>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n<ul class=\"top-margin\">\n<li class=\"colored-link list-unstyled\" *ngIf=\"widgets.length == 0\">\n  <i>No Widgets Found</i>\n  <hr>\n  <span class=\"glyphicon glyphicon-plus glyph-color left-margin\"></span>\n  <a class=\"colored-link\" [routerLink]=\"['new']\">\n    Create New Widget\n  </a>\n\n</li>\n</ul>\n\n<nav class=\"navbar navbar-fixed-bottom navbar-custom\">\n  <div class=\"container-fluid\">\n    <a class=\"navbar-link navbar-text c1-color-black c1-text-bold cl-icon-padding\" href=\"#\"><span class=\"glyphicon glyphicon-play glyph-color\"></span></a>\n    <a class=\"navbar-link navbar-text c1-color-black c1-text-bold cl-icon-padding\" href=\"#\"><span class=\"glyphicon glyphicon-eye-open glyph-color\"></span></a>\n    <a class=\"navbar-link navbar-text pull-right c1-color-black c1-text-bold cl-icon-padding\" [routerLink]=\"['/user', userId]\"><span class=\"glyphicon glyphicon-user glyph-color\"></span></a>\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-list/widget-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__model_widgettype_model__ = __webpack_require__("../../../../../src/app/model/widgettype.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var WidgetListComponent = (function () {
    function WidgetListComponent(router, widgetService, activatedRoute, sanitizer, titleService) {
        this.router = router;
        this.widgetService = widgetService;
        this.activatedRoute = activatedRoute;
        this.sanitizer = sanitizer;
        this.titleService = titleService;
        this.widgetType = __WEBPACK_IMPORTED_MODULE_3__model_widgettype_model__["a" /* WidgetType */];
    }
    WidgetListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.pageId = params['pid'];
            _this.websiteId = params['wid'];
            _this.userId = params['uid'];
            _this.widgets = _this.widgetService.findWidgetsByPageId(_this.pageId);
        });
        this.titleService.setTitle('Widget List');
    };
    WidgetListComponent.prototype.sanitizeUrl = function (url) {
        var videoId = url.split('/');
        return this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + videoId[videoId.length - 1]);
    };
    return WidgetListComponent;
}());
WidgetListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-widget-list',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-list/widget-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-list/widget-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__["a" /* WidgetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__["a" /* WidgetService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["b" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["b" /* DomSanitizer */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["c" /* Title */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["c" /* Title */]) === "function" && _e || Object])
], WidgetListComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=widget-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/model/widgettype.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetType; });
var WidgetType;
(function (WidgetType) {
    WidgetType[WidgetType["Heading"] = 0] = "Heading";
    WidgetType[WidgetType["Image"] = 1] = "Image";
    WidgetType[WidgetType["YouTube"] = 2] = "YouTube";
})(WidgetType || (WidgetType = {}));
//# sourceMappingURL=widgettype.model.js.map

/***/ }),

/***/ "../../../../../src/app/services/page.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PageService = (function () {
    function PageService() {
        this.pages = [
            { '_id': '321', 'name': 'Post 1', 'websiteId': '456', 'description': 'Lorem' },
            { '_id': '432', 'name': 'Post 2', 'websiteId': '456', 'description': 'Lorem' },
            { '_id': '543', 'name': 'Post 3', 'websiteId': '456', 'description': 'Lorem' }
        ];
        this.api = {
            'createPage': this.createPage,
            'findPageByWebsiteId': this.findPageByWebsiteId,
            'findPageById': this.findPageById,
            'updatePage': this.updatePage,
            'deletePage': this.deletePage,
        };
    }
    PageService.prototype.createPage = function (websiteId, page) {
        var id = Math.floor(Math.random() * 10000);
        // Ids must be unique
        while (this.findPageById(id.toString())) {
            id = id * 2;
        }
        page._id = id.toString();
        page.websiteId = websiteId;
        this.pages.push(page);
        return page;
    };
    PageService.prototype.findPageByWebsiteId = function (websiteId) {
        var list = [];
        for (var x = 0; x < this.pages.length; x++) {
            if (this.pages[x].websiteId === websiteId) {
                list.push(this.pages[x]);
            }
        }
        return list;
    };
    PageService.prototype.findPageById = function (pageId) {
        for (var x = 0; x < this.pages.length; x++) {
            if (this.pages[x]._id === pageId) {
                return this.pages[x];
            }
        }
    };
    PageService.prototype.updatePage = function (pageId, page) {
        for (var x = 0; x < this.pages.length; x++) {
            if (this.pages[x]._id === pageId) {
                this.pages[x] = page;
            }
        }
    };
    PageService.prototype.deletePage = function (pageId) {
        var pageIndex = this.pages.findIndex(function (i) { return i._id === pageId; });
        if (this.pages[pageIndex]) {
            this.pages.splice(pageIndex, 1);
        }
        return this.pages[pageIndex];
    };
    return PageService;
}());
PageService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], PageService);

//# sourceMappingURL=page.service.client.js.map

/***/ }),

/***/ "../../../../../src/app/services/test.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TestService = (function () {
    function TestService(_http) {
        this._http = _http;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].baseUrl;
    }
    TestService.prototype.findAllMessages = function () {
        console.log(this.baseUrl);
        return this._http.get(this.baseUrl + '/api/test')
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    TestService.prototype.createMessage = function (message) {
        var obj = {
            message: message
        };
        return this._http.post(this.baseUrl + '/api/test', obj)
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    TestService.prototype.deleteMessage = function (messageId) {
        return this._http.delete(this.baseUrl + '/api/test/' + messageId)
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    return TestService;
}());
TestService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], TestService);

var _a;
//# sourceMappingURL=test.service.client.js.map

/***/ }),

/***/ "../../../../../src/app/services/user.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserService = (function () {
    function UserService(_http) {
        this._http = _http;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].baseUrl;
    }
    UserService.prototype.createUser = function (user) {
        return this._http.post(this.baseUrl + '/api/user', { user: user })
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    UserService.prototype.findUserById = function (userId) {
        return this._http.get(this.baseUrl + '/api/user/' + userId)
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    UserService.prototype.findUserByUsername = function (username) {
        return this._http.get(this.baseUrl + '/api/user?username=' + username)
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    UserService.prototype.findUserByCredentials = function (username, password) {
        return this._http.get(this.baseUrl + '/api/user?username=' + username + '&password=' + password)
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    UserService.prototype.updateUser = function (userId, user) {
        console.log('User to be updated : ' + JSON.stringify(user));
        return this._http.put(this.baseUrl + '/api/user/' + userId, { user: user });
    };
    UserService.prototype.deleteUser = function (userId) {
        return this._http.delete(this.baseUrl + '/api/user/' + userId).map(function (res) {
            var data = res.json();
            return data;
        });
    };
    return UserService;
}());
UserService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], UserService);

var _a;
//# sourceMappingURL=user.service.client.js.map

/***/ }),

/***/ "../../../../../src/app/services/website.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebsiteService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WebsiteService = (function () {
    function WebsiteService() {
        this.websites = [
            { '_id': '123', 'name': 'Facebook', 'developerId': '456', 'description': 'Lorem' },
            { '_id': '234', 'name': 'Tweeter', 'developerId': '456', 'description': 'Lorem' },
            { '_id': '456', 'name': 'Gizmodo', 'developerId': '456', 'description': 'Lorem' },
            { '_id': '890', 'name': 'Go', 'developerId': '123', 'description': 'Lorem' },
            { '_id': '567', 'name': 'Tic Tac Toe', 'developerId': '123', 'description': 'Lorem' },
            { '_id': '678', 'name': 'Checkers', 'developerId': '123', 'description': 'Lorem' },
            { '_id': '789', 'name': 'Chess', 'developerId': '234', 'description': 'Lorem' }
        ];
        this.api = {
            'createWebsite': this.createWebsite,
            'findWebsiteById': this.findWebsiteById,
            'findWebsiteByUser': this.findWebsiteByUser,
            'updateWebsite': this.updateWebsite,
            'deleteWebsite': this.deleteWebsite,
        };
    }
    WebsiteService.prototype.createWebsite = function (userId, website) {
        var id = Math.floor(Math.random() * 10000);
        // Ids must be unique
        while (this.findWebsiteById(id.toString())) {
            id = id * 2;
        }
        website._id = id.toString();
        website.developerId = userId;
        this.websites.push(website);
        return website;
    };
    WebsiteService.prototype.findWebsiteByUser = function (userId) {
        var list = [];
        for (var x = 0; x < this.websites.length; x++) {
            if (this.websites[x].developerId === userId) {
                list.push(this.websites[x]);
            }
        }
        return list;
    };
    WebsiteService.prototype.findWebsiteById = function (websiteId) {
        for (var x = 0; x < this.websites.length; x++) {
            if (this.websites[x]._id === websiteId) {
                return this.websites[x];
            }
        }
    };
    WebsiteService.prototype.updateWebsite = function (websiteId, website) {
        for (var x = 0; x < this.websites.length; x++) {
            if (this.websites[x]._id === websiteId) {
                this.websites[x] = website;
            }
        }
    };
    WebsiteService.prototype.deleteWebsite = function (websiteId) {
        var websiteIndex = this.websites.findIndex(function (i) { return i._id === websiteId; });
        if (this.websites[websiteIndex]) {
            this.websites.splice(websiteIndex, 1);
        }
        return this.websites[websiteIndex];
    };
    return WebsiteService;
}());
WebsiteService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], WebsiteService);

//# sourceMappingURL=website.service.client.js.map

/***/ }),

/***/ "../../../../../src/app/services/widget.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WidgetService = (function () {
    function WidgetService() {
        this.widgets = [
            { '_id': '123', 'widgetType': 'HEADING', 'pageId': '321', 'size': 2, 'text': 'GIZMODO' },
            { '_id': '234', 'widgetType': 'HEADING', 'pageId': '321', 'size': 4, 'text': 'Lorem ipsum' },
            { '_id': '345', 'widgetType': 'IMAGE', 'pageId': '321', 'width': '100%',
                'url': 'http://lorempixel.com/400/200/' },
            { '_id': '456', 'widgetType': 'HTML', 'pageId': '321', 'text': '<p>Lorem ipsum</p>' },
            { '_id': '567', 'widgetType': 'HEADING', 'pageId': '321', 'size': 4, 'text': 'Lorem ipsum' },
            { '_id': '678', 'widgetType': 'YOUTUBE', 'pageId': '321', 'width': '100%',
                'url': 'https://youtu.be/AM2Ivdi9c4E' },
            { '_id': '789', 'widgetType': 'HTML', 'pageId': '321', 'text': '<p>Lorem ipsum</p>' }
        ];
        this.api = {
            'createWidget': this.createWidget,
            'findWidgetsByPageId': this.findWidgetsByPageId,
            'findWidgetById': this.findWidgetById,
            'updateWidget': this.updateWidget,
            'deleteWidget': this.deleteWidget,
        };
    }
    WidgetService.prototype.createWidget = function (pageId, widget) {
        var id = Math.floor(Math.random() * 10000);
        // Ids must be unique
        while (this.findWidgetById(id.toString())) {
            id = id * 2;
        }
        widget._id = id.toString();
        widget.pageId = pageId;
        this.widgets.push(widget);
        return widget;
    };
    WidgetService.prototype.findWidgetsByPageId = function (pageId) {
        var list = [];
        for (var x = 0; x < this.widgets.length; x++) {
            if (this.widgets[x].pageId === pageId) {
                list.push(this.widgets[x]);
            }
        }
        return list;
    };
    WidgetService.prototype.findWidgetById = function (widgetId) {
        for (var x = 0; x < this.widgets.length; x++) {
            if (this.widgets[x]._id === widgetId) {
                return this.widgets[x];
            }
        }
    };
    WidgetService.prototype.updateWidget = function (widgetId, widget) {
        for (var x = 0; x < this.widgets.length; x++) {
            if (this.widgets[x]._id === widgetId) {
                this.widgets[x] = widget;
            }
        }
    };
    WidgetService.prototype.deleteWidget = function (widgetId) {
        var widgetIndex = this.widgets.findIndex(function (i) { return i._id === widgetId; });
        if (this.widgets[widgetIndex]) {
            this.widgets.splice(widgetIndex, 1);
        }
        return this.widgets[widgetIndex];
    };
    return WidgetService;
}());
WidgetService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], WidgetService);

//# sourceMappingURL=widget.service.client.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true,
    baseUrl: ''
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map