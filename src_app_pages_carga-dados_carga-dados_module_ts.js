"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_carga-dados_carga-dados_module_ts"],{

/***/ 30900:
/*!*****************************************************************!*\
  !*** ./src/app/pages/carga-dados/carga-dados-routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CargaDadosPageRoutingModule": () => (/* binding */ CargaDadosPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _carga_dados_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./carga-dados.page */ 30542);




const routes = [
    {
        path: '',
        component: _carga_dados_page__WEBPACK_IMPORTED_MODULE_0__.CargaDadosPage
    }
];
let CargaDadosPageRoutingModule = class CargaDadosPageRoutingModule {
};
CargaDadosPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CargaDadosPageRoutingModule);



/***/ }),

/***/ 92446:
/*!*********************************************************!*\
  !*** ./src/app/pages/carga-dados/carga-dados.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CargaDadosPageModule": () => (/* binding */ CargaDadosPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _carga_dados_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./carga-dados-routing.module */ 30900);
/* harmony import */ var _carga_dados_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./carga-dados.page */ 30542);
/* harmony import */ var _shared_directive_directives_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../shared/directive/directives.module */ 9406);








let CargaDadosPageModule = class CargaDadosPageModule {
};
CargaDadosPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _carga_dados_routing_module__WEBPACK_IMPORTED_MODULE_0__.CargaDadosPageRoutingModule,
            _shared_directive_directives_module__WEBPACK_IMPORTED_MODULE_2__.DirectivesModule,
        ],
        declarations: [_carga_dados_page__WEBPACK_IMPORTED_MODULE_1__.CargaDadosPage]
    })
], CargaDadosPageModule);



/***/ }),

/***/ 30542:
/*!*******************************************************!*\
  !*** ./src/app/pages/carga-dados/carga-dados.page.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CargaDadosPage": () => (/* binding */ CargaDadosPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _carga_dados_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./carga-dados.page.html?ngResource */ 84096);
/* harmony import */ var _carga_dados_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./carga-dados.page.scss?ngResource */ 58892);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);





let CargaDadosPage = class CargaDadosPage {
    constructor(activatedRoute) {
        this.activatedRoute = activatedRoute;
        this.currentTab = 'historico';
        this.selectedOption = undefined;
        this.currentTab =
            this.activatedRoute.snapshot.queryParamMap.get('tab') ||
                'historico';
        this.selectedOption =
            this.activatedRoute.snapshot.queryParamMap.get('option') ||
                undefined;
    }
    ngOnInit() {
        //this.currentTab = 'carregar';
    }
    changeTab(event) {
        this.currentTab = event.detail.value;
    }
};
CargaDadosPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute }
];
CargaDadosPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-carga-dados',
        template: _carga_dados_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_carga_dados_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], CargaDadosPage);



/***/ }),

/***/ 58892:
/*!********************************************************************!*\
  !*** ./src/app/pages/carga-dados/carga-dados.page.scss?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYXJnYS1kYWRvcy5wYWdlLnNjc3MifQ== */";

/***/ }),

/***/ 84096:
/*!********************************************************************!*\
  !*** ./src/app/pages/carga-dados/carga-dados.page.html?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Cargas de Dados</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content appScrollTheme>\n  <br />\n  <ion-segment class=\"background-segment\" [(ngModel)]=\"currentTab\" [ngModelOptions]=\"{standalone: true}\"\n    (ionChange)=\"changeTab($event)\">\n    <ion-segment-button style=\"margin-left: 5px; max-width: 200px\" layout=\"icon-start\" value=\"historico\">\n      <ion-icon class=\"pi pi-history\" style=\"font-size: 1.2em\"></ion-icon>\n      <ion-label text-wrap class=\"wrap-text\" style=\"font-size: 1.1em\">\n        Histórico\n      </ion-label>\n    </ion-segment-button>\n    <ion-segment-button style=\"max-width: 200px\" layout=\"icon-start\" value=\"carregar\">\n      <ion-icon style=\"font-size: 1.2em\" name=\"cloud-upload-outline\"></ion-icon>\n      <ion-label style=\"font-size: 1.1em\"> Carregar </ion-label>\n    </ion-segment-button>\n  </ion-segment>\n\n\n  <div class=\"wall-background py-5\">\n    <ng-container *ngIf=\"currentTab === 'historico'\">\n      <div style=\"max-width: 95%; margin: auto\">\n        <app-carga-produtos-main></app-carga-produtos-main>\n      </div>\n    </ng-container>\n    <ng-container *ngIf=\"currentTab === 'carregar'\">\n      <div style=\"max-width: 95%; margin: auto\">\n        <app-carga-produtos-upload [glow-option]=\"selectedOption\"></app-carga-produtos-upload>\n      </div>\n    </ng-container>\n  </div>\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_carga-dados_carga-dados_module_ts.js.map