"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_administracao-pagamento_administracao-pagamento_module_ts"],{

/***/ 35444:
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/administracao-pagamento/administracao-pagamento-routing.module.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdministracaoPagamentoPageRoutingModule": () => (/* binding */ AdministracaoPagamentoPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _administracao_pagamento_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./administracao-pagamento.page */ 11414);




const routes = [
    {
        path: '',
        component: _administracao_pagamento_page__WEBPACK_IMPORTED_MODULE_0__.AdministracaoPagamentoPage
    }
];
let AdministracaoPagamentoPageRoutingModule = class AdministracaoPagamentoPageRoutingModule {
};
AdministracaoPagamentoPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AdministracaoPagamentoPageRoutingModule);



/***/ }),

/***/ 30098:
/*!*********************************************************************************!*\
  !*** ./src/app/pages/administracao-pagamento/administracao-pagamento.module.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdministracaoPagamentoPageModule": () => (/* binding */ AdministracaoPagamentoPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 19200);
/* harmony import */ var _administracao_pagamento_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./administracao-pagamento-routing.module */ 35444);
/* harmony import */ var _administracao_pagamento_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./administracao-pagamento.page */ 11414);
/* harmony import */ var _shared_directive_directives_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../shared/directive/directives.module */ 9406);
/* harmony import */ var _shared_components_fluxo_pagamento_module_fluxo_pagamento_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../shared/components/fluxo-pagamento-module/fluxo-pagamento.module */ 14143);
/* harmony import */ var _shared_components_adm_financeira_module_pagamentos_pagamentos_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../shared/components/adm-financeira-module/pagamentos/pagamentos.module */ 77631);











let AdministracaoPagamentoPageModule = class AdministracaoPagamentoPageModule {
};
AdministracaoPagamentoPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_9__.FontAwesomeModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonicModule,
            _shared_directive_directives_module__WEBPACK_IMPORTED_MODULE_2__.DirectivesModule,
            _administracao_pagamento_routing_module__WEBPACK_IMPORTED_MODULE_0__.AdministracaoPagamentoPageRoutingModule,
            _shared_components_adm_financeira_module_pagamentos_pagamentos_module__WEBPACK_IMPORTED_MODULE_4__.PagamentosModule,
            _shared_components_fluxo_pagamento_module_fluxo_pagamento_module__WEBPACK_IMPORTED_MODULE_3__.FluxoPagamentoModule,
        ],
        declarations: [_administracao_pagamento_page__WEBPACK_IMPORTED_MODULE_1__.AdministracaoPagamentoPage]
    })
], AdministracaoPagamentoPageModule);



/***/ }),

/***/ 11414:
/*!*******************************************************************************!*\
  !*** ./src/app/pages/administracao-pagamento/administracao-pagamento.page.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdministracaoPagamentoPage": () => (/* binding */ AdministracaoPagamentoPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _administracao_pagamento_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./administracao-pagamento.page.html?ngResource */ 86182);
/* harmony import */ var _administracao_pagamento_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./administracao-pagamento.page.scss?ngResource */ 2935);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);




let AdministracaoPagamentoPage = class AdministracaoPagamentoPage {
    constructor() {
        this.currentTab = 'solicitacoes';
    }
    ngOnInit() {
    }
    changeTab(event) {
        this.currentTab = event.detail.value;
    }
};
AdministracaoPagamentoPage.ctorParameters = () => [];
AdministracaoPagamentoPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-administracao-pagamento',
        template: _administracao_pagamento_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_administracao_pagamento_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AdministracaoPagamentoPage);



/***/ }),

/***/ 76447:
/*!*******************************************************************************************************!*\
  !*** ./src/app/shared/components/fluxo-pagamento-module/eventos/evento-main/evento-main.component.ts ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EventoMainComponent": () => (/* binding */ EventoMainComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _evento_main_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./evento-main.component.html?ngResource */ 26311);
/* harmony import */ var _evento_main_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./evento-main.component.scss?ngResource */ 5176);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);




let EventoMainComponent = class EventoMainComponent {
    constructor() { }
    ngOnInit() { }
};
EventoMainComponent.ctorParameters = () => [];
EventoMainComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-evento-main',
        template: _evento_main_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_evento_main_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], EventoMainComponent);



/***/ }),

/***/ 68607:
/*!************************************************************************************!*\
  !*** ./src/app/shared/components/fluxo-pagamento-module/eventos/eventos.module.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EventosModule": () => (/* binding */ EventosModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/button */ 76328);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/ripple */ 84538);
/* harmony import */ var primeng_inputswitch__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/inputswitch */ 13585);
/* harmony import */ var primeng_radiobutton__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/radiobutton */ 69902);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/inputtext */ 69906);
/* harmony import */ var primeng_paginator__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/paginator */ 42722);
/* harmony import */ var primeng_inputnumber__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/inputnumber */ 87990);
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/dialog */ 1837);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! primeng/dropdown */ 38992);
/* harmony import */ var primeng_divider__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! primeng/divider */ 1154);
/* harmony import */ var primeng_styleclass__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! primeng/styleclass */ 82041);
/* harmony import */ var primeng_dataview__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! primeng/dataview */ 81233);
/* harmony import */ var primeng_panel__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! primeng/panel */ 24266);
/* harmony import */ var primeng_menu__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! primeng/menu */ 60625);
/* harmony import */ var primeng_message__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! primeng/message */ 73589);
/* harmony import */ var primeng_skeleton__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! primeng/skeleton */ 32712);
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! primeng/calendar */ 32547);
/* harmony import */ var primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! primeng/confirmdialog */ 60097);
/* harmony import */ var primeng_multiselect__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! primeng/multiselect */ 30850);
/* harmony import */ var primeng_tag__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! primeng/tag */ 33042);
/* harmony import */ var primeng_fileupload__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! primeng/fileupload */ 16193);
/* harmony import */ var _pipes_pipe_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../pipes/pipe.module */ 67361);
/* harmony import */ var _directive_directives_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../directive/directives.module */ 9406);
/* harmony import */ var _utils_attention_surface_attention_surface_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/attention-surface/attention-surface.module */ 218);
/* harmony import */ var _evento_detail_evento_detail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./evento-detail/evento-detail.component */ 70303);
/* harmony import */ var _evento_main_evento_main_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./evento-main/evento-main.component */ 76447);































let EventosModule = class EventosModule {
};
EventosModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
        declarations: [_evento_detail_evento_detail_component__WEBPACK_IMPORTED_MODULE_3__.EventoDetailComponent, _evento_main_evento_main_component__WEBPACK_IMPORTED_MODULE_4__.EventoMainComponent],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule,
            primeng_button__WEBPACK_IMPORTED_MODULE_10__.ButtonModule,
            primeng_ripple__WEBPACK_IMPORTED_MODULE_11__.RippleModule,
            primeng_inputtext__WEBPACK_IMPORTED_MODULE_12__.InputTextModule,
            primeng_inputswitch__WEBPACK_IMPORTED_MODULE_13__.InputSwitchModule,
            primeng_radiobutton__WEBPACK_IMPORTED_MODULE_14__.RadioButtonModule,
            primeng_paginator__WEBPACK_IMPORTED_MODULE_15__.PaginatorModule,
            primeng_inputnumber__WEBPACK_IMPORTED_MODULE_16__.InputNumberModule,
            primeng_dialog__WEBPACK_IMPORTED_MODULE_17__.DialogModule,
            primeng_dropdown__WEBPACK_IMPORTED_MODULE_18__.DropdownModule,
            primeng_fileupload__WEBPACK_IMPORTED_MODULE_19__.FileUploadModule,
            primeng_divider__WEBPACK_IMPORTED_MODULE_20__.DividerModule,
            primeng_styleclass__WEBPACK_IMPORTED_MODULE_21__.StyleClassModule,
            primeng_dataview__WEBPACK_IMPORTED_MODULE_22__.DataViewModule,
            primeng_multiselect__WEBPACK_IMPORTED_MODULE_23__.MultiSelectModule,
            primeng_tag__WEBPACK_IMPORTED_MODULE_24__.TagModule,
            primeng_panel__WEBPACK_IMPORTED_MODULE_25__.PanelModule,
            primeng_menu__WEBPACK_IMPORTED_MODULE_26__.MenuModule,
            primeng_message__WEBPACK_IMPORTED_MODULE_27__.MessageModule,
            primeng_skeleton__WEBPACK_IMPORTED_MODULE_28__.SkeletonModule,
            primeng_calendar__WEBPACK_IMPORTED_MODULE_29__.CalendarModule,
            primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_30__.ConfirmDialogModule,
            _pipes_pipe_module__WEBPACK_IMPORTED_MODULE_0__.PipeModule,
            _directive_directives_module__WEBPACK_IMPORTED_MODULE_1__.DirectivesModule,
            _utils_attention_surface_attention_surface_module__WEBPACK_IMPORTED_MODULE_2__.AttentionSurfaceModule,
        ],
        exports: [_evento_detail_evento_detail_component__WEBPACK_IMPORTED_MODULE_3__.EventoDetailComponent, _evento_main_evento_main_component__WEBPACK_IMPORTED_MODULE_4__.EventoMainComponent],
    })
], EventosModule);



/***/ }),

/***/ 14143:
/*!************************************************************************************!*\
  !*** ./src/app/shared/components/fluxo-pagamento-module/fluxo-pagamento.module.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FluxoPagamentoModule": () => (/* binding */ FluxoPagamentoModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _eventos_eventos_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./eventos/eventos.module */ 68607);
/* harmony import */ var _operacoes_operacoes_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./operacoes/operacoes.module */ 38519);
/* harmony import */ var _solicitacoes_solicitacoes_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./solicitacoes/solicitacoes.module */ 62380);






let FluxoPagamentoModule = class FluxoPagamentoModule {
};
FluxoPagamentoModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        declarations: [],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _eventos_eventos_module__WEBPACK_IMPORTED_MODULE_0__.EventosModule,
            _operacoes_operacoes_module__WEBPACK_IMPORTED_MODULE_1__.OperacoesModule,
            _solicitacoes_solicitacoes_module__WEBPACK_IMPORTED_MODULE_2__.SolicitacoesModule,
        ],
        exports: [
            _eventos_eventos_module__WEBPACK_IMPORTED_MODULE_0__.EventosModule,
            _operacoes_operacoes_module__WEBPACK_IMPORTED_MODULE_1__.OperacoesModule,
            _solicitacoes_solicitacoes_module__WEBPACK_IMPORTED_MODULE_2__.SolicitacoesModule,
        ]
    })
], FluxoPagamentoModule);



/***/ }),

/***/ 7838:
/*!*******************************************************************************************************************!*\
  !*** ./src/app/shared/components/fluxo-pagamento-module/operacoes/operacoes-create/operacoes-create.component.ts ***!
  \*******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OperacoesCreateComponent": () => (/* binding */ OperacoesCreateComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _operacoes_create_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./operacoes-create.component.html?ngResource */ 34750);
/* harmony import */ var _operacoes_create_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./operacoes-create.component.scss?ngResource */ 96202);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/api */ 14356);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 26078);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! uuid */ 62535);
/* harmony import */ var _constants_page_constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../../constants/page.constant */ 59136);
/* harmony import */ var _services_fluxo_pagamentos_configuracoes_aprovacao_configuracao_aprovacao_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../../services/fluxo-pagamentos/configuracoes-aprovacao/configuracao-aprovacao.service */ 30004);
/* harmony import */ var _services_perfil_perfil_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../../services/perfil/perfil.service */ 37945);
/* harmony import */ var _services_toast_toast_message_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../../services/toast/toast-message.service */ 12973);
/* harmony import */ var _constants_toast_constant__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../../../../shared/constants/toast.constant */ 98739);














let OperacoesCreateComponent = class OperacoesCreateComponent {
    constructor(modalCtrl, perfilService, configuracaoAprovacaoService, confirmationService, toastService) {
        this.modalCtrl = modalCtrl;
        this.perfilService = perfilService;
        this.configuracaoAprovacaoService = configuracaoAprovacaoService;
        this.confirmationService = confirmationService;
        this.toastService = toastService;
        this.searchedPerfil = '';
        this.showDialog = false;
        this.niveis_aprovacao = [];
        this.hasUpdate = false;
        this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_7__.Subscription();
    }
    ngOnInit() {
        this.niveis_aprovacao = this.configuracaoAtual?.niveis_aprovacao || [];
        this.loadPerfil();
    }
    ngOnDestroy() {
        this.subscriptions.unsubscribe();
    }
    //#region PERFIS
    loadPerfil(page = 1, dropdown) {
        const sub = this.perfilService.list({ order: _constants_page_constant__WEBPACK_IMPORTED_MODULE_2__.PageOrder.ASC, page, take: 10 })
            .subscribe(data => {
            this.perfis = data;
            if (dropdown) {
                dropdown.show();
            }
        });
        this.subscriptions.add(sub);
    }
    paginarPerfil(event) {
        this.loadPerfil();
    }
    onPerfilFilter(event) {
        const filter = event.filter;
        this.searchedPerfil = filter;
    }
    blurPerfil(event, dropdown) {
        this.searchedPerfil = undefined;
        dropdown.filterValue = undefined;
    }
    //#endregion
    getVersaoAtual() {
        const versao = (Number(this.configuracaoAtual?.versao) + 1);
        return Number.isNaN(versao) ? '1' : versao;
    }
    salvarNivel() {
        if (this.nivelIndexToUpdate >= 0) {
            this.niveis_aprovacao[this.nivelIndexToUpdate].perfil_aprovador = this.selectedPerfil;
        }
        else {
            this.niveis_aprovacao.push({
                id: (0,uuid__WEBPACK_IMPORTED_MODULE_8__["default"])(),
                ordem: undefined,
                user_registrou: undefined,
                perfil_aprovador: this.selectedPerfil,
            });
        }
        this.closeDialog(null);
    }
    editNivel(nivel) {
        const index = this.niveis_aprovacao.findIndex(n => n.id == nivel.id);
        const selectedNivel = this.niveis_aprovacao[index];
        this.selectedPerfil = selectedNivel.perfil_aprovador;
        this.nivelIndexToUpdate = index;
        this.showDialog = true;
    }
    deleteNivel(nivel, ordem) {
        this.confirmationService.confirm({
            message: `Deseja mesmo deletar o nível ${ordem + 1}?`,
            header: `Deleção`,
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                const index = this.niveis_aprovacao.findIndex(n => n.id == nivel.id);
                this.niveis_aprovacao.splice(index, 1);
                this.toastService.presentToast({
                    titulo: `Sucesso`,
                    detalhe: `Nível deletado com sucesso!`,
                    duracao: _constants_toast_constant__WEBPACK_IMPORTED_MODULE_6__.ToastEnum.shortDuration,
                    gravidade: _constants_toast_constant__WEBPACK_IMPORTED_MODULE_6__.ToastPrimeSeverityEnum.SUCESSO,
                });
            },
            reject: (type) => {
                this.toastService.clearToast();
            }
        });
    }
    disableSalvarNivelBtn() {
        return !this.selectedPerfil;
    }
    closeDialog(event) {
        this.selectedPerfil = undefined;
        this.nivelIndexToUpdate = undefined;
        this.showDialog = false;
    }
    fechar() {
        this.confirmationService.close();
        this.modalCtrl.dismiss(this.hasUpdate);
    }
    atualizar() {
        this.confirmationService.confirm({
            message: `As solicitações em andamento seguirão o fluxo atual, mas as novas seguirão o novo fluxo.`,
            header: `Deseja prosseguir?`,
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                const niveis_aprovacao = this.niveis_aprovacao.map(n => {
                    return {
                        perfil_aprovador_id: n.perfil_aprovador?.id || undefined,
                    };
                });
                const add = this.configuracaoAprovacaoService.create({
                    tipo_operacao_id: this.tipoOperacaoId,
                    niveis_aprovacao,
                })
                    .subscribe({
                    next: (response) => {
                        this.toastService.presentToast({
                            titulo: `Sucesso`,
                            detalhe: `Configuração atualizada com sucesso!`,
                            duracao: _constants_toast_constant__WEBPACK_IMPORTED_MODULE_6__.ToastEnum.shortDuration,
                            gravidade: _constants_toast_constant__WEBPACK_IMPORTED_MODULE_6__.ToastPrimeSeverityEnum.SUCESSO,
                        });
                        this.hasUpdate = true;
                        this.fechar();
                    }
                });
                this.subscriptions.add(add);
            },
            reject: (type) => {
                this.toastService.clearToast();
            }
        });
    }
};
OperacoesCreateComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.ModalController },
    { type: _services_perfil_perfil_service__WEBPACK_IMPORTED_MODULE_4__.PerfilService },
    { type: _services_fluxo_pagamentos_configuracoes_aprovacao_configuracao_aprovacao_service__WEBPACK_IMPORTED_MODULE_3__.ConfiguracaoAprovacaoService },
    { type: primeng_api__WEBPACK_IMPORTED_MODULE_10__.ConfirmationService },
    { type: _services_toast_toast_message_service__WEBPACK_IMPORTED_MODULE_5__.ToastMessageService }
];
OperacoesCreateComponent.propDecorators = {
    configuracaoAtual: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.Input }],
    tipoPerfilNome: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.Input }],
    tipoOperacaoId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.Input }]
};
OperacoesCreateComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
        selector: 'app-operacoes-create',
        template: _operacoes_create_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_operacoes_create_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], OperacoesCreateComponent);



/***/ }),

/***/ 18788:
/*!*******************************************************************************************************************!*\
  !*** ./src/app/shared/components/fluxo-pagamento-module/operacoes/operacoes-detail/operacoes-detail.component.ts ***!
  \*******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OperacoesDetailComponent": () => (/* binding */ OperacoesDetailComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _operacoes_detail_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./operacoes-detail.component.html?ngResource */ 71208);
/* harmony import */ var _operacoes_detail_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./operacoes-detail.component.scss?ngResource */ 5685);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 26078);






let OperacoesDetailComponent = class OperacoesDetailComponent {
    constructor(modalCtrl) {
        this.modalCtrl = modalCtrl;
        this.hasUpdate = false;
        this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subscription();
    }
    ngOnInit() {
        console.log(this.configuracaoAtual);
    }
    ngOnDestroy() {
        this.subscriptions.unsubscribe();
    }
    setUserImage(user) {
        return user.avatar_url || "assets/imgs/outros/default-user.jpg";
    }
    fechar() {
        this.modalCtrl.dismiss(this.hasUpdate);
    }
};
OperacoesDetailComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.ModalController }
];
OperacoesDetailComponent.propDecorators = {
    configuracaoAtual: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }]
};
OperacoesDetailComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-operacoes-detail',
        template: _operacoes_detail_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_operacoes_detail_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], OperacoesDetailComponent);



/***/ }),

/***/ 21325:
/*!***************************************************************************************************************!*\
  !*** ./src/app/shared/components/fluxo-pagamento-module/operacoes/operacoes-main/operacoes-main.component.ts ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OperacoesMainComponent": () => (/* binding */ OperacoesMainComponent)
/* harmony export */ });
/* harmony import */ var _home_m4estro_Documentos_Code_Neg_cios_StandIO_Conds_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _operacoes_main_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./operacoes-main.component.html?ngResource */ 15196);
/* harmony import */ var _operacoes_main_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./operacoes-main.component.scss?ngResource */ 78564);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 26078);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 54363);
/* harmony import */ var _services_toast_toast_message_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../../services/toast/toast-message.service */ 12973);
/* harmony import */ var _constants_toast_constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../../constants/toast.constant */ 98739);
/* harmony import */ var _constants_page_constant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../../constants/page.constant */ 59136);
/* harmony import */ var _services_fluxo_pagamentos_configuracoes_aprovacao_configuracao_aprovacao_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../../../services/fluxo-pagamentos/configuracoes-aprovacao/configuracao-aprovacao.service */ 30004);
/* harmony import */ var _services_fluxo_pagamentos_tipos_operacao_saida_tipo_operacao_saida_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../../../services/fluxo-pagamentos/tipos-operacao-saida/tipo-operacao-saida.service */ 32307);
/* harmony import */ var _operacoes_create_operacoes_create_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../operacoes-create/operacoes-create.component */ 7838);
/* harmony import */ var _operacoes_detail_operacoes_detail_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../operacoes-detail/operacoes-detail.component */ 18788);














let OperacoesMainComponent = class OperacoesMainComponent {
  constructor(modal, toastMessageService, tipoOperacaoSaidaService, configuracaoAprovacaoService) {
    this.modal = modal;
    this.toastMessageService = toastMessageService;
    this.tipoOperacaoSaidaService = tipoOperacaoSaidaService;
    this.configuracaoAprovacaoService = configuracaoAprovacaoService;
    this.searchedOperacao = '';
    this.currentPage = 1;
    this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_10__.Subscription();
  }
  ngOnInit() {
    this.loadOperacao();
  }
  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
  loadOperacao(page = 1, dropdown) {
    const sub = this.tipoOperacaoSaidaService.list({
      searchedTipoOperacao: this.searchedOperacao
    }, {
      order: _constants_page_constant__WEBPACK_IMPORTED_MODULE_5__.PageOrder.ASC,
      page,
      take: 10
    }).subscribe(data => {
      this.operacoes = data;
      if (dropdown) {
        dropdown.show();
      }
    });
    this.subscriptions.add(sub);
  }
  createNew({
    id,
    nome
  }) {
    var _this = this;
    return (0,_home_m4estro_Documentos_Code_Neg_cios_StandIO_Conds_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.toastMessageService.clearToast();
      let data;
      try {
        data = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.firstValueFrom)(_this.configuracaoAprovacaoService.findById(id));
      } catch (e) {
        _this.toastMessageService.clearToast();
      }
      _this.showModal(_operacoes_create_operacoes_create_component__WEBPACK_IMPORTED_MODULE_8__.OperacoesCreateComponent, {
        configuracaoAtual: data,
        tipoOperacaoNome: nome,
        tipoOperacaoId: id
      }, ['modal-size-80']);
    })();
  }
  detalhar({
    id
  }) {
    this.toastMessageService.clearToast();
    this.configuracaoAprovacaoService.findById(id).subscribe({
      next: data => {
        this.showModal(_operacoes_detail_operacoes_detail_component__WEBPACK_IMPORTED_MODULE_9__.OperacoesDetailComponent, {
          configuracaoAtual: data
        }, ['modal-size-80', 'modal-transparent']);
      }
    });
  }
  search() {
    this.loadOperacao(1);
  }
  paginar(event) {
    const {
      first,
      rows
    } = event;
    const page = Number(Number(first) / Number(rows) + 1);
    if (page != this.currentPage) {
      this.currentPage = page;
      this.loadOperacao(page);
    }
  }
  showModal(component, componentProps, cssClass = ['modal-size-80']) {
    var _this2 = this;
    return (0,_home_m4estro_Documentos_Code_Neg_cios_StandIO_Conds_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const modal = yield _this2.modal.create({
        component,
        backdropDismiss: false,
        cssClass,
        componentProps
      });
      modal.onDidDismiss().then(data => {
        const {
          data: hasUpdate,
          role
        } = data;
        if (hasUpdate) {
          _this2.loadOperacao(_this2.currentPage);
          if (role == 'create') {
            _this2.toastMessageService.presentToast({
              detalhe: `Pagamento criado com sucesso!`,
              titulo: `Sucesso!`,
              duracao: _constants_toast_constant__WEBPACK_IMPORTED_MODULE_4__.ToastEnum.mediumDuration,
              gravidade: _constants_toast_constant__WEBPACK_IMPORTED_MODULE_4__.ToastPrimeSeverityEnum.SUCESSO
            });
          }
        }
      });
      return yield modal.present();
    })();
  }
};
OperacoesMainComponent.ctorParameters = () => [{
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.ModalController
}, {
  type: _services_toast_toast_message_service__WEBPACK_IMPORTED_MODULE_3__.ToastMessageService
}, {
  type: _services_fluxo_pagamentos_tipos_operacao_saida_tipo_operacao_saida_service__WEBPACK_IMPORTED_MODULE_7__.TipoOperacaoSaidaService
}, {
  type: _services_fluxo_pagamentos_configuracoes_aprovacao_configuracao_aprovacao_service__WEBPACK_IMPORTED_MODULE_6__.ConfiguracaoAprovacaoService
}];
OperacoesMainComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_14__.Component)({
  selector: 'app-operacoes-main',
  template: _operacoes_main_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_operacoes_main_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], OperacoesMainComponent);


/***/ }),

/***/ 38519:
/*!****************************************************************************************!*\
  !*** ./src/app/shared/components/fluxo-pagamento-module/operacoes/operacoes.module.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OperacoesModule": () => (/* binding */ OperacoesModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/button */ 76328);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/ripple */ 84538);
/* harmony import */ var primeng_inputswitch__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/inputswitch */ 13585);
/* harmony import */ var primeng_radiobutton__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/radiobutton */ 69902);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/inputtext */ 69906);
/* harmony import */ var primeng_paginator__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/paginator */ 42722);
/* harmony import */ var primeng_inputnumber__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/inputnumber */ 87990);
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! primeng/dialog */ 1837);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! primeng/dropdown */ 38992);
/* harmony import */ var primeng_divider__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! primeng/divider */ 1154);
/* harmony import */ var primeng_styleclass__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! primeng/styleclass */ 82041);
/* harmony import */ var primeng_dataview__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! primeng/dataview */ 81233);
/* harmony import */ var primeng_panel__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! primeng/panel */ 24266);
/* harmony import */ var primeng_menu__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! primeng/menu */ 60625);
/* harmony import */ var primeng_message__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! primeng/message */ 73589);
/* harmony import */ var primeng_skeleton__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! primeng/skeleton */ 32712);
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! primeng/calendar */ 32547);
/* harmony import */ var primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! primeng/confirmdialog */ 60097);
/* harmony import */ var primeng_multiselect__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! primeng/multiselect */ 30850);
/* harmony import */ var primeng_tag__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! primeng/tag */ 33042);
/* harmony import */ var primeng_fileupload__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! primeng/fileupload */ 16193);
/* harmony import */ var _pipes_pipe_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../pipes/pipe.module */ 67361);
/* harmony import */ var _directive_directives_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../directive/directives.module */ 9406);
/* harmony import */ var _utils_attention_surface_attention_surface_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/attention-surface/attention-surface.module */ 218);
/* harmony import */ var _operacoes_main_operacoes_main_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./operacoes-main/operacoes-main.component */ 21325);
/* harmony import */ var _operacoes_create_operacoes_create_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./operacoes-create/operacoes-create.component */ 7838);
/* harmony import */ var _operacoes_detail_operacoes_detail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./operacoes-detail/operacoes-detail.component */ 18788);
































let OperacoesModule = class OperacoesModule {
};
OperacoesModule = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.NgModule)({
        declarations: [
            _operacoes_main_operacoes_main_component__WEBPACK_IMPORTED_MODULE_3__.OperacoesMainComponent, _operacoes_create_operacoes_create_component__WEBPACK_IMPORTED_MODULE_4__.OperacoesCreateComponent, _operacoes_detail_operacoes_detail_component__WEBPACK_IMPORTED_MODULE_5__.OperacoesDetailComponent,
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonicModule,
            primeng_button__WEBPACK_IMPORTED_MODULE_11__.ButtonModule,
            primeng_ripple__WEBPACK_IMPORTED_MODULE_12__.RippleModule,
            primeng_inputtext__WEBPACK_IMPORTED_MODULE_13__.InputTextModule,
            primeng_inputswitch__WEBPACK_IMPORTED_MODULE_14__.InputSwitchModule,
            primeng_radiobutton__WEBPACK_IMPORTED_MODULE_15__.RadioButtonModule,
            primeng_paginator__WEBPACK_IMPORTED_MODULE_16__.PaginatorModule,
            primeng_inputnumber__WEBPACK_IMPORTED_MODULE_17__.InputNumberModule,
            primeng_dialog__WEBPACK_IMPORTED_MODULE_18__.DialogModule,
            primeng_dropdown__WEBPACK_IMPORTED_MODULE_19__.DropdownModule,
            primeng_fileupload__WEBPACK_IMPORTED_MODULE_20__.FileUploadModule,
            primeng_divider__WEBPACK_IMPORTED_MODULE_21__.DividerModule,
            primeng_styleclass__WEBPACK_IMPORTED_MODULE_22__.StyleClassModule,
            primeng_dataview__WEBPACK_IMPORTED_MODULE_23__.DataViewModule,
            primeng_multiselect__WEBPACK_IMPORTED_MODULE_24__.MultiSelectModule,
            primeng_tag__WEBPACK_IMPORTED_MODULE_25__.TagModule,
            primeng_panel__WEBPACK_IMPORTED_MODULE_26__.PanelModule,
            primeng_menu__WEBPACK_IMPORTED_MODULE_27__.MenuModule,
            primeng_message__WEBPACK_IMPORTED_MODULE_28__.MessageModule,
            primeng_skeleton__WEBPACK_IMPORTED_MODULE_29__.SkeletonModule,
            primeng_calendar__WEBPACK_IMPORTED_MODULE_30__.CalendarModule,
            primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_31__.ConfirmDialogModule,
            _pipes_pipe_module__WEBPACK_IMPORTED_MODULE_0__.PipeModule,
            _directive_directives_module__WEBPACK_IMPORTED_MODULE_1__.DirectivesModule,
            _utils_attention_surface_attention_surface_module__WEBPACK_IMPORTED_MODULE_2__.AttentionSurfaceModule,
        ],
        exports: [
            _operacoes_main_operacoes_main_component__WEBPACK_IMPORTED_MODULE_3__.OperacoesMainComponent, _operacoes_create_operacoes_create_component__WEBPACK_IMPORTED_MODULE_4__.OperacoesCreateComponent, _operacoes_detail_operacoes_detail_component__WEBPACK_IMPORTED_MODULE_5__.OperacoesDetailComponent,
        ],
    })
], OperacoesModule);



/***/ }),

/***/ 30004:
/*!************************************************************************************************************!*\
  !*** ./src/app/shared/services/fluxo-pagamentos/configuracoes-aprovacao/configuracao-aprovacao.service.ts ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfiguracaoAprovacaoService": () => (/* binding */ ConfiguracaoAprovacaoService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _config_api_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../config/api.config */ 99038);




let ConfiguracaoAprovacaoService = class ConfiguracaoAprovacaoService {
    constructor(http) {
        this.http = http;
    }
    findById(id) {
        return this.http.get(`${_config_api_config__WEBPACK_IMPORTED_MODULE_0__.API_CONFIG.baseURL}/configuracoes-aprovacao/${id}/current`, {
            responseType: 'json',
        });
    }
    create(dto) {
        return this.http.post(`${_config_api_config__WEBPACK_IMPORTED_MODULE_0__.API_CONFIG.baseURL}/configuracoes-aprovacao/`, dto, {
            responseType: 'json',
        });
    }
};
ConfiguracaoAprovacaoService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient }
];
ConfiguracaoAprovacaoService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], ConfiguracaoAprovacaoService);



/***/ }),

/***/ 37945:
/*!**********************************************************!*\
  !*** ./src/app/shared/services/perfil/perfil.service.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PerfilService": () => (/* binding */ PerfilService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _config_api_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../../config/api.config */ 99038);
/* harmony import */ var _interfaces_others_pageable_dto__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../interfaces/others/pageable.dto */ 40199);
/* harmony import */ var _utils_PageUtils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/PageUtils */ 55583);






let PerfilService = class PerfilService {
    constructor(http) {
        this.http = http;
    }
    list(pageOptions = new _interfaces_others_pageable_dto__WEBPACK_IMPORTED_MODULE_1__.PageOptionsDto(), options) {
        let params = _utils_PageUtils__WEBPACK_IMPORTED_MODULE_2__.PageUtils.getPageOptionsParams(pageOptions);
        if (options) {
            params = params.append('with_usuario', options.with_usuario.toString());
        }
        return this.http.get(`${_config_api_config__WEBPACK_IMPORTED_MODULE_0__.API_CONFIG.baseURL}/perfis`, {
            responseType: 'json',
            params,
        });
    }
};
PerfilService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient }
];
PerfilService = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable)({
        providedIn: 'root'
    })
], PerfilService);



/***/ }),

/***/ 67875:
/*!*****************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/regex.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i);

/***/ }),

/***/ 76421:
/*!***************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/rng.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ rng)
/* harmony export */ });
// Unique ID creation requires a high quality random # generator. In the browser we therefore
// require the crypto API and do not support built-in fallback to lower quality random number
// generators (like Math.random()).
var getRandomValues;
var rnds8 = new Uint8Array(16);
function rng() {
  // lazy load so that environments that need to polyfill have a chance to do so
  if (!getRandomValues) {
    // getRandomValues needs to be invoked in a context where "this" is a Crypto implementation. Also,
    // find the complete implementation of crypto (msCrypto) on IE11.
    getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto !== 'undefined' && typeof msCrypto.getRandomValues === 'function' && msCrypto.getRandomValues.bind(msCrypto);
    if (!getRandomValues) {
      throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
    }
  }
  return getRandomValues(rnds8);
}

/***/ }),

/***/ 63054:
/*!*********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/stringify.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validate.js */ 60231);

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */

var byteToHex = [];
for (var i = 0; i < 256; ++i) {
  byteToHex.push((i + 0x100).toString(16).substr(1));
}
function stringify(arr) {
  var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  // Note: Be careful editing this code!  It's been tuned for performance
  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
  var uuid = (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase(); // Consistency check for valid UUID.  If this throws, it's likely due to one
  // of the following:
  // - One or more input array values don't map to a hex octet (leading to
  // "undefined" in the uuid)
  // - Invalid input values for the RFC `version` or `variant` fields

  if (!(0,_validate_js__WEBPACK_IMPORTED_MODULE_0__["default"])(uuid)) {
    throw TypeError('Stringified UUID is invalid');
  }
  return uuid;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stringify);

/***/ }),

/***/ 62535:
/*!**************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/v4.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _rng_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rng.js */ 76421);
/* harmony import */ var _stringify_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stringify.js */ 63054);


function v4(options, buf, offset) {
  options = options || {};
  var rnds = options.random || (options.rng || _rng_js__WEBPACK_IMPORTED_MODULE_0__["default"])(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`

  rnds[6] = rnds[6] & 0x0f | 0x40;
  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided

  if (buf) {
    offset = offset || 0;
    for (var i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }
    return buf;
  }
  return (0,_stringify_js__WEBPACK_IMPORTED_MODULE_1__["default"])(rnds);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (v4);

/***/ }),

/***/ 60231:
/*!********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/validate.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _regex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./regex.js */ 67875);

function validate(uuid) {
  return typeof uuid === 'string' && _regex_js__WEBPACK_IMPORTED_MODULE_0__["default"].test(uuid);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validate);

/***/ }),

/***/ 2935:
/*!********************************************************************************************!*\
  !*** ./src/app/pages/administracao-pagamento/administracao-pagamento.page.scss?ngResource ***!
  \********************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZG1pbmlzdHJhY2FvLXBhZ2FtZW50by5wYWdlLnNjc3MifQ== */";

/***/ }),

/***/ 5176:
/*!********************************************************************************************************************!*\
  !*** ./src/app/shared/components/fluxo-pagamento-module/eventos/evento-main/evento-main.component.scss?ngResource ***!
  \********************************************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJldmVudG8tbWFpbi5jb21wb25lbnQuc2NzcyJ9 */";

/***/ }),

/***/ 96202:
/*!********************************************************************************************************************************!*\
  !*** ./src/app/shared/components/fluxo-pagamento-module/operacoes/operacoes-create/operacoes-create.component.scss?ngResource ***!
  \********************************************************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJvcGVyYWNvZXMtY3JlYXRlLmNvbXBvbmVudC5zY3NzIn0= */";

/***/ }),

/***/ 5685:
/*!********************************************************************************************************************************!*\
  !*** ./src/app/shared/components/fluxo-pagamento-module/operacoes/operacoes-detail/operacoes-detail.component.scss?ngResource ***!
  \********************************************************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJvcGVyYWNvZXMtZGV0YWlsLmNvbXBvbmVudC5zY3NzIn0= */";

/***/ }),

/***/ 78564:
/*!****************************************************************************************************************************!*\
  !*** ./src/app/shared/components/fluxo-pagamento-module/operacoes/operacoes-main/operacoes-main.component.scss?ngResource ***!
  \****************************************************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJvcGVyYWNvZXMtbWFpbi5jb21wb25lbnQuc2NzcyJ9 */";

/***/ }),

/***/ 86182:
/*!********************************************************************************************!*\
  !*** ./src/app/pages/administracao-pagamento/administracao-pagamento.page.html?ngResource ***!
  \********************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>ADM. Pagamentos</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content appScrollTheme>\n  <br />\n  <ion-segment class=\"background-segment\" [(ngModel)]=\"currentTab\" [ngModelOptions]=\"{standalone: true}\"\n    (ionChange)=\"changeTab($event)\">\n    <ion-segment-button style=\"margin-left: 5px; max-width: 200px\" layout=\"icon-start\" value=\"pagamentos\">\n      <ion-icon style=\"font-size: 1.2em\" name=\"cash-outline\"></ion-icon>\n      <ion-label text-wrap class=\"wrap-text\" style=\"font-size: 1.1em\">\n        Pagamentos\n      </ion-label>\n    </ion-segment-button>\n    <ion-segment-button style=\"margin-left: 5px; max-width: 200px\" layout=\"icon-start\" value=\"solicitacoes\">\n      <ion-icon style=\"font-size: 1.2em\" name=\"sync-outline\"></ion-icon>\n      <ion-label text-wrap class=\"wrap-text\" style=\"font-size: 1.1em\">\n        Solicitações\n      </ion-label>\n    </ion-segment-button>\n  </ion-segment>\n  <br />\n  <ion-segment class=\"background-segment\" [(ngModel)]=\"currentTab\" [ngModelOptions]=\"{standalone: true}\"\n    (ionChange)=\"changeTab($event)\">\n    <ion-segment-button style=\"margin-left: 5px; max-width: 200px\" layout=\"icon-start\" value=\"operacoes\">\n      <ion-icon style=\"font-size: 1.2em\" name=\"shuffle-outline\"></ion-icon>\n      <ion-label text-wrap class=\"wrap-text\" style=\"font-size: 1.1em\">\n        Workflow\n      </ion-label>\n    </ion-segment-button>\n    <!--\n    <ion-segment-button style=\"margin-left: 5px; max-width: 200px\" layout=\"icon-start\" value=\"eventos\">\n      <ion-icon style=\"font-size: 1.2em\" name=\"duplicate-outline\"></ion-icon>\n      <ion-label text-wrap class=\"wrap-text\" style=\"font-size: 1.1em\">\n        Eventos\n      </ion-label>\n    </ion-segment-button>\n    -->\n  </ion-segment>\n  <br />\n\n  <div class=\"wall-background h-screen\">\n    <ng-container *ngIf=\"currentTab === 'pagamentos'\">\n      <div style=\"max-width: 95%; margin: auto\">\n        <app-pagamento-main></app-pagamento-main>\n      </div>\n    </ng-container>\n    <ng-container *ngIf=\"currentTab === 'solicitacoes'\">\n      <div style=\"max-width: 95%; margin: auto\">\n        <app-solicitacao-main></app-solicitacao-main>\n      </div>\n    </ng-container>\n\n    <ng-container *ngIf=\"currentTab === 'operacoes'\">\n      <div style=\"max-width: 95%; margin: auto\">\n        <app-operacoes-main></app-operacoes-main>\n      </div>\n    </ng-container>\n    <ng-container *ngIf=\"currentTab === 'eventos'\">\n      <div style=\"max-width: 95%; margin: auto\">\n        <app-evento-main></app-evento-main>\n      </div>\n    </ng-container>\n  </div>\n\n</ion-content>";

/***/ }),

/***/ 26311:
/*!********************************************************************************************************************!*\
  !*** ./src/app/shared/components/fluxo-pagamento-module/eventos/evento-main/evento-main.component.html?ngResource ***!
  \********************************************************************************************************************/
/***/ ((module) => {

module.exports = "<p>\n  TODO -> Deve ser igual à ADM. Financeira: Pagamentos, Transações e etc...\n</p>\n";

/***/ }),

/***/ 34750:
/*!********************************************************************************************************************************!*\
  !*** ./src/app/shared/components/fluxo-pagamento-module/operacoes/operacoes-create/operacoes-create.component.html?ngResource ***!
  \********************************************************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-content appScrollTheme>\n\n  <div class=\"surface-50 px-4 py-4\">\n    <div class=\"text-900 font-medium text-3xl mb-5\">{{ configuracaoAtual?.tipo_operacao?.nome || tipoOperacaoNome }}\n    </div>\n    <div class=\"grid -mr-3 -ml-3\">\n      <div class=\"col-12 p-3\">\n        <div class=\"px-0 py-4 lg:px-4 surface-card border-round shadow-2\">\n\n          <div id=\"niveis-container\" class=\"flex\">\n            <div class=\"ml-0 lg:ml-5 p-2 flex-auto\">\n              <div class=\"mb-3\">\n                <span class=\"text-900 text-xl block ml-2 text-center\">Versão: {{ getVersaoAtual() }}</span>\n              </div>\n              <div class=\"grid flex-column lg:flex-row\">\n                <div *ngFor=\"let n of niveis_aprovacao; let i = index\" class=\"col lg:col-4 p-4\">\n                  <div class=\"flex flex-column border-round border-1 text-center border-50 p-4  hover:border-primary \n                    transition-duration-150\">\n                    <div class=\"text-center mb-3\">\n                      <span class=\"text-900 text-xl font-medium\">Nível: {{ i+1 }}</span>\n                    </div>\n                    <div class=\"inline-block text-600 mb-3\">\n                      Perfil: {{ n.perfil_aprovador?.nome || 'N.A' }}\n                    </div>\n                    <div class=\"inline-block text-600 mb-3\">\n                      Cargo: {{ n.cargo_aprovador?.nome || 'N.A' }}\n                    </div>\n                    <div class=\"flex justify-content-between my-3\">\n                      <span class=\"text-600 font-medium cursor-pointer hover:text-pink-800\"\n                        (click)=\"deleteNivel(n, i)\"><i class=\"pi pi-times mr-2\"></i>Deletar</span>\n                      <span class=\"text-600 font-medium cursor-pointer hover:text-blue-800\" (click)=\"editNivel(n)\"><i\n                          class=\"pi pi-pencil mr-2\"></i>Editar</span>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"col-12 lg:col-3 p-3\">\n                  <div class=\"flex h-full flex-column justify-content-center align-items-center py-5 lg:py-0 \n                    border-round border-1 surface-border surface-100 cursor-pointer hover:border-primary \n                    transition-duration-150\" (click)=\"showDialog = true\"\n                    style=\"min-height: 220px;\">\n                    <span\n                      class=\"text-600 border-circle border-2 w-2rem h-2rem flex align-items-center justify-content-center\"><i\n                        class=\"pi pi-fw pi-plus\"></i></span>\n                    <span class=\"text-600 mt-3\">Novo nível</span>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"flex justify-content-between mx-2\">\n            <button pButton pRipple class=\"p-button-outlined mt-3 \" (click)=\"fechar()\" label=\"Fechar\"></button>\n            <button pButton pRipple class=\"mt-3 \" [disabled]=\"false\" (click)=\"atualizar()\" label=\"Atualizar\"></button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n</ion-content>\n\n\n<p-dialog *ngIf=\"cargos && perfis\" [(visible)]=\"showDialog\" [resizable]=\"false\" [draggable]=\"false\" [modal]=\"true\"\n  [breakpoints]=\"{'960px': '75vw', '640px': '100vw'}\" [style]=\"{width: '40vw', height: '80%'}\"\n  (onHide)=\"closeDialog($event)\">\n  <ng-template pTemplate=\"header\">\n    <div class=\"flex align-items-center\">\n      <div class=\"text-900 font-medium mb-3 text-xl\">Qual perfil/cargo pode aprovar?</div>\n    </div>\n  </ng-template>\n\n  <div class=\"grid formgrid p-fluid\">\n    <div class=\"field mb-4 col-12 md:col-6\">\n      <label for=\"custo\" class=\"font-medium text-900\">Selecione um perfil:</label>\n      <p-dropdown id=\"perfil\" #drop_perfil [options]=\"perfis.data\" optionLabel=\"nome\" [filter]=\"true\"\n        placeholder=\"Selecione um perfil\" [virtualScroll]=\"true\" [virtualScrollItemSize]=\"38\" [lazy]=\"true\"\n        [virtualScrollOptions]=\"{ showLoader: true, loading: loading, delay: 250 }\" (onLazyLoad)=\"paginarPerfil($event)\"\n        (onFilter)=\"onPerfilFilter($event)\" (onFocus)=\"blurPerfil($event, drop_perfil)\" [showClear]=\"true\"\n        (onChange)=\"changePerfil($event)\" [(ngModel)]=\"selectedPerfil\" [ngModelOptions]=\"{standalone: true}\">\n        <ng-template pTemplate=\"loader\" let-options=\"options\">\n          <div class=\"flex align-items-center py-2 px-3\" style=\"height: 38px\">\n            <p-skeleton [width]=\"options.even ? '60%' : '50%'\" height=\"1rem\"></p-skeleton>\n          </div>\n        </ng-template>\n      </p-dropdown>\n    </div>\n\n    <div class=\"field mb-4 col-12 md:col-6\">\n      <label for=\"custo\" class=\"font-medium text-900\">Selecione um cargo:</label>\n      <p-dropdown id=\"cargo\" #drop_cargo [options]=\"cargos.data\" optionLabel=\"nome\" [filter]=\"true\"\n        placeholder=\"Selecione um cargo\" [virtualScroll]=\"true\" [virtualScrollItemSize]=\"38\" [lazy]=\"true\"\n        [virtualScrollOptions]=\"{ showLoader: true, loading: loading, delay: 250 }\" (onLazyLoad)=\"paginarCargo($event)\"\n        (onFilter)=\"onCargoFilter($event)\" (onFocus)=\"blurCargo($event, drop_cargo)\" (onChange)=\"changeCargo($event)\"\n        [(ngModel)]=\"selectedCargo\" [ngModelOptions]=\"{standalone: true}\" [showClear]=\"true\">\n        <ng-template pTemplate=\"loader\" let-options=\"options\">\n          <div class=\"flex align-items-center py-2 px-3\" style=\"height: 38px\">\n            <p-skeleton [width]=\"options.even ? '60%' : '50%'\" height=\"1rem\"></p-skeleton>\n          </div>\n        </ng-template>\n      </p-dropdown>\n    </div>\n\n  </div>\n\n  <ng-template pTemplate=\"footer\">\n    <div class=\"flex justify-content-end mt-3\">\n      <button pButton pRipple label=\"Salvar\" (click)=\"salvarNivel()\" [disabled]=\"disableSalvarNivelBtn()\"></button>\n    </div>\n  </ng-template>\n</p-dialog>\n\n\n<p-confirmDialog acceptLabel=\"Sim\" rejectLabel=\"Não\" [style]=\"{width: '50vw'}\" [baseZIndex]=\"10000\"\n  rejectButtonStyleClass=\"p-button-text\"></p-confirmDialog>";

/***/ }),

/***/ 71208:
/*!********************************************************************************************************************************!*\
  !*** ./src/app/shared/components/fluxo-pagamento-module/operacoes/operacoes-detail/operacoes-detail.component.html?ngResource ***!
  \********************************************************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-content appScrollTheme>\n\n  <div class=\"surface-50 px-4 py-4\">\n    <div class=\"text-900 font-medium text-3xl mb-5\">{{ configuracaoAtual.tipo_operacao.nome }}</div>\n    <div class=\"grid -mr-3 -ml-3\">\n      <div class=\"col-12 p-3\">\n        <div class=\"px-0 py-4 lg:px-4 surface-card border-round shadow-2\">\n\n          <div id=\"user-container\" class=\"flex\">\n            <div class=\"ml-0 lg:ml-5 p-2 flex-auto\">\n              <div class=\"mb-3\">\n                <span class=\"text-900 text-xl block ml-2\">Configurado por</span>\n              </div>\n              <div class=\"p-2 flex flex-row  \">\n                <img [src]=\"setUserImage(configuracaoAtual.user_registrou)\"\n                  class=\"w-8rem h-8rem mb-3 lg:mb-0 flex-shrink-0 border-circle border-2 border-primary\"\n                  alt=\"configuracaoAtual.user_registrou.nome\" />\n                <div class=\"flex-auto ml-3\">\n                  <div class=\"flex align-items-center justify-content-between mb-3\">\n                    <span class=\"text-900 font-medium\">{{ configuracaoAtual.user_registrou.nome }}</span>\n                  </div>\n                  <div class=\"text-600 text-sm mb-3\">Perfil de acesso: {{ configuracaoAtual.user_registrou.perfil?.nome || 'Sem perfil associado'\n                    }}</div>\n                  <div class=\"text-600 text-sm mb-3\">Cargo: {{ configuracaoAtual.user_registrou.cargo?.nome || 'Sem cargo associado' }}</div>\n                  <div class=\"text-600 text-sm mb-3\">E-mail: {{ configuracaoAtual.user_registrou.email }}</div>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"surface-border border-top-1 opacity-50 mb-4 col-12\"></div>\n\n          <div id=\"niveis-container\" class=\"flex\">\n            <div class=\"ml-0 lg:ml-5 p-2 flex-auto\">\n              <div class=\"mb-3\">\n                <span class=\"text-900 text-xl block ml-2 text-center\">Versão: {{ configuracaoAtual.versao }}</span>\n              </div>\n              <div class=\"grid flex-column lg:flex-row\">\n                <div *ngFor=\"let n of configuracaoAtual.niveis_aprovacao\" class=\"col lg:col-4 p-4\">\n                  <div\n                    class=\"flex flex-column text-center border-round border-1 p-4 border-primary transition-duration-150\">\n                    <div class=\"mb-3 \">\n                      <span class=\"text-900 text-xl font-medium \">Nível: {{ n.ordem }}</span>\n                    </div>\n                    <div class=\"inline-block text-600 mb-3\">\n                      Perfil: {{ n.perfil_aprovador?.nome || 'N.A' }}\n                    </div>\n                    <div class=\"inline-block text-600 mb-3\">\n                      Cargo: {{ n.cargo_aprovador?.nome || 'N.A' }}\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n\n        </div>\n      </div>\n    </div>\n  </div>\n\n</ion-content>\n\n\n<ion-footer>\n  <ion-toolbar>\n    <ion-button expand=\"full\" color=\"danger\" (click)=\"fechar()\">Fechar</ion-button>\n  </ion-toolbar>\n</ion-footer>";

/***/ }),

/***/ 15196:
/*!****************************************************************************************************************************!*\
  !*** ./src/app/shared/components/fluxo-pagamento-module/operacoes/operacoes-main/operacoes-main.component.html?ngResource ***!
  \****************************************************************************************************************************/
/***/ ((module) => {

module.exports = "<br>\n<div class=\"card main-view\">\n  <p-dataView *ngIf=\"operacoes\" emptyMessage=\"Nada encontrado, experimente escolher outro filtro\" class=\"data-container\"\n    #dv [lazy]=\"true\" [value]=\"operacoes.data\" [paginator]=\"true\" [rows]=\"operacoes.meta.take\"\n    [totalRecords]=\"operacoes.meta.itemCount\" [pageLinks]=\"operacoes.meta.pageCount\" (onLazyLoad)=\"paginar($event)\"\n    filterBy=\"nome\" layout=\"list\">\n    <ng-template pTemplate=\"header\">\n      <div class=\"flex flex-column md:flex-row md:justify-content-center\">\n        <span class=\"p-input-icon-right mb-2 md:mb-0 \">\n          <i class=\"pi pi-search cursor-pointer text-primary\" (click)=\"search()\"></i>\n          <input class=\"w-full\" type=\"search\" pInputText [(ngModel)]=\"searchedOperacao\" [ngModelOptions]=\"{standalone: true}\"\n            placeholder=\"Buscar \" (keyup.enter)=\"search()\">\n        </span>\n      </div>\n    </ng-template>\n\n    <ng-template let-data pTemplate=\"listItem\">\n      <div *ngIf=\"operacoes\" #templateGrid class=\"col-12\">\n        <div class=\"data-list-item\">\n          <div class=\"data-list-detail\">\n            <div class=\"data-name\">Operação: {{ data.nome }}</div>\n            <div class=\"mt-3\">{{ data.descricao }}</div>\n          </div>\n          <div class=\"data-list-action\">\n            <p-button icon=\"pi pi-search\" label=\"Detalhar\" (click)=\"detalhar(data)\">\n            </p-button>\n\n            <button pButton type=\"button\" class=\"p-button-outlined\" icon=\"pi pi-pencil\" label=\"Atualizar\"\n              (click)=\"createNew(data)\">\n            </button>\n          </div>\n        </div>\n      </div>\n    </ng-template>\n  </p-dataView>\n</div>\n\n\n<p-confirmDialog [style]=\"{width: '50vw'}\" [baseZIndex]=\"10000\" rejectButtonStyleClass=\"p-button-text\">\n</p-confirmDialog>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_administracao-pagamento_administracao-pagamento_module_ts.js.map