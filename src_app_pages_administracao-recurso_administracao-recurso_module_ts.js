"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_administracao-recurso_administracao-recurso_module_ts"],{

/***/ 29597:
/*!*************************************************************************************!*\
  !*** ./src/app/pages/administracao-recurso/administracao-recurso-routing.module.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdministracaoRecursoPageRoutingModule": () => (/* binding */ AdministracaoRecursoPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _administracao_recurso_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./administracao-recurso.page */ 18496);




const routes = [
    {
        path: '',
        component: _administracao_recurso_page__WEBPACK_IMPORTED_MODULE_0__.AdministracaoRecursoPage
    }
];
let AdministracaoRecursoPageRoutingModule = class AdministracaoRecursoPageRoutingModule {
};
AdministracaoRecursoPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AdministracaoRecursoPageRoutingModule);



/***/ }),

/***/ 11169:
/*!*****************************************************************************!*\
  !*** ./src/app/pages/administracao-recurso/administracao-recurso.module.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdministracaoRecursoPageModule": () => (/* binding */ AdministracaoRecursoPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 19200);
/* harmony import */ var _administracao_recurso_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./administracao-recurso-routing.module */ 29597);
/* harmony import */ var _administracao_recurso_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./administracao-recurso.page */ 18496);
/* harmony import */ var _shared_directive_directives_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../shared/directive/directives.module */ 9406);
/* harmony import */ var _shared_components_adm_recurso_module_adm_recurso_module_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../shared/components/adm-recurso-module/adm-recurso-module.module */ 38543);










let AdministracaoRecursoPageModule = class AdministracaoRecursoPageModule {
};
AdministracaoRecursoPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_9__.FontAwesomeModule,
            _administracao_recurso_routing_module__WEBPACK_IMPORTED_MODULE_0__.AdministracaoRecursoPageRoutingModule,
            _shared_directive_directives_module__WEBPACK_IMPORTED_MODULE_2__.DirectivesModule,
            _shared_components_adm_recurso_module_adm_recurso_module_module__WEBPACK_IMPORTED_MODULE_3__.AdmRecursoModuleModule,
        ],
        declarations: [_administracao_recurso_page__WEBPACK_IMPORTED_MODULE_1__.AdministracaoRecursoPage]
    })
], AdministracaoRecursoPageModule);



/***/ }),

/***/ 18496:
/*!***************************************************************************!*\
  !*** ./src/app/pages/administracao-recurso/administracao-recurso.page.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdministracaoRecursoPage": () => (/* binding */ AdministracaoRecursoPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _administracao_recurso_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./administracao-recurso.page.html?ngResource */ 20873);
/* harmony import */ var _administracao_recurso_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./administracao-recurso.page.scss?ngResource */ 95022);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);




let AdministracaoRecursoPage = class AdministracaoRecursoPage {
    constructor() {
        this.currentTab = 'funcionario';
    }
    ngOnInit() {
    }
    changeTab(event) {
        this.currentTab = event.detail.value;
    }
};
AdministracaoRecursoPage.ctorParameters = () => [];
AdministracaoRecursoPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-administracao-recurso',
        template: _administracao_recurso_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_administracao_recurso_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AdministracaoRecursoPage);



/***/ }),

/***/ 95022:
/*!****************************************************************************************!*\
  !*** ./src/app/pages/administracao-recurso/administracao-recurso.page.scss?ngResource ***!
  \****************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZG1pbmlzdHJhY2FvLXJlY3Vyc28ucGFnZS5zY3NzIn0= */";

/***/ }),

/***/ 20873:
/*!****************************************************************************************!*\
  !*** ./src/app/pages/administracao-recurso/administracao-recurso.page.html?ngResource ***!
  \****************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>ADM. Recursos</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content appScrollTheme>\n  <br />\n  <ion-segment class=\"background-segment\" [(ngModel)]=\"currentTab\" [ngModelOptions]=\"{standalone: true}\"\n    (ionChange)=\"changeTab($event)\">\n    <ion-segment-button style=\"margin-left: 5px; max-width: 200px\" layout=\"icon-start\" value=\"funcionario\">\n      <ion-icon style=\"font-size: 1.2em\" name=\"people-outline\"></ion-icon>\n      <ion-label text-wrap class=\"wrap-text\" style=\"font-size: 1.1em\">\n        Funcionários\n      </ion-label>\n    </ion-segment-button>\n    <ion-segment-button style=\"max-width: 200px\" layout=\"icon-start\" value=\"patrimonio\">\n      <ion-icon style=\"font-size: 1.2em\" name=\"desktop-outline\"></ion-icon>\n      <ion-label style=\"font-size: 1.1em\"> Patrimônios </ion-label>\n    </ion-segment-button>\n  </ion-segment>\n\n  <br />\n\n  <div class=\"wall-background h-screen\">\n    <ng-container *ngIf=\"currentTab === 'funcionario'\">\n      <div style=\"max-width: 95%; margin: auto\">\n        <app-funcionario-main></app-funcionario-main>\n      </div>\n    </ng-container>\n    <ng-container *ngIf=\"currentTab === 'patrimonio'\">\n      <div style=\"max-width: 95%; margin: auto\">\n        <app-patrimonio-main></app-patrimonio-main>\n      </div>\n    </ng-container>\n\n  </div>\n\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_administracao-recurso_administracao-recurso_module_ts.js.map