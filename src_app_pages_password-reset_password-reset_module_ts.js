"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_password-reset_password-reset_module_ts"],{

/***/ 62613:
/*!***********************************************************************!*\
  !*** ./src/app/pages/password-reset/password-reset-routing.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PasswordResetPageRoutingModule": () => (/* binding */ PasswordResetPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _password_reset_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./password-reset.page */ 17680);




const routes = [
    {
        path: '',
        component: _password_reset_page__WEBPACK_IMPORTED_MODULE_0__.PasswordResetPage
    }
];
let PasswordResetPageRoutingModule = class PasswordResetPageRoutingModule {
};
PasswordResetPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PasswordResetPageRoutingModule);



/***/ }),

/***/ 8373:
/*!***************************************************************!*\
  !*** ./src/app/pages/password-reset/password-reset.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PasswordResetPageModule": () => (/* binding */ PasswordResetPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var primeng_steps__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/steps */ 72420);
/* harmony import */ var primeng_message__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/message */ 73589);
/* harmony import */ var src_app_shared_directive_directives_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/directive/directives.module */ 9406);
/* harmony import */ var _password_reset_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./password-reset-routing.module */ 62613);
/* harmony import */ var _password_reset_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./password-reset.page */ 17680);










let PasswordResetPageModule = class PasswordResetPageModule {
};
PasswordResetPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            primeng_steps__WEBPACK_IMPORTED_MODULE_8__.StepsModule,
            primeng_message__WEBPACK_IMPORTED_MODULE_9__.MessageModule,
            _password_reset_routing_module__WEBPACK_IMPORTED_MODULE_1__.PasswordResetPageRoutingModule,
            src_app_shared_directive_directives_module__WEBPACK_IMPORTED_MODULE_0__.DirectivesModule
        ],
        declarations: [_password_reset_page__WEBPACK_IMPORTED_MODULE_2__.PasswordResetPage]
    })
], PasswordResetPageModule);



/***/ }),

/***/ 17680:
/*!*************************************************************!*\
  !*** ./src/app/pages/password-reset/password-reset.page.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PasswordResetPage": () => (/* binding */ PasswordResetPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _password_reset_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./password-reset.page.html?ngResource */ 6222);
/* harmony import */ var _password_reset_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./password-reset.page.scss?ngResource */ 37671);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 26078);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/api */ 14356);
/* harmony import */ var src_app_shared_services_auth_password_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/auth/password.service */ 86437);
/* harmony import */ var src_app_shared_services_theme_theme_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/theme/theme.service */ 8601);
/* harmony import */ var src_app_shared_constants_toast_constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/constants/toast.constant */ 98739);












let PasswordResetPage = class PasswordResetPage {
    constructor(formBuilder, passwordService, router, menu, themeService, toastService) {
        this.formBuilder = formBuilder;
        this.passwordService = passwordService;
        this.router = router;
        this.menu = menu;
        this.themeService = themeService;
        this.toastService = toastService;
        this.stepIndex = 0;
        this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subscription();
        this.form = this.formBuilder.group({
            codigo: [, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
            email: [, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.email]],
            senha: [, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.minLength(6)]],
        });
    }
    ngOnInit() {
        document.body.setAttribute('color-theme', 'light');
        this.themeService.switchTheme('saga-blue');
        this.steps = [
            {
                label: 'Recuperação',
            },
            {
                label: 'Reset',
            },
        ];
    }
    ngOnDestroy() {
        this.subscriptions.unsubscribe();
        this.stepIndex = 0;
    }
    ionViewWillEnter() {
        this.stepIndex = 0;
        document.body.setAttribute('color-theme', 'light');
        this.themeService.switchTheme('saga-blue');
        this.menu.enable(false);
    }
    goBack() {
        this.stepIndex = 0;
        this.router.navigateByUrl('login');
    }
    setFocus(nextElement) {
        nextElement.setFocus();
    }
    sendRequest() {
        const email = this.form.get('email').value;
        const sub = this.passwordService.requestReset(email)
            .subscribe(response => {
            this.stepIndex++;
        });
        this.subscriptions.add(sub);
    }
    doReset() {
        const codigo = this.form.get('codigo').value;
        const senha = this.form.get('senha').value;
        const sub = this.passwordService.doReset(codigo, senha)
            .subscribe(response => {
            this.presentToast('success', 'Sucesso!', 'Senha alterada', src_app_shared_constants_toast_constant__WEBPACK_IMPORTED_MODULE_4__.ToastEnum.mediumDuration);
            this.goBack();
        });
        this.subscriptions.add(sub);
    }
    isInputError(inputName) {
        const resp = this.form.controls[inputName].dirty &&
            this.form.controls[inputName].errors;
        if (resp) {
            return true;
        }
        return false;
    }
    disableBTN() {
        const situacao = !this.form.valid;
        return situacao;
    }
    presentToast(severity, summary, detail, life) {
        this.toastService.clear();
        this.toastService.add({
            severity,
            summary,
            detail,
            life,
        });
    }
};
PasswordResetPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__.UntypedFormBuilder },
    { type: src_app_shared_services_auth_password_service__WEBPACK_IMPORTED_MODULE_2__.PasswordService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.MenuController },
    { type: src_app_shared_services_theme_theme_service__WEBPACK_IMPORTED_MODULE_3__.ThemeService },
    { type: primeng_api__WEBPACK_IMPORTED_MODULE_9__.MessageService }
];
PasswordResetPage = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
        selector: 'app-password-reset',
        template: _password_reset_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_password_reset_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], PasswordResetPage);



/***/ }),

/***/ 86437:
/*!**********************************************************!*\
  !*** ./src/app/shared/services/auth/password.service.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PasswordService": () => (/* binding */ PasswordService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_config_api_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/config/api.config */ 99038);




let PasswordService = class PasswordService {
    constructor(http) {
        this.http = http;
    }
    requestReset(email) {
        return this.http.post(`${src_config_api_config__WEBPACK_IMPORTED_MODULE_0__.API_CONFIG.baseURL}/auth/forgot`, {
            email,
        }, {
            responseType: 'json',
        });
    }
    doReset(token, senha) {
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpParams()
            .set("token", token);
        return this.http.post(`${src_config_api_config__WEBPACK_IMPORTED_MODULE_0__.API_CONFIG.baseURL}/auth/reset`, {
            password: senha,
        }, {
            params,
        });
    }
    change(senha) {
        return this.http.patch(`${src_config_api_config__WEBPACK_IMPORTED_MODULE_0__.API_CONFIG.baseURL}/password/change`, {
            senha,
        });
    }
};
PasswordService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient }
];
PasswordService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], PasswordService);



/***/ }),

/***/ 37671:
/*!**************************************************************************!*\
  !*** ./src/app/pages/password-reset/password-reset.page.scss?ngResource ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYXNzd29yZC1yZXNldC5wYWdlLnNjc3MifQ== */";

/***/ }),

/***/ 6222:
/*!**************************************************************************!*\
  !*** ./src/app/pages/password-reset/password-reset.page.html?ngResource ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\" (click)=\"goBack()\">\n      <ion-button style=\"min-width: 70px;\" size=\"large\" color=\"primary\" shape=\"round\" fill=\"outline\">\n        <ion-icon style=\"font-size:40px\" name=\"arrow-undo-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>\n      Recuperação de senha\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content appScrollTheme>\n\n  <ion-grid>\n\n\n    <div class=\"border\">\n      <div class=\"limiter\">\n\n        <form [formGroup]=\"form\" (ngSubmit)=\"$event.preventDefault()\">\n\n          <ng-container *ngIf=\"stepIndex == 0\">\n            <ion-row>\n              <ion-col>\n                <ion-item style=\"margin-top: 5px;\" color=\"light\">\n                  <ion-input color=\"primary\" (keyup.enter)=\"sendRequest()\" formControlName=\"email\" type=\"email\"\n                    placeholder=\"Insira seu email\"></ion-input>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n\n            <ion-row>\n              <ion-col>\n                <ion-button expand=\"block\" fill=\"solid\" [disabled]=\"!this.form.get('email').valid\"\n                  (click)=\"sendRequest()\">Enviar\n                </ion-button>\n              </ion-col>\n            </ion-row>\n          </ng-container>\n\n          <ng-container *ngIf=\"stepIndex == 1\">\n            <ion-row>\n              <ion-col>\n                <ion-item style=\"margin-top: 5px;\" color=\"light\">\n                  <ion-input color=\"primary\" (keyup.enter)=\"setFocus(pass)\" formControlName=\"codigo\"\n                  type=\"input\" placeholder=\"Insira o código recebido em seu e-mail\"></ion-input>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n\n            <ion-row>\n              <ion-col>\n                <ion-item color=\"light\">\n                  <ion-input #pass color=\"primary\"  formControlName=\"senha\" type=\"password\"\n                    placeholder=\"Insira sua nova senha\"></ion-input>\n                </ion-item>\n                <p-message [style]=\"{'margin-top': '3px'}\" severity=\"error\" text=\"Obrigatório, mínimo de 6 caracteres\"\n                  *ngIf=\"isInputError('senha')\"></p-message>\n              </ion-col>\n            </ion-row>\n\n            <ion-row>\n              <ion-col>\n                <ion-button expand=\"block\" fill=\"solid\" [disabled]=\"disableBTN()\" (click)=\"doReset()\">Resetar\n                </ion-button>\n              </ion-col>\n            </ion-row>\n\n          </ng-container>\n\n        </form>\n      </div>\n    </div>\n  </ion-grid>\n\n\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_password-reset_password-reset_module_ts.js.map