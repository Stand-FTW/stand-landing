"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_home_home_module_ts"],{

/***/ 96610:
/*!***************************************************!*\
  !*** ./src/app/pages/home/home-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageRoutingModule": () => (/* binding */ HomePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 10678);




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

/***/ 57994:
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageModule": () => (/* binding */ HomePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 19200);
/* harmony import */ var primeng_splitter__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! primeng/splitter */ 80330);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/button */ 76328);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/toast */ 29129);
/* harmony import */ var primeng_menu__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/menu */ 60625);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/ripple */ 84538);
/* harmony import */ var primeng_paginator__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/paginator */ 42722);
/* harmony import */ var primeng_chart__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/chart */ 62348);
/* harmony import */ var ngx_echarts__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ngx-echarts */ 31548);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home-routing.module */ 96610);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page */ 10678);
/* harmony import */ var _shared_directive_directives_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/directive/directives.module */ 9406);
/* harmony import */ var _shared_pipes_pipe_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../shared/pipes/pipe.module */ 67361);
/* harmony import */ var _shared_components_adm_recurso_module_adm_recurso_module_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../shared/components/adm-recurso-module/adm-recurso-module.module */ 38543);
/* harmony import */ var _shared_components_utils_attention_surface_attention_surface_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../shared/components/utils/attention-surface/attention-surface.module */ 218);




















let HomePageModule = class HomePageModule {
};
HomePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonicModule,
            primeng_button__WEBPACK_IMPORTED_MODULE_11__.ButtonModule,
            primeng_ripple__WEBPACK_IMPORTED_MODULE_12__.RippleModule,
            primeng_toast__WEBPACK_IMPORTED_MODULE_13__.ToastModule,
            primeng_menu__WEBPACK_IMPORTED_MODULE_14__.MenuModule,
            primeng_paginator__WEBPACK_IMPORTED_MODULE_15__.PaginatorModule,
            primeng_chart__WEBPACK_IMPORTED_MODULE_16__.ChartModule,
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_17__.FontAwesomeModule,
            primeng_splitter__WEBPACK_IMPORTED_MODULE_18__.SplitterModule,
            ngx_echarts__WEBPACK_IMPORTED_MODULE_19__.NgxEchartsModule.forRoot({
                echarts: () => __webpack_require__.e(/*! import() */ "node_modules_echarts_index_js").then(__webpack_require__.bind(__webpack_require__, /*! echarts */ 72750)),
            }),
            _home_routing_module__WEBPACK_IMPORTED_MODULE_0__.HomePageRoutingModule,
            _shared_directive_directives_module__WEBPACK_IMPORTED_MODULE_2__.DirectivesModule,
            _shared_pipes_pipe_module__WEBPACK_IMPORTED_MODULE_3__.PipeModule,
            _shared_components_adm_recurso_module_adm_recurso_module_module__WEBPACK_IMPORTED_MODULE_4__.AdmRecursoModuleModule,
            _shared_components_utils_attention_surface_attention_surface_module__WEBPACK_IMPORTED_MODULE_5__.AttentionSurfaceModule,
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_1__.HomePage]
    })
], HomePageModule);



/***/ }),

/***/ 10678:
/*!*****************************************!*\
  !*** ./src/app/pages/home/home.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePage": () => (/* binding */ HomePage)
/* harmony export */ });
/* harmony import */ var _home_m4estro_Documentos_Code_Neg_cios_StandIO_Conds_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _home_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page.html?ngResource */ 8380);
/* harmony import */ var _home_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.page.scss?ngResource */ 12260);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs */ 26078);
/* harmony import */ var _capacitor_camera__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @capacitor/camera */ 4241);
/* harmony import */ var _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @capacitor/filesystem */ 91662);
/* harmony import */ var _shared_constants_page_constant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../shared/constants/page.constant */ 59136);
/* harmony import */ var _shared_services_auth_storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../shared/services/auth/storage.service */ 54452);
/* harmony import */ var _shared_services_notificacao_notificacao_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../shared/services/notificacao/notificacao.service */ 7325);
/* harmony import */ var _shared_services_user_user_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../../shared/services/user/user.service */ 34758);
/* harmony import */ var _shared_utils_NotificacaoUtils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../../shared/utils/NotificacaoUtils */ 27226);
/* harmony import */ var _shared_services_toast_toast_message_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./../../shared/services/toast/toast-message.service */ 12973);
/* harmony import */ var _shared_constants_notificacao_constant__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./../../shared/constants/notificacao.constant */ 24658);
/* harmony import */ var _shared_components_adm_recurso_module_funcionarios_funcionario_profile_funcionario_profile_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./../../shared/components/adm-recurso-module/funcionarios/funcionario-profile/funcionario-profile.component */ 62812);
/* harmony import */ var _shared_services_preferences_preferences_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./../../shared/services/preferences/preferences.service */ 9683);
/* harmony import */ var _shared_constants_system_constant__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./../../shared/constants/system.constant */ 5292);
/* harmony import */ var _shared_constants_tipo_user_constant__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./../../shared/constants/tipo-user.constant */ 18109);
/* harmony import */ var _shared_services_comunicacao_emails_email_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./../../shared/services/comunicacao/emails/email.service */ 40363);























let HomePage = class HomePage {
  constructor(route, storage, usersService, notificacaoService, toastService, modal, preferencesService, emailService, alertController, platform) {
    this.route = route;
    this.storage = storage;
    this.usersService = usersService;
    this.notificacaoService = notificacaoService;
    this.toastService = toastService;
    this.modal = modal;
    this.preferencesService = preferencesService;
    this.emailService = emailService;
    this.alertController = alertController;
    this.platform = platform;
    this.notificacoes = [];
    this.condominioId = _shared_constants_system_constant__WEBPACK_IMPORTED_MODULE_14__.condominio_reserva_arvores4;
    this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_17__.Subscription();
  }
  ngOnInit() {
    this.itemsNotificacao = [{
      label: 'Opções',
      items: [{
        label: 'Atualizar',
        icon: 'pi pi-fw pi-refresh',
        command: () => {
          this.loadNotificacoes();
        }
      }]
    }];
    this.itemsUsers = [{
      label: 'Opções',
      items: [{
        label: 'Atualizar',
        icon: 'pi pi-fw pi-refresh',
        command: () => {
          this.loadColaboradores();
        }
      }]
    }];
    this.user = this.storage.getCompleteLocalUser();
    if (false) {}
    this.loadColaboradores();
    this.loadNotificacoes();
    this.loadMoradores();
  }
  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
  ionViewDidEnter() {
    var _this = this;
    return (0,_home_m4estro_Documentos_Code_Neg_cios_StandIO_Conds_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const platforms = _this.platform.platforms();
      if (platforms.includes('android') || platforms.includes('ios')) {
        yield _this.requestCameraPermission();
        yield _this.requestFilePermission();
      }
    })();
  }
  loadNotificacoes() {
    const sub = this.notificacaoService.listSelf().subscribe(notificacoes => {
      this.notificacoes = notificacoes;
    });
    this.subscriptions.add(sub);
  }
  loadColaboradores(page = 1) {
    const sub = this.usersService.listUsers({
      condominio_id: this.condominioId
    }, {
      order: _shared_constants_page_constant__WEBPACK_IMPORTED_MODULE_5__.PageOrder.ASC,
      page,
      take: 10
    }).subscribe(users => {
      users.data = users.data.filter(u => u.id !== this.user.id);
      this.colaboradores = users;
    });
    this.subscriptions.add(sub);
  }
  paginarColaborador(event) {
    const page = event.page + 1;
    this.loadColaboradores(page);
  }
  loadMoradores(page = 1) {
    const sub = this.usersService.listUsers({
      condominio_id: this.condominioId,
      tipo_usuario: _shared_constants_tipo_user_constant__WEBPACK_IMPORTED_MODULE_15__.TipoUsuarioEnum.USUARIO
    }, {
      order: _shared_constants_page_constant__WEBPACK_IMPORTED_MODULE_5__.PageOrder.ASC,
      page,
      take: 10
    }).subscribe(users => {
      users.data = users.data.filter(u => u.id !== this.user.id);
      this.moradores = users;
    });
    this.subscriptions.add(sub);
  }
  paginarMorador(event) {
    const page = event.page + 1;
    this.loadMoradores(page);
  }
  getNotificacaoIcon(n) {
    return _shared_utils_NotificacaoUtils__WEBPACK_IMPORTED_MODULE_9__.NotificacaoUtils.getIconByTipo(n.tipo);
  }
  getNotificacaoColor(status) {
    switch (status) {
      case _shared_constants_notificacao_constant__WEBPACK_IMPORTED_MODULE_11__.NotificacaoStatus.AVISO:
        return 'text-yellow-500';
      case _shared_constants_notificacao_constant__WEBPACK_IMPORTED_MODULE_11__.NotificacaoStatus.ERRO:
        return 'text-pink-500';
      case _shared_constants_notificacao_constant__WEBPACK_IMPORTED_MODULE_11__.NotificacaoStatus.INFO:
        return 'text-blue-500';
      case _shared_constants_notificacao_constant__WEBPACK_IMPORTED_MODULE_11__.NotificacaoStatus.SUCESSO:
        return 'text-green-500';
      default:
        return 'text-blue-500';
    }
  }
  openPerfil() {
    this.showModal(_shared_components_adm_recurso_module_funcionarios_funcionario_profile_funcionario_profile_component__WEBPACK_IMPORTED_MODULE_12__.FuncionarioProfileComponent, {
      user: this.user,
      enableMessageAndNotification: true
    });
  }
  openMembro(user) {
    this.showModal(_shared_components_adm_recurso_module_funcionarios_funcionario_profile_funcionario_profile_component__WEBPACK_IMPORTED_MODULE_12__.FuncionarioProfileComponent, {
      user
    });
  }
  goToPDV() {
    this.route.navigateByUrl('pdv');
  }
  goToPrestacaoServico() {
    // this.route.navigateByUrl('prestacao-servico');
  }
  goToAssinatura() {
    // this.route.navigateByUrl('assinatura');
  }
  goToSendEmail(user) {
    this.emailService.addEmailToList(user.email);
    const extras = {
      queryParams: {
        tab: 'email-send'
      }
    };
    this.route.navigate(['/comunicacao-email'], extras);
  }
  getTheme() {
    const theme = this.preferencesService.getThemePreference();
    this.inAndOutDash.backgroundColor = this.preferencesService.surfaceBackground;
    return theme == 'dark' ? theme : undefined;
  }
  requestCameraPermission() {
    var _this2 = this;
    return (0,_home_m4estro_Documentos_Code_Neg_cios_StandIO_Conds_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const permissions = yield _capacitor_camera__WEBPACK_IMPORTED_MODULE_3__.Camera.checkPermissions();
        console.log(`Permissões à câmera: ${permissions}`);
        if (permissions.camera != 'granted' || permissions.photos != 'granted') {
          const alert = yield _this2.alertController.create({
            header: 'Permissões à câmera e galeria',
            message: 'Necessário para realizar operações com anexo de encomendas',
            buttons: ['OK']
          });
          yield alert.present();
          yield alert.onDidDismiss();
          yield _capacitor_camera__WEBPACK_IMPORTED_MODULE_3__.Camera.requestPermissions({
            permissions: ['camera', 'photos']
          });
        }
      } catch (e) {
        console.error(`Não foi possível pedir permissão à câmera/fotos`);
        console.error(e);
      }
    })();
  }
  requestFilePermission() {
    var _this3 = this;
    return (0,_home_m4estro_Documentos_Code_Neg_cios_StandIO_Conds_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const permissions = yield _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_4__.Filesystem.checkPermissions();
        console.log(`Permissões à arquivos: ${permissions}`);
        if (permissions.publicStorage != 'granted') {
          const alert = yield _this3.alertController.create({
            header: 'Permissões à arquivos',
            message: 'Necessário para poder salvar arquivos e comprovantes',
            buttons: ['OK'],
            backdropDismiss: false
          });
          yield alert.present();
          yield alert.onDidDismiss();
          yield _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_4__.Filesystem.requestPermissions();
        }
      } catch (e) {
        console.error(`Não foi possível pedir permissão aos arquivos`);
        console.error(e);
      }
    })();
  }
  showModal(component, componentProps) {
    var _this4 = this;
    return (0,_home_m4estro_Documentos_Code_Neg_cios_StandIO_Conds_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const modal = yield _this4.modal.create({
        component,
        backdropDismiss: false,
        cssClass: 'modal-size-100',
        componentProps
      });
      modal.onDidDismiss().then(data => {
        const {
          data: updatedUser
        } = data;
        if (updatedUser) {
          _this4.user = _this4.storage.getCompleteLocalUser();
        }
      });
      return yield modal.present();
    })();
  }
};
HomePage.ctorParameters = () => [{
  type: _angular_router__WEBPACK_IMPORTED_MODULE_18__.Router
}, {
  type: _shared_services_auth_storage_service__WEBPACK_IMPORTED_MODULE_6__.StorageService
}, {
  type: _shared_services_user_user_service__WEBPACK_IMPORTED_MODULE_8__.UserService
}, {
  type: _shared_services_notificacao_notificacao_service__WEBPACK_IMPORTED_MODULE_7__.NotificacaoService
}, {
  type: _shared_services_toast_toast_message_service__WEBPACK_IMPORTED_MODULE_10__.ToastMessageService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_19__.ModalController
}, {
  type: _shared_services_preferences_preferences_service__WEBPACK_IMPORTED_MODULE_13__.PreferencesService
}, {
  type: _shared_services_comunicacao_emails_email_service__WEBPACK_IMPORTED_MODULE_16__.EmailService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_19__.AlertController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_19__.Platform
}];
HomePage = (0,tslib__WEBPACK_IMPORTED_MODULE_20__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_21__.Component)({
  selector: 'app-home',
  template: _home_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_home_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], HomePage);


/***/ }),

/***/ 7325:
/*!********************************************************************!*\
  !*** ./src/app/shared/services/notificacao/notificacao.service.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotificacaoService": () => (/* binding */ NotificacaoService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_config_api_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/config/api.config */ 99038);




let NotificacaoService = class NotificacaoService {
    constructor(http) {
        this.http = http;
    }
    listSelf() {
        return this.http.get(`${src_config_api_config__WEBPACK_IMPORTED_MODULE_0__.API_CONFIG.baseURL}/notificacoes`, {
            responseType: 'json',
        });
    }
    listByUser(user_id) {
        return this.http.get(`${src_config_api_config__WEBPACK_IMPORTED_MODULE_0__.API_CONFIG.baseURL}/notificacoes/${user_id}`, {
            responseType: 'json',
        });
    }
    markAsReadById(id) {
        return this.http.patch(`${src_config_api_config__WEBPACK_IMPORTED_MODULE_0__.API_CONFIG.baseURL}/notificacoes/${id}/read`, {
            responseType: 'json',
        });
    }
    markAsUnreadById(id) {
        return this.http.patch(`${src_config_api_config__WEBPACK_IMPORTED_MODULE_0__.API_CONFIG.baseURL}/notificacoes/${id}/unread`, {
            responseType: 'json',
        });
    }
};
NotificacaoService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient }
];
NotificacaoService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], NotificacaoService);



/***/ }),

/***/ 27226:
/*!**************************************************!*\
  !*** ./src/app/shared/utils/NotificacaoUtils.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotificacaoUtils": () => (/* binding */ NotificacaoUtils)
/* harmony export */ });
/* harmony import */ var _constants_notificacao_constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/notificacao.constant */ 24658);

class NotificacaoUtils {
    static getIconByTipo(tipo) {
        switch (tipo) {
            case _constants_notificacao_constant__WEBPACK_IMPORTED_MODULE_0__.NotificacaoTipoEnum.CARGA:
                return 'pi pi-cloud-upload';
            case _constants_notificacao_constant__WEBPACK_IMPORTED_MODULE_0__.NotificacaoTipoEnum.MENSAGEM_COMUM:
                return 'pi pi-envelope';
            case _constants_notificacao_constant__WEBPACK_IMPORTED_MODULE_0__.NotificacaoTipoEnum.MENSAGEM_PRIORITARIA:
                return 'pi pi-info-circle';
            case _constants_notificacao_constant__WEBPACK_IMPORTED_MODULE_0__.NotificacaoTipoEnum.MENSAGEM_PROGRAMADA:
                return 'pi pi-directions';
            default:
                return 'pi pi-comment';
        }
    }
}


/***/ }),

/***/ 93568:
/*!********************************************************************!*\
  !*** ./node_modules/@capacitor/filesystem/dist/esm/definitions.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Directory": () => (/* binding */ Directory),
/* harmony export */   "Encoding": () => (/* binding */ Encoding),
/* harmony export */   "FilesystemDirectory": () => (/* binding */ FilesystemDirectory),
/* harmony export */   "FilesystemEncoding": () => (/* binding */ FilesystemEncoding)
/* harmony export */ });
var Directory;
(function (Directory) {
  /**
   * The Documents directory
   * On iOS it's the app's documents directory.
   * Use this directory to store user-generated content.
   * On Android it's the Public Documents folder, so it's accessible from other apps.
   * It's not accesible on Android 10 unless the app enables legacy External Storage
   * by adding `android:requestLegacyExternalStorage="true"` in the `application` tag
   * in the `AndroidManifest.xml`.
   * It's not accesible on Android 11 or newer.
   *
   * @since 1.0.0
   */
  Directory["Documents"] = "DOCUMENTS";
  /**
   * The Data directory
   * On iOS it will use the Documents directory.
   * On Android it's the directory holding application files.
   * Files will be deleted when the application is uninstalled.
   *
   * @since 1.0.0
   */
  Directory["Data"] = "DATA";
  /**
   * The Library directory
   * On iOS it will use the Library directory.
   * On Android it's the directory holding application files.
   * Files will be deleted when the application is uninstalled.
   *
   * @since 1.1.0
   */
  Directory["Library"] = "LIBRARY";
  /**
   * The Cache directory
   * Can be deleted in cases of low memory, so use this directory to write app-specific files
   * that your app can re-create easily.
   *
   * @since 1.0.0
   */
  Directory["Cache"] = "CACHE";
  /**
   * The external directory
   * On iOS it will use the Documents directory
   * On Android it's the directory on the primary shared/external
   * storage device where the application can place persistent files it owns.
   * These files are internal to the applications, and not typically visible
   * to the user as media.
   * Files will be deleted when the application is uninstalled.
   *
   * @since 1.0.0
   */
  Directory["External"] = "EXTERNAL";
  /**
   * The external storage directory
   * On iOS it will use the Documents directory
   * On Android it's the primary shared/external storage directory.
   * It's not accesible on Android 10 unless the app enables legacy External Storage
   * by adding `android:requestLegacyExternalStorage="true"` in the `application` tag
   * in the `AndroidManifest.xml`.
   * It's not accesible on Android 11 or newer.
   *
   * @since 1.0.0
   */
  Directory["ExternalStorage"] = "EXTERNAL_STORAGE";
})(Directory || (Directory = {}));
var Encoding;
(function (Encoding) {
  /**
   * Eight-bit UCS Transformation Format
   *
   * @since 1.0.0
   */
  Encoding["UTF8"] = "utf8";
  /**
   * Seven-bit ASCII, a.k.a. ISO646-US, a.k.a. the Basic Latin block of the
   * Unicode character set
   * This encoding is only supported on Android.
   *
   * @since 1.0.0
   */
  Encoding["ASCII"] = "ascii";
  /**
   * Sixteen-bit UCS Transformation Format, byte order identified by an
   * optional byte-order mark
   * This encoding is only supported on Android.
   *
   * @since 1.0.0
   */
  Encoding["UTF16"] = "utf16";
})(Encoding || (Encoding = {}));
/**
 * @deprecated Use `Directory`.
 * @since 1.0.0
 */
const FilesystemDirectory = Directory;
/**
 * @deprecated Use `Encoding`.
 * @since 1.0.0
 */
const FilesystemEncoding = Encoding;

/***/ }),

/***/ 91662:
/*!**************************************************************!*\
  !*** ./node_modules/@capacitor/filesystem/dist/esm/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Directory": () => (/* reexport safe */ _definitions__WEBPACK_IMPORTED_MODULE_1__.Directory),
/* harmony export */   "Encoding": () => (/* reexport safe */ _definitions__WEBPACK_IMPORTED_MODULE_1__.Encoding),
/* harmony export */   "Filesystem": () => (/* binding */ Filesystem),
/* harmony export */   "FilesystemDirectory": () => (/* reexport safe */ _definitions__WEBPACK_IMPORTED_MODULE_1__.FilesystemDirectory),
/* harmony export */   "FilesystemEncoding": () => (/* reexport safe */ _definitions__WEBPACK_IMPORTED_MODULE_1__.FilesystemEncoding)
/* harmony export */ });
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/core */ 26549);
/* harmony import */ var _definitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./definitions */ 93568);

const Filesystem = (0,_capacitor_core__WEBPACK_IMPORTED_MODULE_0__.registerPlugin)('Filesystem', {
  web: () => __webpack_require__.e(/*! import() */ "node_modules_capacitor_filesystem_dist_esm_web_js").then(__webpack_require__.bind(__webpack_require__, /*! ./web */ 64046)).then(m => new m.FilesystemWeb())
});



/***/ }),

/***/ 12260:
/*!******************************************************!*\
  !*** ./src/app/pages/home/home.page.scss?ngResource ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "ion-button {\n  min-width: 260px !important;\n  max-width: 260px !important;\n  overflow-wrap: break-word;\n  word-break: break-all;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUucGFnZS5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vTmVnJUMzJUIzY2lvcy9TdGFuZElPLUNvbmRzL2Zyb250ZW5kL3NyYy9hcHAvcGFnZXMvaG9tZS9ob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDJCQUFBO0VBQ0EsMkJBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0FDQ0oiLCJmaWxlIjoiaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tYnV0dG9uIHtcbiAgICBtaW4td2lkdGg6IDI2MHB4ICFpbXBvcnRhbnQ7XG4gICAgbWF4LXdpZHRoOiAyNjBweCAhaW1wb3J0YW50O1xuICAgIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XG4gICAgd29yZC1icmVhazogYnJlYWstYWxsO1xufVxuIiwiaW9uLWJ1dHRvbiB7XG4gIG1pbi13aWR0aDogMjYwcHggIWltcG9ydGFudDtcbiAgbWF4LXdpZHRoOiAyNjBweCAhaW1wb3J0YW50O1xuICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xuICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XG59Il19 */";

/***/ }),

/***/ 8380:
/*!******************************************************!*\
  !*** ./src/app/pages/home/home.page.html?ngResource ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Home</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content appScrollTheme>\n  <ng-container *ngIf=\"user && colaboradores && moradores\">\n    <div class=\"flex flex-column flex-auto wall-background py-2 h-screen\">\n      <div class=\"surface-section p-5\">\n        <div (click)=\"openPerfil()\" class=\"flex align-items-start flex-column lg:flex-row \n        lg:justify-content-between cursor-pointer\">\n          <div class=\"flex align-items-start flex-column md:flex-row\">\n            <img [src]=\"user.avatar_url\" class=\"mr-5 mb-3 lg:mb-0 default-avatar border-1 border-primary\" />\n            <div>\n              <span class=\"text-900 font-medium text-3xl\">{{ user.nome }}</span>\n              <div class=\"flex align-items-center flex-wrap text-sm\">\n                <div class=\"mr-5 mt-3\">\n                  <span class=\"font-medium text-500\">Condomínio</span>\n                  <div class=\"text-700 mt-2\">{{ user.condominio?.nome || \"Sem condomínio definida\" }}</div>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"mt-3 lg:mt-0\">\n            <span class=\"font-medium text-500\">{{ user.perfil.nome }}</span>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"p-5\">\n        <div class=\"grid\">\n          <ng-container *ngIf=\"simplesDash\">\n\n            <div class=\"col-12 lg:col-4 xl:col-4\">\n              <div class=\"surface-card shadow-2 p-3 border-1 border-50 border-round\">\n                <div class=\"flex justify-content-between mb-3\">\n                  <div>\n                    <span class=\"block text-500 font-medium mb-3\">Chamados</span>\n                    <div class=\"text-900 font-medium text-xl\">Total: 0</div>\n                  </div>\n                  <div class=\"flex align-items-center justify-content-center bg-blue-100 border-round cursor-pointer\"\n                    style=\"width:2.5rem;height:2.5rem\" (click)=\"goToPDV()\">\n                    <i class=\"pi pi-shopping-cart text-blue-500 text-xl\"></i>\n                  </div>\n                </div>\n                <span class=\"text-blue-500 font-medium\">Quantidade: </span>\n                <span class=\"text-500\">0</span>\n              </div>\n            </div>\n          </ng-container>\n\n\n          <div id=\"notificacoes\" class=\"col-12 xl:col-4 md:col-6\">\n            <div class=\"surface-card shadow-2 border-round p-4\">\n              <div class=\"flex align-items-center justify-content-between mb-3\">\n                <div class=\"text-900 font-medium text-xl\">Notificações</div>\n                <div>\n                  <button pButton pRipple icon=\"pi pi-ellipsis-v\" class=\"p-button-text p-button-plain p-button-rounded\"\n                    (click)=\"menu.toggle($event)\"></button>\n                  <p-menu #menu [popup]=\"true\" [model]=\"itemsNotificacao\" appendTo=\"body\"></p-menu>\n                </div>\n              </div>\n              <ng-container *ngIf=\"notificacoes\">\n                <ul class=\"list-none p-0 m-0\">\n                  <li *ngFor=\"let n of notificacoes\"\n                    class=\"py-3 border-bottom-1 surface-border flex md:align-items-start md:justify-content-between flex-column md:flex-row\">\n                    <div class=\"flex align-items-start mr-0 lg:mr-5\">\n                      <button pButton pRipple type=\"button\" [icon]=\"getNotificacaoIcon(n)\"\n                        class=\"p-button-rounded p-button-secondary p-button-text mr-3 mt-4\"></button>\n                      <div>\n                        <span class=\"text-900 font-medium block mb-2\">{{ n.nome }}</span>\n                        <div class=\"text-700 mb-2\"> {{ n.descricao }}</div>\n                        <a [ngClass]=\"{\n                          'warning' : 'text-yellow-500', \n                        'danger' : 'text-pink-500', \n                        'info' : 'text-blue-500', \n                        'success' : 'text-green-500'\n                      }[n.status]\">\n                          <span>{{ n.status | convertStatus }}</span>\n                        </a>\n                      </div>\n                    </div>\n                    <span class=\"block text-500 font-medium ml-7 md:ml-5 mt-2 md:mt-0\">{{ n.created_at | timeSince\n                      }}</span>\n                  </li>\n                </ul>\n              </ng-container>\n\n              <ng-container *ngIf=\"!notificacoes || notificacoes.length == 0\">\n                <div class=\"border-circle border-1 border-primary\">\n                  <app-attention-surface title=\"Atenção\" subtitle=\"Vazio\"\n                    message=\"Nenhuma notificação encontrada\"></app-attention-surface>\n                </div>\n              </ng-container>\n            </div>\n          </div>\n\n          <div id=\"colaboradores\" class=\"col-12 xl:col-4 md:col-6\">\n            <div class=\"surface-card shadow-2 border-round p-4\">\n              <div class=\"flex justify-content-between align-items-center mb-5\">\n                <span class=\"text-xl text-900 font-medium\">Colaboradores do condomínio</span>\n                <div>\n                  <button pButton pRipple icon=\"pi pi-ellipsis-v\" class=\"p-button-text p-button-plain p-button-rounded\"\n                    (click)=\"colab.toggle($event)\"></button>\n                  <p-menu #colab [popup]=\"true\" [model]=\"itemsUsers\" appendTo=\"body\"></p-menu>\n                </div>\n              </div>\n              <ul class=\"list-none p-0 m-0\">\n                <li *ngFor=\"let u of colaboradores.data;\"\n                  class=\"flex flex-column md:flex-row md:align-items-center md:justify-content-between mb-4\">\n                  <div class=\"flex\">\n                    <div>\n                      <span class=\"block text-900 font-medium mb-1\">{{ u.nome }}</span>\n                      <div class=\"text-600 text-xs\">{{ u.perfil.nome }}</div>\n                    </div>\n                  </div>\n                  <div class=\"mt-2 md:mt-0 flex flex-nowrap\">\n                    <!--<button pButton pRipple class=\"p-button-text p-button-plain p-button-rounded mr-1\"\n                      icon=\"pi pi-envelope\" (click)=\"goToSendEmail(u)\"></button>\n                    \n                      <button pButton pRipple class=\"p-button-text p-button-plain p-button-rounded mr-1\"\n                      icon=\"pi pi-comment\"></button>\n                    <button pButton pRipple class=\"p-button-text p-button-plain p-button-rounded mr-1\"\n                      icon=\"pi pi-external-link\" (click)=\"openMembro(u)\"></button>\n                    -->\n                  </div>\n                </li>\n              </ul>\n              <p-paginator [rows]=\"colaboradores.meta.take\" [totalRecords]=\"colaboradores.meta.itemCount\"\n                [pageLinkSize]=\"colaboradores.meta.pageCount\" (onPageChange)=\"paginarColaborador($event)\"></p-paginator>\n            </div>\n          </div>\n\n          <div id=\"moradores\" class=\"col-12 xl:col-4 md:col-6\">\n            <div class=\"surface-card shadow-2 border-round p-4\">\n              <div class=\"flex justify-content-between align-items-center mb-5\">\n                <span class=\"text-xl text-900 font-medium\">Moradores do condomínio</span>\n                <div>\n                  <button pButton pRipple icon=\"pi pi-ellipsis-v\" class=\"p-button-text p-button-plain p-button-rounded\"\n                    (click)=\"mor.toggle($event)\"></button>\n                  <p-menu #mor [popup]=\"true\" [model]=\"itemsUsers\" appendTo=\"body\"></p-menu>\n                </div>\n              </div>\n              <ul class=\"list-none p-0 m-0\">\n                <li *ngFor=\"let u of moradores.data;\"\n                  class=\"flex flex-column md:flex-row md:align-items-center md:justify-content-between mb-4\">\n                  <div class=\"flex\">\n                    <div>\n                      <span class=\"block text-900 font-medium mb-1\">{{ u.nome }}</span>\n                    </div>\n                  </div>\n                  <div class=\"mt-2 md:mt-0 flex flex-nowrap\">\n\n                    <!--\n                    <button pButton pRipple class=\"p-button-text p-button-plain p-button-rounded mr-1\"\n                      icon=\"pi pi-envelope\" (click)=\"goToSendEmail(u)\"></button>\n                      <button pButton pRipple class=\"p-button-text p-button-plain p-button-rounded mr-1\"\n                      icon=\"pi pi-comment\"></button>\n                    <button pButton pRipple class=\"p-button-text p-button-plain p-button-rounded mr-1\"\n                      icon=\"pi pi-external-link\" (click)=\"openMembro(u)\"></button>\n                    -->\n                  </div>\n                </li>\n              </ul>\n              <p-paginator [rows]=\"moradores.meta.take\" [totalRecords]=\"moradores.meta.itemCount\"\n                [pageLinkSize]=\"moradores.meta.pageCount\" (onPageChange)=\"paginarMorador($event)\"></p-paginator>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </ng-container>\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_home_home_module_ts.js.map