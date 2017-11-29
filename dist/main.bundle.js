webpackJsonp(["main"],{

/***/ "../../../../../assignment/directives/sortable.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SortableDirective; });
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

var SortableDirective = (function () {
    function SortableDirective(el) {
        this.el = el;
        // properties
        this.newIndexes = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
    }
    SortableDirective.prototype.ngAfterViewInit = function () {
        this.appSortable();
    };
    /**
     * Make the attached dom element sortable
     */
    SortableDirective.prototype.appSortable = function () {
        var _this = this;
        jQuery(this.el.nativeElement).sortable({
            axis: 'y',
            start: function (event, ui) {
                _this.initialIndex = ui.item.index();
            },
            stop: function (event, ui) {
                _this.finalIndex = ui.item.index();
                _this.newIndexes.emit({
                    initial: _this.initialIndex,
                    final: _this.finalIndex
                });
            }
        });
    };
    return SortableDirective;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", Object)
], SortableDirective.prototype, "newIndexes", void 0);
SortableDirective = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Directive */])({
        selector: '[appSortable]'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _a || Object])
], SortableDirective);

var _a;
//# sourceMappingURL=sortable.directive.js.map

/***/ }),

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__services_flickr_service_client__ = __webpack_require__("../../../../../src/app/services/flickr.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__assignment_directives_sortable_directive__ = __webpack_require__("../../../../../assignment/directives/sortable.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__components_widget_widget_edit_widget_image_flickr_image_search_flickr_image_search_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-image/flickr-image-search/flickr-image-search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30_ngx_quill_editor__ = __webpack_require__("../../../../ngx-quill-editor/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__components_widget_widget_edit_widget_html_widget_html_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-html/widget-html.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__components_widget_widget_edit_widget_text_widget_text_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-text/widget-text.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__services_shared_service__ = __webpack_require__("../../../../../src/app/services/shared.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__services_authenticate_service__ = __webpack_require__("../../../../../src/app/services/authenticate.service.ts");
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
            __WEBPACK_IMPORTED_MODULE_22__components_widget_widget_edit_widget_youtube_widget_youtube_component__["a" /* WidgetYoutubeComponent */],
            __WEBPACK_IMPORTED_MODULE_28__assignment_directives_sortable_directive__["a" /* SortableDirective */],
            __WEBPACK_IMPORTED_MODULE_29__components_widget_widget_edit_widget_image_flickr_image_search_flickr_image_search_component__["a" /* FlickrImageSearchComponent */],
            __WEBPACK_IMPORTED_MODULE_31__components_widget_widget_edit_widget_html_widget_html_component__["a" /* WidgetHtmlComponent */],
            __WEBPACK_IMPORTED_MODULE_32__components_widget_widget_edit_widget_text_widget_text_component__["a" /* WidgetTextComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_5__app_routing__["a" /* Routing */],
            __WEBPACK_IMPORTED_MODULE_30_ngx_quill_editor__["a" /* QuillEditorModule */]
        ],
        // Client Side services here
        providers: [__WEBPACK_IMPORTED_MODULE_23__services_user_service_client__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_24__services_website_service_client__["a" /* WebsiteService */], __WEBPACK_IMPORTED_MODULE_25__services_page_service_client__["a" /* PageService */], __WEBPACK_IMPORTED_MODULE_26__services_widget_service_client__["a" /* WidgetService */], __WEBPACK_IMPORTED_MODULE_27__services_flickr_service_client__["a" /* FlickrService */], __WEBPACK_IMPORTED_MODULE_33__services_shared_service__["a" /* SharedService */], __WEBPACK_IMPORTED_MODULE_34__services_authenticate_service__["a" /* Authenticate */]],
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_widget_widget_edit_widget_image_flickr_image_search_flickr_image_search_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-image/flickr-image-search/flickr-image-search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_authenticate_service__ = __webpack_require__("../../../../../src/app/services/authenticate.service.ts");
/**
 * Created by sesha on 7/26/17.
 */















var APP_ROUTES = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_1__components_user_login_login_component__["a" /* LoginComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_1__components_user_login_login_component__["a" /* LoginComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_2__components_user_register_register_component__["a" /* RegisterComponent */] },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_3__components_user_profile_profile_component__["a" /* ProfileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_14__services_authenticate_service__["a" /* Authenticate */]] },
    { path: 'user/:uid', component: __WEBPACK_IMPORTED_MODULE_3__components_user_profile_profile_component__["a" /* ProfileComponent */] },
    { path: 'user/:uid/website', component: __WEBPACK_IMPORTED_MODULE_8__components_website_website_list_website_list_component__["a" /* WebsiteListComponent */] },
    { path: 'user/:uid/website/new', component: __WEBPACK_IMPORTED_MODULE_9__components_website_website_new_website_new_component__["a" /* WebsiteNewComponent */] },
    { path: 'user/:uid/website/:wid', component: __WEBPACK_IMPORTED_MODULE_7__components_website_website_edit_website_edit_component__["a" /* WebsiteEditComponent */] },
    { path: 'user/:uid/website/:wid/page', component: __WEBPACK_IMPORTED_MODULE_5__components_page_page_list_page_list_component__["a" /* PageListComponent */] },
    { path: 'user/:uid/website/:wid/page/new', component: __WEBPACK_IMPORTED_MODULE_6__components_page_page_new_page_new_component__["a" /* PageNewComponent */] },
    { path: 'user/:uid/website/:wid/page/:pid', component: __WEBPACK_IMPORTED_MODULE_4__components_page_page_edit_page_edit_component__["a" /* PageEditComponent */] },
    { path: 'user/:uid/website/:wid/page/:pid/widget', component: __WEBPACK_IMPORTED_MODULE_12__components_widget_widget_list_widget_list_component__["a" /* WidgetListComponent */] },
    { path: 'user/:uid/website/:wid/page/:pid/widget/new', component: __WEBPACK_IMPORTED_MODULE_10__components_widget_widget_choose_widget_choose_component__["a" /* WidgetChooseComponent */] },
    { path: 'user/:uid/website/:wid/page/:pid/widget/:wgid', component: __WEBPACK_IMPORTED_MODULE_11__components_widget_widget_edit_widget_edit_component__["a" /* WidgetEditComponent */] },
    { path: 'user/:userId/website/:wid/page/:pid/widget/:wgid/search', component: __WEBPACK_IMPORTED_MODULE_13__components_widget_widget_edit_widget_image_flickr_image_search_flickr_image_search_component__["a" /* FlickrImageSearchComponent */] }
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

module.exports = "<nav class=\"navbar navbar-fixed-top navbar-custom\">\n  <div class=\"row\">\n    <div class=\"col-xs-4 hidden-xs\">\n      <a class=\"navbar-brand\"\n         [routerLink]=\"['../']\">\n                <span\n                  class=\"glyphicon glyphicon-chevron-left c1-text-bold font-little-large c1-color-black pull-left glyph-color\">\n                </span>\n      </a>\n      <span\n        class=\"navbar-brand c1-text-bold font-little-large c1-color-black\">\n                Pages\n            </span>\n    </div>\n\n    <div class=\"col-xs-12 col-sm-8\">\n      <a class=\"navbar-brand visible-xs\"\n         [routerLink]=\"['../']\">\n                <span\n                  class=\"glyphicon c1-text-bold font-little-large c1-color-black glyphicon-chevron-left pull-left\">\n                </span>\n      </a>\n      <span\n        class=\"navbar-brand c1-text-bold font-little-large c1-color-black\">\n               New Page\n            </span>\n\n      <a class=\"navbar-brand pull-right c1-text-bold font-little-large c1-color-black\"\n         (click)=\"update()\">\n                <span class=\"glyphicon glyphicon-ok glyph-color\">\n                </span>\n      </a>\n    </div>\n  </div>\n</nav>\n\n<div class=\"container-fluid top-margin full-height\">\n  <div class=\"row full-height\">\n    <div class=\"col-xs-4 hidden-xs overflow right-border full-height\">\n      <ul class=\"list-group\">\n        <li class=\"list-group-item\" *ngFor=\"let x of pages\">\n          <a [routerLink]=\"[x._id,'widget']\">\n            <span class=\"c1-text-bold colored-link\">{{x.name}}</span>\n          </a>\n          <a [routerLink]=\"[x._id,'widget']\">\n            <span class=\"glyphicon glyphicon-cog pull-right colored-link\"></span>\n          </a>\n        </li>\n        </ul>\n\n    </div>\n    <div class=\"col-xs-12 col-sm-8 overflow full-height\">\n      <form class=\"form-signin\" #f=\"ngForm\">\n        <div class=\"form-group\">\n              <div *ngIf=\"errorFlag\" class=\"alert alert-danger\">{{errorMsg}}</div>\n          <label for=\"name\"\n                 class=\"c1-text-bold font-little-large c1-color-black\">\n            Name\n          </label>\n          <input type=\"text\"\n                 id=\"name\"\n                 class=\"form-control\"\n                 placeholder=\"Name\"\n                 name=\"name\"\n                 value=\"Blog Post\"\n                 [(ngModel)]=\"page['name']\">\n             <span class=\"help-block\" *ngIf=\"page['name']=='' && updated\">\n     Page name can't be blank\n    </span>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"title\"\n                 class=\"c1-text-bold font-little-large c1-color-black\"\n          >\n            Title\n          </label>\n          <input type=\"text\"\n                 id=\"title\"\n                 class=\"form-control\"\n                 placeholder=\"Title\"\n                 name=\"title\"\n                 required>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"title\"\n                 class=\"c1-text-bold font-little-large c1-color-black\"\n          >\n            Description\n          </label>\n          <input type=\"text\"\n                 id=\"descr\"\n                 class=\"form-control\"\n                 placeholder=\"Description\"\n                 name=\"descr\"\n                 [(ngModel)]=\"page['description']\"\n                 required>\n        </div>\n        <div class=\"form-group\">\n          <a class=\"btn btn-lg btn-block btn-danger\"\n             type=\"submit\" (click) = \"delete()\">\n            Delete\n          </a>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n\n<nav class=\"navbar navbar-fixed-bottom navbar-custom\">\n  <div class=\"container-fuild\">\n    <a [routerLink]=\"['/user/',userId]\"\n       class=\"navbar-link navbar-text pull-right c1-color-black c1-text-bold cl-icon-padding\">\n            <span class=\"glyphicon glyphicon-user glyph-color\">\n\n            </span>\n    </a>\n  </div>\n</nav>\n"

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
    function PageEditComponent(activatedRoute, pageService, titleService, router) {
        this.activatedRoute = activatedRoute;
        this.pageService = pageService;
        this.titleService = titleService;
        this.router = router;
    }
    PageEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.pageId = params['pid'];
            _this.websiteId = params['wid'];
        });
        this.pageService.findPageById(this.pageId)
            .subscribe(function (page) {
            _this.page = page;
        }, function (error) {
            console.log(error);
        });
        this.pageService.findPageByWebsiteId(this.websiteId)
            .subscribe(function (pages) {
            _this.pages = pages;
        }, function (error) {
            console.log(error);
        });
    };
    PageEditComponent.prototype.update = function () {
        var _this = this;
        this.updated = true;
        this.errorFlag = false;
        this.page['name'] = this.editForm.value.name;
        this.page['description'] = this.editForm.value.descr;
        if (this.page['name'] === '') {
            this.errorFlag = true;
            this.errorMsg = 'Page name cannot be blank';
        }
        else {
            this.pageService.updatePage(this.pageId, this.page)
                .subscribe(function (data) {
                _this.router.navigate(['../'], { relativeTo: _this.activatedRoute });
            }, function (error) {
                console.log(error);
            });
        }
    };
    PageEditComponent.prototype.delete = function () {
        var _this = this;
        this.pageService.deletePage(this.pageId)
            .subscribe(function (res) {
            _this.router.navigate(['../'], { relativeTo: _this.activatedRoute });
        }, function (error) {
        });
    };
    return PageEditComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('f'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* NgForm */]) === "function" && _a || Object)
], PageEditComponent.prototype, "editForm", void 0);
PageEditComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-page-edit',
        template: __webpack_require__("../../../../../src/app/components/page/page-edit/page-edit.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/page/page-edit/page-edit.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_page_service_client__["a" /* PageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_page_service_client__["a" /* PageService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["c" /* Title */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["c" /* Title */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _e || Object])
], PageEditComponent);

var _a, _b, _c, _d, _e;
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

module.exports = "<nav class=\"navbar navbar-fixed-top navbar-custom\">\n  <div class=\"container-fluid\">\n    <a class=\"navbar-brand\"\n       [routerLink]=\"['../']\">\n            <span\n              class=\"glyphicon c1-color-black glyphicon-chevron-left pull-left glyph-color\">\n\n            </span>\n    </a>\n    <span\n      class=\"navbar-brand\">\n                Pages\n        </span>\n    <a class=\"navbar-brand pull-right\"\n       [routerLink]=\"['new']\">\n            <span\n              class=\"glyphicon glyphicon-plus glyph-color\">\n\n            </span>\n    </a>\n  </div>\n</nav>\n\n\n<div class=\"container-fluid overflow center-container top-margin\">\n  <ul class=\"list-group\">\n    <li class=\"list-group-item\" *ngFor=\"let x of pages\">\n      <a [routerLink]=\"[x._id, 'widget']\">\n        <span class=\"c1-text-bold colored-link\">{{x.name}}</span>\n      </a>\n      <a [routerLink]=\"[x._id]\">\n        <span class=\"glyphicon glyphicon-cog pull-right colored-link\"></span>\n      </a>\n    </li>\n\n    <!-- if there are no pages for a website-->\n\n\n    <li class=\"colored-link list-unstyled\" *ngIf=\"pages.length == 0\">\n      <i>No Pages Found</i>\n      <hr>\n      <span class=\"glyphicon glyphicon-plus glyph-color left-margin\"></span>\n      <a class=\"colored-link\" [routerLink]=\"['new']\">\n        Create New Page\n      </a>\n\n    </li>\n\n  </ul>\n</div>\n\n<nav class=\"navbar navbar-fixed-bottom navbar-custom\">\n  <div class=\"container-fluid\">\n    <a [routerLink]=\"['/user/', userId]\"\n       class=\"navbar-link navbar-text pull-right c1-color-black c1-text-bold cl-icon-padding\">\n            <span class=\"glyphicon glyphicon-user glyph-color\">\n\n            </span>\n    </a>\n  </div>\n</nav>\n"

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
    function PageListComponent(activatedRoute, pageService, titleService) {
        this.activatedRoute = activatedRoute;
        this.pageService = pageService;
        this.titleService = titleService;
        this.pages = [];
    }
    PageListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.userId = params['uid'];
            _this.webId = params['wid'];
        });
        this.pageService.findPageByWebsiteId(this.webId)
            .subscribe(function (pages) {
            _this.pages = pages;
        }, function (error) {
            console.log(error);
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

module.exports = "<nav class=\"navbar navbar-fixed-top navbar-custom\">\n  <div class=\"row\">\n    <div class=\"col-xs-4 hidden-xs\">\n      <a class=\"navbar-brand\"\n         [routerLink]=\"['/user', userId, 'website', websiteId, 'page']\">\n                <span\n                  class=\"glyphicon glyphicon-chevron-left c1-text-bold font-little-large c1-color-black pull-left glyph-color\">\n                </span>\n      </a>\n      <span\n        class=\"navbar-brand c1-text-bold font-little-large c1-color-black\">\n                Pages\n            </span>\n      <a class=\"navbar-brand c1-text-bold font-little-large c1-color-black pull-right\"\n         [routerLink]=\"['/user', userId, 'website', websiteId, 'page', 'new']\">\n                <span\n                  class=\"glyphicon glyphicon-plus glyph-color\">\n\n                </span>\n      </a>\n    </div>\n\n    <div class=\"col-xs-12 col-sm-8\">\n      <a class=\"navbar-brand visible-xs\"\n         [routerLink]=\"['/user', userId, 'website', websiteId, 'page']\">\n                <span\n                  class=\"glyphicon c1-text-bold font-little-large c1-color-black glyphicon-chevron-left pull-left\">\n                </span>\n      </a>\n      <span\n        class=\"navbar-brand c1-text-bold font-little-large c1-color-black\">\n               New Page\n            </span>\n\n      <a (click)=\"add()\" class=\"navbar-brand pull-right c1-text-bold font-little-large c1-color-black\">\n                <span class=\"glyphicon glyphicon-ok glyph-color\">\n                </span>\n      </a>\n    </div>\n  </div>\n</nav>\n\n\n<div class=\"container-fluid top-margin full-height\">\n  <div class=\"row full-height\">\n    <div class=\"col-xs-4 hidden-xs overflow right-border full-height\">\n      <ul class=\"list-group\">\n        <li class=\"list-group-item\" *ngFor=\"let x of pages\">\n          <a [routerLink]=\"['/user', userId,'website', x.websiteId, 'page', x._id, 'widget']\">\n            <span class=\"c1-text-bold colored-link\">{{x.name}}</span>\n          </a>\n          <a [routerLink]=\"['/user', userId,'website', x.websiteId, 'page', x._id]\">\n            <span class=\"glyphicon glyphicon-cog pull-right colored-link\"></span>\n          </a>\n        </li>\n      </ul>\n    </div>\n    <div class=\"col-xs-12 col-sm-8 overflow full-height\">\n      <form class=\"form-signin\" #f=\"ngForm\">\n        <div class=\"form-group\">\n          <div *ngIf=\"errorFlag\" class=\"alert alert-danger\">{{errorMsg}}</div>\n          <label for=\"name\"\n                 class=\"c1-text-bold font-little-large c1-color-black\">\n            Name\n          </label>\n          <input type=\"text\"\n                 id=\"name\"\n                 class=\"form-control\"\n                 placeholder=\"Name\"\n                 name=\"name\"\n\n                 [(ngModel)]=\"page['name']\">\n          <span class=\"help-block\" *ngIf=\"name == '' && updated\">\n     Page name can't be blank\n    </span>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"title\"\n                 class=\"c1-text-bold font-little-large c1-color-black\">\n            Title\n          </label>\n          <input type=\"text\"\n                 id=\"title\"\n                 name=\"title\"\n                 class=\"form-control\"\n                 placeholder=\"Title\"\n                 required\n          ngModel>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"descr\"\n                 class=\"c1-text-bold font-little-large c1-color-black\">\n            Description\n          </label>\n          <input type=\"text\"\n                 id=\"descr\"\n                 name=\"descr\"\n                 class=\"form-control\"\n                 placeholder=\"Description\"\n                 required\n          ngModel>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n\n<nav class=\"navbar navbar-fixed-bottom navbar-custom\">\n  <div class=\"container-fuild\">\n    <a [routerLink]=\"['/user/', userId]\"\n       class=\"navbar-link navbar-text pull-right c1-color-black c1-text-bold cl-icon-padding\">\n            <span class=\"glyphicon glyphicon-user glyph-color\">\n\n            </span>\n    </a>\n  </div>\n</nav>\n"

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
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.userId = params['uid'];
            _this.websiteId = params['wid'];
        });
        this.pageService.findPageByWebsiteId(this.websiteId)
            .subscribe(function (pages) {
            _this.pages = pages;
        }, function (error) {
            console.log(error);
        });
    };
    PageNewComponent.prototype.add = function () {
        var _this = this;
        var page = {};
        this.name = this.newForm.value.name;
        this.descr = this.newForm.value.descr;
        page['name'] = this.name;
        page['description'] = this.descr;
        if (this.name === '') {
            this.errorFlag = true;
            this.errorMsg = 'Page name cannot be blank';
        }
        else {
            this.pageService.createPage(this.websiteId, page)
                .subscribe(function (page) {
                _this.router.navigate(['../'], { relativeTo: _this.activatedRoute });
            });
        }
    };
    return PageNewComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('f'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* NgForm */]) === "function" && _a || Object)
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

module.exports = "<div class=\"container\">\n  <div *ngIf=\"errorFlag\"\n       class=\"alert alert-danger\">\n    {{errorMsg}}\n  </div>\n\n  <h1>Login</h1>\n  <form (ngSubmit) = \"login()\" #f=\"ngForm\">\n  <input placeholder=\"username\"\n         name=\"username\"\n         type=\"text\"\n         class=\"form-control bottom-buffer\"\n         ngModel required autofocus\n         #username=\"ngModel\"\n         [ngClass]=\"{'alert': !username.valid && username.touched, 'alert-danger': !username.valid && username.touched}\"/>\n    <span class=\"help-block\" *ngIf=\"!username.valid && username.touched\">Please enter a username! </span>\n  <input placeholder=\"password\"\n         type=\"password\"\n         name=\"password\"\n         ngModel\n         class=\"form-control bottom-buffer\"\n         #password=\"ngModel\"\n         [ngClass]=\"{'alert': !password.valid && password.touched, 'alert-danger': !password.valid && password.touched}\"/>\n    <span class=\"help-block\" *ngIf=\"!password.valid && password.touched\">Please enter a password! </span>\n  <button class=\"btn btn-primary btn-block bottom-buffer\" type=\"submit\" [disabled]=\"!f.valid\">Login</button>\n    <a href=\"/auth/facebook\" class=\"btn btn-primary btn-block\">\n      <span class=\"fa fa-facebook\"></span>\n      Facebook\n    </a>\n  <button class=\"btn btn-success btn-block bottom-buffer\" [routerLink]=\"['/register']\" >Register</button>\n</form>\n</div>\n"

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_shared_service__ = __webpack_require__("../../../../../src/app/services/shared.service.ts");
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
    function LoginComponent(router, userService, titleService, sharedService) {
        this.router = router;
        this.userService = userService;
        this.titleService = titleService;
        this.sharedService = sharedService;
        this.errorMsg = 'Invalid credentials!';
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.titleService.setTitle('Login');
        if (this.userService.loggedIn()) {
            this.router.navigate(['/profile']);
        }
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.username = this.loginForm.value.username;
        this.password = this.loginForm.value.password;
        if (this.username === '' || this.password === '') {
            this.errorFlag = true;
            this.errorMsg = 'Both credentials are required!';
        }
        else {
            this.errorFlag = false;
            this.userService.login(this.username, this.password)
                .subscribe(function (data) {
                _this.sharedService.user = data;
                _this.router.navigate(['/profile']);
            }, function (error) {
                _this.errorFlag = true;
                _this.errorMsg = 'Invalid credentials';
                console.log(error);
            });
        }
    };
    return LoginComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('f'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* NgForm */]) === "function" && _a || Object)
], LoginComponent.prototype, "loginForm", void 0);
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/components/user/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/user/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["c" /* Title */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["c" /* Title */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__services_shared_service__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_shared_service__["a" /* SharedService */]) === "function" && _e || Object])
], LoginComponent);

var _a, _b, _c, _d, _e;
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

module.exports = "<nav class=\"navbar navbar-fixed-top navbar-custom \">\n  <div class=\"container-fluid\">\n\n\n    <p class=\"navbar-header pull-left\">\n      <a class=\"navbar-brand glyph-color\">\n        <b>Profile</b>\n      </a>\n    </p>\n\n    <p class=\"navbar-text pull-right\">\n      <a (click) = \"update()\" [routerLink]=\"['/user', userId]\" class=\"navbar-link\">\n        <span class=\"glyphicon glyphicon-ok glyph-color\"></span>\n      </a>\n    </p>\n\n  </div>\n</nav>\n\n\n<div class=\"container top-margin\">\n  <form #f=\"ngForm\">\n    <div class=\"form-group\">\n      <label for=\"username\">Username</label>\n      <input [(ngModel)]=\"username\" name=\"username\" type=\"text\" class=\"form-control bottom-buffer\" id=\"username\" placeholder=\"vshamnani\">\n    </div>\n\n\n\n    <div class=\"form-group\">\n      <label for=\"email\">Email address</label>\n      <input name=\"email\" type=\"email\" class=\"form-control bottom-buffer\" id=\"email\" placeholder=\"shamnani.v@husky.neu.edu\">\n    </div>\n\n\n\n    <div class=\"form-group\">\n      <label for=\"first-name\">First Name</label>\n      <input [(ngModel)]=\"firstName\" name=\"firstName\" type=\"text\" class=\"form-control bottom-buffer\" id=\"first-name\" placeholder=\"Vinayak\">\n    </div>\n\n\n\n    <div class=\"form-group\">\n      <label for=\"last-name\">Last Name</label>\n      <input [(ngModel)]=\"lastName\" name=\"lastName\"type=\"text\" class=\"form-control bottom-buffer\" id=\"last-name\" placeholder=\"Shamnani\">\n    </div>\n\n  <a class=\"btn btn-primary btn-block\"\n     [routerLink]=\"['/user/',userId,'website']\">Websites</a>\n  <button class=\"btn btn-danger btn-block bottom-margin\"\n     (click)=\"logout()\" >Logout</button>\n  </form>\n</div>\n\n\n<nav class=\"navbar navbar-fixed-bottom navbar-custom\">\n  <div class=\"container-fluid\">\n    <p class=\"navbar-text pull-right\">\n      <a [routerLink]=\"['/user/',userId]\" class=\"navbar-link navbar-text pull-right c1-color-black c1-text-bold cl-icon-padding\">\n        <span class=\"glyphicon glyphicon-user glyph-color\"></span>\n      </a>\n    </p>\n\n  </div>\n</nav>\n\n\n"

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_shared_service__ = __webpack_require__("../../../../../src/app/services/shared.service.ts");
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
    function ProfileComponent(userService, activatedRoute, titleService, router, sharedService) {
        this.userService = userService;
        this.activatedRoute = activatedRoute;
        this.titleService = titleService;
        this.router = router;
        this.sharedService = sharedService;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        this.titleService.setTitle('User Profile');
        this.user = this.sharedService.user;
        this.userId = this.user['_id'];
        this.username = this.user['username'];
        this.email = this.user['email'];
        this.firstName = this.user['firstName'];
        this.lastName = this.user['lastName'];
    };
    ProfileComponent.prototype.logout = function () {
        var _this = this;
        this.userService.logout()
            .subscribe(function (data) { return _this.router.navigate(['/login']); });
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
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* NgForm */]) === "function" && _a || Object)
], ProfileComponent.prototype, "profileForm", void 0);
ProfileComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-profile',
        template: __webpack_require__("../../../../../src/app/components/user/profile/profile.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/user/profile/profile.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_user_service_client__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["c" /* Title */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["c" /* Title */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5__services_shared_service__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_shared_service__["a" /* SharedService */]) === "function" && _f || Object])
], ProfileComponent);

var _a, _b, _c, _d, _e, _f;
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

module.exports = "<div class=\"container\">\n  <div *ngIf=\"userExistsFlag\"\n       class=\"alert alert-danger\">\n    {{userExistsMessage}}\n  </div>\n\n  <h1>User Registration</h1>\n  <form (ngSubmit) = \"register()\" #f=\"ngForm\">\n  <input placeholder=\"Username\"\n         name=\"username\"\n         type=\"text\"\n         class=\"form-control bottom-buffer\"\n         ngModel\n         required\n         #username=\"ngModel\">\n    <span class=\"help-block\" *ngIf=\"!username.valid && username.touched && submitted\">\n      Username cannot be blank!\n    </span>\n  <input placeholder=\"password\"\n         name=\"password\"\n         type=\"password\"\n         class=\"form-control bottom-buffer\"\n         ngModel\n         required\n         #password=\"ngModel\"/>\n    <span class=\"help-block\" *ngIf=\"!password.valid && password.touched && submitted\">\n      Please enter a valid password!\n   </span>\n  <input placeholder=\"Verify Password\"\n         type=\"password\"\n         name=\"verifypwd\"\n         ngModel\n         required\n         #verifypwd=\"ngModel\"\n         class=\"form-control bottom-buffer\"/>\n    <span class=\"help-block\" *ngIf=\"!verifypwd.valid && verifypwd.touched && submitted\">\n      Please re-enter your password!\n   </span>\n  <button class=\"btn btn-primary btn-block bottom-buffer\" type=\"submit\" [disabled]=\"!f.valid\">Register</button>\n  <button class=\"btn btn-danger btn-block bottom-buffer  \"\n     [routerLink]=\"['/login']\" >Cancel</button>\n  </form>\n</div>\n"

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
        this.submitted = true;
        this.username = this.registrationForm.value.username;
        this.password = this.registrationForm.value.password;
        this.verifypwd = this.registrationForm.value.verifypwd;
        if (this.username === '' || this.password === '' || this.verifypwd === '') {
            this.errorFlag = true;
            this.errorMessage = 'Enter all values';
        }
        else {
            if (this.password === this.verifypwd) {
                this.userService.register(this.username, this.password)
                    .subscribe(function (data) {
                    _this.router.navigate(['/profile']);
                }, function (error) {
                    console.log(error);
                });
            }
            else {
                this.errorFlag = true;
            }
        }
    };
    return RegisterComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('f'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* NgForm */]) === "function" && _a || Object)
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

module.exports = "<nav class=\"navbar navbar-fixed-top navbar-custom\">\n  <div class=\"row \">\n    <div class=\"col-xs-4 hidden-xs\">\n      <a class=\"navbar-brand\"\n         [routerLink]=\"['/user/',userId,'website']\">\n                <span\n                  class=\"glyphicon glyphicon-chevron-left pull-left glyph-color\">\n                </span>\n      </a>\n\n      <span\n        class=\"navbar-brand\">\n                Websites\n            </span>\n      <a class=\"navbar-brand pull-right navbar-custom\"\n         [routerLink]=\"['/user/',userId,'website','new']\">\n                <span\n                  class=\"glyphicon glyphicon-plus\">\n                </span>\n      </a>\n\n\n    </div>\n    <div class=\"col-xs-12 col-sm-8\">\n      <a class=\"navbar-brand visible-xs\"\n         [routerLink]=\"['/user/',userId,'website']\">\n                <span\n                  class=\"glyphicon glyphicon-chevron-left pull-left glyph-color\">\n                </span>\n      </a>\n      <span\n        class=\"navbar-brand \">\n               New Website\n            </span>\n      <a class=\"navbar-brand pull-right\" (click)=\"update()\">\n                <span class=\"glyphicon glyphicon-ok glyph-color\">\n                </span>\n      </a>\n    </div>\n  </div>\n</nav>\n\n<div class=\"body row container-fluid top-margin\">\n  <div class=\"col-sm-4 hidden-xs\">\n    <ul class=\"list-group\">\n      <li class=\"list-group-item\" *ngFor=\"let x of websites\">\n        <a class=\"colored-link\" [routerLink]=\"['/user/',userId,'website',x._id,'page']\"><b>{{x.name}}</b> </a>\n        <a class=\"colored-link\" [routerLink]=\"['/user/',userId,'website',x._id]\"> <span class=\"pull-right glyphicon glyphicon-cog\"></span></a>\n      </li>\n    </ul>\n  </div>\n\n  <div class=\"col-sm-8 \">\n    <form #f = \"ngForm\">\n      <div class=\"form-group\">\n        <div *ngIf=\"errorFlag\" class=\"alert alert-danger\">{{errorMsg}}</div>\n        <label for=\"inputName\">Name</label>\n        <input [(ngModel)]='websiteName' name =\"name\"\n               type=\"text\" class=\"form-control\" id=\"inputName\" placeholder=\"Website Name\" ngModel #nameng = \"ngModel\">\n            <span class=\"help-block\" *ngIf=\"websiteName=='' && updated\">\n      Website name cannot be blank.\n    </span>\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"desc\">Description</label>\n        <textarea [(ngModel)]='description' name =\"desc\"\n                  class=\"form-control\" rows=\"5\" id=\"desc\" placeholder=\"Website Description\" ngModel ></textarea>\n      </div>\n      <a (click)=\"delete()\" class=\"btn btn-danger btn-block\">Delete</a>\n    </form>\n  </div>\n</div>\n\n  <nav class=\"navbar navbar-fixed-bottom navbar-custom\">\n  <div class=\"container-fuild\">\n    <a [routerLink]=\"['/user/', userId]\" class=\"navbar-link navbar-text pull-right c1-color-black c1-text-bold cl-icon-padding\">\n      <span class=\"glyphicon glyphicon-user glyph-color\"></span>\n    </a>\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/website/website-edit/website-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebsiteEditComponent; });
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



var WebsiteEditComponent = (function () {
    function WebsiteEditComponent(websiteService, activatedRoute, router) {
        this.websiteService = websiteService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.websites = [{}];
    }
    WebsiteEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.userId = params['uid'];
            _this.websiteId = params['wid'];
        });
        this.websiteService.findWebsiteById(this.websiteId)
            .subscribe(function (website) {
            _this.website = website;
            _this.websiteName = _this.website['name'];
            _this.description = _this.website['description'];
        }, function (error) {
            console.log(error);
        });
        this.websiteService.findWebsiteByUser(this.userId).
            subscribe(function (websites) {
            _this.websites = websites;
        }, function (error) {
            console.log(error);
        });
    };
    WebsiteEditComponent.prototype.delete = function () {
        var _this = this;
        this.websiteService.deleteWebsite(this.websiteId)
            .subscribe(function (res) {
            _this.router.navigate(['../'], { relativeTo: _this.activatedRoute });
        }, function (error) {
            console.log('Error is ' + error);
        });
    };
    WebsiteEditComponent.prototype.update = function () {
        var _this = this;
        this.updated = true;
        this.errorFlag = false;
        if (this.websiteName === '') {
            this.errorFlag = true;
            this.errorMsg = 'Please enter a website name';
        }
        else {
            this.website['name'] = this.websiteName;
            this.website['description'] = this.description;
            this.websiteService.updateWebsite(this.websiteId, this.website)
                .subscribe(function (data) {
                _this.router.navigate(['../'], { relativeTo: _this.activatedRoute });
            }, function (error) {
                console.log(error);
            });
        }
    };
    return WebsiteEditComponent;
}());
WebsiteEditComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-website-edit',
        template: __webpack_require__("../../../../../src/app/components/website/website-edit/website-edit.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/website/website-edit/website-edit.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_website_service_client__["a" /* WebsiteService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_website_service_client__["a" /* WebsiteService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object])
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
        this.websites = [];
    }
    WebsiteListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.userId = params['uid'];
        });
        this.websiteService.findWebsiteByUser(this.userId)
            .subscribe(function (websites) {
            _this.websites = websites;
        }, function (error) {
            console.log(error);
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

module.exports = "<nav class=\"navbar navbar-fixed-top navbar-custom\">\n  <div class=\"row \">\n    <div class=\"col-xs-4 hidden-xs\">\n      <a class=\"navbar-brand\"\n         [routerLink]=\"['/user/',userId,'website']\">\n                <span\n                  class=\"glyphicon glyphicon-chevron-left pull-left glyph-color\">\n                </span>\n      </a>\n      <span\n        class=\"navbar-brand c1-text-bold font-little-large c1-color-black\">\n                Websites\n            </span>\n      <a class=\"navbar-brand pull-right navbar-custom\"\n         [routerLink]=\"['new']\">\n                <span\n                  class=\"glyphicon glyphicon-plus\">\n                </span>\n      </a>\n\n\n    </div>\n    <div class=\"col-xs-12 col-sm-8\">\n      <a class=\"navbar-brand visible-xs\"\n         [routerLink]=\"['/user/',userId,'website']\">\n                <span\n                  class=\"glyphicon glyphicon-chevron-left pull-left\">\n                </span>\n      </a>\n      <span\n        class=\"navbar-brand \">\n               New Website\n            </span>\n      <a class=\"navbar-brand pull-right\"\n         (click)=\"add()\">\n                <span class=\"glyphicon glyphicon-ok glyph-color\">\n                </span>\n      </a>\n    </div>\n  </div>\n</nav>\n\n<div class=\"container-fluid top-margin row\">\n  <div class=\"col-sm-4 hidden-xs\">\n\n      <ul class=\"list-group\">\n        <li class=\"list-group-item\" *ngFor=\"let x of websites\">\n          <a class=\"colored-link\" [routerLink]=\"['/user/',userId,'website',x._id,'page']\"><span class=\"colored-link\">{{x.name}}</span> </a>\n          <a class=\"colored-link\" [routerLink]=\"['/user/',userId,'website',x._id]\"> <span class=\"pull-right glyphicon glyphicon-cog colored-link\"></span></a>\n        </li>\n      </ul>\n\n  </div>\n\n\n  <div class=\"col-sm-8\">\n    <form #f=\"ngForm\">\n    <div class=\"form-group\">\n      <div *ngIf=\"errorFlag\" class=\"alert alert-danger\">{{errorMsg}}</div>\n      <label for=\"inputName\">Name</label>\n      <input [(ngModel)]='websiteName' type=\"text\" name=\"websiteName\" class=\"form-control\" id=\"inputName\" placeholder=\"Website Name\" ngModel/>\n          <span class=\"help-block\" *ngIf=\"!websiteName.valid && submitted\">\n      Website name cannot be blank.\n    </span>\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"descr\">Description</label>\n      <textarea [(ngModel)]='description' name=\"description\" class=\"form-control\" rows=\"5\" id=\"descr\" placeholder=\"Website Description\" ngModel></textarea>\n    </div>\n    </form>\n  </div>\n\n</div>\n\n<nav class=\"navbar navbar-fixed-bottom navbar-custom\">\n  <div class=\"container-fuild\">\n    <a [routerLink]=\"['/user/',userId]\" class=\"navbar-link navbar-text pull-right c1-color-black c1-text-bold cl-icon-padding\">\n      <span class=\"glyphicon glyphicon-user glyph-color\"></span>\n    </a>\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/website/website-new/website-new.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebsiteNewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_website_service_client__ = __webpack_require__("../../../../../src/app/services/website.service.client.ts");
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




var WebsiteNewComponent = (function () {
    function WebsiteNewComponent(websiteService, route, router) {
        this.websiteService = websiteService;
        this.route = route;
        this.router = router;
        this.websites = [{}];
    }
    WebsiteNewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .subscribe(function (params) {
            _this.userId = params['uid'];
        });
        this.websiteService.findWebsiteByUser(this.userId)
            .subscribe(function (websites) {
            _this.websites = websites;
        }, function (error) {
            console.log(error);
        });
    };
    WebsiteNewComponent.prototype.add = function () {
        var _this = this;
        this.websiteName = this.websiteForm.value.websiteName;
        this.description = this.websiteForm.value.description;
        if (this.websiteName === '') {
            this.errorFlag = true;
        }
        else {
            var website = { _id: '', name: this.websiteName, developerId: this.userId, description: this.description };
            this.websiteService.createWebsite(this.userId, website).subscribe(function (website) {
                _this.router.navigate(['../'], { relativeTo: _this.route });
            }, function (error) {
                console.log(error);
            });
        }
    };
    return WebsiteNewComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('f'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* NgForm */]) === "function" && _a || Object)
], WebsiteNewComponent.prototype, "websiteForm", void 0);
WebsiteNewComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-website-new',
        template: __webpack_require__("../../../../../src/app/components/website/website-new/website-new.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/website/website-new/website-new.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_website_service_client__["a" /* WebsiteService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_website_service_client__["a" /* WebsiteService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _d || Object])
], WebsiteNewComponent);

var _a, _b, _c, _d;
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

module.exports = "<div class=\"container-fluid custom-center-container\">\n\n  <nav class=\"navbar navbar-fixed-top navbar-custom\">\n    <div class=\"container-fluid\">\n      <a class=\"navbar-brand\" [routerLink]=\"['/user',userId,\n          'website',websiteId,\n          'page',pageId,'widget']\"><span\n        class=\"glyphicon glyphicon-chevron-left pull-left glyph-color\"></span></a>\n      <span class=\"navbar-brand\">\n              Choose a Widget\n            </span>\n    </div>\n  </nav>\n  <div class=\"top-margin\">\n    <ul class=\"list-group\">\n      <li class=\"list-group-item\">\n        <a class=\"colored-link\" (click)=\"add('HEADING')\">Header</a>\n      </li>\n      <li class=\"list-group-item\">\n        <a class=\"colored-link\" (click)=\"add('IMAGE')\">Image</a>\n      </li>\n      <li class=\"list-group-item\">\n        <a class=\"colored-link\" (click)=\"add('YOUTUBE')\">Youtube</a>\n      </li>\n      <li class=\"list-group-item\">\n        <a class=\"colored-link\" (click)=\"add('HTML')\">HTML</a>\n      </li>\n      <li class=\"list-group-item\">\n        <a class=\"colored-link\" (click)=\"add('TEXT')\">Text</a>\n      </li>\n    </ul>\n  </div>\n\n  <nav class=\"navbar navbar-fixed-bottom navbar-custom\">\n    <div class=\"container-fluid\">\n      <a class=\"navbar-link navbar-text c1-color-black c1-text-bold cl-icon-padding\" href=\"#\"><span class=\"glyphicon glyphicon-play glyph-color\"></span></a>\n      <a class=\"navbar-link navbar-text c1-color-black c1-text-bold cl-icon-padding\" href=\"#\"><span class=\"glyphicon glyphicon-eye-open glyph-color\"></span></a>\n      <a class=\"navbar-link navbar-text pull-right c1-color-black c1-text-bold cl-icon-padding\" [routerLink]=\"['/user', userId]\"><span class=\"glyphicon glyphicon-user glyph-color\"></span></a>\n    </div>\n  </nav>\n</div>\n"

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
    function WidgetChooseComponent(activatedRoute, router, widgetService, titleService) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.widgetService = widgetService;
        this.titleService = titleService;
    }
    WidgetChooseComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.pageId = params['pid'];
            _this.userId = params['uid'];
            _this.websiteId = params['wid'];
        });
    };
    WidgetChooseComponent.prototype.add = function (wType) {
        var _this = this;
        var widget = {
            widgetType: wType,
            _id: '0',
        };
        this.widgetService.createWidget(this.pageId, widget).subscribe(function (widget) {
            console.log('Widget here in choose is ' + JSON.stringify(widget));
            _this.router.navigate(['..', widget._id], { relativeTo: _this.activatedRoute });
        });
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

module.exports = "<div [ngSwitch]=\"widget['widgetType']\">\n\n  <div *ngSwitchCase='header'>\n    <app-widget-header></app-widget-header>\n  </div>\n\n  <div *ngSwitchCase='image'>\n    <app-widget-image></app-widget-image>\n  </div>\n\n  <div *ngSwitchCase='youtube'>\n    <app-widget-youtube></app-widget-youtube>\n  </div>\n\n  <div *ngSwitchCase='html'>\n    <app-widget-html></app-widget-html>\n  </div>\n  <div *ngSwitchCase='text'>\n    <app-widget-text></app-widget-text>\n  </div>\n\n</div>\n"

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
        this.html = 'HTML';
        this.text = 'TEXT';
    }
    WidgetEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.userId = params['uid'];
            _this.websiteId = params['wid'];
            _this.pageId = params['pid'];
            _this.widgetId = params['wgid'];
        });
        this.widgetService.findWidgetById(this.widgetId)
            .subscribe(function (widget) {
            _this.widget = widget;
        }, function (error) {
            console.log(error);
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

module.exports = "<nav class=\"navbar-custom navbar-fixed-top\">\n  <div class=\"row\">\n    <div class=\"col-xs-12\">\n      <a class=\"navbar-brand\" [routerLink]=\"['/user',userId,\n          'website',websiteId,\n          'page',pageId,\n          'widget']\"><span\n        class=\"glyphicon glyphicon-chevron-left pull-left glyph-color\"></span></a>\n      <span class=\"navbar-brand\">\n                <strong>Widget Edit</strong>\n            </span>\n      <a class=\"navbar-brand pull-right\" (click)=\"update()\"><span class=\"glyphicon glyphicon-ok glyph-color\"></span></a>\n    </div>\n  </div>\n</nav>\n\n<div class=\"container-fluid custom-center-container top-margin\">\n  <div class=\"row\">\n    <div class=\"col-xs-12\">\n      <form #f=\"ngForm\">\n        <div class=\"form-group\">\n          <div *ngIf=\"errorFlag\" class=\"alert alert-danger\">{{errorMsg}}</div>\n          <label for=\"name\" class=\"c1-text-bold font-little-large c1-color-black\">Name</label>\n          <input type=\"text\" id=\"name\" class=\"form-control\" placeholder=\"Name\"\n                 data-toggle=\"tooltip\"\n                 title=\"Enter Widget Name\"\n                 name=\"name\"\n                 required autofocus\n                 ngModel\n                 [(ngModel)]=\"widget.name\"\n                 name=\"name\">\n              <span class=\"help-block\" *ngIf=\"widgetName==undefined && updated\">\n      Please enter widget name!\n    </span>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"text\" class=\"c1-text-bold font-little-large c1-color-black\">Text</label>\n          <input type=\"text\" id=\"text\" class=\"form-control\" placeholder=\"Text\"\n                 data-toggle=\"tooltip\"\n                 title=\"Enter Widget Text\"\n                 name=\"text\"\n                 id=\"text\"\n                 #text=\"ngModel\"\n                 ngModel required\n                 [(ngModel)]=\"widget.text\"\n          >\n        </div>\n        <div class=\"form-group\">\n          <label for=\"size\" class=\"c1-text-bold font-little-large c1-color-black\">Size</label>\n          <input type=\"number\" id=\"size\" class=\"form-control\" placeholder=\"Size\" value=\"6\"\n                 data-toggle=\"tooltip\"\n                 title=\"Enter Widget Size\" min=\"1\" max=\"6\" required\n                 #size=\"ngModel\"\n                  ngModel\n                 name=\"size\"\n                 [(ngModel)]=\"widget.size\"\n              >\n        </div>\n        <div class=\"form-group\">\n          <a (click)=\"delete()\"  class=\"btn btn-lg btn-block btn-danger\" type=\"submit\">Delete</a>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n<nav class=\"navbar-custom navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n    <ul class=\"nav navbar-nav navbar-right\">\n      <li><a [routerLink]=\"['/user', userId]\"><span class=\"glyphicon glyphicon-user pull-right glyph-color\"></span></a></li>\n    </ul>\n\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-header/widget-header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetHeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
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




var WidgetHeaderComponent = (function () {
    function WidgetHeaderComponent(widgetService, activatedRoute, router) {
        this.widgetService = widgetService;
        this.activatedRoute = activatedRoute;
        this.router = router;
    }
    WidgetHeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.widgetId = params['wgid'];
            _this.userId = params['uid'];
            _this.websiteId = params['wid'];
            _this.pageId = params['pid'];
        });
        this.widgetService.findWidgetById(this.widgetId).subscribe(function (widget) {
            _this.widget = widget;
            _this.widgetName = _this.widget['name'];
            _this.widgetText = _this.widget['text'];
            _this.widgetSize = eval(_this.widget['size']);
        });
    };
    WidgetHeaderComponent.prototype.update = function () {
        var _this = this;
        this.updated = true;
        this.widget['name'] = this.headingForm.value.name;
        this.widget['text'] = this.headingForm.value.text;
        this.widget['size'] = this.headingForm.value.size;
        if (this.widget['name'] === '') {
            this.errorFlag = true;
            this.errorMsg = 'Widget name is required';
        }
        else {
            this.widgetService.updateWidget(this.widgetId, this.widget)
                .subscribe(function (data) {
                _this.router.navigate(['../'], { relativeTo: _this.activatedRoute });
            });
        }
    };
    WidgetHeaderComponent.prototype.delete = function () {
        var _this = this;
        this.widgetService.deleteWidget(this.widgetId).subscribe(function (data) {
            _this.router.navigate(['../'], { relativeTo: _this.activatedRoute });
        });
    };
    return WidgetHeaderComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('f'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* NgForm */]) === "function" && _a || Object)
], WidgetHeaderComponent.prototype, "headingForm", void 0);
WidgetHeaderComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-widget-header',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-header/widget-header.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-header/widget-header.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__["a" /* WidgetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__["a" /* WidgetService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _d || Object])
], WidgetHeaderComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=widget-header.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-html/widget-html.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-html/widget-html.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar-custom navbar-fixed-top\">\n  <div class=\"row\">\n    <div class=\"col-xs-12\">\n      <a class=\"navbar-brand\" [routerLink]=\"['../']\"><span\n        class=\"glyphicon glyphicon-chevron-left pull-left glyph-color\"></span></a>\n      <span class=\"navbar-brand\">\n                <strong>Widget Edit</strong>\n            </span>\n      <a class=\"navbar-brand pull-right\" (click)=\"update()\"><span class=\"glyphicon glyphicon-ok glyph-color\"></span></a>\n    </div>\n  </div>\n</nav>\n\n<div class=\"container top-margin\">\n\n  <form #f=\"ngForm\">\n    <div *ngIf=\"errorFlag\" class=\"alert alert-danger\">{{errorMsg}}</div>\n    <div class=\"form-group\">\n      <label for=\"name\">Name</label>\n      <input type=\"text\" class=\"form-control\" id=\"name\"  [(ngModel)]=\"widgetName\" name=\"widgetName\"  placeholder=\"Name\">\n      <span class=\"help-block\" *ngIf=\"widgetName==undefined && updated\">\n      Please enter widget name!\n    </span>\n    </div>\n\n\n    <div class=\"form-group\">\n      <label for=\"text\">Text</label>\n      <quill-editor [(ngModel)]=\"widgetText\" name=\"widgetText\"  id=\"text\" ></quill-editor>\n    </div>\n\n    <a class=\"btn btn-danger btn-block \"\n            (click)=\"delete()\" >Delete</a>\n  </form>\n\n  </div>\n\n<nav class=\"navbar-custom navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n    <ul class=\"nav navbar-nav navbar-right\">\n      <li><a [routerLink]=\"['/user', userId]\"><span class=\"glyphicon glyphicon-user pull-right glyph-color\"></span></a></li>\n    </ul>\n\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-html/widget-html.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetHtmlComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
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




var WidgetHtmlComponent = (function () {
    function WidgetHtmlComponent(widgetService, activatedRoute, router) {
        this.widgetService = widgetService;
        this.activatedRoute = activatedRoute;
        this.router = router;
    }
    WidgetHtmlComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.widgetId = params['wgid'];
            _this.userId = params['uid'];
        });
        this.widgetService.findWidgetById(this.widgetId).subscribe(function (widget) {
            _this.widget = widget;
            _this.widgetName = _this.widget['name'];
            _this.widgetText = _this.widget['text'];
        });
    };
    WidgetHtmlComponent.prototype.update = function () {
        var _this = this;
        this.updated = true;
        this.widget['name'] = this.htmlForm.value.widgetName;
        this.widget['text'] = this.htmlForm.value.widgetText;
        console.log('Widget inside Update ' + JSON.stringify(this.widget));
        if (this.widget['name'] === '') {
            this.errorFlag = true;
            this.errorMsg = 'Widget name is required';
        }
        else {
            this.widgetService.updateWidget(this.widgetId, this.widget)
                .subscribe(function (data) {
                _this.router.navigate(['../'], { relativeTo: _this.activatedRoute });
            });
        }
    };
    WidgetHtmlComponent.prototype.delete = function () {
        var _this = this;
        this.widgetService.deleteWidget(this.widgetId).subscribe(function (data) {
            _this.router.navigate(['../'], { relativeTo: _this.activatedRoute });
        });
    };
    return WidgetHtmlComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('f'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* NgForm */]) === "function" && _a || Object)
], WidgetHtmlComponent.prototype, "htmlForm", void 0);
WidgetHtmlComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-widget-html',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-html/widget-html.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-html/widget-html.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__["a" /* WidgetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__["a" /* WidgetService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _d || Object])
], WidgetHtmlComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=widget-html.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-image/flickr-image-search/flickr-image-search.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-image/flickr-image-search/flickr-image-search.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-fixed-top navbar-custom\">\n  <div class=\"container-fluid\">\n    <a class=\"navbar-brand\" [routerLink]=\"['../']\"><span\n      class=\"glyphicon glyphicon-chevron-left pull-left glyph-color\"></span></a>\n    <span class=\"navbar-brand\">\n              Search on Flickr\n            </span>\n\n\n  </div>\n</nav>\n<div class=\"input-group top-margin\">\n  <input [(ngModel)]=\"searchText\" type=\"text\" class=\"form-control\" placeholder=\"Enter search text\" autofocus>\n  <span class=\"input-group-btn\">\n         <a (click)=\"searchPhotos()\" class=\"btn btn-default\" type=\"button\">\n             <span class=\"glyphicon glyphicon-search\"></span>\n         </a>\n </span>\n</div>\n<br>\n<div class=\"container\">\n  <div class=\"row\" *ngIf=\"search\">\n    <h5>Found the following images for <i><u>{{searchText}}</u></i></h5>\n    <div *ngFor = \"let pic of photos['photo']\"\n         class=\"col-xs-4\">\n      <img    (click)=\"selectPhoto(pic)\"\n              width=\"100%\"\n              [src] = \"['https://farm' + pic.farm + '.staticflickr.com/' + pic.server + '/' +   pic.id + '_' + pic.secret + '_s.jpg']\"/>\n\n      <p></p>\n    </div>\n  </div>\n</div>\n\n<nav class=\"navbar navbar-fixed-bottom navbar-custom\">\n  <div class=\"container-fluid\">\n    <a class=\"navbar-link navbar-text c1-color-black c1-text-bold cl-icon-padding\" href=\"#\"><span class=\"glyphicon glyphicon-play glyph-color\"></span></a>\n    <a class=\"navbar-link navbar-text c1-color-black c1-text-bold cl-icon-padding\" href=\"#\"><span class=\"glyphicon glyphicon-eye-open glyph-color\"></span></a>\n    <a class=\"navbar-link navbar-text pull-right c1-color-black c1-text-bold cl-icon-padding\" [routerLink]=\"['/user', userId]\"><span class=\"glyphicon glyphicon-user glyph-color\"></span></a>\n  </div>\n</nav>\n\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-image/flickr-image-search/flickr-image-search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlickrImageSearchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_flickr_service_client__ = __webpack_require__("../../../../../src/app/services/flickr.service.client.ts");
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




var FlickrImageSearchComponent = (function () {
    function FlickrImageSearchComponent(flickrService, widgetService, router, activatedRoute) {
        this.flickrService = flickrService;
        this.widgetService = widgetService;
        this.router = router;
        this.activatedRoute = activatedRoute;
    }
    FlickrImageSearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.widgetId = params['wgid'];
            _this.userId = params['uid'];
        });
        this.widgetService.findWidgetById(this.widgetId).subscribe(function (widget) {
            _this.widget = widget;
        });
    };
    FlickrImageSearchComponent.prototype.searchPhotos = function () {
        var _this = this;
        this.flickrService
            .searchPhotos(this.searchText)
            .subscribe(function (data) {
            console.log(data);
            var val = data._body;
            val = val.replace('jsonFlickrApi(', '');
            val = val.substring(0, val.length - 1);
            val = JSON.parse(val);
            console.log(val);
            _this.photos = val.photos;
            _this.search = true;
        });
    };
    FlickrImageSearchComponent.prototype.selectPhoto = function (photo) {
        var _this = this;
        var url = 'https://farm' + photo.farm + '.staticflickr.com/' + photo.server;
        url += '/' + photo.id + '_' + photo.secret + '_b.jpg';
        this.widget['url'] = url;
        this.widgetService.updateWidget(this.widgetId, this.widget).subscribe(function (res) {
            _this.router.navigate(['../'], { relativeTo: _this.activatedRoute });
        });
    };
    return FlickrImageSearchComponent;
}());
FlickrImageSearchComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-flickr-image-search',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-image/flickr-image-search/flickr-image-search.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-image/flickr-image-search/flickr-image-search.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_flickr_service_client__["a" /* FlickrService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_flickr_service_client__["a" /* FlickrService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__["a" /* WidgetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__["a" /* WidgetService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]) === "function" && _d || Object])
], FlickrImageSearchComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=flickr-image-search.component.js.map

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

module.exports = "<nav class=\"navbar-custom navbar-fixed-top\">\n  <div class=\"row\">\n    <div class=\"col-xs-12\">\n      <a class=\"navbar-brand\" [routerLink]=\"['/user',userId,\n          'website',websiteId,\n          'page',pageId,\n          'widget']\"><span\n        class=\"glyphicon glyphicon-chevron-left pull-left glyph-color\"></span></a>\n      <span class=\"navbar-brand\">\n                <strong>Widget Edit</strong>\n            </span>\n      <a class=\"navbar-brand pull-right\" (click)=\"update()\"><span class=\"glyphicon glyphicon-ok glyph-color\"></span></a>\n    </div>\n  </div>\n</nav>\n\n\n<div class=\"container-fluid custom-center-container top-margin\">\n  <div class=\"row\">\n    <div class=\"col-xs-12\">\n      <form #f=\"ngForm\" action=\"{{baseUrl}}/api/upload\" method=\"post\" enctype=\"multipart/form-data\">\n        <div *ngIf=\"errorFlag\" class=\"alert alert-danger\">{{errorMsg}}</div>\n        <div class=\"form-group\">\n          <label for=\"name\" class=\"c1-text-bold font-little-large c1-color-black\">Name</label>\n          <input type=\"text\" id=\"name\" class=\"form-control\" placeholder=\"Name\" value=\"Sample Image\"\n                 data-toggle=\"tooltip\"\n                 title=\"Enter Widget Name\"  autofocus\n          name=\"name\"\n          ngModel [(ngModel)]=\"widget.name\">\n          <span class=\"help-block\" *ngIf=\"widgetName==undefined && updated\">\n      Please enter widget name!\n    </span>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"text\" class=\"c1-text-bold font-little-large c1-color-black\">Text</label>\n          <input type=\"text\" id=\"text\" class=\"form-control\" placeholder=\"Title\"\n                 data-toggle=\"tooltip\"\n                 title=\"Enter Widget Text\"\n                 value=\"Widget Text Here\"\n                 name=\"text\"\n                 ngModel [(ngModel)]=\"widget.text\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"url\" class=\"c1-text-bold font-little-large c1-color-black\">URL</label>\n          <input type=\"text\" id=\"url\" class=\"form-control\" placeholder=\"URL\"\n                 data-toggle=\"tooltip\"\n                 title=\"Enter Widget URL\"\n                 value=\"https://thumb1.shutterstock.com/display_pic_with_logo/3973673/602824259/stock-vector-presentation-business-infographic-template-with-options-vector-illustration-602824259.jpg\"\n\n                 name=\"url\"\n                 ngModel [(ngModel)]=\"widget.url\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"width\" class=\"c1-text-bold font-little-large c1-color-black\">Width</label>\n          <input type=\"text\" id=\"width\" class=\"form-control\" placeholder=\" (e.g. 100%) \"\n                  data-toggle=\"tooltip\"\n                  title=\"Enter Widget width\" required\n                  name=\"width\"\n                  ngModel [(ngModel)]=\"widget.width\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"upload\" class=\"c1-text-bold font-little-large c1-color-black\">Upload</label>\n          <input type=\"file\" id=\"upload\" class=\"form-control\"\n                 data-toggle=\"tooltip\"\n                 title=\"Select Widget image\"\n                 name=\"myFile\"\n                 >\n        </div>\n        <input  name=\"widgetId\" value=\"{{widgetId}}\"   style=\"display: none\"/>\n        <input  name=\"websiteId\" value=\"{{websiteId}}\"   style=\"display: none\"/>\n        <input  name=\"pageId\" value=\"{{pageId}}\"   style=\"display: none\"/>\n        <input  name=\"userId\" value=\"{{userId}}\"   style=\"display: none\"/>\n\n        <div class=\"form-group\">\n          <button class=\"btn btn-block btn-lg btn-success\" type=\"submit\">Upload</button>\n        </div>\n        <div class=\"form-group\">\n          <button class=\"btn btn-block btn-lg btn-info\" (click)=\"search()\">Search on Flickr</button>\n        </div>\n        <div class=\"form-group\">\n          <a (click)=\"delete()\"\n             class=\"btn btn-lg btn-block btn-danger\">Delete</a>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n<nav class=\"navbar-custom navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n    <ul class=\"nav navbar-nav navbar-right\">\n      <li><a [routerLink]=\"['/user',userId]\"><span class=\"glyphicon glyphicon-user pull-right glyph-color\"></span></a></li>\n    </ul>\n\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-image/widget-image.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetImageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
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
    function WidgetImageComponent(widgetService, activatedRoute, router) {
        this.widgetService = widgetService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].baseUrl;
    }
    WidgetImageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.widgetId = params['wgid'];
            _this.pageId = params['pid'];
            _this.websiteId = params['wid'];
            _this.userId = params['uid'];
        });
        this.widgetService.findWidgetById(this.widgetId).subscribe(function (widget) {
            _this.widget = widget;
            _this.widgetName = _this.widget['name'];
            _this.widgetText = _this.widget['text'];
            _this.widgetUrl = _this.widget['url'];
            _this.widgetWidth = _this.widget['width'];
        });
    };
    WidgetImageComponent.prototype.update = function () {
        var _this = this;
        this.updated = true;
        this.widget['name'] = this.imageForm.value.name;
        this.widget['text'] = this.imageForm.value.text;
        this.widget['width'] = this.imageForm.value.width;
        this.widget['url'] = this.imageForm.value.url;
        if (this.widget['name'] === '') {
            this.errorFlag = true;
            this.errorMsg = 'Widget name is required';
        }
        else {
            this.widgetService.updateWidget(this.widgetId, this.widget)
                .subscribe(function (data) {
                _this.router.navigate(['../'], { relativeTo: _this.activatedRoute });
            });
        }
    };
    WidgetImageComponent.prototype.delete = function () {
        var _this = this;
        this.widgetService.deleteWidget(this.widgetId).subscribe(function (data) {
            _this.router.navigate(['../'], { relativeTo: _this.activatedRoute });
        });
    };
    WidgetImageComponent.prototype.search = function () {
        console.log('Inside search');
        this.router.navigate(['./search'], { relativeTo: this.activatedRoute });
    };
    return WidgetImageComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('f'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* NgForm */]) === "function" && _a || Object)
], WidgetImageComponent.prototype, "imageForm", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('upload'),
    __metadata("design:type", Object)
], WidgetImageComponent.prototype, "upload", void 0);
WidgetImageComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-widget-image',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-image/widget-image.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-image/widget-image.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__["a" /* WidgetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__["a" /* WidgetService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _d || Object])
], WidgetImageComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=widget-image.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-text/widget-text.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-text/widget-text.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar-custom navbar-fixed-top\">\n  <div class=\"row\">\n    <div class=\"col-xs-12\">\n      <a class=\"navbar-brand\" [routerLink]=\"['../']\"><span\n        class=\"glyphicon glyphicon-chevron-left pull-left glyph-color\"></span></a>\n      <span class=\"navbar-brand\">\n                <strong>Widget Edit</strong>\n            </span>\n      <a class=\"navbar-brand pull-right\" (click)=\"update()\"><span class=\"glyphicon glyphicon-ok glyph-color\"></span></a>\n    </div>\n  </div>\n</nav>\n\n<div class=\"container top-margin\">\n\n  <form #f=\"ngForm\">\n    <div class=\"form-group\">\n          <label for=\"title\">Text</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"widgetText\" name=\"widgetText\" id=\"title\" placeholder=\"Text\">\n        </div>\n\n      <div class=\"form-group\">\n        <label for=\"name\">Name</label>\n        <input type=\"text\" class=\"form-control\" id=\"name\"  [(ngModel)]=\"widgetName\" name=\"widgetName\"  placeholder=\"Name\">\n        <span class=\"help-block\" *ngIf=\"widgetName==undefined && updated\">\n      Please enter widget name!\n    </span>\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"rows\">Rows</label>\n        <input type=\"number\" class=\"form-control\" [(ngModel)]=\"rows\" name=\"widgetRows\" id=\"rows\" min=\"0\"\n                           placeholder=\"Rows\"/>\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"placeholder\">Placeholder</label>\n        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"placeholder\" name=\"placeholder\" id=\"placeholder\"\n                           placeholder=\"placeholder\"/>\n      </div>\n      <div class=\"input-group\">\n    \t<input type=\"text\"\n              \t    readonly\n              \t    value=\"Formatted\"\n              \t    class=\"form-control\"/>\n    \t<span class=\"input-group-addon\">\n\t <input [(ngModel)]=\"formatted\" name=\"formatted\"\n           \t        type=\"checkbox\" class=\"bottom-buffer\"/>\n\t</span>\n      </div>\n\n\n      <a class=\"btn btn-danger btn-block\"\n              (click)=\"delete()\" >Delete</a>\n\n  </form>\n    </div>\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-text/widget-text.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetTextComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WidgetTextComponent = (function () {
    function WidgetTextComponent(widgetService, router, activatedRoute) {
        this.widgetService = widgetService;
        this.router = router;
        this.activatedRoute = activatedRoute;
    }
    WidgetTextComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) { _this.widgetId = params['wgid']; });
        this.widgetService.findWidgetById(this.widgetId)
            .subscribe(function (widget) {
            _this.widget = widget;
            _this.widgetName = _this.widget['name'];
            _this.widgetText = _this.widget['text'];
            _this.rows = _this.widget['rows'];
            _this.placeholder = _this.widget['placeholder'];
            _this.formatted = _this.widget['formatted'];
        });
    };
    WidgetTextComponent.prototype.update = function () {
        var _this = this;
        this.updated = true;
        this.widget['name'] = this.widgetName;
        this.widget['text'] = this.widgetText;
        this.widget['rows'] = this.rows;
        this.widget['placeholder'] = this.placeholder;
        this.widget['formatted'] = this.formatted;
        // console.log('Widget at 44 is ' + JSON.stringify(this.widget));
        if (this.widget['name'] === '') {
            this.errorFlag = true;
            this.errorMsg = 'Widget name is required';
        }
        else {
            this.widgetService.updateWidget(this.widgetId, this.widget)
                .subscribe(function (widget) {
                _this.router.navigate(['../'], { relativeTo: _this.activatedRoute });
            });
        }
    };
    WidgetTextComponent.prototype.delete = function () {
        var _this = this;
        this.widgetService.deleteWidget(this.widgetId).subscribe(function (res) {
            _this.router.navigate(['../'], { relativeTo: _this.activatedRoute });
        });
    };
    return WidgetTextComponent;
}());
WidgetTextComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-widget-text',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-text/widget-text.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-text/widget-text.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__["a" /* WidgetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__["a" /* WidgetService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object])
], WidgetTextComponent);

var _a, _b, _c;
//# sourceMappingURL=widget-text.component.js.map

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

module.exports = "<nav class=\"navbar-custom navbar-fixed-top\">\n  <div class=\"row\">\n    <div class=\"col-xs-12\">\n      <a class=\"navbar-brand\" [routerLink]=\"['/user',userId,\n          'website',websiteId,\n          'page',pageId,\n          'widget']\"><span\n        class=\"glyphicon glyphicon-chevron-left pull-left glyph-color\"></span></a>\n      <span class=\"navbar-brand\">\n                <strong>Widget Edit</strong>\n            </span>\n      <a class=\"navbar-brand pull-right\" (click)=\"update()\"><span class=\"glyphicon glyphicon-ok glyph-color\"></span></a>\n    </div>\n  </div>\n</nav>\n\n\n<div class=\"container-fluid top-margin\">\n  <div class=\"row\">\n    <div class=\"col-xs-12\">\n      <form #f=\"ngForm\">\n        <div class=\"form-group\">\n          <label for=\"name\" >\n            Name\n          </label>\n          <input\n            type=\"text\"\n            id=\"name\"\n            class=\"form-control\"\n            placeholder=\"Name\"\n            [(ngModel)]=\"widget.name\"\n            name=\"name\">\n          <span class=\"help-block\" *ngIf=\"widgetName==undefined && updated\">\n      Please enter widget name!\n    </span>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"text\"\n                 class=\"c1-text-bold\">\n            Text\n          </label>\n          <input\n            type=\"text\"\n            id=\"text\"\n            class=\"form-control\"\n            placeholder=\"Title\"\n            data-toggle=\"tooltip\"\n            title=\"Enter Widget Text\"\n            name=\"text\"\n            [(ngModel)]=\"widget.text\"  required>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"url\" class=\"c1-text-bold\">\n            URL\n          </label>\n          <input type=\"text\"\n                 id=\"url\"\n                 class=\"form-control\"\n                 placeholder=\"URL\"\n                 data-toggle=\"tooltip\"\n                 title=\"Enter Widget URL\"\n                 [(ngModel)]=\"widget.url\"\n                 name=\"url\"\n                 required>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"width\"\n                 class=\"c1-text-bold\">\n            Width\n          </label>\n          <input type=\"text\" id=\"width\"\n                  class=\"form-control\"\n                  data-toggle=\"tooltip\"\n                  name=\"width\" required\n                 [(ngModel)]=\"widget.width\">\n\n\n        </div>\n        <div class=\"form-group\">\n          <a (click)=\"delete()\"\n             class=\"btn btn-lg btn-block btn-danger\"\n             type=\"submit\">\n            Delete\n          </a>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n<nav class=\"navbar navbar-custom navbar-fixed-bottom\">\n  <div class=\"container-fuild\">\n    <a [routerLink]=\"['/user',userId]\"\n       class=\"navbar-link navbar-text pull-right c1-color-black c1-text-bold cl-icon-padding\">\n            <span class=\"glyphicon glyphicon-user glyph-color\">\n            </span>\n    </a>\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetYoutubeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
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




var WidgetYoutubeComponent = (function () {
    function WidgetYoutubeComponent(widgetService, activatedRoute, router) {
        this.widgetService = widgetService;
        this.activatedRoute = activatedRoute;
        this.router = router;
    }
    WidgetYoutubeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.userId = params['uid'];
            _this.pageId = params['pid'];
            _this.websiteId = params['wid'];
            _this.widgetId = params['wgid'];
        });
        this.widgetService.findWidgetById(this.widgetId).subscribe(function (widget) {
            _this.widget = widget;
            _this.widgetName = _this.widget['name'];
            _this.widgetTitle = _this.widget['title'];
            _this.widgetUrl = _this.widget['url'];
            _this.widgetWidth = _this.widget['width'];
        });
    };
    WidgetYoutubeComponent.prototype.update = function () {
        var _this = this;
        this.updated = true;
        this.widget['name'] = this.youtubeForm.value.name;
        this.widget['title'] = this.youtubeForm.value.title;
        this.widget['width'] = this.youtubeForm.value.width;
        this.widget['url'] = this.youtubeForm.value.url;
        if (this.widget['name'] === '') {
            this.errorFlag = true;
            this.errorMsg = 'Widget name is required';
        }
        else {
            this.widgetService.updateWidget(this.widgetId, this.widget)
                .subscribe(function (data) {
                _this.router.navigate(['../'], { relativeTo: _this.activatedRoute });
            });
        }
    };
    WidgetYoutubeComponent.prototype.delete = function () {
        var _this = this;
        this.widgetService.deleteWidget(this.widgetId).subscribe(function (data) {
            _this.router.navigate(['../'], { relativeTo: _this.activatedRoute });
        });
    };
    return WidgetYoutubeComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('f'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* NgForm */]) === "function" && _a || Object)
], WidgetYoutubeComponent.prototype, "youtubeForm", void 0);
WidgetYoutubeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-widget-youtube',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__["a" /* WidgetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__["a" /* WidgetService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _d || Object])
], WidgetYoutubeComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=widget-youtube.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-list/widget-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".youtube-widget {\n  position: relative;\n  padding-bottom: 56.25%; /* 16:9 */\n  height: 0;\n}\n.youtube-widget iframe {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-list/widget-list.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-fixed-top navbar-custom\">\n  <div class=\"container-fluid\">\n    <a class=\"navbar-brand\" [routerLink]=\"['/user/', userId, 'website', websiteId, 'page']\"><span\n      class=\"glyphicon glyphicon-chevron-left pull-left glyph-color\"></span></a>\n    <span class=\"navbar-brand\">\n              Widgets\n            </span>\n    <a class=\"navbar-brand pull-right\" [routerLink]=\"['/user/', userId, 'website', websiteId, 'page', pageId, 'widget', 'new']\"><span\n      class=\"glyphicon glyphicon-plus glyph-color\"></span></a>\n\n\n  </div>\n</nav>\n\n\n<div class=\"container-fluid top-margin\">\n  <div class=\"row\">\n  <ul class=\"list-group\" appSortable (newIndexes)=\"sortWidgets($event)\">\n  <li class=\"list-group-item\" *ngFor=\"let widget of widgets\">\n\n    <div [ngSwitch]=\"widget.widgetType\">\n<div class=\"row custom-widget top-margin bottom-margin\" *ngSwitchCase=\"'HEADING'\" [ngSwitch]=\"widget.size\">\n  <div class=\"col-xs-12\" *ngSwitchCase=\"'1'\">\n    <div class=\"custom-widget-toolbar custom-widget-toolbar-ontop\">\n      <a class=\"colored-link\" href=\"#\"><span\n        class=\"glyphicon glyphicon-menu-hamburger pull-right glyph-color\"></span></a>\n      <a class=\"glyph-color\" [routerLink]=\"['/user/', userId, 'website', websiteId, 'page', pageId, 'widget', widget._id]\">\n      <span class= \" glyphicon glyphicon-cog pull-right\"></span></a>\n    </div>\n    <h1>{{widget.text}}</h1>\n  </div>\n\n  <div class=\"col-xs-12\" *ngSwitchCase=\"'2'\">\n    <div class=\"custom-widget-toolbar custom-widget-toolbar-ontop\">\n      <a class=\"colored-link\" href=\"#\"><span\n        class=\"glyphicon glyphicon-menu-hamburger pull-right glyph-color\"></span></a>\n      <a class=\"glyph-color\" [routerLink]=\"['/user/', userId, 'website', websiteId, 'page', pageId, 'widget', widget._id]\">\n        <span class= \" glyphicon glyphicon-cog pull-right\"></span></a>\n    </div>\n    <h2>{{widget.text}}</h2>\n  </div>\n\n  <div class=\"col-xs-12\" *ngSwitchCase=\"'3'\">\n    <div class=\"custom-widget-toolbar custom-widget-toolbar-ontop\">\n      <a class=\"colored-link\" href=\"#\"><span\n        class=\"glyphicon glyphicon-menu-hamburger pull-right glyph-color\"></span></a>\n      <a class=\"glyph-color\" [routerLink]=\"['/user/', userId, 'website', websiteId, 'page', pageId, 'widget', widget._id]\">\n        <span class= \" glyphicon glyphicon-cog pull-right\"></span></a>\n    </div>\n    <h3>{{widget.text}}</h3>\n  </div>\n\n  <div class=\"col-xs-12\" *ngSwitchCase=\"'4'\">\n    <div class=\"custom-widget-toolbar custom-widget-toolbar-ontop\">\n      <a class=\"colored-link\" href=\"#\"><span\n        class=\"glyphicon glyphicon-menu-hamburger pull-right glyph-color\"></span></a>\n      <a class=\"glyph-color\" [routerLink]=\"['/user/', userId, 'website', websiteId, 'page', pageId, 'widget', widget._id]\">\n        <span class= \" glyphicon glyphicon-cog pull-right\"></span></a>\n    </div>\n    <h4>{{widget.text}}</h4>\n  </div>\n\n  <div class=\"col-xs-12\" *ngSwitchCase=\"'5'\">\n    <div class=\"custom-widget-toolbar custom-widget-toolbar-ontop\">\n      <a class=\"colored-link\" href=\"#\"><span\n        class=\"glyphicon glyphicon-menu-hamburger pull-right glyph-color\"></span></a>\n      <a class=\"glyph-color\" [routerLink]=\"['/user/', userId, 'website', websiteId, 'page', pageId, 'widget', widget._id]\">\n        <span class= \" glyphicon glyphicon-cog pull-right\"></span></a>\n    </div>\n    <h5>{{widget.text}}</h5>\n  </div>\n\n  <div class=\"col-xs-12\" *ngSwitchCase=\"'6'\">\n    <div class=\"custom-widget-toolbar custom-widget-toolbar-ontop\">\n      <a class=\"colored-link\" href=\"#\"><span\n        class=\"glyphicon glyphicon-menu-hamburger pull-right glyph-color\"></span></a>\n      <a class=\"glyph-color\" [routerLink]=\"['/user/', userId, 'website', websiteId, 'page', pageId, 'widget', widget._id]\">\n        <span class= \" glyphicon glyphicon-cog pull-right\"></span></a>\n    </div>\n    <h6>{{widget.text}}</h6>\n  </div>\n</div>\n\n\n      <div class=\"row custom-widget top-margin bottom-margin\" *ngSwitchCase=\"'IMAGE'\">\n        <div class=\"col-xs-12\">\n          <div class=\"custom-widget-toolbar custom-widget-toolbar-ontop\">\n            <a class=\"colored-link\" href=\"#\"><span\n              class=\"glyphicon glyphicon-menu-hamburger pull-right glyph-color\"></span></a>\n            <a class=\"glyph-color\" [routerLink]=\"['/user/', userId, 'website', websiteId, 'page', pageId, 'widget', widget._id]\"><span\n              class=\"glyphicon glyphicon-cog pull-right\"></span></a>\n          </div>\n          <img [src]=\"widget.url\" [style.width]=\"widget.width\">\n        </div>\n      </div>\n\n      <div class=\"row custom-widget top-margin bottom-margin\" *ngSwitchCase=\"'HTML'\">\n        <div class=\"col-xs-12\">\n          <div class=\"custom-widget-toolbar custom-widget-toolbar-ontop\">\n            <a class=\"colored-link\" href=\"#\"><span\n              class=\"glyphicon glyphicon-menu-hamburger pull-right glyph-color\"></span></a>\n            <a class=\"glyph-color\" [routerLink]=\"['/user/', userId, 'website', websiteId, 'page', pageId, 'widget', widget._id]\"><span\n              class=\"glyphicon glyphicon-cog pull-right\"></span></a>\n          </div>\n          <div [innerHTML]=\"widget.text\"></div>\n        </div>\n      </div>\n\n      <div class=\"row custom-widget top-margin bottom-margin\" *ngSwitchCase=\"'TEXT'\">\n        <div class=\"col-xs-12\">\n          <div class=\"custom-widget-toolbar custom-widget-toolbar-ontop\">\n            <a class=\"colored-link\" href=\"#\"><span\n              class=\"glyphicon glyphicon-menu-hamburger pull-right glyph-color\"></span></a>\n            <a class=\"glyph-color\" [routerLink]=\"['/user/', userId, 'website', websiteId, 'page', pageId, 'widget', widget._id]\"><span\n              class=\"glyphicon glyphicon-cog pull-right\"></span></a>\n          </div>\n          <div *ngIf=\"widget.formatted\">\n            <quill-editor [(ngModel)]=\"widget.text\" name=\"text\"></quill-editor>\n          </div>\n\n          <input *ngIf=\"!widget.formatted && (!widget.rows || widget.rows===1)\"\n                 placeholder=\"{{widget.placeholder}}\" class=\"form-control\"/>\n\n          <textarea *ngIf=\"!widget.formatted && (widget.rows > 1)\"\n                    rows=\"{{widget.rows}}\" placeholder=\"{{widget.placeholder}}\"\n                    class=\"form-control\">{{widget.text}}</textarea>\n\n        </div>\n      </div>\n\n\n      <div class=\"row custom-widget top-margin bottom-margin\" *ngSwitchCase=\"'YOUTUBE'\">\n        <div class=\"col-xs-12\">\n          <div class=\"custom-widget-toolbar custom-widget-toolbar-ontop\">\n            <a class=\"colored-link\" href=\"#\"><span\n              class=\"glyphicon glyphicon-menu-hamburger pull-right glyph-color\"></span></a>\n            <a class=\"glyph-color\" [routerLink]=\"['/user/', userId, 'website', websiteId, 'page', pageId, 'widget', widget._id]\"><span\n              class=\"glyphicon glyphicon-cog pull-right\"></span></a>\n          </div>\n          <div class=\"custom-responsive-video youtube-widget\">\n          <iframe  [src]=\"widget.url\" [style.width]=\"widget.width\" height=\"315\"\n                   frameborder=\"0\" allowfullscreen></iframe>\n          </div>\n        </div>\n      </div>\n    </div>\n  </li>\n  </ul>\n  </div>\n</div>\n<ul class=\"top-margin\">\n<li class=\"colored-link list-unstyled\" *ngIf=\"widgets.length == 0\">\n  <i>No Widgets Found</i>\n  <hr>\n  <span class=\"glyphicon glyphicon-plus glyph-color left-margin\"></span>\n  <a class=\"colored-link\" [routerLink]=\"['new']\">\n    Create New Widget\n  </a>\n\n</li>\n</ul>\n\n<nav class=\"navbar navbar-fixed-bottom navbar-custom\">\n  <div class=\"container-fluid\">\n    <a class=\"navbar-link navbar-text c1-color-black c1-text-bold cl-icon-padding\" href=\"#\"><span class=\"glyphicon glyphicon-play glyph-color\"></span></a>\n    <a class=\"navbar-link navbar-text c1-color-black c1-text-bold cl-icon-padding\" href=\"#\"><span class=\"glyphicon glyphicon-eye-open glyph-color\"></span></a>\n    <a class=\"navbar-link navbar-text pull-right c1-color-black c1-text-bold cl-icon-padding\" [routerLink]=\"['/user', userId]\"><span class=\"glyphicon glyphicon-user glyph-color\"></span></a>\n  </div>\n</nav>\n"

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
        this.widgets = [];
        this.widgetType = __WEBPACK_IMPORTED_MODULE_3__model_widgettype_model__["a" /* WidgetType */];
    }
    WidgetListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.pageId = params['pid'];
            _this.userId = params['uid'];
            _this.websiteId = params['wid'];
        });
        this.titleService.setTitle('Widget List');
        this.widgetService.findWidgetsByPageId(this.pageId)
            .subscribe(function (widgets) {
            _this.widgets = widgets;
            for (var x = 0; x < _this.widgets.length; x++) {
                // For youtube widgets, bypass security for URL
                _this.widgets[x]['url'] = _this.sanitizer.bypassSecurityTrustResourceUrl(_this.widgets[x]['url']);
            }
        });
    };
    WidgetListComponent.prototype.sortWidgets = function (event) {
        var _this = this;
        console.log('Initial and Final: ' + event['initial'] + ' ' + event['final']);
        this.widgetService.sortWidgets(this.pageId, this.widgets[event['initial']], event['initial'], event['final'])
            .subscribe(function (widgets) {
            _this.updated = true;
        }, function (err) {
            console.log('Error reordering widgets' + err);
        });
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

/***/ "../../../../../src/app/services/authenticate.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Authenticate; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Authenticate = (function () {
    function Authenticate(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    Authenticate.prototype.canActivate = function () {
        return this.userService.loggedIn();
    };
    return Authenticate;
}());
Authenticate = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__user_service_client__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], Authenticate);

var _a, _b;
//# sourceMappingURL=authenticate.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/flickr.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlickrService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FlickrService = (function () {
    function FlickrService(_http) {
        this._http = _http;
        this.key = 'f7a247b059585168ece267ff9e43eeab';
        this.secret = '86e384a7f7164b57';
        this.urlBase = 'https://api.flickr.com/services/rest/?method=flickr.photos.search&format=json&api_key=API_KEY&text=TEXT';
    }
    FlickrService.prototype.searchPhotos = function (searchTerm) {
        var url = this.urlBase
            .replace('API_KEY', this.key)
            .replace('TEXT', searchTerm);
        console.log('URL is ' + url);
        return this._http.get(url);
    };
    return FlickrService;
}());
FlickrService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], FlickrService);

var _a;
//# sourceMappingURL=flickr.service.client.js.map

/***/ }),

/***/ "../../../../../src/app/services/page.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageService; });
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




var PageService = (function () {
    function PageService(_http) {
        this._http = _http;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].baseUrl;
    }
    PageService.prototype.createPage = function (websiteId, page) {
        return this._http.post(this.baseUrl + '/api/website/' + websiteId + '/page', { page: page })
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    PageService.prototype.findPageById = function (pageId) {
        return this._http.get(this.baseUrl + '/api/page/' + pageId)
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    PageService.prototype.findPageByWebsiteId = function (websiteId) {
        return this._http.get(this.baseUrl + '/api/website/' + websiteId + '/page')
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    PageService.prototype.updatePage = function (pageId, page) {
        return this._http.put(this.baseUrl + '/api/page/' + pageId, { page: page })
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    PageService.prototype.deletePage = function (pageId) {
        return this._http.delete(this.baseUrl + '/api/page/' + pageId)
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    return PageService;
}());
PageService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], PageService);

var _a;
//# sourceMappingURL=page.service.client.js.map

/***/ }),

/***/ "../../../../../src/app/services/shared.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedService; });
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

var SharedService = (function () {
    function SharedService() {
        this.user = '';
    }
    return SharedService;
}());
SharedService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], SharedService);

//# sourceMappingURL=shared.service.js.map

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_service__ = __webpack_require__("../../../../../src/app/services/shared.service.ts");
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
    function UserService(_http, sharedService, router) {
        this._http = _http;
        this.sharedService = sharedService;
        this.router = router;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].baseUrl;
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]();
    }
    UserService.prototype.login = function (username, password) {
        this.options.withCredentials = true;
        var body = {
            username: username,
            password: password
        };
        return this._http.post(this.baseUrl + '/api/login', body, this.options)
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    UserService.prototype.logout = function () {
        this.options.withCredentials = true;
        return this._http.post(this.baseUrl + '/api/logout', '', this.options)
            .map(function (res) {
            var data = res;
        });
    };
    UserService.prototype.register = function (username, password) {
        this.options.withCredentials = true;
        var user = {
            username: username,
            password: password
        };
        return this._http.post(this.baseUrl + '/api/register', user, this.options)
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    UserService.prototype.loggedIn = function () {
        var _this = this;
        this.options.withCredentials = true;
        return this._http.post(this.baseUrl + '/api/loggedIn', '', this.options)
            .map(function (res) {
            var user = res.json();
            if (user !== 0) {
                _this.sharedService.user = user; // setting user so as to share with all components
                return true;
            }
            else {
                _this.router.navigate(['/login']);
                return false;
            }
        });
    };
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
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__shared_service__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__shared_service__["a" /* SharedService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === "function" && _c || Object])
], UserService);

var _a, _b, _c;
//# sourceMappingURL=user.service.client.js.map

/***/ }),

/***/ "../../../../../src/app/services/website.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebsiteService; });
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




var WebsiteService = (function () {
    function WebsiteService(_http) {
        this._http = _http;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].baseUrl;
    }
    WebsiteService.prototype.createWebsite = function (userId, website) {
        console.log('Website passed here is ' + JSON.stringify(website));
        return this._http.post(this.baseUrl + '/api/user/' + userId + '/website', { website: website })
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    WebsiteService.prototype.findWebsiteByUser = function (userId) {
        return this._http.get(this.baseUrl + '/api/user/' + userId + '/website')
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    WebsiteService.prototype.findWebsiteById = function (websiteId) {
        return this._http.get(this.baseUrl + '/api/website/' + websiteId)
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    WebsiteService.prototype.updateWebsite = function (websiteId, website) {
        return this._http.put(this.baseUrl + '/api/website/' + websiteId, { website: website });
    };
    WebsiteService.prototype.deleteWebsite = function (websiteId) {
        return this._http.delete(this.baseUrl + '/api/website/' + websiteId);
    };
    return WebsiteService;
}());
WebsiteService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], WebsiteService);

var _a;
//# sourceMappingURL=website.service.client.js.map

/***/ }),

/***/ "../../../../../src/app/services/widget.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetService; });
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




var WidgetService = (function () {
    function WidgetService(_http) {
        this._http = _http;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].baseUrl;
    }
    WidgetService.prototype.createWidget = function (pageId, widget) {
        return this._http.post(this.baseUrl + '/api/page/' + pageId + '/widget', { widget: widget })
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    WidgetService.prototype.findWidgetsByPageId = function (pageId) {
        return this._http.get(this.baseUrl + '/api/page/' + pageId + '/widget')
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    WidgetService.prototype.findWidgetById = function (widgetId) {
        return this._http.get(this.baseUrl + '/api/widget/' + widgetId)
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    WidgetService.prototype.updateWidget = function (widgetId, widget) {
        return this._http.put(this.baseUrl + '/api/widget/' + widgetId, { widget: widget })
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    WidgetService.prototype.deleteWidget = function (widgetId) {
        return this._http.delete(this.baseUrl + '/api/widget/' + widgetId)
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    WidgetService.prototype.sortWidgets = function (pageId, widget, initial, final) {
        return this._http.put(this.baseUrl + '/api/page/' + pageId + '/widget?initial=' + initial + '&final=' + final, { widget: widget })
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    return WidgetService;
}());
WidgetService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], WidgetService);

var _a;
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