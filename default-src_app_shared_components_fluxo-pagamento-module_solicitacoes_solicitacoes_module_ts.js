"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["default-src_app_shared_components_fluxo-pagamento-module_solicitacoes_solicitacoes_module_ts"],{

/***/ 70303:
/*!***********************************************************************************************************!*\
  !*** ./src/app/shared/components/fluxo-pagamento-module/eventos/evento-detail/evento-detail.component.ts ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EventoDetailComponent": () => (/* binding */ EventoDetailComponent)
/* harmony export */ });
/* harmony import */ var _home_m4estro_Documentos_Code_Neg_cios_StandIO_Conds_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _evento_detail_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./evento-detail.component.html?ngResource */ 63417);
/* harmony import */ var _evento_detail_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./evento-detail.component.scss?ngResource */ 66179);
/* harmony import */ var _constants_page_constant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../../constants/page.constant */ 59136);
/* harmony import */ var _services_fluxo_pagamentos_eventos_aprovacao_evento_aprovacao_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../../services/fluxo-pagamentos/eventos-aprovacao/evento-aprovacao.service */ 3857);
/* harmony import */ var _services_toast_toast_message_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../../services/toast/toast-message.service */ 12973);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 26078);










let EventoDetailComponent = class EventoDetailComponent {
  constructor(modal, toastMessageService, eventoAprovacaoService) {
    this.modal = modal;
    this.toastMessageService = toastMessageService;
    this.eventoAprovacaoService = eventoAprovacaoService;
    this.eventos = [];
    this.hasUpdate = false;
    this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subscription();
  }
  ngOnInit() {
    this.loadEventosBySolicitacaoId();
  }
  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
  loadEventosBySolicitacaoId(page = 1) {
    this.eventoAprovacaoService.list({
      solicitacao_id: this.solicitacao_id
    }, {
      order: _constants_page_constant__WEBPACK_IMPORTED_MODULE_3__.PageOrder.ASC,
      page,
      take: 50
    }).subscribe({
      next: data => {
        this.eventos = data.data;
      }
    });
  }
  selectEvento(evento) {
    this.selectedEvento = evento;
  }
  shouldGlow(evento) {
    if (!this.selectedEvento) {
      return false;
    }
    const result = this.selectedEvento.id == evento.id;
    return result;
  }
  fechar() {
    var _this = this;
    return (0,_home_m4estro_Documentos_Code_Neg_cios_StandIO_Conds_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this.modal.dismiss(_this.hasUpdate);
    })();
  }
};
EventoDetailComponent.ctorParameters = () => [{
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ModalController
}, {
  type: _services_toast_toast_message_service__WEBPACK_IMPORTED_MODULE_5__.ToastMessageService
}, {
  type: _services_fluxo_pagamentos_eventos_aprovacao_evento_aprovacao_service__WEBPACK_IMPORTED_MODULE_4__.EventoAprovacaoService
}];
EventoDetailComponent.propDecorators = {
  solicitacao_id: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Input
  }]
};
EventoDetailComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
  selector: 'app-evento-detail',
  template: _evento_detail_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_evento_detail_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], EventoDetailComponent);


/***/ }),

/***/ 26367:
/*!**************************************************************************************************************************!*\
  !*** ./src/app/shared/components/fluxo-pagamento-module/solicitacoes/solicitacao-create/solicitacao-create.component.ts ***!
  \**************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SolicitacaoCreateComponent": () => (/* binding */ SolicitacaoCreateComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _solicitacao_create_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./solicitacao-create.component.html?ngResource */ 280);
/* harmony import */ var _solicitacao_create_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./solicitacao-create.component.scss?ngResource */ 87307);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 26078);
/* harmony import */ var _constants_page_constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../../constants/page.constant */ 59136);
/* harmony import */ var _constants_toast_constant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../../constants/toast.constant */ 98739);
/* harmony import */ var _services_toast_toast_message_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../../services/toast/toast-message.service */ 12973);
/* harmony import */ var _shared_services_fluxo_pagamentos_tipos_operacao_saida_tipo_operacao_saida_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../../../shared/services/fluxo-pagamentos/tipos-operacao-saida/tipo-operacao-saida.service */ 32307);
/* harmony import */ var _services_despesa_despesa_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../../../services/despesa/despesa.service */ 18063);
/* harmony import */ var _constants_transacao_constant__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../../../constants/transacao.constant */ 7689);
/* harmony import */ var _services_fluxo_pagamentos_solicitacoes_solicitacao_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../../../../services/fluxo-pagamentos/solicitacoes/solicitacao.service */ 35216);














let SolicitacaoCreateComponent = class SolicitacaoCreateComponent {
    constructor(formBuilder, modal, toastService, tipoOperacaoSaidaService, despesasService, solicitacaoService) {
        this.formBuilder = formBuilder;
        this.modal = modal;
        this.toastService = toastService;
        this.tipoOperacaoSaidaService = tipoOperacaoSaidaService;
        this.despesasService = despesasService;
        this.solicitacaoService = solicitacaoService;
        this.searchedOperacao = '';
        this.showOperacaoDialog = false;
        this.searchedDespesa = '';
        this.showDespesaDialog = false;
        this.enableDespesas = false;
        this.hasUpdate = false;
        this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_9__.Subscription();
    }
    ngOnInit() {
        this.form = this.formBuilder.group({
            custo: [, [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required]],
            operacao: [, [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required]],
            data_vencimento: [, [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required]],
            despesa: [, []],
        });
        this.loadOperacao();
    }
    ngOnDestroy() {
        this.subscriptions.unsubscribe();
    }
    //#region OPERACOES
    loadOperacao(page = 1, dropdown) {
        const sub = this.tipoOperacaoSaidaService.list({ searchedTipoOperacao: this.searchedOperacao }, { order: _constants_page_constant__WEBPACK_IMPORTED_MODULE_2__.PageOrder.ASC, page, take: 10 })
            .subscribe(data => {
            this.operacoes = data;
            if (dropdown) {
                dropdown.show();
            }
            console.log(this.operacoes);
        });
        this.subscriptions.add(sub);
    }
    paginarOperacao(event) {
        this.loadOperacao();
    }
    onOperacaoFilter(event) {
        const filter = event.filter;
        this.searchedOperacao = filter;
    }
    blurOperacao(event, dropdown) {
        this.searchedOperacao = undefined;
        dropdown.filterValue = undefined;
    }
    detailOperacao() {
        this.selectedOperacao = this.form.get('operacao').value;
        if (!this.selectedOperacao) {
            this.toastService.presentToast({
                detalhe: `Selecione uma operação primeiro`,
                titulo: `Seleção necessária`,
                duracao: _constants_toast_constant__WEBPACK_IMPORTED_MODULE_3__.ToastEnum.shortDuration,
                gravidade: _constants_toast_constant__WEBPACK_IMPORTED_MODULE_3__.ToastPrimeSeverityEnum.INFORMACAO,
            });
            return;
        }
        this.toastService.presentInfoOverlay({
            data: this.selectedOperacao.descricao,
            header: 'Operação',
            showHeader: true,
        });
    }
    changeOperacao({ value }) {
        const { tipo_transacao } = value;
        this.selectedDespesa = undefined;
        this.form.get('despesa').setValue(undefined);
        this.form.get('despesa').clearValidators();
        if (tipo_transacao == _constants_transacao_constant__WEBPACK_IMPORTED_MODULE_7__.TipoTransacaoEnum.DESPESA) {
            this.form.get('despesa').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required]);
            this.loadDespesa();
        }
        else {
            this.enableDespesas = false;
            this.despesas = undefined;
        }
        this.form.get('despesa').updateValueAndValidity({ onlySelf: true });
        this.form.updateValueAndValidity();
    }
    //#endregion
    //#region DESPESAS
    loadDespesa(page = 1, dropdown) {
        const sub = this.despesasService.list({ order: _constants_page_constant__WEBPACK_IMPORTED_MODULE_2__.PageOrder.ASC, page, take: 10 })
            .subscribe(data => {
            this.despesas = data;
            this.enableDespesas = true;
            if (dropdown) {
                dropdown.show();
            }
        });
        this.subscriptions.add(sub);
    }
    paginarDespesa(event) {
        this.loadDespesa();
    }
    onDespesaFilter(event) {
        const filter = event.filter;
        this.searchedDespesa = filter;
    }
    blurDespesa(event, dropdown) {
        this.searchedDespesa = undefined;
        dropdown.filterValue = undefined;
    }
    detailDespesa() {
        this.selectedDespesa = this.form.get('despesa').value;
        if (!this.selectedDespesa) {
            this.toastService.presentToast({
                detalhe: `Selecione uma despesa primeiro`,
                titulo: `Seleção necessária`,
                duracao: _constants_toast_constant__WEBPACK_IMPORTED_MODULE_3__.ToastEnum.shortDuration,
                gravidade: _constants_toast_constant__WEBPACK_IMPORTED_MODULE_3__.ToastPrimeSeverityEnum.INFORMACAO,
            });
            return;
        }
        this.toastService.presentInfoOverlay({
            data: this.selectedDespesa.descricao,
            header: 'Despesa',
            showHeader: true,
        });
    }
    //#endregion
    //#region ANEXOS
    anexarContaOriginal(event, fileUpload) {
        //  this.conta_original_id = undefined;
        const file = event.files[0];
        fileUpload.clear();
        this.solicitacaoService.createContaOriginal(file)
            .subscribe({
            next: (data) => {
                const { id: conta_original_id } = data;
                this.conta_original_id = conta_original_id;
                this.toastService.presentToast({
                    detalhe: `Conta original anexada!`,
                    duracao: _constants_toast_constant__WEBPACK_IMPORTED_MODULE_3__.ToastEnum.mediumDuration,
                    gravidade: _constants_toast_constant__WEBPACK_IMPORTED_MODULE_3__.ToastPrimeSeverityEnum.SUCESSO,
                    titulo: `Sucesso!`
                });
            },
        });
    }
    anexarComprovante(event, fileUpload) {
        // this.comprovante_id = undefined;
        const file = event.files[0];
        fileUpload.clear();
        this.solicitacaoService.createComprovante(file)
            .subscribe({
            next: (data) => {
                const { id: comprovante_id } = data;
                this.comprovante_id = comprovante_id;
                this.toastService.presentToast({
                    detalhe: `Comprovante anexado!`,
                    duracao: _constants_toast_constant__WEBPACK_IMPORTED_MODULE_3__.ToastEnum.mediumDuration,
                    gravidade: _constants_toast_constant__WEBPACK_IMPORTED_MODULE_3__.ToastPrimeSeverityEnum.SUCESSO,
                    titulo: `Sucesso!`
                });
            },
        });
    }
    get comprovanteId() {
        return this.comprovante_id;
    }
    get contaOriginalId() {
        return this.conta_original_id;
    }
    //#endregion
    create() {
        const custo = this.form.get('custo').value == null ? undefined : Number(this.form.get('custo').value);
        const data_vencimento = this.form.get('data_vencimento').value == null ? undefined : this.form.get('data_vencimento').value;
        const operacao_id = this.form.get('operacao').value == null ? undefined : this.form.get('operacao').value.id;
        const despesa_id = this.form.get('despesa').value == null ? undefined : this.form.get('despesa').value.id;
        const sub = this.solicitacaoService.create({
            custo,
            data_vencimento,
            operacao_id,
            despesa_id,
            conta_original_id: this.conta_original_id,
            comprovante_id: this.comprovante_id
        })
            .subscribe(data => {
            this.toastService.presentToast({
                detalhe: `Enviado!`,
                titulo: `Sucesso!`,
                gravidade: _constants_toast_constant__WEBPACK_IMPORTED_MODULE_3__.ToastPrimeSeverityEnum.SUCESSO,
                duracao: _constants_toast_constant__WEBPACK_IMPORTED_MODULE_3__.ToastEnum.mediumDuration,
            });
            this.resetForm();
        });
        this.subscriptions.add(sub);
    }
    resetForm() {
        this.form.get('custo').setValue(undefined);
        this.form.get('custo').clearValidators();
        this.form.get('data_vencimento').setValue(undefined);
        this.form.get('data_vencimento').clearValidators();
        this.form.get('operacao').setValue(undefined);
        this.form.get('operacao').clearValidators();
        this.form.get('despesa').setValue(undefined);
        this.form.get('despesa').clearValidators();
        this.enableDespesas = false;
        this.despesas = undefined;
        this.comprovante_id = undefined;
        this.conta_original_id = undefined;
        this.form.get('custo').updateValueAndValidity({ onlySelf: true });
        this.form.get('data_vencimento').updateValueAndValidity({ onlySelf: true });
        this.form.get('operacao').updateValueAndValidity({ onlySelf: true });
        this.form.get('despesa').updateValueAndValidity({ onlySelf: true });
        this.form.updateValueAndValidity();
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
        if (!this.form.valid || !this.conta_original_id) {
            return true;
        }
        return false;
    }
};
SolicitacaoCreateComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_10__.UntypedFormBuilder },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.ModalController },
    { type: _services_toast_toast_message_service__WEBPACK_IMPORTED_MODULE_4__.ToastMessageService },
    { type: _shared_services_fluxo_pagamentos_tipos_operacao_saida_tipo_operacao_saida_service__WEBPACK_IMPORTED_MODULE_5__.TipoOperacaoSaidaService },
    { type: _services_despesa_despesa_service__WEBPACK_IMPORTED_MODULE_6__.DespesaService },
    { type: _services_fluxo_pagamentos_solicitacoes_solicitacao_service__WEBPACK_IMPORTED_MODULE_8__.SolicitacaoService }
];
SolicitacaoCreateComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_13__.Component)({
        selector: 'app-solicitacao-create',
        template: _solicitacao_create_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_solicitacao_create_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], SolicitacaoCreateComponent);



/***/ }),

/***/ 13929:
/*!**************************************************************************************************************************!*\
  !*** ./src/app/shared/components/fluxo-pagamento-module/solicitacoes/solicitacao-detail/solicitacao-detail.component.ts ***!
  \**************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SolicitacaoDetailComponent": () => (/* binding */ SolicitacaoDetailComponent)
/* harmony export */ });
/* harmony import */ var _home_m4estro_Documentos_Code_Neg_cios_StandIO_Conds_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _solicitacao_detail_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./solicitacao-detail.component.html?ngResource */ 19953);
/* harmony import */ var _solicitacao_detail_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./solicitacao-detail.component.scss?ngResource */ 69020);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/api */ 14356);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 26078);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! file-saver */ 65226);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _services_toast_toast_message_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../../services/toast/toast-message.service */ 12973);
/* harmony import */ var _constants_toast_constant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../../constants/toast.constant */ 98739);
/* harmony import */ var _services_fluxo_pagamentos_niveis_aprovacao_nivel_aprovacao_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../../../services/fluxo-pagamentos/niveis-aprovacao/nivel-aprovacao.service */ 38124);
/* harmony import */ var _services_fluxo_pagamentos_solicitacoes_solicitacao_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../../../services/fluxo-pagamentos/solicitacoes/solicitacao.service */ 35216);
/* harmony import */ var _constants_solicitacao_status_constant__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../../../../constants/solicitacao-status.constant */ 69890);














let SolicitacaoDetailComponent = class SolicitacaoDetailComponent {
  constructor(modal, toastMessageService, solicitacaoService, nivelAprovacaoService, confirmationService) {
    this.modal = modal;
    this.toastMessageService = toastMessageService;
    this.solicitacaoService = solicitacaoService;
    this.nivelAprovacaoService = nivelAprovacaoService;
    this.confirmationService = confirmationService;
    this.title = 'Solicitação';
    this.hasUpdate = false;
    this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_9__.Subscription();
  }
  ngOnInit() {
    this.loadAprovadores();
  }
  ngOnDestroy() {
    this.confirmationService.close();
    this.subscriptions.unsubscribe();
  }
  downContaOriginal() {
    const {
      conta_original_url,
      conta_original
    } = this.solicitacao;
    (0,file_saver__WEBPACK_IMPORTED_MODULE_3__.saveAs)(conta_original_url, conta_original);
    this.toastMessageService.presentToast({
      detalhe: 'Baixando a conta',
      duracao: _constants_toast_constant__WEBPACK_IMPORTED_MODULE_5__.ToastEnum.shortDuration,
      gravidade: _constants_toast_constant__WEBPACK_IMPORTED_MODULE_5__.ToastPrimeSeverityEnum.SUCESSO,
      titulo: 'Download em andamento'
    });
  }
  downComprovante() {
    const {
      comprovante_url,
      comprovante
    } = this.solicitacao;
    (0,file_saver__WEBPACK_IMPORTED_MODULE_3__.saveAs)(comprovante_url, comprovante);
    this.toastMessageService.presentToast({
      detalhe: 'Baixando o comprovante',
      duracao: _constants_toast_constant__WEBPACK_IMPORTED_MODULE_5__.ToastEnum.shortDuration,
      gravidade: _constants_toast_constant__WEBPACK_IMPORTED_MODULE_5__.ToastPrimeSeverityEnum.SUCESSO,
      titulo: 'Download em andamento'
    });
  }
  seeSolicitacao() {}
  anexarComprovante(event, fileUpload) {
    const file = event.files[0];
    fileUpload.clear();
    const sub = this.solicitacaoService.createComprovante(file).subscribe({
      next: data => {
        const {
          id: comprovante_id
        } = data;
        this.associarComprovante(this.solicitacao.id, {
          comprovante_id
        });
      }
    });
    this.subscriptions.add(sub);
  }
  associarComprovante(id, {
    comprovante_id
  }) {
    const sub = this.solicitacaoService.associarComprovante(id, {
      comprovante_id
    }).subscribe({
      next: data => {
        this.toastMessageService.presentToast({
          detalhe: `Arquivo anexado!`,
          duracao: _constants_toast_constant__WEBPACK_IMPORTED_MODULE_5__.ToastEnum.mediumDuration,
          gravidade: _constants_toast_constant__WEBPACK_IMPORTED_MODULE_5__.ToastPrimeSeverityEnum.SUCESSO,
          titulo: `Sucesso!`
        });
        this.solicitacao = data;
        this.hasUpdate = true;
      }
    });
    this.subscriptions.add(sub);
  }
  aprovar() {
    this.confirmationService.confirm({
      message: `Deseja prosseguir com a aprovação?`,
      header: `Confirme a aprovação`,
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        const sub = this.solicitacaoService.aprovarSolicitacao(this.solicitacao.id).subscribe({
          next: data => {
            this.toastMessageService.presentToast({
              detalhe: `Solicitação aprovada!`,
              duracao: _constants_toast_constant__WEBPACK_IMPORTED_MODULE_5__.ToastEnum.mediumDuration,
              gravidade: _constants_toast_constant__WEBPACK_IMPORTED_MODULE_5__.ToastPrimeSeverityEnum.SUCESSO,
              titulo: `Sucesso!`
            });
            this.hasUpdate = true;
            this.fechar();
          }
        });
        this.subscriptions.add(sub);
      },
      reject: type => {
        this.toastMessageService.clearToast();
      }
    });
  }
  rejeitar() {
    this.confirmationService.confirm({
      message: `Deseja prosseguir com a rejeição?`,
      header: `Confirme a rejeição`,
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        const sub = this.solicitacaoService.rejeitarSolicitacao(this.solicitacao.id).subscribe({
          next: data => {
            this.toastMessageService.presentToast({
              detalhe: `Solicitação rejeitada!`,
              duracao: _constants_toast_constant__WEBPACK_IMPORTED_MODULE_5__.ToastEnum.mediumDuration,
              gravidade: _constants_toast_constant__WEBPACK_IMPORTED_MODULE_5__.ToastPrimeSeverityEnum.SUCESSO,
              titulo: `Sucesso!`
            });
            this.hasUpdate = true;
            this.fechar();
          }
        });
        this.subscriptions.add(sub);
      },
      reject: type => {
        this.toastMessageService.clearToast();
      }
    });
  }
  loadAprovadores() {
    if (this.solicitacao.status != _constants_solicitacao_status_constant__WEBPACK_IMPORTED_MODULE_8__.SolicitacaoStatusEnum.PENDENTE) {
      return;
    }
    const sub = this.nivelAprovacaoService.findById(this.solicitacao.nivel_atual.id).subscribe({
      next: data => {
        this.nivel_atual = data;
      }
    });
    this.subscriptions.add(sub);
  }
  fechar() {
    var _this = this;
    return (0,_home_m4estro_Documentos_Code_Neg_cios_StandIO_Conds_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this.modal.dismiss(_this.hasUpdate);
    })();
  }
};
SolicitacaoDetailComponent.ctorParameters = () => [{
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.ModalController
}, {
  type: _services_toast_toast_message_service__WEBPACK_IMPORTED_MODULE_4__.ToastMessageService
}, {
  type: _services_fluxo_pagamentos_solicitacoes_solicitacao_service__WEBPACK_IMPORTED_MODULE_7__.SolicitacaoService
}, {
  type: _services_fluxo_pagamentos_niveis_aprovacao_nivel_aprovacao_service__WEBPACK_IMPORTED_MODULE_6__.NivelAprovacaoService
}, {
  type: primeng_api__WEBPACK_IMPORTED_MODULE_11__.ConfirmationService
}];
SolicitacaoDetailComponent.propDecorators = {
  solicitacao: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__.Input
  }]
};
SolicitacaoDetailComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.Component)({
  selector: 'app-solicitacao-detail',
  template: _solicitacao_detail_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_solicitacao_detail_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], SolicitacaoDetailComponent);


/***/ }),

/***/ 51373:
/*!**********************************************************************************************************************!*\
  !*** ./src/app/shared/components/fluxo-pagamento-module/solicitacoes/solicitacao-main/solicitacao-main.component.ts ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SolicitacaoMainComponent": () => (/* binding */ SolicitacaoMainComponent)
/* harmony export */ });
/* harmony import */ var _home_m4estro_Documentos_Code_Neg_cios_StandIO_Conds_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _solicitacao_main_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./solicitacao-main.component.html?ngResource */ 13164);
/* harmony import */ var _solicitacao_main_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./solicitacao-main.component.scss?ngResource */ 33491);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/api */ 14356);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 26078);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! file-saver */ 65226);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _services_toast_toast_message_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../../services/toast/toast-message.service */ 12973);
/* harmony import */ var _constants_toast_constant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../../constants/toast.constant */ 98739);
/* harmony import */ var _constants_page_constant__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../../../constants/page.constant */ 59136);
/* harmony import */ var _solicitacao_detail_solicitacao_detail_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../solicitacao-detail/solicitacao-detail.component */ 13929);
/* harmony import */ var _services_fluxo_pagamentos_solicitacoes_solicitacao_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../../../../services/fluxo-pagamentos/solicitacoes/solicitacao.service */ 35216);
/* harmony import */ var _constants_solicitacao_status_constant__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../../../../constants/solicitacao-status.constant */ 69890);
/* harmony import */ var _eventos_evento_detail_evento_detail_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../eventos/evento-detail/evento-detail.component */ 70303);

















let SolicitacaoMainComponent = class SolicitacaoMainComponent {
  constructor(modal, toastMessageService, solicitacaoService, confirmationService, router) {
    this.modal = modal;
    this.toastMessageService = toastMessageService;
    this.solicitacaoService = solicitacaoService;
    this.confirmationService = confirmationService;
    this.router = router;
    this.searchedSolicitacao = '';
    this.statusOptions = [];
    this.currentPage = 1;
    this.searchedOperacao = '';
    this.editMenuItens = [{
      label: 'Opções',
      items: [{
        label: 'Detalhar',
        icon: 'pi pi-search',
        command: () => this.detalhar(this.selectedSolicitacao)
      }, {
        label: 'Histórico',
        icon: 'pi pi-book',
        command: () => this.openHistorico(this.selectedSolicitacao)
      }, {
        label: 'Notificar Aprovadores',
        icon: 'pi pi-bell',
        command: () => this.sendNotification(this.selectedSolicitacao)
      }]
    }];
    this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_11__.Subscription();
  }
  ngOnInit() {
    this.statusOptions = [..._constants_solicitacao_status_constant__WEBPACK_IMPORTED_MODULE_9__.SolicitacaoStatus];
    this.selectedStatus = _constants_solicitacao_status_constant__WEBPACK_IMPORTED_MODULE_9__.SolicitacaoStatusEnum.PENDENTE;
    this.loadSolicitacao();
  }
  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
  loadSolicitacao(page = 1, dropdown) {
    const sub = this.solicitacaoService.list({
      searchedOperacao: this.searchedOperacao,
      status: this.selectedStatus,
      searchedSolicitacao: this.searchedSolicitacao
    }, {
      order: _constants_page_constant__WEBPACK_IMPORTED_MODULE_6__.PageOrder.ASC,
      page,
      take: 10
    }).subscribe(data => {
      this.solicitacoes = data;
      if (dropdown) {
        dropdown.show();
      }
    });
    this.subscriptions.add(sub);
  }
  changeFiltro(event) {
    this.loadSolicitacao();
  }
  clearFilter() {
    this.loadSolicitacao(1);
  }
  search() {
    this.loadSolicitacao(1);
  }
  paginar(event) {
    const {
      first,
      rows
    } = event;
    const page = Number(Number(first) / Number(rows) + 1);
    if (page != this.currentPage) {
      this.currentPage = page;
      this.loadSolicitacao(page);
    }
  }
  downContaOriginal({
    conta_original_url,
    conta_original
  }) {
    file_saver__WEBPACK_IMPORTED_MODULE_3__(conta_original_url, conta_original);
    this.toastMessageService.presentToast({
      detalhe: 'Baixando a conta',
      duracao: _constants_toast_constant__WEBPACK_IMPORTED_MODULE_5__.ToastEnum.shortDuration,
      gravidade: _constants_toast_constant__WEBPACK_IMPORTED_MODULE_5__.ToastPrimeSeverityEnum.SUCESSO,
      titulo: 'Download em andamento'
    });
  }
  downComprovante({
    comprovante_url,
    comprovante
  }) {
    file_saver__WEBPACK_IMPORTED_MODULE_3__(comprovante_url, comprovante);
    this.toastMessageService.presentToast({
      detalhe: 'Baixando o comprovante',
      duracao: _constants_toast_constant__WEBPACK_IMPORTED_MODULE_5__.ToastEnum.shortDuration,
      gravidade: _constants_toast_constant__WEBPACK_IMPORTED_MODULE_5__.ToastPrimeSeverityEnum.SUCESSO,
      titulo: 'Download em andamento'
    });
  }
  sendNotification({
    id
  }) {
    this.confirmationService.confirm({
      message: `Deseja mesmo notificar?`,
      header: `O sistema já notifica automaticamente`,
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        const sub = this.solicitacaoService.notificarAprovadores(id).subscribe(response => {
          this.toastMessageService.presentToast({
            titulo: `Enviado!`,
            detalhe: `Os aprovadores serão notificados`,
            duracao: _constants_toast_constant__WEBPACK_IMPORTED_MODULE_5__.ToastEnum.shortDuration,
            gravidade: _constants_toast_constant__WEBPACK_IMPORTED_MODULE_5__.ToastPrimeSeverityEnum.INFORMACAO
          });
        });
        this.subscriptions.add(sub);
      },
      reject: type => {
        this.toastMessageService.clearToast();
      }
    });
  }
  createNew() {
    var _this = this;
    return (0,_home_m4estro_Documentos_Code_Neg_cios_StandIO_Conds_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.router.navigateByUrl('fluxo-pagamento');
    })();
  }
  detalhar(solicitacao) {
    this.showModal(_solicitacao_detail_solicitacao_detail_component__WEBPACK_IMPORTED_MODULE_7__.SolicitacaoDetailComponent, {
      solicitacao
    }, ['modal-size-80']);
  }
  openHistorico({
    id
  }) {
    this.showModal(_eventos_evento_detail_evento_detail_component__WEBPACK_IMPORTED_MODULE_10__.EventoDetailComponent, {
      solicitacao_id: id
    }, ['modal-size-80', 'modal-transparent']);
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
          _this2.loadSolicitacao(_this2.currentPage);
          if (role == 'create') {
            _this2.toastMessageService.presentToast({
              detalhe: `Pagamento criado com sucesso!`,
              titulo: `Sucesso!`,
              duracao: _constants_toast_constant__WEBPACK_IMPORTED_MODULE_5__.ToastEnum.mediumDuration,
              gravidade: _constants_toast_constant__WEBPACK_IMPORTED_MODULE_5__.ToastPrimeSeverityEnum.SUCESSO
            });
          }
        }
      });
      return yield modal.present();
    })();
  }
};
SolicitacaoMainComponent.ctorParameters = () => [{
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.ModalController
}, {
  type: _services_toast_toast_message_service__WEBPACK_IMPORTED_MODULE_4__.ToastMessageService
}, {
  type: _services_fluxo_pagamentos_solicitacoes_solicitacao_service__WEBPACK_IMPORTED_MODULE_8__.SolicitacaoService
}, {
  type: primeng_api__WEBPACK_IMPORTED_MODULE_13__.ConfirmationService
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_14__.Router
}];
SolicitacaoMainComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_15__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_16__.Component)({
  selector: 'app-solicitacao-main',
  template: _solicitacao_main_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_solicitacao_main_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], SolicitacaoMainComponent);


/***/ }),

/***/ 62380:
/*!**********************************************************************************************!*\
  !*** ./src/app/shared/components/fluxo-pagamento-module/solicitacoes/solicitacoes.module.ts ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SolicitacoesModule": () => (/* binding */ SolicitacoesModule)
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
/* harmony import */ var _solicitacao_create_solicitacao_create_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./solicitacao-create/solicitacao-create.component */ 26367);
/* harmony import */ var _solicitacao_main_solicitacao_main_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./solicitacao-main/solicitacao-main.component */ 51373);
/* harmony import */ var _solicitacao_detail_solicitacao_detail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./solicitacao-detail/solicitacao-detail.component */ 13929);
































let SolicitacoesModule = class SolicitacoesModule {
};
SolicitacoesModule = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.NgModule)({
        declarations: [_solicitacao_create_solicitacao_create_component__WEBPACK_IMPORTED_MODULE_3__.SolicitacaoCreateComponent, _solicitacao_main_solicitacao_main_component__WEBPACK_IMPORTED_MODULE_4__.SolicitacaoMainComponent, _solicitacao_detail_solicitacao_detail_component__WEBPACK_IMPORTED_MODULE_5__.SolicitacaoDetailComponent],
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
        exports: [_solicitacao_create_solicitacao_create_component__WEBPACK_IMPORTED_MODULE_3__.SolicitacaoCreateComponent, _solicitacao_main_solicitacao_main_component__WEBPACK_IMPORTED_MODULE_4__.SolicitacaoMainComponent, _solicitacao_detail_solicitacao_detail_component__WEBPACK_IMPORTED_MODULE_5__.SolicitacaoDetailComponent],
    })
], SolicitacoesModule);



/***/ }),

/***/ 69890:
/*!*****************************************************************!*\
  !*** ./src/app/shared/constants/solicitacao-status.constant.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SolicitacaoStatus": () => (/* binding */ SolicitacaoStatus),
/* harmony export */   "SolicitacaoStatusEnum": () => (/* binding */ SolicitacaoStatusEnum)
/* harmony export */ });
var SolicitacaoStatusEnum;
(function (SolicitacaoStatusEnum) {
    SolicitacaoStatusEnum["PENDENTE"] = "PENDENTE";
    SolicitacaoStatusEnum["APROVADA"] = "APROVADA";
    SolicitacaoStatusEnum["REJEITADA"] = "REJEITADA";
    SolicitacaoStatusEnum["CANCELADA"] = "CANCELADA";
})(SolicitacaoStatusEnum || (SolicitacaoStatusEnum = {}));
const SolicitacaoStatus = [
    {
        label: 'Pendente',
        value: SolicitacaoStatusEnum.PENDENTE,
    },
    {
        label: 'Aprovada',
        value: SolicitacaoStatusEnum.APROVADA,
    },
    {
        label: 'Rejeitada',
        value: SolicitacaoStatusEnum.REJEITADA,
    },
    {
        label: 'Cancelada',
        value: SolicitacaoStatusEnum.CANCELADA,
    },
];


/***/ }),

/***/ 7689:
/*!********************************************************!*\
  !*** ./src/app/shared/constants/transacao.constant.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TipoCash": () => (/* binding */ TipoCash),
/* harmony export */   "TipoCashEnum": () => (/* binding */ TipoCashEnum),
/* harmony export */   "TipoTransacao": () => (/* binding */ TipoTransacao),
/* harmony export */   "TipoTransacaoEnum": () => (/* binding */ TipoTransacaoEnum)
/* harmony export */ });
var TipoCashEnum;
(function (TipoCashEnum) {
    TipoCashEnum["CASH_IN"] = "CASH_IN";
    TipoCashEnum["CASH_OUT"] = "CASH_OUT";
})(TipoCashEnum || (TipoCashEnum = {}));
;
var TipoTransacaoEnum;
(function (TipoTransacaoEnum) {
    TipoTransacaoEnum["ASSINATURA"] = "ASSINATURA";
    TipoTransacaoEnum["PRODUTO"] = "PRODUTO";
    TipoTransacaoEnum["SERVICO"] = "SERVICO";
    TipoTransacaoEnum["DEVOLUCAO"] = "DEVOLUCAO";
    TipoTransacaoEnum["INSUMO"] = "INSUMO";
    TipoTransacaoEnum["DESPESA"] = "DESPESA";
    TipoTransacaoEnum["FUNCIONARIO"] = "FUNCIONARIO";
    TipoTransacaoEnum["TERCEIROS"] = "TERCEIROS";
    TipoTransacaoEnum["OUTROS"] = "OUTROS";
})(TipoTransacaoEnum || (TipoTransacaoEnum = {}));
;
const TipoCash = [
    { label: "Cash In (Entrada)", value: TipoCashEnum.CASH_IN },
    { label: "Cash Out (Saída)", value: TipoCashEnum.CASH_OUT },
];
const TipoTransacao = [
    { label: "Assinatura", value: TipoTransacaoEnum.ASSINATURA },
    { label: "Produto", value: TipoTransacaoEnum.PRODUTO },
    { label: "Serviço", value: TipoTransacaoEnum.SERVICO },
    { label: "Devolução", value: TipoTransacaoEnum.DEVOLUCAO },
    { label: "Insumo", value: TipoTransacaoEnum.INSUMO },
    { label: "Despesa", value: TipoTransacaoEnum.DESPESA },
    { label: "Funcionário", value: TipoTransacaoEnum.FUNCIONARIO },
    { label: "Terceiros", value: TipoTransacaoEnum.TERCEIROS },
    { label: "Outros", value: TipoTransacaoEnum.OUTROS },
];


/***/ }),

/***/ 18063:
/*!************************************************************!*\
  !*** ./src/app/shared/services/despesa/despesa.service.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DespesaService": () => (/* binding */ DespesaService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _config_api_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../config/api.config */ 99038);
/* harmony import */ var _interfaces_others_pageable_dto__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../interfaces/others/pageable.dto */ 40199);
/* harmony import */ var _utils_PageUtils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/PageUtils */ 55583);






let DespesaService = class DespesaService {
    constructor(http) {
        this.http = http;
    }
    list(pageOptions = new _interfaces_others_pageable_dto__WEBPACK_IMPORTED_MODULE_1__.PageOptionsDto()) {
        let params = _utils_PageUtils__WEBPACK_IMPORTED_MODULE_2__.PageUtils.getPageOptionsParams(pageOptions);
        return this.http.get(`${_config_api_config__WEBPACK_IMPORTED_MODULE_0__.API_CONFIG.baseURL}/despesas`, {
            responseType: 'json',
            params,
        });
    }
    create(newDespesa) {
        return this.http.post(`${_config_api_config__WEBPACK_IMPORTED_MODULE_0__.API_CONFIG.baseURL}/despesas`, newDespesa, {
            responseType: 'json',
        });
    }
    update(updatedDespesa, despesa_id) {
        return this.http.put(`${_config_api_config__WEBPACK_IMPORTED_MODULE_0__.API_CONFIG.baseURL}/despesas/${despesa_id}`, updatedDespesa, {
            responseType: 'json',
        });
    }
};
DespesaService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient }
];
DespesaService = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable)({
        providedIn: 'root'
    })
], DespesaService);



/***/ }),

/***/ 3857:
/*!************************************************************************************************!*\
  !*** ./src/app/shared/services/fluxo-pagamentos/eventos-aprovacao/evento-aprovacao.service.ts ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EventoAprovacaoService": () => (/* binding */ EventoAprovacaoService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _interfaces_others_pageable_dto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../interfaces/others/pageable.dto */ 40199);
/* harmony import */ var _utils_PageUtils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/PageUtils */ 55583);
/* harmony import */ var _config_api_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../config/api.config */ 99038);






let EventoAprovacaoService = class EventoAprovacaoService {
    constructor(http) {
        this.http = http;
    }
    findById(id) {
        return this.http.get(`${_config_api_config__WEBPACK_IMPORTED_MODULE_2__.API_CONFIG.baseURL}/solicitacao-eventos/${id}`, {
            responseType: 'json',
        });
    }
    list(filterDto, pageOptions = new _interfaces_others_pageable_dto__WEBPACK_IMPORTED_MODULE_0__.PageOptionsDto()) {
        let params = _utils_PageUtils__WEBPACK_IMPORTED_MODULE_1__.PageUtils.getPageOptionsParams(pageOptions);
        if (filterDto) {
            if (filterDto.acao) {
                params = params.append('acao', filterDto.acao);
            }
            if (filterDto.aprovadorSearched) {
                params = params.append('aprovadorSearched', filterDto.aprovadorSearched);
            }
            if (filterDto.aprovador_id) {
                params = params.append('aprovador_id', filterDto.aprovador_id);
            }
            if (filterDto.data_evento) {
                params = params.append('data_evento', filterDto.data_evento.toDateString());
            }
            if (filterDto.solicitacao_id) {
                params = params.append('solicitacao_id', filterDto.solicitacao_id);
            }
        }
        return this.http.get(`${_config_api_config__WEBPACK_IMPORTED_MODULE_2__.API_CONFIG.baseURL}/solicitacao-eventos`, {
            responseType: 'json',
            params,
        });
    }
};
EventoAprovacaoService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient }
];
EventoAprovacaoService = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable)({
        providedIn: 'root'
    })
], EventoAprovacaoService);



/***/ }),

/***/ 38124:
/*!**********************************************************************************************!*\
  !*** ./src/app/shared/services/fluxo-pagamentos/niveis-aprovacao/nivel-aprovacao.service.ts ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NivelAprovacaoService": () => (/* binding */ NivelAprovacaoService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _config_api_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../config/api.config */ 99038);




let NivelAprovacaoService = class NivelAprovacaoService {
    constructor(http) {
        this.http = http;
    }
    findById(id) {
        return this.http.get(`${_config_api_config__WEBPACK_IMPORTED_MODULE_0__.API_CONFIG.baseURL}/niveis-aprovacao/${id}`, {
            responseType: 'json',
        });
    }
    listByConfiguracaoId(id) {
        return this.http.get(`${_config_api_config__WEBPACK_IMPORTED_MODULE_0__.API_CONFIG.baseURL}/niveis-aprovacao/configuracao/${id}`, {
            responseType: 'json',
        });
    }
};
NivelAprovacaoService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient }
];
NivelAprovacaoService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], NivelAprovacaoService);



/***/ }),

/***/ 35216:
/*!**************************************************************************************!*\
  !*** ./src/app/shared/services/fluxo-pagamentos/solicitacoes/solicitacao.service.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SolicitacaoService": () => (/* binding */ SolicitacaoService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _interfaces_others_pageable_dto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../interfaces/others/pageable.dto */ 40199);
/* harmony import */ var _utils_PageUtils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/PageUtils */ 55583);
/* harmony import */ var _config_api_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../config/api.config */ 99038);






let SolicitacaoService = class SolicitacaoService {
    constructor(http) {
        this.http = http;
    }
    findById(id) {
        return this.http.get(`${_config_api_config__WEBPACK_IMPORTED_MODULE_2__.API_CONFIG.baseURL}/solicitacoes/${id}`, {
            responseType: 'json',
        });
    }
    list(filterDto, pageOptions = new _interfaces_others_pageable_dto__WEBPACK_IMPORTED_MODULE_0__.PageOptionsDto()) {
        let params = _utils_PageUtils__WEBPACK_IMPORTED_MODULE_1__.PageUtils.getPageOptionsParams(pageOptions);
        if (filterDto) {
            if (filterDto.created_at) {
                params = params.append('created_at', filterDto.created_at.toDateString());
            }
            if (filterDto.max_custo) {
                params = params.append('max_custo', filterDto.max_custo);
            }
            if (filterDto.searchedSolicitacao) {
                params = params.append('searchedSolicitacao', filterDto.searchedSolicitacao);
            }
            if (filterDto.max_data_vencimento) {
                params = params.append('max_data_vencimento', filterDto.max_data_vencimento.toDateString());
            }
            if (filterDto.min_custo) {
                params = params.append('min_custo', filterDto.min_custo);
            }
            if (filterDto.min_data_vencimento) {
                params = params.append('min_data_vencimento', filterDto.min_data_vencimento.toDateString());
            }
            if (filterDto.operacao_id) {
                params = params.append('operacao_id', filterDto.operacao_id);
            }
            if (filterDto.searchedOperacao) {
                params = params.append('searchedOperacao', filterDto.searchedOperacao);
            }
            if (filterDto.searchedSolicitante) {
                params = params.append('searchedSolicitante', filterDto.searchedSolicitante);
            }
            if (filterDto.solicitante_id) {
                params = params.append('solicitante_id', filterDto.solicitante_id);
            }
            if (filterDto.status) {
                params = params.append('status', filterDto.status);
            }
        }
        return this.http.get(`${_config_api_config__WEBPACK_IMPORTED_MODULE_2__.API_CONFIG.baseURL}/solicitacoes`, {
            responseType: 'json',
            params,
        });
    }
    create(dto) {
        return this.http.post(`${_config_api_config__WEBPACK_IMPORTED_MODULE_2__.API_CONFIG.baseURL}/solicitacoes/`, dto, {
            responseType: 'json',
        });
    }
    createComprovante(anexo) {
        const formData = new FormData();
        formData.append('file', anexo);
        return this.http.post(`${_config_api_config__WEBPACK_IMPORTED_MODULE_2__.API_CONFIG.baseURL}/solicitacoes/anexos/comprovantes`, formData, {
            responseType: 'json',
        });
    }
    associarComprovante(id, dto) {
        return this.http.patch(`${_config_api_config__WEBPACK_IMPORTED_MODULE_2__.API_CONFIG.baseURL}/solicitacoes/${id}/anexar/comprovante`, dto, {
            responseType: 'json',
        });
    }
    createContaOriginal(anexo) {
        const formData = new FormData();
        formData.append('file', anexo);
        return this.http.post(`${_config_api_config__WEBPACK_IMPORTED_MODULE_2__.API_CONFIG.baseURL}/solicitacoes/anexos/contas`, formData, {
            responseType: 'json',
        });
    }
    /*
      associarContaOriginal(id: string, dto: PatchSolicitacaoComprovanteDto): Observable<SolicitacaoDto> {
        return this.http.patch<SolicitacaoDto>(
          `${API_CONFIG.baseURL}/solicitacoes/${id}/anexar/contas`,
          dto,
          {
            responseType: 'json',
          });
      }*/
    aprovarSolicitacao(id) {
        return this.http.patch(`${_config_api_config__WEBPACK_IMPORTED_MODULE_2__.API_CONFIG.baseURL}/solicitacoes/${id}/aprovar`, {
            responseType: 'json',
        });
    }
    rejeitarSolicitacao(id) {
        return this.http.patch(`${_config_api_config__WEBPACK_IMPORTED_MODULE_2__.API_CONFIG.baseURL}/solicitacoes/${id}/rejeitar`, {
            responseType: 'json',
        });
    }
    notificarAprovadores(id) {
        return this.http.put(`${_config_api_config__WEBPACK_IMPORTED_MODULE_2__.API_CONFIG.baseURL}/solicitacoes/${id}/notificar`, {
            responseType: 'json',
        });
    }
};
SolicitacaoService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient }
];
SolicitacaoService = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable)({
        providedIn: 'root'
    })
], SolicitacaoService);



/***/ }),

/***/ 32307:
/*!******************************************************************************************************!*\
  !*** ./src/app/shared/services/fluxo-pagamentos/tipos-operacao-saida/tipo-operacao-saida.service.ts ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TipoOperacaoSaidaService": () => (/* binding */ TipoOperacaoSaidaService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _interfaces_others_pageable_dto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../interfaces/others/pageable.dto */ 40199);
/* harmony import */ var _utils_PageUtils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/PageUtils */ 55583);
/* harmony import */ var _config_api_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../config/api.config */ 99038);






let TipoOperacaoSaidaService = class TipoOperacaoSaidaService {
    constructor(http) {
        this.http = http;
    }
    list(filterDto, pageOptions = new _interfaces_others_pageable_dto__WEBPACK_IMPORTED_MODULE_0__.PageOptionsDto()) {
        let params = _utils_PageUtils__WEBPACK_IMPORTED_MODULE_1__.PageUtils.getPageOptionsParams(pageOptions);
        if (filterDto) {
            if (filterDto.descricao) {
                params = params.append('descricao', filterDto.descricao);
            }
            if (filterDto.nome) {
                params = params.append('nome', filterDto.nome);
            }
            if (filterDto.searchedTipoOperacao) {
                params = params.append('searchedTipoOperacao', filterDto.searchedTipoOperacao);
            }
        }
        return this.http.get(`${_config_api_config__WEBPACK_IMPORTED_MODULE_2__.API_CONFIG.baseURL}/tipo-operacoes-saida`, {
            responseType: 'json',
            params,
        });
    }
    findById(id) {
        return this.http.get(`${_config_api_config__WEBPACK_IMPORTED_MODULE_2__.API_CONFIG.baseURL}/tipo-operacoes-saida/${id}`, {
            responseType: 'json',
        });
    }
};
TipoOperacaoSaidaService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient }
];
TipoOperacaoSaidaService = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable)({
        providedIn: 'root'
    })
], TipoOperacaoSaidaService);



/***/ }),

/***/ 66179:
/*!************************************************************************************************************************!*\
  !*** ./src/app/shared/components/fluxo-pagamento-module/eventos/evento-detail/evento-detail.component.scss?ngResource ***!
  \************************************************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJldmVudG8tZGV0YWlsLmNvbXBvbmVudC5zY3NzIn0= */";

/***/ }),

/***/ 87307:
/*!***************************************************************************************************************************************!*\
  !*** ./src/app/shared/components/fluxo-pagamento-module/solicitacoes/solicitacao-create/solicitacao-create.component.scss?ngResource ***!
  \***************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzb2xpY2l0YWNhby1jcmVhdGUuY29tcG9uZW50LnNjc3MifQ== */";

/***/ }),

/***/ 69020:
/*!***************************************************************************************************************************************!*\
  !*** ./src/app/shared/components/fluxo-pagamento-module/solicitacoes/solicitacao-detail/solicitacao-detail.component.scss?ngResource ***!
  \***************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzb2xpY2l0YWNhby1kZXRhaWwuY29tcG9uZW50LnNjc3MifQ== */";

/***/ }),

/***/ 33491:
/*!***********************************************************************************************************************************!*\
  !*** ./src/app/shared/components/fluxo-pagamento-module/solicitacoes/solicitacao-main/solicitacao-main.component.scss?ngResource ***!
  \***********************************************************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzb2xpY2l0YWNhby1tYWluLmNvbXBvbmVudC5zY3NzIn0= */";

/***/ }),

/***/ 63417:
/*!************************************************************************************************************************!*\
  !*** ./src/app/shared/components/fluxo-pagamento-module/eventos/evento-detail/evento-detail.component.html?ngResource ***!
  \************************************************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-content appScrollTheme>\n  <div class=\"surface-card p-4 border-round shadow-2\">\n    <div class=\"text-900 font-medium text-xl mb-3 text-primary\">Eventos da solicitação</div>\n    <div class=\"flex align-items-center justify-content-end ml-auto cursor-pointer\"\n      style=\"position: fixed; top: 15px; right: 15px;\" (click)=\"fechar()\">\n      <span\n        class=\"flex align-items-center justify-content-center bg-pink-100 text-pink-800 border-circle vertical-align-top\"\n        style=\"width: 24px; height: 24px;\">\n        <i class=\"pi pi-times text-sm\"></i>\n      </span>\n    </div>\n    <ng-container *ngIf=\"eventos && eventos.length > 0\">\n      <div class=\"grid mb-3\">\n        <div class=\"col-12 lg:col-6\">\n          <ul class=\"list-none p-0 m-0 surface-0 mt-4\">\n            <li *ngFor=\"let e of eventos\" class=\"p-3 mb-2 flex cursor-pointer\n              border-primary border-round\" (click)=\"selectEvento(e)\" [ngClass]=\"{'border-3': shouldGlow(e)}\">\n              <div class=\"flex flex-column align-items-center\" style=\"width:2rem\">\n                <span\n                  class=\"surface-0 text-primary border-300 border-2 border-circle flex align-items-center justify-content-center border-circle\"\n                  style=\"min-width:2rem; min-height: 2rem\">\n                  {{ e.nivel_aprovacao.ordem }}\n                </span>\n              </div>\n              <div class=\"ml-3\">\n                <div class=\"font-medium text-900 mb-2\">Ação: {{ e.acao }}</div>\n                <span class=\"line-height-3 text-700\">Atuante: {{ e.user.nome }}</span><br>\n                <span class=\"line-height-3 text-700\">Data: {{ e.data_aprovacao | date: 'dd/MM/yyyy -\n                  HH:mm:ss' }}h</span>\n              </div>\n            </li>\n          </ul>\n        </div>\n        <div class=\"col-12 lg:col-6\">\n          <div class=\"border-1 border-double border-primary surface-border border-round mt-4\" style=\"min-height: 30rem\">\n            <ng-container *ngIf=\"selectedEvento\">\n              <div class=\"surface-card p-4 shadow-2 border-round\">\n                <div class=\"font-medium text-3xl text-900 mb-3\">Detalhamento</div>\n                <div class=\"text-primary mb-5\">{{ selectedEvento.id }}</div>\n                <ul class=\"list-none p-0 m-0 border-top-1 surface-border\">\n                  <li class=\"flex align-items-center py-3 px-2 flex-wrap surface-ground\">\n                    <div class=\"text-500 w-full md:w-2 font-medium\">Ação</div>\n                    <div class=\"text-900 w-full md:w-10\">{{ selectedEvento.acao }}</div>\n                  </li>\n                  <li class=\"flex align-items-center py-3 px-2 flex-wrap \">\n                    <div class=\"text-500 w-full md:w-2 font-medium\">Solicitação ID</div>\n                    <div class=\"text-900 w-full md:w-10 line-height-3\">{{ selectedEvento.solicitacao.id }}</div>\n                  </li>\n\n                  <li class=\"flex align-items-center py-3 px-2 flex-wrap surface-ground\">\n                    <div class=\"text-500 w-full md:w-2 font-medium\">Anexos</div>\n                    <div class=\"text-900 w-full md:w-10\">\n                      <p-tag *ngIf=\"selectedEvento.solicitacao.conta_original_url\"\n                        styleClass=\"mr-2 text-surface-500 bg-surface-100\" value=\"Conta original\" [rounded]=\"true\"\n                        icon=\"pi pi-download\" (click)=\"downContaOriginal()\" class=\"cursor-pointer\"></p-tag>\n\n                      <p-tag *ngIf=\"selectedEvento.solicitacao.comprovante_url\"\n                        styleClass=\"mr-2 text-surface-100 bg-surface-500\" value=\"Comprovante\" [rounded]=\"true\"\n                        icon=\"pi pi-download\" (click)=\"downComprovante()\" class=\"cursor-pointer\"></p-tag>\n                    </div>\n                  </li>\n\n                  <li class=\"flex align-items-center py-3 px-2 flex-wrap \">\n                    <div class=\"text-500 w-full md:w-2 font-medium\">Nível de aprovação</div>\n                    <div class=\"text-900 w-full md:w-10\">\n                      <div class=\"grid mt-0 mr-0\">\n                        <div class=\"col-12 md:col-6\">\n                          <div class=\"p-3 border-1 surface-border border-round surface-card\">\n                            <div class=\"text-900 mb-2\">\n                              <span class=\"font-medium\">Nível</span>\n                            </div>\n                            <div class=\"text-700\">{{ selectedEvento.nivel_aprovacao.ordem }}</div>\n                          </div>\n                        </div>\n                        <div class=\"col-12 md:col-6\">\n                          <div class=\"p-3 border-1 surface-border border-round surface-card\">\n                            <div class=\"text-900 mb-2\">\n                              <span class=\"font-medium\">Perfil Aprovador</span>\n                            </div>\n                            <div class=\"text-700\">{{ selectedEvento.nivel_aprovacao.perfil_aprovador?.nome || 'N.E' }}\n                            </div>\n                          </div>\n                        </div>\n                        <div class=\"col-12 md:col-6\">\n                          <div class=\"p-3 border-1 surface-border border-round surface-card\">\n                            <div class=\"text-900 mb-2\">\n                              <span class=\"font-medium\">Cargo Aprovador</span>\n                            </div>\n                            <div class=\"text-700\">{{ selectedEvento.nivel_aprovacao.cargo_aprovador?.nome || 'N.E' }}\n                            </div>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                  </li>\n\n                  <li class=\"flex align-items-center py-3 px-2 flex-wrap surface-ground\">\n                    <div class=\"text-500 w-full md:w-2 font-medium\">Atuante</div>\n                    <div class=\"text-900 w-full md:w-10\">\n                      <div class=\"grid mt-0 mr-0\">\n                        <div class=\"col-12 md:col-6\">\n                          <div class=\"p-3 border-1 surface-border border-round surface-card\">\n                            <div class=\"text-900 mb-2\">\n                              <span class=\"font-medium\">Nome</span>\n                            </div>\n                            <div class=\"text-700\">{{ selectedEvento.user.nome }}</div>\n                          </div>\n                        </div>\n                        <div class=\"col-12 md:col-6\">\n                          <div class=\"p-3 border-1 surface-border border-round surface-card\">\n                            <div class=\"text-900 mb-2\">\n                              <span class=\"font-medium\">E-mail</span>\n                            </div>\n                            <div class=\"text-700\">{{ selectedEvento.user.email }}</div>\n                          </div>\n                        </div>\n                        <div class=\"col-12 md:col-6\">\n                          <div class=\"p-3 border-1 surface-border border-round surface-card\">\n                            <div class=\"text-900 mb-2\">\n                              <span class=\"font-medium\">CPF</span>\n                            </div>\n                            <div class=\"text-700\">{{ selectedEvento.user.cpf }}</div>\n                          </div>\n                        </div>\n                        <div class=\"col-12 md:col-6\">\n                          <div class=\"p-3 border-1 surface-border border-round surface-card\">\n                            <div class=\"text-900 mb-2\">\n                              <span class=\"font-medium\">Status</span>\n                            </div>\n                            <div class=\"text-700\">{{ selectedEvento.user.status }}</div>\n                          </div>\n                        </div>\n                        <div class=\"col-12 md:col-6\">\n                          <div class=\"p-3 border-1 surface-border border-round surface-card\">\n                            <div class=\"text-900 mb-2\">\n                              <span class=\"font-medium\">Perfil (atual)</span>\n                            </div>\n                            <div class=\"text-700\">{{ selectedEvento.user.perfil?.nome || 'N.E' }}</div>\n                          </div>\n                        </div>\n                        <div class=\"col-12 md:col-6\">\n                          <div class=\"p-3 border-1 surface-border border-round surface-card\">\n                            <div class=\"text-900 mb-2\">\n                              <span class=\"font-medium\">Cargo (atual)</span>\n                            </div>\n                            <div class=\"text-700\">{{ selectedEvento.user.cargo?.nome || 'N.E' }}</div>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                  </li>\n\n                  <li class=\"flex align-items-center py-3 px-2 flex-wrap \">\n                    <div class=\"text-500 w-full md:w-2 font-medium\">Solicitação</div>\n                    <div class=\"text-900 w-full md:w-10\">\n                      <div class=\"grid mt-0 mr-0\">\n                        <div class=\"col-12 md:col-6\">\n                          <div class=\"p-3 border-1 surface-border border-round surface-card\">\n                            <div class=\"text-900 mb-2\">\n                              <span class=\"font-medium\">Status</span>\n                            </div>\n                            <div class=\"text-700\">{{ selectedEvento.solicitacao.status }}</div>\n                          </div>\n                        </div>\n                        <div class=\"col-12 md:col-6\">\n                          <div class=\"p-3 border-1 surface-border border-round surface-card\">\n                            <div class=\"text-900 mb-2\">\n                              <span class=\"font-medium\">Custo</span>\n                            </div>\n                            <div class=\"text-700\">{{ selectedEvento.solicitacao.custo | currency:'BRL':'' }}</div>\n                          </div>\n                        </div>\n                        <div class=\"col-12 md:col-6\">\n                          <div class=\"p-3 border-1 surface-border border-round surface-card\">\n                            <div class=\"text-900 mb-2\">\n                              <span class=\"font-medium\">Data de vencimento</span>\n                            </div>\n                            <div *ngIf=\"selectedEvento.solicitacao.data_vencimento\" class=\"text-700\">\n                              {{ selectedEvento.solicitacao.data_vencimento | date: 'dd/MM/yyyy -\n                              HH:mm:ss' }}h</div>\n                            <div *ngIf=\"!selectedEvento.solicitacao.data_vencimento\" class=\"text-700\">N.E</div>\n                          </div>\n                        </div>\n                        <div class=\"col-12 md:col-6\">\n                          <div class=\"p-3 border-1 surface-border border-round surface-card\">\n                            <div class=\"text-900 mb-2\">\n                              <span class=\"font-medium\">Solicitante</span>\n                            </div>\n                            <div class=\"text-700\">{{ selectedEvento.solicitacao.solicitante.nome }} - {{\n                              selectedEvento.solicitacao.solicitante.email }}</div>\n                          </div>\n                        </div>\n                        <div class=\"col-12 md:col-6\">\n                          <div class=\"p-3 border-1 surface-border border-round surface-card\">\n                            <div class=\"text-900 mb-2\">\n                              <span class=\"font-medium\">Nível atual</span>\n                            </div>\n                            <div class=\"text-700\">{{ selectedEvento.solicitacao.nivel_atual.ordem }}</div>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                  </li>\n\n                  <li class=\"flex align-items-center py-3 px-2 flex-wrap surface-ground\">\n                    <div class=\"text-500 w-full md:w-2 font-medium\">Operação</div>\n                    <div class=\"text-900 w-full md:w-10\">\n                      <div class=\"grid mt-0 mr-0\">\n                        <div class=\"col-12 md:col-6\">\n                          <div class=\"p-3 border-1 surface-border border-round surface-card\">\n                            <div class=\"text-900 mb-2\">\n                              <span class=\"font-medium\">Tipo</span>\n                            </div>\n                            <div class=\"text-700\">{{ selectedEvento.solicitacao.operacao.nome }} - {{\n                              selectedEvento.solicitacao.operacao.tipo_transacao }}</div>\n                          </div>\n                        </div>\n                        <div class=\"col-12 md:col-6\">\n                          <div class=\"p-3 border-1 surface-border border-round surface-card\">\n                            <div class=\"text-900 mb-2\">\n                              <span class=\"font-medium\">Configuração ID</span>\n                            </div>\n                            <div class=\"text-700\">{{ selectedEvento.solicitacao.configuracao.id }}</div>\n                          </div>\n                        </div>\n                        <div class=\"col-12 md:col-6\">\n                          <div class=\"p-3 border-1 surface-border border-round surface-card\">\n                            <div class=\"text-900 mb-2\">\n                              <span class=\"font-medium\">Configuração Versão</span>\n                            </div>\n                            <div class=\"text-700\">{{ selectedEvento.solicitacao.configuracao.versao }}</div>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                  </li>\n\n                </ul>\n              </div>\n            </ng-container>\n          </div>\n        </div>\n      </div>\n    </ng-container>\n\n    <ng-container *ngIf=\"!eventos || eventos.length == 0\">\n      <div class=\"border-circle border-1 border-primary\">\n        <app-attention-surface title=\"Atenção\" subtitle=\"Vazio\"\n          message=\"Nenhum evento encontrado para a solicitação selecionada\"></app-attention-surface>\n      </div>\n    </ng-container>\n\n  </div>\n</ion-content>";

/***/ }),

/***/ 280:
/*!***************************************************************************************************************************************!*\
  !*** ./src/app/shared/components/fluxo-pagamento-module/solicitacoes/solicitacao-create/solicitacao-create.component.html?ngResource ***!
  \***************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "\n<form  [formGroup]=\"form\" (ngSubmit)=\"$event.preventDefault()\">\n  <div class=\"surface-ground px-2  py-8 h-screen md:px-5 lg:px-6 wall-background\">\n    <div class=\"surface-card p-4 shadow-2 border-round p-fluid \">\n      <div class=\"grid formgrid p-fluid\">\n\n        <div class=\"field mb-4 col-12 md:col-6\">\n          <label for=\"custo\" class=\"font-medium text-900\">Custo</label>\n          <p-inputNumber id=\"custo\" formControlName=\"custo\" mode=\"decimal\" [minFractionDigits]=\"2\"\n            [maxFractionDigits]=\"2\"></p-inputNumber>\n          <div class=\"flex mt-1 justify-content-end\">\n            <p-message severity=\"error\" text=\"Obrigatório\" *ngIf=\"isInputError('custo')\"></p-message>\n          </div>\n        </div>\n        <div class=\"surface-border border-top-1 opacity-50 mb-4 col-12\"></div>\n\n        <div *ngIf=\"operacoes\" class=\"col-8 lg:col-10 field mb-5\">\n          <label for=\"operacao_id\" class=\"text-900 font-medium mb-3\">Operação</label>\n          <div class=\"ml-3 cursor-pointer pi pi-question-circle\" (click)=\"detailOperacao()\"></div>\n          <p-dropdown id=\"operacao_id\" #drop_operacao [options]=\"operacoes.data\" formControlName=\"operacao\"\n            optionLabel=\"nome\" [filter]=\"true\" placeholder=\"Selecione uma operação\" [virtualScroll]=\"true\"\n            [virtualScrollItemSize]=\"38\" [lazy]=\"true\"\n            [virtualScrollOptions]=\"{ showLoader: true, loading: loading, delay: 250 }\"\n            (onLazyLoad)=\"paginarOperacao($event)\" (onFilter)=\"onOperacaoFilter($event)\"\n            (onFocus)=\"blurOperacao($event, drop_operacao)\" (onChange)=\"changeOperacao($event)\">\n            <ng-template pTemplate=\"loader\" let-options=\"options\">\n              <div class=\"flex align-items-center py-2 px-3\" style=\"height: 38px\">\n                <p-skeleton [width]=\"options.even ? '60%' : '50%'\" height=\"1rem\"></p-skeleton>\n              </div>\n            </ng-template>\n          </p-dropdown>\n        </div>\n\n        <div *ngIf=\"enableDespesas && despesas\" class=\"col-8 lg:col-10 field mb-5\">\n          <label for=\"despesa_id\" class=\"text-900 font-medium mb-3\">Despesa</label>\n          <div class=\"ml-3 cursor-pointer pi pi-question-circle\" (click)=\"detailDespesa()\"></div>\n          <p-dropdown id=\"despesa_id\" #drop_despesa [options]=\"despesas.data\" formControlName=\"despesa\"\n            optionLabel=\"nome\" [filter]=\"true\" placeholder=\"Selecione uma despesa\" [virtualScroll]=\"true\"\n            [virtualScrollItemSize]=\"38\" [lazy]=\"true\"\n            [virtualScrollOptions]=\"{ showLoader: true, loading: loading, delay: 250 }\"\n            (onLazyLoad)=\"paginarDespesa($event)\" (onFilter)=\"onDespesaFilter($event)\"\n            (onFocus)=\"blurDespesa($event, drop_despesa)\">\n            <ng-template pTemplate=\"loader\" let-options=\"options\">\n              <div class=\"flex align-items-center py-2 px-3\" style=\"height: 38px\">\n                <p-skeleton [width]=\"options.even ? '60%' : '50%'\" height=\"1rem\"></p-skeleton>\n              </div>\n            </ng-template>\n          </p-dropdown>\n        </div>\n        <div class=\"surface-border border-top-1 opacity-50 mb-4 col-12\"></div>\n\n        <div class=\"field mb-4 col-12 md:col-6\">\n          <label for=\"data_vencimento\" class=\"font-medium text-900\">Data de vencimento</label>\n          <p-calendar id=\"data_vencimento\" [showIcon]=\"true\" formControlName=\"data_vencimento\">\n          </p-calendar>\n        </div>\n        <div class=\"surface-border border-top-1 opacity-50 mb-4 col-12\"></div>\n\n        <div class=\"field mb-4 col-12 md:col-6\">\n          <label for=\"conta_original\" class=\"font-medium text-900\">Conta original</label>\n          <div *ngIf=\"contaOriginalId\" class=\"ml-3 pi pi-check text-green-600\"></div>\n          <div *ngIf=\"!contaOriginalId\" class=\"ml-3 pi pi-times text-pink-600\"></div>\n          <p-fileUpload #conta_original id=\"conta_original\" mode=\"basic\" name=\"conta_original\"\n            chooseIcon=\"pi pi-upload\" customUpload=\"true\" [auto]=\"true\"\n            (uploadHandler)=\"anexarContaOriginal($event, conta_original)\" chooseLabel=\"Anexar Conta Original\">\n          </p-fileUpload>\n        </div>\n        <div class=\"field mb-4 col-12 md:col-6\">\n          <label for=\"comprovante\" class=\"font-medium text-900\">Comprovante</label>\n          <div *ngIf=\"comprovanteId\" class=\"ml-3  pi pi-check text-green-600\"></div>\n          <div *ngIf=\"!comprovanteId\" class=\"ml-3  pi pi-times text-pink-600\"></div>\n          <p-fileUpload #comprovante id=\"comprovante\" mode=\"basic\" name=\"comprovante\" chooseIcon=\"pi pi-upload\"\n            customUpload=\"true\" [auto]=\"true\" (uploadHandler)=\"anexarComprovante($event, comprovante)\"\n            chooseLabel=\"Anexar Comprovante\">\n          </p-fileUpload>\n        </div>\n        <div class=\"surface-border border-top-1 opacity-50 mb-4 col-12\"></div>\n      </div>\n      <div class=\"flex justify-content-end\">\n        <button pButton pRipple label=\"Salvar\" icon=\"pi pi-send\" iconPos=\"right\" class=\"w-auto\" (click)=\"create()\"\n          [disabled]=\"disableCreateBtn()\"></button>\n      </div>\n    </div>\n  </div>\n</form>";

/***/ }),

/***/ 19953:
/*!***************************************************************************************************************************************!*\
  !*** ./src/app/shared/components/fluxo-pagamento-module/solicitacoes/solicitacao-detail/solicitacao-detail.component.html?ngResource ***!
  \***************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-content appScrollTheme>\n\n  <p-panel *ngIf=\"solicitacao\">\n    <ng-template pTemplate=\"header\">\n      <div class=\"flex align-items-center \">\n        <span class=\"flex align-items-center justify-content-center bg-cyan-100 text-cyan-800 mr-3 border-circle\"\n          style=\"width:32px;height:32px\">\n          <i class=\"pi pi-info text-lg\"></i>\n        </span>\n        <span class=\"font-medium text-2xl text-900\">{{ title }}</span>\n      </div>\n\n      <div class=\"flex align-items-center justify-content-end ml-auto cursor-pointer\"\n        style=\"position: fixed; top: 15px; right: 15px;\" (click)=\"fechar()\">\n        <span\n          class=\"flex align-items-center justify-content-center bg-pink-100 text-pink-800 border-circle vertical-align-top\"\n          style=\"width: 24px; height: 24px;\">\n          <i class=\"pi pi-times text-sm\"></i>\n        </span>\n      </div>\n    </ng-template>\n\n    <ng-template pTemplate=\"content\">\n      <div class=\"surface-card p-4 shadow-2 border-round\">\n        <div class=\"font-medium text-3xl text-900 mb-3\">Detalhamento</div>\n        <div class=\"text-primary mb-5\">{{ solicitacao.id }}</div>\n        <ul class=\"list-none p-0 m-0 border-top-1 surface-border\">\n          <li class=\"flex align-items-center py-3 px-2 flex-wrap \">\n            <div class=\"text-500 w-full md:w-2 font-medium \">Status</div>\n            <div class=\"text-900 w-full md:w-10\">{{ solicitacao.status }}</div>\n          </li>\n          <li class=\"flex align-items-center py-3 px-2 flex-wrap surface-ground\">\n            <div class=\"text-500 w-full md:w-2 font-medium\">Operação</div>\n            <div class=\"text-900 w-full md:w-10\">{{ solicitacao.operacao.nome }}</div>\n          </li>\n          <li class=\"flex align-items-center py-3 px-2  flex-wrap \">\n            <div class=\"text-500 w-full md:w-2 font-medium\">Solicitante</div>\n            <div class=\"text-900 w-full md:w-10\">{{ solicitacao.solicitante.nome }}</div>\n          </li>\n          <li *ngIf=\"solicitacao.pagador\" class=\"flex align-items-center py-3 px-2  flex-wrap surface-ground\">\n            <div class=\"text-500 w-full md:w-2 font-medium\">Pagador</div>\n            <div class=\"text-900 w-full md:w-10\">{{ solicitacao.pagador.nome }}</div>\n          </li>\n          <li class=\"flex align-items-center py-3 px-2 flex-wrap surface-ground\">\n            <div class=\"text-500 w-full md:w-2 font-medium\">Total a ser pago:</div>\n            <div class=\"text-900 w-full md:w-10\">{{ solicitacao.custo | currency:'BRL':'' }}</div>\n          </li>\n          <li  class=\"flex align-items-center py-3 px-2 flex-wrap\">\n            <div class=\"text-500 w-full md:w-2 font-medium\">Nível atual</div>\n            <div class=\"text-900 w-full md:w-10\">{{ solicitacao.nivel_atual.ordem }}</div>\n          </li>\n          <li *ngIf=\"solicitacao.despesa\" class=\"flex align-items-center py-3 px-2 flex-wrap surface-ground\">\n            <div class=\"text-500 w-full md:w-2 font-medium\">Despesa</div>\n            <div class=\"text-900 w-full md:w-10\">{{ solicitacao.despesa.nome }}</div>\n          </li>\n          <li *ngIf=\"nivel_atual\" class=\"flex align-items-center py-3 px-2 flex-wrap \">\n            <div class=\"text-500 w-full md:w-2 font-medium\">Perfil aprovador</div>\n            <div class=\"text-900 w-full md:w-10\">{{ nivel_atual.perfil_aprovador?.nome || 'N.E' }}</div>\n          </li>\n          <li *ngIf=\"nivel_atual\" class=\"flex align-items-center py-3 px-2 flex-wrap surface-ground\">\n            <div class=\"text-500 w-full md:w-2 font-medium\">Cargo aprovador</div>\n            <div class=\"text-900 w-full md:w-10\">{{ nivel_atual.cargo_aprovador?.nome || 'N.E' }}</div>\n          </li>\n          <li class=\"flex align-items-center py-3 px-2 flex-wrap \">\n            <div class=\"text-500 w-full md:w-2 font-medium\">Anexos</div>\n            <div class=\"text-900 w-full md:w-10\">\n              <p-tag *ngIf=\"solicitacao.conta_original_url\" styleClass=\"mr-2 text-surface-500 bg-surface-100\"\n                value=\"Conta original\" [rounded]=\"true\" icon=\"pi pi-download\" (click)=\"downContaOriginal()\"\n                class=\"cursor-pointer\"></p-tag>\n\n              <p-tag *ngIf=\"solicitacao.comprovante_url\" styleClass=\"mr-2 text-surface-100 bg-surface-500\"\n                value=\"Comprovante\" [rounded]=\"true\" icon=\"pi pi-download\" (click)=\"downComprovante()\"\n                class=\"cursor-pointer\"></p-tag>\n            </div>\n          </li>\n        </ul>\n      </div>\n    </ng-template>\n\n    <ng-template pTemplate=\"footer\">\n      <div class=\"mt-2 flex justify-content-center\">\n        <p-fileUpload #file id=\"file\" mode=\"basic\" name=\"file\" chooseIcon=\"pi pi-upload\" customUpload=\"true\"\n          [auto]=\"true\" (uploadHandler)=\"anexarComprovante($event, file)\" chooseLabel=\"Anexar Comprovante\">\n        </p-fileUpload>\n      </div>\n\n      <div class=\"mt-2 flex justify-content-between\">\n        <button class=\"text-right mr-3\" type=\"button\" pButton pRipple icon=\"pi pi-times\" iconPos=\"right\"\n          (click)=\"rejeitar()\" label=\"Rejeitar\" class=\"p-button p-button-outlined p-button-danger\"></button>\n        <button class=\"\" type=\"button\" pButton pRipple icon=\"pi pi-check\" iconPos=\"right\" (click)=\"aprovar()\"\n          label=\"Aprovar\" class=\"p-button p-button-success\"></button>\n      </div>\n    </ng-template>\n  </p-panel>\n\n</ion-content>\n\n\n<p-confirmDialog acceptLabel=\"Sim\" rejectLabel=\"Não\" [style]=\"{width: '50vw'}\" [baseZIndex]=\"10000\"\n  rejectButtonStyleClass=\"p-button-text\"></p-confirmDialog>";

/***/ }),

/***/ 13164:
/*!***********************************************************************************************************************************!*\
  !*** ./src/app/shared/components/fluxo-pagamento-module/solicitacoes/solicitacao-main/solicitacao-main.component.html?ngResource ***!
  \***********************************************************************************************************************************/
/***/ ((module) => {

module.exports = "<br>\n<div class=\"card main-view\">\n  <p-dataView *ngIf=\"solicitacoes\" emptyMessage=\"Nada encontrado, experimente escolher outro filtro\"\n    class=\"data-container\" #dv [lazy]=\"true\" [value]=\"solicitacoes.data\" [paginator]=\"true\"\n    [rows]=\"solicitacoes.meta.take\" [totalRecords]=\"solicitacoes.meta.itemCount\"\n    [pageLinks]=\"solicitacoes.meta.pageCount\" (onLazyLoad)=\"paginar($event)\" filterBy=\"nome\" layout=\"list\">\n    <ng-template pTemplate=\"header\">\n      <div class=\"flex grid formgrid p-fluid justify-content-between mb-2\">\n        <div class=\"field mb-4 col-12 md:col-6 xl:col-3\">\n          <p-dropdown #dropdown_status [options]=\"statusOptions\" [(ngModel)]=\"selectedStatus\" display=\"chip\"\n            (onChange)=\"changeFiltro($event)\" placeholder=\"Status\" defaultLabel=\"Selecione\"\n            (onClear)=\"clearFilter($event, dropdown_status)\"  [showClear]=\"true\"></p-dropdown>\n        </div>\n\n        <div class=\"field mb-4 col-12 md:col-3 lg:col-2 xl:col-1\">\n          <p-button icon=\"pi pi-plus\" label=\"Novo\" (click)=\"createNew()\">\n          </p-button>\n        </div>\n      </div>\n\n      <div class=\"flex flex-column md:flex-row md:justify-content-center\">\n        <span class=\"p-input-icon-right mb-2 md:mb-0 \">\n          <i class=\"pi pi-search cursor-pointer text-primary\" (click)=\"search()\"></i>\n          <input class=\"w-full\" type=\"search\" pInputText [(ngModel)]=\"searchedSolicitacao\"\n            [ngModelOptions]=\"{standalone: true}\" placeholder=\"Buscar \" (keyup.enter)=\"search()\">\n        </span>\n\n      </div>\n    </ng-template>\n\n\n    <ng-template let-data pTemplate=\"listItem\">\n      <div *ngIf=\"solicitacoes\" #templateGrid class=\"col-12\">\n        <div class=\"data-list-item\">\n          <div class=\"data-list-detail\">\n            <div class=\"data-name\">{{ data.id }}</div>\n            <div class=\"mt-1 mb-3\">{{ data.operacao.nome }}</div>\n            <div class=\"mt-1 mb-3\">Versão do fluxo: {{ data.configuracao.versao }}</div>\n            <div class=\"mt-1\">Status: {{ data.status }}</div>\n            <div class=\"mt-1\">Solicitante: {{ data.solicitante.nome }}</div>\n            <div class=\"mt-1\">Valor: {{ data.custo | currency:'BRL': '(R$)' }}</div>\n            <div class=\"mt-1\">\n              <i class=\"pi pi-exclamation-triangle data-category-icon text-primary\"></i>\n              <span class=\"data-category\">Data de Vencimento:\n                {{data.data_vencimento | date: 'dd/MM/yyyy -\n                HH:mm:ss' }}h</span>\n            </div>\n          </div>\n          <div class=\"data-list-action\">\n            <button styleClass=\"w-full\" type=\"button\" pButton icon=\"pi pi-cog\" label=\"Opções\"\n              (click)=\"selectedSolicitacao = data; editMenu.toggle($event)\"></button>\n            <p-menu #editMenu appendTo=\"body\" [popup]=\"true\" [model]=\"editMenuItens\"></p-menu>\n\n            <button *ngIf=\"data.conta_original_url\" pButton type=\"button\" class=\"p-button-outlined\"\n              icon=\"pi pi-download\" label=\"Conta Original\" (click)=\"downContaOriginal(data)\">\n            </button>\n            <button *ngIf=\"data.comprovante_url\" pButton type=\"button\" class=\"p-button-outlined\" icon=\"pi pi-download\"\n              label=\"Comprovante\" (click)=\"downComprovante(data)\">\n            </button>\n          </div>\n        </div>\n      </div>\n    </ng-template>\n  </p-dataView>\n</div>\n\n\n<p-confirmDialog [style]=\"{width: '50vw'}\" [baseZIndex]=\"10000\" rejectButtonStyleClass=\"p-button-text\">\n</p-confirmDialog>";

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
//# sourceMappingURL=default-src_app_shared_components_fluxo-pagamento-module_solicitacoes_solicitacoes_module_ts.js.map