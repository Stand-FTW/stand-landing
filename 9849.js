(self["webpackChunkcom_standftw_landingpage"] = self["webpackChunkcom_standftw_landingpage"] || []).push([[9849],{

/***/ 4584:
/*!*******************************************************************!*\
  !*** ./src/app/pages/applications/applications-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApplicationsPageRoutingModule": () => (/* binding */ ApplicationsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 5353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9535);
/* harmony import */ var _applications_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./applications.page */ 4037);




const routes = [
    {
        path: '',
        component: _applications_page__WEBPACK_IMPORTED_MODULE_0__.ApplicationsPage
    }
];
let ApplicationsPageRoutingModule = class ApplicationsPageRoutingModule {
};
ApplicationsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ApplicationsPageRoutingModule);



/***/ }),

/***/ 9849:
/*!***********************************************************!*\
  !*** ./src/app/pages/applications/applications.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApplicationsPageModule": () => (/* binding */ ApplicationsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 5353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 4595);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngx-translate/core */ 4236);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/button */ 3103);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/ripple */ 4796);
/* harmony import */ var primeng_galleria__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/galleria */ 6219);
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/dialog */ 7914);
/* harmony import */ var primeng_image__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/image */ 3170);
/* harmony import */ var _applications_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./applications-routing.module */ 4584);
/* harmony import */ var _applications_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./applications.page */ 4037);
/* harmony import */ var _shared_pipes_pipe_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/pipes/pipe.module */ 9502);














let ApplicationsPageModule = class ApplicationsPageModule {
};
ApplicationsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            primeng_ripple__WEBPACK_IMPORTED_MODULE_8__.RippleModule,
            primeng_galleria__WEBPACK_IMPORTED_MODULE_9__.GalleriaModule,
            primeng_image__WEBPACK_IMPORTED_MODULE_10__.ImageModule,
            primeng_button__WEBPACK_IMPORTED_MODULE_11__.ButtonModule,
            primeng_dialog__WEBPACK_IMPORTED_MODULE_12__.DialogModule,
            _applications_routing_module__WEBPACK_IMPORTED_MODULE_0__.ApplicationsPageRoutingModule,
            _shared_pipes_pipe_module__WEBPACK_IMPORTED_MODULE_2__.PipeModule,
        ],
        declarations: [
            _applications_page__WEBPACK_IMPORTED_MODULE_1__.ApplicationsPage,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__.TranslatePipe,
        ]
    })
], ApplicationsPageModule);



/***/ }),

/***/ 4037:
/*!*********************************************************!*\
  !*** ./src/app/pages/applications/applications.page.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApplicationsPage": () => (/* binding */ ApplicationsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 5353);
/* harmony import */ var _raw_loader_applications_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./applications.page.html */ 4232);
/* harmony import */ var _applications_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./applications.page.scss */ 1694);
/* harmony import */ var _shared_services_mocks_applications_applications_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../shared/services/mocks/applications/applications.service */ 3121);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2741);





let ApplicationsPage = class ApplicationsPage {
    constructor(applicationsService) {
        this.applicationsService = applicationsService;
        this.appName = '';
        this.showDialog = false;
    }
    ngOnInit() {
        this.loadApps();
    }
    loadApps() {
        this.applicationsService.list()
            .subscribe(data => {
            this.apps = data;
        });
    }
    showImgs(app) {
        this.appImages = app.images;
        this.appName = app.title;
        this.showDialog = true;
    }
    closeDialog() {
        this.appImages = undefined;
        this.appName = undefined;
        this.showDialog = false;
    }
};
ApplicationsPage.ctorParameters = () => [
    { type: _shared_services_mocks_applications_applications_service__WEBPACK_IMPORTED_MODULE_2__.ApplicationsService }
];
ApplicationsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-applications',
        template: _raw_loader_applications_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_applications_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ApplicationsPage);



/***/ }),

/***/ 3121:
/*!****************************************************************************!*\
  !*** ./src/app/shared/services/mocks/applications/applications.service.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApplicationsService": () => (/* binding */ ApplicationsService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 5353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 1887);
/* harmony import */ var _config_api_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../config/api.config */ 5848);




let ApplicationsService = class ApplicationsService {
    constructor(http) {
        this.http = http;
    }
    list() {
        return this.http.get(`${_config_api_config__WEBPACK_IMPORTED_MODULE_0__.ASSETS_CONFIG.baseURL}/applications.json`);
    }
};
ApplicationsService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient }
];
ApplicationsService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], ApplicationsService);



/***/ }),

/***/ 1694:
/*!***********************************************************!*\
  !*** ./src/app/pages/applications/applications.page.scss ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBsaWNhdGlvbnMucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ 4232:
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/applications/applications.page.html ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>{{ 'app.menu-route-apps' | translate }}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content appScrollTheme>\n\n  <div class=\"surface-ground px-4 py-8 md:px-6 lg:px-8\">\n    <div class=\"text-center text-900 text-5xl font-bold mb-5\">{{ 'application.main-title' | translate }}</div>\n    <div class=\"grid grid-nogutter\">\n      <div *ngFor=\"let a of apps\" class=\"col-12 lg:col-4 p-3\">\n        <div class=\"p-3 shadow-2 border-round surface-card\">\n          <div class=\"flex justify-content-between text-500\">\n            <span>{{ a.title | translate }}</span>\n          </div>\n          <p class=\"line-height-3 mt-3  text-900 font-medium text-xl\">\n            {{ a.description | translate }}\n          </p>\n          <div class=\"line-height-3 mt-3 mb-7 text-900 font-medium text-lg\">\n            <span class=\"text-yellow-800\">{{ 'application.function-title' | translate }}: </span>\n            <span>\n              {{ a.function | translate }}\n            </span>\n          </div>\n          <span *ngFor=\"let t of a.techs\" class=\" font-medium py-1 px-3 mr-3 mt-2 inline-block\"\n            style=\"border-radius: 30px;\" [ngClass]=\"{\n            'green' : 'text-green-500 bg-green-100', \n          'blue' : 'text-blue-500 bg-blue-100', \n          'red' : 'text-pink-500 bg-pink-100', \n          'orange' : 'text-orange-500 bg-orange-100'\n        }[t.color]\">{{\n            t.name | translate }}</span>\n          <div *ngIf=\"a.cover\">\n            <img [src]=\"a.cover\" alt=\"Image\" (click)=\"showImgs(a)\"\n              class=\"block w-full mt-5 border-top-1 pt-3 cursor-pointer\">\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n\n  <p-dialog [(visible)]=\"showDialog\" appendTo=\"body\" [modal]=\"true\" [draggable]=\"false\"\n   [style]=\"{width: '100%', height: '100%'}\" (onHide)=\"closeDialog()\">\n    <ng-template pTemplate=\"header\">\n      <div class=\"flex align-items-center\">\n        <div class=\"text-900 font-medium mb-3 text-xl\">{{ appName | translate }}</div>\n      </div>\n    </ng-template>\n    <p-galleria [(value)]=\"appImages\" \n        [showThumbnails]=\"false\" [showIndicators]=\"true\">\n        <ng-template pTemplate=\"item\" let-item>\n          <div class=\"justify-content-center overflow-hidden text-center\">\n            <p-image style=\"margin: auto;\" [src]=\"item\" class=\" block\" \n             [preview]=\"true\" width=\"70%\" height=\"70%\"></p-image>\n          </div>\n        </ng-template>\n      </p-galleria>\n  </p-dialog>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=9849.js.map