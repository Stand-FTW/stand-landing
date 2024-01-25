"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_administracao-ti_administracao-ti_module_ts"],{

/***/ 63476:
/*!***************************************************************************!*\
  !*** ./src/app/pages/administracao-ti/administracao-ti-routing.module.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdministracaoTiPageRoutingModule": () => (/* binding */ AdministracaoTiPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _administracao_ti_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./administracao-ti.page */ 6053);




const routes = [
    {
        path: '',
        component: _administracao_ti_page__WEBPACK_IMPORTED_MODULE_0__.AdministracaoTiPage
    }
];
let AdministracaoTiPageRoutingModule = class AdministracaoTiPageRoutingModule {
};
AdministracaoTiPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AdministracaoTiPageRoutingModule);



/***/ }),

/***/ 71776:
/*!*******************************************************************!*\
  !*** ./src/app/pages/administracao-ti/administracao-ti.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdministracaoTiPageModule": () => (/* binding */ AdministracaoTiPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 19200);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/button */ 76328);
/* harmony import */ var primeng_accordion__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/accordion */ 79854);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/ripple */ 84538);
/* harmony import */ var primeng_carousel__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/carousel */ 8707);
/* harmony import */ var _administracao_ti_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./administracao-ti-routing.module */ 63476);
/* harmony import */ var _administracao_ti_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./administracao-ti.page */ 6053);
/* harmony import */ var src_app_shared_directive_directives_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/directive/directives.module */ 9406);













let AdministracaoTiPageModule = class AdministracaoTiPageModule {
};
AdministracaoTiPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            primeng_button__WEBPACK_IMPORTED_MODULE_8__.ButtonModule,
            primeng_accordion__WEBPACK_IMPORTED_MODULE_9__.AccordionModule,
            primeng_ripple__WEBPACK_IMPORTED_MODULE_10__.RippleModule,
            primeng_carousel__WEBPACK_IMPORTED_MODULE_11__.CarouselModule,
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_12__.FontAwesomeModule,
            src_app_shared_directive_directives_module__WEBPACK_IMPORTED_MODULE_2__.DirectivesModule,
            _administracao_ti_routing_module__WEBPACK_IMPORTED_MODULE_0__.AdministracaoTiPageRoutingModule
        ],
        declarations: [_administracao_ti_page__WEBPACK_IMPORTED_MODULE_1__.AdministracaoTiPage]
    })
], AdministracaoTiPageModule);



/***/ }),

/***/ 6053:
/*!*****************************************************************!*\
  !*** ./src/app/pages/administracao-ti/administracao-ti.page.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdministracaoTiPage": () => (/* binding */ AdministracaoTiPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _administracao_ti_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./administracao-ti.page.html?ngResource */ 85400);
/* harmony import */ var _administracao_ti_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./administracao-ti.page.scss?ngResource */ 76477);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_app_shared_services_auth_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/auth/storage.service */ 54452);
/* harmony import */ var src_app_shared_services_toast_toast_message_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/toast/toast-message.service */ 12973);
/* harmony import */ var src_app_shared_utils_ExternalLink__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/utils/ExternalLink */ 54222);
/* harmony import */ var src_config_api_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/config/api.config */ 99038);
/* harmony import */ var src_app_shared_constants_role_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/constants/role.constants */ 34057);
/* harmony import */ var src_app_shared_constants_toast_constant__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/constants/toast.constant */ 98739);










let AdministracaoTiPage = class AdministracaoTiPage {
    constructor(storage, toastService) {
        this.storage = storage;
        this.toastService = toastService;
    }
    //TODO - PASSANDO TOKEN NO CABEÇALHO PARA AUTENTICAR
    ngOnInit() {
    }
    openSwagger() {
        const link = `${src_config_api_config__WEBPACK_IMPORTED_MODULE_5__.API_CONFIG.baseURL}/api`;
        src_app_shared_utils_ExternalLink__WEBPACK_IMPORTED_MODULE_4__.ExternalRedirect.externalLinkHandle(link);
    }
    openBullDashboard() {
        const { refresh_token, perfil_nome } = this.storage.getLocalUser();
        if (perfil_nome != src_app_shared_constants_role_constants__WEBPACK_IMPORTED_MODULE_6__.Role.ADMIN_TI) {
            this.toastService.presentToast({
                detalhe: `Apenas '${src_app_shared_constants_role_constants__WEBPACK_IMPORTED_MODULE_6__.Role.ADMIN_TI}' podem acessar esta funcionalidade`,
                titulo: `Não autorizado`,
                duracao: src_app_shared_constants_toast_constant__WEBPACK_IMPORTED_MODULE_7__.ToastEnum.shortDuration,
                gravidade: src_app_shared_constants_toast_constant__WEBPACK_IMPORTED_MODULE_7__.ToastPrimeSeverityEnum.ATENCAO,
            });
            return;
        }
        const link = `${src_config_api_config__WEBPACK_IMPORTED_MODULE_5__.API_CONFIG.baseURL}/queues/?authorization=${refresh_token}`;
        src_app_shared_utils_ExternalLink__WEBPACK_IMPORTED_MODULE_4__.ExternalRedirect.externalLinkHandle(link);
    }
    openStatus() {
        const { perfil_nome } = this.storage.getLocalUser();
        if (perfil_nome != src_app_shared_constants_role_constants__WEBPACK_IMPORTED_MODULE_6__.Role.ADMIN_TI) {
            this.toastService.presentToast({
                detalhe: `Apenas '${src_app_shared_constants_role_constants__WEBPACK_IMPORTED_MODULE_6__.Role.ADMIN_TI}' podem acessar esta funcionalidade`,
                titulo: `Não autorizado`,
                duracao: src_app_shared_constants_toast_constant__WEBPACK_IMPORTED_MODULE_7__.ToastEnum.shortDuration,
                gravidade: src_app_shared_constants_toast_constant__WEBPACK_IMPORTED_MODULE_7__.ToastPrimeSeverityEnum.ATENCAO,
            });
            return;
        }
        const link = `${src_config_api_config__WEBPACK_IMPORTED_MODULE_5__.API_CONFIG.baseURL}/api/status`;
        src_app_shared_utils_ExternalLink__WEBPACK_IMPORTED_MODULE_4__.ExternalRedirect.externalLinkHandle(link);
    }
};
AdministracaoTiPage.ctorParameters = () => [
    { type: src_app_shared_services_auth_storage_service__WEBPACK_IMPORTED_MODULE_2__.StorageService },
    { type: src_app_shared_services_toast_toast_message_service__WEBPACK_IMPORTED_MODULE_3__.ToastMessageService }
];
AdministracaoTiPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-administracao-ti',
        template: _administracao_ti_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_administracao_ti_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AdministracaoTiPage);



/***/ }),

/***/ 76477:
/*!******************************************************************************!*\
  !*** ./src/app/pages/administracao-ti/administracao-ti.page.scss?ngResource ***!
  \******************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZG1pbmlzdHJhY2FvLXRpLnBhZ2Uuc2NzcyJ9 */";

/***/ }),

/***/ 85400:
/*!******************************************************************************!*\
  !*** ./src/app/pages/administracao-ti/administracao-ti.page.html?ngResource ***!
  \******************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>ADM. T.I</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content appScrollTheme>\n  <div class=\"px-4 py-8 md:px-6 lg:px-8 h-full wall-background\"\n    >\n    <div class=\"text-primary font-medium mb-3\">Ferramentas</div>\n    <div class=\"text-900 text-2xl font-bold mb-3\">Ferramentas complementar do sistema</div>\n    <div class=\"grid mt-7\">\n\n      <div class=\"col-12 md:col-4\">\n        <div class=\"shadow-1 p-5 surface-card text-center\">\n          <div\n            class=\"border-circle surface-900 p-4 text-primary inline-flex justify-content-center align-items-center mb-4\">\n            <fa-icon class=\"text-7xl\" [icon]=\"['fas', 'bullseye']\"></fa-icon>\n          </div>\n          <div class=\"text-900 font-medium text-xl mb-4\">Swagger</div>\n          <div class=\"text-700 text-sm mb-4 line-height-3\">Documentação da API disponível via Swagger.</div>\n          <button pButton pRipple label=\"Acessar\" class=\"p-button-text font-bold\" (click)=\"openSwagger()\"></button>\n        </div>\n      </div>\n      \n      <div class=\"col-12 md:col-4\">\n        <div class=\"shadow-1 p-5 surface-card text-center\">\n          <div\n            class=\"border-circle surface-900 p-4 text-primary inline-flex justify-content-center align-items-center mb-4\">\n            <fa-icon class=\"text-7xl\" [icon]=\"['fab', 'watchman-monitoring']\"></fa-icon>\n          </div>\n          <div class=\"text-900 font-medium text-xl mb-4\">Status</div>\n          <div class=\"text-700 text-sm mb-4 line-height-3\">Monitoramento da API.</div>\n          <button pButton pRipple label=\"Acessar\" class=\"p-button-text font-bold\" (click)=\"openStatus()\"></button>\n        </div>\n      </div>\n      \n      <div class=\"col-12 md:col-4\">\n        <div class=\"shadow-1 p-5 surface-card text-center\">\n          <div\n            class=\"border-circle surface-900 p-4 text-primary inline-flex justify-content-center align-items-center mb-4\">\n            <fa-icon class=\"text-7xl\" [icon]=\"['far', 'file-code']\"></fa-icon>\n          </div>\n          <div class=\"text-900 font-medium text-xl mb-4\">Bull Dashboard</div>\n          <div class=\"text-700 text-sm mb-4 line-height-3\">Dashboard dos JOBs executados em background</div>\n          <button pButton pRipple label=\"Acessar\" class=\"p-button-text font-bold\" (click)=\"openBullDashboard()\"></button>\n        </div>\n      </div>\n\n    </div>\n  </div>\n</ion-content>";

/***/ }),

/***/ 79854:
/*!*************************************************************!*\
  !*** ./node_modules/primeng/fesm2020/primeng-accordion.mjs ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Accordion": () => (/* binding */ Accordion),
/* harmony export */   "AccordionModule": () => (/* binding */ AccordionModule),
/* harmony export */   "AccordionTab": () => (/* binding */ AccordionTab)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/animations */ 24851);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/api */ 14356);






function AccordionTab_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.header, " ");
  }
}
function AccordionTab_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function AccordionTab_ng_content_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0, 1, ["*ngIf", "hasHeaderFacet"]);
  }
}
function AccordionTab_ng_container_10_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function AccordionTab_ng_container_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AccordionTab_ng_container_10_ng_container_1_Template, 1, 0, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r3.contentTemplate);
  }
}
const _c0 = ["*", [["p-header"]]];
const _c1 = function (a0) {
  return {
    "p-accordion-tab-active": a0
  };
};
const _c2 = function (a0, a1) {
  return {
    "p-highlight": a0,
    "p-disabled": a1
  };
};
const _c3 = function (a0) {
  return {
    transitionParams: a0
  };
};
const _c4 = function (a1) {
  return {
    value: "visible",
    params: a1
  };
};
const _c5 = function (a1) {
  return {
    value: "hidden",
    params: a1
  };
};
const _c6 = ["*", "p-header"];
const _c7 = ["*"];
let idx = 0;
class AccordionTab {
  constructor(accordion, changeDetector) {
    this.changeDetector = changeDetector;
    this.cache = true;
    this.selectedChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.transitionOptions = '400ms cubic-bezier(0.86, 0, 0.07, 1)';
    this.id = `p-accordiontab-${idx++}`;
    this.accordion = accordion;
  }
  get selected() {
    return this._selected;
  }
  set selected(val) {
    this._selected = val;
    if (!this.loaded) {
      if (this._selected && this.cache) {
        this.loaded = true;
      }
      this.changeDetector.detectChanges();
    }
  }
  ngAfterContentInit() {
    this.templates.forEach(item => {
      switch (item.getType()) {
        case 'content':
          this.contentTemplate = item.template;
          break;
        case 'header':
          this.headerTemplate = item.template;
          break;
        default:
          this.contentTemplate = item.template;
          break;
      }
    });
  }
  toggle(event) {
    if (this.disabled) {
      return false;
    }
    let index = this.findTabIndex();
    if (this.selected) {
      this.selected = false;
      this.accordion.onClose.emit({
        originalEvent: event,
        index: index
      });
    } else {
      if (!this.accordion.multiple) {
        for (var i = 0; i < this.accordion.tabs.length; i++) {
          if (this.accordion.tabs[i].selected) {
            this.accordion.tabs[i].selected = false;
            this.accordion.tabs[i].selectedChange.emit(false);
            this.accordion.tabs[i].changeDetector.markForCheck();
          }
        }
      }
      this.selected = true;
      this.loaded = true;
      this.accordion.onOpen.emit({
        originalEvent: event,
        index: index
      });
    }
    this.selectedChange.emit(this.selected);
    this.accordion.updateActiveIndex();
    this.changeDetector.markForCheck();
    event.preventDefault();
  }
  findTabIndex() {
    let index = -1;
    for (var i = 0; i < this.accordion.tabs.length; i++) {
      if (this.accordion.tabs[i] == this) {
        index = i;
        break;
      }
    }
    return index;
  }
  get hasHeaderFacet() {
    return this.headerFacet && this.headerFacet.length > 0;
  }
  onKeydown(event) {
    if (event.which === 32 || event.which === 13) {
      this.toggle(event);
      event.preventDefault();
    }
  }
  ngOnDestroy() {
    this.accordion.tabs.splice(this.findTabIndex(), 1);
  }
}
AccordionTab.ɵfac = function AccordionTab_Factory(t) {
  return new (t || AccordionTab)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"]((0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => Accordion)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef));
};
AccordionTab.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: AccordionTab,
  selectors: [["p-accordionTab"]],
  contentQueries: function AccordionTab_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, primeng_api__WEBPACK_IMPORTED_MODULE_1__.Header, 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, primeng_api__WEBPACK_IMPORTED_MODULE_1__.PrimeTemplate, 4);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.headerFacet = _t);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.templates = _t);
    }
  },
  hostAttrs: [1, "p-element"],
  inputs: {
    header: "header",
    disabled: "disabled",
    cache: "cache",
    transitionOptions: "transitionOptions",
    selected: "selected"
  },
  outputs: {
    selectedChange: "selectedChange"
  },
  ngContentSelectors: _c6,
  decls: 11,
  vars: 28,
  consts: [[1, "p-accordion-tab", 3, "ngClass"], [1, "p-accordion-header", 3, "ngClass"], ["role", "tab", 1, "p-accordion-header-link", 3, "click", "keydown"], [1, "p-accordion-toggle-icon", 3, "ngClass"], ["class", "p-accordion-header-text", 4, "ngIf"], [4, "ngTemplateOutlet"], [4, "ngIf"], ["role", "region", 1, "p-toggleable-content"], [1, "p-accordion-content"], [1, "p-accordion-header-text"]],
  template: function AccordionTab_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "a", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AccordionTab_Template_a_click_2_listener($event) {
        return ctx.toggle($event);
      })("keydown", function AccordionTab_Template_a_keydown_2_listener($event) {
        return ctx.onKeydown($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AccordionTab_span_4_Template, 2, 1, "span", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AccordionTab_ng_container_5_Template, 1, 0, "ng-container", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AccordionTab_ng_content_6_Template, 1, 0, "ng-content", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7)(8, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, AccordionTab_ng_container_10_Template, 2, 1, "ng-container", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](15, _c1, ctx.selected));
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](17, _c2, ctx.selected, ctx.disabled));
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("tabindex", ctx.disabled ? null : 0)("id", ctx.id)("aria-controls", ctx.id + "-content")("aria-expanded", ctx.selected);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.selected ? ctx.accordion.collapseIcon : ctx.accordion.expandIcon);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.hasHeaderFacet);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx.headerTemplate);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.hasHeaderFacet);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@tabContent", ctx.selected ? _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](22, _c4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](20, _c3, ctx.transitionOptions)) : _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](26, _c5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](24, _c3, ctx.transitionOptions)));
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("id", ctx.id + "-content")("aria-hidden", !ctx.selected)("aria-labelledby", ctx.id);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.contentTemplate && (ctx.cache ? ctx.loaded : ctx.selected));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgTemplateOutlet],
  styles: [".p-accordion-header-link{cursor:pointer;display:flex;align-items:center;-webkit-user-select:none;user-select:none;position:relative;text-decoration:none}.p-accordion-header-link:focus{z-index:1}.p-accordion-header-text{line-height:1}.p-accordion .p-toggleable-content{overflow:hidden}.p-accordion .p-accordion-tab-active>.p-toggleable-content:not(.ng-animating){overflow:inherit}\n"],
  encapsulation: 2,
  data: {
    animation: [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.trigger)('tabContent', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.state)('hidden', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.style)({
      height: '0'
    })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.state)('visible', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.style)({
      height: '*'
    })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.transition)('visible <=> hidden', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.animate)('{{transitionParams}}')]), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.transition)('void => *', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.animate)(0))])]
  },
  changeDetection: 0
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AccordionTab, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'p-accordionTab',
      template: `
        <div class="p-accordion-tab" [ngClass]="{ 'p-accordion-tab-active': selected }">
            <div class="p-accordion-header" [ngClass]="{ 'p-highlight': selected, 'p-disabled': disabled }">
                <a role="tab" class="p-accordion-header-link" (click)="toggle($event)" (keydown)="onKeydown($event)" [attr.tabindex]="disabled ? null : 0" [attr.id]="id" [attr.aria-controls]="id + '-content'" [attr.aria-expanded]="selected">
                    <span class="p-accordion-toggle-icon" [ngClass]="selected ? accordion.collapseIcon : accordion.expandIcon"></span>
                    <span class="p-accordion-header-text" *ngIf="!hasHeaderFacet">
                        {{ header }}
                    </span>
                    <ng-container *ngTemplateOutlet="headerTemplate"></ng-container>
                    <ng-content select="p-header" *ngIf="hasHeaderFacet"></ng-content>
                </a>
            </div>
            <div
                [attr.id]="id + '-content'"
                class="p-toggleable-content"
                [@tabContent]="selected ? { value: 'visible', params: { transitionParams: transitionOptions } } : { value: 'hidden', params: { transitionParams: transitionOptions } }"
                role="region"
                [attr.aria-hidden]="!selected"
                [attr.aria-labelledby]="id"
            >
                <div class="p-accordion-content">
                    <ng-content></ng-content>
                    <ng-container *ngIf="contentTemplate && (cache ? loaded : selected)">
                        <ng-container *ngTemplateOutlet="contentTemplate"></ng-container>
                    </ng-container>
                </div>
            </div>
        </div>
    `,
      animations: [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.trigger)('tabContent', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.state)('hidden', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.style)({
        height: '0'
      })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.state)('visible', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.style)({
        height: '*'
      })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.transition)('visible <=> hidden', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.animate)('{{transitionParams}}')]), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.transition)('void => *', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.animate)(0))])],
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      host: {
        class: 'p-element'
      },
      styles: [".p-accordion-header-link{cursor:pointer;display:flex;align-items:center;-webkit-user-select:none;user-select:none;position:relative;text-decoration:none}.p-accordion-header-link:focus{z-index:1}.p-accordion-header-text{line-height:1}.p-accordion .p-toggleable-content{overflow:hidden}.p-accordion .p-accordion-tab-active>.p-toggleable-content:not(.ng-animating){overflow:inherit}\n"]
    }]
  }], function () {
    return [{
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => Accordion)]
      }]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }];
  }, {
    header: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    disabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    cache: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    selectedChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    transitionOptions: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    headerFacet: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren,
      args: [primeng_api__WEBPACK_IMPORTED_MODULE_1__.Header]
    }],
    templates: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren,
      args: [primeng_api__WEBPACK_IMPORTED_MODULE_1__.PrimeTemplate]
    }],
    selected: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();
class Accordion {
  constructor(el, changeDetector) {
    this.el = el;
    this.changeDetector = changeDetector;
    this.onClose = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.onOpen = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.expandIcon = 'pi pi-fw pi-chevron-right';
    this.collapseIcon = 'pi pi-fw pi-chevron-down';
    this.activeIndexChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.tabs = [];
  }
  ngAfterContentInit() {
    this.initTabs();
    this.tabListSubscription = this.tabList.changes.subscribe(_ => {
      this.initTabs();
    });
  }
  initTabs() {
    this.tabs = this.tabList.toArray();
    this.updateSelectionState();
    this.changeDetector.markForCheck();
  }
  getBlockableElement() {
    return this.el.nativeElement.children[0];
  }
  get activeIndex() {
    return this._activeIndex;
  }
  set activeIndex(val) {
    this._activeIndex = val;
    if (this.preventActiveIndexPropagation) {
      this.preventActiveIndexPropagation = false;
      return;
    }
    this.updateSelectionState();
  }
  updateSelectionState() {
    if (this.tabs && this.tabs.length && this._activeIndex != null) {
      for (let i = 0; i < this.tabs.length; i++) {
        let selected = this.multiple ? this._activeIndex.includes(i) : i === this._activeIndex;
        let changed = selected !== this.tabs[i].selected;
        if (changed) {
          this.tabs[i].selected = selected;
          this.tabs[i].selectedChange.emit(selected);
          this.tabs[i].changeDetector.markForCheck();
        }
      }
    }
  }
  updateActiveIndex() {
    let index = this.multiple ? [] : null;
    this.tabs.forEach((tab, i) => {
      if (tab.selected) {
        if (this.multiple) {
          index.push(i);
        } else {
          index = i;
          return;
        }
      }
    });
    this.preventActiveIndexPropagation = true;
    this.activeIndexChange.emit(index);
  }
  ngOnDestroy() {
    if (this.tabListSubscription) {
      this.tabListSubscription.unsubscribe();
    }
  }
}
Accordion.ɵfac = function Accordion_Factory(t) {
  return new (t || Accordion)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef));
};
Accordion.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: Accordion,
  selectors: [["p-accordion"]],
  contentQueries: function Accordion_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, AccordionTab, 4);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.tabList = _t);
    }
  },
  hostAttrs: [1, "p-element"],
  inputs: {
    multiple: "multiple",
    style: "style",
    styleClass: "styleClass",
    expandIcon: "expandIcon",
    collapseIcon: "collapseIcon",
    activeIndex: "activeIndex"
  },
  outputs: {
    onClose: "onClose",
    onOpen: "onOpen",
    activeIndexChange: "activeIndexChange"
  },
  ngContentSelectors: _c7,
  decls: 2,
  vars: 4,
  consts: [["role", "tablist", 3, "ngClass", "ngStyle"]],
  template: function Accordion_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.styleClass);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", "p-accordion p-component")("ngStyle", ctx.style);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgStyle],
  encapsulation: 2,
  changeDetection: 0
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Accordion, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'p-accordion',
      template: `
        <div [ngClass]="'p-accordion p-component'" [ngStyle]="style" [class]="styleClass" role="tablist">
            <ng-content></ng-content>
        </div>
    `,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      host: {
        class: 'p-element'
      }
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }];
  }, {
    multiple: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    onClose: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onOpen: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    style: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    styleClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    expandIcon: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    collapseIcon: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    activeIndexChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    tabList: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren,
      args: [AccordionTab]
    }],
    activeIndex: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();
class AccordionModule {}
AccordionModule.ɵfac = function AccordionModule_Factory(t) {
  return new (t || AccordionModule)();
};
AccordionModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: AccordionModule,
  declarations: [Accordion, AccordionTab],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule],
  exports: [Accordion, AccordionTab, primeng_api__WEBPACK_IMPORTED_MODULE_1__.SharedModule]
});
AccordionModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, primeng_api__WEBPACK_IMPORTED_MODULE_1__.SharedModule]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AccordionModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule],
      exports: [Accordion, AccordionTab, primeng_api__WEBPACK_IMPORTED_MODULE_1__.SharedModule],
      declarations: [Accordion, AccordionTab]
    }]
  }], null, null);
})();

/**
 * Generated bundle index. Do not edit.
 */



/***/ })

}]);
//# sourceMappingURL=src_app_pages_administracao-ti_administracao-ti_module_ts.js.map