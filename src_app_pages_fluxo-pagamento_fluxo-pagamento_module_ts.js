"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_fluxo-pagamento_fluxo-pagamento_module_ts"],{

/***/ 87377:
/*!*************************************************************************!*\
  !*** ./src/app/pages/fluxo-pagamento/fluxo-pagamento-routing.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FluxoPagamentoPageRoutingModule": () => (/* binding */ FluxoPagamentoPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _fluxo_pagamento_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fluxo-pagamento.page */ 61826);




const routes = [
    {
        path: '',
        component: _fluxo_pagamento_page__WEBPACK_IMPORTED_MODULE_0__.FluxoPagamentoPage
    }
];
let FluxoPagamentoPageRoutingModule = class FluxoPagamentoPageRoutingModule {
};
FluxoPagamentoPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], FluxoPagamentoPageRoutingModule);



/***/ }),

/***/ 44437:
/*!*****************************************************************!*\
  !*** ./src/app/pages/fluxo-pagamento/fluxo-pagamento.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FluxoPagamentoPageModule": () => (/* binding */ FluxoPagamentoPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 19200);
/* harmony import */ var _fluxo_pagamento_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fluxo-pagamento-routing.module */ 87377);
/* harmony import */ var _fluxo_pagamento_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fluxo-pagamento.page */ 61826);
/* harmony import */ var _shared_directive_directives_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../shared/directive/directives.module */ 9406);
/* harmony import */ var _shared_components_fluxo_pagamento_module_solicitacoes_solicitacoes_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../shared/components/fluxo-pagamento-module/solicitacoes/solicitacoes.module */ 62380);










let FluxoPagamentoPageModule = class FluxoPagamentoPageModule {
};
FluxoPagamentoPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_8__.FontAwesomeModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule,
            _shared_directive_directives_module__WEBPACK_IMPORTED_MODULE_2__.DirectivesModule,
            _fluxo_pagamento_routing_module__WEBPACK_IMPORTED_MODULE_0__.FluxoPagamentoPageRoutingModule,
            _shared_components_fluxo_pagamento_module_solicitacoes_solicitacoes_module__WEBPACK_IMPORTED_MODULE_3__.SolicitacoesModule,
        ],
        declarations: [_fluxo_pagamento_page__WEBPACK_IMPORTED_MODULE_1__.FluxoPagamentoPage]
    })
], FluxoPagamentoPageModule);



/***/ }),

/***/ 61826:
/*!***************************************************************!*\
  !*** ./src/app/pages/fluxo-pagamento/fluxo-pagamento.page.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FluxoPagamentoPage": () => (/* binding */ FluxoPagamentoPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _fluxo_pagamento_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fluxo-pagamento.page.html?ngResource */ 37430);
/* harmony import */ var _fluxo_pagamento_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fluxo-pagamento.page.scss?ngResource */ 95226);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);




let FluxoPagamentoPage = class FluxoPagamentoPage {
    constructor() { }
    ngOnInit() {
    }
};
FluxoPagamentoPage.ctorParameters = () => [];
FluxoPagamentoPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-fluxo-pagamento',
        template: _fluxo_pagamento_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_fluxo_pagamento_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], FluxoPagamentoPage);



/***/ }),

/***/ 95226:
/*!****************************************************************************!*\
  !*** ./src/app/pages/fluxo-pagamento/fluxo-pagamento.page.scss?ngResource ***!
  \****************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmbHV4by1wYWdhbWVudG8ucGFnZS5zY3NzIn0= */";

/***/ }),

/***/ 37430:
/*!****************************************************************************!*\
  !*** ./src/app/pages/fluxo-pagamento/fluxo-pagamento.page.html?ngResource ***!
  \****************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Flux. Pagamentos</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content appScrollTheme>\n  <app-solicitacao-create></app-solicitacao-create>\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_fluxo-pagamento_fluxo-pagamento_module_ts.js.map