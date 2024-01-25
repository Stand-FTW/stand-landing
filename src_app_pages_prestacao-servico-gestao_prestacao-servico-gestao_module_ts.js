"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_prestacao-servico-gestao_prestacao-servico-gestao_module_ts"],{

/***/ 80887:
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/prestacao-servico-gestao/prestacao-servico-gestao-routing.module.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrestacaoServicoGestaoPageRoutingModule": () => (/* binding */ PrestacaoServicoGestaoPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _prestacao_servico_gestao_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./prestacao-servico-gestao.page */ 16819);




const routes = [
    {
        path: '',
        component: _prestacao_servico_gestao_page__WEBPACK_IMPORTED_MODULE_0__.PrestacaoServicoGestaoPage
    }
];
let PrestacaoServicoGestaoPageRoutingModule = class PrestacaoServicoGestaoPageRoutingModule {
};
PrestacaoServicoGestaoPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PrestacaoServicoGestaoPageRoutingModule);



/***/ }),

/***/ 59260:
/*!***********************************************************************************!*\
  !*** ./src/app/pages/prestacao-servico-gestao/prestacao-servico-gestao.module.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrestacaoServicoGestaoPageModule": () => (/* binding */ PrestacaoServicoGestaoPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _prestacao_servico_gestao_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./prestacao-servico-gestao-routing.module */ 80887);
/* harmony import */ var _prestacao_servico_gestao_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./prestacao-servico-gestao.page */ 16819);
/* harmony import */ var _shared_directive_directives_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../shared/directive/directives.module */ 9406);
/* harmony import */ var _shared_components_prestacao_servicos_module_gestao_prestacao_servicos_gestao_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../shared/components/prestacao-servicos-module/gestao/prestacao-servicos-gestao.module */ 4511);









let PrestacaoServicoGestaoPageModule = class PrestacaoServicoGestaoPageModule {
};
PrestacaoServicoGestaoPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            _shared_components_prestacao_servicos_module_gestao_prestacao_servicos_gestao_module__WEBPACK_IMPORTED_MODULE_3__.PrestacaoServicosGestaoModule,
            _prestacao_servico_gestao_routing_module__WEBPACK_IMPORTED_MODULE_0__.PrestacaoServicoGestaoPageRoutingModule,
            _shared_directive_directives_module__WEBPACK_IMPORTED_MODULE_2__.DirectivesModule,
        ],
        declarations: [_prestacao_servico_gestao_page__WEBPACK_IMPORTED_MODULE_1__.PrestacaoServicoGestaoPage]
    })
], PrestacaoServicoGestaoPageModule);



/***/ }),

/***/ 16819:
/*!*********************************************************************************!*\
  !*** ./src/app/pages/prestacao-servico-gestao/prestacao-servico-gestao.page.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrestacaoServicoGestaoPage": () => (/* binding */ PrestacaoServicoGestaoPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _prestacao_servico_gestao_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./prestacao-servico-gestao.page.html?ngResource */ 72840);
/* harmony import */ var _prestacao_servico_gestao_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./prestacao-servico-gestao.page.scss?ngResource */ 89331);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);




let PrestacaoServicoGestaoPage = class PrestacaoServicoGestaoPage {
    constructor() { }
    ngOnInit() {
    }
};
PrestacaoServicoGestaoPage.ctorParameters = () => [];
PrestacaoServicoGestaoPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-prestacao-servico-gestao',
        template: _prestacao_servico_gestao_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_prestacao_servico_gestao_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], PrestacaoServicoGestaoPage);



/***/ }),

/***/ 11508:
/*!***********************************************************************************************************************************************!*\
  !*** ./src/app/shared/components/prestacao-servicos-module/gestao/prestacao-servicos-gestao-main/prestacao-servicos-gestao-main.component.ts ***!
  \***********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrestacaoServicosGestaoMainComponent": () => (/* binding */ PrestacaoServicosGestaoMainComponent)
/* harmony export */ });
/* harmony import */ var _home_m4estro_Documentos_Code_Neg_cios_StandIO_Conds_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _prestacao_servicos_gestao_main_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./prestacao-servicos-gestao-main.component.html?ngResource */ 55977);
/* harmony import */ var _prestacao_servicos_gestao_main_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./prestacao-servicos-gestao-main.component.scss?ngResource */ 23440);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/api */ 14356);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs */ 26078);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _services_auth_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../../services/auth/storage.service */ 54452);
/* harmony import */ var _constants_page_constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../../constants/page.constant */ 59136);
/* harmony import */ var _shared_constants_toast_constant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../shared/constants/toast.constant */ 98739);
/* harmony import */ var _services_toast_toast_message_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../../../services/toast/toast-message.service */ 12973);
/* harmony import */ var _shared_services_user_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../shared/services/user/user.service */ 34758);
/* harmony import */ var _services_condominio_condominio_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../services/condominio/condominio.service */ 32724);
/* harmony import */ var _constants_status_constant__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../../../../constants/status.constant */ 54692);
/* harmony import */ var _constants_tipo_user_constant__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./../../../../constants/tipo-user.constant */ 18109);
/* harmony import */ var _services_prestacao_servicos_prestacao_servicos_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./../../../../services/prestacao-servicos/prestacao-servicos.service */ 91475);
/* harmony import */ var src_app_shared_constants_agendamento_constant__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/constants/agendamento.constant */ 91391);
/* harmony import */ var _simplificado_servicos_update_servicos_update_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../simplificado/servicos-update/servicos-update.component */ 18612);




















let PrestacaoServicosGestaoMainComponent = class PrestacaoServicosGestaoMainComponent {
  constructor(userService, modal, toastService, condominioService, router, prestacaoServicosService, storageService, confirmationService) {
    this.userService = userService;
    this.modal = modal;
    this.toastService = toastService;
    this.condominioService = condominioService;
    this.router = router;
    this.prestacaoServicosService = prestacaoServicosService;
    this.storageService = storageService;
    this.confirmationService = confirmationService;
    this.searchedPrestacaoServico = '';
    this.currentPage = 1;
    this.searchedColaborador = '';
    this.selectedColaborador = '';
    this.searchedcondominio = '';
    this.selectedcondominio = '';
    this.shouldDisableColaborador = false;
    this.sortOptions = [];
    this.isLoaded = false;
    this.showEnderecoDialog = false;
    this.showServicoDialog = false;
    this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_14__.Subscription();
  }
  ngOnInit() {
    const {
      id: user_id,
      condominio
    } = this.storageService.getCompleteLocalUser();
    this.selectedColaborador = user_id;
    this.selectedcondominio = condominio.id;
    this.sortOptions = [..._constants_status_constant__WEBPACK_IMPORTED_MODULE_9__.StatusServico];
    this.loadcondominios();
    this.loadFuncionarios();
    this.loadPrestacaoServico();
  }
  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
  changeFiltro({
    value
  }) {
    this.selectedStatusServico = value;
    this.loadPrestacaoServico(1);
  }
  clearFilter() {
    this.loadPrestacaoServico(1);
  }
  clearAllFilters(event, dropdown_condominios, dropdown_filtro) {
    this.searchedPrestacaoServico = undefined;
    this.selectedcondominio = undefined;
    this.clearcondominioFilter(null);
    dropdown_condominios.writeValue(null);
    dropdown_filtro.writeValue(null);
    this.loadFuncionarios(1);
  }
  createNewPrestacao() {
    this.router.navigateByUrl('prestacao-servico-simples');
  }
  setUserImage(user) {
    return user.avatar_url || "assets/imgs/outros/default-user.jpg";
  }
  //#region condominio
  changecondominio({
    value
  }) {
    if (this.selectedcondominio) {
      this.shouldDisableColaborador = false;
      this.loadFuncionarios(1);
      this.loadPrestacaoServico(1);
    }
  }
  clearcondominioFilter(event) {
    this.shouldDisableColaborador = true;
    this.selectedColaborador = undefined;
    this.selectedStatusServico = undefined;
  }
  loadcondominios(page = 1, dropdown) {
    const sub = this.condominioService.list({
      searchedCondominio: this.searchedcondominio
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
  paginarcondominio(event) {
    this.loadcondominios();
  }
  oncondominioFilter(event) {
    const filter = event.filter;
    this.searchedcondominio = filter;
  }
  blurcondominio(event, dropdown) {
    this.searchedcondominio = undefined;
    dropdown.filterValue = undefined;
  }
  //#endregion
  //#region COLABORADOR
  changeColaborador({
    value
  }) {
    this.loadFuncionarios(1);
  }
  loadFuncionarios(page = 1) {
    const sub = this.userService.listUsers({
      condominio_id: this.selectedcondominio,
      searchedUser: this.searchedColaborador,
      tipo_usuario: _constants_tipo_user_constant__WEBPACK_IMPORTED_MODULE_10__.TipoUsuarioEnum.FUNCIONARIO
    }, {
      order: _constants_page_constant__WEBPACK_IMPORTED_MODULE_4__.PageOrder.DESC,
      page,
      take: 10
    }).subscribe(response => {
      this.colaboradores = response;
    });
    this.subscriptions.add(sub);
  }
  paginarColaborador(event) {
    this.loadFuncionarios();
  }
  onColaboradorFilter(event) {
    const filter = event.filter;
    this.searchedColaborador = filter;
  }
  blurColaborador(event, dropdown) {
    this.searchedColaborador = undefined;
    dropdown.filterValue = undefined;
  }
  //#endregion
  //#region PRESTACAO-SEVICO
  searchPrestacaoServico() {
    this.loadPrestacaoServico(1);
  }
  paginarPrestacaoServico(event) {
    const {
      first,
      rows
    } = event;
    const page = Number(Number(first) / Number(rows) + 1);
    if (page != this.currentPage) {
      this.currentPage = page;
      this.loadPrestacaoServico(page);
    }
  }
  loadPrestacaoServico(page = 1) {
    const sub = this.prestacaoServicosService.list({
      condominio_id: this.selectedcondominio,
      colaborador_id: this.selectedColaborador,
      searchedPrestacaoServico: this.searchedPrestacaoServico,
      status_servico: this.selectedStatusServico
    }, {
      order: _constants_page_constant__WEBPACK_IMPORTED_MODULE_4__.PageOrder.DESC,
      page,
      take: 10
    }).subscribe(response => {
      this.prestacoesServico = response;
    });
    this.subscriptions.add(sub);
  }
  //#endregion
  //#region OPERACOES
  openEndereco(prestacaoServico) {
    if (!prestacaoServico && this.selectedPrestacaoServico) {
      prestacaoServico = this.selectedPrestacaoServico;
    }
    if (!prestacaoServico && !this.selectedPrestacaoServico) {
      this.toastService.presentToast({
        detalhe: `Nenhuma prestação selecionada`,
        titulo: `Atenção`,
        gravidade: _shared_constants_toast_constant__WEBPACK_IMPORTED_MODULE_5__.ToastPrimeSeverityEnum.ATENCAO,
        duracao: _shared_constants_toast_constant__WEBPACK_IMPORTED_MODULE_5__.ToastEnum.shortDuration
      });
      return;
    }
    const {
      local
    } = prestacaoServico;
    if (local == src_app_shared_constants_agendamento_constant__WEBPACK_IMPORTED_MODULE_12__.LocalAgendamento.LOCAL || local == src_app_shared_constants_agendamento_constant__WEBPACK_IMPORTED_MODULE_12__.LocalAgendamento.EXTERNO) {
      const endereco = prestacaoServico.agendamento_servico?.endereco || prestacaoServico.condominio.endereco;
      this.selectedEndereco = endereco;
      this.showEnderecoDialog = true;
      return;
    }
    this.toastService.presentToast({
      detalhe: `Atendimento remoto`,
      titulo: `Remoto`,
      gravidade: _shared_constants_toast_constant__WEBPACK_IMPORTED_MODULE_5__.ToastPrimeSeverityEnum.INFORMACAO,
      duracao: _shared_constants_toast_constant__WEBPACK_IMPORTED_MODULE_5__.ToastEnum.shortDuration
    });
  }
  openDetailPrestacaoServico(prestacaoServico) {
    if (this.selectedPrestacaoServico) {
      this.showServicoDialog = true;
      return;
    }
    this.selectedPrestacaoServico = prestacaoServico;
    this.showServicoDialog = true;
  }
  startPrestacaoServico(prestacaoServico) {
    const {
      id,
      cliente
    } = prestacaoServico;
    const sub = this.prestacaoServicosService.initiateById(id).subscribe(response => {
      this.toastService.presentToast({
        titulo: `Iniciado`,
        detalhe: `Serviço do cliente '${cliente.nome}' iniciado`,
        duracao: _shared_constants_toast_constant__WEBPACK_IMPORTED_MODULE_5__.ToastEnum.mediumDuration,
        gravidade: _shared_constants_toast_constant__WEBPACK_IMPORTED_MODULE_5__.ToastPrimeSeverityEnum.INFORMACAO
      });
      this.loadPrestacaoServico(1);
    });
    this.subscriptions.add(sub);
  }
  finalizePrestacaoServico(prestacaoServico) {
    const {
      id,
      cliente
    } = prestacaoServico;
    const sub = this.prestacaoServicosService.finalizeById(id).subscribe(response => {
      this.toastService.presentToast({
        titulo: `Finalizado`,
        detalhe: `Serviço do cliente '${cliente.nome}' finalizado`,
        duracao: _shared_constants_toast_constant__WEBPACK_IMPORTED_MODULE_5__.ToastEnum.mediumDuration,
        gravidade: _shared_constants_toast_constant__WEBPACK_IMPORTED_MODULE_5__.ToastPrimeSeverityEnum.SUCESSO
      });
      this.loadPrestacaoServico(1);
    });
    this.subscriptions.add(sub);
  }
  cancelPrestacaoServico(prestacaoServico) {
    const {
      id,
      cliente
    } = prestacaoServico;
    this.confirmationService.confirm({
      message: `Deseja mesmo cancelar a prestação de serviço ${id}?`,
      header: `Prestação do cliente '${cliente.nome}'`,
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        const sub = this.prestacaoServicosService.cancelById(id).subscribe(response => {
          this.toastService.presentToast({
            titulo: `Cancelado`,
            detalhe: `Serviço do cliente '${cliente.nome}' cancelado`,
            duracao: _shared_constants_toast_constant__WEBPACK_IMPORTED_MODULE_5__.ToastEnum.mediumDuration,
            gravidade: _shared_constants_toast_constant__WEBPACK_IMPORTED_MODULE_5__.ToastPrimeSeverityEnum.INFORMACAO
          });
          this.loadPrestacaoServico(1);
        });
        this.subscriptions.add(sub);
      },
      reject: type => {
        this.toastService.clearToast();
      }
    });
  }
  updatePrestacaoServico(prestacaoServico) {
    this.showModal(_simplificado_servicos_update_servicos_update_component__WEBPACK_IMPORTED_MODULE_13__.ServicosUpdateComponent, {
      prestacaoServico
    });
  }
  showStartButton(prestacaoServico) {
    const {
      status_servico
    } = prestacaoServico;
    if (status_servico == _constants_status_constant__WEBPACK_IMPORTED_MODULE_9__.StatusServicoEnum.AGENDADO) {
      return true;
    }
    return false;
  }
  showFinalizeButton(prestacaoServico) {
    const {
      status_servico
    } = prestacaoServico;
    if (status_servico == _constants_status_constant__WEBPACK_IMPORTED_MODULE_9__.StatusServicoEnum.INICIADO) {
      return true;
    }
    return false;
  }
  showCancelButton(prestacaoServico) {
    const {
      status_servico
    } = prestacaoServico;
    if (status_servico == _constants_status_constant__WEBPACK_IMPORTED_MODULE_9__.StatusServicoEnum.AGENDADO || status_servico == _constants_status_constant__WEBPACK_IMPORTED_MODULE_9__.StatusServicoEnum.INICIADO) {
      return true;
    }
    return false;
  }
  //#endregion
  showModal(component, componentProps) {
    var _this = this;
    return (0,_home_m4estro_Documentos_Code_Neg_cios_StandIO_Conds_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const modal = yield _this.modal.create({
        component,
        backdropDismiss: false,
        cssClass: 'modal-size-80',
        componentProps
      });
      modal.onDidDismiss().then(data => {
        const {
          data: hasUpdate
        } = data;
        _this.isLoaded = false;
        if (hasUpdate) {
          _this.loadPrestacaoServico();
        }
      });
      return yield modal.present();
    })();
  }
};
PrestacaoServicosGestaoMainComponent.ctorParameters = () => [{
  type: _shared_services_user_user_service__WEBPACK_IMPORTED_MODULE_7__.UserService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.ModalController
}, {
  type: _services_toast_toast_message_service__WEBPACK_IMPORTED_MODULE_6__.ToastMessageService
}, {
  type: _services_condominio_condominio_service__WEBPACK_IMPORTED_MODULE_8__.CondominioService
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_16__.Router
}, {
  type: _services_prestacao_servicos_prestacao_servicos_service__WEBPACK_IMPORTED_MODULE_11__.PrestacaoServicosService
}, {
  type: _services_auth_storage_service__WEBPACK_IMPORTED_MODULE_3__.StorageService
}, {
  type: primeng_api__WEBPACK_IMPORTED_MODULE_17__.ConfirmationService
}];
PrestacaoServicosGestaoMainComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_18__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_19__.Component)({
  selector: 'app-prestacao-servicos-gestao-main',
  template: _prestacao_servicos_gestao_main_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_prestacao_servicos_gestao_main_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], PrestacaoServicosGestaoMainComponent);


/***/ }),

/***/ 4511:
/*!********************************************************************************************************!*\
  !*** ./src/app/shared/components/prestacao-servicos-module/gestao/prestacao-servicos-gestao.module.ts ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrestacaoServicosGestaoModule": () => (/* binding */ PrestacaoServicosGestaoModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/button */ 76328);
/* harmony import */ var primeng_inputnumber__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/inputnumber */ 87990);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/ripple */ 84538);
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/dialog */ 1837);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/dropdown */ 38992);
/* harmony import */ var primeng_divider__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/divider */ 1154);
/* harmony import */ var primeng_styleclass__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/styleclass */ 82041);
/* harmony import */ var primeng_dataview__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/dataview */ 81233);
/* harmony import */ var primeng_panel__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! primeng/panel */ 24266);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! primeng/inputtext */ 69906);
/* harmony import */ var primeng_paginator__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! primeng/paginator */ 42722);
/* harmony import */ var primeng_menu__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/menu */ 60625);
/* harmony import */ var primeng_message__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! primeng/message */ 73589);
/* harmony import */ var primeng_radiobutton__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! primeng/radiobutton */ 69902);
/* harmony import */ var primeng_skeleton__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/skeleton */ 32712);
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! primeng/calendar */ 32547);
/* harmony import */ var primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! primeng/confirmdialog */ 60097);
/* harmony import */ var _prestacao_servicos_gestao_main_prestacao_servicos_gestao_main_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./prestacao-servicos-gestao-main/prestacao-servicos-gestao-main.component */ 11508);
/* harmony import */ var _utils_dialogs_see_endereco_see_endereco_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/dialogs/see-endereco/see-endereco.module */ 59608);
/* harmony import */ var _utils_dialogs_see_agendamento_see_agendamento_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/dialogs/see-agendamento/see-agendamento.module */ 75695);

























let PrestacaoServicosGestaoModule = class PrestacaoServicosGestaoModule {
};
PrestacaoServicosGestaoModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        declarations: [_prestacao_servicos_gestao_main_prestacao_servicos_gestao_main_component__WEBPACK_IMPORTED_MODULE_0__.PrestacaoServicosGestaoMainComponent],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            primeng_button__WEBPACK_IMPORTED_MODULE_8__.ButtonModule,
            primeng_inputnumber__WEBPACK_IMPORTED_MODULE_9__.InputNumberModule,
            primeng_ripple__WEBPACK_IMPORTED_MODULE_10__.RippleModule,
            primeng_dialog__WEBPACK_IMPORTED_MODULE_11__.DialogModule,
            primeng_dropdown__WEBPACK_IMPORTED_MODULE_12__.DropdownModule,
            primeng_divider__WEBPACK_IMPORTED_MODULE_13__.DividerModule,
            primeng_styleclass__WEBPACK_IMPORTED_MODULE_14__.StyleClassModule,
            primeng_skeleton__WEBPACK_IMPORTED_MODULE_15__.SkeletonModule,
            primeng_menu__WEBPACK_IMPORTED_MODULE_16__.MenuModule,
            primeng_dataview__WEBPACK_IMPORTED_MODULE_17__.DataViewModule,
            primeng_calendar__WEBPACK_IMPORTED_MODULE_18__.CalendarModule,
            primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_19__.ConfirmDialogModule,
            primeng_panel__WEBPACK_IMPORTED_MODULE_20__.PanelModule,
            primeng_inputtext__WEBPACK_IMPORTED_MODULE_21__.InputTextModule,
            primeng_paginator__WEBPACK_IMPORTED_MODULE_22__.PaginatorModule,
            primeng_message__WEBPACK_IMPORTED_MODULE_23__.MessageModule,
            primeng_radiobutton__WEBPACK_IMPORTED_MODULE_24__.RadioButtonModule,
            _utils_dialogs_see_endereco_see_endereco_module__WEBPACK_IMPORTED_MODULE_1__.SeeEnderecoModule,
            _utils_dialogs_see_agendamento_see_agendamento_module__WEBPACK_IMPORTED_MODULE_2__.SeeAgendamentoModule,
        ],
        exports: [_prestacao_servicos_gestao_main_prestacao_servicos_gestao_main_component__WEBPACK_IMPORTED_MODULE_0__.PrestacaoServicosGestaoMainComponent],
    })
], PrestacaoServicosGestaoModule);



/***/ }),

/***/ 60084:
/*!**********************************************************************************************!*\
  !*** ./src/app/shared/components/utils/dialogs/see-agendamento/see-agendamento.component.ts ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SeeAgendamentoComponent": () => (/* binding */ SeeAgendamentoComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _see_agendamento_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./see-agendamento.component.html?ngResource */ 97755);
/* harmony import */ var _see_agendamento_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./see-agendamento.component.scss?ngResource */ 17989);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _constants_status_constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../../constants/status.constant */ 54692);





let SeeAgendamentoComponent = class SeeAgendamentoComponent {
    constructor() {
        this.showDialog = false;
        this.title = 'Prestação de Serviço';
        this.closeEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
        this.seeEnderecoEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
        this.updateAgendamentoEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    }
    ngOnInit() {
    }
    close() {
        this.showDialog = false;
        this.closeEvent.emit(this.showDialog);
    }
    dialogSeeEndereco() {
        this.seeEnderecoEvent.emit(true);
        //this.close();
    }
    editPrestacao() {
        this.updateAgendamentoEvent.emit(this.selectedPrestacaoServico);
        this.close();
    }
    showUpdateButton() {
        if (!this.selectedPrestacaoServico) {
            return false;
        }
        const { status_servico } = this.selectedPrestacaoServico;
        if (status_servico == _constants_status_constant__WEBPACK_IMPORTED_MODULE_2__.StatusServicoEnum.FINALIZADO || status_servico == _constants_status_constant__WEBPACK_IMPORTED_MODULE_2__.StatusServicoEnum.CANCELADO) {
            return false;
        }
        return true;
    }
};
SeeAgendamentoComponent.ctorParameters = () => [];
SeeAgendamentoComponent.propDecorators = {
    showDialog: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
    selectedPrestacaoServico: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
    title: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
    closeEvent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output }],
    seeEnderecoEvent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output }],
    updateAgendamentoEvent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output }]
};
SeeAgendamentoComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-see-agendamento',
        template: _see_agendamento_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_see_agendamento_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], SeeAgendamentoComponent);



/***/ }),

/***/ 75695:
/*!*******************************************************************************************!*\
  !*** ./src/app/shared/components/utils/dialogs/see-agendamento/see-agendamento.module.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SeeAgendamentoModule": () => (/* binding */ SeeAgendamentoModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 19200);
/* harmony import */ var primeng_dataview__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/dataview */ 81233);
/* harmony import */ var primeng_panel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/panel */ 24266);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/inputtext */ 69906);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/button */ 76328);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/dropdown */ 38992);
/* harmony import */ var primeng_tabview__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/tabview */ 79504);
/* harmony import */ var primeng_message__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! primeng/message */ 73589);
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/dialog */ 1837);
/* harmony import */ var primeng_password__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! primeng/password */ 68848);
/* harmony import */ var primeng_inputmask__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! primeng/inputmask */ 51227);
/* harmony import */ var primeng_inputswitch__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! primeng/inputswitch */ 13585);
/* harmony import */ var primeng_inputnumber__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! primeng/inputnumber */ 87990);
/* harmony import */ var primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! primeng/confirmdialog */ 60097);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/ripple */ 84538);
/* harmony import */ var primeng_chip__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/chip */ 80287);
/* harmony import */ var primeng_tag__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/tag */ 33042);
/* harmony import */ var _see_agendamento_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./see-agendamento.component */ 60084);
/* harmony import */ var _directive_directives_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../../directive/directives.module */ 9406);
























let SeeAgendamentoModule = class SeeAgendamentoModule {
};
SeeAgendamentoModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        declarations: [_see_agendamento_component__WEBPACK_IMPORTED_MODULE_0__.SeeAgendamentoComponent],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            primeng_dataview__WEBPACK_IMPORTED_MODULE_7__.DataViewModule,
            primeng_panel__WEBPACK_IMPORTED_MODULE_8__.PanelModule,
            primeng_dropdown__WEBPACK_IMPORTED_MODULE_9__.DropdownModule,
            primeng_tabview__WEBPACK_IMPORTED_MODULE_10__.TabViewModule,
            primeng_inputtext__WEBPACK_IMPORTED_MODULE_11__.InputTextModule,
            primeng_dialog__WEBPACK_IMPORTED_MODULE_12__.DialogModule,
            primeng_button__WEBPACK_IMPORTED_MODULE_13__.ButtonModule,
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_14__.FontAwesomeModule,
            primeng_ripple__WEBPACK_IMPORTED_MODULE_15__.RippleModule,
            primeng_chip__WEBPACK_IMPORTED_MODULE_16__.ChipModule,
            primeng_tag__WEBPACK_IMPORTED_MODULE_17__.TagModule,
            primeng_message__WEBPACK_IMPORTED_MODULE_18__.MessageModule,
            primeng_password__WEBPACK_IMPORTED_MODULE_19__.PasswordModule,
            primeng_inputmask__WEBPACK_IMPORTED_MODULE_20__.InputMaskModule,
            primeng_inputswitch__WEBPACK_IMPORTED_MODULE_21__.InputSwitchModule,
            primeng_inputnumber__WEBPACK_IMPORTED_MODULE_22__.InputNumberModule,
            primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_23__.ConfirmDialogModule,
            _directive_directives_module__WEBPACK_IMPORTED_MODULE_1__.DirectivesModule,
        ],
        exports: [_see_agendamento_component__WEBPACK_IMPORTED_MODULE_0__.SeeAgendamentoComponent],
    })
], SeeAgendamentoModule);



/***/ }),

/***/ 40996:
/*!****************************************************************************************!*\
  !*** ./src/app/shared/components/utils/dialogs/see-endereco/see-endereco.component.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SeeEnderecoComponent": () => (/* binding */ SeeEnderecoComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _see_endereco_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./see-endereco.component.html?ngResource */ 7738);
/* harmony import */ var _see_endereco_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./see-endereco.component.scss?ngResource */ 46236);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _utils_ExternalLink__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../../utils/ExternalLink */ 54222);





let SeeEnderecoComponent = class SeeEnderecoComponent {
    constructor() {
        this.showDialog = false;
        this.title = 'Endereço';
        this.closeEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
        this.returnEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    }
    ngOnInit() { }
    dialogOpenMap() {
        const { bairro, cep, cidade, complemento, endereco, estado, numero } = this.endereco;
        //Exemplo: https://www.google.com.br/maps/place/R.+do+Amparo,+145+-+Cascadura,+Rio+de+Janeiro+-+RJ,+21381-340
        const url = `https://www.google.com.br/maps/place/${endereco},+${numero},+-+${bairro},+${cidade}+-+${estado},+${cep}`;
        _utils_ExternalLink__WEBPACK_IMPORTED_MODULE_2__.ExternalRedirect.externalLinkHandle(url);
        this.close();
    }
    close() {
        this.showDialog = false;
        this.closeEvent.emit(this.showDialog);
    }
    dialogVoltar() {
        this.returnEvent.emit(true);
        // this.close();
    }
};
SeeEnderecoComponent.ctorParameters = () => [];
SeeEnderecoComponent.propDecorators = {
    showDialog: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
    endereco: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
    title: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
    closeEvent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output }],
    returnEvent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output }]
};
SeeEnderecoComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-see-endereco',
        template: _see_endereco_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_see_endereco_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], SeeEnderecoComponent);



/***/ }),

/***/ 59608:
/*!*************************************************************************************!*\
  !*** ./src/app/shared/components/utils/dialogs/see-endereco/see-endereco.module.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SeeEnderecoModule": () => (/* binding */ SeeEnderecoModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/dialog */ 1837);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/button */ 76328);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/ripple */ 84538);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/inputtext */ 69906);
/* harmony import */ var _see_endereco_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./see-endereco.component */ 40996);









let SeeEnderecoModule = class SeeEnderecoModule {
};
SeeEnderecoModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        declarations: [_see_endereco_component__WEBPACK_IMPORTED_MODULE_0__.SeeEnderecoComponent],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonicModule,
            primeng_dialog__WEBPACK_IMPORTED_MODULE_5__.DialogModule,
            primeng_button__WEBPACK_IMPORTED_MODULE_6__.ButtonModule,
            primeng_ripple__WEBPACK_IMPORTED_MODULE_7__.RippleModule,
            primeng_inputtext__WEBPACK_IMPORTED_MODULE_8__.InputTextModule,
        ],
        exports: [_see_endereco_component__WEBPACK_IMPORTED_MODULE_0__.SeeEnderecoComponent],
    })
], SeeEnderecoModule);



/***/ }),

/***/ 89331:
/*!**********************************************************************************************!*\
  !*** ./src/app/pages/prestacao-servico-gestao/prestacao-servico-gestao.page.scss?ngResource ***!
  \**********************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcmVzdGFjYW8tc2Vydmljby1nZXN0YW8ucGFnZS5zY3NzIn0= */";

/***/ }),

/***/ 23440:
/*!************************************************************************************************************************************************************!*\
  !*** ./src/app/shared/components/prestacao-servicos-module/gestao/prestacao-servicos-gestao-main/prestacao-servicos-gestao-main.component.scss?ngResource ***!
  \************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcmVzdGFjYW8tc2Vydmljb3MtZ2VzdGFvLW1haW4uY29tcG9uZW50LnNjc3MifQ== */";

/***/ }),

/***/ 17989:
/*!***********************************************************************************************************!*\
  !*** ./src/app/shared/components/utils/dialogs/see-agendamento/see-agendamento.component.scss?ngResource ***!
  \***********************************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZWUtYWdlbmRhbWVudG8uY29tcG9uZW50LnNjc3MifQ== */";

/***/ }),

/***/ 46236:
/*!*****************************************************************************************************!*\
  !*** ./src/app/shared/components/utils/dialogs/see-endereco/see-endereco.component.scss?ngResource ***!
  \*****************************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZWUtZW5kZXJlY28uY29tcG9uZW50LnNjc3MifQ== */";

/***/ }),

/***/ 72840:
/*!**********************************************************************************************!*\
  !*** ./src/app/pages/prestacao-servico-gestao/prestacao-servico-gestao.page.html?ngResource ***!
  \**********************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Gestão <span class=\"text-xs\">(Serviços)</span></ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content appScrollTheme>\n  <br>\n  <div style=\"max-width: 95%; max-height: 95%; margin: auto\">\n    <app-prestacao-servicos-gestao-main></app-prestacao-servicos-gestao-main>\n  </div>\n</ion-content>\n";

/***/ }),

/***/ 55977:
/*!************************************************************************************************************************************************************!*\
  !*** ./src/app/shared/components/prestacao-servicos-module/gestao/prestacao-servicos-gestao-main/prestacao-servicos-gestao-main.component.html?ngResource ***!
  \************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "\n<div class=\"card main-view \">\n  <p-dataView *ngIf=\"prestacoesServico && colaboradores && lojas\"\n    emptyMessage=\"Nada encontrado, experimente trocar os filtros\" class=\"data-container\" #dv [lazy]=\"true\"\n    [value]=\"prestacoesServico.data\" [paginator]=\"true\" [rows]=\"prestacoesServico.meta.take\"\n    [totalRecords]=\"prestacoesServico.meta.itemCount\" [pageLinks]=\"prestacoesServico.meta.pageCount\"\n    (onLazyLoad)=\"paginarPrestacaoServico($event)\" filterBy=\"nome\" layout=\"list\">\n    <ng-template pTemplate=\"header\">\n      <div class=\"flex flex-column md:flex-row md:justify-content-between mb-2\">\n        <p-dropdown #dropdown_lojas [options]=\"lojas.data\" styleClass=\"mb-2 md:mb-0\" (onClear)=\"clearLojaFilter($event)\"\n          (onChange)=\"changeLoja($event)\" [showClear]=\"true\" [filter]=\"true\" placeholder=\"Selecione uma Loja\"\n          [virtualScroll]=\"true\" [virtualScrollItemSize]=\"38\" [lazy]=\"true\"\n          [virtualScrollOptions]=\"{ showLoader: true, loading: loading, delay: 250 }\"\n          (onLazyLoad)=\"paginarLojas($event)\" (onFilter)=\"onLojaFilter($event)\"\n          (onFocus)=\"blurLojas($event, drop_client)\" optionValue=\"id\" optionLabel=\"nome\" [(ngModel)]=\"selectedLoja\">\n          <ng-template pTemplate=\"loader\" let-options=\"options\">\n            <div class=\"flex align-items-center py-2 px-3\" style=\"height: 38px\">\n              <p-skeleton [width]=\"options.even ? '60%' : '50%'\" height=\"1rem\"></p-skeleton>\n            </div>\n          </ng-template>\n        </p-dropdown>\n\n        <p-dropdown #drop_colaborador [options]=\"colaboradores.data\" styleClass=\"mb-2 md:mb-0\"\n          (onClear)=\"clearFilter($event)\" (onChange)=\"loadPrestacaoServico(1)\" [showClear]=\"true\" [filter]=\"true\"\n          placeholder=\"Selecione o colaborador que fará o serviço\" [virtualScroll]=\"true\" [virtualScrollItemSize]=\"38\"\n          [lazy]=\"true\" [virtualScrollOptions]=\"{ showLoader: true, loading: loading, delay: 250 }\"\n          (onLazyLoad)=\"paginarColaborador($event)\" (onFilter)=\"onColaboradorFilter($event)\"\n          (onFocus)=\"blurColaborador($event, drop_colaborador)\" optionValue=\"id\" optionLabel=\"nome\"\n          [(ngModel)]=\"selectedColaborador\" [disabled]=\"shouldDisableColaborador\">\n          <ng-template pTemplate=\"loader\" let-options=\"options\">\n            <div class=\"flex align-items-center py-2 px-3\" style=\"height: 38px\">\n              <p-skeleton [width]=\"options.even ? '60%' : '50%'\" height=\"1rem\"></p-skeleton>\n            </div>\n          </ng-template>\n        </p-dropdown>\n\n        <p-dropdown #dropdown_filtro [options]=\"sortOptions\" placeholder=\"Status\" (onChange)=\"changeFiltro($event)\"\n          (onClear)=\"clearFilter($event)\" [showClear]=\"true\" styleClass=\"mb-2 md:mb-0\"\n          [disabled]=\"shouldDisableColaborador\"></p-dropdown>\n      </div>\n\n      <div class=\"flex flex-column md:flex-row md:justify-content-end\">\n        <button pButton type=\"button\" class=\"p-button-outlined p-button-danger sm:ml-2 mt-2\" icon=\"pi pi-times\"\n          label=\"Limpar filtros\" (click)=\"clearAllFilters($event, dropdown_lojas, dropdown_filtro)\">\n        </button>\n      </div>\n\n      <div class=\"flex flex-column md:flex-row md:justify-content-end\">\n        <p-button class=\"sm:ml-2 mt-2\" icon=\"pi pi-plus\" label=\"Nova prestação\" (click)=\"createNewPrestacao()\">\n        </p-button>\n      </div>\n\n      <div class=\"flex  justify-content-center\">\n        <span class=\"p-input-icon-right mb-2 md:mb-0 mt-2\">\n          <i class=\"pi pi-search cursor-pointer text-primary\" (click)=\"searchPrestacaoServico()\"></i>\n          <input type=\"search\" pInputText [(ngModel)]=\"searchedPrestacaoServico\" [ngModelOptions]=\"{standalone: true}\"\n            placeholder=\"ID ou código da prestação\" (keyup.enter)=\"searchPrestacaoServico()\">\n        </span>\n      </div>\n    </ng-template>\n\n    <ng-template let-prestacaoServico pTemplate=\"listItem\">\n      <div #templateGrid class=\"col-12 \">\n        <div class=\"data-list-item\">\n          <div class=\"crop mb-2 md:mb-0 \">\n            <img class=\"border-circle border-2 border-primary\" [src]=\"setUserImage(prestacaoServico.colaborador)\"\n              [alt]=\"prestacaoServico.colaborador.nome\" />\n          </div>\n          <div class=\"data-list-detail\">\n            <div class=\"data-name\">{{ prestacaoServico.id }}</div>\n            <div class=\"data-description mt-2\">Status: {{ prestacaoServico.status_servico }}</div>\n            <div (click)=\"openEndereco(prestacaoServico)\" class=\"data-description mt-1 cursor-pointer\">Local: {{\n              prestacaoServico.local }}\n              <i class=\"pi pi-external-link data-category-icon mb-1 ml-1 text-sm text-primary \"></i>\n            </div>\n            <div class=\"data-description mt-2\">Prestador: {{ prestacaoServico.colaborador?.nome }}</div>\n            <div class=\"data-description mt-1\">Cliente: {{ prestacaoServico.cliente?.nome || \"Cliente não identificado\"\n              }}</div>\n            <div *ngIf=\"prestacaoServico.agendamento_servico && prestacaoServico.agendamento_servico.compromisso \"\n              class=\"mt-3\">\n              <i class=\"pi pi-play data-category-icon text-primary\"></i>\n              <span class=\"data-category\">Início previsto:\n                {{prestacaoServico.agendamento_servico.compromisso.data_inicio_completa | date: 'dd/MM/yyyy -\n                HH:mm:ss' }}h</span>\n              <br><br>\n              <i class=\"pi pi-stopwatch data-category-icon text-primary\"></i>\n              <span class=\"data-category\">Finalização prevista:\n                {{prestacaoServico.agendamento_servico.compromisso.data_fim_completa | date: 'dd/MM/yyyy -\n                HH:mm:ss' }}h</span>\n            </div>\n          </div>\n          <div class=\"data-list-action\">\n            <button pButton type=\"button\" class=\"p-button-info\" icon=\"pi pi-file-edit\" label=\"Detalhar atendimento\"\n              (click)=\"openDetailPrestacaoServico(prestacaoServico)\">\n            </button>\n            <button *ngIf=\"showStartButton(prestacaoServico)\" pButton type=\"button\" class=\"mt-2 p-button-success\"\n              icon=\"pi pi-play\" label=\"Iniciar Atendimento\" (click)=\"startPrestacaoServico(prestacaoServico)\">\n            </button>\n            <button *ngIf=\"showFinalizeButton(prestacaoServico)\" pButton type=\"button\" class=\"mt-2 p-button-success\"\n              icon=\"pi pi-check\" label=\"Finalizar Atendimento\" (click)=\"finalizePrestacaoServico(prestacaoServico)\">\n            </button>\n            <button *ngIf=\"showCancelButton(prestacaoServico)\" pButton type=\"button\"\n              class=\"p-button-outlined p-button-danger\" icon=\"pi pi-times\" label=\"Cancelar Atendimento\"\n              (click)=\"cancelPrestacaoServico(prestacaoServico)\">\n            </button>\n          </div>\n        </div>\n      </div>\n    </ng-template>\n  </p-dataView>\n</div>\n\n\n<app-see-agendamento [showDialog]=\"showServicoDialog\" [selectedPrestacaoServico]=\"selectedPrestacaoServico\"\n  (closeEvent)=\"selectedPrestacaoServico = undefined; showServicoDialog = false;\"\n  (seeEnderecoEvent)=\"showServicoDialog = false; openEndereco()\"\n  (updateAgendamentoEvent)=\"updatePrestacaoServico($event);showServicoDialog = false;\"></app-see-agendamento>\n\n<app-see-endereco [showDialog]=\"showEnderecoDialog\" [endereco]=\"selectedEndereco\"\n  (closeEvent)=\"selectedPrestacaoServico = undefined; selectedEndereco = undefined; showEnderecoDialog = false;\"\n  (returnEvent)=\"showEnderecoDialog = false; openDetailPrestacaoServico()\"></app-see-endereco>\n\n<p-confirmDialog acceptLabel=\"Sim\" rejectLabel=\"Não\" [style]=\"{width: '50vw'}\" [baseZIndex]=\"10000\"\n  rejectButtonStyleClass=\"p-button-text\"></p-confirmDialog>";

/***/ }),

/***/ 97755:
/*!***********************************************************************************************************!*\
  !*** ./src/app/shared/components/utils/dialogs/see-agendamento/see-agendamento.component.html?ngResource ***!
  \***********************************************************************************************************/
/***/ ((module) => {

module.exports = "<ng-container *ngIf=\"selectedPrestacaoServico\">\n  <p-dialog [(visible)]=\"showDialog\" appendTo=\"body\" [modal]=\"true\" [closable]=\"false\" [draggable]=\"false\"\n    [breakpoints]=\"{'960px': '75vw', '640px': '100vw'}\" [style]=\"{width: '60vw'}\">\n    <ng-template pTemplate=\"header\">\n      <div class=\"flex align-items-center \">\n        <span class=\"flex align-items-center justify-content-center bg-cyan-100 text-cyan-800 mr-3 border-circle\"\n          style=\"width:32px;height:32px\">\n          <i class=\"pi pi-info text-lg\"></i>\n        </span>\n        <span class=\"font-medium text-2xl text-900\">{{ title }}</span>\n      </div>\n\n      <div class=\"flex align-items-center justify-content-end ml-auto cursor-pointer\" (click)=\"close()\">\n        <span\n          class=\"flex align-items-center justify-content-center bg-pink-100 text-pink-800 border-circle vertical-align-top\"\n          style=\"width:24px;height:24px\">\n          <i class=\"pi pi-times text-sm\"></i>\n        </span>\n      </div>\n    </ng-template>\n\n    <ng-template pTemplate=\"content\">\n      <div class=\"surface-card p-4 shadow-2 border-round\">\n        <div class=\"font-medium text-3xl text-900 mb-3\">Detalhamento</div>\n        <div class=\"text-primary mb-5\">{{ selectedPrestacaoServico.id }}</div>\n        <ul class=\"list-none p-0 m-0 border-top-1 surface-border\">\n          <li class=\"flex align-items-center py-3 px-2 flex-wrap \">\n            <div class=\"text-500 w-full md:w-2 font-medium\">Prestador</div>\n            <div class=\"text-900 w-full md:w-10\">{{ selectedPrestacaoServico.colaborador.nome }}</div>\n          </li>\n          <li class=\"flex align-items-center py-3 px-2  flex-wrap surface-ground\">\n            <div class=\"text-500 w-full md:w-2 font-medium\">Cliente</div>\n            <div class=\"text-900 w-full md:w-10\">{{ selectedPrestacaoServico.cliente.nome }}</div>\n          </li>\n          <li class=\"flex align-items-center py-3 px-2 flex-wrap \">\n            <div class=\"text-500 w-full md:w-2 font-medium\">Total a ser pago:</div>\n            <div class=\"text-900 w-full md:w-10\">{{ selectedPrestacaoServico.total_devido | currency:'BRL':'' }}</div>\n          </li>\n          <li class=\"flex align-items-center py-3 px-2 flex-wrap surface-ground\">\n            <div class=\"text-500 w-full md:w-2 font-medium\">Loja faturando</div>\n            <div class=\"text-900 w-full md:w-10\">{{ selectedPrestacaoServico.loja.nome }}</div>\n          </li>\n          <li class=\"flex align-items-center py-3 px-2 flex-wrap \">\n            <div class=\"text-500 w-full md:w-2 font-medium\">Adicionais</div>\n            <div class=\"text-900 w-full md:w-10\">\n              <p-tag styleClass=\"mr-2 text-green-500 bg-green-100\" [value]=\"selectedPrestacaoServico.pagamento_forma\"\n                [rounded]=\"true\"></p-tag>\n              <p-tag styleClass=\"mr-2 text-blue-500 bg-blue-100\" [value]=\"selectedPrestacaoServico.status_servico\"\n                [rounded]=\"true\"></p-tag>\n              <p-tag styleClass=\"mr-2 text-orange-500 bg-orange-100\" [value]=\"selectedPrestacaoServico.local\"\n                [rounded]=\"true\"></p-tag>\n            </div>\n          </li>\n          <li class=\"flex align-items-center py-3 px-2 flex-wrap surface-ground\">\n            <div class=\"text-500 w-full md:w-2 font-medium\">Detalhe da ordem de serviço</div>\n            <div class=\"text-900 w-full md:w-10\">\n              <div class=\"grid mt-0 mr-0\">\n                <div *ngFor=\"let i of selectedPrestacaoServico.itens_prestacao_servico\" class=\"col-12 md:col-6\">\n                  <div class=\"p-3 border-1 surface-border border-round surface-card\">\n                    <div class=\"text-900 mb-2\">\n                      <ion-icon slot=\"start\" icon=\"business-outline\" class=\"mr-2\"></ion-icon>\n                      <span class=\"font-medium\">{{ i.servico.nome }}</span>\n                    </div>\n                    <div class=\"text-900 mb-2\">\n                      <i class=\"pi pi-tag mr-2\"></i>\n                      <span class=\"font-medium\">{{ i.servico.descricao }}</span>\n                    </div>\n                    <div class=\"surface-200 mb-1 mt-1 \" style=\"height:2px\"></div>\n                    <ng-container>\n                      <div class=\"text-700 mb-1\">Valor unitário: {{ i.valor_unitario | currency:'BRL':'' }}</div>\n                      <div class=\"text-700 mb-1\">Quantidade: {{ i.quantidade }}</div>\n                      <div class=\"text-700\">Sub total: {{ i.sub_total | currency:'BRL':'' }}</div>\n                    </ng-container>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </li>\n          <li class=\"flex align-items-center py-3 px-2 flex-wrap \">\n            <div class=\"text-500 w-full md:w-2 font-medium\">Resumo da ordem de serviço</div>\n            <div class=\"text-900 w-full md:w-10\">\n              <div class=\"grid mt-0 mr-0\">\n                <div class=\"col-12 md:col-6\">\n                  <div class=\"p-3 border-1 surface-border border-round surface-card\">\n                    <ng-container>\n                      <div class=\"text-700 mb-1\">Total do serviço: {{ selectedPrestacaoServico.total_servico |\n                        currency:'BRL':'' }}</div>\n                      <div class=\"text-700 mb-1\">Acréscimo/Desconto: {{ selectedPrestacaoServico.acrescimo_desconto |\n                        currency:'BRL':'' }}</div>\n                      <div class=\"text-700\">Total a ser pago: {{ selectedPrestacaoServico.total_devido |\n                        currency:'BRL':'' }}</div>\n                    </ng-container>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </li>\n          <li class=\"flex align-items-center py-3 px-2 flex-wrap surface-ground\">\n            <div class=\"text-500 w-full md:w-2 font-medium \">Justificativa (desconto/acréscimo)</div>\n            <div class=\"text-900 w-full md:w-10\">{{ selectedPrestacaoServico.descricao || 'N.A' }}</div>\n          </li>\n        </ul>\n      </div>\n    </ng-template>\n\n    <ng-template pTemplate=\"footer\">\n      <!--\n        <button class=\"p-button-danger\" type=\"button\" pButton pRipple icon=\"pi pi-times\" iconPos=\"right\"\n        (click)=\"dialogCancel()\" label=\"Cancelar\"></button>\n      -->\n      <div class=\"mt-2\">\n        <button class=\"\" type=\"button\" pButton pRipple icon=\"pi pi-external-link\" iconPos=\"right\"\n          (click)=\"dialogSeeEndereco()\" label=\"Ver endereço\"></button>\n        <button *ngIf=\"showUpdateButton()\" class=\"\" pButton type=\"button\" pRipple icon=\"pi pi-pencil\" iconPos=\"right\" (click)=\"editPrestacao()\"\n          label=\"Editar\"></button>\n      </div>\n    </ng-template>\n  </p-dialog>\n</ng-container>";

/***/ }),

/***/ 7738:
/*!*****************************************************************************************************!*\
  !*** ./src/app/shared/components/utils/dialogs/see-endereco/see-endereco.component.html?ngResource ***!
  \*****************************************************************************************************/
/***/ ((module) => {

module.exports = "<p-dialog *ngIf=\"endereco\" [(visible)]=\"showDialog\" appendTo=\"body\" [modal]=\"true\" [closable]=\"false\"\n  [draggable]=\"false\" [breakpoints]=\"{'960px': '75vw', '640px': '100vw'}\" [style]=\"{width: '40vw'}\">\n  <ng-template pTemplate=\"header\">\n    <div class=\"flex align-items-center \">\n      <span class=\"flex align-items-center justify-content-center bg-cyan-100 text-cyan-800 mr-3 border-circle\"\n        style=\"width:32px;height:32px\">\n        <i class=\"pi pi-info text-lg\"></i>\n      </span>\n      <span class=\"font-medium text-2xl text-900\">{{ title }}</span>\n    </div>\n\n    <div class=\"flex align-items-center justify-content-end ml-auto cursor-pointer\" (click)=\"close()\">\n      <span\n        class=\"flex align-items-center justify-content-center bg-pink-100 text-pink-800 border-circle vertical-align-top\"\n        style=\"width:24px;height:24px\">\n        <i class=\"pi pi-times text-sm\"></i>\n      </span>\n    </div>\n  </ng-template>\n  <div class=\"grid\">\n    <div class=\"text-900 font-medium text-xl mt-2 mb-3\">Endereço</div>\n    <div class=\"surface-card p-4 shadow-2 border-round p-fluid\">\n      <div class=\"grid formgrid p-fluid\">\n        <div class=\"field mb-4 col-12 md:col-6\">\n          <label for=\"company_name\" class=\"font-medium text-900\">CEP</label>\n          <input readonly id=\"company_name\" type=\"text\" pInputText [value]=\"endereco.cep\">\n        </div>\n        <div class=\"field mb-4 col-12 md:col-6\">\n          <label for=\"invoice_id\" class=\"font-medium text-900\">Cidade</label>\n          <input readonly id=\"invoice_id\" type=\"text\" pInputText [value]=\"endereco.cidade\">\n        </div>\n        <div class=\"field mb-4 col-12 md:col-6\">\n          <label for=\"customer_name\" class=\"font-medium text-900\">Estado</label>\n          <input readonly id=\"customer_name\" type=\"text\" pInputText [value]=\"endereco.estado\">\n        </div>\n        <div class=\"field mb-4 col-12 md:col-6\">\n          <label for=\"customer_email\" class=\"font-medium text-900\">Número</label>\n          <input readonly id=\"customer_email\" type=\"text\" pInputText [value]=\"endereco.numero\">\n        </div>\n        <div class=\"field mb-4 col-12 md:col-6\">\n          <label for=\"customer_email\" class=\"font-medium text-900\">Endereço</label>\n          <input readonly id=\"customer_email\" type=\"text\" pInputText [value]=\"endereco.endereco\">\n        </div>\n        <div class=\"field mb-4 col-12 md:col-6\">\n          <label for=\"customer_email\" class=\"font-medium text-900\">Complemento</label>\n          <input readonly id=\"customer_email\" type=\"text\" pInputText [value]=\"endereco.complemento\">\n        </div>\n      </div>\n    </div>\n  </div>\n  <ng-template pTemplate=\"footer\">\n    <div class=\"flex justify-content-end\">\n      <button class=\"p-button-outlined p-button-secondary\" type=\"button\" pButton pRipple icon=\"pi pi-arrow-left\"\n        iconPos=\"left\" (click)=\"dialogVoltar()\" label=\"Voltar\"></button>\n      <button type=\"button\" pButton pRipple icon=\"pi pi-globe\" iconPos=\"right\" (click)=\"dialogOpenMap()\"\n        label=\"Maps\"></button>\n    </div>\n  </ng-template>\n</p-dialog>";

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

/***/ 33042:
/*!*******************************************************!*\
  !*** ./node_modules/primeng/fesm2020/primeng-tag.mjs ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tag": () => (/* binding */ Tag),
/* harmony export */   "TagModule": () => (/* binding */ TagModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 94666);




function Tag_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 3);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r0.icon);
  }
}
const _c0 = ["*"];
class Tag {
  containerClass() {
    return {
      'p-tag p-component': true,
      'p-tag-info': this.severity === 'info',
      'p-tag-success': this.severity === 'success',
      'p-tag-warning': this.severity === 'warning',
      'p-tag-danger': this.severity === 'danger',
      'p-tag-rounded': this.rounded
    };
  }
}
Tag.ɵfac = function Tag_Factory(t) {
  return new (t || Tag)();
};
Tag.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: Tag,
  selectors: [["p-tag"]],
  hostAttrs: [1, "p-element"],
  inputs: {
    styleClass: "styleClass",
    style: "style",
    severity: "severity",
    value: "value",
    icon: "icon",
    rounded: "rounded"
  },
  ngContentSelectors: _c0,
  decls: 5,
  vars: 6,
  consts: [[3, "ngClass", "ngStyle"], ["class", "p-tag-icon", 3, "ngClass", 4, "ngIf"], [1, "p-tag-value"], [1, "p-tag-icon", 3, "ngClass"]],
  template: function Tag_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, Tag_span_2_Template, 1, 1, "span", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.styleClass);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.containerClass())("ngStyle", ctx.style);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.icon);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.value);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgStyle],
  styles: [".p-tag{display:inline-flex;align-items:center;justify-content:center}.p-tag-icon,.p-tag-value,.p-tag-icon.pi{line-height:1.5}.p-tag.p-tag-rounded{border-radius:10rem}\n"],
  encapsulation: 2,
  changeDetection: 0
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Tag, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'p-tag',
      template: `
        <span [ngClass]="containerClass()" [class]="styleClass" [ngStyle]="style">
            <ng-content></ng-content>
            <span class="p-tag-icon" [ngClass]="icon" *ngIf="icon"></span>
            <span class="p-tag-value">{{ value }}</span>
        </span>
    `,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      host: {
        class: 'p-element'
      },
      styles: [".p-tag{display:inline-flex;align-items:center;justify-content:center}.p-tag-icon,.p-tag-value,.p-tag-icon.pi{line-height:1.5}.p-tag.p-tag-rounded{border-radius:10rem}\n"]
    }]
  }], null, {
    styleClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    style: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    severity: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    value: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    icon: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    rounded: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();
class TagModule {}
TagModule.ɵfac = function TagModule_Factory(t) {
  return new (t || TagModule)();
};
TagModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: TagModule,
  declarations: [Tag],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule],
  exports: [Tag]
});
TagModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TagModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule],
      exports: [Tag],
      declarations: [Tag]
    }]
  }], null, null);
})();

/**
 * Generated bundle index. Do not edit.
 */



/***/ })

}]);
//# sourceMappingURL=src_app_pages_prestacao-servico-gestao_prestacao-servico-gestao_module_ts.js.map