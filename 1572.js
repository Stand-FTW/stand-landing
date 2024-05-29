(self["webpackChunkcom_standftw_landingpage"] = self["webpackChunkcom_standftw_landingpage"] || []).push([[1572],{

/***/ 845:
/*!***************************************************!*\
  !*** ./src/app/pages/home/home-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageRoutingModule": () => (/* binding */ HomePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 5353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9535);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 5006);




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], HomePageRoutingModule);



/***/ }),

/***/ 1572:
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageModule": () => (/* binding */ HomePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 5353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 3324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 4595);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @ngx-translate/core */ 4236);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 680);
/* harmony import */ var primeng_splitter__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! primeng/splitter */ 6893);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/button */ 3103);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/toast */ 3666);
/* harmony import */ var primeng_menu__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/menu */ 5384);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/ripple */ 4796);
/* harmony import */ var primeng_paginator__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! primeng/paginator */ 7207);
/* harmony import */ var primeng_avatar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/avatar */ 7642);
/* harmony import */ var primeng_inputswitch__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/inputswitch */ 2938);
/* harmony import */ var primeng_styleclass__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/styleclass */ 9162);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/inputtext */ 472);
/* harmony import */ var primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/inputtextarea */ 5010);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home-routing.module */ 845);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page */ 5006);
/* harmony import */ var _shared_directive_directives_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/directive/directives.module */ 9513);
/* harmony import */ var _shared_pipes_pipe_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/pipes/pipe.module */ 9502);






















let HomePageModule = class HomePageModule {
};
HomePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            primeng_button__WEBPACK_IMPORTED_MODULE_9__.ButtonModule,
            primeng_ripple__WEBPACK_IMPORTED_MODULE_10__.RippleModule,
            primeng_inputtext__WEBPACK_IMPORTED_MODULE_11__.InputTextModule,
            primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_12__.InputTextareaModule,
            primeng_toast__WEBPACK_IMPORTED_MODULE_13__.ToastModule,
            primeng_avatar__WEBPACK_IMPORTED_MODULE_14__.AvatarModule,
            primeng_inputswitch__WEBPACK_IMPORTED_MODULE_15__.InputSwitchModule,
            primeng_styleclass__WEBPACK_IMPORTED_MODULE_16__.StyleClassModule,
            primeng_button__WEBPACK_IMPORTED_MODULE_9__.ButtonModule,
            primeng_ripple__WEBPACK_IMPORTED_MODULE_10__.RippleModule,
            primeng_menu__WEBPACK_IMPORTED_MODULE_17__.MenuModule,
            primeng_paginator__WEBPACK_IMPORTED_MODULE_18__.PaginatorModule,
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_19__.FontAwesomeModule,
            primeng_splitter__WEBPACK_IMPORTED_MODULE_20__.SplitterModule,
            _home_routing_module__WEBPACK_IMPORTED_MODULE_0__.HomePageRoutingModule,
            _shared_directive_directives_module__WEBPACK_IMPORTED_MODULE_2__.DirectivesModule,
            _shared_pipes_pipe_module__WEBPACK_IMPORTED_MODULE_3__.PipeModule,
        ],
        declarations: [
            _home_page__WEBPACK_IMPORTED_MODULE_1__.HomePage,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_21__.TranslatePipe,
        ]
    })
], HomePageModule);



/***/ }),

/***/ 5006:
/*!*****************************************!*\
  !*** ./src/app/pages/home/home.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePage": () => (/* binding */ HomePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! tslib */ 5353);
/* harmony import */ var _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./home.page.html */ 8102);
/* harmony import */ var _home_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page.scss */ 7603);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 9535);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 8984);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ngx-translate/core */ 4236);
/* harmony import */ var _shared_services_preferences_preferences_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/preferences/preferences.service */ 1405);
/* harmony import */ var _shared_services_mocks_certifications_certifications_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/services/mocks/certifications/certifications.service */ 423);
/* harmony import */ var _shared_utils_ExternalLink__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/utils/ExternalLink */ 3301);
/* harmony import */ var _shared_services_mocks_services_services_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../shared/services/mocks/services/services.service */ 3701);
/* harmony import */ var _shared_services_mocks_solutions_solutions_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../shared/services/mocks/solutions/solutions.service */ 4897);
/* harmony import */ var _shared_services_mocks_checklist_checklist_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../shared/services/mocks/checklist/checklist.service */ 1188);
/* harmony import */ var _shared_services_toast_toast_message_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../../shared/services/toast/toast-message.service */ 8735);
/* harmony import */ var _shared_services_mocks_why_stand_why_stand_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../../shared/services/mocks/why-stand/why-stand.service */ 7853);
/* harmony import */ var _shared_constants_toast_constant__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./../../shared/constants/toast.constant */ 9875);
/* harmony import */ var _shared_constants_solutions_constant__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./../../shared/constants/solutions.constant */ 2956);

















let HomePage = class HomePage {
    constructor(route, preferencesService, servicesService, solutionsService, certificationsService, checklistService, whyStandService, toastService, translateService) {
        this.route = route;
        this.preferencesService = preferencesService;
        this.servicesService = servicesService;
        this.solutionsService = solutionsService;
        this.certificationsService = certificationsService;
        this.checklistService = checklistService;
        this.whyStandService = whyStandService;
        this.toastService = toastService;
        this.translateService = translateService;
        this.services = [];
        this.solutions = [];
        this.checklist = [];
        this.certifications = [];
        this.whyStandList = [];
        this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_12__.Subscription();
    }
    // Fazer o formulario e acertar os botoes para as proximas paginas
    ngOnInit() {
        const theme = this.preferencesService.getThemePreference();
        this.heroImg = `assets/imgs/logos/Stand FTW - Cover.png`;
        this.changeHeroImg();
        this.loadServices();
        this.loadSolutions();
        this.loadChecklist();
        this.loadWhyStand();
        this.loadCertifications();
    }
    ngOnDestroy() {
        this.subscriptions.unsubscribe();
    }
    loadServices() {
        this.servicesService.list()
            .subscribe(data => {
            this.services = data;
        });
    }
    loadSolutions() {
        this.solutionsService.list()
            .subscribe(data => {
            this.solutions = data;
        });
    }
    loadChecklist() {
        this.checklistService.list()
            .subscribe(data => {
            this.checklist = data;
        });
    }
    loadCertifications() {
        this.certificationsService.list()
            .subscribe(data => {
            this.certifications = data;
        });
    }
    loadWhyStand() {
        this.whyStandService.list()
            .subscribe(data => {
            this.whyStandList = data;
        });
    }
    openLink(url) {
        _shared_utils_ExternalLink__WEBPACK_IMPORTED_MODULE_4__.ExternalRedirect.externalLinkHandle(url);
    }
    ionViewWillEnter() {
    }
    changeHeroImg() {
        this.preferencesService.themeSubscriber.subscribe(theme => {
            // this.heroImg = `assets/imgs/fotos/my-github-${theme}.png`;
        });
    }
    navigate(url) {
        this.route.navigateByUrl(url);
    }
    changeWhySide(index) {
        return !(index % 2 == 0);
    }
    knowMore(solution) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__awaiter)(this, void 0, void 0, function* () {
            const { id } = solution;
            switch (id) {
                case _shared_constants_solutions_constant__WEBPACK_IMPORTED_MODULE_11__.SolutionsEnum.CORE:
                    this.route.navigateByUrl(id);
                    break;
                default:
                    const titulo = yield this.translateService.get('toast.home-know-more.title-warning').toPromise();
                    const detalhe = yield this.translateService.get('toast.home-know-more.detail-warning').toPromise();
                    this.toastService.presentToast({
                        detalhe,
                        titulo,
                        duracao: _shared_constants_toast_constant__WEBPACK_IMPORTED_MODULE_10__.ToastEnum.shortDuration,
                        gravidade: _shared_constants_toast_constant__WEBPACK_IMPORTED_MODULE_10__.ToastPrimeSeverityEnum.ATENCAO,
                    });
            }
        });
    }
};
HomePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_14__.Router },
    { type: _shared_services_preferences_preferences_service__WEBPACK_IMPORTED_MODULE_2__.PreferencesService },
    { type: _shared_services_mocks_services_services_service__WEBPACK_IMPORTED_MODULE_5__.ServicesService },
    { type: _shared_services_mocks_solutions_solutions_service__WEBPACK_IMPORTED_MODULE_6__.SolutionsService },
    { type: _shared_services_mocks_certifications_certifications_service__WEBPACK_IMPORTED_MODULE_3__.CertificationsService },
    { type: _shared_services_mocks_checklist_checklist_service__WEBPACK_IMPORTED_MODULE_7__.ChecklistService },
    { type: _shared_services_mocks_why_stand_why_stand_service__WEBPACK_IMPORTED_MODULE_9__.WhyStandService },
    { type: _shared_services_toast_toast_message_service__WEBPACK_IMPORTED_MODULE_8__.ToastMessageService },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__.TranslateService }
];
HomePage = (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_16__.Component)({
        selector: 'app-home',
        template: _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_home_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], HomePage);



/***/ }),

/***/ 2956:
/*!********************************************************!*\
  !*** ./src/app/shared/constants/solutions.constant.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SolutionsEnum": () => (/* binding */ SolutionsEnum)
/* harmony export */ });
var SolutionsEnum;
(function (SolutionsEnum) {
    SolutionsEnum["CORE"] = "stand-core";
    SolutionsEnum["CONDS"] = "stand-conds";
    SolutionsEnum["LINK"] = "stand-link";
})(SolutionsEnum || (SolutionsEnum = {}));


/***/ }),

/***/ 423:
/*!********************************************************************************!*\
  !*** ./src/app/shared/services/mocks/certifications/certifications.service.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CertificationsService": () => (/* binding */ CertificationsService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 5353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 1887);
/* harmony import */ var _config_api_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../config/api.config */ 5848);




let CertificationsService = class CertificationsService {
    constructor(http) {
        this.http = http;
    }
    list() {
        return this.http.get(`${_config_api_config__WEBPACK_IMPORTED_MODULE_0__.ASSETS_CONFIG.baseURL}/certifications.json`);
    }
};
CertificationsService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient }
];
CertificationsService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], CertificationsService);



/***/ }),

/***/ 1188:
/*!**********************************************************************!*\
  !*** ./src/app/shared/services/mocks/checklist/checklist.service.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChecklistService": () => (/* binding */ ChecklistService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 5353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 1887);
/* harmony import */ var _config_api_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../config/api.config */ 5848);




let ChecklistService = class ChecklistService {
    constructor(http) {
        this.http = http;
    }
    list() {
        return this.http.get(`${_config_api_config__WEBPACK_IMPORTED_MODULE_0__.ASSETS_CONFIG.baseURL}/checklist.json`);
    }
};
ChecklistService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient }
];
ChecklistService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], ChecklistService);



/***/ }),

/***/ 3701:
/*!********************************************************************!*\
  !*** ./src/app/shared/services/mocks/services/services.service.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ServicesService": () => (/* binding */ ServicesService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 5353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 1887);
/* harmony import */ var _config_api_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../config/api.config */ 5848);




let ServicesService = class ServicesService {
    constructor(http) {
        this.http = http;
    }
    list() {
        return this.http.get(`${_config_api_config__WEBPACK_IMPORTED_MODULE_0__.ASSETS_CONFIG.baseURL}/services.json`);
    }
};
ServicesService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient }
];
ServicesService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], ServicesService);



/***/ }),

/***/ 4897:
/*!**********************************************************************!*\
  !*** ./src/app/shared/services/mocks/solutions/solutions.service.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SolutionsService": () => (/* binding */ SolutionsService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 5353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 1887);
/* harmony import */ var _config_api_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../config/api.config */ 5848);




let SolutionsService = class SolutionsService {
    constructor(http) {
        this.http = http;
    }
    list() {
        return this.http.get(`${_config_api_config__WEBPACK_IMPORTED_MODULE_0__.ASSETS_CONFIG.baseURL}/solutions.json`);
    }
};
SolutionsService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient }
];
SolutionsService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], SolutionsService);



/***/ }),

/***/ 7853:
/*!**********************************************************************!*\
  !*** ./src/app/shared/services/mocks/why-stand/why-stand.service.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WhyStandService": () => (/* binding */ WhyStandService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 5353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 1887);
/* harmony import */ var _config_api_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../config/api.config */ 5848);




let WhyStandService = class WhyStandService {
    constructor(http) {
        this.http = http;
    }
    list() {
        return this.http.get(`${_config_api_config__WEBPACK_IMPORTED_MODULE_0__.ASSETS_CONFIG.baseURL}/why-stand.json`);
    }
};
WhyStandService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient }
];
WhyStandService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], WhyStandService);



/***/ }),

/***/ 7603:
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.page.scss ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-button {\n  min-width: 260px !important;\n  max-width: 260px !important;\n  overflow-wrap: break-word;\n  word-break: break-all;\n}\n\n.crop {\n  height: 250px;\n  overflow: hidden;\n}\n\n.crop img {\n  width: 500px;\n  margin: 0px 0px 0px 0px;\n}\n\n.solution-img {\n  width: 200px;\n  height: 180px;\n}\n\n.image-phase {\n  width: 284px;\n  height: 284px;\n  border-radius: 30%;\n}\n\n.contact-border {\n  border-radius: 5%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksMkJBQUE7RUFDQSwyQkFBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7QUFDSjs7QUFFQTtFQUNJLGFBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUVBO0VBQ0ksWUFBQTtFQUNBLHVCQUFBO0FBQ0o7O0FBRUE7RUFDSSxZQUFBO0VBQ0EsYUFBQTtBQUNKOztBQUVBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUVBO0VBQ0ksaUJBQUE7QUFDSiIsImZpbGUiOiJob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1idXR0b24ge1xuICAgIG1pbi13aWR0aDogMjYwcHggIWltcG9ydGFudDtcbiAgICBtYXgtd2lkdGg6IDI2MHB4ICFpbXBvcnRhbnQ7XG4gICAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcbiAgICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XG59XG5cbi5jcm9wIHtcbiAgICBoZWlnaHQ6IDI1MHB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5jcm9wIGltZyB7XG4gICAgd2lkdGg6IDUwMHB4O1xuICAgIG1hcmdpbjogMHB4IDBweCAwcHggMHB4O1xufVxuXG4uc29sdXRpb24taW1nIHtcbiAgICB3aWR0aDogMjAwcHg7XG4gICAgaGVpZ2h0OiAxODBweDtcbn1cblxuLmltYWdlLXBoYXNlIHtcbiAgICB3aWR0aDogMjg0cHg7XG4gICAgaGVpZ2h0OiAyODRweDtcbiAgICBib3JkZXItcmFkaXVzOiAzMCU7XG59XG5cbi5jb250YWN0LWJvcmRlciB7XG4gICAgYm9yZGVyLXJhZGl1czogNSU7XG59Il19 */");

/***/ }),

/***/ 8102:
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.page.html ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>{{ 'app.menu-route-home' | translate }}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n\n<ion-content appScrollTheme>\n\n  <div id=\"top\" class=\"grid grid-nogutter surface-section text-800 border-bottom-1 pb-2\">\n    <div class=\"col-12 md:col-6 p-6 text-center md:text-left flex align-items-center \">\n      <section>\n        <span class=\"block text-6xl font-bold mb-1 \">{{ 'home.title-welcome' | translate }}</span>\n        <div class=\"text-6xl text-primary font-bold mb-3\">{{ 'home.subtitle-welcome' | translate }}.</div>\n        <p class=\"mt-0 mb-4 text-700 line-height-3\">{{ 'home.title-description' | translate }}.</p>\n      </section>\n    </div>\n    <div class=\"col-12 md:col-6 overflow-hidden\">\n      <img src=\"{{ heroImg }}\" alt=\"Image\" class=\"md:ml-auto block md:h-full border-1 surface-border\t\t\"\n        style=\"clip-path: polygon(8% 0, 100% 0%, 100% 100%, 0 100%)\">\n    </div>\n  </div>\n\n  <div id=\"services\" class=\"surface-section px-4 py-8 md:px-6 lg:px-8 border-bottom-1\">\n    <div class=\"text-center\">\n      <div class=\"mb-3 font-bold text-4xl\">\n        <span class=\"text-900\">{{ 'home.develop-primary' | translate }}, </span>\n        <span class=\"text-primary\">{{ 'home.develop-secondary' | translate }}.</span>\n      </div>\n      <div class=\"grid\">\n        <div *ngFor=\"let s of services\" class=\"col-12 md:col-4 mb-4 px-5\">\n          <span class=\"p-3 shadow-2 mb-3 inline-block\" style=\"border-radius: 10px\">\n            <fa-icon class=\"text-4xl text-primary\" style=\"font-size: 20px;\" [icon]=\"[s.icon_type, s.icon]\">\n            </fa-icon>\n          </span>\n          <div class=\"text-900 mb-3 font-medium\">{{ s.title | translate }}.</div>\n          <span class=\"text-700 text-sm line-height-3\">{{ s.description | translate }}.</span>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div id=\"solutions\" class=\"surface-section px-4 py-8 md:px-6 lg:px-8 border-bottom-1\">\n    <div class=\"font-bold text-900 text-3xl mb-3 text-center \">{{ 'home.solutions-banner-title' | translate }}</div>\n    <div class=\"text-700 text-center mb-3\">{{ 'home.solutions-banner-subtitle' | translate }}</div>\n    <div class=\"flex flex-wrap\">\n      <div *ngFor=\"let s of solutions\" class=\"w-full lg:w-6 xl:w-4 p-5\">\n        <div class=\"text-center m-auto\">\n          <img [src]=\"s.image\" alt=\"Image\" class=\"solution-img border-2 border-solid border-circle border-primary\t\">\n        </div>\n        <div class=\"mt-3 mb-2 font-medium text-900\">\n          <span class=\"text-xl text-primary\">{{ s.title | translate }}</span> - <span class=\"text-lg\">{{ s.subtitle |\n            translate }}</span>\n        </div>\n        <span class=\"text-700 line-height-3\">{{ s.description | translate }}.</span>\n        <a tabindex=\"0\"\n          class=\"text-blue-600 hover:text-blue-800 font-medium flex align-items-center mt-2 justify-content-end cursor-pointer\"\n          (click)=\"knowMore(s)\">\n          <span class=\"\">{{ 'home.solutions-more' | translate }}</span>\n          <i class=\"pi pi-arrow-right ml-3\"></i>\n        </a>\n      </div>\n    </div>\n  </div>\n\n  <div id=\"checklist\" class=\"surface-section px-4 py-8 md:px-6 lg:px-8\">\n    <div class=\"text-primary text-center mb-3\">{{ 'home.check-subtitle' | translate }}!</div>\n    <div class=\"font-bold text-5xl text-900 text-center mb-6\">{{ 'home.check-title' | translate }}</div>\n    <div class=\"grid grid-nogutter\">\n      <div *ngFor=\"let c of checklist\" class=\"col-12 md:col-6 lg:col-3 p-3\">\n        <div style=\"height: 205px;\"\n          class=\"surface-card border-1 border-round border-primary\ttext-center p-5 border-round flex flex-column\">\n          <i class=\"text-green-500 pi pi-check-circle text-3xl block mb-4\"></i>\n          <span class=\"text-900 text-xl mt-3 font-medium\">{{ c.title | translate }}</span>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div id=\"enpower\" class=\"surface-section px-4 pb-8 md:px-6 lg:px-8 border-bottom-1\">\n    <ng-container *ngIf=\"false\">\n      <div class=\"p-6 shadow-2 flex flex-column md:flex-row align-items-center justify-content-between\"\n        style=\"border-radius: 1rem; background: linear-gradient(135deg, var(--gradient-begin) 0%, var(--gradient-ending) 100%)\">\n        <div class=\"pr-6\">\n          <div class=\" font-medium text-xl mb-3\">{{ 'home.enpower-banner-subtitle' | translate }}</div>\n          <div class=\" font-medium text-5xl\">{{ 'home.enpower-banner-title' | translate }}</div>\n        </div>\n        <div class=\"mt-4 mr-auto md:mt-0 md:mr-0\">\n          <button pButton pRipple label=\"{{ 'home.enpower-banner-button' | translate }}\" class=\"spy-btn font-bold px-5 py-3 p-button-secondary p-button-rounded \n          surface-0 text-900 white-space-nowrap\" (click)=\"navigate('applications')\"></button>\n        </div>\n      </div>\n    </ng-container>\n  </div>\n\n  <div id=\"why\" class=\"surface-section px-4 py-8 md:px-6 lg:px-8 overflow-hidden border-bottom-1\">\n    <div class=\"font-bold text-900 text-3xl mb-3 text-center\">{{ 'home.why-stand-title' | translate }}</div>\n    <div class=\"text-700 text-center mb-6 line-height-3\">{{ 'home.why-stand-subtitle-1' | translate }}\n      <div>{{ 'home.why-stand-subtitle-2' | translate }}.</div>\n    </div>\n\n    <div *ngFor=\"let item of whyStandList; index as i\" class=\"flex lg:justify-content-center mb-5\">\n      <ng-container *ngIf=\"!changeWhySide(i)\">\n        <div class=\"py-3 pr-8 pl-3 w-30rem hidden lg:block\">\n          <img [src]=\"item.image\" alt=\"Image\" class=\"w-full mr-8 image-phase border-2\" [ngClass]=\"item.border_color\">\n        </div>\n      </ng-container>\n      <ng-container *ngIf=\"changeWhySide(i)\">\n        <div class=\"py-3 pl-5 pr-3 lg:pr-8 lg:pl-3 lg:w-30rem flex-order-1 lg:flex-order-0\">\n          <div class=\"text-900 text-xl mb-2 font-medium\">{{ item.title | translate }}</div>\n          <span class=\"block text-700 line-height-3 mb-3\">{{ item.subtitle | translate }}</span>\n          <div class=\"pt-3 border-top-1 border-300\">\n            <div class=\"mb-2 line-height-3\"><span class=\"text-900 font-medium\">{{ item.description | translate }}</span>\n            </div>\n          </div>\n          <img [src]=\"item.image\" alt=\"Image\" class=\"w-full mt-3 block lg:hidden image-phase border-2\"\n            [ngClass]=\"item.border_color\">\n        </div>\n      </ng-container>\n\n      <div class=\"flex flex-column align-items-center w-2rem\">\n        <span [ngClass]=\"item.color\" class=\"text-0 flex align-items-center justify-content-center border-circle\"\n          style=\"min-width:2.5rem; min-height: 2.5rem\">{{ i + 1}}</span>\n        <div class=\"h-full \" [ngClass]=\"item.color\" style=\"width: 2px; min-height: 4rem\"></div>\n      </div>\n\n      <ng-container *ngIf=\"!changeWhySide(i)\">\n        <div class=\"py-3 pl-5 lg:pl-8 pl-3 lg:w-30rem\">\n          <div class=\"text-900 text-xl mb-2 font-medium\">{{ item.title | translate }}</div>\n          <span class=\"block text-700 line-height-3 mb-3\">{{ item.subtitle | translate }}.</span>\n          <div class=\"pt-3 border-top-1 border-300\">\n            <div class=\"mb-2 line-height-3\"><span class=\"text-900 font-medium\">{{ item.description | translate }}</span>\n            </div>\n          </div>\n          <img [src]=\"item.image\" alt=\"Image\" class=\"w-full mt-3 block lg:hidden image-phase border-2\"\n            [ngClass]=\"item.border_color\">\n        </div>\n      </ng-container>\n      <ng-container *ngIf=\"changeWhySide(i)\">\n        <div class=\"py-3 pl-8 pr-3 w-30rem hidden lg:block flex-order-2\">\n          <img [src]=\"item.image\" alt=\"Image\" class=\"w-full mr-8 image-phase border-2\" [ngClass]=\"item.border_color\">\n        </div>\n      </ng-container>\n    </div>\n  </div>\n\n  <!-- \n  <div id=\"roadmap\" class=\"surface-ground px-4 py-8 md:px-6 lg:px-8 border-bottom-1\">\n    <div>\n      <div class=\"text-900 font-bold text-4xl line-height-3 mb-3 text-center\">{{ 'home.roadmap-about-title' | translate\n        }}</div>\n      <p class=\"text-600 line-height-3 text-lg m-0 mb-6 text-center\">{{ 'home.roadmap-about-description' | translate }}.\n      </p>\n\n      <div class=\"grid surface-card shadow-2  text-center\" style=\"border-radius: 10px\">\n        <div class=\"col-12 md:col-4 px-5 py-5\">\n          <fa-icon class=\"text-4xl text-primary mb-3\" [icon]=\"['fas', 'graduation-cap']\"></fa-icon>\n          <div class=\"text-900 font-bold text-4xl mb-3 line-height-3\">{{ 'home.roadmap-graduate-title' | translate\n            }}</div>\n          <p class=\"text-700 m-0\">{{ 'home.roadmap-graduate-description' | translate }}</p>\n        </div>\n        <div class=\"col-12 md:col-4 px-5 py-5\">\n          <fa-icon class=\"text-4xl text-primary mb-3\" [icon]=\"['fas', 'cloud']\"></fa-icon>\n          <div class=\"text-900 font-bold text-4xl mb-3 line-height-3\">{{ 'home.roadmap-specialist-title' | translate\n            }}</div>\n          <p class=\"text-700 m-0\">{{ 'home.roadmap-specialist-description' | translate }}</p>\n        </div>\n        <div class=\"col-12 md:col-4 px-5 py-5\">\n          <fa-icon class=\"text-4xl text-primary mb-3\" [icon]=\"['fas', '3']\"></fa-icon>\n          <div class=\"text-900 font-bold text-4xl mb-3 line-height-3\">{{ 'home.roadmap-experience-title' | translate\n            }}</div>\n          <p class=\"text-700 m-0\">{{ 'home.roadmap-experience-description' | translate }}</p>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div id=\"certifications\" class=\"surface-ground px-4 py-8 md:px-6 lg:px-8 border-bottom-1\">\n    <div>\n      <div class=\"font-bold text-4xl text-900 mb-5 text-center\">{{ 'home.certification-title' | translate}}</div>\n      <div class=\"grid nogutter\">\n        <div *ngFor=\"let c of certifications\" class=\"col-12 lg:col-4 p-3\">\n          <div class=\"shadow-2 border-round h-full surface-card\">\n            <div class=\"crop\">\n              <img src=\"{{ c.img }}\" alt=\"Image\" class=\"block w-full border-round-top \">\n            </div>\n            <div class=\"p-4\">\n              <span class=\"block font-medium text-primary mb-3\">{{ c.title | translate }}</span>\n              <div class=\"text-xl text-900 font-medium mb-3 line-height-3 \">{{ c.subtitle | translate }}</div>\n              <div class=\"text-sm line-height-3 mb-3 text-700\">{{ c.description | translate }}.</div>\n              <div class=\"flex\">\n                <div class=\"ml-2\">\n                  <div class=\"text-lg flex align-items-center  text-700\">\n                    <i class=\"pi pi-calendar mr-1 text-lg\"></i>\n                    <span>{{c.issue_date | date: 'MM/yy' }}</span>\n                  </div>\n                </div>\n              </div>\n              <div class=\"flex justify-content-end\">\n                <div class=\"ml-2 \">\n                  <div class=\"text-xl flex align-items-center text-primary cursor-pointer\"\n                    (click)=\"openLink(c.external_link)\">\n                    <span>{{ 'home.certification-detail' | translate }}</span>\n                    <i class=\"ml-1 pi pi-external-link text-right\"></i>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n-->\n  <div id=\"contact\" class=\"surface-ground px-4 py-6  \t\">\n    <div class=\"grid grid-nogutter \">\n      <div class=\"col-12 bg-no-repeat bg-cover p-8 border-2 border-900\"\n        style=\"background-image: url('assets/imgs/outros/talking to me.png')\">\n        <div class=\" text-2xl font-medium mb-6 text-white\">{{ 'home.contact-title' | translate}}</div>\n        <div class=\"text-gray-200 line-height-3 mb-6\">{{ 'home.contact-description' | translate}} </div>\n        <ul class=\"list-none p-0 m-0 mt-6 \">\n          <li class=\"flex align-items-center mb-2 cursor-pointer text-white\"\n            (click)=\"openLink('https://wa.me/552123422297')\">\n            <i class=\"pi pi-whatsapp mr-2\"></i>\n            <span>+55 (21) 2342-2297</span>\n          </li>\n          <li class=\"flex align-items-center cursor-pointer mb-4 text-white\"\n            (click)=\"openLink('mailto:contato@stand-ftw.tech')\">\n            <i class=\"pi pi-inbox mr-2\"></i>\n            <span>contato@stand-ftw.tech</span>\n          </li>\n          <li class=\"flex align-items-center mb-2 cursor-pointer text-white\"\n            (click)=\"openLink('https://www.facebook.com/people/Stand-FTW/61555814128620/')\">\n            <i class=\"pi pi-facebook mr-2\"></i>\n            <span>Stand FTW</span>\n          </li>\n          <li class=\"flex align-items-center mb-2 cursor-pointer text-white\"\n            (click)=\"openLink('https://www.instagram.com/standftw.tech/')\">\n            <i class=\"pi pi-instagram mr-2\"></i>\n            <span>@standftw.tech</span>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </div>\n\n\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=1572.js.map