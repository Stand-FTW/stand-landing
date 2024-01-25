"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_administracao-cliente_administracao-cliente_module_ts"],{

/***/ 30679:
/*!*************************************************************************************!*\
  !*** ./src/app/pages/administracao-cliente/administracao-cliente-routing.module.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdministracaoClientePageRoutingModule": () => (/* binding */ AdministracaoClientePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _administracao_cliente_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./administracao-cliente.page */ 69709);




const routes = [
    {
        path: '',
        component: _administracao_cliente_page__WEBPACK_IMPORTED_MODULE_0__.AdministracaoClientePage
    }
];
let AdministracaoClientePageRoutingModule = class AdministracaoClientePageRoutingModule {
};
AdministracaoClientePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AdministracaoClientePageRoutingModule);



/***/ }),

/***/ 57958:
/*!*****************************************************************************!*\
  !*** ./src/app/pages/administracao-cliente/administracao-cliente.module.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdministracaoClientePageModule": () => (/* binding */ AdministracaoClientePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 19200);
/* harmony import */ var _administracao_cliente_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./administracao-cliente-routing.module */ 30679);
/* harmony import */ var _administracao_cliente_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./administracao-cliente.page */ 69709);
/* harmony import */ var _shared_directive_directives_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../shared/directive/directives.module */ 9406);
/* harmony import */ var _shared_components_adm_cliente_module_adm_cliente_module_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../shared/components/adm-cliente-module/adm-cliente-module.module */ 27624);










let AdministracaoClientePageModule = class AdministracaoClientePageModule {
};
AdministracaoClientePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_9__.FontAwesomeModule,
            _shared_directive_directives_module__WEBPACK_IMPORTED_MODULE_2__.DirectivesModule,
            _administracao_cliente_routing_module__WEBPACK_IMPORTED_MODULE_0__.AdministracaoClientePageRoutingModule,
            _shared_components_adm_cliente_module_adm_cliente_module_module__WEBPACK_IMPORTED_MODULE_3__.AdmClienteModuleModule,
        ],
        declarations: [_administracao_cliente_page__WEBPACK_IMPORTED_MODULE_1__.AdministracaoClientePage]
    })
], AdministracaoClientePageModule);



/***/ }),

/***/ 69709:
/*!***************************************************************************!*\
  !*** ./src/app/pages/administracao-cliente/administracao-cliente.page.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdministracaoClientePage": () => (/* binding */ AdministracaoClientePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _administracao_cliente_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./administracao-cliente.page.html?ngResource */ 71197);
/* harmony import */ var _administracao_cliente_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./administracao-cliente.page.scss?ngResource */ 89177);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);




let AdministracaoClientePage = class AdministracaoClientePage {
    constructor() {
        this.currentTab = 'cliente';
    }
    ngOnInit() {
    }
    changeTab(event) {
        this.currentTab = event.detail.value;
    }
};
AdministracaoClientePage.ctorParameters = () => [];
AdministracaoClientePage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-administracao-cliente',
        template: _administracao_cliente_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_administracao_cliente_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AdministracaoClientePage);



/***/ }),

/***/ 27624:
/*!***********************************************************************************!*\
  !*** ./src/app/shared/components/adm-cliente-module/adm-cliente-module.module.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdmClienteModuleModule": () => (/* binding */ AdmClienteModuleModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _cliente_cadastro_cliente_cadastro_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cliente-cadastro/cliente-cadastro.module */ 44588);
/* harmony import */ var _cliente_main_cliente_main_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cliente-main/cliente-main.module */ 60079);
/* harmony import */ var _cliente_detail_cliente_detail_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cliente-detail/cliente-detail.module */ 36273);
/* harmony import */ var _cliente_profile_cliente_profile_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cliente-profile/cliente-profile.module */ 69637);







let AdmClienteModuleModule = class AdmClienteModuleModule {
};
AdmClienteModuleModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        declarations: [],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _cliente_cadastro_cliente_cadastro_module__WEBPACK_IMPORTED_MODULE_0__.ClienteCadastroModule,
            _cliente_main_cliente_main_module__WEBPACK_IMPORTED_MODULE_1__.ClienteMainModule,
            _cliente_detail_cliente_detail_module__WEBPACK_IMPORTED_MODULE_2__.ClienteDetailModule,
            _cliente_profile_cliente_profile_module__WEBPACK_IMPORTED_MODULE_3__.ClienteProfileModule,
        ],
        exports: [
            _cliente_cadastro_cliente_cadastro_module__WEBPACK_IMPORTED_MODULE_0__.ClienteCadastroModule,
            _cliente_main_cliente_main_module__WEBPACK_IMPORTED_MODULE_1__.ClienteMainModule,
            _cliente_detail_cliente_detail_module__WEBPACK_IMPORTED_MODULE_2__.ClienteDetailModule,
            _cliente_profile_cliente_profile_module__WEBPACK_IMPORTED_MODULE_3__.ClienteProfileModule,
        ]
    })
], AdmClienteModuleModule);



/***/ }),

/***/ 58412:
/*!*****************************************************************************************************!*\
  !*** ./src/app/shared/components/adm-cliente-module/cliente-cadastro/cliente-cadastro.component.ts ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClienteCadastroComponent": () => (/* binding */ ClienteCadastroComponent)
/* harmony export */ });
/* harmony import */ var _home_m4estro_Documentos_Code_Neg_cios_StandIO_Conds_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _cliente_cadastro_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cliente-cadastro.component.html?ngResource */ 42685);
/* harmony import */ var _cliente_cadastro_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cliente-cadastro.component.scss?ngResource */ 36948);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 26078);
/* harmony import */ var _services_condominio_condominio_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/condominio/condominio.service */ 32724);
/* harmony import */ var _constants_page_constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../constants/page.constant */ 59136);
/* harmony import */ var _constants_role_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../constants/role.constants */ 34057);
/* harmony import */ var _services_toast_toast_message_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../../services/toast/toast-message.service */ 12973);
/* harmony import */ var _constants_system_constant__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../../constants/system.constant */ 5292);
/* harmony import */ var _services_user_user_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../../../services/user/user.service */ 34758);














let ClienteCadastroComponent = class ClienteCadastroComponent {
  constructor(formBuilder, userService, condominioService, modalCadastro, toastService) {
    this.formBuilder = formBuilder;
    this.userService = userService;
    this.condominioService = condominioService;
    this.modalCadastro = modalCadastro;
    this.toastService = toastService;
    this.currentCondominiosPage = 1;
    this.searchedCondominio = '';
    this.isLoaded = false;
    this.stepIndex = 0;
    this.createdUserId = '';
    this.userWasCreated = false;
    this.isCliente = false;
    this.maxDate = new Date();
    this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_9__.Subscription();
    this.form = this.formBuilder.group({
      nome: [, [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required]],
      email: [, [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.email]],
      cpf: [, []],
      condominio_id: [, [,]],
      identidade: [, [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.minLength(7), _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.maxLength(11)]],
      tel1: [, [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required]],
      tel2: [, []],
      data_nascimento: [, [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required]],
      grau_parentesco: [, []]
    });
  }
  ngOnInit() {
    this.steps = [{
      label: 'Informações'
    }, {
      label: 'Endereço'
    }];
    if (this.responsavel_id) {
      this.form.get('grau_parentesco').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required]);
      this.form.get('grau_parentesco').updateValueAndValidity();
    }
    // this.loadCondominios();
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
  loadCondominios(page = 1, dropdown) {
    const sub = this.condominioService.list({
      searchedCondominio: this.searchedCondominio
    }, {
      order: _constants_page_constant__WEBPACK_IMPORTED_MODULE_4__.PageOrder.ASC,
      page,
      take: 10
    }).subscribe(data => {
      this.condominios = data;
      if (dropdown) {
        dropdown.show();
      }
    });
    this.subscriptions.add(sub);
  }
  searchCondominio(dropdown) {
    this.loadCondominios(1, dropdown);
  }
  paginarCondominios(event, dropdown) {
    const {
      first,
      rows
    } = event;
    const page = Number(Number(first) / Number(rows) + 1);
    if (page != this.currentCondominiosPage) {
      this.currentCondominiosPage = page;
      this.loadCondominios(page, dropdown);
    }
  }
  create() {
    const nome = this.form.get('nome').value;
    const email = this.form.get('email').value;
    const cpf = this.form.get('cpf').value;
    //const { id: condominio_id } = this.form.get('condominio_id').value;
    const identidade = this.form.get('identidade').value;
    const tel1 = this.form.get('tel1').value;
    const tel2 = this.form.get('tel2').value;
    const data_nascimento = this.form.get('data_nascimento').value;
    const responsavel = this.responsavel_id ? {
      grau_parentesco: this.form.get('grau_parentesco').value,
      responsavel_id: this.responsavel_id
    } : undefined;
    const sub = this.userService.createUser({
      nome,
      perfil_id: _constants_system_constant__WEBPACK_IMPORTED_MODULE_7__.user_pefil_id,
      identidade,
      tel1,
      tel2,
      data_nascimento,
      email,
      cpf,
      responsavel
    }).subscribe(response => {
      this.createdUserId = response.id;
      this.userWasCreated = true;
      this.fechar();
    });
    this.subscriptions.add(sub);
  }
  changePerfil(event) {
    this.form.get('cargo_id').setValue(undefined);
    const nome = this.form.get('perfil_id').value?.nome || undefined;
    if (nome == _constants_role_constants__WEBPACK_IMPORTED_MODULE_5__.Role.CLIENTE) {
      this.isCliente = true;
      return;
    }
    this.isCliente = false;
  }
  listenEndereco(event) {
    this.fechar(this.userWasCreated);
  }
  fechar(userWasCreated = false) {
    this.modalCadastro.dismiss(this.userWasCreated);
  }
  isInputError(inputName) {
    const resp = !this.form.controls[inputName].untouched && this.form.controls[inputName].errors;
    if (resp) {
      return true;
    }
    return false;
  }
  disableCreateBtn() {
    const situacao = !this.form.valid;
    return situacao;
  }
  showModal(component, componentProps) {
    var _this = this;
    return (0,_home_m4estro_Documentos_Code_Neg_cios_StandIO_Conds_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const modal = yield _this.modalCadastro.create({
        component,
        backdropDismiss: false,
        cssClass: 'modal-size-100',
        componentProps
      });
      modal.onDidDismiss().then(data => {});
      return yield modal.present();
    })();
  }
};
ClienteCadastroComponent.ctorParameters = () => [{
  type: _angular_forms__WEBPACK_IMPORTED_MODULE_10__.UntypedFormBuilder
}, {
  type: _services_user_user_service__WEBPACK_IMPORTED_MODULE_8__.UserService
}, {
  type: _services_condominio_condominio_service__WEBPACK_IMPORTED_MODULE_3__.CondominioService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.ModalController
}, {
  type: _services_toast_toast_message_service__WEBPACK_IMPORTED_MODULE_6__.ToastMessageService
}];
ClienteCadastroComponent.propDecorators = {
  responsavel_id: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__.Input
  }]
};
ClienteCadastroComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.Component)({
  selector: 'app-cliente-cadastro',
  template: _cliente_cadastro_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_cliente_cadastro_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], ClienteCadastroComponent);


/***/ }),

/***/ 44588:
/*!**************************************************************************************************!*\
  !*** ./src/app/shared/components/adm-cliente-module/cliente-cadastro/cliente-cadastro.module.ts ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClienteCadastroModule": () => (/* binding */ ClienteCadastroModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var primeng_panel__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/panel */ 24266);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/inputtext */ 69906);
/* harmony import */ var primeng_rating__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/rating */ 62415);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/button */ 76328);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/dropdown */ 38992);
/* harmony import */ var primeng_tabview__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/tabview */ 79504);
/* harmony import */ var primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/inputtextarea */ 71102);
/* harmony import */ var primeng_message__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/message */ 73589);
/* harmony import */ var primeng_password__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! primeng/password */ 68848);
/* harmony import */ var primeng_inputmask__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! primeng/inputmask */ 51227);
/* harmony import */ var primeng_inputswitch__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! primeng/inputswitch */ 13585);
/* harmony import */ var primeng_listbox__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! primeng/listbox */ 2210);
/* harmony import */ var primeng_radiobutton__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! primeng/radiobutton */ 69902);
/* harmony import */ var primeng_checkbox__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! primeng/checkbox */ 92494);
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! primeng/dialog */ 1837);
/* harmony import */ var primeng_inputnumber__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! primeng/inputnumber */ 87990);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! primeng/ripple */ 84538);
/* harmony import */ var primeng_fileupload__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! primeng/fileupload */ 16193);
/* harmony import */ var primeng_styleclass__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! primeng/styleclass */ 82041);
/* harmony import */ var primeng_divider__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! primeng/divider */ 1154);
/* harmony import */ var primeng_avatar__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! primeng/avatar */ 37063);
/* harmony import */ var primeng_steps__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! primeng/steps */ 72420);
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! primeng/calendar */ 32547);
/* harmony import */ var _endereco_module_endereco_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../endereco-module/endereco.module */ 2635);
/* harmony import */ var _authorization_module_authorization_module_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../authorization-module/authorization-module.module */ 81338);
/* harmony import */ var _password_module_password_module_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../password-module/password-module.module */ 5226);
/* harmony import */ var _shared_directive_directives_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/directive/directives.module */ 9406);
/* harmony import */ var _cliente_cadastro_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cliente-cadastro.component */ 58412);

































let ClienteCadastroModule = class ClienteCadastroModule {
};
ClienteCadastroModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
        declarations: [_cliente_cadastro_component__WEBPACK_IMPORTED_MODULE_4__.ClienteCadastroComponent],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule,
            primeng_panel__WEBPACK_IMPORTED_MODULE_10__.PanelModule,
            primeng_inputtext__WEBPACK_IMPORTED_MODULE_11__.InputTextModule,
            primeng_rating__WEBPACK_IMPORTED_MODULE_12__.RatingModule,
            primeng_button__WEBPACK_IMPORTED_MODULE_13__.ButtonModule,
            primeng_dropdown__WEBPACK_IMPORTED_MODULE_14__.DropdownModule,
            primeng_tabview__WEBPACK_IMPORTED_MODULE_15__.TabViewModule,
            primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_16__.InputTextareaModule,
            primeng_message__WEBPACK_IMPORTED_MODULE_17__.MessageModule,
            primeng_password__WEBPACK_IMPORTED_MODULE_18__.PasswordModule,
            primeng_inputmask__WEBPACK_IMPORTED_MODULE_19__.InputMaskModule,
            primeng_inputswitch__WEBPACK_IMPORTED_MODULE_20__.InputSwitchModule,
            primeng_listbox__WEBPACK_IMPORTED_MODULE_21__.ListboxModule,
            primeng_radiobutton__WEBPACK_IMPORTED_MODULE_22__.RadioButtonModule,
            primeng_checkbox__WEBPACK_IMPORTED_MODULE_23__.CheckboxModule,
            primeng_dialog__WEBPACK_IMPORTED_MODULE_24__.DialogModule,
            primeng_calendar__WEBPACK_IMPORTED_MODULE_25__.CalendarModule,
            primeng_steps__WEBPACK_IMPORTED_MODULE_26__.StepsModule,
            primeng_inputnumber__WEBPACK_IMPORTED_MODULE_27__.InputNumberModule,
            primeng_ripple__WEBPACK_IMPORTED_MODULE_28__.RippleModule,
            primeng_fileupload__WEBPACK_IMPORTED_MODULE_29__.FileUploadModule,
            primeng_styleclass__WEBPACK_IMPORTED_MODULE_30__.StyleClassModule,
            primeng_divider__WEBPACK_IMPORTED_MODULE_31__.DividerModule,
            primeng_avatar__WEBPACK_IMPORTED_MODULE_32__.AvatarModule,
            _endereco_module_endereco_module__WEBPACK_IMPORTED_MODULE_0__.EnderecoModule,
            _shared_directive_directives_module__WEBPACK_IMPORTED_MODULE_3__.DirectivesModule,
            _authorization_module_authorization_module_module__WEBPACK_IMPORTED_MODULE_1__.AuthorizationModuleModule,
            _password_module_password_module_module__WEBPACK_IMPORTED_MODULE_2__.PasswordModuleModule,
        ],
        exports: [_cliente_cadastro_component__WEBPACK_IMPORTED_MODULE_4__.ClienteCadastroComponent],
    })
], ClienteCadastroModule);



/***/ }),

/***/ 48416:
/*!*************************************************************************************************!*\
  !*** ./src/app/shared/components/adm-cliente-module/cliente-detail/cliente-detail.component.ts ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClienteDetailComponent": () => (/* binding */ ClienteDetailComponent)
/* harmony export */ });
/* harmony import */ var _home_m4estro_Documentos_Code_Neg_cios_StandIO_Conds_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _cliente_detail_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cliente-detail.component.html?ngResource */ 88909);
/* harmony import */ var _cliente_detail_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cliente-detail.component.scss?ngResource */ 5384);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ 26078);
/* harmony import */ var _services_condominio_condominio_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/condominio/condominio.service */ 32724);
/* harmony import */ var _shared_services_perfil_perfil_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/services/perfil/perfil.service */ 37945);
/* harmony import */ var _shared_services_user_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/services/user/user.service */ 34758);
/* harmony import */ var _constants_page_constant__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../../constants/page.constant */ 59136);
/* harmony import */ var _constants_status_constant__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../../constants/status.constant */ 54692);
/* harmony import */ var _services_toast_toast_message_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../../../services/toast/toast-message.service */ 12973);
/* harmony import */ var _shared_constants_toast_constant__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../shared/constants/toast.constant */ 98739);
/* harmony import */ var _services_auth_storage_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./../../../services/auth/storage.service */ 54452);
/* harmony import */ var _constants_role_constants__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./../../../constants/role.constants */ 34057);

















let ClienteDetailComponent = class ClienteDetailComponent {
  constructor(formBuilder, userService, condominioService, perfilService, modal, toastService, toastMessageService, storage, modalDetail) {
    this.formBuilder = formBuilder;
    this.userService = userService;
    this.condominioService = condominioService;
    this.perfilService = perfilService;
    this.modal = modal;
    this.toastService = toastService;
    this.toastMessageService = toastMessageService;
    this.storage = storage;
    this.modalDetail = modalDetail;
    this.updatedEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_12__.EventEmitter();
    this.currentCondominiosPage = 1;
    this.searchedCondominio = '';
    this.isLoaded = false;
    this.stepIndex = 0;
    this.createdUserId = '';
    this.userWasCreated = false;
    this.sortStatus = _constants_status_constant__WEBPACK_IMPORTED_MODULE_7__.StatusUser;
    this.maxDate = new Date();
    this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_13__.Subscription();
  }
  ngOnInit() {
    console.log(this.user);
    this.loadCondominios();
    const {
      nome,
      status,
      condominio,
      tel1,
      tel2,
      data_nascimento
    } = this.user;
    const condominio_id = condominio?.id || undefined;
    this.form = this.formBuilder.group({
      nome: [nome, [_angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.required]],
      status: [status, [_angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.required]],
      condominio_id: [condominio_id, []],
      tel1: [tel1, [_angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.required]],
      tel2: [tel2, []],
      data_nascimento: [new Date(data_nascimento), [_angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.required]]
    });
  }
  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
  loadCondominios(page = 1, dropdown) {
    const sub = this.condominioService.list({
      searchedCondominio: this.searchedCondominio
    }, {
      order: _constants_page_constant__WEBPACK_IMPORTED_MODULE_6__.PageOrder.ASC,
      page,
      take: 10
    }).subscribe(data => {
      this.Condominios = data;
      if (dropdown) {
        dropdown.show();
      }
    });
    this.subscriptions.add(sub);
  }
  searchCondominio(dropdown) {
    this.loadCondominios(1, dropdown);
  }
  paginarCondominios(event, dropdown) {
    const {
      first,
      rows
    } = event;
    const page = Number(Number(first) / Number(rows) + 1);
    if (page != this.currentCondominiosPage) {
      this.currentCondominiosPage = page;
      this.loadCondominios(page, dropdown);
    }
  }
  update() {
    const {
      id
    } = this.user;
    const nome = this.form.get('nome').value;
    const status = this.form.get('status').value;
    // const condominio_id = this.form.get('condominio_id').value;
    const tel1 = this.form.get('tel1').value;
    const tel2 = this.form.get('tel2').value;
    const data_nascimento = this.form.get('data_nascimento').value;
    const sub = this.userService.updateUser({
      nome,
      tel1,
      tel2,
      data_nascimento,
      status
    }, id).subscribe(response => {
      this.user = response;
      this.createdUserId = response.id;
      this.userWasCreated = true;
      this.fechar(true);
    });
    this.subscriptions.add(sub);
  }
  uploadFile(event, fileUpload) {
    const {
      id: updated_user_id
    } = this.user;
    const {
      id: local_user_id
    } = this.storage.getLocalUser();
    if (!(updated_user_id == local_user_id || this.checkUpdatePermission())) {
      console.log('entrou');
      this.toastService.presentToast({
        titulo: 'Não autorizado',
        detalhe: `Apenas ${_constants_role_constants__WEBPACK_IMPORTED_MODULE_11__.Role.ADMIN} e ${_constants_role_constants__WEBPACK_IMPORTED_MODULE_11__.Role.GERENTE} podem atualizar essas informações`,
        duracao: _shared_constants_toast_constant__WEBPACK_IMPORTED_MODULE_9__.ToastEnum.mediumDuration,
        gravidade: _shared_constants_toast_constant__WEBPACK_IMPORTED_MODULE_9__.ToastPrimeSeverityEnum.ATENCAO
      });
      return;
    }
    const file = event.files[0];
    const sub = this.userService.uploadAvatar(file, updated_user_id).subscribe(response => {
      this.user = response;
      this.createdUserId = response.id;
      this.userWasCreated = true;
      this.toastMessageService.presentToast({
        detalhe: 'Foto alterada',
        duracao: _shared_constants_toast_constant__WEBPACK_IMPORTED_MODULE_9__.ToastEnum.shortDuration,
        gravidade: _shared_constants_toast_constant__WEBPACK_IMPORTED_MODULE_9__.ToastPrimeSeverityEnum.SUCESSO,
        titulo: 'Sucesso!'
      });
      this.updatedEvent.emit(this.user);
      fileUpload.clear();
    });
    this.subscriptions.add(sub);
  }
  fechar(userWasCreated = false) {
    this.modal.dismiss(this.userWasCreated);
  }
  isInputError(inputName) {
    const resp = !this.form.controls[inputName].untouched && this.form.controls[inputName].errors;
    if (resp) {
      return true;
    }
    return false;
  }
  disableUpdateBtn() {
    const situacao = !this.form.valid;
    return situacao;
  }
  checkUpdatePermission() {
    const role = this.storage.getRole();
    if (role == _constants_role_constants__WEBPACK_IMPORTED_MODULE_11__.Role.GERENTE || role == _constants_role_constants__WEBPACK_IMPORTED_MODULE_11__.Role.ADMIN) {
      return true;
    }
    return false;
  }
  showModal(component, componentProps) {
    var _this = this;
    return (0,_home_m4estro_Documentos_Code_Neg_cios_StandIO_Conds_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const modal = yield _this.modalDetail.create({
        component,
        backdropDismiss: false,
        cssClass: 'modal-size-100',
        componentProps
      });
      modal.onDidDismiss().then(data => {});
      return yield modal.present();
    })();
  }
};
ClienteDetailComponent.ctorParameters = () => [{
  type: _angular_forms__WEBPACK_IMPORTED_MODULE_14__.UntypedFormBuilder
}, {
  type: _shared_services_user_user_service__WEBPACK_IMPORTED_MODULE_5__.UserService
}, {
  type: _services_condominio_condominio_service__WEBPACK_IMPORTED_MODULE_3__.CondominioService
}, {
  type: _shared_services_perfil_perfil_service__WEBPACK_IMPORTED_MODULE_4__.PerfilService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.ModalController
}, {
  type: _services_toast_toast_message_service__WEBPACK_IMPORTED_MODULE_8__.ToastMessageService
}, {
  type: _services_toast_toast_message_service__WEBPACK_IMPORTED_MODULE_8__.ToastMessageService
}, {
  type: _services_auth_storage_service__WEBPACK_IMPORTED_MODULE_10__.StorageService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.ModalController
}];
ClienteDetailComponent.propDecorators = {
  user: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__.Input
  }],
  updatedEvent: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__.Output
  }]
};
ClienteDetailComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_16__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.Component)({
  selector: 'app-cliente-detail',
  template: _cliente_detail_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_cliente_detail_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], ClienteDetailComponent);


/***/ }),

/***/ 36273:
/*!**********************************************************************************************!*\
  !*** ./src/app/shared/components/adm-cliente-module/cliente-detail/cliente-detail.module.ts ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClienteDetailModule": () => (/* binding */ ClienteDetailModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var primeng_panel__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/panel */ 24266);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/inputtext */ 69906);
/* harmony import */ var primeng_rating__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/rating */ 62415);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/button */ 76328);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/dropdown */ 38992);
/* harmony import */ var primeng_tabview__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/tabview */ 79504);
/* harmony import */ var primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/inputtextarea */ 71102);
/* harmony import */ var primeng_message__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/message */ 73589);
/* harmony import */ var primeng_password__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! primeng/password */ 68848);
/* harmony import */ var primeng_inputmask__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! primeng/inputmask */ 51227);
/* harmony import */ var primeng_inputswitch__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! primeng/inputswitch */ 13585);
/* harmony import */ var primeng_listbox__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! primeng/listbox */ 2210);
/* harmony import */ var primeng_radiobutton__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! primeng/radiobutton */ 69902);
/* harmony import */ var primeng_checkbox__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! primeng/checkbox */ 92494);
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! primeng/dialog */ 1837);
/* harmony import */ var primeng_inputnumber__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! primeng/inputnumber */ 87990);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! primeng/ripple */ 84538);
/* harmony import */ var primeng_fileupload__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! primeng/fileupload */ 16193);
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! primeng/calendar */ 32547);
/* harmony import */ var primeng_styleclass__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! primeng/styleclass */ 82041);
/* harmony import */ var primeng_divider__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! primeng/divider */ 1154);
/* harmony import */ var primeng_avatar__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! primeng/avatar */ 37063);
/* harmony import */ var primeng_steps__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! primeng/steps */ 72420);
/* harmony import */ var _endereco_module_endereco_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../endereco-module/endereco.module */ 2635);
/* harmony import */ var _authorization_module_authorization_module_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../authorization-module/authorization-module.module */ 81338);
/* harmony import */ var _password_module_password_module_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../password-module/password-module.module */ 5226);
/* harmony import */ var _shared_directive_directives_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/directive/directives.module */ 9406);
/* harmony import */ var _cliente_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cliente-detail.component */ 48416);

































let ClienteDetailModule = class ClienteDetailModule {
};
ClienteDetailModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
        declarations: [_cliente_detail_component__WEBPACK_IMPORTED_MODULE_4__.ClienteDetailComponent],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule,
            primeng_panel__WEBPACK_IMPORTED_MODULE_10__.PanelModule,
            primeng_inputtext__WEBPACK_IMPORTED_MODULE_11__.InputTextModule,
            primeng_rating__WEBPACK_IMPORTED_MODULE_12__.RatingModule,
            primeng_button__WEBPACK_IMPORTED_MODULE_13__.ButtonModule,
            primeng_dropdown__WEBPACK_IMPORTED_MODULE_14__.DropdownModule,
            primeng_tabview__WEBPACK_IMPORTED_MODULE_15__.TabViewModule,
            primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_16__.InputTextareaModule,
            primeng_message__WEBPACK_IMPORTED_MODULE_17__.MessageModule,
            primeng_password__WEBPACK_IMPORTED_MODULE_18__.PasswordModule,
            primeng_inputmask__WEBPACK_IMPORTED_MODULE_19__.InputMaskModule,
            primeng_inputswitch__WEBPACK_IMPORTED_MODULE_20__.InputSwitchModule,
            primeng_listbox__WEBPACK_IMPORTED_MODULE_21__.ListboxModule,
            primeng_radiobutton__WEBPACK_IMPORTED_MODULE_22__.RadioButtonModule,
            primeng_calendar__WEBPACK_IMPORTED_MODULE_23__.CalendarModule,
            primeng_checkbox__WEBPACK_IMPORTED_MODULE_24__.CheckboxModule,
            primeng_dialog__WEBPACK_IMPORTED_MODULE_25__.DialogModule,
            primeng_inputnumber__WEBPACK_IMPORTED_MODULE_26__.InputNumberModule,
            primeng_ripple__WEBPACK_IMPORTED_MODULE_27__.RippleModule,
            primeng_fileupload__WEBPACK_IMPORTED_MODULE_28__.FileUploadModule,
            primeng_styleclass__WEBPACK_IMPORTED_MODULE_29__.StyleClassModule,
            primeng_divider__WEBPACK_IMPORTED_MODULE_30__.DividerModule,
            primeng_avatar__WEBPACK_IMPORTED_MODULE_31__.AvatarModule,
            primeng_steps__WEBPACK_IMPORTED_MODULE_32__.StepsModule,
            _endereco_module_endereco_module__WEBPACK_IMPORTED_MODULE_0__.EnderecoModule,
            _authorization_module_authorization_module_module__WEBPACK_IMPORTED_MODULE_1__.AuthorizationModuleModule,
            _password_module_password_module_module__WEBPACK_IMPORTED_MODULE_2__.PasswordModuleModule,
            _shared_directive_directives_module__WEBPACK_IMPORTED_MODULE_3__.DirectivesModule,
        ],
        exports: [_cliente_detail_component__WEBPACK_IMPORTED_MODULE_4__.ClienteDetailComponent],
    })
], ClienteDetailModule);



/***/ }),

/***/ 49812:
/*!*********************************************************************************************!*\
  !*** ./src/app/shared/components/adm-cliente-module/cliente-main/cliente-main.component.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClienteMainComponent": () => (/* binding */ ClienteMainComponent)
/* harmony export */ });
/* harmony import */ var _home_m4estro_Documentos_Code_Neg_cios_StandIO_Conds_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _cliente_main_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cliente-main.component.html?ngResource */ 1355);
/* harmony import */ var _cliente_main_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cliente-main.component.scss?ngResource */ 66674);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rxjs */ 26078);
/* harmony import */ var _shared_constants_toast_constant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/constants/toast.constant */ 98739);
/* harmony import */ var _constants_tipo_user_constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../constants/tipo-user.constant */ 18109);
/* harmony import */ var _constants_status_constant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../constants/status.constant */ 54692);
/* harmony import */ var _services_toast_toast_message_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../../services/toast/toast-message.service */ 12973);
/* harmony import */ var _constants_page_constant__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../../constants/page.constant */ 59136);
/* harmony import */ var _services_condominio_condominio_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../services/condominio/condominio.service */ 32724);
/* harmony import */ var _shared_services_user_user_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../shared/services/user/user.service */ 34758);
/* harmony import */ var _endereco_module_endereco_endereco_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../endereco-module/endereco/endereco.component */ 97518);
/* harmony import */ var _endereco_module_update_endereco_update_endereco_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../endereco-module/update-endereco/update-endereco.component */ 9901);
/* harmony import */ var _authorization_module_authorization_main_authorization_main_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../authorization-module/authorization-main/authorization-main.component */ 40585);
/* harmony import */ var _cliente_cadastro_cliente_cadastro_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../cliente-cadastro/cliente-cadastro.component */ 58412);
/* harmony import */ var _cliente_detail_cliente_detail_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../cliente-detail/cliente-detail.component */ 48416);
/* harmony import */ var _adm_dependentes_module_dependente_view_dependente_view_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../adm-dependentes-module/dependente-view/dependente-view.component */ 4990);
/* harmony import */ var _adm_pet_module_pet_view_pet_view_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../adm-pet-module/pet-view/pet-view.component */ 88684);
/* harmony import */ var _adm_veiculo_module_veiculo_view_veiculo_view_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../adm-veiculo-module/veiculo-view/veiculo-view.component */ 55631);






















let ClienteMainComponent = class ClienteMainComponent {
  constructor(userService, modal, toastService, CondominioService) {
    this.userService = userService;
    this.modal = modal;
    this.toastService = toastService;
    this.CondominioService = CondominioService;
    this.sortOptions = [];
    this.sortCondominios = [];
    this.isLoaded = false;
    this.searchedNome = '';
    this.selectedCondominio = '';
    this.selectedStatus = '';
    this.currentPage = 1;
    this.editMenuItens = [{
      label: 'Opções',
      items: [{
        label: 'Atualizar',
        icon: 'pi pi-user-edit',
        command: () => this.detalharAtualizar(this.selectedUser)
      }, {
        label: 'Dependentes',
        icon: 'pi pi-users',
        command: () => this.detalharDependentes(this.selectedUser)
      }, {
        label: 'Pets',
        icon: 'pi pi-heart',
        command: () => this.detalharPets(this.selectedUser)
      }, {
        label: 'Veículos',
        icon: 'pi pi-car',
        command: () => this.detalharVeiculos(this.selectedUser)
      }
      /* {
         label: 'Comunicação',
         icon: 'pi pi-megaphone',
         command: () => this.detalharComunicacao(this.selectedUser),
       }*/]
    }];

    this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_18__.Subscription();
  }
  ngOnInit() {
    //Permitir filtrar usuário por status
    this.sortOptions = [..._constants_status_constant__WEBPACK_IMPORTED_MODULE_5__.StatusCliente];
    // this.loadCondominio();
    this.loadClientes();
  }
  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
  changeFiltro({
    value
  }) {
    this.selectedStatus = value;
    this.loadClientes(1);
  }
  changeCondominio({
    value
  }) {
    this.selectedCondominio = value;
    this.loadClientes(1);
  }
  clearFilter() {
    this.loadClientes(1);
  }
  clearAllFilters(event, dropdown_Condominios, dropdown_filtro) {
    this.searchedNome = undefined;
    this.selectedCondominio = undefined;
    this.selectedStatus = undefined;
    dropdown_Condominios.writeValue(null);
    dropdown_filtro.writeValue(null);
    this.loadClientes(1);
  }
  loadCondominio() {
    const sub = this.CondominioService.list().subscribe(page => {
      this.sortCondominios = page.data.map(l => {
        const {
          id,
          nome,
          codigo
        } = l;
        return {
          value: id,
          label: `[${codigo}] - ${nome}`
        };
      });
    });
    this.subscriptions.add(sub);
  }
  loadClientes(page = 1) {
    const sub = this.userService.listUsers({
      searchedUser: this.searchedNome,
      condominio_id: this.selectedCondominio,
      status: this.selectedStatus,
      tipo_usuario: _constants_tipo_user_constant__WEBPACK_IMPORTED_MODULE_4__.TipoUsuarioEnum.USUARIO
    }, {
      order: _constants_page_constant__WEBPACK_IMPORTED_MODULE_7__.PageOrder.DESC,
      page,
      take: 5
    }).subscribe(response => {
      this.users = response;
      this.isLoaded = true;
    });
    this.subscriptions.add(sub);
  }
  detalharAtualizar(user) {
    this.showModal(_cliente_detail_cliente_detail_component__WEBPACK_IMPORTED_MODULE_14__.ClienteDetailComponent, {
      user
    });
  }
  detalharDependentes(responsavel) {
    this.showModal(_adm_dependentes_module_dependente_view_dependente_view_component__WEBPACK_IMPORTED_MODULE_15__.DependenteViewComponent, {
      responsavel
    });
  }
  detalharPets(responsavel) {
    this.showModal(_adm_pet_module_pet_view_pet_view_component__WEBPACK_IMPORTED_MODULE_16__.PetViewComponent, {
      responsavel
    });
  }
  detalharVeiculos(responsavel) {
    this.showModal(_adm_veiculo_module_veiculo_view_veiculo_view_component__WEBPACK_IMPORTED_MODULE_17__.VeiculoViewComponent, {
      responsavel
    });
  }
  detalharComunicacao(responsavel) {
    this.showModal(_authorization_module_authorization_main_authorization_main_component__WEBPACK_IMPORTED_MODULE_12__.AuthorizationMainComponent, {
      responsavel
    });
  }
  detalharEndereco(user) {
    if (user.endereco) {
      this.showModal(_endereco_module_update_endereco_update_endereco_component__WEBPACK_IMPORTED_MODULE_11__.UpdateEnderecoComponent, {
        currentEndereco: user,
        isCliente: true
      });
    } else {
      this.showModal(_endereco_module_endereco_endereco_component__WEBPACK_IMPORTED_MODULE_10__.EnderecoComponent, {
        idOf: user.id,
        isCliente: true,
        isModal: true
      });
    }
  }
  setUserImage(user) {
    return user.avatar_url || "assets/imgs/outros/default-user.jpg";
  }
  createNewUser() {
    this.showModal(_cliente_cadastro_cliente_cadastro_component__WEBPACK_IMPORTED_MODULE_13__.ClienteCadastroComponent);
  }
  search() {
    this.loadClientes(1);
  }
  paginar(event) {
    const {
      first,
      rows
    } = event;
    const page = Number(Number(first) / Number(rows) + 1);
    if (page != this.currentPage) {
      this.currentPage = page;
      this.loadClientes(page);
    }
  }
  showModal(component, componentProps) {
    var _this = this;
    return (0,_home_m4estro_Documentos_Code_Neg_cios_StandIO_Conds_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const modal = yield _this.modal.create({
        component,
        backdropDismiss: false,
        cssClass: 'modal-size-100',
        componentProps
      });
      modal.onDidDismiss().then(data => {
        const {
          data: hasUpdate
        } = data;
        _this.isLoaded = false;
        _this.loadClientes();
        if (hasUpdate) {
          _this.toastService.presentToast({
            titulo: 'Sucesso',
            detalhe: 'Operação bem sucedida!',
            duracao: _shared_constants_toast_constant__WEBPACK_IMPORTED_MODULE_3__.ToastEnum.mediumDuration,
            gravidade: _shared_constants_toast_constant__WEBPACK_IMPORTED_MODULE_3__.ToastPrimeSeverityEnum.SUCESSO
          });
        }
      });
      return yield modal.present();
    })();
  }
};
ClienteMainComponent.ctorParameters = () => [{
  type: _shared_services_user_user_service__WEBPACK_IMPORTED_MODULE_9__.UserService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_19__.ModalController
}, {
  type: _services_toast_toast_message_service__WEBPACK_IMPORTED_MODULE_6__.ToastMessageService
}, {
  type: _services_condominio_condominio_service__WEBPACK_IMPORTED_MODULE_8__.CondominioService
}];
ClienteMainComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_20__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_21__.Component)({
  selector: 'app-cliente-main',
  template: _cliente_main_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_cliente_main_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], ClienteMainComponent);


/***/ }),

/***/ 60079:
/*!******************************************************************************************!*\
  !*** ./src/app/shared/components/adm-cliente-module/cliente-main/cliente-main.module.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClienteMainModule": () => (/* binding */ ClienteMainModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var primeng_dataview__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/dataview */ 81233);
/* harmony import */ var primeng_panel__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/panel */ 24266);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! primeng/inputtext */ 69906);
/* harmony import */ var primeng_rating__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! primeng/rating */ 62415);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! primeng/button */ 76328);
/* harmony import */ var primeng_message__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! primeng/message */ 73589);
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! primeng/dialog */ 1837);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! primeng/ripple */ 84538);
/* harmony import */ var primeng_styleclass__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! primeng/styleclass */ 82041);
/* harmony import */ var primeng_divider__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! primeng/divider */ 1154);
/* harmony import */ var primeng_avatar__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! primeng/avatar */ 37063);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! primeng/dropdown */ 38992);
/* harmony import */ var primeng_menu__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! primeng/menu */ 60625);
/* harmony import */ var _endereco_module_endereco_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../endereco-module/endereco.module */ 2635);
/* harmony import */ var _authorization_module_authorization_module_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../authorization-module/authorization-module.module */ 81338);
/* harmony import */ var _password_module_password_module_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../password-module/password-module.module */ 5226);
/* harmony import */ var _shared_directive_directives_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/directive/directives.module */ 9406);
/* harmony import */ var _cliente_main_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cliente-main.component */ 49812);
/* harmony import */ var _cliente_cadastro_cliente_cadastro_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../cliente-cadastro/cliente-cadastro.module */ 44588);
/* harmony import */ var _cliente_detail_cliente_detail_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../cliente-detail/cliente-detail.module */ 36273);
/* harmony import */ var _pipes_brazilian_masks_brazilian_masks_pipe_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../../pipes/brazilian-masks/brazilian-masks-pipe.module */ 30646);
/* harmony import */ var _adm_dependentes_module_adm_dependentes_module_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../adm-dependentes-module/adm-dependentes-module.module */ 52813);
/* harmony import */ var _adm_pet_module_adm_pet_module_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../adm-pet-module/adm-pet-module.module */ 67886);
/* harmony import */ var _adm_veiculo_module_adm_veiculo_module_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../adm-veiculo-module/adm-veiculo-module.module */ 3937);





























let ClienteMainModule = class ClienteMainModule {
};
ClienteMainModule = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.NgModule)({
        declarations: [_cliente_main_component__WEBPACK_IMPORTED_MODULE_4__.ClienteMainComponent],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_13__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_14__.ReactiveFormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.IonicModule,
            primeng_dataview__WEBPACK_IMPORTED_MODULE_16__.DataViewModule,
            primeng_panel__WEBPACK_IMPORTED_MODULE_17__.PanelModule,
            primeng_inputtext__WEBPACK_IMPORTED_MODULE_18__.InputTextModule,
            primeng_rating__WEBPACK_IMPORTED_MODULE_19__.RatingModule,
            primeng_button__WEBPACK_IMPORTED_MODULE_20__.ButtonModule,
            primeng_menu__WEBPACK_IMPORTED_MODULE_21__.MenuModule,
            primeng_message__WEBPACK_IMPORTED_MODULE_22__.MessageModule,
            primeng_dialog__WEBPACK_IMPORTED_MODULE_23__.DialogModule,
            primeng_ripple__WEBPACK_IMPORTED_MODULE_24__.RippleModule,
            primeng_styleclass__WEBPACK_IMPORTED_MODULE_25__.StyleClassModule,
            primeng_divider__WEBPACK_IMPORTED_MODULE_26__.DividerModule,
            primeng_dropdown__WEBPACK_IMPORTED_MODULE_27__.DropdownModule,
            primeng_avatar__WEBPACK_IMPORTED_MODULE_28__.AvatarModule,
            _adm_dependentes_module_adm_dependentes_module_module__WEBPACK_IMPORTED_MODULE_8__.AdmDependentesModuleModule,
            _endereco_module_endereco_module__WEBPACK_IMPORTED_MODULE_0__.EnderecoModule,
            _cliente_cadastro_cliente_cadastro_module__WEBPACK_IMPORTED_MODULE_5__.ClienteCadastroModule,
            _cliente_detail_cliente_detail_module__WEBPACK_IMPORTED_MODULE_6__.ClienteDetailModule,
            _authorization_module_authorization_module_module__WEBPACK_IMPORTED_MODULE_1__.AuthorizationModuleModule,
            _password_module_password_module_module__WEBPACK_IMPORTED_MODULE_2__.PasswordModuleModule,
            _adm_pet_module_adm_pet_module_module__WEBPACK_IMPORTED_MODULE_9__.AdmPetModuleModule,
            _adm_veiculo_module_adm_veiculo_module_module__WEBPACK_IMPORTED_MODULE_10__.AdmVeiculoModuleModule,
            _shared_directive_directives_module__WEBPACK_IMPORTED_MODULE_3__.DirectivesModule,
            _pipes_brazilian_masks_brazilian_masks_pipe_module__WEBPACK_IMPORTED_MODULE_7__.BrazilianMasksPipeModule,
        ],
        exports: [_cliente_main_component__WEBPACK_IMPORTED_MODULE_4__.ClienteMainComponent],
    })
], ClienteMainModule);



/***/ }),

/***/ 93906:
/*!***************************************************************************************************!*\
  !*** ./src/app/shared/components/adm-cliente-module/cliente-profile/cliente-profile.component.ts ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClienteProfileComponent": () => (/* binding */ ClienteProfileComponent)
/* harmony export */ });
/* harmony import */ var _home_m4estro_Documentos_Code_Neg_cios_StandIO_Conds_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _cliente_profile_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cliente-profile.component.html?ngResource */ 85337);
/* harmony import */ var _cliente_profile_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cliente-profile.component.scss?ngResource */ 61554);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 26078);
/* harmony import */ var _shared_services_toast_toast_message_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../../shared/services/toast/toast-message.service */ 12973);
/* harmony import */ var _shared_services_preferences_preferences_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../../shared/services/preferences/preferences.service */ 9683);
/* harmony import */ var _shared_services_utils_dashboard_utils_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../../shared/services/utils/dashboard-utils.service */ 47737);
/* harmony import */ var _shared_constants_toast_constant__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../../../shared/constants/toast.constant */ 98739);
/* harmony import */ var _services_adm_financeira_contas_contas_cliente_contas_cliente_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../../services/adm-financeira/contas/contas-cliente/contas-cliente.service */ 65626);












let ClienteProfileComponent = class ClienteProfileComponent {
  constructor(toastService, modalCtrl, contasClienteService, dashboardUtilsService, preferencesService) {
    this.toastService = toastService;
    this.modalCtrl = modalCtrl;
    this.contasClienteService = contasClienteService;
    this.dashboardUtilsService = dashboardUtilsService;
    this.preferencesService = preferencesService;
    this.selectedDate = new Date();
    this.selectedOption = false;
    this.hasAccount = false;
    this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_8__.Subscription();
  }
  ngOnInit() {
    this.loadMiniDash();
  }
  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
  loadMiniDash() {
    const {
      id
    } = this.user;
    const sub = this.contasClienteService.findByColaboradorAndDate(id, this.selectedDate).subscribe({
      next: response => {
        this.simplesDash = this.dashboardUtilsService.convertToSimpleDashCliente(response);
        this.inAndOutDash = this.dashboardUtilsService.convertToInOutSimpleDashCliente(response);
        this.hasAccount = true;
      },
      complete: () => {
        this.toastService.clearToast();
      }
    });
    this.subscriptions.add(sub);
  }
  changeDate() {
    this.simplesDash = undefined;
    this.inAndOutDash = undefined;
    this.hasAccount = false;
    this.selectedOption = false;
    this.loadMiniDash();
  }
  getTheme() {
    const {
      theme,
      dashboard
    } = this.preferencesService.getDashboardTheme(this.inAndOutDash);
    this.inAndOutDash = dashboard;
    return theme;
  }
  setUserImage(user) {
    return user.avatar_url || "assets/imgs/outros/default-user.jpg";
  }
  goToPedidos() {
    this.selectedOption = true;
    //this.showModal(ClienteHistoricoComprasComponent, { cliente_id: this.user.id });
  }

  fechar(userWasCreated = false) {
    this.modalCtrl.dismiss(userWasCreated);
  }
  showModal(component, componentProps) {
    var _this = this;
    return (0,_home_m4estro_Documentos_Code_Neg_cios_StandIO_Conds_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const modal = yield _this.modalCtrl.create({
        component,
        backdropDismiss: false,
        cssClass: 'modal-size-100',
        componentProps
      });
      modal.onDidDismiss().then(data => {
        const {
          data: hasUpdate
        } = data;
        if (hasUpdate) {
          _this.toastService.presentToast({
            titulo: 'Sucesso',
            detalhe: 'Operação bem sucedida!',
            duracao: _shared_constants_toast_constant__WEBPACK_IMPORTED_MODULE_6__.ToastEnum.mediumDuration,
            gravidade: _shared_constants_toast_constant__WEBPACK_IMPORTED_MODULE_6__.ToastPrimeSeverityEnum.SUCESSO
          });
        }
      });
      return yield modal.present();
    })();
  }
};
ClienteProfileComponent.ctorParameters = () => [{
  type: _shared_services_toast_toast_message_service__WEBPACK_IMPORTED_MODULE_3__.ToastMessageService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.ModalController
}, {
  type: _services_adm_financeira_contas_contas_cliente_contas_cliente_service__WEBPACK_IMPORTED_MODULE_7__.ContasClienteService
}, {
  type: _shared_services_utils_dashboard_utils_service__WEBPACK_IMPORTED_MODULE_5__.DashboardUtilsService
}, {
  type: _shared_services_preferences_preferences_service__WEBPACK_IMPORTED_MODULE_4__.PreferencesService
}];
ClienteProfileComponent.propDecorators = {
  user: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Input
  }]
};
ClienteProfileComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
  selector: 'app-cliente-profile',
  template: _cliente_profile_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_cliente_profile_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], ClienteProfileComponent);


/***/ }),

/***/ 69637:
/*!************************************************************************************************!*\
  !*** ./src/app/shared/components/adm-cliente-module/cliente-profile/cliente-profile.module.ts ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClienteProfileModule": () => (/* binding */ ClienteProfileModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 19200);
/* harmony import */ var ngx_echarts__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-echarts */ 31548);
/* harmony import */ var primeng_splitter__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/splitter */ 80330);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/button */ 76328);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/toast */ 29129);
/* harmony import */ var primeng_menu__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/menu */ 60625);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/ripple */ 84538);
/* harmony import */ var primeng_paginator__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/paginator */ 42722);
/* harmony import */ var primeng_chart__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/chart */ 62348);
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/calendar */ 32547);
/* harmony import */ var primeng_divider__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! primeng/divider */ 1154);
/* harmony import */ var _cliente_profile_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cliente-profile.component */ 93906);
/* harmony import */ var _utils_attention_surface_attention_surface_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/attention-surface/attention-surface.module */ 218);
/* harmony import */ var _shared_directive_directives_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../../shared/directive/directives.module */ 9406);



















let ClienteProfileModule = class ClienteProfileModule {
};
ClienteProfileModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        declarations: [_cliente_profile_component__WEBPACK_IMPORTED_MODULE_0__.ClienteProfileComponent],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_8__.FontAwesomeModule,
            primeng_splitter__WEBPACK_IMPORTED_MODULE_9__.SplitterModule,
            primeng_button__WEBPACK_IMPORTED_MODULE_10__.ButtonModule,
            primeng_toast__WEBPACK_IMPORTED_MODULE_11__.ToastModule,
            primeng_menu__WEBPACK_IMPORTED_MODULE_12__.MenuModule,
            primeng_calendar__WEBPACK_IMPORTED_MODULE_13__.CalendarModule,
            primeng_ripple__WEBPACK_IMPORTED_MODULE_14__.RippleModule,
            primeng_paginator__WEBPACK_IMPORTED_MODULE_15__.PaginatorModule,
            primeng_chart__WEBPACK_IMPORTED_MODULE_16__.ChartModule,
            ngx_echarts__WEBPACK_IMPORTED_MODULE_17__.NgxEchartsModule.forRoot({
                echarts: () => __webpack_require__.e(/*! import() */ "node_modules_echarts_index_js").then(__webpack_require__.bind(__webpack_require__, /*! echarts */ 72750)),
            }),
            primeng_divider__WEBPACK_IMPORTED_MODULE_18__.DividerModule,
            _utils_attention_surface_attention_surface_module__WEBPACK_IMPORTED_MODULE_1__.AttentionSurfaceModule,
            _shared_directive_directives_module__WEBPACK_IMPORTED_MODULE_2__.DirectivesModule,
        ],
        exports: [_cliente_profile_component__WEBPACK_IMPORTED_MODULE_0__.ClienteProfileComponent],
    })
], ClienteProfileModule);



/***/ }),

/***/ 52813:
/*!*******************************************************************************************!*\
  !*** ./src/app/shared/components/adm-dependentes-module/adm-dependentes-module.module.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdmDependentesModuleModule": () => (/* binding */ AdmDependentesModuleModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _dependente_view_dependente_view_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dependente-view/dependente-view.module */ 29114);




let AdmDependentesModuleModule = class AdmDependentesModuleModule {
};
AdmDependentesModuleModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        declarations: [],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _dependente_view_dependente_view_module__WEBPACK_IMPORTED_MODULE_0__.DependenteViewModule,
        ],
        exports: [_dependente_view_dependente_view_module__WEBPACK_IMPORTED_MODULE_0__.DependenteViewModule]
    })
], AdmDependentesModuleModule);



/***/ }),

/***/ 4990:
/*!*******************************************************************************************************!*\
  !*** ./src/app/shared/components/adm-dependentes-module/dependente-view/dependente-view.component.ts ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DependenteViewComponent": () => (/* binding */ DependenteViewComponent)
/* harmony export */ });
/* harmony import */ var _home_m4estro_Documentos_Code_Neg_cios_StandIO_Conds_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _dependente_view_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dependente-view.component.html?ngResource */ 65080);
/* harmony import */ var _dependente_view_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dependente-view.component.scss?ngResource */ 79820);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 26078);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/api */ 14356);
/* harmony import */ var _services_user_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../services/user/user.service */ 34758);
/* harmony import */ var _shared_services_toast_toast_message_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../../shared/services/toast/toast-message.service */ 12973);
/* harmony import */ var _constants_toast_constant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../constants/toast.constant */ 98739);
/* harmony import */ var _constants_page_constant__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../../constants/page.constant */ 59136);
/* harmony import */ var _constants_tipo_user_constant__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../../constants/tipo-user.constant */ 18109);
/* harmony import */ var _adm_cliente_module_cliente_cadastro_cliente_cadastro_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../adm-cliente-module/cliente-cadastro/cliente-cadastro.component */ 58412);















let DependenteViewComponent = class DependenteViewComponent {
  constructor(formBuilder, userService, modalDependente, modalNovoUsuario, toastService, confirmationService) {
    this.formBuilder = formBuilder;
    this.userService = userService;
    this.modalDependente = modalDependente;
    this.modalNovoUsuario = modalNovoUsuario;
    this.toastService = toastService;
    this.confirmationService = confirmationService;
    this.shouldUpdate = false;
    this.searchedUser = '';
    this.grau_parentesco = '';
    this.showDialog = false;
    this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_9__.Subscription();
  }
  ngOnInit() {
    this.dependentes = this.responsavel.dependentes;
    this.loadUsers();
    this.form = this.formBuilder.group({
      grau_parentesco: [, [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.minLength(3)]],
      dependente: [, [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required]]
    });
  }
  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
  findByResponsavelId() {
    const sub = this.userService.findById(this.responsavel.id).subscribe(response => {
      this.dependentes = response.dependentes;
    });
    this.subscriptions.add(sub);
  }
  //Melhorar o filtro criando um personalizado
  //#region Usuário
  loadUsers(page = 1) {
    const sub = this.userService.listUsers({
      searchedUser: this.searchedUser,
      tipo_usuario: _constants_tipo_user_constant__WEBPACK_IMPORTED_MODULE_7__.TipoUsuarioEnum.USUARIO
    }, {
      order: _constants_page_constant__WEBPACK_IMPORTED_MODULE_6__.PageOrder.DESC,
      page,
      take: 10
    }).subscribe(response => {
      this.users = response;
    });
    this.subscriptions.add(sub);
  }
  paginarUser({
    value
  }) {
    this.searchedUser = undefined;
    if (value) {
      this.searchedUser = value;
    }
    this.loadUsers();
  }
  //#endregion
  //#region Dependentes
  addDependente() {
    const dependente_id = this.form.get('dependente').value.id;
    const grau_parentesco = this.form.get('grau_parentesco').value;
    const sub = this.userService.addDependente(this.responsavel.id, {
      dependente_id,
      grau_parentesco
    }).subscribe(response => {
      this.dependentes = response.dependentes;
      this.shouldUpdate = true;
      this.toastService.presentToast({
        titulo: `Sucesso!`,
        detalhe: `Dependente adicionado com sucesso.`,
        duracao: _constants_toast_constant__WEBPACK_IMPORTED_MODULE_5__.ToastEnum.mediumDuration,
        gravidade: _constants_toast_constant__WEBPACK_IMPORTED_MODULE_5__.ToastPrimeSeverityEnum.SUCESSO
      });
      this.form.reset();
    });
    this.subscriptions.add(sub);
  }
  removeDependente(dto) {
    const {
      user_dependente
    } = dto;
    this.confirmationService.confirm({
      message: `Deseja mesmo remover ${user_dependente.nome} como dependente?`,
      header: `Remoção de dependente`,
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        const sub = this.userService.removeDependente(this.responsavel.id, user_dependente.id).subscribe(response => {
          this.dependentes = response.dependentes;
          this.shouldUpdate = true;
          this.toastService.presentToast({
            titulo: `Sucesso!`,
            detalhe: `Dependente removido com sucesso.`,
            duracao: _constants_toast_constant__WEBPACK_IMPORTED_MODULE_5__.ToastEnum.mediumDuration,
            gravidade: _constants_toast_constant__WEBPACK_IMPORTED_MODULE_5__.ToastPrimeSeverityEnum.SUCESSO
          });
          this.form.reset();
        });
        this.subscriptions.add(sub);
      },
      reject: type => {
        this.toastService.clearToast();
      }
    });
  }
  detailDependente(dto) {
    const {
      user_dependente
    } = dto;
    this.selectedDependente = user_dependente;
    this.showDialog = true;
  }
  newDependente() {
    this.showModal(_adm_cliente_module_cliente_cadastro_cliente_cadastro_component__WEBPACK_IMPORTED_MODULE_8__.ClienteCadastroComponent, {
      responsavel_id: this.responsavel.id
    });
  }
  //#endregion
  detailUser() {
    this.selectedDependente = this.form.get('dependente').value;
    if (!this.selectedDependente) {
      this.toastService.presentToast({
        detalhe: `Selecione um usuário primeiro`,
        titulo: `Seleção necessária`,
        duracao: _constants_toast_constant__WEBPACK_IMPORTED_MODULE_5__.ToastEnum.shortDuration,
        gravidade: _constants_toast_constant__WEBPACK_IMPORTED_MODULE_5__.ToastPrimeSeverityEnum.INFORMACAO
      });
      return;
    }
    this.showDialog = true;
  }
  isInputError(inputName) {
    const resp = !this.form.controls[inputName].untouched && this.form.controls[inputName].errors;
    if (resp) {
      return true;
    }
    return false;
  }
  disableAddDependenteBtn() {
    const situacao = !this.form.valid;
    return situacao;
  }
  hasDependente() {
    return this.dependentes && this.dependentes?.length >= 1;
  }
  fechar() {
    this.modalDependente.dismiss(this.shouldUpdate);
  }
  showModal(component, componentProps) {
    var _this = this;
    return (0,_home_m4estro_Documentos_Code_Neg_cios_StandIO_Conds_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const modal = yield _this.modalNovoUsuario.create({
        component,
        backdropDismiss: false,
        cssClass: 'modal-size-100',
        componentProps
      });
      modal.onDidDismiss().then(data => {
        const {
          data: hasUpdate
        } = data;
        console.log(`Update: ${hasUpdate}`);
        if (hasUpdate) {
          _this.findByResponsavelId();
        }
      });
      return yield modal.present();
    })();
  }
};
DependenteViewComponent.ctorParameters = () => [{
  type: _angular_forms__WEBPACK_IMPORTED_MODULE_10__.UntypedFormBuilder
}, {
  type: _services_user_user_service__WEBPACK_IMPORTED_MODULE_3__.UserService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.ModalController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.ModalController
}, {
  type: _shared_services_toast_toast_message_service__WEBPACK_IMPORTED_MODULE_4__.ToastMessageService
}, {
  type: primeng_api__WEBPACK_IMPORTED_MODULE_12__.ConfirmationService
}];
DependenteViewComponent.propDecorators = {
  responsavel: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_13__.Input
  }]
};
DependenteViewComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_13__.Component)({
  selector: 'app-dependente-view',
  template: _dependente_view_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_dependente_view_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], DependenteViewComponent);


/***/ }),

/***/ 29114:
/*!****************************************************************************************************!*\
  !*** ./src/app/shared/components/adm-dependentes-module/dependente-view/dependente-view.module.ts ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DependenteViewModule": () => (/* binding */ DependenteViewModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/button */ 76328);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/ripple */ 84538);
/* harmony import */ var primeng_rating__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/rating */ 62415);
/* harmony import */ var primeng_menu__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/menu */ 60625);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/dropdown */ 38992);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/inputtext */ 69906);
/* harmony import */ var primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/confirmdialog */ 60097);
/* harmony import */ var primeng_virtualscroller__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! primeng/virtualscroller */ 58476);
/* harmony import */ var primeng_skeleton__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! primeng/skeleton */ 32712);
/* harmony import */ var _utils_attention_surface_attention_surface_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/attention-surface/attention-surface.module */ 218);
/* harmony import */ var _directive_directives_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../directive/directives.module */ 9406);
/* harmony import */ var _pipes_brazilian_masks_brazilian_masks_pipe_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../pipes/brazilian-masks/brazilian-masks-pipe.module */ 30646);
/* harmony import */ var _utils_dialogs_question_user_question_user_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/dialogs/question-user/question-user.module */ 61192);
/* harmony import */ var _adm_cliente_module_cliente_cadastro_cliente_cadastro_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../adm-cliente-module/cliente-cadastro/cliente-cadastro.module */ 44588);
/* harmony import */ var _dependente_view_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dependente-view.component */ 4990);




















let DependenteViewModule = class DependenteViewModule {
};
DependenteViewModule = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.NgModule)({
        declarations: [_dependente_view_component__WEBPACK_IMPORTED_MODULE_5__.DependenteViewComponent],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonicModule,
            primeng_button__WEBPACK_IMPORTED_MODULE_11__.ButtonModule,
            primeng_ripple__WEBPACK_IMPORTED_MODULE_12__.RippleModule,
            primeng_rating__WEBPACK_IMPORTED_MODULE_13__.RatingModule,
            primeng_menu__WEBPACK_IMPORTED_MODULE_14__.MenuModule,
            primeng_dropdown__WEBPACK_IMPORTED_MODULE_15__.DropdownModule,
            primeng_inputtext__WEBPACK_IMPORTED_MODULE_16__.InputTextModule,
            primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_17__.ConfirmDialogModule,
            primeng_virtualscroller__WEBPACK_IMPORTED_MODULE_18__.VirtualScrollerModule,
            primeng_skeleton__WEBPACK_IMPORTED_MODULE_19__.SkeletonModule,
            _adm_cliente_module_cliente_cadastro_cliente_cadastro_module__WEBPACK_IMPORTED_MODULE_4__.ClienteCadastroModule,
            _utils_dialogs_question_user_question_user_module__WEBPACK_IMPORTED_MODULE_3__.QuestionUserModule,
            _utils_attention_surface_attention_surface_module__WEBPACK_IMPORTED_MODULE_0__.AttentionSurfaceModule,
            _directive_directives_module__WEBPACK_IMPORTED_MODULE_1__.DirectivesModule,
            _pipes_brazilian_masks_brazilian_masks_pipe_module__WEBPACK_IMPORTED_MODULE_2__.BrazilianMasksPipeModule,
        ],
        exports: [_dependente_view_component__WEBPACK_IMPORTED_MODULE_5__.DependenteViewComponent],
    })
], DependenteViewModule);



/***/ }),

/***/ 67886:
/*!***************************************************************************!*\
  !*** ./src/app/shared/components/adm-pet-module/adm-pet-module.module.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdmPetModuleModule": () => (/* binding */ AdmPetModuleModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _pet_view_pet_view_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pet-view/pet-view.module */ 70021);




let AdmPetModuleModule = class AdmPetModuleModule {
};
AdmPetModuleModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        declarations: [],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _pet_view_pet_view_module__WEBPACK_IMPORTED_MODULE_0__.PetViewModule,
        ],
        exports: [_pet_view_pet_view_module__WEBPACK_IMPORTED_MODULE_0__.PetViewModule],
    })
], AdmPetModuleModule);



/***/ }),

/***/ 88684:
/*!*********************************************************************************!*\
  !*** ./src/app/shared/components/adm-pet-module/pet-view/pet-view.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PetViewComponent": () => (/* binding */ PetViewComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _pet_view_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pet-view.component.html?ngResource */ 57570);
/* harmony import */ var _pet_view_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pet-view.component.scss?ngResource */ 18333);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 26078);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/api */ 14356);
/* harmony import */ var _services_user_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../services/user/user.service */ 34758);
/* harmony import */ var _shared_services_toast_toast_message_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../../shared/services/toast/toast-message.service */ 12973);
/* harmony import */ var _constants_toast_constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../constants/toast.constant */ 98739);
/* harmony import */ var _constants_page_constant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../constants/page.constant */ 59136);
/* harmony import */ var _services_pet_pet_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../../services/pet/pet.service */ 5884);
/* harmony import */ var _constants_especie_constant__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../../constants/especie.constant */ 87277);














let PetViewComponent = class PetViewComponent {
    constructor(formBuilder, userService, modalPet, modalNovoUsuario, toastService, confirmationService, petService) {
        this.formBuilder = formBuilder;
        this.userService = userService;
        this.modalPet = modalPet;
        this.modalNovoUsuario = modalNovoUsuario;
        this.toastService = toastService;
        this.confirmationService = confirmationService;
        this.petService = petService;
        this.shouldUpdate = false;
        this.showDialog = false;
        this.currentPage = 1;
        this.pageOrder = _constants_page_constant__WEBPACK_IMPORTED_MODULE_5__.PageOrder.DESC;
        this.currentTake = 5;
        this.especiesOptions = _constants_especie_constant__WEBPACK_IMPORTED_MODULE_7__.EspeciesOptions;
        this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_8__.Subscription();
        // Implementar o Update
    }
    ngOnInit() {
        this.form = this.formBuilder.group({
            especie: [, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
            nome: [, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.minLength(3)]],
        });
        this.loadPets();
    }
    ngOnDestroy() {
        this.subscriptions.unsubscribe();
    }
    loadPets(page = 1, dt) {
        const sub = this.petService.list({ responsavel_id: this.responsavel.id }, { order: this.pageOrder, page, take: this.currentTake }).subscribe({
            next: response => {
                this.pets = response;
            },
            complete: () => {
                if (dt) {
                    dt.paginator = true;
                }
            }
        });
        this.subscriptions.add(sub);
    }
    paginar(event, dt) {
        // this.pedidos = undefined;
        dt.paginator = false;
        const { first, rows, sortOrder } = event;
        const page = Number((Number(first) / Number(rows)) + 1);
        this.currentPage = page;
        this.currentTake = rows;
        this.pageOrder = sortOrder && sortOrder == 1 ? _constants_page_constant__WEBPACK_IMPORTED_MODULE_5__.PageOrder.DESC : _constants_page_constant__WEBPACK_IMPORTED_MODULE_5__.PageOrder.ASC;
        this.loadPets(page, dt);
    }
    create() {
        const nome = this.form.get('nome').value;
        const especie = this.form.get('especie').value;
        const sub = this.petService.create({
            nome, especie, responsavel_id: this.responsavel.id,
        })
            .subscribe(response => {
            this.loadPets();
            this.toastService.presentToast({
                titulo: 'Sucesso',
                detalhe: 'Operação bem sucedida!',
                duracao: _constants_toast_constant__WEBPACK_IMPORTED_MODULE_4__.ToastEnum.shortDuration,
                gravidade: _constants_toast_constant__WEBPACK_IMPORTED_MODULE_4__.ToastPrimeSeverityEnum.SUCESSO
            });
        });
        this.subscriptions.add(sub);
        this.form.reset();
    }
    update(pet) {
        const { especie, nome, id } = pet;
        console.log(pet);
        const sub = this.petService.update(id, {
            especie, nome
        })
            .subscribe(response => {
            this.toastService.presentToast({
                titulo: 'Sucesso',
                detalhe: 'Operação bem sucedida!',
                duracao: _constants_toast_constant__WEBPACK_IMPORTED_MODULE_4__.ToastEnum.shortDuration,
                gravidade: _constants_toast_constant__WEBPACK_IMPORTED_MODULE_4__.ToastPrimeSeverityEnum.SUCESSO
            });
        });
        this.subscriptions.add(sub);
    }
    delete(pet) {
        this.confirmationService.confirm({
            message: `Deseja mesmo remover o pet "${pet.nome}" ?`,
            header: `Remoção de pet`,
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                const sub = this.petService.delete(pet.id)
                    .subscribe(response => {
                    this.loadPets();
                    this.toastService.presentToast({
                        titulo: `Sucesso!`,
                        detalhe: `Pet removido com sucesso.`,
                        duracao: _constants_toast_constant__WEBPACK_IMPORTED_MODULE_4__.ToastEnum.shortDuration,
                        gravidade: _constants_toast_constant__WEBPACK_IMPORTED_MODULE_4__.ToastPrimeSeverityEnum.SUCESSO,
                    });
                    this.form.reset();
                });
                this.subscriptions.add(sub);
            },
            reject: (type) => {
                this.toastService.clearToast();
            }
        });
    }
    fechar() {
        this.modalPet.dismiss(this.shouldUpdate);
    }
    isInputError(inputName) {
        const resp = !this.form.controls[inputName].untouched &&
            this.form.controls[inputName].errors;
        if (resp) {
            return true;
        }
        return false;
    }
    disableCreateBtn() {
        const situacao = !this.form.valid;
        return situacao;
    }
};
PetViewComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_9__.UntypedFormBuilder },
    { type: _services_user_user_service__WEBPACK_IMPORTED_MODULE_2__.UserService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.ModalController },
    { type: _shared_services_toast_toast_message_service__WEBPACK_IMPORTED_MODULE_3__.ToastMessageService },
    { type: primeng_api__WEBPACK_IMPORTED_MODULE_11__.ConfirmationService },
    { type: _services_pet_pet_service__WEBPACK_IMPORTED_MODULE_6__.PetService }
];
PetViewComponent.propDecorators = {
    responsavel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_12__.Input }]
};
PetViewComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.Component)({
        selector: 'app-pet-view',
        template: _pet_view_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_pet_view_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], PetViewComponent);



/***/ }),

/***/ 70021:
/*!******************************************************************************!*\
  !*** ./src/app/shared/components/adm-pet-module/pet-view/pet-view.module.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PetViewModule": () => (/* binding */ PetViewModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/button */ 76328);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/ripple */ 84538);
/* harmony import */ var primeng_rating__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/rating */ 62415);
/* harmony import */ var primeng_menu__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/menu */ 60625);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/dropdown */ 38992);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/inputtext */ 69906);
/* harmony import */ var primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/confirmdialog */ 60097);
/* harmony import */ var primeng_virtualscroller__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/virtualscroller */ 58476);
/* harmony import */ var primeng_skeleton__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/skeleton */ 32712);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! primeng/table */ 17485);
/* harmony import */ var _utils_attention_surface_attention_surface_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/attention-surface/attention-surface.module */ 218);
/* harmony import */ var _directive_directives_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../directive/directives.module */ 9406);
/* harmony import */ var _pipes_brazilian_masks_brazilian_masks_pipe_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../pipes/brazilian-masks/brazilian-masks-pipe.module */ 30646);
/* harmony import */ var _pet_view_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pet-view.component */ 88684);



















let PetViewModule = class PetViewModule {
};
PetViewModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        declarations: [_pet_view_component__WEBPACK_IMPORTED_MODULE_3__.PetViewComponent],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            primeng_button__WEBPACK_IMPORTED_MODULE_9__.ButtonModule,
            primeng_ripple__WEBPACK_IMPORTED_MODULE_10__.RippleModule,
            primeng_rating__WEBPACK_IMPORTED_MODULE_11__.RatingModule,
            primeng_menu__WEBPACK_IMPORTED_MODULE_12__.MenuModule,
            primeng_dropdown__WEBPACK_IMPORTED_MODULE_13__.DropdownModule,
            primeng_inputtext__WEBPACK_IMPORTED_MODULE_14__.InputTextModule,
            primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_15__.ConfirmDialogModule,
            primeng_virtualscroller__WEBPACK_IMPORTED_MODULE_16__.VirtualScrollerModule,
            primeng_skeleton__WEBPACK_IMPORTED_MODULE_17__.SkeletonModule,
            primeng_table__WEBPACK_IMPORTED_MODULE_18__.TableModule,
            _utils_attention_surface_attention_surface_module__WEBPACK_IMPORTED_MODULE_0__.AttentionSurfaceModule,
            _directive_directives_module__WEBPACK_IMPORTED_MODULE_1__.DirectivesModule,
            _pipes_brazilian_masks_brazilian_masks_pipe_module__WEBPACK_IMPORTED_MODULE_2__.BrazilianMasksPipeModule,
        ],
        exports: [_pet_view_component__WEBPACK_IMPORTED_MODULE_3__.PetViewComponent],
    })
], PetViewModule);



/***/ }),

/***/ 3937:
/*!***********************************************************************************!*\
  !*** ./src/app/shared/components/adm-veiculo-module/adm-veiculo-module.module.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdmVeiculoModuleModule": () => (/* binding */ AdmVeiculoModuleModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _veiculo_view_veiculo_view_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./veiculo-view/veiculo-view.module */ 28529);




let AdmVeiculoModuleModule = class AdmVeiculoModuleModule {
};
AdmVeiculoModuleModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        declarations: [],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _veiculo_view_veiculo_view_module__WEBPACK_IMPORTED_MODULE_0__.VeiculoViewModule,
        ],
        exports: [_veiculo_view_veiculo_view_module__WEBPACK_IMPORTED_MODULE_0__.VeiculoViewModule,]
    })
], AdmVeiculoModuleModule);



/***/ }),

/***/ 55631:
/*!*********************************************************************************************!*\
  !*** ./src/app/shared/components/adm-veiculo-module/veiculo-view/veiculo-view.component.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VeiculoViewComponent": () => (/* binding */ VeiculoViewComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _veiculo_view_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./veiculo-view.component.html?ngResource */ 45512);
/* harmony import */ var _veiculo_view_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./veiculo-view.component.scss?ngResource */ 23829);
/* harmony import */ var _constants_veiculos_constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../constants/veiculos.constant */ 90666);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 26078);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/api */ 14356);
/* harmony import */ var _services_user_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../services/user/user.service */ 34758);
/* harmony import */ var _shared_services_toast_toast_message_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../../shared/services/toast/toast-message.service */ 12973);
/* harmony import */ var _constants_toast_constant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../constants/toast.constant */ 98739);
/* harmony import */ var _constants_page_constant__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../../constants/page.constant */ 59136);
/* harmony import */ var _services_veiculos_veiculos_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../../services/veiculos/veiculos.service */ 59149);














let VeiculoViewComponent = class VeiculoViewComponent {
    constructor(formBuilder, userService, modalVeiculo, toastService, confirmationService, veiculosService) {
        this.formBuilder = formBuilder;
        this.userService = userService;
        this.modalVeiculo = modalVeiculo;
        this.toastService = toastService;
        this.confirmationService = confirmationService;
        this.veiculosService = veiculosService;
        this.shouldUpdate = false;
        this.showDialog = false;
        this.currentPage = 1;
        this.pageOrder = _constants_page_constant__WEBPACK_IMPORTED_MODULE_6__.PageOrder.DESC;
        this.currentTake = 5;
        this.veiculosCoresOptions = _constants_veiculos_constant__WEBPACK_IMPORTED_MODULE_2__.VeiculosCoresOptions;
        this.veiculosTipoOptions = _constants_veiculos_constant__WEBPACK_IMPORTED_MODULE_2__.VeiculosTipoOptions;
        this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_8__.Subscription();
        // Implementar o Update
    }
    ngOnInit() {
        this.form = this.formBuilder.group({
            placa: [, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.minLength(7), _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.maxLength(7)]],
            cor: [, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required,]],
            fabricante: [, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required,]],
            modelo: [, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required,]],
            ano: [, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required,]],
            tipo: [, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required,]],
        });
        this.loadVeiculos();
    }
    ngOnDestroy() {
        this.subscriptions.unsubscribe();
    }
    loadVeiculos(page = 1, dt) {
        const sub = this.veiculosService.list({ responsavel_id: this.responsavel.id }, { order: this.pageOrder, page, take: this.currentTake }).subscribe({
            next: response => {
                this.veiculos = response;
                this.veiculos.data.forEach(v => {
                    v.ano_date = new Date(v.ano, 0, 1);
                });
            },
            complete: () => {
                if (dt) {
                    dt.paginator = true;
                }
            }
        });
        this.subscriptions.add(sub);
    }
    paginar(event, dt) {
        dt.paginator = false;
        const { first, rows, sortOrder } = event;
        const page = Number((Number(first) / Number(rows)) + 1);
        this.currentPage = page;
        this.currentTake = rows;
        this.pageOrder = sortOrder && sortOrder == 1 ? _constants_page_constant__WEBPACK_IMPORTED_MODULE_6__.PageOrder.DESC : _constants_page_constant__WEBPACK_IMPORTED_MODULE_6__.PageOrder.ASC;
        this.loadVeiculos(page, dt);
    }
    create() {
        const placa = this.form.get('placa').value;
        const cor = this.form.get('cor').value;
        const fabricante = this.form.get('fabricante').value;
        const modelo = this.form.get('modelo').value;
        const ano = this.form.get('ano').value;
        const tipo = this.form.get('tipo').value;
        const sub = this.veiculosService.create({
            placa, cor, fabricante, modelo, ano: ano.getFullYear(), tipo, responsavel_id: this.responsavel.id,
        })
            .subscribe(response => {
            this.loadVeiculos();
            this.toastService.presentToast({
                titulo: 'Sucesso',
                detalhe: 'Operação bem sucedida!',
                duracao: _constants_toast_constant__WEBPACK_IMPORTED_MODULE_5__.ToastEnum.shortDuration,
                gravidade: _constants_toast_constant__WEBPACK_IMPORTED_MODULE_5__.ToastPrimeSeverityEnum.SUCESSO
            });
            this.form.reset();
        });
        this.subscriptions.add(sub);
    }
    update(veiculo) {
        const { id, fabricante, modelo, cor, placa, tipo, ano_date } = veiculo;
        const ano = ano_date.getFullYear();
        const sub = this.veiculosService.update(id, {
            ano, fabricante, modelo, cor, placa, tipo,
        })
            .subscribe(response => {
            this.toastService.presentToast({
                titulo: 'Sucesso',
                detalhe: 'Operação bem sucedida!',
                duracao: _constants_toast_constant__WEBPACK_IMPORTED_MODULE_5__.ToastEnum.shortDuration,
                gravidade: _constants_toast_constant__WEBPACK_IMPORTED_MODULE_5__.ToastPrimeSeverityEnum.SUCESSO
            });
        });
        this.subscriptions.add(sub);
    }
    delete(veiculo) {
        this.confirmationService.confirm({
            message: `Deseja mesmo remover o veículo "${veiculo.placa}" ?`,
            header: `Remoção de Veículo`,
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                const sub = this.veiculosService.delete(veiculo.id)
                    .subscribe(response => {
                    this.loadVeiculos();
                    this.toastService.presentToast({
                        titulo: `Sucesso!`,
                        detalhe: `Veiculo removido com sucesso.`,
                        duracao: _constants_toast_constant__WEBPACK_IMPORTED_MODULE_5__.ToastEnum.shortDuration,
                        gravidade: _constants_toast_constant__WEBPACK_IMPORTED_MODULE_5__.ToastPrimeSeverityEnum.SUCESSO,
                    });
                    this.form.reset();
                });
                this.subscriptions.add(sub);
            },
            reject: (type) => {
                this.toastService.clearToast();
            }
        });
    }
    fechar() {
        this.modalVeiculo.dismiss(this.shouldUpdate);
    }
    isInputError(inputName) {
        const resp = !this.form.controls[inputName].untouched &&
            this.form.controls[inputName].errors;
        if (resp) {
            return true;
        }
        return false;
    }
    disableCreateBtn() {
        const situacao = !this.form.valid;
        return situacao;
    }
};
VeiculoViewComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_9__.UntypedFormBuilder },
    { type: _services_user_user_service__WEBPACK_IMPORTED_MODULE_3__.UserService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.ModalController },
    { type: _shared_services_toast_toast_message_service__WEBPACK_IMPORTED_MODULE_4__.ToastMessageService },
    { type: primeng_api__WEBPACK_IMPORTED_MODULE_11__.ConfirmationService },
    { type: _services_veiculos_veiculos_service__WEBPACK_IMPORTED_MODULE_7__.VeiculosService }
];
VeiculoViewComponent.propDecorators = {
    responsavel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_12__.Input }]
};
VeiculoViewComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.Component)({
        selector: 'app-veiculo-view',
        template: _veiculo_view_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_veiculo_view_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], VeiculoViewComponent);



/***/ }),

/***/ 28529:
/*!******************************************************************************************!*\
  !*** ./src/app/shared/components/adm-veiculo-module/veiculo-view/veiculo-view.module.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VeiculoViewModule": () => (/* binding */ VeiculoViewModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/button */ 76328);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/ripple */ 84538);
/* harmony import */ var primeng_rating__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/rating */ 62415);
/* harmony import */ var primeng_menu__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/menu */ 60625);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/dropdown */ 38992);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/inputtext */ 69906);
/* harmony import */ var primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/confirmdialog */ 60097);
/* harmony import */ var primeng_virtualscroller__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/virtualscroller */ 58476);
/* harmony import */ var primeng_skeleton__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/skeleton */ 32712);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! primeng/table */ 17485);
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! primeng/calendar */ 32547);
/* harmony import */ var primeng_message__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! primeng/message */ 73589);
/* harmony import */ var _utils_attention_surface_attention_surface_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/attention-surface/attention-surface.module */ 218);
/* harmony import */ var _directive_directives_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../directive/directives.module */ 9406);
/* harmony import */ var _pipes_brazilian_masks_brazilian_masks_pipe_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../pipes/brazilian-masks/brazilian-masks-pipe.module */ 30646);
/* harmony import */ var _veiculo_view_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./veiculo-view.component */ 55631);





















let VeiculoViewModule = class VeiculoViewModule {
};
VeiculoViewModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        declarations: [_veiculo_view_component__WEBPACK_IMPORTED_MODULE_3__.VeiculoViewComponent],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            primeng_button__WEBPACK_IMPORTED_MODULE_9__.ButtonModule,
            primeng_ripple__WEBPACK_IMPORTED_MODULE_10__.RippleModule,
            primeng_rating__WEBPACK_IMPORTED_MODULE_11__.RatingModule,
            primeng_menu__WEBPACK_IMPORTED_MODULE_12__.MenuModule,
            primeng_dropdown__WEBPACK_IMPORTED_MODULE_13__.DropdownModule,
            primeng_inputtext__WEBPACK_IMPORTED_MODULE_14__.InputTextModule,
            primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_15__.ConfirmDialogModule,
            primeng_virtualscroller__WEBPACK_IMPORTED_MODULE_16__.VirtualScrollerModule,
            primeng_skeleton__WEBPACK_IMPORTED_MODULE_17__.SkeletonModule,
            primeng_table__WEBPACK_IMPORTED_MODULE_18__.TableModule,
            primeng_calendar__WEBPACK_IMPORTED_MODULE_19__.CalendarModule,
            primeng_message__WEBPACK_IMPORTED_MODULE_20__.MessageModule,
            _utils_attention_surface_attention_surface_module__WEBPACK_IMPORTED_MODULE_0__.AttentionSurfaceModule,
            _directive_directives_module__WEBPACK_IMPORTED_MODULE_1__.DirectivesModule,
            _pipes_brazilian_masks_brazilian_masks_pipe_module__WEBPACK_IMPORTED_MODULE_2__.BrazilianMasksPipeModule,
        ],
        exports: [_veiculo_view_component__WEBPACK_IMPORTED_MODULE_3__.VeiculoViewComponent],
    })
], VeiculoViewModule);



/***/ }),

/***/ 19812:
/*!******************************************************************************************!*\
  !*** ./src/app/shared/components/utils/dialogs/question-user/question-user.component.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QuestionUserComponent": () => (/* binding */ QuestionUserComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _question_user_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./question-user.component.html?ngResource */ 33712);
/* harmony import */ var _question_user_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./question-user.component.scss?ngResource */ 43472);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 26078);
/* harmony import */ var _services_user_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../../services/user/user.service */ 34758);






let QuestionUserComponent = class QuestionUserComponent {
    constructor(userService) {
        this.userService = userService;
        this.showDialog = false;
        this.closeEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
        this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subscription();
    }
    ngOnInit() {
        console.log(this.selectedUser);
        if (this.selectedUser) {
            this.showDialog = true;
            console.log('Entrou');
        }
        else {
            this.loadUser();
        }
    }
    ngOnDestroy() {
        this.subscriptions.unsubscribe();
    }
    loadUser() {
        if (!this.selectedUser && !this.user_id) {
            this.close();
            return;
        }
        const sub = this.userService.findById(this.user_id)
            .subscribe(data => {
            this.selectedUser = data;
            this.showDialog = true;
        });
        this.subscriptions.add(sub);
    }
    close() {
        this.showDialog = false;
        this.closeEvent.emit(this.showDialog);
    }
};
QuestionUserComponent.ctorParameters = () => [
    { type: _services_user_user_service__WEBPACK_IMPORTED_MODULE_2__.UserService }
];
QuestionUserComponent.propDecorators = {
    showDialog: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
    selectedUser: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
    user_id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
    closeEvent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output }]
};
QuestionUserComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-question-user',
        template: _question_user_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_question_user_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], QuestionUserComponent);



/***/ }),

/***/ 61192:
/*!***************************************************************************************!*\
  !*** ./src/app/shared/components/utils/dialogs/question-user/question-user.module.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QuestionUserModule": () => (/* binding */ QuestionUserModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/dialog */ 1837);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/button */ 76328);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/ripple */ 84538);
/* harmony import */ var _question_user_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./question-user.component */ 19812);
/* harmony import */ var _pipes_brazilian_masks_brazilian_masks_pipe_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../../pipes/brazilian-masks/brazilian-masks-pipe.module */ 30646);









let QuestionUserModule = class QuestionUserModule {
};
QuestionUserModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        declarations: [_question_user_component__WEBPACK_IMPORTED_MODULE_0__.QuestionUserComponent],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
            primeng_dialog__WEBPACK_IMPORTED_MODULE_6__.DialogModule,
            primeng_button__WEBPACK_IMPORTED_MODULE_7__.ButtonModule,
            primeng_ripple__WEBPACK_IMPORTED_MODULE_8__.RippleModule,
            _pipes_brazilian_masks_brazilian_masks_pipe_module__WEBPACK_IMPORTED_MODULE_1__.BrazilianMasksPipeModule
        ],
        exports: [_question_user_component__WEBPACK_IMPORTED_MODULE_0__.QuestionUserComponent],
    })
], QuestionUserModule);



/***/ }),

/***/ 87277:
/*!******************************************************!*\
  !*** ./src/app/shared/constants/especie.constant.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EspecieEnum": () => (/* binding */ EspecieEnum),
/* harmony export */   "EspeciesOptions": () => (/* binding */ EspeciesOptions)
/* harmony export */ });
var EspecieEnum;
(function (EspecieEnum) {
    EspecieEnum["CANINO"] = "CANINO";
    EspecieEnum["FELINO"] = "FELINO";
    EspecieEnum["ROEDOR"] = "ROEDOR";
    EspecieEnum["AVE"] = "AVE";
    EspecieEnum["OUTROS"] = "OUTROS";
})(EspecieEnum || (EspecieEnum = {}));
const EspeciesOptions = [
    { label: "Canino", value: EspecieEnum.CANINO },
    { label: "Felino", value: EspecieEnum.FELINO },
    { label: "Roedor", value: EspecieEnum.ROEDOR },
    { label: "Ave", value: EspecieEnum.AVE },
    { label: "Outros", value: EspecieEnum.OUTROS },
];


/***/ }),

/***/ 90666:
/*!*******************************************************!*\
  !*** ./src/app/shared/constants/veiculos.constant.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VeiculosCoresEnum": () => (/* binding */ VeiculosCoresEnum),
/* harmony export */   "VeiculosCoresOptions": () => (/* binding */ VeiculosCoresOptions),
/* harmony export */   "VeiculosTipoEnum": () => (/* binding */ VeiculosTipoEnum),
/* harmony export */   "VeiculosTipoOptions": () => (/* binding */ VeiculosTipoOptions)
/* harmony export */ });
var VeiculosCoresEnum;
(function (VeiculosCoresEnum) {
    VeiculosCoresEnum["BRANCO"] = "BRANCO";
    VeiculosCoresEnum["CINZA"] = "CINZA";
    VeiculosCoresEnum["PRETO"] = "PRETO";
    VeiculosCoresEnum["PRATA"] = "PRATA";
    VeiculosCoresEnum["AZUL"] = "AZUL";
    VeiculosCoresEnum["VERMELHO"] = "VERMELHO";
    VeiculosCoresEnum["MARROM"] = "MARROM";
    VeiculosCoresEnum["BEGE"] = "BEGE";
    VeiculosCoresEnum["VERDE"] = "VERDE";
    VeiculosCoresEnum["AMARELO"] = "AMARELO";
    VeiculosCoresEnum["OUTROS"] = "OUTROS";
})(VeiculosCoresEnum || (VeiculosCoresEnum = {}));
const VeiculosCoresOptions = Object.keys(VeiculosCoresEnum).map(key => {
    return { label: key.charAt(0) + key.slice(1).toLowerCase(), value: VeiculosCoresEnum[key] };
});
var VeiculosTipoEnum;
(function (VeiculosTipoEnum) {
    VeiculosTipoEnum["CARRO"] = "CARRO";
    VeiculosTipoEnum["MOTOCICLETA"] = "MOTOCICLETA";
    VeiculosTipoEnum["OUTROS"] = "OUTROS";
})(VeiculosTipoEnum || (VeiculosTipoEnum = {}));
const VeiculosTipoOptions = [
    { label: "Carro", value: VeiculosTipoEnum.CARRO },
    { label: "Motocicleta", value: VeiculosTipoEnum.MOTOCICLETA },
    { label: "Outros", value: VeiculosTipoEnum.OUTROS },
];


/***/ }),

/***/ 5884:
/*!****************************************************!*\
  !*** ./src/app/shared/services/pet/pet.service.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PetService": () => (/* binding */ PetService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _config_api_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../config/api.config */ 99038);
/* harmony import */ var _interfaces_others_pageable_dto__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../interfaces/others/pageable.dto */ 40199);
/* harmony import */ var _utils_PageUtils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/PageUtils */ 55583);






let PetService = class PetService {
    constructor(http) {
        this.http = http;
    }
    list(filterDto, pageOptions = new _interfaces_others_pageable_dto__WEBPACK_IMPORTED_MODULE_1__.PageOptionsDto()) {
        let params = _utils_PageUtils__WEBPACK_IMPORTED_MODULE_2__.PageUtils.getPageOptionsParams(pageOptions);
        if (filterDto) {
            if (filterDto.searched_pet) {
                params = params.append('searched_pet', filterDto.searched_pet);
            }
            if (filterDto.especie) {
                params = params.append('especie', filterDto.especie);
            }
            if (filterDto.nome) {
                params = params.append('nome', filterDto.nome);
            }
            if (filterDto.responsavel_id) {
                params = params.append('responsavel_id', filterDto.responsavel_id);
            }
        }
        return this.http.get(`${_config_api_config__WEBPACK_IMPORTED_MODULE_0__.API_CONFIG.baseURL}/pets`, {
            responseType: 'json',
            params,
        });
    }
    create(newPet) {
        return this.http.post(`${_config_api_config__WEBPACK_IMPORTED_MODULE_0__.API_CONFIG.baseURL}/pets`, newPet, {
            responseType: 'json',
        });
    }
    update(pet_id, dto) {
        console.log(dto);
        return this.http.put(`${_config_api_config__WEBPACK_IMPORTED_MODULE_0__.API_CONFIG.baseURL}/pets/${pet_id}`, dto, {
            responseType: 'json',
        });
    }
    delete(pet_id) {
        return this.http.delete(`${_config_api_config__WEBPACK_IMPORTED_MODULE_0__.API_CONFIG.baseURL}/pets/${pet_id}`, {
            responseType: 'json',
        });
    }
};
PetService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient }
];
PetService = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable)({
        providedIn: 'root'
    })
], PetService);



/***/ }),

/***/ 89177:
/*!****************************************************************************************!*\
  !*** ./src/app/pages/administracao-cliente/administracao-cliente.page.scss?ngResource ***!
  \****************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZG1pbmlzdHJhY2FvLWNsaWVudGUucGFnZS5zY3NzIn0= */";

/***/ }),

/***/ 36948:
/*!******************************************************************************************************************!*\
  !*** ./src/app/shared/components/adm-cliente-module/cliente-cadastro/cliente-cadastro.component.scss?ngResource ***!
  \******************************************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjbGllbnRlLWNhZGFzdHJvLmNvbXBvbmVudC5zY3NzIn0= */";

/***/ }),

/***/ 5384:
/*!**************************************************************************************************************!*\
  !*** ./src/app/shared/components/adm-cliente-module/cliente-detail/cliente-detail.component.scss?ngResource ***!
  \**************************************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjbGllbnRlLWRldGFpbC5jb21wb25lbnQuc2NzcyJ9 */";

/***/ }),

/***/ 66674:
/*!**********************************************************************************************************!*\
  !*** ./src/app/shared/components/adm-cliente-module/cliente-main/cliente-main.component.scss?ngResource ***!
  \**********************************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjbGllbnRlLW1haW4uY29tcG9uZW50LnNjc3MifQ== */";

/***/ }),

/***/ 61554:
/*!****************************************************************************************************************!*\
  !*** ./src/app/shared/components/adm-cliente-module/cliente-profile/cliente-profile.component.scss?ngResource ***!
  \****************************************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjbGllbnRlLXByb2ZpbGUuY29tcG9uZW50LnNjc3MifQ== */";

/***/ }),

/***/ 79820:
/*!********************************************************************************************************************!*\
  !*** ./src/app/shared/components/adm-dependentes-module/dependente-view/dependente-view.component.scss?ngResource ***!
  \********************************************************************************************************************/
/***/ ((module) => {

module.exports = ".min-height-320px {\n  min-height: 320px;\n  height: 320px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlcGVuZGVudGUtdmlldy5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL05lZyVDMyVCM2Npb3MvU3RhbmRJTy1Db25kcy9mcm9udGVuZC9zcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2FkbS1kZXBlbmRlbnRlcy1tb2R1bGUvZGVwZW5kZW50ZS12aWV3L2RlcGVuZGVudGUtdmlldy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0VBQ0EsYUFBQTtBQ0NKIiwiZmlsZSI6ImRlcGVuZGVudGUtdmlldy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5taW4taGVpZ2h0LTMyMHB4e1xuICAgIG1pbi1oZWlnaHQ6IDMyMHB4O1xuICAgIGhlaWdodDogMzIwcHg7XG59IiwiLm1pbi1oZWlnaHQtMzIwcHgge1xuICBtaW4taGVpZ2h0OiAzMjBweDtcbiAgaGVpZ2h0OiAzMjBweDtcbn0iXX0= */";

/***/ }),

/***/ 18333:
/*!**********************************************************************************************!*\
  !*** ./src/app/shared/components/adm-pet-module/pet-view/pet-view.component.scss?ngResource ***!
  \**********************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwZXQtdmlldy5jb21wb25lbnQuc2NzcyJ9 */";

/***/ }),

/***/ 23829:
/*!**********************************************************************************************************!*\
  !*** ./src/app/shared/components/adm-veiculo-module/veiculo-view/veiculo-view.component.scss?ngResource ***!
  \**********************************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2ZWljdWxvLXZpZXcuY29tcG9uZW50LnNjc3MifQ== */";

/***/ }),

/***/ 43472:
/*!*******************************************************************************************************!*\
  !*** ./src/app/shared/components/utils/dialogs/question-user/question-user.component.scss?ngResource ***!
  \*******************************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJxdWVzdGlvbi11c2VyLmNvbXBvbmVudC5zY3NzIn0= */";

/***/ }),

/***/ 71197:
/*!****************************************************************************************!*\
  !*** ./src/app/pages/administracao-cliente/administracao-cliente.page.html?ngResource ***!
  \****************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>ADM. Moradores</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content appScrollTheme>\n  <br />\n  <ion-segment class=\"background-segment\" [(ngModel)]=\"currentTab\" [ngModelOptions]=\"{standalone: true}\"\n    (ionChange)=\"changeTab($event)\">\n    <ion-segment-button style=\"margin-left: 5px; max-width: 200px\" layout=\"icon-start\" value=\"cliente\">\n      <ion-icon style=\"font-size: 1.2em\" name=\"id-card-outline\"></ion-icon>\n      <ion-label text-wrap class=\"wrap-text\" style=\"font-size: 1.1em\">\n        Moradores\n      </ion-label>\n    </ion-segment-button>\n  </ion-segment>\n  <br />\n\n  <div class=\"wall-background h-screen\">\n    <ng-container *ngIf=\"currentTab === 'cliente'\">\n      <div style=\"max-width: 95%; margin: auto\">\n        <app-cliente-main></app-cliente-main>\n      </div>\n    </ng-container>\n  </div>\n\n</ion-content>";

/***/ }),

/***/ 42685:
/*!******************************************************************************************************************!*\
  !*** ./src/app/shared/components/adm-cliente-module/cliente-cadastro/cliente-cadastro.component.html?ngResource ***!
  \******************************************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-content appScrollTheme>\n\n  <form [formGroup]=\"form\" (ngSubmit)=\"$event.preventDefault()\">\n    <div class=\"surface-ground px-4 py-8 md:px-6 lg:px-8\">\n\n      <div class=\"text-900 font-medium text-xl mb-1\">Criar/Cadastrar</div>\n      <div class=\"surface-card p-4 shadow-2 border-round p-fluid\">\n        <div class=\"grid formgrid p-fluid\">\n          <div class=\"field mb-4 col-12 md:col-6\">\n            <label for=\"nome\" class=\"font-medium text-900\">Nome </label>\n            <input id=\"nome\" placeholder=\"Nome\" type=\"text\" pInputText formControlName=\"nome\">\n            <div class=\"flex mt-1 justify-content-end\">\n              <p-message severity=\"error\" text=\"Obrigatório\" *ngIf=\"isInputError('nome')\"></p-message>\n            </div>\n          </div>\n          <div class=\"field mb-4 col-12 md:col-6\">\n            <label for=\"descricao\">Email</label>\n            <input type=\"text\" pInputText placeholder=\"Email do usuário\" formControlName=\"email\" />\n            <div class=\"flex mt-1 justify-content-end\">\n              <p-message severity=\"error\" text=\"Obrigatório\" *ngIf=\"isInputError('email')\"></p-message>\n            </div>\n          </div>\n\n          <div class=\"field mb-4 col-12 md:col-6\">\n            <label for=\"descricao\">CPF</label>\n            <p-inputMask placeholder=\"CPF do usuário\" formControlName=\"cpf\" mask=\"999.999.999-99\">\n            </p-inputMask>\n            <div class=\"flex mt-1 justify-content-end\">\n              <p-message severity=\"error\" text=\"Obrigatório\" *ngIf=\"isInputError('cpf')\"></p-message>\n            </div>\n          </div>\n          <div class=\"field mb-4 col-12 md:col-6\">\n            <label for=\"identidade\">Identidade</label>\n            <input id=\"identidade\" placeholder=\"RG do usuário\" type=\"text\" pInputText formControlName=\"identidade\">\n            <div class=\"flex mt-1 justify-content-end\">\n              <p-message severity=\"error\" text=\"No mínimo 7 caracteres e no máximo 11\"\n                *ngIf=\"isInputError('identidade')\"></p-message>\n            </div>\n          </div>\n\n          <div class=\"field mb-4 col-12 md:col-6\">\n            <label for=\"tel1\">Celular 1</label>\n            <p-inputMask id=\"tel1\" placeholder=\"Celular do usuário\" formControlName=\"tel1\" mask=\"(99)9 9999-9999\">\n            </p-inputMask>\n            <div class=\"flex mt-1 justify-content-end\">\n              <p-message severity=\"error\" text=\"Obrigatório\" *ngIf=\"isInputError('tel1')\"></p-message>\n            </div>\n          </div>\n          <div class=\"field mb-4 col-12 md:col-6\">\n            <label for=\"tel2\">Celular 2</label>\n            <p-inputMask id=\"tel2\" placeholder=\"Celular alternativo do usuário\" formControlName=\"tel2\"\n              mask=\"(99)9 9999-9999\">\n            </p-inputMask>\n            <div class=\"flex mt-1 justify-content-end\">\n              <p-message severity=\"error\" text=\"Obrigatório\" *ngIf=\"isInputError('tel2')\"></p-message>\n            </div>\n          </div>\n\n          <div class=\"field mb-4 col-12 md:col-6\">\n            <label for=\"data_nascimento\">Data de nascimento</label>\n            <p-calendar formControlName=\"data_nascimento\" placeholder=\"Data de nascimento do usuário\"\n              [maxDate]=\"maxDate\" [readonlyInput]=\"true\" inputId=\"data_nascimento\"></p-calendar>\n            <div class=\"flex mt-1 justify-content-end\">\n              <p-message severity=\"error\" text=\"Obrigatório\" *ngIf=\"isInputError('data_nascimento')\"></p-message>\n            </div>\n          </div>\n          <div class=\"surface-border border-top-1 opacity-50 mb-4 col-12\"></div>\n\n          <div *ngIf=\"responsavel_id\" class=\"field mb-4 col-12 md:col-6\">\n            <label for=\"grau_parentesco\" class=\"font-medium text-900\">Grau de parentesco</label>\n            <input id=\"grau_parentesco\" placeholder=\"Grau de parentesco\" type=\"text\" pInputText\n              formControlName=\"grau_parentesco\">\n            <div class=\"flex mt-1 justify-content-end\">\n              <p-message severity=\"error\" text=\"Obrigatório\" *ngIf=\"isInputError('grau_parentesco')\"></p-message>\n            </div>\n          </div>\n          <div class=\"surface-border border-top-1 opacity-50 mb-4 col-12\"></div>\n        </div>\n        <div class=\"flex justify-content-end\">\n          <button pButton pRipple label=\"Próximo\" icon=\"pi pi-send\" iconPos=\"right\" class=\"w-auto\" (click)=\"create()\"\n            [disabled]=\"disableCreateBtn()\"></button>\n        </div>\n      </div>\n    </div>\n  </form>\n\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar>\n    <ion-button expand=\"full\" color=\"danger\" (click)=\"fechar()\">Fechar</ion-button>\n  </ion-toolbar>\n</ion-footer>";

/***/ }),

/***/ 88909:
/*!**************************************************************************************************************!*\
  !*** ./src/app/shared/components/adm-cliente-module/cliente-detail/cliente-detail.component.html?ngResource ***!
  \**************************************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-content appScrollTheme>\n  <form  [formGroup]=\"form\" (ngSubmit)=\"$event.preventDefault()\">\n    <div class=\"surface-ground px-4 md:px-6 lg:px-8 mt-5\">\n\n      <!--\n        <div class=\"flex flex-column align-items-center flex-or \">\n        <img [src]=\"user?.avatar_url || 'assets/imgs/outros/default-user.jpg'\"\n          class=\"h-10rem w-10rem border-circle border-2 border-primary mr-1 xl:mr-0 ml-3 \" />\n        <p-fileUpload #avatarFile id=\"avatar\" mode=\"basic\" name=\"avatar\" accept=\"image/*\"\n          styleClass=\"p-button-rounded -mt-4 w-3rem  text-center\" chooseIcon=\"pi pi-pencil\" chooseLabel=\" \"\n          customUpload=\"true\" [auto]=\"true\" (uploadHandler)=\"uploadFile($event, avatarFile)\">\n        </p-fileUpload>\n      </div>\n      -->\n      <div class=\"text-900 font-medium text-xl mb-1\">Atualizar</div>\n      <div class=\"surface-card p-4 shadow-2 border-round p-fluid\">\n        <div class=\"grid formgrid p-fluid\">\n          <div class=\"field mb-4 col-12 md:col-6\">\n            <label for=\"nome\" class=\"font-medium text-900\">Nome</label>\n            <input id=\"nome\" placeholder=\"Nome\" type=\"text\" pInputText formControlName=\"nome\">\n            <div class=\"flex mt-1 justify-content-end\">\n              <p-message severity=\"error\" text=\"Obrigatório\" *ngIf=\"isInputError('nome')\"></p-message>\n            </div>\n          </div>\n\n          <div class=\"field mb-4 col-12 md:col-6\">\n            <label for=\"status_patrimonio\">Status</label>\n            <p-dropdown [options]=\"sortStatus\" placeholder=\"Status\" formControlName=\"status\" optionLabel=\"label\"\n              optionValue=\"value\"></p-dropdown>\n            <div class=\"flex mt-1 justify-content-end\">\n              <p-message severity=\"error\" text=\"Obrigatório\" *ngIf=\"isInputError('status')\"></p-message>\n            </div>\n          </div>\n\n          <div class=\"field mb-4 col-12 md:col-6\">\n            <label for=\"tel1\">Celular 1</label>\n            <p-inputMask id=\"tel1\" placeholder=\"Celular do usuário\" formControlName=\"tel1\" mask=\"(99)9 9999-9999\">\n            </p-inputMask>\n            <div class=\"flex mt-1 justify-content-end\">\n              <p-message severity=\"error\" text=\"Obrigatório\" *ngIf=\"isInputError('tel1')\"></p-message>\n            </div>\n          </div>\n          <div class=\"field mb-4 col-12 md:col-6\">\n            <label for=\"tel2\">Celular 2</label>\n            <p-inputMask id=\"tel2\" placeholder=\"Celular alternativo do usuário\" formControlName=\"tel2\"\n              mask=\"(99)9 9999-9999\">\n            </p-inputMask>\n            <div class=\"flex mt-1 justify-content-end\">\n              <p-message severity=\"error\" text=\"Obrigatório\" *ngIf=\"isInputError('tel2')\"></p-message>\n            </div>\n          </div>\n\n          <div class=\"field mb-4 col-12 md:col-6\">\n            <label for=\"data_nascimento\">Data de nascimento</label>\n            <p-calendar formControlName=\"data_nascimento\" placeholder=\"Data de nascimento do usuário\"\n              [maxDate]=\"maxDate\" [readonlyInput]=\"true\" inputId=\"data_nascimento\"></p-calendar>\n            <div class=\"flex mt-1 justify-content-end\">\n              <p-message severity=\"error\" text=\"Obrigatório\" *ngIf=\"isInputError('data_nascimento')\"></p-message>\n            </div>\n          </div>\n          <div class=\"surface-border border-top-1 opacity-50 mb-4 col-12\"></div>\n\n        </div>\n        <div class=\"flex justify-content-end\">\n          <button pButton pRipple label=\"Atualizar\" icon=\"pi pi-send\" iconPos=\"right\" class=\"w-auto\" (click)=\"update()\"\n            [disabled]=\"disableUpdateBtn()\"></button>\n        </div>\n      </div>\n    </div>\n  </form>\n\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar>\n    <ion-button expand=\"full\" color=\"danger\" (click)=\"fechar()\">Fechar</ion-button>\n  </ion-toolbar>\n</ion-footer>";

/***/ }),

/***/ 1355:
/*!**********************************************************************************************************!*\
  !*** ./src/app/shared/components/adm-cliente-module/cliente-main/cliente-main.component.html?ngResource ***!
  \**********************************************************************************************************/
/***/ ((module) => {

module.exports = "<div class=\"card main-view h-full\">\n  <p-dataView *ngIf=\"isLoaded\" emptyMessage=\"Nada encontrado, experimente escolher outro filtro\" class=\"data-container\"\n    #dv [lazy]=\"true\" [value]=\"users.data\" [paginator]=\"true\" [rows]=\"users.meta.take\"\n    [totalRecords]=\"users.meta.itemCount\" [pageLinks]=\"users.meta.pageCount\" (onLazyLoad)=\"paginar($event)\"\n    filterBy=\"nome\" layout=\"list\">\n    <ng-template pTemplate=\"header\">\n\n      <div class=\"flex grid formgrid p-fluid justify-content-between mb-2\">\n        <!--\n        <div class=\"field  col-12 sm:col-6 xl:col-3\">\n          <p-dropdown #dropdown_lojas [options]=\"sortLojas\" placeholder=\"Loja\" styleClass=\"w-full\"\n            (onClear)=\"clearFilter($event)\" (onChange)=\"changeLoja($event)\" [showClear]=\"true\">\n          </p-dropdown>\n        </div>\n        -->\n\n        <div class=\"field mb-2 col-12 sm:col-6 xl:col-3\">\n          <p-dropdown #dropdown_filtro [options]=\"sortOptions\" placeholder=\"Filtrar\" (onChange)=\"changeFiltro($event)\"\n            (onClear)=\"clearFilter($event)\" [showClear]=\"true\" styleClass=\"mb-2 md:mb-0 w-full\"></p-dropdown>\n        </div>\n      </div>\n\n      <div class=\"flex grid formgrid p-fluid justify-content-between mb-2\">\n        <div class=\"field col-12 sm:col-6 xl:col-3\">\n          <button pButton pRipple class=\"sm:w-auto w-full p-button-outlined\" icon=\"pi pi-times\" label=\"Limpar filtros\"\n            (click)=\"clearAllFilters($event, dropdown_lojas, dropdown_filtro)\">\n          </button>\n        </div>\n        <div class=\"field col-12 sm:col-6 xl:col-3 text-right\">\n          <button pButton pRipple class=\"sm:w-auto w-full \" icon=\"pi pi-user-plus\" label=\"Novo usuário\"\n            (click)=\"createNewUser()\">\n          </button>\n        </div>\n      </div>\n\n      <div class=\"flex flex-column md:flex-row md:justify-content-center\">\n        <span class=\"p-input-icon-right mb-2 md:mb-0 mt-2\">\n          <i class=\"pi pi-search cursor-pointer text-primary\" (click)=\"search()\"></i>\n          <input class=\"w-full\" type=\"search\" pInputText [(ngModel)]=\"searchedNome\"\n            [ngModelOptions]=\"{standalone: true}\" placeholder=\"CPF, Email ou Nome\" (keyup.enter)=\"search()\">\n        </span>\n      </div>\n\n    </ng-template>\n\n    <ng-template let-user pTemplate=\"listItem\">\n      <div *ngIf=\"isLoaded\" #templateGrid class=\"col-12\">\n        <div class=\"data-list-item\">\n          <!--\n            <div class=\"crop mb-2 md:mb-0 \">\n            <img class=\"border-circle border-2 border-primary\" [src]=\"setUserImage(user)\" [alt]=\"user.name\" />\n          </div>\n          -->\n          <div class=\"data-list-detail\">\n            <div class=\"data-name\">{{ user.nome }}</div>\n            <div class=\"data-description mt-1\">Status: {{ user.status }}</div>\n            <div class=\"data-description mt-2\">CPF: {{ user.cpf | cpfMask }}</div>\n            <div class=\"data-description mt-1\">Identidade: {{ user.identidade }}</div>\n\n            <div class=\"data-description mt-2\">E-mail: {{ user.email }}</div>\n            <div class=\"data-description mt-1\">Celular 1: {{ user.tel1 | phoneMask }}</div>\n            <div *ngIf=\"user.tel2\" class=\"data-description mt-1\">Celular 2: {{ user.tel2 | phoneMask }}</div>\n\n            <div class=\"mt-3\">\n              <i class=\"pi pi-sitemap data-category-icon \"></i>\n              <span class=\"data-category\">Acesso: {{user.perfil?.nome || \"Sem\n                Perfil\"}}</span>\n            </div>\n          </div>\n          <div class=\"data-list-action\">\n            <button type=\"button\" pButton icon=\"pi pi-user-edit\" label=\"Opções\"\n              (click)=\"selectedUser = user; editMenu.toggle($event)\"></button>\n            <p-menu #editMenu appendTo=\"body\" [popup]=\"true\" [model]=\"editMenuItens\"></p-menu>\n\n          </div>\n        </div>\n      </div>\n    </ng-template>\n  </p-dataView>\n</div>";

/***/ }),

/***/ 85337:
/*!****************************************************************************************************************!*\
  !*** ./src/app/shared/components/adm-cliente-module/cliente-profile/cliente-profile.component.html?ngResource ***!
  \****************************************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-content appScrollTheme>\n  <ng-container *ngIf=\"user\">\n    <div class=\"flex flex-column flex-auto wall-background py-2 h-screen\">\n      <div class=\"surface-section p-5\">\n        <div class=\"flex align-items-start flex-column lg:flex-row \n        lg:justify-content-between\">\n          <div class=\"flex align-items-start flex-column md:flex-row\">\n            <img [src]=\"setUserImage(user)\" class=\"mr-5 mb-3 lg:mb-0 default-avatar border-1 border-primary\" />\n            <div>\n              <span class=\"text-900 font-medium text-3xl\">{{ user.nome }}</span>\n              <div class=\"flex align-items-center flex-wrap text-sm\">\n                <div class=\"mr-5 mt-3\">\n                  <span class=\"font-medium text-500\">Loja</span>\n                  <div class=\"text-700 mt-2\">{{ user.loja?.nome || \"Sem loja definida\" }}</div>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"mt-3 lg:mt-0\">\n            <div class=\"font-medium text-900  mb-1\">Mês</div>\n            <p-calendar [(ngModel)]=\"selectedDate\" view=\"month\" inputId=\"dateformat\" (onSelect)=\"changeDate()\"\n              dateFormat=\"MM/yy\"></p-calendar>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"p-5\">\n        <div class=\"grid\">\n          <ng-container *ngIf=\"inAndOutDash\">\n            <div class=\"col-12 \">\n              <div class=\"surface-card shadow-2 p-3 border-1 border-50 border-round\">\n                <div class=\"flex justify-content-center mb-3 \">\n                  <div class=\"w-full\" echarts [options]=\"inAndOutDash\" [theme]=\"getTheme()\"\n                    style=\"width: 400px; height: 400px; box-shadow: white\"></div>\n                </div>\n              </div>\n            </div>\n          </ng-container>\n\n          <p-divider class=\"col-12\"></p-divider>\n\n          <ng-container *ngIf=\"simplesDash\">\n            <div class=\"col-12 lg:col-4 xl:col-4\">\n              <div class=\"surface-card shadow-2 p-3 border-1 border-50 border-round cursor-pointer\"\n                (click)=\"goToPedidos()\">\n                <div class=\"flex justify-content-between mb-3\">\n                  <div>\n                    <span class=\"block text-500 font-medium mb-3\">Produtos</span>\n                    <div class=\"text-900 font-medium text-xl\">Total (R$): {{ simplesDash.produto_venda_valor |\n                      currency:'BRL':'' }}</div>\n                  </div>\n                  <div class=\"flex align-items-center justify-content-center bg-blue-100 border-round\"\n                    style=\"width:2.5rem;height:2.5rem\">\n                    <i class=\"pi pi-shopping-cart text-blue-500 text-xl\"></i>\n                  </div>\n                </div>\n                <span class=\"text-blue-500 font-medium\">Quantidade: </span>\n                <span class=\"text-500\">{{ simplesDash.produto_venda_quantidade }}</span>\n              </div>\n            </div>\n            <div class=\"col-12 lg:col-4 xl:col-4\">\n              <div class=\"surface-card shadow-2 p-3 border-1 border-50 border-round\">\n                <div class=\"flex justify-content-between mb-3\">\n                  <div>\n                    <span class=\"block text-500 font-medium mb-3\">Serviços</span>\n                    <div class=\"text-900 font-medium text-xl\">Total (R$): {{ simplesDash.servico_prestado_valor |\n                      currency:'BRL':'' }}</div>\n                  </div>\n                  <div class=\"flex align-items-center justify-content-center bg-orange-100 border-round \"\n                    style=\"width:2.5rem;height:2.5rem\">\n                    <fa-icon class=\"text-orange-500 text-xl\" style=\"font-size: 20px;\"\n                      [icon]=\"['fas', 'bell-concierge']\"></fa-icon>\n                  </div>\n                </div>\n                <span class=\"text-orange-500 font-medium\">Quantidade: </span>\n                <span class=\"text-500\">{{ simplesDash.servico_prestado_quantidade }}</span>\n              </div>\n            </div>\n            <div class=\"col-12 lg:col-4 xl:col-4\">\n              <div class=\"surface-card shadow-2 p-3 border-1 border-50 border-round\">\n                <div class=\"flex justify-content-between mb-3\">\n                  <div>\n                    <span class=\"block text-500 font-medium mb-3\">Assinaturas</span>\n                    <div class=\"text-900 font-medium text-xl\">Total (R$): {{ simplesDash.assinatura_venda_valor |\n                      currency:'BRL':'' }}</div>\n                  </div>\n                  <div class=\"flex align-items-center justify-content-center bg-green-100 border-round\"\n                    style=\"width:2.5rem;height:2.5rem\">\n                    <fa-icon class=\"text-green-500 text-xl\" style=\"font-size: 20px;\"\n                      [icon]=\"['fas', 'file-contract']\"></fa-icon>\n                  </div>\n                </div>\n                <span class=\"text-green-500 font-medium\">Quantidade: </span>\n                <span class=\"text-500\">{{ simplesDash.assinatura_venda_quantidade }}</span>\n              </div>\n            </div>\n\n            <ng-container *ngIf=\"!selectedOption\">\n              <div class=\"mx-auto mt-2\">\n                <div class=\"border-2 border-dashed surface-border border-round surface-card \n              justify-content-center flex align-items-center text-xl\" style=\"min-height: 20rem; width: 90vw;\">\n                  Selecione uma opção acima\n                </div>\n              </div>\n            </ng-container>\n\n            <ng-container *ngIf=\"selectedOption\">\n              <app-cliente-dashboard-compras [cliente_id]=\"user.id\"\n                [defaultDate]=\"selectedDate\"></app-cliente-dashboard-compras>\n            </ng-container>\n\n          </ng-container>\n\n\n\n        </div>\n      </div>\n\n      <ng-container *ngIf=\"!hasAccount\">\n        <div class=\"border-circle border-1 border-primary\">\n          <app-attention-surface title=\"Atenção\" subtitle=\"Vazio\"\n            message=\"Sem registros de compras para o mês selecionado\"></app-attention-surface>\n        </div>\n      </ng-container>\n    </div>\n  </ng-container>\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar>\n    <ion-button expand=\"full\" color=\"danger\" (click)=\"fechar()\">Fechar</ion-button>\n  </ion-toolbar>\n</ion-footer>";

/***/ }),

/***/ 65080:
/*!********************************************************************************************************************!*\
  !*** ./src/app/shared/components/adm-dependentes-module/dependente-view/dependente-view.component.html?ngResource ***!
  \********************************************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-content appScrollTheme>\n\n  <div class=\"surface-ground mt-2 mb-3\">\n    <div class=\"surface-section px-4 pt-2 mb-3\">\n      <div class=\"text-3xl font-medium text-900 mb-3\">Dependentes de {{ responsavel.nome }}</div>\n      <div class=\"surface-border border-top-1 opacity-50 w-full\"></div>\n    </div>\n\n    <div class=\"px-6 grid formgrid p-fluid\">\n      <div *ngFor=\"let d of dependentes\" class=\"col-12 md:col-6 xl:col-4 p-3 \">\n        <div class=\"surface-card shadow-2 border-round p-4 \">\n          <div class=\"flex border-bottom-1 surface-border pb-4\">\n            <div class=\"flex flex-column align-items-start\">\n              <span class=\"text-2xl text-900 font-medium mb-2\">{{ d.user_dependente.nome }}\n                <span class=\"text-xl text-700 font-medium\">({{ d.grau_parentesco }})</span>\n              </span>\n              <div class=\"text-500 font-medium mb-1\">CPF: {{ d.user_dependente.cpf | cpfMask }}</div>\n              <div class=\"text-500 font-medium mb-3\">Identidade: {{ d.user_dependente.identidade }}</div>\n\n              <div class=\"text-500 font-medium mb-1\">E-mail: {{ d.user_dependente.email }}</div>\n              <div class=\"text-500 font-medium mb-1\">Celular 1: {{ d.user_dependente.tel1 | phoneMask }}</div>\n              <div *ngIf=\"d.user_dependente.tel2\" class=\"text-500 font-medium mb-1\">Celular 2: {{ d.user_dependente.tel2\n                | phoneMask }}</div>\n\n              <div class=\"mt-4\"></div>\n            </div>\n          </div>\n          <div class=\"flex justify-content-between pt-4 \">\n            <button pButton pRipple label=\"Remover\" icon=\"pi pi-times\" class=\"p-button-outlined p-button-danger  ml-2\"\n              (click)=\"removeDependente(d)\"></button>\n          </div>\n        </div>\n      </div>\n\n      <div *ngIf=\"users\" class=\"col-12 md:col-6 xl:col-4 p-3\">\n        <form [formGroup]=\"form\" (ngSubmit)=\"$event.preventDefault()\">\n          <div class=\"surface-card shadow-2 border-round p-4\">\n            <div class=\"grid flex border-bottom-1 surface-border pb-4\">\n              <div class=\"col-12 field mb-5\">\n                <label for=\"users\" class=\"text-900 font-medium mb-3\">Usuário</label>\n                <div class=\"ml-3 cursor-pointer pi pi-question-circle\" (click)=\"detailUser()\"></div>\n                <p-dropdown id=\"users\" #drop_user [options]=\"users.data\" [filter]=\"true\" placeholder=\"Selecione\"\n                  [virtualScroll]=\"true\" [virtualScrollItemSize]=\"38\" [lazy]=\"true\"\n                  [virtualScrollOptions]=\"{ showLoader: true, loading: loading, delay: 250 }\"\n                  formControlName=\"dependente\" optionLabel=\"nome\" filterBy=\"nome,cpf\">\n                  <ng-template pTemplate=\"filter\" let-options=\"options\">\n                    <div class=\"flex p-3\">\n                      <div class=\"p-inputgroup\" (click)=\"$event.stopPropagation()\">\n                        <input #searchUser1 type=\"text\" pInputText placeholder=\"Procurar\">\n                        <button pButton pRipple icon=\"pi pi-search\" (click)=\"paginarUser(searchUser1)\"></button>\n                      </div>\n                    </div>\n                  </ng-template>\n                  <ng-template pTemplate=\"loader\" let-options=\"options\">\n                    <div class=\"flex align-items-center py-2 px-3\" style=\"height: 38px\">\n                      <p-skeleton [width]=\"options.even ? '60%' : '50%'\" height=\"1rem\"></p-skeleton>\n                    </div>\n                  </ng-template>\n                  <ng-template let-user pTemplate=\"item\">\n                    <div>\n                      <div>{{ user.nome }} - {{ user.cpf | cpfMask}}</div>\n                    </div>\n                  </ng-template>\n                  <ng-template let-user pTemplate=\"selectedItem\">\n                    <div>\n                      <div>{{ user.nome }} - {{ user.cpf | cpfMask}}</div>\n                    </div>\n                  </ng-template>\n                </p-dropdown>\n                <div class=\"flex mt-1 justify-content-end\">\n                  <p-message severity=\"error\" text=\"Obrigatório\" *ngIf=\"isInputError('dependente')\"></p-message>\n                </div>\n              </div>\n\n              <div class=\"col-12 field mb-4\">\n                <label for=\"grau_parentesco\" class=\"font-medium text-900\">Grau de parentesco</label>\n                <input id=\"grau_parentesco\" placeholder=\"Grau de Parentesco\" type=\"text\" pInputText\n                  formControlName=\"grau_parentesco\">\n                <div class=\"flex mt-1 justify-content-end\">\n                  <p-message severity=\"error\" text=\"Obrigatório com pelo menos 3 caracteres\"\n                    *ngIf=\"isInputError('grau_parentesco')\"></p-message>\n                </div>\n              </div>\n            </div>\n            <div class=\"flex justify-content-between pt-4\">\n              <button pButton pRipple label=\"Criar novo usuário\" icon=\"pi pi-user-plus\"\n                class=\"p-button-outlined w-6 mr-2\" (click)=\"newDependente()\"></button>\n              <button pButton pRipple label=\"Adicionar\" icon=\"pi pi-plus\" [disabled]=\"disableAddDependenteBtn()\"\n                class=\"  w-6 ml-2\" (click)=\"addDependente()\"></button>\n            </div>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n\n  <p-confirmDialog acceptLabel=\"Sim\" rejectLabel=\"Não\" [style]=\"{width: '50vw'}\" [baseZIndex]=\"10000\"\n    rejectButtonStyleClass=\"p-button-text\"></p-confirmDialog>\n\n  <app-question-user *ngIf=\"selectedDependente\" [showDialog]=\"showDialog\" [selectedUser]=\"selectedDependente\"\n    (closeEvent)=\"selectedDependente = undefined; showDialog = false;\"></app-question-user>\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar>\n    <ion-button expand=\"full\" color=\"danger\" (click)=\"fechar()\">Fechar</ion-button>\n  </ion-toolbar>\n</ion-footer>";

/***/ }),

/***/ 57570:
/*!**********************************************************************************************!*\
  !*** ./src/app/shared/components/adm-pet-module/pet-view/pet-view.component.html?ngResource ***!
  \**********************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-content appScrollTheme>\n\n  <div class=\"surface-ground mt-2 mb-3\">\n    <div class=\"surface-section px-4 pt-2 mb-3\">\n      <div class=\"text-3xl font-medium text-900 mb-3\">Pets de {{ responsavel.nome }}</div>\n      <div class=\"surface-border border-top-1 opacity-50 w-full\"></div>\n    </div>\n\n    <form [formGroup]=\"form\" (ngSubmit)=\"$event.preventDefault()\" class=\"flex\">\n      <div class=\"surface-ground px-6 py-3 justify-content-start w-25rem sm:w-29rem\">\n\n        <div class=\"text-900 font-medium text-xl mb-1\">Criar/Cadastrar</div>\n        <div class=\"surface-card p-4 shadow-2 border-round p-fluid\">\n          <div class=\"grid formgrid p-fluid\">\n            <div class=\"field mb-4 col-12\">\n              <label for=\"nome\" class=\"font-medium text-900\">Nome</label>\n              <input id=\"nome\" placeholder=\"Nome\" type=\"text\" pInputText formControlName=\"nome\">\n              <div class=\"flex mt-1 justify-content-end\">\n                <p-message severity=\"error\" text=\"Obrigatório\" *ngIf=\"isInputError('nome')\"></p-message>\n              </div>\n            </div>\n            <div class=\"field mb-4 col-12\">\n              <label for=\"nome\" class=\"font-medium text-900\">Espécie</label>\n              <p-dropdown #dropdown_filtro [options]=\"especiesOptions\" placeholder=\"Selecione\"\n                styleClass=\"mb-2 md:mb-0 w-full\" formControlName=\"especie\"></p-dropdown>\n              <div class=\"flex mt-1 justify-content-end\">\n                <p-message severity=\"error\" text=\"Obrigatório\" *ngIf=\"isInputError('especie')\"></p-message>\n              </div>\n            </div>\n            <div class=\"surface-border border-top-1 opacity-50 mb-4 col-12\"></div>\n          </div>\n          <div class=\"flex justify-content-end\">\n            <button pButton pRipple label=\"Salvar\" icon=\"pi pi-send\" iconPos=\"right\" class=\"w-auto\" (click)=\"create()\"\n              [disabled]=\"disableCreateBtn()\"></button>\n          </div>\n        </div>\n      </div>\n    </form>\n\n    <div class=\"surface-border border-top-1 opacity-50 w-full\"></div>\n\n    <div class=\"px-6 grid formgrid p-fluid mt-2 mb-8\">\n      <div *ngIf=\"pets\" class=\"col-12\">\n        <p-table #dt [value]=\"pets.data\" dataKey=\"id\" [rowHover]=\"true\" [showCurrentPageReport]=\"true\"\n          [rowsPerPageOptions]=\"[5,10,25,50]\" [globalFilterFields]=\"['nome','especie']\" [filterDelay]=\"2\"\n          currentPageReportTemplate=\"Mostrando {first} até {last} de {totalRecords} pets\" [lazy]=\"true\"\n          [value]=\"pets.data\" [paginator]=\"true\" [rows]=\"pets.meta.take\" [totalRecords]=\"pets.meta.itemCount\"\n          [pageLinks]=\"pets.meta.pageCount\" (onLazyLoad)=\"paginar($event, dt)\" responsiveLayout=\"scroll\"\n          styleClass=\"p-datatable-striped\">\n          <ng-template pTemplate=\"header\">\n            <tr>\n              <th pSortableColumn=\"especie\" style=\"min-width: 10rem\">\n                <div class=\"flex justify-content-between align-items-center\">\n                  Espécie\n                  <!--\n                  <p-columnFilter type=\"text\" field=\"especie\" display=\"menu\" class=\"ml-auto\"></p-columnFilter>\n                  -->\n                </div>\n              </th>\n\n              <th pSortableColumn=\"nome\" style=\"min-width: 10rem\">\n                <div class=\"flex justify-content-between align-items-center\">\n                  Nome\n                  <!--\n                    <p-columnFilter type=\"text\" field=\"nome\" display=\"menu\" class=\"ml-auto\"></p-columnFilter>\n                  -->\n                </div>\n              </th>\n              <th style=\"width: 15rem\"></th>\n            </tr>\n          </ng-template>\n          <ng-template pTemplate=\"body\" let-pet>\n            <tr class=\"p-selectable-row mb-8\">\n              <td>\n                <span class=\"p-column-title\">especie</span>\n                <p-dropdown #dropdown_filtro [options]=\"especiesOptions\" placeholder=\"Selecione\"\n                  styleClass=\"mb-2 md:mb-0 w-full\" [(ngModel)]=\"pet.especie\" appendTo=\"body\"></p-dropdown>\n              </td>\n              <td>\n                <span class=\"p-column-title\">nome</span>\n                <input id=\"nome\" placeholder=\"Nome\" type=\"text\" pInputText [(ngModel)]=\"pet.nome\">\n              </td>\n              <td style=\"text-align: center\">\n                <button pButton type=\"button\" class=\"p-button-danger\" icon=\"pi pi-times\" (click)=\"delete(pet)\"></button>\n                <button pButton type=\"button\" class=\"p-button-success ml-0 mt-2 sm:ml-3 sm:mt-0\" icon=\"pi pi-check\"\n                  (click)=\"update(pet)\"></button>\n              </td>\n            </tr>\n          </ng-template>\n          <ng-template pTemplate=\"emptymessage\">\n            <tr>\n              <td colspan=\"8\">Nenhum pet cadastrado.</td>\n            </tr>\n          </ng-template>\n        </p-table>\n      </div>\n    </div>\n  </div>\n\n  <p-confirmDialog acceptLabel=\"Sim\" rejectLabel=\"Não\" [style]=\"{width: '50vw'}\" [baseZIndex]=\"10000\"\n    rejectButtonStyleClass=\"p-button-text\"></p-confirmDialog>\n\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar>\n    <ion-button expand=\"full\" color=\"danger\" (click)=\"fechar()\">Fechar</ion-button>\n  </ion-toolbar>\n</ion-footer>";

/***/ }),

/***/ 45512:
/*!**********************************************************************************************************!*\
  !*** ./src/app/shared/components/adm-veiculo-module/veiculo-view/veiculo-view.component.html?ngResource ***!
  \**********************************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-content appScrollTheme>\n\n  <div class=\"surface-ground mt-2 mb-3\">\n    <div class=\"surface-section px-4 pt-2 mb-3\">\n      <div class=\"text-3xl font-medium text-900 mb-3\">Veículos de {{ responsavel.nome }}</div>\n      <div class=\"surface-border border-top-1 opacity-50 w-full\"></div>\n    </div>\n\n    <form [formGroup]=\"form\" (ngSubmit)=\"$event.preventDefault()\" class=\"flex\">\n      <div class=\"surface-ground px-6 py-3 justify-content-start\">\n\n        <div class=\"text-900 font-medium text-xl mb-1\">Criar/Cadastrar</div>\n        <div class=\"surface-card p-4 shadow-2 border-round p-fluid\">\n          <div class=\"grid formgrid p-fluid\">\n            <div class=\"field mb-4 col-12\">\n              <label for=\"placa\" class=\"font-medium text-900\">Placa</label>\n              <input id=\"placa\" placeholder=\"Placa\" type=\"text\" pInputText formControlName=\"placa\">\n              <div class=\"flex mt-1 justify-content-end\">\n                <p-message severity=\"error\" text=\"Obrigatório, com exatos 7 dígitos\"\n                  *ngIf=\"isInputError('placa')\"></p-message>\n              </div>\n            </div>\n\n\n            <div class=\"field mb-4 col-12 md:col-6\">\n              <label for=\"fabricante\" class=\"font-medium text-900\">Fabricante</label>\n              <input id=\"fabricante\" placeholder=\"Fabricante\" type=\"text\" pInputText formControlName=\"fabricante\">\n              <div class=\"flex mt-1 justify-content-end\">\n                <p-message severity=\"error\" text=\"Obrigatório\" *ngIf=\"isInputError('fabricante')\"></p-message>\n              </div>\n            </div>\n            <div class=\"field mb-4 col-12 md:col-6\">\n              <label for=\"modelo\" class=\"font-medium text-900\">Modelo</label>\n              <input id=\"modelo\" placeholder=\"Modelo\" type=\"text\" pInputText formControlName=\"modelo\">\n              <div class=\"flex mt-1 justify-content-end\">\n                <p-message severity=\"error\" text=\"Obrigatório\" *ngIf=\"isInputError('modelo')\"></p-message>\n              </div>\n            </div>\n\n            <div class=\"field mb-4 col-12\">\n              <label for=\"ano\" class=\"font-medium text-900\">Ano</label>\n              <p-calendar formControlName=\"ano\" view=\"year\" dateFormat=\"yy\" inputId=\"ano\"></p-calendar>\n              <div class=\"flex mt-1 justify-content-end\">\n                <p-message severity=\"error\" text=\"Obrigatório\" *ngIf=\"isInputError('modelo')\"></p-message>\n              </div>\n            </div>\n\n            <div class=\"field mb-4 col-12  md:col-6\">\n              <label for=\"cor\" class=\"font-medium text-900\">Cor</label>\n              <p-dropdown id=\"cor\" #dropdown_filtro [options]=\"veiculosCoresOptions\" placeholder=\"Selecione\"\n                styleClass=\"mb-2 md:mb-0 w-full\" formControlName=\"cor\"></p-dropdown>\n              <div class=\"flex mt-1 justify-content-end\">\n                <p-message severity=\"error\" text=\"Obrigatório\" *ngIf=\"isInputError('cor')\"></p-message>\n              </div>\n            </div>\n            <div class=\"field mb-4 col-12  md:col-6\">\n              <label for=\"tipo\" class=\"font-medium text-900\">Tipo</label>\n              <p-dropdown id=\"tipo\" #dropdown_filtro [options]=\"veiculosTipoOptions\" placeholder=\"Selecione\"\n                styleClass=\"mb-2 md:mb-0 w-full\" formControlName=\"tipo\"></p-dropdown>\n              <div class=\"flex mt-1 justify-content-end\">\n                <p-message severity=\"error\" text=\"Obrigatório\" *ngIf=\"isInputError('tipo')\"></p-message>\n              </div>\n            </div>\n            <div class=\"surface-border border-top-1 opacity-50 mb-4 col-12\"></div>\n          </div>\n          <div class=\"flex justify-content-end\">\n            <button pButton pRipple label=\"Salvar\" icon=\"pi pi-send\" iconPos=\"right\" class=\"w-auto\" (click)=\"create()\"\n              [disabled]=\"disableCreateBtn()\"></button>\n          </div>\n        </div>\n      </div>\n    </form>\n\n    <div class=\"surface-border border-top-1 opacity-50 w-full\"></div>\n\n    <div class=\"px-6 grid formgrid p-fluid mt-2 mb-8\">\n      <div *ngIf=\"veiculos\" class=\"col-12\">\n        <p-table #dt [value]=\"veiculos.data\" dataKey=\"id\" [rowHover]=\"true\" [showCurrentPageReport]=\"true\"\n          [rowsPerPageOptions]=\"[5,10,25,50]\"\n          [globalFilterFields]=\"['tipo', 'placa','fabricante', 'modelo', 'cor', 'ano']\" [filterDelay]=\"2\"\n          currentPageReportTemplate=\"Mostrando {first} até {last} de {totalRecords} veiculos\" [lazy]=\"true\"\n          [value]=\"veiculos.data\" [paginator]=\"true\" [rows]=\"veiculos.meta.take\"\n          [totalRecords]=\"veiculos.meta.itemCount\" [pageLinks]=\"veiculos.meta.pageCount\"\n          (onLazyLoad)=\"paginar($event, dt)\" responsiveLayout=\"scroll\" styleClass=\"p-datatable-striped\">\n          <ng-template pTemplate=\"header\">\n            <tr>\n              <th pSortableColumn=\"tipo\" style=\"min-width: 10rem\">\n                <div class=\"flex justify-content-between align-items-center\">\n                  Tipo\n                  <!--\n                  <p-columnFilter type=\"text\" field=\"especie\" display=\"menu\" class=\"ml-auto\"></p-columnFilter>\n                  -->\n                </div>\n              </th>\n              <th pSortableColumn=\"placa\" style=\"min-width: 10rem\">\n                <div class=\"flex justify-content-between align-items-center\">\n                  Placa\n                  <!--\n                  <p-columnFilter type=\"text\" field=\"especie\" display=\"menu\" class=\"ml-auto\"></p-columnFilter>\n                  -->\n                </div>\n              </th>\n              <th pSortableColumn=\"fabricante\" style=\"min-width: 10rem\">\n                <div class=\"flex justify-content-between align-items-center\">\n                  Fabricante\n                  <!--\n                  <p-columnFilter type=\"text\" field=\"especie\" display=\"menu\" class=\"ml-auto\"></p-columnFilter>\n                  -->\n                </div>\n              </th>\n              <th pSortableColumn=\"modelo\" style=\"min-width: 10rem\">\n                <div class=\"flex justify-content-between align-items-center\">\n                  Modelo\n                  <!--\n                  <p-columnFilter type=\"text\" field=\"especie\" display=\"menu\" class=\"ml-auto\"></p-columnFilter>\n                  -->\n                </div>\n              </th>\n              <th pSortableColumn=\"cor\" style=\"min-width: 10rem\">\n                <div class=\"flex justify-content-between align-items-center\">\n                  Cor\n                  <!--\n                    <p-columnFilter type=\"text\" field=\"nome\" display=\"menu\" class=\"ml-auto\"></p-columnFilter>\n                  -->\n                </div>\n              </th>\n              <th pSortableColumn=\"ano\" style=\"min-width: 10rem\">\n                <div class=\"flex justify-content-between align-items-center\">\n                  Ano\n                  <!--\n                    <p-columnFilter type=\"text\" field=\"nome\" display=\"menu\" class=\"ml-auto\"></p-columnFilter>\n                  -->\n                </div>\n              </th>\n              <th style=\"width: 15rem\"></th>\n            </tr>\n          </ng-template>\n          <ng-template pTemplate=\"body\" let-veiculo>\n            <tr class=\"p-selectable-row mb-8\">\n              <td>\n                <span class=\"p-column-title\">Tipo</span>\n                <p-dropdown #dropdown_filtro [options]=\"veiculosTipoOptions\" placeholder=\"Selecione\"\n                  styleClass=\"mb-2 md:mb-0 w-full\" [(ngModel)]=\"veiculo.tipo\" appendTo=\"body\"></p-dropdown>\n              </td>\n              <td>\n                <span class=\"p-column-title\">Placa</span>\n                <input id=\"placa\" placeholder=\"Placa\" type=\"text\" pInputText [(ngModel)]=\"veiculo.placa\">\n              </td>\n              <td>\n                <span class=\"p-column-title\">Fabricante</span>\n                <input id=\"fabricante\" placeholder=\"Fabricante\" type=\"text\" pInputText [(ngModel)]=\"veiculo.fabricante\">\n              </td>\n              <td>\n                <span class=\"p-column-title\">Modelo</span>\n                <input id=\"modelo\" placeholder=\"Modelo\" type=\"text\" pInputText [(ngModel)]=\"veiculo.modelo\">\n              </td>\n              <td>\n                <span class=\"p-column-title\">Cor</span>\n                <p-dropdown #dropdown_filtro [options]=\"veiculosCoresOptions\" placeholder=\"Selecione\"\n                  styleClass=\"mb-2 md:mb-0 w-full\" [(ngModel)]=\"veiculo.cor\" appendTo=\"body\"></p-dropdown>\n              </td>\n              <td>\n                <span class=\"p-column-title\">Ano</span>\n                <p-calendar [(ngModel)]=\"veiculo.ano_date\" view=\"year\" dateFormat=\"yy\" inputId=\"ano\"></p-calendar>\n              </td>\n\n              <td style=\"text-align: center\">\n                <button pButton type=\"button\" class=\"p-button-danger\" icon=\"pi pi-times\"\n                  (click)=\"delete(veiculo)\"></button>\n                <button pButton type=\"button\" class=\"p-button-success ml-1 mt-2 xl:ml-3 xl:mt-0\" icon=\"pi pi-check\"\n                  (click)=\"update(veiculo)\"></button>\n              </td>\n            </tr>\n          </ng-template>\n          <ng-template pTemplate=\"emptymessage\">\n            <tr>\n              <td colspan=\"8\">Nenhum veiculo cadastrado.</td>\n            </tr>\n          </ng-template>\n        </p-table>\n      </div>\n    </div>\n  </div>\n\n  <p-confirmDialog acceptLabel=\"Sim\" rejectLabel=\"Não\" [style]=\"{width: '50vw'}\" [baseZIndex]=\"10000\"\n    rejectButtonStyleClass=\"p-button-text\"></p-confirmDialog>\n\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar>\n    <ion-button expand=\"full\" color=\"danger\" (click)=\"fechar()\">Fechar</ion-button>\n  </ion-toolbar>\n</ion-footer>";

/***/ }),

/***/ 33712:
/*!*******************************************************************************************************!*\
  !*** ./src/app/shared/components/utils/dialogs/question-user/question-user.component.html?ngResource ***!
  \*******************************************************************************************************/
/***/ ((module) => {

module.exports = "<p-dialog *ngIf=\"selectedUser\" [(visible)]=\"showDialog\" appendTo=\"body\" [modal]=\"true\" [closable]=\"false\"\n  [breakpoints]=\"{'960px': '75vw', '640px': '100vw'}\" [style]=\"{width: '40vw'}\" [draggable]=\"false\">\n  <ng-template pTemplate=\"header\">\n    <div class=\"flex align-items-center \">\n      <span class=\"flex align-items-center justify-content-center bg-cyan-100 text-cyan-800 mr-3 border-circle\"\n        style=\"width:32px;height:32px\">\n        <i class=\"pi pi-info text-lg\"></i>\n      </span>\n      <span class=\"text-2xl text-900 text-center\">Usuário</span>\n    </div>\n  </ng-template>\n  <div class=\"grid\">\n    <div class=\"col-12 line-height-3 p-0 m-1 text-center\">\n      <div class=\"mt-1 text-xl text-800\">{{ selectedUser.nome }}</div>\n      <div class=\"mt-\">Status: {{ selectedUser.status }}</div>\n\n      <div class=\"mt-2\">CPF: {{ selectedUser.cpf | cpfMask }}</div>\n      <div class=\"\">Identidade: {{ selectedUser.identidade }}</div>\n\n      <div class=\"mt-2\">E-mail: {{ selectedUser.email }}</div>\n      <div class=\"\">Celular 1: {{ selectedUser.tel1 | phoneMask }}</div>\n      <div *ngIf=\"selectedUser.tel2\" class=\"\">Celular 2: {{ selectedUser.tel2 | phoneMask }}</div>\n\n      <div class=\"mt-3\">\n        <i class=\"pi pi-sitemap mr-1\"></i>\n        <span class=\"data-category\">Acesso: {{selectedUser.perfil?.nome || \"Sem\n          Perfil\"}}</span>\n      </div>\n    </div>\n    <!--\n    <div class=\"col-12 border-top-1 surface-border pt-3  mt-2\"></div>\n    <div class=\"col-12 lg:col-6 p-3 text-center\">\n      <div class=\"shadow-2 surface-card p-3\" style=\"border-radius: 12px\">\n        <div class=\"flex align-items-center justify-content-between\">\n          <div>\n            <span class=\"text-xl text-900 font-bold\">R$ {{ selectedselectedUser.custo_servico | currency:'BRL': ''\n              }}</span>\n            <p class=\"mt-2 mb-0 text-600 text-lg\">Custo tabelado do serviço</p>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-12 lg:col-6 p-3 text-center\">\n      <div class=\"shadow-2 surface-card p-3\" style=\"border-radius: 12px\">\n        <div class=\"flex align-items-center justify-content-between\">\n          <div>\n            <span class=\"text-xl text-900 font-bold\">R$ {{ selectedselectedUser.preco_servico | currency:'BRL': ''\n              }}</span>\n            <p class=\"mt-2 mb-0 text-600 text-lg\">Valor tabelado a ser cobrado</p>\n          </div>\n        </div>\n      </div>\n    </div>\n    -->\n  </div>\n  <ng-template pTemplate=\"footer\">\n    <button pButton pRipple icon=\"pi pi-check\" (click)=\"close()\" label=\"OK\"></button>\n  </ng-template>\n</p-dialog>";

/***/ }),

/***/ 32712:
/*!************************************************************!*\
  !*** ./node_modules/primeng/fesm2020/primeng-skeleton.mjs ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Skeleton": () => (/* binding */ Skeleton),
/* harmony export */   "SkeletonModule": () => (/* binding */ SkeletonModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 94666);




class Skeleton {
  constructor() {
    this.shape = 'rectangle';
    this.animation = 'wave';
    this.borderRadius = null;
    this.size = null;
    this.width = '100%';
    this.height = '1rem';
  }
  containerClass() {
    return {
      'p-skeleton p-component': true,
      'p-skeleton-circle': this.shape === 'circle',
      'p-skeleton-none': this.animation === 'none'
    };
  }
  containerStyle() {
    if (this.size) return {
      ...this.style,
      width: this.size,
      height: this.size,
      borderRadius: this.borderRadius
    };else return {
      ...this.style,
      width: this.width,
      height: this.height,
      borderRadius: this.borderRadius
    };
  }
}
Skeleton.ɵfac = function Skeleton_Factory(t) {
  return new (t || Skeleton)();
};
Skeleton.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: Skeleton,
  selectors: [["p-skeleton"]],
  hostAttrs: [1, "p-element"],
  inputs: {
    styleClass: "styleClass",
    style: "style",
    shape: "shape",
    animation: "animation",
    borderRadius: "borderRadius",
    size: "size",
    width: "width",
    height: "height"
  },
  decls: 1,
  vars: 4,
  consts: [[3, "ngClass", "ngStyle"]],
  template: function Skeleton_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.styleClass);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.containerClass())("ngStyle", ctx.containerStyle());
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgStyle],
  styles: [".p-skeleton{position:relative;overflow:hidden}.p-skeleton:after{content:\"\";animation:p-skeleton-animation 1.2s infinite;height:100%;left:0;position:absolute;right:0;top:0;transform:translate(-100%);z-index:1}.p-skeleton.p-skeleton-circle{border-radius:50%}.p-skeleton-none:after{animation:none}@keyframes p-skeleton-animation{0%{transform:translate(-100%)}to{transform:translate(100%)}}\n"],
  encapsulation: 2,
  changeDetection: 0
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Skeleton, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'p-skeleton',
      template: ` <div [ngClass]="containerClass()" [class]="styleClass" [ngStyle]="containerStyle()"></div> `,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      host: {
        class: 'p-element'
      },
      styles: [".p-skeleton{position:relative;overflow:hidden}.p-skeleton:after{content:\"\";animation:p-skeleton-animation 1.2s infinite;height:100%;left:0;position:absolute;right:0;top:0;transform:translate(-100%);z-index:1}.p-skeleton.p-skeleton-circle{border-radius:50%}.p-skeleton-none:after{animation:none}@keyframes p-skeleton-animation{0%{transform:translate(-100%)}to{transform:translate(100%)}}\n"]
    }]
  }], null, {
    styleClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    style: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    shape: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    animation: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    borderRadius: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    size: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    width: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    height: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();
class SkeletonModule {}
SkeletonModule.ɵfac = function SkeletonModule_Factory(t) {
  return new (t || SkeletonModule)();
};
SkeletonModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: SkeletonModule,
  declarations: [Skeleton],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule],
  exports: [Skeleton]
});
SkeletonModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SkeletonModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule],
      exports: [Skeleton],
      declarations: [Skeleton]
    }]
  }], null, null);
})();

/**
 * Generated bundle index. Do not edit.
 */



/***/ }),

/***/ 58476:
/*!*******************************************************************!*\
  !*** ./node_modules/primeng/fesm2020/primeng-virtualscroller.mjs ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VirtualScroller": () => (/* binding */ VirtualScroller),
/* harmony export */   "VirtualScrollerModule": () => (/* binding */ VirtualScrollerModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/api */ 14356);
/* harmony import */ var primeng_scroller__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/scroller */ 73705);








const _c0 = ["scroller"];
function VirtualScroller_div_1_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function VirtualScroller_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, VirtualScroller_div_1_ng_container_2_Template, 1, 0, "ng-container", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r0.headerTemplate);
  }
}
function VirtualScroller_ng_template_6_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
const _c1 = function (a0) {
  return {
    height: a0
  };
};
const _c2 = function (a0, a1) {
  return {
    $implicit: a0,
    options: a1
  };
};
function VirtualScroller_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, VirtualScroller_ng_template_6_ng_container_1_Template, 1, 0, "ng-container", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r6 = ctx.$implicit;
    const scrollerOptions_r7 = ctx.options;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c1, ctx_r3.itemSize + "px"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", item_r6 ? ctx_r3.itemTemplate : ctx_r3.loadingItemTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](5, _c2, item_r6, scrollerOptions_r7));
  }
}
function VirtualScroller_div_7_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function VirtualScroller_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, VirtualScroller_div_7_ng_container_2_Template, 1, 0, "ng-container", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r4.footerTemplate);
  }
}
const _c3 = [[["p-header"]], [["p-footer"]]];
const _c4 = ["p-header", "p-footer"];
class VirtualScroller {
  constructor(el, cd) {
    this.el = el;
    this.cd = cd;
    this.delay = 250;
    this.onLazyLoad = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  }
  ngAfterContentInit() {
    this.templates.forEach(item => {
      switch (item.getType()) {
        case 'item':
          this.itemTemplate = item.template;
          break;
        case 'loadingItem':
          this.loadingItemTemplate = item.template;
          break;
        case 'header':
          this.headerTemplate = item.template;
          break;
        case 'footer':
          this.footerTemplate = item.template;
          break;
        default:
          this.itemTemplate = item.template;
          break;
      }
    });
  }
  onLazyItemLoad(event) {
    if (this.virtualScrollTimeout) {
      clearTimeout(this.virtualScrollTimeout);
    }
    this.virtualScrollTimeout = setTimeout(() => {
      this.onLazyLoad.emit({
        ...event,
        rows: event.last - event.first,
        forceUpdate: () => this.cd.detectChanges()
      });
    }, this.delay);
  }
  getBlockableElement() {
    return this.el.nativeElement.children[0];
  }
  scrollToIndex(index, mode) {
    this.scroller?.scrollToIndex(index, mode);
  }
}
VirtualScroller.ɵfac = function VirtualScroller_Factory(t) {
  return new (t || VirtualScroller)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef));
};
VirtualScroller.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: VirtualScroller,
  selectors: [["p-virtualScroller"]],
  contentQueries: function VirtualScroller_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, primeng_api__WEBPACK_IMPORTED_MODULE_1__.Header, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, primeng_api__WEBPACK_IMPORTED_MODULE_1__.Footer, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, primeng_api__WEBPACK_IMPORTED_MODULE_1__.PrimeTemplate, 4);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.header = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.footer = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.templates = _t);
    }
  },
  viewQuery: function VirtualScroller_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.scroller = _t.first);
    }
  },
  hostAttrs: [1, "p-element"],
  inputs: {
    value: "value",
    itemSize: "itemSize",
    style: "style",
    styleClass: "styleClass",
    scrollHeight: "scrollHeight",
    lazy: "lazy",
    options: "options",
    delay: "delay"
  },
  outputs: {
    onLazyLoad: "onLazyLoad"
  },
  ngContentSelectors: _c4,
  decls: 8,
  vars: 14,
  consts: [[3, "ngClass", "ngStyle"], ["class", "p-virtualscroller-header", 4, "ngIf"], [1, "p-virtualscroller-content"], ["content", ""], ["styleClass", "p-virtualscroller-list", 3, "items", "itemSize", "lazy", "options", "onLazyLoad"], ["scroller", ""], ["pTemplate", "item"], ["class", "p-virtualscroller-footer", 4, "ngIf"], [1, "p-virtualscroller-header"], [4, "ngTemplateOutlet"], [1, "p-virtualscroller-item", 3, "ngStyle"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "p-virtualscroller-footer"]],
  template: function VirtualScroller_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, VirtualScroller_div_1_Template, 3, 1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2, 3)(4, "p-scroller", 4, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onLazyLoad", function VirtualScroller_Template_p_scroller_onLazyLoad_4_listener($event) {
        return ctx.onLazyItemLoad($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, VirtualScroller_ng_template_6_Template, 2, 8, "ng-template", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, VirtualScroller_div_7_Template, 3, 1, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.styleClass);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", "p-virtualscroller p-component")("ngStyle", ctx.style);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.header || ctx.headerTemplate);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](12, _c1, ctx.scrollHeight));
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx.value)("itemSize", ctx.itemSize)("lazy", ctx.lazy)("options", ctx.options);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.footer || ctx.footerTemplate);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgTemplateOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgStyle, primeng_api__WEBPACK_IMPORTED_MODULE_1__.PrimeTemplate, primeng_scroller__WEBPACK_IMPORTED_MODULE_3__.Scroller],
  encapsulation: 2
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VirtualScroller, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'p-virtualScroller',
      template: `
        <div [ngClass]="'p-virtualscroller p-component'" [ngStyle]="style" [class]="styleClass">
            <div class="p-virtualscroller-header" *ngIf="header || headerTemplate">
                <ng-content select="p-header"></ng-content>
                <ng-container *ngTemplateOutlet="headerTemplate"></ng-container>
            </div>
            <div #content class="p-virtualscroller-content">
                <p-scroller #scroller [items]="value" styleClass="p-virtualscroller-list" [style]="{ height: scrollHeight }" [itemSize]="itemSize" [lazy]="lazy" (onLazyLoad)="onLazyItemLoad($event)" [options]="options">
                    <ng-template pTemplate="item" let-item let-scrollerOptions="options">
                        <div [ngStyle]="{ height: itemSize + 'px' }" class="p-virtualscroller-item">
                            <ng-container *ngTemplateOutlet="item ? itemTemplate : loadingItemTemplate; context: { $implicit: item, options: scrollerOptions }"></ng-container>
                        </div>
                    </ng-template>
                </p-scroller>
            </div>
            <div class="p-virtualscroller-footer" *ngIf="footer || footerTemplate">
                <ng-content select="p-footer"></ng-content>
                <ng-container *ngTemplateOutlet="footerTemplate"></ng-container>
            </div>
        </div>
    `,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.Default,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
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
    value: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    itemSize: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    style: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    styleClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    scrollHeight: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    lazy: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    options: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    delay: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    header: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
      args: [primeng_api__WEBPACK_IMPORTED_MODULE_1__.Header]
    }],
    footer: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
      args: [primeng_api__WEBPACK_IMPORTED_MODULE_1__.Footer]
    }],
    templates: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren,
      args: [primeng_api__WEBPACK_IMPORTED_MODULE_1__.PrimeTemplate]
    }],
    scroller: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['scroller']
    }],
    onLazyLoad: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }]
  });
})();
class VirtualScrollerModule {}
VirtualScrollerModule.ɵfac = function VirtualScrollerModule_Factory(t) {
  return new (t || VirtualScrollerModule)();
};
VirtualScrollerModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: VirtualScrollerModule,
  declarations: [VirtualScroller],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, primeng_api__WEBPACK_IMPORTED_MODULE_1__.SharedModule, primeng_scroller__WEBPACK_IMPORTED_MODULE_3__.ScrollerModule],
  exports: [VirtualScroller, primeng_api__WEBPACK_IMPORTED_MODULE_1__.SharedModule, primeng_scroller__WEBPACK_IMPORTED_MODULE_3__.ScrollerModule]
});
VirtualScrollerModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, primeng_api__WEBPACK_IMPORTED_MODULE_1__.SharedModule, primeng_scroller__WEBPACK_IMPORTED_MODULE_3__.ScrollerModule, primeng_api__WEBPACK_IMPORTED_MODULE_1__.SharedModule, primeng_scroller__WEBPACK_IMPORTED_MODULE_3__.ScrollerModule]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VirtualScrollerModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, primeng_api__WEBPACK_IMPORTED_MODULE_1__.SharedModule, primeng_scroller__WEBPACK_IMPORTED_MODULE_3__.ScrollerModule],
      exports: [VirtualScroller, primeng_api__WEBPACK_IMPORTED_MODULE_1__.SharedModule, primeng_scroller__WEBPACK_IMPORTED_MODULE_3__.ScrollerModule],
      declarations: [VirtualScroller]
    }]
  }], null, null);
})();

/**
 * Generated bundle index. Do not edit.
 */



/***/ })

}]);
//# sourceMappingURL=src_app_pages_administracao-cliente_administracao-cliente_module_ts.js.map