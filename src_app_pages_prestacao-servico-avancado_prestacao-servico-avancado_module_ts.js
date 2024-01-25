"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_prestacao-servico-avancado_prestacao-servico-avancado_module_ts"],{

/***/ 87999:
/*!***********************************************************************************************!*\
  !*** ./src/app/pages/prestacao-servico-avancado/prestacao-servico-avancado-routing.module.ts ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrestacaoServicoAvancadoPageRoutingModule": () => (/* binding */ PrestacaoServicoAvancadoPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _prestacao_servico_avancado_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./prestacao-servico-avancado.page */ 23002);




const routes = [
    {
        path: '',
        component: _prestacao_servico_avancado_page__WEBPACK_IMPORTED_MODULE_0__.PrestacaoServicoAvancadoPage
    }
];
let PrestacaoServicoAvancadoPageRoutingModule = class PrestacaoServicoAvancadoPageRoutingModule {
};
PrestacaoServicoAvancadoPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PrestacaoServicoAvancadoPageRoutingModule);



/***/ }),

/***/ 39969:
/*!***************************************************************************************!*\
  !*** ./src/app/pages/prestacao-servico-avancado/prestacao-servico-avancado.module.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrestacaoServicoAvancadoPageModule": () => (/* binding */ PrestacaoServicoAvancadoPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _prestacao_servico_avancado_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./prestacao-servico-avancado-routing.module */ 87999);
/* harmony import */ var _prestacao_servico_avancado_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./prestacao-servico-avancado.page */ 23002);
/* harmony import */ var _shared_directive_directives_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../shared/directive/directives.module */ 9406);








let PrestacaoServicoAvancadoPageModule = class PrestacaoServicoAvancadoPageModule {
};
PrestacaoServicoAvancadoPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _prestacao_servico_avancado_routing_module__WEBPACK_IMPORTED_MODULE_0__.PrestacaoServicoAvancadoPageRoutingModule,
            _shared_directive_directives_module__WEBPACK_IMPORTED_MODULE_2__.DirectivesModule,
        ],
        declarations: [_prestacao_servico_avancado_page__WEBPACK_IMPORTED_MODULE_1__.PrestacaoServicoAvancadoPage]
    })
], PrestacaoServicoAvancadoPageModule);



/***/ }),

/***/ 23002:
/*!*************************************************************************************!*\
  !*** ./src/app/pages/prestacao-servico-avancado/prestacao-servico-avancado.page.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrestacaoServicoAvancadoPage": () => (/* binding */ PrestacaoServicoAvancadoPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _prestacao_servico_avancado_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./prestacao-servico-avancado.page.html?ngResource */ 1692);
/* harmony import */ var _prestacao_servico_avancado_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./prestacao-servico-avancado.page.scss?ngResource */ 98625);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);




let PrestacaoServicoAvancadoPage = class PrestacaoServicoAvancadoPage {
    constructor() {
        this.currentTab = 'funcionario';
    }
    ngOnInit() {
    }
    changeTab(event) {
        this.currentTab = event.detail.value;
    }
};
PrestacaoServicoAvancadoPage.ctorParameters = () => [];
PrestacaoServicoAvancadoPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-prestacao-servico-avancado',
        template: _prestacao_servico_avancado_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_prestacao_servico_avancado_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], PrestacaoServicoAvancadoPage);



/***/ }),

/***/ 98625:
/*!**************************************************************************************************!*\
  !*** ./src/app/pages/prestacao-servico-avancado/prestacao-servico-avancado.page.scss?ngResource ***!
  \**************************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcmVzdGFjYW8tc2Vydmljby1hdmFuY2Fkby5wYWdlLnNjc3MifQ== */";

/***/ }),

/***/ 1692:
/*!**************************************************************************************************!*\
  !*** ./src/app/pages/prestacao-servico-avancado/prestacao-servico-avancado.page.html?ngResource ***!
  \**************************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>prestacao-servico-avancado</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_prestacao-servico-avancado_prestacao-servico-avancado_module_ts.js.map