(self["webpackChunkcom_standftw_landingpage"] = self["webpackChunkcom_standftw_landingpage"] || []).push([[6570],{

/***/ 9813:
/*!***************************************************************!*\
  !*** ./src/app/pages/stand-core/stand-core-routing.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StandCorePageRoutingModule": () => (/* binding */ StandCorePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 5353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9535);
/* harmony import */ var _stand_core_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stand-core.page */ 5659);




const routes = [
    {
        path: '',
        component: _stand_core_page__WEBPACK_IMPORTED_MODULE_0__.StandCorePage
    }
];
let StandCorePageRoutingModule = class StandCorePageRoutingModule {
};
StandCorePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], StandCorePageRoutingModule);



/***/ }),

/***/ 6570:
/*!*******************************************************!*\
  !*** ./src/app/pages/stand-core/stand-core.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StandCorePageModule": () => (/* binding */ StandCorePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 5353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 6274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 3324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 4595);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @ngx-translate/core */ 4236);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 680);
/* harmony import */ var primeng_splitter__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! primeng/splitter */ 6893);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/button */ 3103);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/toast */ 3666);
/* harmony import */ var primeng_menu__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! primeng/menu */ 5384);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/ripple */ 4796);
/* harmony import */ var primeng_paginator__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! primeng/paginator */ 7207);
/* harmony import */ var primeng_avatar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/avatar */ 7642);
/* harmony import */ var primeng_inputswitch__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/inputswitch */ 2938);
/* harmony import */ var primeng_styleclass__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/styleclass */ 9162);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/inputtext */ 472);
/* harmony import */ var primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/inputtextarea */ 5010);
/* harmony import */ var primeng_galleria__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! primeng/galleria */ 6219);
/* harmony import */ var primeng_image__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! primeng/image */ 3170);
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! primeng/dialog */ 7914);
/* harmony import */ var _stand_core_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stand-core-routing.module */ 9813);
/* harmony import */ var _stand_core_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stand-core.page */ 5659);
/* harmony import */ var _shared_directive_directives_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/directive/directives.module */ 9513);
/* harmony import */ var _shared_pipes_pipe_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/pipes/pipe.module */ 9502);
/* harmony import */ var _shared_components_adm_comunicacao_contact_contact_form_contact_form_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../shared/components/adm-comunicacao/contact/contact-form/contact-form.module */ 606);


























let StandCorePageModule = class StandCorePageModule {
};
StandCorePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule,
            primeng_button__WEBPACK_IMPORTED_MODULE_10__.ButtonModule,
            primeng_ripple__WEBPACK_IMPORTED_MODULE_11__.RippleModule,
            primeng_inputtext__WEBPACK_IMPORTED_MODULE_12__.InputTextModule,
            primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_13__.InputTextareaModule,
            primeng_toast__WEBPACK_IMPORTED_MODULE_14__.ToastModule,
            primeng_avatar__WEBPACK_IMPORTED_MODULE_15__.AvatarModule,
            primeng_inputswitch__WEBPACK_IMPORTED_MODULE_16__.InputSwitchModule,
            primeng_styleclass__WEBPACK_IMPORTED_MODULE_17__.StyleClassModule,
            primeng_image__WEBPACK_IMPORTED_MODULE_18__.ImageModule,
            primeng_button__WEBPACK_IMPORTED_MODULE_10__.ButtonModule,
            primeng_ripple__WEBPACK_IMPORTED_MODULE_11__.RippleModule,
            primeng_galleria__WEBPACK_IMPORTED_MODULE_19__.GalleriaModule,
            primeng_menu__WEBPACK_IMPORTED_MODULE_20__.MenuModule,
            primeng_paginator__WEBPACK_IMPORTED_MODULE_21__.PaginatorModule,
            primeng_dialog__WEBPACK_IMPORTED_MODULE_22__.DialogModule,
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_23__.FontAwesomeModule,
            primeng_splitter__WEBPACK_IMPORTED_MODULE_24__.SplitterModule,
            _shared_directive_directives_module__WEBPACK_IMPORTED_MODULE_2__.DirectivesModule,
            _shared_pipes_pipe_module__WEBPACK_IMPORTED_MODULE_3__.PipeModule,
            _shared_components_adm_comunicacao_contact_contact_form_contact_form_module__WEBPACK_IMPORTED_MODULE_4__.ContactFormModule,
            _stand_core_routing_module__WEBPACK_IMPORTED_MODULE_0__.StandCorePageRoutingModule
        ],
        declarations: [_stand_core_page__WEBPACK_IMPORTED_MODULE_1__.StandCorePage, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_25__.TranslatePipe]
    })
], StandCorePageModule);



/***/ }),

/***/ 5659:
/*!*****************************************************!*\
  !*** ./src/app/pages/stand-core/stand-core.page.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StandCorePage": () => (/* binding */ StandCorePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 5353);
/* harmony import */ var _raw_loader_stand_core_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./stand-core.page.html */ 9583);
/* harmony import */ var _stand_core_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stand-core.page.scss */ 2398);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2741);




let StandCorePage = class StandCorePage {
    constructor() {
        this.featuresImgs = [];
        this.responsiveOptions = [
            {
                breakpoint: '1024px',
                numVisible: 5
            },
            {
                breakpoint: '768px',
                numVisible: 3
            },
            {
                breakpoint: '560px',
                numVisible: 1
            }
        ];
        this.showDialog = false;
    }
    ngOnInit() {
        for (let index = 8; index <= 18; index++) {
            const imgNumber = index < 10 ? `0${index}` : index;
            const src = `assets/imgs/solucoes/stand-core/stand-core-web_0${imgNumber}.png`;
            const feature = `stand-core.feature-outros-${index}`;
            const obj = {
                src,
                feature,
            };
            this.featuresImgs.push(obj);
        }
    }
    doContato() {
        this.showDialog = true;
    }
    close() {
        this.showDialog = false;
    }
};
StandCorePage.ctorParameters = () => [];
StandCorePage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-stand-core',
        template: _raw_loader_stand_core_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_stand_core_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], StandCorePage);



/***/ }),

/***/ 2398:
/*!*******************************************************!*\
  !*** ./src/app/pages/stand-core/stand-core.page.scss ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdGFuZC1jb3JlLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ 9583:
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/stand-core/stand-core.page.html ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>{{ 'app.menu-route-stand-core' | translate }}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content appScrollTheme>\n\n  <div id=\"main\" class=\"px-4 py-8 md:px-6 lg:px-8 border-bottom-1\">\n    <div class=\"flex flex-wrap\">\n      <div class=\"w-12 lg:w-6 p-4\">\n        <h1 class=\"text-6xl font-bold text-900 mt-0 mb-3\">{{ 'stand-core.main-title-text' | translate }} <span\n            class=\"text-primary underline\">{{ 'stand-core.main-title' | translate }}</span></h1>\n        <p class=\"text-3xl text-900 mt-0 mb-5\">{{ 'stand-core.sub-title' | translate }}</p>\n        <ul class=\"list-none p-0 m-0\">\n          <li class=\"mb-3 flex align-items-center\"><i class=\"pi pi-building text-primary text-xl mr-2\"></i><span\n              class=\"text-900 line-height-3\">{{ 'stand-core.sub-title-1' | translate }}</span></li>\n          <li class=\"mb-3 flex align-items-center\"><i class=\"pi pi-key text-primary text-xl mr-2\"></i><span\n              class=\"text-900 line-height-3\">{{ 'stand-core.sub-title-2' | translate }}</span></li>\n          <li class=\"mb-3 flex align-items-center\"><i class=\"pi pi-chart-line text-primary text-xl mr-2\"></i><span\n              class=\"text-900 line-height-3\">{{ 'stand-core.sub-title-3' | translate }}</span></li>\n        </ul>\n        <button type=\"button\" pButton pRipple\n          class=\"block mt-7 mb-7 lg:mb-0 p-button-rounded border-primary bg-primary p-button-lg text-white\"\n          (click)=\"showDialog = true\">\n          {{'app.contact-us' | translate }}\n        </button>\n      </div>\n      <div class=\"w-12 lg:w-6 text-center lg:text-right overflow-hidden\">\n        <img src=\"assets/imgs/solucoes/stand-core/hero.png\" alt=\"Image\" class=\"w-full lg:w-auto\">\n      </div>\n    </div>\n  </div>\n\n  <div id=\"feature\" class=\"px-4 py-8 md:px-6 lg:px-8 border-bottom-1\">\n    <div class=\"font-bold text-5xl text-900 mb-3\">{{ 'stand-core.feature-main-title' | translate }}</div>\n    <div class=\"text-700 line-height-3 text-xl mb-6\">{{ 'stand-core.feature-sub-title' | translate }}</div>\n\n    <ng-container id=\"geral_operacao\">\n      <div class=\"grid flex align-items-center\">\n        <div class=\"col-12 lg:col-6 p-3 flex flex-column justify-content-between \">\n          <p-image src=\"assets/imgs/solucoes/stand-core/stand-core-web_002.png\" class=\"border-primary border-1 \"\n            [preview]=\"true\"></p-image>\n        </div>\n        <div class=\"col-12 lg:col-6 pl-2 lg:pl-4 \">\n          <div class=\"surface-card border-round p-3 shadow-2 mb-6\">\n            <div class=\"flex align-items-center mb-3 \">\n              <span class=\"bg-purple-100 text-pink-600 text-sm block py-1 px-2 border-round mr-3 font-medium\">\n                {{ 'stand-core.feature-bullet-loja' | translate }}\n              </span>\n              <span class=\"bg-blue-100 text-blue-600 text-sm block py-1 px-2 border-round mr-3 font-medium\">\n                {{ 'stand-core.feature-bullet-despesa' | translate }}</span>\n              <span class=\"bg-green-100 text-green-600 text-sm block py-1 px-2 border-round mr-3 font-medium\">\n                {{ 'stand-core.feature-bullet-empresa' | translate }}</span>\n              <span class=\"bg-teal-100 text-teal-600 text-sm block py-1 px-2 border-round mr-3 font-medium\">\n                {{ 'stand-core.feature-bullet-contrato' | translate }}</span>\n            </div>\n            <div class=\"text-900 font-medium text-xl mb-3\">{{ 'stand-core.feature-geral.main-title' | translate }}</div>\n            <p class=\"text-700 line-height-3 mt-0 mb-3\">{{ 'stand-core.feature-geral.description' | translate }}</p>\n          </div>\n        </div>\n      </div>\n      <div class=\"mt-5 grid flex align-items-center\">\n        <div class=\"col-12 lg:col-6 pl-2 lg:pl-4 \">\n          <div class=\"surface-card border-round p-3 shadow-2 mb-6\">\n            <div class=\"flex align-items-center mb-3 \">\n              <span class=\"bg-purple-100 text-pink-600 text-sm block py-1 px-2 border-round mr-3 font-medium\">\n                {{ 'stand-core.feature-bullet-produto' | translate }}\n              </span>\n              <span class=\"bg-blue-100 text-blue-600 text-sm block py-1 px-2 border-round mr-3 font-medium\">\n                {{ 'stand-core.feature-bullet-servico' | translate }}</span>\n              <span class=\"bg-green-100 text-green-600 text-sm block py-1 px-2 border-round mr-3 font-medium\">\n                {{ 'stand-core.feature-bullet-plano' | translate }}</span>\n            </div>\n            <div class=\"text-900 font-medium text-xl mb-3\">{{ 'stand-core.feature-operacao.main-title' | translate }}\n            </div>\n            <p class=\"text-700 line-height-3 mt-0 mb-3\">{{ 'stand-core.feature-operacao.description' | translate }}</p>\n          </div>\n        </div>\n\n\n        <div class=\"col-12 lg:col-6 p-3 flex flex-column justify-content-between \">\n          <p-image src=\"assets/imgs/solucoes/stand-core/stand-core-web_003.png\" class=\"border-primary border-1 \"\n            [preview]=\"true\"></p-image>\n        </div>\n      </div>\n    </ng-container>\n\n    <ng-container id=\"rh_pessoal\">\n      <div class=\"grid flex align-items-center\">\n        <div class=\"col-12 lg:col-6 p-3 flex flex-column justify-content-between \">\n          <p-image src=\"assets/imgs/solucoes/stand-core/stand-core-web_004.png\" class=\"border-primary border-1 \"\n            [preview]=\"true\"></p-image>\n        </div>\n        <div class=\"col-12 lg:col-6 pl-2 lg:pl-4 \">\n          <div class=\"surface-card border-round p-3 shadow-2 mb-6\">\n            <div class=\"flex align-items-center mb-3 \">\n              <span class=\"bg-purple-100 text-pink-600 text-sm block py-1 px-2 border-round mr-3 font-medium\">\n                {{ 'stand-core.feature-bullet-cargo' | translate }}\n              </span>\n              <span class=\"bg-blue-100 text-blue-600 text-sm block py-1 px-2 border-round mr-3 font-medium\">\n                {{ 'stand-core.feature-bullet-beneficio' | translate }}</span>\n              <span class=\"bg-green-100 text-green-600 text-sm block py-1 px-2 border-round mr-3 font-medium\">\n                {{ 'stand-core.feature-bullet-area' | translate }}</span>\n              <span class=\"bg-teal-100 text-teal-600 text-sm block py-1 px-2 border-round mr-3 font-medium\">\n                {{ 'stand-core.feature-bullet-patrimonio' | translate }}</span>\n            </div>\n            <div class=\"text-900 font-medium text-xl mb-3\">{{ 'stand-core.feature-rh.main-title' | translate }}</div>\n            <p class=\"text-700 line-height-3 mt-0 mb-3\">{{ 'stand-core.feature-rh.description' | translate }}</p>\n          </div>\n        </div>\n      </div>\n      <div class=\"mt-5 grid flex align-items-center\">\n        <div class=\"col-12 lg:col-6 pl-2 lg:pl-4 \">\n          <div class=\"surface-card border-round p-3 shadow-2 mb-6\">\n            <div class=\"flex align-items-center mb-3 \">\n              <span class=\"bg-purple-100 text-pink-600 text-sm block py-1 px-2 border-round mr-3 font-medium\">\n                {{ 'stand-core.feature-bullet-colaborador' | translate }}\n              </span>\n              <span class=\"bg-blue-100 text-blue-600 text-sm block py-1 px-2 border-round mr-3 font-medium\">\n                {{ 'stand-core.feature-bullet-prestador' | translate }}</span>\n              <span class=\"bg-green-100 text-green-600 text-sm block py-1 px-2 border-round mr-3 font-medium\">\n                {{ 'stand-core.feature-bullet-usuario-sistema' | translate }}</span>\n            </div>\n            <div class=\"text-900 font-medium text-xl mb-3\">{{ 'stand-core.feature-pessoal.main-title' | translate }}\n            </div>\n            <p class=\"text-700 line-height-3 mt-0 mb-3\">{{ 'stand-core.feature-pessoal.description' | translate }}</p>\n          </div>\n        </div>\n\n        <div class=\"col-12 lg:col-6 p-3 flex flex-column justify-content-between \">\n          <p-image src=\"assets/imgs/solucoes/stand-core/stand-core-web_005.png\" class=\"border-primary border-1 \"\n            [preview]=\"true\"></p-image>\n        </div>\n      </div>\n    </ng-container>\n\n    <ng-container id=\"cliente\">\n      <div class=\"grid flex align-items-center\">\n        <div class=\"col-12 lg:col-6 p-3 flex flex-column justify-content-between \">\n          <p-image src=\"assets/imgs/solucoes/stand-core/stand-core-web_006.png\" class=\"border-primary border-1 \"\n            [preview]=\"true\"></p-image>\n        </div>\n        <div class=\"col-12 lg:col-6 pl-2 lg:pl-4 \">\n          <div class=\"surface-card border-round p-3 shadow-2 mb-6\">\n            <div class=\"flex align-items-center mb-3 \">\n              <span class=\"bg-purple-100 text-pink-600 text-sm block py-1 px-2 border-round mr-3 font-medium\">\n                {{ 'stand-core.feature-bullet-cliente' | translate }}\n              </span>\n            </div>\n            <div class=\"text-900 font-medium text-xl mb-3\">{{ 'stand-core.feature-cliente-1.main-title' | translate }}\n            </div>\n            <p class=\"text-700 line-height-3 mt-0 mb-3\">{{ 'stand-core.feature-cliente-1.description' | translate }}</p>\n          </div>\n        </div>\n      </div>\n      <div class=\"mt-5 grid flex align-items-center\">\n        <div class=\"col-12 lg:col-6 pl-2 lg:pl-4 \">\n          <div class=\"surface-card border-round p-3 shadow-2 mb-6\">\n            <div class=\"flex align-items-center mb-3 \">\n              <span class=\"bg-purple-100 text-pink-600 text-sm block py-1 px-2 border-round mr-3 font-medium\">\n                {{ 'stand-core.feature-bullet-cliente' | translate }}\n              </span>\n            </div>\n            <div class=\"text-900 font-medium text-xl mb-3\">{{ 'stand-core.feature-cliente-2.main-title' | translate }}\n            </div>\n            <p class=\"text-700 line-height-3 mt-0 mb-3\">{{ 'stand-core.feature-cliente-2.description' | translate }}</p>\n          </div>\n        </div>\n\n        <div class=\"col-12 lg:col-6 p-3 flex flex-column justify-content-between \">\n          <p-image src=\"assets/imgs/solucoes/stand-core/stand-core-web_007.png\" class=\"border-primary border-1 \"\n            [preview]=\"true\"></p-image>\n        </div>\n      </div>\n    </ng-container>\n\n    <ng-container *ngIf=\"featuresImgs && featuresImgs.length > 0\" id=\"outros\">\n      <p-galleria [(value)]=\"featuresImgs\" [circular]=\"true\" [autoPlay]=\"true\" [indicators]=\"true\"\n        [responsiveOptions]=\"responsiveOptions\" [numVisible]=\"5\" styleClass=\"mt-5\" [transitionInterval]=\"8000\">\n        <ng-template pTemplate=\"header\">\n          <h1>\n            {{ 'stand-core.feature-mais' | translate }}\n          </h1>\n        </ng-template>\n\n        <ng-template pTemplate=\"item\" let-item>\n          <p-image width=\"100%\" height=\"60%\" [src]=\"item.src\" class=\"justify-content-center border-primary border-1\"\n            [preview]=\"true\"></p-image>\n        </ng-template>\n\n        <ng-template pTemplate=\"thumbnail\" let-item>\n          <div class=\"grid grid-nogutter justify-content-center\">\n            <img [src]=\"item.src\" width=\"250px\" height=\"100px\" />\n          </div>\n        </ng-template>\n\n        <ng-template pTemplate=\"caption\" let-item>\n          <h4 style=\"margin-bottom: .5rem; color: #ffffff;\">{{ item.feature+'.main-title' | translate }}</h4>\n          <p>{{ item.feature+'.description' | translate }}</p>\n        </ng-template>\n      </p-galleria>\n\n    </ng-container>\n\n  </div>\n\n  <div id=\"solution\" class=\"px-4 py-8 md:px-6 lg:px-8 border-bottom-1\">\n    <div class=\"font-bold text-5xl text-900 mb-3\">{{ 'stand-core.solution.main-title' | translate }}</div>\n    <div class=\"text-800 text-xl line-height-3 mb-5\">{{ 'stand-core.solution.main-subtitle' | translate }}</div>\n    <div class=\"grid nogutter\">\n      <div class=\"col-12 lg:col-4 p-4\">\n        <div class=\"border-top-3 border-blue-600\"></div>\n        <div class=\"text-blue-600 font-medium my-2\">{{ 'stand-core.solution.cloud-title' | translate }}</div>\n        <div class=\"text-900 font-medium text-xl line-height-3 mb-4\">{{ 'stand-core.solution.cloud-subtitle' |\n          translate }}</div>\n        <div class=\"text-800 line-height-3\">\n          {{ 'stand-core.solution.cloud-description' | translate }}\n        </div>\n      </div>\n      <div class=\"col-12 lg:col-4 p-4\">\n        <div class=\"border-top-3 border-pink-600\"></div>\n        <div class=\"text-pink-600 font-medium my-2\">{{ 'stand-core.solution.plataform-title' | translate }}</div>\n        <div class=\"text-900 font-medium text-xl line-height-3 mb-4\">{{ 'stand-core.solution.plataform-subtitle' |\n          translate }}</div>\n        <div class=\"text-800 line-height-3\">\n          {{ 'stand-core.solution.plataform-description' | translate }}\n        </div>\n      </div>\n      <div class=\"col-12 lg:col-4 p-4\">\n        <div class=\"border-top-3 border-orange-600\"></div>\n        <div class=\"text-orange-600 font-medium my-2\"> {{ 'stand-core.solution.integration-title' | translate }}</div>\n        <div class=\"text-900 font-medium text-xl line-height-3 mb-4\">{{ 'stand-core.solution.integration-subtitle' |\n          translate }}</div>\n        <div class=\"text-700 line-height-3\">\n          {{ 'stand-core.solution.integration-description' | translate }}\n        </div>\n      </div>\n    </div>\n\n  </div>\n\n  <div id=\"contact\" class=\"px-4 pt-5 pb-7 md:px-6 lg:px-8  wall-background\">\n    <div class=\"text-primary text-xl font-medium mb-3 text-center\">{{ 'stand-core.contact-us.experimente' | translate }}\n    </div>\n    <div class=\"text-900 text-3xl font-bold mb-3 text-center\">{{ 'stand-core.contact-us.main-title' | translate }}</div>\n    <div class=\"text-700 text-center\">{{ 'stand-core.contact-us.main-subtitle' | translate }}</div>\n    <div class=\"flex justify-content-center mt-8\">\n      <div class=\"p-5 surface-card text-center border-round\">\n        <div class=\"border-circle p-4 text-yellow-600 inline-flex justify-content-center align-items-center mb-2\">\n          <i class=\"pi pi-users text-5xl \"></i>\n        </div>\n        <div class=\"text-900 font-medium text-2xl mb-4\">{{ 'stand-core.contact-us.card-title' | translate }}</div>\n        <div class=\"text-700 mb-4 line-height-3\">{{ 'stand-core.contact-us.card-description' | translate }}</div>\n\n        <button type=\"button\" pButton pRipple\n          class=\"block mx-auto mt-5 mb-7 lg:mb-0 p-button-rounded border-primary bg-primary p-button-lg text-white\"\n          (click)=\"doContato()\">\n          {{'app.contact-us' | translate }}\n        </button>\n      </div>\n    </div>\n  </div>\n\n\n</ion-content>\n\n<p-dialog [(visible)]=\"showDialog\" appendTo=\"body\" [modal]=\"true\" [closable]=\"false\" [draggable]=\"false\"\n  [breakpoints]=\"{'960px': '75vw', '640px': '100vw'}\" [style]=\"{width: '60vw'}\">\n  <ng-template pTemplate=\"header\">\n    <div class=\"flex align-items-center \">\n      <span class=\"flex align-items-center justify-content-center bg-cyan-100 text-cyan-800 mr-3 border-circle\"\n        style=\"width:32px;height:32px\">\n        <i class=\"pi pi-info text-lg\"></i>\n      </span>\n      <span class=\"font-medium text-2xl text-900\">{{ 'app.menu-route-contact-us' | translate }}</span>\n    </div>\n\n    <div class=\"flex align-items-center justify-content-end ml-auto cursor-pointer\" (click)=\"showDialog = false\">\n      <span\n        class=\"flex align-items-center justify-content-center bg-pink-100 text-pink-800 border-circle vertical-align-top\"\n        style=\"width:24px;height:24px\">\n        <i class=\"pi pi-times text-sm\"></i>\n      </span>\n    </div>\n  </ng-template>\n\n  <ng-template pTemplate=\"content\">\n    <app-contact-form (sendEvent)=\"showDialog = false\"></app-contact-form>\n  </ng-template>\n</p-dialog>");

/***/ })

}]);
//# sourceMappingURL=6570.js.map