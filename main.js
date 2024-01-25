(self["webpackChunkgtl"] = self["webpackChunkgtl"] || []).push([["main"],{

/***/ 8255:
/*!*******************************************************!*\
  !*** ./$_lazy_route_resources/ lazy namespace object ***!
  \*******************************************************/
/***/ ((module) => {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(() => {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = () => ([]);
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 8255;
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ 809:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 9535);

/* eslint-disable max-len */


const routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_primeng_fesm2015_primeng-button_js"), __webpack_require__.e("src_app_pages_home_home_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/home/home.module */ 1572)).then(m => m.HomePageModule),
    },
    {
        path: 'applications',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_primeng_fesm2015_primeng-button_js"), __webpack_require__.e("src_app_pages_applications_applications_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/applications/applications.module */ 9849)).then(m => m.ApplicationsPageModule),
        canLoad: [false],
    },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule)({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__.PreloadAllModules, useHash: false })
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
    })
], AppRoutingModule);



/***/ }),

/***/ 721:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./app.component.html */ 1106);
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.scss */ 3069);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 4236);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 6006);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/api */ 1388);
/* harmony import */ var primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/dynamicdialog */ 6547);
/* harmony import */ var _shared_services_preferences_preferences_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/services/preferences/preferences.service */ 1405);
/* harmony import */ var _shared_services_theme_theme_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/services/theme/theme.service */ 2389);
/* harmony import */ var _shared_services_app_loader_loader_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/services/app-loader/loader.service */ 8088);
/* harmony import */ var src_config_app_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/config/app.config */ 672);












let AppComponent = class AppComponent {
    constructor(loaderService, dialogService, preferencesService, themeService, primeConfig, translateService) {
        this.loaderService = loaderService;
        this.dialogService = dialogService;
        this.preferencesService = preferencesService;
        this.themeService = themeService;
        this.primeConfig = primeConfig;
        this.translateService = translateService;
        this.darkThemeName = 'arya-blue';
        this.lightThemeName = 'saga-blue';
        this.isDarkTheme = false;
        this.transacoesPendentes = 0;
        this.obs = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subject();
        this.blockUI = false;
        this.teste = 'teste';
        this.appPages = [
            { title: `app.menu-route-home`, url: '/home', icon: 'home' },
            //{ title: `app.menu-route-apps`, url: '/applications', icon: 'apps' },
        ];
        const theme = this.preferencesService.getThemePreference();
        document.body.setAttribute('color-theme', theme);
        if (theme === 'dark') {
            this.isDarkTheme = true;
            this.themeService.switchTheme(this.darkThemeName);
        }
        else {
            this.isDarkTheme = false;
            this.themeService.switchTheme(this.lightThemeName);
        }
    }
    ;
    ngOnInit() {
        this.setupTranslation();
        this.countries = [
            { name: 'Português', code: 'BR', language: 'pt-BR' },
            { name: 'English', code: 'US', language: 'en' }
        ];
    }
    ngAfterViewInit() {
    }
    ionWillOpen() {
    }
    ionDidClose() {
        this.obs.next();
        this.obs.complete();
    }
    toggleDetails(p) {
        if (p.showDetails) {
            p.showDetails = false;
            p.icon = 'ios-arrow-down';
        }
        else {
            p.showDetails = true;
            p.icon = 'ios-arrow-up';
        }
    }
    toggleThemes(event) {
        const { checked } = event.detail;
        if (checked) {
            document.body.setAttribute('color-theme', 'dark');
            this.themeService.switchTheme(this.darkThemeName);
            this.preferencesService.setThemePreference('dark');
        }
        else {
            document.body.setAttribute('color-theme', 'light');
            this.preferencesService.setThemePreference('light');
            this.themeService.switchTheme(this.lightThemeName);
        }
    }
    setupTranslation() {
        this.translateService.setDefaultLang('pt-BR');
        this.translateService.use('pt-BR');
        this.translateService
            .get('primeng')
            .subscribe(res => {
            this.primeConfig.setTranslation(res);
        });
    }
    changeLanguage() {
        const { language } = this.selectedCountry;
        this.translateService.setDefaultLang(language);
        this.translateService.use(language);
        this.translateService
            .get('primeng')
            .subscribe(res => {
            this.primeConfig.setTranslation(res);
        });
    }
    getSystemInfo() {
        return src_config_app_config__WEBPACK_IMPORTED_MODULE_5__.SYSTEM_INFO;
    }
};
AppComponent.ctorParameters = () => [
    { type: _shared_services_app_loader_loader_service__WEBPACK_IMPORTED_MODULE_4__.LoaderService },
    { type: primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_7__.DialogService },
    { type: _shared_services_preferences_preferences_service__WEBPACK_IMPORTED_MODULE_2__.PreferencesService },
    { type: _shared_services_theme_theme_service__WEBPACK_IMPORTED_MODULE_3__.ThemeService },
    { type: primeng_api__WEBPACK_IMPORTED_MODULE_8__.PrimeNGConfig },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateService }
];
AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AppComponent);



/***/ }),

/***/ 23:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HttpLoaderFactory": () => (/* binding */ HttpLoaderFactory),
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/forms */ 3324);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/platform-browser */ 3220);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 6274);
/* harmony import */ var _angular_common_locales_br__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/locales/br */ 8633);
/* harmony import */ var _angular_common_locales_br__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_br__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common/http */ 1887);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/platform-browser/animations */ 8366);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ionic/angular */ 4595);
/* harmony import */ var _ionic_pwa_elements_loader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/pwa-elements/loader */ 2404);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ngx-translate/core */ 4236);
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/http-loader */ 830);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 680);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ 3117);
/* harmony import */ var _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @fortawesome/free-regular-svg-icons */ 5619);
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ 3563);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! primeng/api */ 1388);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! primeng/toast */ 3666);
/* harmony import */ var primeng_blockui__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! primeng/blockui */ 3250);
/* harmony import */ var primeng_progressbar__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! primeng/progressbar */ 5094);
/* harmony import */ var primeng_progressspinner__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! primeng/progressspinner */ 6864);
/* harmony import */ var primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! primeng/dynamicdialog */ 6547);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! primeng/dropdown */ 6899);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ 721);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ 809);
/* harmony import */ var _shared_interceptors_error_interceptor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/interceptors/error-interceptor */ 9751);
/* harmony import */ var _shared_pipes_pipe_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/pipes/pipe.module */ 9502);
/* harmony import */ var _shared_directive_directives_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/directive/directives.module */ 9513);




























(0,_angular_common__WEBPACK_IMPORTED_MODULE_7__.registerLocaleData)((_angular_common_locales_br__WEBPACK_IMPORTED_MODULE_0___default()), 'pt-BR');
(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.enableProdMode)();
function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_9__.TranslateHttpLoader(http);
}
let AppModule = class AppModule {
    constructor(library) {
        library.addIconPacks(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_10__.fas);
        library.addIconPacks(_fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_11__.far);
        library.addIconPacks(_fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_12__.fab);
    }
};
AppModule.ctorParameters = () => [
    { type: _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_13__.FaIconLibrary }
];
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.NgModule)({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_2__.AppComponent,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__.TranslatePipe,
        ],
        entryComponents: [],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_16__.BrowserModule,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_17__.BrowserAnimationsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_18__.IonicModule.forRoot(),
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__.TranslateModule.forRoot({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__.TranslateLoader,
                    useFactory: HttpLoaderFactory,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_19__.HttpClient]
                }
            }),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__.AppRoutingModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_19__.HttpClientModule,
            primeng_toast__WEBPACK_IMPORTED_MODULE_20__.ToastModule,
            primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_21__.DynamicDialogModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_22__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_22__.ReactiveFormsModule,
            primeng_blockui__WEBPACK_IMPORTED_MODULE_23__.BlockUIModule,
            primeng_dropdown__WEBPACK_IMPORTED_MODULE_24__.DropdownModule,
            _shared_pipes_pipe_module__WEBPACK_IMPORTED_MODULE_5__.PipeModule,
            primeng_progressbar__WEBPACK_IMPORTED_MODULE_25__.ProgressBarModule,
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_13__.FontAwesomeModule,
            primeng_progressspinner__WEBPACK_IMPORTED_MODULE_26__.ProgressSpinnerModule,
            _shared_directive_directives_module__WEBPACK_IMPORTED_MODULE_6__.DirectivesModule,
        ],
        providers: [
            {
                provide: _angular_common__WEBPACK_IMPORTED_MODULE_7__.LocationStrategy,
                useClass: _angular_common__WEBPACK_IMPORTED_MODULE_7__.HashLocationStrategy
            },
            primeng_api__WEBPACK_IMPORTED_MODULE_27__.MessageService,
            primeng_api__WEBPACK_IMPORTED_MODULE_27__.ConfirmationService,
            primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_21__.DialogService,
            _shared_interceptors_error_interceptor__WEBPACK_IMPORTED_MODULE_4__.errorInterceptorProvider,
            {
                provide: _angular_core__WEBPACK_IMPORTED_MODULE_8__.LOCALE_ID,
                useValue: 'pt-BR'
            },
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__.AppComponent,],
        exports: [primeng_toast__WEBPACK_IMPORTED_MODULE_20__.ToastModule, _shared_pipes_pipe_module__WEBPACK_IMPORTED_MODULE_5__.PipeModule, primeng_progressbar__WEBPACK_IMPORTED_MODULE_25__.ProgressBarModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__.TranslatePipe],
    })
], AppModule);

(0,_ionic_pwa_elements_loader__WEBPACK_IMPORTED_MODULE_1__.defineCustomElements)(window);


/***/ }),

/***/ 6387:
/*!**********************************************************!*\
  !*** ./src/app/shared/constants/notificacao.constant.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotificacaoTipoEnum": () => (/* binding */ NotificacaoTipoEnum),
/* harmony export */   "NotificacaoStatus": () => (/* binding */ NotificacaoStatus)
/* harmony export */ });
var NotificacaoTipoEnum;
(function (NotificacaoTipoEnum) {
    NotificacaoTipoEnum["MENSAGEM_COMUM"] = "COMUM";
    NotificacaoTipoEnum["MENSAGEM_PRIORITARIA"] = "PRIORITARIA";
    NotificacaoTipoEnum["CARGA"] = "CARGA";
})(NotificacaoTipoEnum || (NotificacaoTipoEnum = {}));
var NotificacaoStatus;
(function (NotificacaoStatus) {
    NotificacaoStatus["INFO"] = "info";
    NotificacaoStatus["SUCESSO"] = "success";
    NotificacaoStatus["AVISO"] = "warning";
    NotificacaoStatus["ERRO"] = "danger";
})(NotificacaoStatus || (NotificacaoStatus = {}));


/***/ }),

/***/ 9875:
/*!****************************************************!*\
  !*** ./src/app/shared/constants/toast.constant.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ToastEnum": () => (/* binding */ ToastEnum),
/* harmony export */   "ToastPrimeSeverityEnum": () => (/* binding */ ToastPrimeSeverityEnum),
/* harmony export */   "ToastIonicSeverityEnum": () => (/* binding */ ToastIonicSeverityEnum)
/* harmony export */ });
var ToastEnum;
(function (ToastEnum) {
    ToastEnum[ToastEnum["shortDuration"] = 5000] = "shortDuration";
    ToastEnum[ToastEnum["mediumDuration"] = 10000] = "mediumDuration";
    ToastEnum[ToastEnum["longDuration"] = 15000] = "longDuration";
})(ToastEnum || (ToastEnum = {}));
var ToastPrimeSeverityEnum;
(function (ToastPrimeSeverityEnum) {
    ToastPrimeSeverityEnum["SUCESSO"] = "success";
    ToastPrimeSeverityEnum["INFORMACAO"] = "info";
    ToastPrimeSeverityEnum["ATENCAO"] = "warn";
    ToastPrimeSeverityEnum["ERRO"] = "error";
})(ToastPrimeSeverityEnum || (ToastPrimeSeverityEnum = {}));
var ToastIonicSeverityEnum;
(function (ToastIonicSeverityEnum) {
    ToastIonicSeverityEnum["SUCESSO"] = "success";
    ToastIonicSeverityEnum["INFORMACAO"] = "primary";
    ToastIonicSeverityEnum["ATENCAO"] = "warning";
    ToastIonicSeverityEnum["ERRO"] = "danger";
})(ToastIonicSeverityEnum || (ToastIonicSeverityEnum = {}));


/***/ }),

/***/ 9513:
/*!*******************************************************!*\
  !*** ./src/app/shared/directive/directives.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DirectivesModule": () => (/* binding */ DirectivesModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6274);
/* harmony import */ var _scroll_theme_scroll_theme_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scroll-theme/scroll-theme.directive */ 2234);




let DirectivesModule = class DirectivesModule {
};
DirectivesModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        declarations: [_scroll_theme_scroll_theme_directive__WEBPACK_IMPORTED_MODULE_0__.ScrollThemeDirective],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        ],
        exports: [_scroll_theme_scroll_theme_directive__WEBPACK_IMPORTED_MODULE_0__.ScrollThemeDirective],
    })
], DirectivesModule);



/***/ }),

/***/ 2234:
/*!*************************************************************************!*\
  !*** ./src/app/shared/directive/scroll-theme/scroll-theme.directive.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ScrollThemeDirective": () => (/* binding */ ScrollThemeDirective)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2741);


let ScrollThemeDirective = class ScrollThemeDirective {
    constructor(el) {
        const stylesheet = `
      ::-webkit-scrollbar {
      width: 10px;
      }
      ::-webkit-scrollbar-track {
      background: #0f0f0f;
      }
      ::-webkit-scrollbar-thumb {
      border-radius: 1rem;
      background: linear-gradient(var(--primary-color), var(--ion-color-dark));
      border: 4px solid #020202;
      }
      ::-webkit-scrollbar-thumb:hover {
      }
    `;
        const styleElmt = el.nativeElement.shadowRoot.querySelector('style');
        if (styleElmt) {
            styleElmt.append(stylesheet);
        }
        else {
            const barStyle = document.createElement('style');
            barStyle.append(stylesheet);
            el.nativeElement.shadowRoot.appendChild(barStyle);
        }
    }
};
ScrollThemeDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef }
];
ScrollThemeDirective = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive)({
        selector: '[appScrollTheme]'
    })
], ScrollThemeDirective);



/***/ }),

/***/ 9751:
/*!**********************************************************!*\
  !*** ./src/app/shared/interceptors/error-interceptor.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ErrorInterceptor": () => (/* binding */ ErrorInterceptor),
/* harmony export */   "errorInterceptorProvider": () => (/* binding */ errorInterceptorProvider)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ 1887);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 4595);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 9535);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 7535);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 367);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 1076);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 7813);
/* harmony import */ var _constants_toast_constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/toast.constant */ 9875);
/* harmony import */ var _services_app_loader_loader_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/app-loader/loader.service */ 8088);
/* harmony import */ var src_config_api_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/config/api.config */ 5848);
/* harmony import */ var _services_toast_toast_message_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/toast/toast-message.service */ 8735);











let ErrorInterceptor = class ErrorInterceptor {
    constructor(alertContr, loaderService, router, menu, toastMessageService) {
        this.alertContr = alertContr;
        this.loaderService = loaderService;
        this.router = router;
        this.menu = menu;
        this.toastMessageService = toastMessageService;
        this.timeoutTiming = 10000;
    }
    intercept(req, next) {
        this.loaderService.isLoading.next(true);
        this.loadBlock(true);
        return next
            .handle(req)
            //Pipe para Erros
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)((response) => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const { statusText } = response;
            if (statusText === 'Unknown Error') {
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.throwError)('Timeout');
            }
            const { status } = response;
            if (response.error instanceof Blob) {
                response.error = JSON.parse(yield response.error.text());
            }
            const { message } = response.error;
            const convertedMessage = this.convertErrorList(message);
            switch (Number(status)) {
                case 400:
                    this.handle400(convertedMessage);
                    break;
                case 403:
                    this.handle403(convertedMessage);
                    break;
                case 401:
                    this.handle401(convertedMessage);
                    break;
                case 422:
                    this.handle422(convertedMessage);
                    break;
                case 404:
                    this.handle404(convertedMessage);
                    break;
                default:
                    this.handleDefaultError(convertedMessage, status);
            }
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.throwError)(convertedMessage);
        })))
            //Pipe para Timeout
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.timeout)(this.timeoutTiming), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)((response) => {
            if (response !== 'Timeout') {
                return;
            }
            const e = `Tempo de espera excedido: ${src_config_api_config__WEBPACK_IMPORTED_MODULE_2__.API_CONFIG.baseURL}`;
            this.handle408(e);
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.throwError)(e);
        }))
            //Pipe para loading de requisições
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.finalize)(() => {
            this.loaderService.isLoading.next(false);
            this.loadBlock(false);
        }));
    }
    handle400(error) {
        this.toastMessageService.presentToast({
            titulo: '400 - Requisição com problema',
            detalhe: error,
            gravidade: _constants_toast_constant__WEBPACK_IMPORTED_MODULE_0__.ToastPrimeSeverityEnum.ATENCAO,
            duracao: _constants_toast_constant__WEBPACK_IMPORTED_MODULE_0__.ToastEnum.mediumDuration,
        });
    }
    handle401(error) {
        if (error == 'Invalid token' || error == 'Token is missing') {
            this.toastMessageService.presentToast({
                titulo: '401 - Acesse novamente',
                detalhe: 'É preciso autenticar-se novamente',
                gravidade: _constants_toast_constant__WEBPACK_IMPORTED_MODULE_0__.ToastPrimeSeverityEnum.ATENCAO,
                duracao: _constants_toast_constant__WEBPACK_IMPORTED_MODULE_0__.ToastEnum.longDuration,
            });
            this.menu.close();
            this.router.navigateByUrl('login');
        }
        else {
            this.toastMessageService.presentToast({
                titulo: '401 - Não autorizado',
                detalhe: error,
                gravidade: _constants_toast_constant__WEBPACK_IMPORTED_MODULE_0__.ToastPrimeSeverityEnum.ATENCAO,
                duracao: _constants_toast_constant__WEBPACK_IMPORTED_MODULE_0__.ToastEnum.mediumDuration,
            });
        }
    }
    handle403(error) {
        this.toastMessageService.presentToast({
            titulo: '403 - Proibido',
            detalhe: error,
            gravidade: _constants_toast_constant__WEBPACK_IMPORTED_MODULE_0__.ToastPrimeSeverityEnum.ATENCAO,
            duracao: _constants_toast_constant__WEBPACK_IMPORTED_MODULE_0__.ToastEnum.mediumDuration,
        });
        //this.storage.setLocalUser(null);
    }
    handle404(error) {
        this.toastMessageService.presentToast({
            titulo: '404 - Não encontrado',
            detalhe: error,
            gravidade: _constants_toast_constant__WEBPACK_IMPORTED_MODULE_0__.ToastPrimeSeverityEnum.ATENCAO,
            duracao: _constants_toast_constant__WEBPACK_IMPORTED_MODULE_0__.ToastEnum.mediumDuration,
        });
    }
    handle408(error) {
        this.toastMessageService.presentToast({
            titulo: '408 - Request Timeout',
            detalhe: error,
            gravidade: _constants_toast_constant__WEBPACK_IMPORTED_MODULE_0__.ToastPrimeSeverityEnum.ERRO,
            duracao: _constants_toast_constant__WEBPACK_IMPORTED_MODULE_0__.ToastEnum.longDuration,
        });
    }
    handle422(error) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            this.toastMessageService.presentToast({
                titulo: '422 - Não processável',
                detalhe: error,
                gravidade: _constants_toast_constant__WEBPACK_IMPORTED_MODULE_0__.ToastPrimeSeverityEnum.ERRO,
                duracao: _constants_toast_constant__WEBPACK_IMPORTED_MODULE_0__.ToastEnum.longDuration,
            });
        });
    }
    handleDefaultError(message, status = 500) {
        this.toastMessageService.presentToast({
            gravidade: _constants_toast_constant__WEBPACK_IMPORTED_MODULE_0__.ToastPrimeSeverityEnum.ERRO,
            detalhe: message,
            duracao: _constants_toast_constant__WEBPACK_IMPORTED_MODULE_0__.ToastEnum.longDuration,
            titulo: status.toString(),
        });
    }
    createAlert(error) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            let titulo = error.error;
            let message = error.msg;
            if (!titulo) {
                titulo = 'Falha';
            }
            if (!message) {
                message = error.message;
            }
            const alert = yield this.alertContr.create({
                header: error.status + ': ' + titulo,
                message,
                backdropDismiss: false,
                buttons: [
                    {
                        text: 'OK',
                    },
                ],
            });
            yield alert.present();
        });
    }
    convertErrorList(error) {
        if (!error.length) {
            return error;
        }
        let errorList = '';
        error.forEach(e => {
            errorList = errorList.concat(`- ${e}`);
            errorList = errorList.concat('\n');
        });
        return errorList;
    }
    loadBlock(isBlock = false) {
        const value = isBlock ? 'none' : 'all';
        document.documentElement.style.setProperty('--load-block', value);
    }
};
ErrorInterceptor.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.AlertController },
    { type: _services_app_loader_loader_service__WEBPACK_IMPORTED_MODULE_1__.LoaderService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.MenuController },
    { type: _services_toast_toast_message_service__WEBPACK_IMPORTED_MODULE_3__.ToastMessageService }
];
ErrorInterceptor = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Injectable)()
], ErrorInterceptor);

const errorInterceptorProvider = {
    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_12__.HTTP_INTERCEPTORS,
    useClass: ErrorInterceptor,
    multi: true,
};


/***/ }),

/***/ 9502:
/*!*********************************************!*\
  !*** ./src/app/shared/pipes/pipe.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PipeModule": () => (/* binding */ PipeModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6274);
/* harmony import */ var _utils_empty_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/empty.pipe */ 6825);
/* harmony import */ var _utils_notificacao_convert_status_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/notificacao/convert-status.pipe */ 9103);
/* harmony import */ var _utils_time_since_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/time-since.pipe */ 1246);






let PipeModule = class PipeModule {
};
PipeModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        declarations: [_utils_empty_pipe__WEBPACK_IMPORTED_MODULE_0__.EmptyPipe, _utils_notificacao_convert_status_pipe__WEBPACK_IMPORTED_MODULE_1__.ConvertStatusPipe, _utils_time_since_pipe__WEBPACK_IMPORTED_MODULE_2__.TimeSincePipe],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,],
        exports: [_utils_empty_pipe__WEBPACK_IMPORTED_MODULE_0__.EmptyPipe, _utils_notificacao_convert_status_pipe__WEBPACK_IMPORTED_MODULE_1__.ConvertStatusPipe, _utils_time_since_pipe__WEBPACK_IMPORTED_MODULE_2__.TimeSincePipe],
    })
], PipeModule);



/***/ }),

/***/ 6825:
/*!**************************************************!*\
  !*** ./src/app/shared/pipes/utils/empty.pipe.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmptyPipe": () => (/* binding */ EmptyPipe)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2741);


let EmptyPipe = class EmptyPipe {
    transform(value) {
        if (value) {
            return value;
        }
        return '-';
    }
};
EmptyPipe = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Pipe)({
        name: 'emptyPipe'
    })
], EmptyPipe);



/***/ }),

/***/ 9103:
/*!***********************************************************************!*\
  !*** ./src/app/shared/pipes/utils/notificacao/convert-status.pipe.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConvertStatusPipe": () => (/* binding */ ConvertStatusPipe)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var src_app_shared_constants_notificacao_constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/constants/notificacao.constant */ 6387);



let ConvertStatusPipe = class ConvertStatusPipe {
    transform(status) {
        switch (status) {
            case src_app_shared_constants_notificacao_constant__WEBPACK_IMPORTED_MODULE_0__.NotificacaoStatus.AVISO:
                return 'Aviso';
            case src_app_shared_constants_notificacao_constant__WEBPACK_IMPORTED_MODULE_0__.NotificacaoStatus.ERRO:
                return 'Erro';
            case src_app_shared_constants_notificacao_constant__WEBPACK_IMPORTED_MODULE_0__.NotificacaoStatus.INFO:
                return 'Informação';
            case src_app_shared_constants_notificacao_constant__WEBPACK_IMPORTED_MODULE_0__.NotificacaoStatus.SUCESSO:
                return 'Sucesso';
            default:
                return 'Informação';
        }
    }
};
ConvertStatusPipe = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Pipe)({
        name: 'convertStatus'
    })
], ConvertStatusPipe);



/***/ }),

/***/ 1246:
/*!*******************************************************!*\
  !*** ./src/app/shared/pipes/utils/time-since.pipe.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TimeSincePipe": () => (/* binding */ TimeSincePipe)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var dayjs_plugin_relativeTime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs/plugin/relativeTime */ 1355);
/* harmony import */ var dayjs_plugin_relativeTime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs_plugin_relativeTime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var dayjs_plugin_updateLocale__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dayjs/plugin/updateLocale */ 3353);
/* harmony import */ var dayjs_plugin_updateLocale__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dayjs_plugin_updateLocale__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! dayjs */ 2012);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_2__);





let TimeSincePipe = class TimeSincePipe {
    transform(value) {
        dayjs__WEBPACK_IMPORTED_MODULE_2__.extend(dayjs_plugin_relativeTime__WEBPACK_IMPORTED_MODULE_0__);
        dayjs__WEBPACK_IMPORTED_MODULE_2__.extend(dayjs_plugin_updateLocale__WEBPACK_IMPORTED_MODULE_1__);
        dayjs__WEBPACK_IMPORTED_MODULE_2__.updateLocale('en', {
            relativeTime: {
                future: "em %s",
                past: "%s atrás",
                s: 'alguns segundos ',
                m: "alguns minutos ",
                mm: "%d minutos",
                h: "a uma hora ",
                hh: "%d horas",
                d: "a um dia ",
                dd: "%d dias",
                M: "a mês ",
                MM: "%d meses",
                y: "a um ano ",
                yy: "%d anos"
            }
        });
        return dayjs__WEBPACK_IMPORTED_MODULE_2__(value).fromNow();
    }
};
TimeSincePipe = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Pipe)({
        name: 'timeSince'
    })
], TimeSincePipe);



/***/ }),

/***/ 8088:
/*!**************************************************************!*\
  !*** ./src/app/shared/services/app-loader/loader.service.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoaderService": () => (/* binding */ LoaderService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 9923);



let LoaderService = class LoaderService {
    constructor() {
        this.isLoading = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(false);
    }
};
LoaderService.ctorParameters = () => [];
LoaderService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], LoaderService);



/***/ }),

/***/ 1405:
/*!********************************************************************!*\
  !*** ./src/app/shared/services/preferences/preferences.service.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PreferencesService": () => (/* binding */ PreferencesService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 6983);



let PreferencesService = class PreferencesService {
    constructor() {
        this.themeSubscriber = new rxjs__WEBPACK_IMPORTED_MODULE_0__.ReplaySubject();
    }
    setThemePreference(themePreference) {
        localStorage.setItem('theme-preference', themePreference);
        this.themeSubscriber.next(themePreference);
    }
    getThemePreference() {
        return localStorage.getItem('theme-preference') || 'dark';
    }
};
PreferencesService.ctorParameters = () => [];
PreferencesService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], PreferencesService);



/***/ }),

/***/ 2389:
/*!********************************************************!*\
  !*** ./src/app/shared/services/theme/theme.service.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ThemeService": () => (/* binding */ ThemeService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 6274);



let ThemeService = class ThemeService {
    constructor(document) {
        this.document = document;
    }
    switchTheme(theme) {
        const themeLink = this.document.getElementById('app-theme');
        if (themeLink) {
            themeLink.href = theme + '.css';
        }
    }
};
ThemeService.ctorParameters = () => [
    { type: Document, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject, args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT,] }] }
];
ThemeService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable)({
        providedIn: 'root',
    })
], ThemeService);



/***/ }),

/***/ 8735:
/*!****************************************************************!*\
  !*** ./src/app/shared/services/toast/toast-message.service.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ToastMessageService": () => (/* binding */ ToastMessageService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 4595);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/api */ 1388);




let ToastMessageService = class ToastMessageService {
    constructor(toastService, toastController) {
        this.toastService = toastService;
        this.toastController = toastController;
    }
    presentToast(toast, key = 'main') {
        this.toastService.clear();
        this.toastService.add({
            severity: toast.gravidade,
            summary: toast.titulo,
            detail: toast.detalhe,
            life: toast.duracao,
            key,
        });
    }
    presentNotification(toast) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            const toastOverlay = yield this.toastController.create({
                header: toast.titulo,
                message: toast.detalhe,
                duration: toast.duracao,
                color: toast.gravidade,
                position: 'top',
                keyboardClose: true,
                translucent: true,
            });
            toastOverlay.present();
        });
    }
};
ToastMessageService.ctorParameters = () => [
    { type: primeng_api__WEBPACK_IMPORTED_MODULE_1__.MessageService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.ToastController }
];
ToastMessageService = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], ToastMessageService);



/***/ }),

/***/ 5848:
/*!**********************************!*\
  !*** ./src/config/api.config.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "API_CONFIG": () => (/* binding */ API_CONFIG),
/* harmony export */   "ASSETS_CONFIG": () => (/* binding */ ASSETS_CONFIG)
/* harmony export */ });
const API_CONFIG = {
    baseURL: 'http://192.168.0.30:3000',
    socketURL: 'http://192.168.0.30:3000',
};
const ASSETS_CONFIG = {
    baseURL: 'assets/mocks',
};


/***/ }),

/***/ 672:
/*!**********************************!*\
  !*** ./src/config/app.config.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IMAGE_DIR": () => (/* binding */ IMAGE_DIR),
/* harmony export */   "MODE": () => (/* binding */ MODE),
/* harmony export */   "SYSTEM_NAME": () => (/* binding */ SYSTEM_NAME),
/* harmony export */   "SYSTEM_NICKNAME": () => (/* binding */ SYSTEM_NICKNAME),
/* harmony export */   "SYSTEM_VERSION": () => (/* binding */ SYSTEM_VERSION),
/* harmony export */   "SYSTEM_LOGO": () => (/* binding */ SYSTEM_LOGO),
/* harmony export */   "SYSTEM_INFO": () => (/* binding */ SYSTEM_INFO)
/* harmony export */ });
const IMAGE_DIR = 'stored-images';
const MODE = 'PRD';
const SYSTEM_NAME = 'home.title-welcome';
const SYSTEM_NICKNAME = 'Stand FTW ®';
const SYSTEM_VERSION = '1.0.0';
const SYSTEM_LOGO = '/assets/imgs/logos/Stand FTW - Icon - NO BG.png';
const SYSTEM_INFO = {
    MODE,
    SYSTEM_NICKNAME,
    SYSTEM_NAME,
    SYSTEM_VERSION,
    SYSTEM_LOGO,
};


/***/ }),

/***/ 4766:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 8835:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 476);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 23);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 4766);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.log(err));


/***/ }),

/***/ 863:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \******************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./ion-action-sheet.entry.js": [
		5261,
		"common",
		"node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"
	],
	"./ion-alert.entry.js": [
		26,
		"common",
		"node_modules_ionic_core_dist_esm_ion-alert_entry_js"
	],
	"./ion-app_8.entry.js": [
		9009,
		"common",
		"node_modules_ionic_core_dist_esm_ion-app_8_entry_js"
	],
	"./ion-avatar_3.entry.js": [
		7221,
		"common",
		"node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"
	],
	"./ion-back-button.entry.js": [
		4694,
		"common",
		"node_modules_ionic_core_dist_esm_ion-back-button_entry_js"
	],
	"./ion-backdrop.entry.js": [
		993,
		"node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"
	],
	"./ion-button_2.entry.js": [
		3645,
		"common",
		"node_modules_ionic_core_dist_esm_ion-button_2_entry_js"
	],
	"./ion-card_5.entry.js": [
		2245,
		"common",
		"node_modules_ionic_core_dist_esm_ion-card_5_entry_js"
	],
	"./ion-checkbox.entry.js": [
		3482,
		"common",
		"node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"
	],
	"./ion-chip.entry.js": [
		4081,
		"common",
		"node_modules_ionic_core_dist_esm_ion-chip_entry_js"
	],
	"./ion-col_3.entry.js": [
		3315,
		"node_modules_ionic_core_dist_esm_ion-col_3_entry_js"
	],
	"./ion-datetime_3.entry.js": [
		4133,
		"common",
		"node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"
	],
	"./ion-fab_3.entry.js": [
		7542,
		"common",
		"node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"
	],
	"./ion-img.entry.js": [
		1459,
		"node_modules_ionic_core_dist_esm_ion-img_entry_js"
	],
	"./ion-infinite-scroll_2.entry.js": [
		7618,
		"node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"
	],
	"./ion-input.entry.js": [
		101,
		"common",
		"node_modules_ionic_core_dist_esm_ion-input_entry_js"
	],
	"./ion-item-option_3.entry.js": [
		2210,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"
	],
	"./ion-item_8.entry.js": [
		7370,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item_8_entry_js"
	],
	"./ion-loading.entry.js": [
		3652,
		"common",
		"node_modules_ionic_core_dist_esm_ion-loading_entry_js"
	],
	"./ion-menu_3.entry.js": [
		8220,
		"common",
		"node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"
	],
	"./ion-modal.entry.js": [
		5500,
		"common",
		"node_modules_ionic_core_dist_esm_ion-modal_entry_js"
	],
	"./ion-nav_2.entry.js": [
		4913,
		"common",
		"node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"
	],
	"./ion-popover.entry.js": [
		5078,
		"common",
		"node_modules_ionic_core_dist_esm_ion-popover_entry_js"
	],
	"./ion-progress-bar.entry.js": [
		4857,
		"common",
		"node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"
	],
	"./ion-radio_2.entry.js": [
		8958,
		"common",
		"node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"
	],
	"./ion-range.entry.js": [
		4383,
		"common",
		"node_modules_ionic_core_dist_esm_ion-range_entry_js"
	],
	"./ion-refresher_2.entry.js": [
		7630,
		"common",
		"node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"
	],
	"./ion-reorder_2.entry.js": [
		1297,
		"common",
		"node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"
	],
	"./ion-ripple-effect.entry.js": [
		5492,
		"node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"
	],
	"./ion-route_4.entry.js": [
		3859,
		"common",
		"node_modules_ionic_core_dist_esm_ion-route_4_entry_js"
	],
	"./ion-searchbar.entry.js": [
		7487,
		"common",
		"node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"
	],
	"./ion-segment_2.entry.js": [
		1778,
		"common",
		"node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"
	],
	"./ion-select_3.entry.js": [
		2904,
		"common",
		"node_modules_ionic_core_dist_esm_ion-select_3_entry_js"
	],
	"./ion-slide_2.entry.js": [
		1609,
		"node_modules_ionic_core_dist_esm_ion-slide_2_entry_js"
	],
	"./ion-spinner.entry.js": [
		1218,
		"common",
		"node_modules_ionic_core_dist_esm_ion-spinner_entry_js"
	],
	"./ion-split-pane.entry.js": [
		2849,
		"node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"
	],
	"./ion-tab-bar_2.entry.js": [
		4127,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"
	],
	"./ion-tab_2.entry.js": [
		8400,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"
	],
	"./ion-text.entry.js": [
		4397,
		"common",
		"node_modules_ionic_core_dist_esm_ion-text_entry_js"
	],
	"./ion-textarea.entry.js": [
		3391,
		"common",
		"node_modules_ionic_core_dist_esm_ion-textarea_entry_js"
	],
	"./ion-toast.entry.js": [
		6793,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toast_entry_js"
	],
	"./ion-toggle.entry.js": [
		1695,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toggle_entry_js"
	],
	"./ion-virtual-scroll.entry.js": [
		4180,
		"node_modules_ionic_core_dist_esm_ion-virtual-scroll_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 863;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 5899:
/*!**************************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/pwa-elements/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \**************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./pwa-action-sheet.entry.js": [
		8274,
		"node_modules_ionic_pwa-elements_dist_esm_pwa-action-sheet_entry_js"
	],
	"./pwa-camera-modal-instance.entry.js": [
		3221,
		"node_modules_ionic_pwa-elements_dist_esm_pwa-camera-modal-instance_entry_js"
	],
	"./pwa-camera-modal.entry.js": [
		3489,
		"node_modules_ionic_pwa-elements_dist_esm_pwa-camera-modal_entry_js"
	],
	"./pwa-camera.entry.js": [
		3705,
		"node_modules_ionic_pwa-elements_dist_esm_pwa-camera_entry_js"
	],
	"./pwa-toast.entry.js": [
		4223,
		"node_modules_ionic_pwa-elements_dist_esm_pwa-toast_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 5899;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 3069:
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-menu ion-content {\n  --background: var(--ion-item-background, var(--ion-background-color, #fff));\n}\n\nion-menu.md ion-content {\n  --padding-start: 8px;\n  --padding-end: 8px;\n  --padding-top: 20px;\n  --padding-bottom: 20px;\n}\n\nion-menu.md ion-list {\n  padding: 20px 0;\n}\n\nion-menu.md ion-note {\n  margin-bottom: 30px;\n}\n\nion-menu.md ion-list-header,\nion-menu.md ion-note {\n  padding-left: 10px;\n}\n\nion-menu.md ion-list#inbox-list {\n  border-bottom: 1px solid var(--ion-color-step-150, #d7d8da);\n}\n\nion-menu.md ion-list#inbox-list ion-list-header {\n  font-size: 22px;\n  font-weight: 600;\n  min-height: 20px;\n}\n\nion-menu.md ion-list#labels-list ion-list-header {\n  font-size: 16px;\n  margin-bottom: 18px;\n  color: #757575;\n  min-height: 26px;\n}\n\nion-menu.md ion-item {\n  --padding-start: 10px;\n  --padding-end: 10px;\n  border-radius: 4px;\n}\n\nion-menu.md ion-item.selected {\n  --background: rgba(var(--ion-color-primary-rgb), 0.14);\n}\n\nion-menu.md ion-item.selected ion-icon {\n  color: var(--ion-color-primary);\n}\n\nion-menu.md ion-item ion-icon {\n  color: #616e7e;\n}\n\nion-menu.md ion-item ion-label {\n  font-weight: 500;\n}\n\nion-menu.ios ion-content {\n  --padding-bottom: 20px;\n}\n\nion-menu.ios ion-list {\n  padding: 20px 0 0 0;\n}\n\nion-menu.ios ion-note {\n  line-height: 24px;\n  margin-bottom: 20px;\n}\n\nion-menu.ios ion-item {\n  --padding-start: 16px;\n  --padding-end: 16px;\n  --min-height: 50px;\n}\n\nion-menu.ios ion-item.selected ion-icon {\n  color: var(--ion-color-primary);\n}\n\nion-menu.ios ion-item ion-icon {\n  font-size: 24px;\n  color: #73849a;\n}\n\nion-menu.ios ion-list#labels-list ion-list-header {\n  margin-bottom: 8px;\n}\n\nion-menu.ios ion-list-header,\nion-menu.ios ion-note {\n  padding-left: 16px;\n  padding-right: 16px;\n}\n\nion-menu.ios ion-note {\n  margin-bottom: 8px;\n}\n\nion-note {\n  display: inline-block;\n  font-size: 16px;\n  color: var(--ion-color-medium-shade);\n}\n\nion-item.selected {\n  --color: var(--ion-color-primary);\n}\n\n.loader-bar-container {\n  z-index: 1032;\n}\n\n.loader-spinnner-container {\n  position: fixed;\n  z-index: 999;\n  height: 2em;\n  width: 2em;\n  overflow: show;\n  margin: auto;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  /* or: left: 50%; */\n  opacity: 0.8;\n  pointer-events: none;\n}\n\n.block-load {\n  pointer-events: none;\n}\n\n:host ::ng-deep ion-content {\n  pointer-events: var(--load-block);\n}\n\n:host ::ng-deep ion-menu ion-content {\n  pointer-events: all !important;\n}\n\n.system_logo {\n  width: 64px;\n  height: 64px;\n}\n\n::ng-deep .p-dropdown {\n  width: 100% !important;\n  min-height: 35px !important;\n}\n\n.country-item-value img.flag {\n  width: 17px;\n}\n\n.country-item {\n  display: flex;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDJFQUFBO0FBQ0Y7O0FBRUE7RUFDRSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtBQUNGOztBQUVBO0VBQ0UsbUJBQUE7QUFDRjs7QUFFQTs7RUFFRSxrQkFBQTtBQUNGOztBQUVBO0VBQ0UsMkRBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUVBLGdCQUFBO0FBQUY7O0FBR0E7RUFDRSxlQUFBO0VBRUEsbUJBQUE7RUFFQSxjQUFBO0VBRUEsZ0JBQUE7QUFIRjs7QUFNQTtFQUNFLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQUhGOztBQU1BO0VBQ0Usc0RBQUE7QUFIRjs7QUFNQTtFQUNFLCtCQUFBO0FBSEY7O0FBTUE7RUFDRSxjQUFBO0FBSEY7O0FBTUE7RUFDRSxnQkFBQTtBQUhGOztBQU1BO0VBQ0Usc0JBQUE7QUFIRjs7QUFNQTtFQUNFLG1CQUFBO0FBSEY7O0FBTUE7RUFDRSxpQkFBQTtFQUNBLG1CQUFBO0FBSEY7O0FBTUE7RUFDRSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFIRjs7QUFNQTtFQUNFLCtCQUFBO0FBSEY7O0FBTUE7RUFDRSxlQUFBO0VBQ0EsY0FBQTtBQUhGOztBQU1BO0VBQ0Usa0JBQUE7QUFIRjs7QUFNQTs7RUFFRSxrQkFBQTtFQUNBLG1CQUFBO0FBSEY7O0FBTUE7RUFDRSxrQkFBQTtBQUhGOztBQU1BO0VBQ0UscUJBQUE7RUFDQSxlQUFBO0VBRUEsb0NBQUE7QUFKRjs7QUFPQTtFQUNFLGlDQUFBO0FBSkY7O0FBT0E7RUFDRSxhQUFBO0FBSkY7O0FBT0E7RUFDRSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7QUFKRjs7QUFPQTtFQUNFLG9CQUFBO0FBSkY7O0FBT0E7RUFDRSxpQ0FBQTtBQUpGOztBQU9BO0VBQ0UsOEJBQUE7QUFKRjs7QUFPQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FBSkY7O0FBUUE7RUFDRSxzQkFBQTtFQUNBLDJCQUFBO0FBTEY7O0FBU0U7RUFDRSxXQUFBO0FBTko7O0FBVUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUFQRiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tbWVudSBpb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWl0ZW0tYmFja2dyb3VuZCwgdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IsICNmZmYpKTtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWNvbnRlbnQge1xuICAtLXBhZGRpbmctc3RhcnQ6IDhweDtcbiAgLS1wYWRkaW5nLWVuZDogOHB4O1xuICAtLXBhZGRpbmctdG9wOiAyMHB4O1xuICAtLXBhZGRpbmctYm90dG9tOiAyMHB4O1xufVxuXG5pb24tbWVudS5tZCBpb24tbGlzdCB7XG4gIHBhZGRpbmc6IDIwcHggMDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLW5vdGUge1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuXG5pb24tbWVudS5tZCBpb24tbGlzdC1oZWFkZXIsXG5pb24tbWVudS5tZCBpb24tbm90ZSB7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWxpc3QjaW5ib3gtbGlzdCB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3Itc3RlcC0xNTAsICNkN2Q4ZGEpO1xufVxuXG5pb24tbWVudS5tZCBpb24tbGlzdCNpbmJveC1saXN0IGlvbi1saXN0LWhlYWRlciB7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcblxuICBtaW4taGVpZ2h0OiAyMHB4O1xufVxuXG5pb24tbWVudS5tZCBpb24tbGlzdCNsYWJlbHMtbGlzdCBpb24tbGlzdC1oZWFkZXIge1xuICBmb250LXNpemU6IDE2cHg7XG5cbiAgbWFyZ2luLWJvdHRvbTogMThweDtcblxuICBjb2xvcjogIzc1NzU3NTtcblxuICBtaW4taGVpZ2h0OiAyNnB4O1xufVxuXG5pb24tbWVudS5tZCBpb24taXRlbSB7XG4gIC0tcGFkZGluZy1zdGFydDogMTBweDtcbiAgLS1wYWRkaW5nLWVuZDogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuXG5pb24tbWVudS5tZCBpb24taXRlbS5zZWxlY3RlZCB7XG4gIC0tYmFja2dyb3VuZDogcmdiYSh2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1yZ2IpLCAwLjE0KTtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWl0ZW0uc2VsZWN0ZWQgaW9uLWljb24ge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuXG5pb24tbWVudS5tZCBpb24taXRlbSBpb24taWNvbiB7XG4gIGNvbG9yOiAjNjE2ZTdlO1xufVxuXG5pb24tbWVudS5tZCBpb24taXRlbSBpb24tbGFiZWwge1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG5pb24tbWVudS5pb3MgaW9uLWNvbnRlbnQge1xuICAtLXBhZGRpbmctYm90dG9tOiAyMHB4O1xufVxuXG5pb24tbWVudS5pb3MgaW9uLWxpc3Qge1xuICBwYWRkaW5nOiAyMHB4IDAgMCAwO1xufVxuXG5pb24tbWVudS5pb3MgaW9uLW5vdGUge1xuICBsaW5lLWhlaWdodDogMjRweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1pdGVtIHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxNnB4O1xuICAtLXBhZGRpbmctZW5kOiAxNnB4O1xuICAtLW1pbi1oZWlnaHQ6IDUwcHg7XG59XG5cbmlvbi1tZW51LmlvcyBpb24taXRlbS5zZWxlY3RlZCBpb24taWNvbiB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG5cbmlvbi1tZW51LmlvcyBpb24taXRlbSBpb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgY29sb3I6ICM3Mzg0OWE7XG59XG5cbmlvbi1tZW51LmlvcyBpb24tbGlzdCNsYWJlbHMtbGlzdCBpb24tbGlzdC1oZWFkZXIge1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG59XG5cbmlvbi1tZW51LmlvcyBpb24tbGlzdC1oZWFkZXIsXG5pb24tbWVudS5pb3MgaW9uLW5vdGUge1xuICBwYWRkaW5nLWxlZnQ6IDE2cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDE2cHg7XG59XG5cbmlvbi1tZW51LmlvcyBpb24tbm90ZSB7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbn1cblxuaW9uLW5vdGUge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtc2l6ZTogMTZweDtcblxuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS1zaGFkZSk7XG59XG5cbmlvbi1pdGVtLnNlbGVjdGVkIHtcbiAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuXG4ubG9hZGVyLWJhci1jb250YWluZXIge1xuICB6LWluZGV4OiAxMDMyO1xufVxuXG4ubG9hZGVyLXNwaW5ubmVyLWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgei1pbmRleDogOTk5O1xuICBoZWlnaHQ6IDJlbTtcbiAgd2lkdGg6IDJlbTtcbiAgb3ZlcmZsb3c6IHNob3c7XG4gIG1hcmdpbjogYXV0bztcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBib3R0b206IDA7XG4gIHJpZ2h0OiAwO1xuICAvKiBvcjogbGVmdDogNTAlOyAqL1xuICBvcGFjaXR5OiAwLjg7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG4uYmxvY2stbG9hZCB7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgaW9uLWNvbnRlbnQge1xuICBwb2ludGVyLWV2ZW50czogdmFyKC0tbG9hZC1ibG9jayk7XG59XG5cbjpob3N0IDo6bmctZGVlcCBpb24tbWVudSBpb24tY29udGVudCB7XG4gIHBvaW50ZXItZXZlbnRzOiBhbGwgIWltcG9ydGFudDtcbn1cblxuLnN5c3RlbV9sb2dvIHtcbiAgd2lkdGg6IDY0cHg7XG4gIGhlaWdodDogNjRweDtcbn1cblxuXG46Om5nLWRlZXAgLnAtZHJvcGRvd24ge1xuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICBtaW4taGVpZ2h0OiAzNXB4ICFpbXBvcnRhbnQ7XG59XG5cbi5jb3VudHJ5LWl0ZW0tdmFsdWUge1xuICBpbWcuZmxhZyB7XG4gICAgd2lkdGg6IDE3cHg7XG4gIH1cbn1cblxuLmNvdW50cnktaXRlbSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59Il19 */");

/***/ }),

/***/ 1106:
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-app>\n  <ion-split-pane contentId=\"main-content\" when=\"(max-width: 0px)\">\n    <ion-menu (ionWillOpen)=\"ionWillOpen()\" (ionDidClose)=\"ionDidClose()\" contentId=\"main-content\" type=\"overlay\">\n      <ion-content appScrollTheme>\n        <ion-list id=\"inbox-list\">\n          <ion-item>\n            <img class=\"system_logo\" [src]=\"getSystemInfo().SYSTEM_LOGO\" />\n            <ion-list-header>{{ getSystemInfo().SYSTEM_NICKNAME | translate }}</ion-list-header>\n          </ion-item>\n          <br />\n          <ion-note class=\"text-center\">{{ 'home.title-welcome' | translate }}</ion-note>\n          <ion-menu-toggle auto-hide=\"false\" *ngFor=\"let p of appPages; let i = index\">\n            <ion-item routerDirection=\"root\" [routerLink]=\"[p.url]\" lines=\"none\" detail=\"false\"\n              routerLinkActive=\"selected\">\n              <ion-icon slot=\"start\" [ios]=\"p.icon + '-outline'\" [md]=\"p.icon + '-outline'\"></ion-icon>\n              <ion-label>{{ p.title | translate }} </ion-label>\n            </ion-item>\n          </ion-menu-toggle>\n        </ion-list>\n        <ion-list id=\"labels-list\">\n          <ion-list-header>Preferências</ion-list-header>\n          <ion-item lines=\"none\" (ionChange)=\"toggleThemes($event)\">\n            <ion-icon slot=\"start\" name=\"moon-outline\"></ion-icon>\n            <ion-label> Dark Theme </ion-label>\n            <ion-toggle [checked]=\"isDarkTheme\" id=\"themeToggle\" slot=\"end\"></ion-toggle>\n          </ion-item>\n        </ion-list>\n        <p-dropdown [options]=\"countries\" [(ngModel)]=\"selectedCountry\" optionLabel=\"name\" \n        [placeholder]=\"'app.select-language' | translate\" (onChange)=\"changeLanguage()\">\n          <ng-template pTemplate=\"selectedItem\">\n            <div class=\"country-item country-item-value\" *ngIf=\"selectedCountry\">\n              <img src=\"assets/imgs/flags/flag_placeholder.png\"\n                [class]=\"'flag flag-' + selectedCountry.code.toLowerCase()\" />\n              <div class=\"ml-2\">{{selectedCountry.name}}</div>\n            </div>\n          </ng-template>\n          <ng-template let-country pTemplate=\"item\">\n            <div class=\"country-item\">\n              <img src=\"assets/imgs/flags/flag_placeholder.png\"\n                [class]=\"'flag flag-' + country.code.toLowerCase()\" />\n              <div class=\"ml-2\">{{country.name}}</div>\n            </div>\n          </ng-template>\n        </p-dropdown>\n        <div *ngIf=\"loaderService.isLoading | async\" class=\"loader-bar-container\">\n          <p-progressBar mode=\"indeterminate\"></p-progressBar>\n        </div>\n      </ion-content>\n    </ion-menu>\n\n    <ion-router-outlet id=\"main-content\">\n      <div *ngIf=\"loaderService.isLoading | async\" class=\"loader-spinnner-container\">\n        <p-progressSpinner [style]=\"{ width: '100px', height: '100px' }\"></p-progressSpinner>\n      </div>\n\n    </ion-router-outlet>\n\n  </ion-split-pane>\n</ion-app>\n<p-toast key=\"main\" position=\"top-right\"> </p-toast>");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(8835)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map