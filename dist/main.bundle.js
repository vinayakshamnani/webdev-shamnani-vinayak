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

module.exports = "<nav class=\"navbar navbar-fixed-top navbar-custom\">\n  <div class=\"row\">\n    <div class=\"col-xs-4 hidden-xs\">\n      <a class=\"navbar-brand\"\n         [routerLink]=\"['/user/:uid/website/:wid/page']\">\n                <span\n                  class=\"glyphicon glyphicon-chevron-left c1-text-bold font-little-large c1-color-black pull-left glyph-color\">\n                </span>\n      </a>\n      <span\n        class=\"navbar-brand c1-text-bold font-little-large c1-color-black\">\n                Pages\n            </span>\n      <a class=\"navbar-brand c1-text-bold font-little-large c1-color-black pull-right\"\n         [routerLink]=\"['/user/:uid/website/:wid/page/new']\">\n                <span\n                  class=\"glyphicon glyphicon-plus glyph-color\">\n\n                </span>\n      </a>\n    </div>\n\n    <div class=\"col-xs-12 col-sm-8\">\n      <a class=\"navbar-brand visible-xs\"\n         [routerLink]=\"['/user/:uid/website/:wid/page']\">\n                <span\n                  class=\"glyphicon c1-text-bold font-little-large c1-color-black glyphicon-chevron-left pull-left\">\n                </span>\n      </a>\n      <span\n        class=\"navbar-brand c1-text-bold font-little-large c1-color-black\">\n               New Page\n            </span>\n\n      <a class=\"navbar-brand pull-right c1-text-bold font-little-large c1-color-black\"\n         [routerLink]=\"['/user/:uid/website/:wid/page']\">\n                <span class=\"glyphicon glyphicon-ok glyph-color\">\n                </span>\n      </a>\n    </div>\n  </div>\n</nav>\n\n<div class=\"container-fluid top-margin full-height\">\n  <div class=\"row full-height\">\n    <div class=\"col-xs-4 hidden-xs overflow right-border full-height\">\n      <div class=\"list-group\">\n\n        <div class=\"list-group-item list-group-item-action flex-column align-items-start\">\n          <div class=\"row\">\n            <div class=\"col-xs-10 \">\n                            <span>\n                                <a [routerLink]=\"['/user/:uid/website/:wid/page/:pid/widget']\"\n                                   class=\"c1-text-bold colored-link\">\n                                    Blog Post\n                                </a>\n                            </span>\n            </div>\n\n            <div class=\"col-xs-2\">\n              <a [routerLink]=\"['/user/:uid/website/:wid/page/:pid']\"\n                 class=\"black-link\">\n                                <span\n                                  class=\"glyphicon glyphicon-cog glyphicon-size pull-right colored-link\">\n                                </span>\n              </a>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"list-group-item list-group-item-action flex-column align-items-start\">\n          <div class=\"row\">\n            <div class=\"col-xs-10 \">\n                            <span>\n                                <a [routerLink]=\"['/user/:uid/website/:wid/page/:pid/widget']\"\n                                   class=\"c1-text-bold colored-link\">\n                                    Blogs\n                                </a>\n                            </span>\n            </div>\n\n            <div class=\"col-xs-2\">\n              <a [routerLink]=\"['/user/:uid/website/:wid/page/:pid']\"\n                 class=\"black-link\">\n                                <span\n                                  class=\"glyphicon glyphicon-cog glyphicon-size pull-right colored-link\">\n                                </span>\n              </a>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"list-group-item list-group-item-action flex-column align-items-start\">\n          <div class=\"row\">\n            <div class=\"col-xs-10\">\n                            <span>\n                                <a [routerLink]=\"['/user/:uid/website/:wid/page/:pid/widget']\"\n                                   class=\"c1-text-bold colored-link\">\n                                    Home\n                                </a>\n                            </span>\n            </div>\n\n            <div class=\"col-xs-2\">\n              <a [routerLink]=\"['/user/:uid/website/:wid/page/:pid']\"\n                 class=\"black-link\">\n                                <span\n                                  class=\"glyphicon glyphicon-size glyphicon-cog pull-right colored-link\">\n                                </span>\n              </a>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"list-group-item list-group-item-action flex-column align-items-start\">\n          <div class=\"row\">\n            <div class=\"col-xs-10 \">\n                            <span>\n                                <a [routerLink]=\"['/user/:uid/website/:wid/page/:pid/widget']\"\n                                   class=\"c1-text-bold colored-link\">\n                                    About\n                                </a>\n                            </span>\n            </div>\n            <div class=\"col-xs-2\">\n              <a [routerLink]=\"['/user/:uid/website/:wid/page/:pid']\" class=\"black-link\">\n                                <span\n                                  class=\"glyphicon glyphicon-cog glyphicon-size pull-right colored-link\">\n\n                                </span>\n              </a>\n            </div>\n          </div>\n        </div>\n        <div class=\"list-group-item list-group-item-action flex-column align-items-start\">\n          <div class=\"row\">\n            <div class=\"col-xs-10\">\n                            <span class=\"\">\n                                <a [routerLink]=\"['/user/:uid/website/:wid/page/:pid/widget']\"\n                                   class=\"c1-text-bold colored-link\">\n                                    Contact Us\n                                </a>\n                            </span>\n            </div>\n            <div class=\"col-xs-2\">\n              <a [routerLink]=\"['/user/:uid/website/:wid/page/:pid']\"\n                 class=\"black-link\">\n                                <span\n                                  class=\"glyphicon glyphicon-cog glyphicon-size pull-right colored-link\">\n\n                                </span>\n              </a>\n            </div>\n          </div>\n        </div>\n\n      </div>\n    </div>\n    <div class=\"col-xs-12 col-sm-8 overflow full-height\">\n      <form class=\"form-signin\">\n        <div class=\"form-group\">\n          <label for=\"name\"\n                 class=\"c1-text-bold font-little-large c1-color-black\">\n            Name\n          </label>\n          <input type=\"text\"\n                 id=\"name\"\n                 class=\"form-control\"\n                 placeholder=\"Name\" value=\"Blog Post\" required autofocus>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"title\"\n                 class=\"c1-text-bold font-little-large c1-color-black\">\n            Title\n          </label>\n          <input type=\"text\"\n                 id=\"title\"\n                 class=\"form-control\"\n                 placeholder=\"Title\"\n                 required>\n        </div>\n        <div class=\"form-group\">\n          <a [routerLink]=\"['/user/:uid/website/:wid/page']\"\n             class=\"btn btn-lg btn-block btn-danger\"\n             type=\"submit\">\n            Delete\n          </a>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n\n<nav class=\"navbar navbar-fixed-bottom navbar-custom\">\n  <div class=\"container-fuild\">\n    <a [routerLink]=\"['/user/:uid']\"\n       class=\"navbar-link navbar-text pull-right c1-color-black c1-text-bold cl-icon-padding\">\n            <span class=\"glyphicon glyphicon-user glyph-color\">\n\n            </span>\n    </a>\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/page/page-edit/page-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageEditComponent; });
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

var PageEditComponent = (function () {
    function PageEditComponent() {
    }
    PageEditComponent.prototype.ngOnInit = function () {
    };
    return PageEditComponent;
}());
PageEditComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-page-edit',
        template: __webpack_require__("../../../../../src/app/components/page/page-edit/page-edit.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/page/page-edit/page-edit.component.css")]
    }),
    __metadata("design:paramtypes", [])
], PageEditComponent);

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

module.exports = "<nav class=\"navbar navbar-fixed-top navbar-custom\">\n  <div class=\"container-fluid\">\n    <a class=\"navbar-brand\"\n       [routerLink]=\"['/user/:uid/website']\">\n            <span\n              class=\"glyphicon c1-color-black glyphicon-chevron-left pull-left glyph-color\">\n\n            </span>\n    </a>\n    <span\n      class=\"navbar-brand\">\n                Pages\n        </span>\n    <a class=\"navbar-brand pull-right\"\n       [routerLink]=\"['/user/:uid/website/:wid/page/new']\">\n            <span\n              class=\"glyphicon glyphicon-plus glyph-color\">\n\n            </span>\n    </a>\n  </div>\n</nav>\n\n\n<div class=\"container-fluid overflow center-container top-margin\">\n  <div class=\"list-group\">\n    <div class=\"list-group-item list-group-item-action flex-column align-items-start\">\n      <div class=\"row\">\n        <div class=\"col-xs-8\">\n          <a [routerLink]=\"['/user/:uid/website/:wid/page/:pid/widget']\"\n             class=\"colored-link\">\n                        <span class=\"c1-text-bold\">\n                            Blog Post\n                        </span>\n          </a>\n        </div>\n        <div class=\"col-xs-4\">\n          <a [routerLink]=\"['/user/:uid/website/:wid/page/:pid']\"\n             class=\"c1-color-black glyphicon-size\">\n                        <span\n                          class=\"glyphicon glyphicon-cog pull-right colored-link\">\n\n                        </span>\n          </a>\n        </div>\n      </div>\n\n    </div>\n    <div class=\"list-group-item list-group-item-action flex-column align-items-start\">\n      <div class=\"row\">\n        <div class=\"col-xs-8\">\n          <a\n            [routerLink]=\"['/user/:uid/website/:wid/page/:pid/widget']\"\n            class=\"colored-link\">\n                        <span class=\"c1-text-bold\">\n                            Blogs\n                        </span>\n          </a>\n        </div>\n        <div class=\"col-xs-4\">\n          <a [routerLink]=\"['/user/:uid/website/:wid/page/:pid']\"\n             class=\"c1-color-black glyphicon-size\">\n                        <span\n                          class=\"glyphicon glyphicon-cog pull-right colored-link\">\n\n                        </span>\n          </a>\n        </div>\n      </div>\n\n    </div>\n    <div class=\"list-group-item list-group-item-action flex-column align-items-start\">\n      <div class=\"row\">\n        <div class=\"col-xs-8\">\n          <a\n            [routerLink]=\"['/user/:uid/website/:wid/page/:pid/widget']\"\n            class=\"colored-link\">\n                        <span class=\"c1-text-bold\">\n                           Home\n                        </span>\n          </a>\n        </div>\n        <div class=\"col-xs-4\">\n          <a [routerLink]=\"['/user/:uid/website/:wid/page/:pid']\"\n             class=\"c1-color-black glyphicon-size\">\n                        <span\n                          class=\"glyphicon glyphicon-cog pull-right colored-link\">\n\n                        </span>\n          </a>\n        </div>\n      </div>\n\n    </div>\n    <div class=\"list-group-item list-group-item-action flex-column align-items-start\">\n      <div class=\"row\">\n        <div class=\"col-xs-8\">\n          <a\n            [routerLink]=\"['/user/:uid/website/:wid/page/:pid/widget']\"\n            class=\"colored-link\">\n                        <span class=\"c1-text-bold\">\n                            About\n                        </span>\n          </a>\n        </div>\n        <div class=\"col-xs-4\">\n          <a [routerLink]=\"['/user/:uid/website/:wid/page/:pid']\"\n             class=\"c1-color-black glyphicon-size\">\n                        <span\n                          class=\"glyphicon glyphicon-cog pull-right colored-link\">\n\n                        </span>\n          </a>\n        </div>\n      </div>\n\n    </div>\n    <div class=\"list-group-item list-group-item-action flex-column align-items-start\">\n      <div class=\"row\">\n        <div class=\"col-xs-8\">\n          <a\n            [routerLink]=\"['/user/:uid/website/:wid/page/:pid/widget']\"\n            class=\"colored-link\">\n                        <span class=\"c1-text-bold\">\n                            Contact Us\n                        </span>\n          </a>\n        </div>\n        <div class=\"col-xs-4\">\n          <a [routerLink]=\"['/user/:uid/website/:wid/page/:pid']\"\n             class=\"c1-color-black glyphicon-size\">\n                        <span\n                          class=\"glyphicon glyphicon-cog pull-right colored-link\">\n\n                        </span>\n          </a>\n        </div>\n      </div>\n\n    </div>\n  </div>\n</div>\n\n<nav class=\"navbar navbar-fixed-bottom navbar-custom\">\n  <div class=\"container-fuild\">\n    <a [routerLink]=\"['/user/:uid']\"\n       class=\"navbar-link navbar-text pull-right c1-color-black c1-text-bold cl-icon-padding\">\n            <span class=\"glyphicon glyphicon-user glyph-color\">\n\n            </span>\n    </a>\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/page/page-list/page-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageListComponent; });
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

var PageListComponent = (function () {
    function PageListComponent() {
    }
    PageListComponent.prototype.ngOnInit = function () {
    };
    return PageListComponent;
}());
PageListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-page-list',
        template: __webpack_require__("../../../../../src/app/components/page/page-list/page-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/page/page-list/page-list.component.css")]
    }),
    __metadata("design:paramtypes", [])
], PageListComponent);

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

module.exports = "<nav class=\"navbar navbar-fixed-top navbar-custom\">\n  <div class=\"row\">\n    <div class=\"col-xs-4 hidden-xs\">\n      <a class=\"navbar-brand\"\n         [routerLink]=\"['/user/:uid/website/:wid/page']\">\n                <span\n                  class=\"glyphicon glyphicon-chevron-left c1-text-bold font-little-large c1-color-black pull-left glyph-color\">\n                </span>\n      </a>\n      <span\n        class=\"navbar-brand c1-text-bold font-little-large c1-color-black\">\n                Pages\n            </span>\n      <a class=\"navbar-brand c1-text-bold font-little-large c1-color-black pull-right\"\n         [routerLink]=\"['/user/:uid/website/:wid/page/new']\">\n                <span\n                  class=\"glyphicon glyphicon-plus glyph-color\">\n\n                </span>\n      </a>\n    </div>\n\n    <div class=\"col-xs-12 col-sm-8\">\n      <a class=\"navbar-brand visible-xs\"\n         [routerLink]=\"['/user/:uid/website/:wid/page']\">\n                <span\n                  class=\"glyphicon c1-text-bold font-little-large c1-color-black glyphicon-chevron-left pull-left\">\n                </span>\n      </a>\n      <span\n        class=\"navbar-brand c1-text-bold font-little-large c1-color-black\">\n               New Page\n            </span>\n\n      <a class=\"navbar-brand pull-right c1-text-bold font-little-large c1-color-black\"\n         [routerLink]=\"['/user/:uid/website/:wid/page']\">\n                <span class=\"glyphicon glyphicon-ok glyph-color\">\n                </span>\n      </a>\n    </div>\n  </div>\n</nav>\n\n\n<div class=\"container-fluid top-margin full-height\">\n  <div class=\"row full-height\">\n    <div class=\"col-xs-4 hidden-xs overflow right-border full-height\">\n      <div class=\"list-group\">\n\n        <div class=\"list-group-item list-group-item-action flex-column align-items-start\">\n          <div class=\"row\">\n            <div class=\"col-xs-10 \">\n                            <span>\n                                <a [routerLink]=\"['/user/:uid/website/:wid/page/:pid/widget']\"\n                                   class=\"c1-text-bold colored-link\">\n                                    Blog Post\n                                </a>\n                            </span>\n            </div>\n\n            <div class=\"col-xs-2\">\n              <a [routerLink]=\"['/user/:uid/website/:wid/page/:pid']\"\n                 class=\"black-link\">\n                                <span\n                                  class=\"glyphicon glyphicon-cog glyphicon-size pull-right colored-link\">\n                                </span>\n              </a>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"list-group-item list-group-item-action flex-column align-items-start\">\n          <div class=\"row\">\n            <div class=\"col-xs-10 \">\n                            <span>\n                                <a [routerLink]=\"['/user/:uid/website/:wid/page/:pid/widget']\"\n                                   class=\"c1-text-bold colored-link\">\n                                    Blogs\n                                </a>\n                            </span>\n            </div>\n\n            <div class=\"col-xs-2\">\n              <a [routerLink]=\"['/user/:uid/website/:wid/page/:pid']\"\n                 class=\"black-link\">\n                                <span\n                                  class=\"glyphicon glyphicon-cog glyphicon-size pull-right colored-link\">\n                                </span>\n              </a>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"list-group-item list-group-item-action flex-column align-items-start\">\n          <div class=\"row\">\n            <div class=\"col-xs-10\">\n                            <span>\n                                <a [routerLink]=\"['/user/:uid/website/:wid/page/:pid/widget']\"\n                                   class=\"c1-text-bold colored-link\">\n                                    Home\n                                </a>\n                            </span>\n            </div>\n\n            <div class=\"col-xs-2\">\n              <a [routerLink]=\"['/user/:uid/website/:wid/page/:pid']\"\n                 class=\"black-link\">\n                                <span\n                                  class=\"glyphicon glyphicon-size glyphicon-cog pull-right colored-link\">\n                                </span>\n              </a>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"list-group-item list-group-item-action flex-column align-items-start\">\n          <div class=\"row\">\n            <div class=\"col-xs-10 \">\n                            <span>\n                                <a [routerLink]=\"['/user/:uid/website/:wid/page/:pid/widget']\"\n                                   class=\"c1-text-bold colored-link\">\n                                    About\n                                </a>\n                            </span>\n            </div>\n            <div class=\"col-xs-2\">\n              <a [routerLink]=\"['/user/:uid/website/:wid/page/:pid']\" class=\"black-link\">\n                                <span\n                                  class=\"glyphicon glyphicon-cog glyphicon-size pull-right colored-link\">\n\n                                </span>\n              </a>\n            </div>\n          </div>\n        </div>\n        <div class=\"list-group-item list-group-item-action flex-column align-items-start\">\n          <div class=\"row\">\n            <div class=\"col-xs-10\">\n                            <span class=\"\">\n                                <a [routerLink]=\"['/user/:uid/website/:wid/page/:pid/widget']\"\n                                   class=\"c1-text-bold colored-link\">\n                                    Contact Us\n                                </a>\n                            </span>\n            </div>\n            <div class=\"col-xs-2\">\n              <a [routerLink]=\"['/user/:uid/website/:wid/page/:pid']\"\n                 class=\"black-link\">\n                                <span\n                                  class=\"glyphicon glyphicon-cog glyphicon-size pull-right colored-link\">\n\n                                </span>\n              </a>\n            </div>\n          </div>\n        </div>\n\n      </div>\n    </div>\n    <div class=\"col-xs-12 col-sm-8 overflow full-height\">\n      <form class=\"form-signin\">\n        <div class=\"form-group\">\n          <label for=\"name\"\n                 class=\"c1-text-bold font-little-large c1-color-black\">\n            Name\n          </label>\n          <input type=\"text\"\n                 id=\"name\"\n                 class=\"form-control\"\n                 placeholder=\"Name\"  required autofocus>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"title\"\n                 class=\"c1-text-bold font-little-large c1-color-black\">\n            Title\n          </label>\n          <input type=\"text\"\n                 id=\"title\"\n                 class=\"form-control\"\n                 placeholder=\"Title\"\n                 required>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n\n<nav class=\"navbar navbar-fixed-bottom navbar-custom\">\n  <div class=\"container-fuild\">\n    <a [routerLink]=\"['/user/:uid']\"\n       class=\"navbar-link navbar-text pull-right c1-color-black c1-text-bold cl-icon-padding\">\n            <span class=\"glyphicon glyphicon-user glyph-color\">\n\n            </span>\n    </a>\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/page/page-new/page-new.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageNewComponent; });
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

var PageNewComponent = (function () {
    function PageNewComponent() {
    }
    PageNewComponent.prototype.ngOnInit = function () {
    };
    return PageNewComponent;
}());
PageNewComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-page-new',
        template: __webpack_require__("../../../../../src/app/components/page/page-new/page-new.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/page/page-new/page-new.component.css")]
    }),
    __metadata("design:paramtypes", [])
], PageNewComponent);

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
    function LoginComponent(router, userService) {
        this.router = router;
        this.userService = userService;
        this.errorMsg = 'Invalid credentials!';
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function () {
        this.username = this.loginForm.value.username;
        this.password = this.loginForm.value.password;
        var user = this.userService.findUserByCredentials(this.username, this.password);
        if (user) {
            this.router.navigate(['user', user._id]);
        }
        else {
            this.errorFlag = true;
        }
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
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */]) === "function" && _c || Object])
], LoginComponent);

var _a, _b, _c;
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

module.exports = "<nav class=\"navbar navbar-fixed-top navbar-custom \">\n  <div class=\"container-fluid\">\n\n\n    <p class=\"navbar-header pull-left\">\n      <a class=\"navbar-brand glyph-color\">\n        <b>Profile</b>\n      </a>\n    </p>\n\n    <p class=\"navbar-text pull-right\">\n      <a (click) = \"update()\" [routerLink]=\"['/user', userId]\" class=\"navbar-link\">\n        <span class=\"glyphicon glyphicon-ok glyph-color\"></span>\n      </a>\n    </p>\n\n  </div>\n</nav>\n\n\n<div class=\"container top-margin\">\n  <form #f=\"ngForm\">\n    <div class=\"form-group\">\n      <label for=\"username\">Username</label>\n      <input [(ngModel)]=\"user['username']\" name=\"username\" type=\"text\" class=\"form-control bottom-buffer\" id=\"username\" placeholder=\"vshamnani\" readonly>\n    </div>\n\n\n\n    <div class=\"form-group\">\n      <label for=\"email\">Email address</label>\n      <input name=\"email\" type=\"email\" class=\"form-control bottom-buffer\" id=\"email\" placeholder=\"shamnani.v@husky.neu.edu\">\n    </div>\n\n\n\n    <div class=\"form-group\">\n      <label for=\"first-name\">First Name</label>\n      <input [(ngModel)]=\"user['firstName']\" name=\"firstName\" type=\"text\" class=\"form-control bottom-buffer\" id=\"first-name\" placeholder=\"Vinayak\">\n    </div>\n\n\n\n    <div class=\"form-group\">\n      <label for=\"last-name\">Last Name</label>\n      <input [(ngModel)]=\"user['lastName']\" name=\"lastName\"type=\"text\" class=\"form-control bottom-buffer\" id=\"last-name\" placeholder=\"Shamnani\">\n    </div>\n\n  <a class=\"btn btn-primary btn-block\"\n     [routerLink]=\"['/user/',userId,'website']\">Websites</a>\n  <a class=\"btn btn-danger btn-block bottom-margin\"\n     [routerLink]=\"['/login']\" >Logout</a>\n  </form>\n</div>\n\n\n<nav class=\"navbar navbar-fixed-bottom navbar-custom\">\n  <div class=\"container-fluid\">\n    <p class=\"navbar-text pull-right\">\n      <a [routerLink]=\"['/user/',userId]\" class=\"navbar-link navbar-text pull-right c1-color-black c1-text-bold cl-icon-padding\">\n        <span class=\"glyphicon glyphicon-user glyph-color\"></span>\n      </a>\n    </p>\n\n  </div>\n</nav>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/components/user/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
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
    function ProfileComponent(userService, activatedRoute) {
        this.userService = userService;
        this.activatedRoute = activatedRoute;
        this.user = {};
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.userId = params['uid'];
            _this.user = _this.userService.findUserById(_this.userId);
            _this.username = _this.user['username'];
        });
    };
    ProfileComponent.prototype.update = function () {
        this.user['username'] = this.profileForm.value.username;
        this.user['email'] = this.profileForm.value.email;
        this.user['firstName'] = this.profileForm.value.firstName;
        this.user['lastName'] = this.profileForm.value.lastName;
        this.userService.updateUser(this.userId, this.user);
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
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_user_service_client__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object])
], ProfileComponent);

var _a, _b, _c;
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
    function RegisterComponent(router, userService) {
        this.router = router;
        this.userService = userService;
        this.errorMessage = 'Passwords do not match';
        this.userExistsMessage = 'Username not available. Choose a different username.';
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.register = function () {
        var user = {};
        this.username = this.registrationForm.value.username;
        this.password = this.registrationForm.value.password;
        this.verifypwd = this.registrationForm.value.verifypwd;
        var user2 = this.userService.findUserByUsername(user['username']);
        if (user2) {
            this.userExistsFlag = true;
        }
        else if (this.password !== this.verifypwd) {
            this.errorFlag = true;
        }
        else {
            user['username'] = this.username;
            user['password'] = this.password;
            user = this.userService.createUser(user);
            this.router.navigate(['user', user['_id']]);
            console.log('User created! New JSON: ' + this.userService.users);
        }
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
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */]) === "function" && _c || Object])
], RegisterComponent);

var _a, _b, _c;
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
    function WebsiteEditComponent(route, websiteService) {
        this.route = route;
        this.websiteService = websiteService;
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
    };
    WebsiteEditComponent.prototype.update = function () {
        this.website['name'] = this.editForm.value.name;
        this.website['description'] = this.editForm.value.desc;
        this.websiteService.updateWebsite(this.websiteId, this.website);
    };
    WebsiteEditComponent.prototype.delete = function () {
        this.websiteService.deleteWebsite(this.websiteId);
        console.log('Deleted website id ' + this.websiteId);
        console.log('New website JSON is ' + JSON.stringify(this.websiteService.websites));
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
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_website_service_client__["a" /* WebsiteService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_website_service_client__["a" /* WebsiteService */]) === "function" && _c || Object])
], WebsiteEditComponent);

var _a, _b, _c;
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

module.exports = "<nav class=\"navbar navbar-fixed-top navbar-custom\">\n  <div class=\"container-fluid\">\n    <p class=\"navbar-text pull-left\">\n      <a [routerLink]=\"['/user/',userId]\"\n         class=\"navbar-link font-little-large\">\n                <span class=\"glyphicon glyphicon-chevron-left glyph-color\">\n                </span>\n      </a>\n    </p>\n\n    <span class=\"navbar-brand\">\n            Websites\n        </span>\n\n    <a [routerLink]=\"['/user/',userId,'website','new']\" class=\"navbar-link navbar-text pull-right cl-icon-padding\">\n      <span class=\"glyphicon glyphicon-plus glyph-color\"></span>\n    </a>\n  </div>\n</nav>\n\n\n<div class=\"container-fluid top-margin\">\n  <ul class=\"list-group\" >\n    <li class=\"list-group-item\" *ngFor=\"let x of websites\">\n      <a [routerLink]=\"['/user/',userId,'website',x._id,'page']\"><span class=\"c1-text-bold colored-link\">{{x.name}}</span></a>\n      <a [routerLink]=\"['/user/',userId,'website',x._id]\">\n        <span class=\"glyphicon glyphicon-cog pull-right colored-link\"></span></a>\n    </li>\n  </ul>\n</div>\n\n\n\n<nav class=\"navbar navbar-fixed-bottom navbar-custom\">\n  <div class=\"container-fuild\">\n    <a [routerLink]=\"['/user/',userId]\" class=\"navbar-link navbar-text pull-right c1-color-black c1-text-bold cl-icon-padding\">\n      <span class=\"glyphicon glyphicon-user glyph-color\"></span>\n    </a>\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/website/website-list/website-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebsiteListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_website_service_client__ = __webpack_require__("../../../../../src/app/services/website.service.client.ts");
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
    function WebsiteListComponent(route, websiteService) {
        this.route = route;
        this.websiteService = websiteService;
    }
    WebsiteListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.userId = params['uid'];
            _this.websites = _this.websiteService.findWebsiteByUser(_this.userId);
        });
    };
    return WebsiteListComponent;
}());
WebsiteListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-website-list',
        template: __webpack_require__("../../../../../src/app/components/website/website-list/website-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/website/website-list/website-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_website_service_client__["a" /* WebsiteService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_website_service_client__["a" /* WebsiteService */]) === "function" && _b || Object])
], WebsiteListComponent);

var _a, _b;
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
    function WebsiteNewComponent(route, websiteService) {
        this.route = route;
        this.websiteService = websiteService;
    }
    WebsiteNewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.userId = params['uid'];
            _this.websites = _this.websiteService.findWebsiteByUser(_this.userId);
            _this.websiteId = params['wid'];
        });
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
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_website_service_client__["a" /* WebsiteService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_website_service_client__["a" /* WebsiteService */]) === "function" && _b || Object])
], WebsiteNewComponent);

var _a, _b;
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

module.exports = "<div class=\"container-fluid custom-center-container\">\n\n  <nav class=\"navbar navbar-fixed-top navbar-custom\">\n    <div class=\"container-fluid\">\n      <a class=\"navbar-brand\" [routerLink]=\"['/user/:uid/website/:wid/page/:pid/widget']\"><span\n        class=\"glyphicon glyphicon-chevron-left pull-left glyph-color\"></span></a>\n      <span class=\"navbar-brand\">\n              Choose a Widget\n            </span>\n    </div>\n  </nav>\n  <div class=\"top-margin\">\n    <ul><a href=\"widget-heading.html\">Header</a></ul>\n    <ul><a [routerLink]=\"['/user/:uid/website/:wid/page/:pid/widget/new']\">Label</a></ul>\n    <ul><a [routerLink]=\"['/user/:uid/website/:wid/page/:pid/widget/new']\">HTML</a></ul>\n    <ul><a [routerLink]=\"['/user/:uid/website/:wid/page/:pid/widget/new']\">Text Input</a></ul>\n    <ul><a [routerLink]=\"['/user/:uid/website/:wid/page/:pid/widget/new']\">Link</a></ul>\n    <ul><a [routerLink]=\"['/user/:uid/website/:wid/page/:pid/widget/new']\">Button</a></ul>\n    <ul><a href=\"widget-image.html\">Image</a></ul>\n    <ul><a href=\"widget-youtube.html\">YouTube</a></ul>\n    <ul><a [routerLink]=\"['/user/:uid/website/:wid/page/:pid/widget/new']\">Data Table</a></ul>\n    <ul><a [routerLink]=\"['/user/:uid/website/:wid/page/:pid/widget/new']\">Repeater</a></ul>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-choose/widget-choose.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetChooseComponent; });
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

var WidgetChooseComponent = (function () {
    function WidgetChooseComponent() {
    }
    WidgetChooseComponent.prototype.ngOnInit = function () {
    };
    return WidgetChooseComponent;
}());
WidgetChooseComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-widget-choose',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-choose/widget-choose.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-choose/widget-choose.component.css")]
    }),
    __metadata("design:paramtypes", [])
], WidgetChooseComponent);

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

module.exports = "<p>\n  widget-edit works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetEditComponent; });
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

var WidgetEditComponent = (function () {
    function WidgetEditComponent() {
    }
    WidgetEditComponent.prototype.ngOnInit = function () {
    };
    return WidgetEditComponent;
}());
WidgetEditComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-widget-edit',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-edit.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-edit.component.css")]
    }),
    __metadata("design:paramtypes", [])
], WidgetEditComponent);

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

module.exports = "<nav class=\"navbar-custom navbar-fixed-top\">\n  <div class=\"row\">\n    <div class=\"col-xs-12\">\n      <a class=\"navbar-brand\" routerLink]=\"['/user/:uid/website/:wid/page/:pid/widget']\"><span\n        class=\"glyphicon glyphicon-chevron-left pull-left glyph-color\"></span></a>\n      <span class=\"navbar-brand\">\n                <strong>Widget Edit</strong>\n            </span>\n      <a class=\"navbar-brand pull-right\" href=\"widget-list.html\"><span class=\"glyphicon glyphicon-ok glyph-color\"></span></a>\n    </div>\n  </div>\n</nav>\n\n<div class=\"container-fluid custom-center-container top-margin\">\n  <div class=\"row\">\n    <div class=\"col-xs-12\">\n      <form>\n        <div class=\"form-group\">\n          <label for=\"name\" class=\"c1-text-bold font-little-large c1-color-black\">Name</label>\n          <input type=\"text\" id=\"name\" class=\"form-control\" placeholder=\"Name\" value=\"83 yo ends standoff\"\n                 data-toggle=\"tooltip\"\n                 title=\"Enter Widget Name\" required autofocus>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"text\" class=\"c1-text-bold font-little-large c1-color-black\">Text</label>\n          <input type=\"text\" id=\"text\" class=\"form-control\" placeholder=\"Text\"\n                 data-toggle=\"tooltip\"\n                 title=\"Enter Widget Text\"\n                 value=\"83-year-old pushes burglary suspect off roof, ends police standoff\" required>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"size\" class=\"c1-text-bold font-little-large c1-color-black\">Size</label>\n          <input type=\"number\" id=\"size\" class=\"form-control\" placeholder=\"Size\" value=\"6\"\n                 data-toggle=\"tooltip\"\n                 title=\"Enter Widget Size\" min=\"1\" max=\"6\" required>\n        </div>\n        <div class=\"form-group\">\n          <a href=\"widget-list.html\" class=\"btn btn-lg btn-block btn-danger\" type=\"submit\">Delete</a>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n<nav class=\"navbar-custom navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n    <ul class=\"nav navbar-nav navbar-right\">\n      <li><a href=\"../user/profile.html\"><span class=\"glyphicon glyphicon-user pull-right glyph-color\"></span></a></li>\n    </ul>\n\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-header/widget-header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetHeaderComponent; });
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

var WidgetHeaderComponent = (function () {
    function WidgetHeaderComponent() {
    }
    WidgetHeaderComponent.prototype.ngOnInit = function () {
    };
    return WidgetHeaderComponent;
}());
WidgetHeaderComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-widget-header',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-header/widget-header.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-header/widget-header.component.css")]
    }),
    __metadata("design:paramtypes", [])
], WidgetHeaderComponent);

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

module.exports = "<nav class=\"navbar-custom navbar-fixed-top\">\n  <div class=\"row\">\n    <div class=\"col-xs-12\">\n      <a class=\"navbar-brand\" href=\"widget-list.html\"><span\n        class=\"glyphicon glyphicon-chevron-left pull-left glyph-color\"></span></a>\n      <span class=\"navbar-brand\">\n                <strong>Widget Edit</strong>\n            </span>\n      <a class=\"navbar-brand pull-right\" href=\"widget-list.html\"><span class=\"glyphicon glyphicon-ok glyph-color\"></span></a>\n    </div>\n  </div>\n</nav>\n\n\n<div class=\"container-fluid custom-center-container top-margin\">\n  <div class=\"row\">\n    <div class=\"col-xs-12\">\n      <form>\n        <div class=\"form-group\">\n          <label for=\"name\" class=\"c1-text-bold font-little-large c1-color-black\">Name</label>\n          <input type=\"text\" id=\"name\" class=\"form-control\" placeholder=\"Name\" value=\"Sample Image\"\n                 data-toggle=\"tooltip\"\n                 title=\"Enter Widget Name\" required autofocus>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"text\" class=\"c1-text-bold font-little-large c1-color-black\">Text</label>\n          <input type=\"text\" id=\"text\" class=\"form-control\" placeholder=\"Title\"\n                 data-toggle=\"tooltip\"\n                 title=\"Enter Widget Text\"\n                 value=\"Widget Text Here\" required>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"url\" class=\"c1-text-bold font-little-large c1-color-black\">URL</label>\n          <input type=\"text\" id=\"url\" class=\"form-control\" placeholder=\"URL\"\n                 data-toggle=\"tooltip\"\n                 title=\"Enter Widget URL\"\n                 value=\"https://thumb1.shutterstock.com/display_pic_with_logo/3973673/602824259/stock-vector-presentation-business-infographic-template-with-options-vector-illustration-602824259.jpg\"\n                 required>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"width\" class=\"c1-text-bold font-little-large c1-color-black\">Width</label>\n          <select id=\"width\" class=\"form-control\"\n                  data-toggle=\"tooltip\"\n                  title=\"Enter Widget width\" required>\n            <option value=\"25\">25%</option>\n            <option value=\"50\">50%</option>\n            <option value=\"75\">75%</option>\n            <option value=\"100\" selected>100%</option>\n          </select>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"upload\" class=\"c1-text-bold font-little-large c1-color-black\">Upload</label>\n          <input type=\"file\" id=\"upload\" multiple class=\"form-control\"\n                 data-toggle=\"tooltip\"\n                 title=\"Select Widget image\"\n                 required>\n        </div>\n\n        <div class=\"form-group\">\n          <a href=\"widget-list.html\" class=\"btn btn-lg btn-block btn-danger\" type=\"submit\">Delete</a>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n<nav class=\"navbar-custom navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n    <ul class=\"nav navbar-nav navbar-right\">\n      <li><a href=\"../user/profile.html\"><span class=\"glyphicon glyphicon-user pull-right glyph-color\"></span></a></li>\n    </ul>\n\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-image/widget-image.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetImageComponent; });
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

var WidgetImageComponent = (function () {
    function WidgetImageComponent() {
    }
    WidgetImageComponent.prototype.ngOnInit = function () {
    };
    return WidgetImageComponent;
}());
WidgetImageComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-widget-image',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-image/widget-image.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-image/widget-image.component.css")]
    }),
    __metadata("design:paramtypes", [])
], WidgetImageComponent);

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

module.exports = "<nav class=\"navbar-custom navbar-fixed-top\">\n  <div class=\"row\">\n    <div class=\"col-xs-12\">\n      <a class=\"navbar-brand\" href=\"widget-list.html\"><span\n        class=\"glyphicon glyphicon-chevron-left pull-left glyph-color\"></span></a>\n      <span class=\"navbar-brand\">\n                <strong>Widget Edit</strong>\n            </span>\n      <a class=\"navbar-brand pull-right\" href=\"widget-list.html\"><span class=\"glyphicon glyphicon-ok glyph-color\"></span></a>\n    </div>\n  </div>\n</nav>\n\n\n<div class=\"container-fluid top-margin\">\n  <div class=\"row\">\n    <div class=\"col-xs-12\">\n      <form>\n        <div class=\"form-group\">\n          <label for=\"name\" >\n            Name\n          </label>\n          <input\n            type=\"text\"\n            id=\"name\"\n            class=\"form-control\"\n            placeholder=\"Name\"\n            value=\"Colbert\"\n            required autofocus>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"text\"\n                 class=\"c1-text-bold\">\n            Text\n          </label>\n          <input\n            type=\"text\"\n            id=\"text\"\n            class=\"form-control\"\n            placeholder=\"Title\"\n            data-toggle=\"tooltip\"\n            title=\"Enter Widget Text\"\n            value=\"Colbert Reveals What Letterman Taught Him\" required>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"url\" class=\"c1-text-bold\">\n            URL\n          </label>\n          <input type=\"text\"\n                 id=\"url\"\n                 class=\"form-control\"\n                 placeholder=\"URL\"\n                 data-toggle=\"tooltip\"\n                 title=\"Enter Widget URL\"\n                 value=\"https://www.youtube.com/watch?v=Zr22PtGd1So\"\n                 required>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"width\"\n                 class=\"c1-text-bold\">\n            Width\n          </label>\n          <select id=\"width\"\n                  class=\"form-control\"\n                  data-toggle=\"tooltip\"\n                  title=\"Enter Widget width\" required>\n            <option value=\"50\">\n              50%\n            </option>\n\n            <option value=\"100\" selected>\n              100%\n            </option>\n          </select>\n        </div>\n        <div class=\"form-group\">\n          <a href=\"widget-list.html\"\n             class=\"btn btn-lg btn-block btn-danger\"\n             type=\"submit\">\n            Delete\n          </a>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n<nav class=\"navbar navbar-custom navbar-fixed-bottom\">\n  <div class=\"container-fuild\">\n    <a href=\"../user/profile.html\"\n       class=\"navbar-link navbar-text pull-right c1-color-black c1-text-bold cl-icon-padding\">\n            <span class=\"glyphicon glyphicon-user glyph-color\">\n            </span>\n    </a>\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetYoutubeComponent; });
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

var WidgetYoutubeComponent = (function () {
    function WidgetYoutubeComponent() {
    }
    WidgetYoutubeComponent.prototype.ngOnInit = function () {
    };
    return WidgetYoutubeComponent;
}());
WidgetYoutubeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-widget-youtube',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.css")]
    }),
    __metadata("design:paramtypes", [])
], WidgetYoutubeComponent);

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

module.exports = "<nav class=\"navbar navbar-fixed-top navbar-custom\">\n  <div class=\"container-fluid\">\n    <a class=\"navbar-brand\" [routerLink]=\"['/user/:uid/website/:wid/page']\"><span\n      class=\"glyphicon glyphicon-chevron-left pull-left glyph-color\"></span></a>\n    <span class=\"navbar-brand\">\n              Widgets\n            </span>\n    <a class=\"navbar-brand pull-right\" [routerLink]=\"['/user/:uid/website/:wid/page/:pid/widget/new']\"><span\n      class=\"glyphicon glyphicon-plus glyph-color\"></span></a>\n\n\n  </div>\n</nav>\n\n\n\n<div class=\"row custom-widget top-margin bottom-margin\">\n  <div class=\"col-xs-12\">\n    <div class=\"custom-widget-toolbar\">\n      <a class=\"colored-link\" href=\"#\"><span\n        class=\"glyphicon glyphicon-menu-hamburger pull-right glyph-color\"></span></a>\n      <a class=\"glyph-color\" href=\"widget-heading.html\"><span\n        class=\"glyphicon glyphicon-cog pull-right\"></span></a>\n    </div>\n    <h1>M5 crash: Four dead in Gloucestershire</h1>\n  </div>\n  <div class=\"col-xs-12\">\n    <div class=\"custom-widget-toolbar\">\n      <a  href=\"#\"><span\n        class=\"glyphicon glyphicon-menu-hamburger pull-right glyph-color\"></span></a>\n      <a href=\"#\"><span class=\"glyphicon glyphicon-cog pull-right glyph-color\"></span></a>\n    </div>\n    <h3>83-year-old pushes burglary suspect off roof, ends police standoff</h3>\n  </div>\n  <div class=\"col-xs-12\">\n    <div class=\"custom-widget-toolbar\">\n      <a href=\"#\"><span\n        class=\"glyphicon glyphicon-menu-hamburger pull-right glyph-color\"></span></a>\n      <a  href=\"widget-image.html\"><span\n        class=\"glyphicon glyphicon-cog pull-right glyph-color\"></span></a>\n    </div>\n    <img class=\"img-responsive\"\n         src=\"https://static.pexels.com/photos/311012/pexels-photo-311012.jpeg\">\n  </div>\n  <div class=\"col-xs-12\">\n    <div class=\"custom-widget-toolbar custom-widget-toolbar-ontop\">\n      <a href=\"#\"><span\n        class=\"glyphicon glyphicon-menu-hamburger pull-right glyph-color\"></span></a>\n      <a href=\"#\"><span\n        class=\"glyphicon glyphicon-cog pull-right glyph-color\"></span></a>\n    </div>\n    <h4>An EU official said the U.S. will not withdraw from the Paris climate deal, contrary to the public statements of President Trump, the Wall Street Journal said.</h4>\n  </div>\n\n\n  <div class=\"col-xs-12\">\n    <div class=\"custom-widget-toolbar custom-widget-toolbar-ontop\">\n      <a  href=\"#\"><span\n        class=\"glyphicon glyphicon-menu-hamburger pull-right glyph-color\"></span></a>\n      <a  href=\"widget-youtube.html\"><span\n        class=\"glyphicon glyphicon-cog pull-right glyph-color\"></span></a>\n    </div>\n    <div class=\"custom-responsive-video\">\n      <iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/ah7LYxysuJ8\"\n              frameborder=\"0\" allowfullscreen></iframe>\n    </div>\n  </div>\n\n</div>\n\n\n<nav class=\"navbar navbar-fixed-bottom navbar-custom\">\n  <div class=\"container-fluid\">\n    <a class=\"navbar-link navbar-text c1-color-black c1-text-bold cl-icon-padding\" href=\"#\"><span class=\"glyphicon glyphicon-play glyph-color\"></span></a>\n    <a class=\"navbar-link navbar-text c1-color-black c1-text-bold cl-icon-padding\" href=\"#\"><span class=\"glyphicon glyphicon-eye-open glyph-color\"></span></a>\n    <a class=\"navbar-link navbar-text pull-right c1-color-black c1-text-bold cl-icon-padding\" [routerLink]=\"['/user/:uid']\"><span class=\"glyphicon glyphicon-user glyph-color\"></span></a>\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-list/widget-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetListComponent; });
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

var WidgetListComponent = (function () {
    function WidgetListComponent() {
    }
    WidgetListComponent.prototype.ngOnInit = function () {
    };
    return WidgetListComponent;
}());
WidgetListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-widget-list',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-list/widget-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-list/widget-list.component.css")]
    }),
    __metadata("design:paramtypes", [])
], WidgetListComponent);

//# sourceMappingURL=widget-list.component.js.map

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
        page._id = Math.random();
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
        for (var x = 0; x < this.pages.length; x++) {
            if (this.pages[x]._id === pageId) {
                delete this.pages[pageId];
            }
        }
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


var UserService = (function () {
    function UserService() {
        this.users = [
            { _id: '123', username: 'alice', password: 'alice', firstName: 'Alice', lastName: 'Wonder' },
            { _id: '234', username: 'bob', password: 'bob', firstName: 'Bob', lastName: 'Marley' },
            { _id: '345', username: 'charly', password: 'charly', firstName: 'Charly', lastName: 'Garcia' },
            { _id: '456', username: 'jannunzi', password: 'jannunzi', firstName: 'Jose', lastName: 'Annunzi' }
        ];
        this.api = {
            'createUser': this.createUser,
            'findUserById': this.findUserById,
            'findUserByUsername': this.findUserByUsername,
            'findUserByCredentials': this.findUserByCredentials,
            'updateUser': this.updateUser,
            'deleteUser': this.deleteUser,
        };
    }
    UserService.prototype.createUser = function (user) {
        var id = Math.floor(Math.random() * 10000);
        // Ids must be unique
        while (this.findUserById(id.toString())) {
            id = id * 2;
        }
        user._id = id.toString();
        this.users.push(user);
        return user;
    };
    UserService.prototype.findUserById = function (userId) {
        for (var x = 0; x < this.users.length; x++) {
            if (this.users[x]._id === userId) {
                return this.users[x];
            }
        }
    };
    UserService.prototype.findUserByUsername = function (username) {
        for (var x = 0; x < this.users.length; x++) {
            if (this.users[x].username === username) {
                return this.users[x];
            }
        }
    };
    UserService.prototype.findUserByCredentials = function (username, password) {
        for (var x = 0; x < this.users.length; x++) {
            if (this.users[x].username === username && this.users[x].password === password) {
                return this.users[x];
            }
        }
    };
    UserService.prototype.updateUser = function (userId, user) {
        for (var x = 0; x < this.users.length; x++) {
            if (this.users[x]._id === userId) {
                this.users[x] = user;
                console.log('Successfully updated. The new JSON is ' + JSON.stringify(this.users));
            }
        }
    };
    UserService.prototype.deleteUser = function (userId) {
        var userIndex = this.users.findIndex(function (i) { return i._id === userId; });
        if (this.users[userIndex]) {
            this.users.splice(userIndex, 1);
        }
        return this.users[userIndex];
    };
    return UserService;
}());
UserService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], UserService);

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
        widget._id = Math.random();
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
        for (var x = 0; x < this.widgets.length; x++) {
            if (this.widgets[x]._id === widgetId) {
                delete this.widgets[widgetId];
            }
        }
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