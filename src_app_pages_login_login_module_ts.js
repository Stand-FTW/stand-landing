"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_login_login_module_ts"],{

/***/ 73403:
/*!*****************************************************!*\
  !*** ./src/app/pages/login/login-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageRoutingModule": () => (/* binding */ LoginPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page */ 3058);




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_0__.LoginPage
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ 21053:
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageModule": () => (/* binding */ LoginPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/inputtext */ 69906);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/button */ 76328);
/* harmony import */ var primeng_carousel__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/carousel */ 8707);
/* harmony import */ var primeng_divider__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/divider */ 1154);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/ripple */ 84538);
/* harmony import */ var primeng_checkbox__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/checkbox */ 92494);
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-routing.module */ 73403);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page */ 3058);
/* harmony import */ var _shared_directive_directives_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/directive/directives.module */ 9406);














let LoginPageModule = class LoginPageModule {
};
LoginPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            primeng_inputtext__WEBPACK_IMPORTED_MODULE_8__.InputTextModule,
            primeng_button__WEBPACK_IMPORTED_MODULE_9__.ButtonModule,
            primeng_carousel__WEBPACK_IMPORTED_MODULE_10__.CarouselModule,
            primeng_divider__WEBPACK_IMPORTED_MODULE_11__.DividerModule,
            primeng_ripple__WEBPACK_IMPORTED_MODULE_12__.RippleModule,
            primeng_checkbox__WEBPACK_IMPORTED_MODULE_13__.CheckboxModule,
            _shared_directive_directives_module__WEBPACK_IMPORTED_MODULE_2__.DirectivesModule,
            _login_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginPageRoutingModule,
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_1__.LoginPage]
    })
], LoginPageModule);



/***/ }),

/***/ 3058:
/*!*******************************************!*\
  !*** ./src/app/pages/login/login.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPage": () => (/* binding */ LoginPage)
/* harmony export */ });
/* harmony import */ var _home_m4estro_Documentos_Code_Neg_cios_StandIO_Conds_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _login_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page.html?ngResource */ 96752);
/* harmony import */ var _login_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.page.scss?ngResource */ 98433);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _capacitor_device__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @capacitor/device */ 4744);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 26078);
/* harmony import */ var _shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../shared/services/auth/auth.service */ 16256);
/* harmony import */ var _shared_services_preferences_preferences_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/services/preferences/preferences.service */ 9683);
/* harmony import */ var _shared_services_theme_theme_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../shared/services/theme/theme.service */ 8601);
/* harmony import */ var _config_api_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../../config/api.config */ 99038);
/* harmony import */ var _shared_services_toast_toast_message_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../../shared/services/toast/toast-message.service */ 12973);




/* eslint-disable max-len */










let LoginPage = class LoginPage {
  constructor(router, menu, auth, preferencesService, themeService, activatedRoute, toastService) {
    this.router = router;
    this.menu = menu;
    this.auth = auth;
    this.preferencesService = preferencesService;
    this.themeService = themeService;
    this.activatedRoute = activatedRoute;
    this.toastService = toastService;
    this.credenciais = {
      username: 'super-admin@dominio.com',
      password: '123'
    };
    this.features = [];
    this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_9__.Subscription();
  }
  ngOnInit() {
    document.body.setAttribute('color-theme', 'light');
    this.themeService.switchTheme('saga-blue');
    this.menu.close();
    this.features = [{
      title: 'Gestão',
      image: 'assets/imgs/login/gestao.jpg',
      text: 'Gerencie seus colaboradores, moradores, imóveis, encomendas e por ai vai.'
    }, {
      title: 'Operação',
      image: 'assets/imgs/login/operacao.jpg',
      text: 'Realiza a operação de seu condomínio, seja monitoramento de chamados de serviços, encomendas ou dos recursos disponíveis.'
    }, {
      title: 'Infinitas possibilidades',
      image: 'assets/imgs/login/infinito.jpg',
      text: 'Relatórios e dashboards personalizados, precisa de algo a mais? Podemos ajudar.'
    }];
  }
  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
  ionViewWillEnter() {
    document.body.setAttribute('color-theme', 'light');
    this.themeService.switchTheme('saga-blue');
    this.menu.close();
    this.menu.enable(false);
  }
  ionViewDidEnter() {
    var _this = this;
    return (0,_home_m4estro_Documentos_Code_Neg_cios_StandIO_Conds_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const sub = _this.auth.refreshToken().subscribe( /*#__PURE__*/function () {
          var _ref = (0,_home_m4estro_Documentos_Code_Neg_cios_StandIO_Conds_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (response) {
            yield _this.auth.loginSucesso(response);
            _this.router.navigateByUrl('home');
          });
          return function (_x) {
            return _ref.apply(this, arguments);
          };
        }(), error => {
          _this.menu.enable(true);
          _this.menu.close();
          _this.menu.enable(false);
          _this.auth.logout();
        });
        _this.subscriptions.add(sub);
      } catch (e) {
        _this.menu.enable(true);
        _this.menu.close();
        _this.menu.enable(false);
      }
    })();
  }
  ionViewWillLeave() {
    const theme = this.preferencesService.getThemePreference();
    document.body.setAttribute('color-theme', theme);
    if (theme === 'dark') {
      const themeName = this.preferencesService.getThemeName() || 'arya-blue';
      this.preferencesService.setThemePreference('dark', themeName);
      this.themeService.switchTheme(themeName);
    } else {
      const themeName = this.preferencesService.getThemeName() || 'saga-blue';
      this.preferencesService.setThemePreference('light', themeName);
      this.themeService.switchTheme(themeName);
    }
    this.menu.enable(true);
  }
  login() {
    var _this2 = this;
    return (0,_home_m4estro_Documentos_Code_Neg_cios_StandIO_Conds_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this2.controlLoginButton()) {
        return;
      }
      if (_this2.credenciais.username.trim().toUpperCase().includes('URL:')) {
        _this2.forceNewUrl();
        return;
      }
      const {
        uuid
      } = yield _capacitor_device__WEBPACK_IMPORTED_MODULE_3__.Device.getId();
      //this.credenciais.current_machine_id = uuid;
      const sub = _this2.auth.authenticate(_this2.credenciais).subscribe( /*#__PURE__*/function () {
        var _ref2 = (0,_home_m4estro_Documentos_Code_Neg_cios_StandIO_Conds_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (response) {
          yield _this2.auth.loginSucesso(response);
          const url = _this2.activatedRoute.snapshot.queryParamMap.get('redirect') || 'home';
          _this2.router.navigateByUrl(url);
        });
        return function (_x2) {
          return _ref2.apply(this, arguments);
        };
      }(), error => {});
      _this2.subscriptions.add(sub);
    })();
  }
  goToRequestReset() {
    var _this3 = this;
    return (0,_home_m4estro_Documentos_Code_Neg_cios_StandIO_Conds_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this3.router.navigateByUrl('password-reset');
    })();
  }
  setFocus(nextElement) {
    nextElement.setFocus();
  }
  controlLoginButton() {
    if (this.credenciais.username && this.credenciais.username) {
      return false;
    }
    return true;
  }
  forceNewUrl() {
    const {
      username
    } = this.credenciais;
    const newUrl = username.trim().toUpperCase().split('URL:').pop().trim();
    (0,_config_api_config__WEBPACK_IMPORTED_MODULE_7__.changeBaseURL)(newUrl);
  }
};
LoginPage.ctorParameters = () => [{
  type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.Router
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.MenuController
}, {
  type: _shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__.AuthService
}, {
  type: _shared_services_preferences_preferences_service__WEBPACK_IMPORTED_MODULE_5__.PreferencesService
}, {
  type: _shared_services_theme_theme_service__WEBPACK_IMPORTED_MODULE_6__.ThemeService
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.ActivatedRoute
}, {
  type: _shared_services_toast_toast_message_service__WEBPACK_IMPORTED_MODULE_8__.ToastMessageService
}];
LoginPage = (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_13__.Component)({
  selector: 'app-login',
  template: _login_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_login_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], LoginPage);


/***/ }),

/***/ 44758:
/*!****************************************************************!*\
  !*** ./node_modules/@capacitor/device/dist/esm/definitions.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 4744:
/*!**********************************************************!*\
  !*** ./node_modules/@capacitor/device/dist/esm/index.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Device": () => (/* binding */ Device)
/* harmony export */ });
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/core */ 26549);
/* harmony import */ var _definitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./definitions */ 44758);

const Device = (0,_capacitor_core__WEBPACK_IMPORTED_MODULE_0__.registerPlugin)('Device', {
  web: () => __webpack_require__.e(/*! import() */ "node_modules_capacitor_device_dist_esm_web_js").then(__webpack_require__.bind(__webpack_require__, /*! ./web */ 55168)).then(m => new m.DeviceWeb())
});



/***/ }),

/***/ 98433:
/*!********************************************************!*\
  !*** ./src/app/pages/login/login.page.scss?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "p {\n  text-align: center;\n  color: black;\n  padding: 1px 20px;\n  font-size: 0.8em;\n}\n\n.credicon {\n  font: bold 2px;\n  color: #2bc48a;\n  text-decoration: none;\n}\n\n.rodape {\n  text-align: center;\n}\n\n@media only screen and (max-width: 599px) {\n  img {\n    max-width: 300px;\n    max-height: 238px;\n  }\n}\n\nimg {\n  display: flex;\n  width: 500px;\n  height: 396px;\n  align-self: center;\n  margin: auto;\n  padding: 10px;\n}\n\na {\n  display: flex;\n  justify-content: center;\n}\n\n.border {\n  border-radius: 23px;\n  max-width: 600px;\n  margin: auto;\n  background-color: var(--ion-color-dark) !important;\n}\n\n.limiter {\n  max-width: 500px;\n  margin: auto;\n}\n\n.container {\n  max-width: 600px;\n  margin: auto;\n  justify-content: center;\n  align-items: center;\n  align-self: center;\n  align-content: center;\n}\n\n/*\nion-content {\n  --background: url(\"../../assets/Fundos/PC/1.jpg\") no-repeat center center / cover !important;\n}\n*/\n\nion-item {\n  --border-radius: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLnBhZ2Uuc2NzcyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL05lZyVDMyVCM2Npb3MvU3RhbmRJTy1Db25kcy9mcm9udGVuZC9zcmMvYXBwL3BhZ2VzL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUNDRjs7QURDQTtFQUNFLGNBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7QUNFRjs7QURDQTtFQUNFLGtCQUFBO0FDRUY7O0FEQ0E7RUFDRTtJQUNFLGdCQUFBO0lBQ0EsaUJBQUE7RUNFRjtBQUNGOztBRENBO0VBQ0UsYUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQ0NGOztBREVBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0FDQ0Y7O0FERUE7RUFDRSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGtEQUFBO0FDQ0Y7O0FERUE7RUFDRSxnQkFBQTtFQUNBLFlBQUE7QUNDRjs7QURFQTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtFQUVBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0FDQUY7O0FER0E7Ozs7Q0FBQTs7QUFLQTtFQUNFLHFCQUFBO0FDQUYiLCJmaWxlIjoibG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsicCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IGJsYWNrO1xuICBwYWRkaW5nOiAxcHggMjBweDtcbiAgZm9udC1zaXplOiAwLjhlbTtcbn1cbi5jcmVkaWNvbiB7XG4gIGZvbnQ6IGJvbGQgMnB4O1xuICBjb2xvcjogIzJiYzQ4YTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4ucm9kYXBlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU5OXB4KSB7XG4gIGltZyB7XG4gICAgbWF4LXdpZHRoOiAzMDBweDtcbiAgICBtYXgtaGVpZ2h0OiAyMzhweDtcbiAgfVxufVxuXG5pbWcge1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogNTAwcHg7XG4gIGhlaWdodDogMzk2cHg7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgbWFyZ2luOiBhdXRvO1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG5hIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5ib3JkZXIge1xuICBib3JkZXItcmFkaXVzOiAyM3B4O1xuICBtYXgtd2lkdGg6IDYwMHB4O1xuICBtYXJnaW46IGF1dG87XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKSAhaW1wb3J0YW50O1xufVxuXG4ubGltaXRlciB7XG4gIG1heC13aWR0aDogNTAwcHg7XG4gIG1hcmdpbjogYXV0bztcbn1cblxuLmNvbnRhaW5lciB7XG4gIG1heC13aWR0aDogNjAwcHg7XG4gIG1hcmdpbjogYXV0bztcblxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG59XG5cbi8qXG5pb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vYXNzZXRzL0Z1bmRvcy9QQy8xLmpwZ1wiKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlciAvIGNvdmVyICFpbXBvcnRhbnQ7XG59XG4qL1xuaW9uLWl0ZW0ge1xuICAtLWJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG4iLCJwIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogYmxhY2s7XG4gIHBhZGRpbmc6IDFweCAyMHB4O1xuICBmb250LXNpemU6IDAuOGVtO1xufVxuXG4uY3JlZGljb24ge1xuICBmb250OiBib2xkIDJweDtcbiAgY29sb3I6ICMyYmM0OGE7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLnJvZGFwZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1OTlweCkge1xuICBpbWcge1xuICAgIG1heC13aWR0aDogMzAwcHg7XG4gICAgbWF4LWhlaWdodDogMjM4cHg7XG4gIH1cbn1cbmltZyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiA1MDBweDtcbiAgaGVpZ2h0OiAzOTZweDtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICBtYXJnaW46IGF1dG87XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5cbmEge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmJvcmRlciB7XG4gIGJvcmRlci1yYWRpdXM6IDIzcHg7XG4gIG1heC13aWR0aDogNjAwcHg7XG4gIG1hcmdpbjogYXV0bztcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspICFpbXBvcnRhbnQ7XG59XG5cbi5saW1pdGVyIHtcbiAgbWF4LXdpZHRoOiA1MDBweDtcbiAgbWFyZ2luOiBhdXRvO1xufVxuXG4uY29udGFpbmVyIHtcbiAgbWF4LXdpZHRoOiA2MDBweDtcbiAgbWFyZ2luOiBhdXRvO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG59XG5cbi8qXG5pb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vYXNzZXRzL0Z1bmRvcy9QQy8xLmpwZ1wiKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlciAvIGNvdmVyICFpbXBvcnRhbnQ7XG59XG4qL1xuaW9uLWl0ZW0ge1xuICAtLWJvcmRlci1yYWRpdXM6IDEwcHg7XG59Il19 */";

/***/ }),

/***/ 96752:
/*!********************************************************!*\
  !*** ./src/app/pages/login/login.page.html?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "<ion-content appScrollTheme>\n\n  <div class=\"surface-ground px-4 py-8 md:px-6 lg:px-8\">\n    <div class=\"flex flex-wrap shadow-2\">\n      <div class=\"w-full lg:w-6 px-0 py-4 lg:p-7 surface-800\">\n        <!-- \n          <img src=\"assets/imgs/logos/login-bg.png\" alt=\"Image\" height=\"35\" class=\"mb-6\">\n        -->\n        <p-carousel [value]=\"features\" indicatorStyleClass=\"hover:bg-primary-500\" [showNavigators]=\"false\">\n          <ng-template let-feature pTemplate=\"item\">\n            <div class=\"text-center mb-8\">\n              <img [src]=\"feature.image\" alt=\"Image\" class=\"mb-6 w-8 border-circle\">\n              <div class=\"mx-auto font-medium text-xl mb-4 text-blue-300\">{{feature.title}}</div>\n              <p class=\"m-0 text-lg text-blue-100 line-height-3\">{{feature.text}}</p>\n            </div>\n          </ng-template>\n        </p-carousel>\n      </div>\n      <div class=\"w-full lg:w-6 p-4 lg:p-7 surface-card\">\n        <div class=\"mb-5\">\n          <div class=\"text-2xl font-medium text-900\">Stand FTW ®</div>\n          <div class=\"text-xl font-medium text-700 mt-2\">Condomínios</div>\n          <!--\n            <a tabindex=\"0\"\n            class=\"font-medium text-blue-500 hover:text-blue-700 cursor-pointer transition-colors transition-duration-150\">Sign\n            up</a>\n          -->\n        </div>\n\n        <label for=\"email4\" class=\"block text-900 font-medium mb-2\">Email</label>\n        <input id=\"email4\" type=\"text\" placeholder=\"Email address\" pInputText class=\"w-full mb-3 p-3\"\n          (keyup.enter)=\"setFocus(pass)\" [(ngModel)]=\"credenciais.username\" [ngModelOptions]=\"{standalone: true}\"\n          type=\"email\" placeholder=\"Insira seu usuário\">\n\n        <label for=\"password4\" class=\"block text-900 font-medium mb-2\">Password</label>\n        <input id=\"password4\" #pass color=\"primary\" (keyup.enter)=\"login()\" [(ngModel)]=\"credenciais.password\"\n          [ngModelOptions]=\"{standalone: true}\" type=\"password\" placeholder=\"Insira sua senha\" placeholder=\"Password\"\n          pInputText class=\"w-full mb-3 p-3\">\n\n        <div class=\"flex align-items-center justify-content-end mb-6\">\n          <a class=\"font-medium text-blue-500 hover:text-blue-700 cursor-pointer transition-colors transition-duration-150\"\n            (click)=\"goToRequestReset()\">Esqueceu sua senha?</a>\n        </div>\n\n        <button pButton pRipple label=\"Entrar\" class=\"w-full py-3 font-medium\" [disabled]=\"controlLoginButton()\"\n          (click)=\"login()\"></button>\n      </div>\n    </div>\n  </div>\n\n</ion-content>";

/***/ }),

/***/ 69906:
/*!*************************************************************!*\
  !*** ./node_modules/primeng/fesm2020/primeng-inputtext.mjs ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InputText": () => (/* binding */ InputText),
/* harmony export */   "InputTextModule": () => (/* binding */ InputTextModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 2508);




class InputText {
  constructor(el, ngModel, cd) {
    this.el = el;
    this.ngModel = ngModel;
    this.cd = cd;
  }
  ngAfterViewInit() {
    this.updateFilledState();
    this.cd.detectChanges();
  }
  ngDoCheck() {
    this.updateFilledState();
  }
  onInput(e) {
    this.updateFilledState();
  }
  updateFilledState() {
    this.filled = this.el.nativeElement.value && this.el.nativeElement.value.length || this.ngModel && this.ngModel.model;
  }
}
InputText.ɵfac = function InputText_Factory(t) {
  return new (t || InputText)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgModel, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef));
};
InputText.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: InputText,
  selectors: [["", "pInputText", ""]],
  hostAttrs: [1, "p-inputtext", "p-component", "p-element"],
  hostVars: 2,
  hostBindings: function InputText_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function InputText_input_HostBindingHandler($event) {
        return ctx.onInput($event);
      });
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("p-filled", ctx.filled);
    }
  }
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InputText, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[pInputText]',
      host: {
        class: 'p-inputtext p-component p-element',
        '[class.p-filled]': 'filled'
      }
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }, {
      type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgModel,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }];
  }, {
    onInput: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
      args: ['input', ['$event']]
    }]
  });
})();
class InputTextModule {}
InputTextModule.ɵfac = function InputTextModule_Factory(t) {
  return new (t || InputTextModule)();
};
InputTextModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: InputTextModule,
  declarations: [InputText],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule],
  exports: [InputText]
});
InputTextModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InputTextModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule],
      exports: [InputText],
      declarations: [InputText]
    }]
  }], null, null);
})();

/**
 * Generated bundle index. Do not edit.
 */



/***/ })

}]);
//# sourceMappingURL=src_app_pages_login_login_module_ts.js.map