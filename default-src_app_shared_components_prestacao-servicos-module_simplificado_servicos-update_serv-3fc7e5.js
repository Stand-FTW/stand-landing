"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["default-src_app_shared_components_prestacao-servicos-module_simplificado_servicos-update_serv-3fc7e5"],{

/***/ 18612:
/*!***********************************************************************************************************************!*\
  !*** ./src/app/shared/components/prestacao-servicos-module/simplificado/servicos-update/servicos-update.component.ts ***!
  \***********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ServicosUpdateComponent": () => (/* binding */ ServicosUpdateComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _servicos_update_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./servicos-update.component.html?ngResource */ 75324);
/* harmony import */ var _servicos_update_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./servicos-update.component.scss?ngResource */ 73514);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs */ 26078);
/* harmony import */ var _constants_agendamento_constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../../../shared/constants/agendamento.constant */ 91391);
/* harmony import */ var _constants_estado_constant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../constants/estado.constant */ 11177);
/* harmony import */ var _constants_status_constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../constants/status.constant */ 54692);
/* harmony import */ var _services_prestacao_servicos_prestacao_servicos_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../services/prestacao-servicos/prestacao-servicos.service */ 91475);
/* harmony import */ var _constants_pagamento_formas_constant__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../constants/pagamento-formas.constant */ 16137);
/* harmony import */ var _constants_descontos_constant__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../constants/descontos.constant */ 50735);
/* harmony import */ var _services_servico_servicos_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../services/servico/servicos.service */ 7475);
/* harmony import */ var _services_auth_storage_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../services/auth/storage.service */ 54452);
/* harmony import */ var _constants_tipo_user_constant__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../constants/tipo-user.constant */ 18109);
/* harmony import */ var _constants_page_constant__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../constants/page.constant */ 59136);
/* harmony import */ var _services_condominio_condominio_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../services/condominio/condominio.service */ 32724);
/* harmony import */ var _services_user_user_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../services/user/user.service */ 34758);
/* harmony import */ var _constants_toast_constant__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../constants/toast.constant */ 98739);
/* harmony import */ var _services_toast_toast_message_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../services/toast/toast-message.service */ 12973);
/* harmony import */ var _shared_utils_ServicoUtils__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./../../../../../shared/utils/ServicoUtils */ 5241);























let ServicosUpdateComponent = class ServicosUpdateComponent {
    constructor(formBuilder, userService, condominioService, servicosService, modal, storage, toastService, prestacaoServicosService) {
        this.formBuilder = formBuilder;
        this.userService = userService;
        this.condominioService = condominioService;
        this.servicosService = servicosService;
        this.modal = modal;
        this.storage = storage;
        this.toastService = toastService;
        this.prestacaoServicosService = prestacaoServicosService;
        this.searchedcondominio = '';
        this.searchedCliente = '';
        this.searchedColaborador = '';
        this.searchedServico = '';
        this.showDialog = false;
        this.showStatusDialog = false;
        this.showAgendamento = false;
        this.showLocal = false;
        this.formasPagamento = _constants_pagamento_formas_constant__WEBPACK_IMPORTED_MODULE_6__.PagamentoFormasMenu;
        this.statusServico = _constants_status_constant__WEBPACK_IMPORTED_MODULE_4__.StatusServicoWithNoCancelOption;
        this.selectedStatusServico = _constants_status_constant__WEBPACK_IMPORTED_MODULE_4__.StatusServicoEnum.FINALIZADO;
        this.opcoesAcrescimoDesconto = _constants_descontos_constant__WEBPACK_IMPORTED_MODULE_7__.OpcoesAcrescimoDesconto;
        this.selectedOpcaoAcrescimoDesconto = _constants_descontos_constant__WEBPACK_IMPORTED_MODULE_7__.OpcoesAcrescimoDescontoEnum.NAO;
        this.opcoesTipo = _constants_descontos_constant__WEBPACK_IMPORTED_MODULE_7__.OpcoesTipo;
        this.localAgendamentos = _constants_agendamento_constant__WEBPACK_IMPORTED_MODULE_2__.LocalAgendamentoItens;
        this.listEstados = _constants_estado_constant__WEBPACK_IMPORTED_MODULE_3__.Estados;
        this.liberateEndereco = false;
        this.total = 0;
        this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_17__.Subscription();
    }
    ngOnInit() {
        // Salvar direto não está funcionando porque não está pegando o item de prestação, testar troca de serviço
        this.menuAgendamento = [
            {
                label: 'Opções',
                items: [{
                        label: 'Limpar',
                        icon: 'pi pi-refresh',
                        command: () => {
                            this.resetAgendamento();
                        }
                    },
                ]
            },
        ];
        this.loadColaboradores();
        this.loadcondominios();
        this.loadClients();
        this.loadServicos();
        const { condominio, colaborador, cliente, agendamento_servico, itens_prestacao_servico, pagamento_forma, status_servico, acrescimo_desconto, descricao, local, total_devido, } = this.prestacaoServico;
        this.selectedStatusServico = status_servico;
        this.total = total_devido;
        this.form = this.formBuilder.group({
            condominio_id: [condominio.id, [_angular_forms__WEBPACK_IMPORTED_MODULE_18__.Validators.required]],
            colaborador_id: [colaborador.id, [_angular_forms__WEBPACK_IMPORTED_MODULE_18__.Validators.required,]],
            cliente_id: [cliente.id, [_angular_forms__WEBPACK_IMPORTED_MODULE_18__.Validators.required,]],
            servico: [itens_prestacao_servico[0].servico.id, [_angular_forms__WEBPACK_IMPORTED_MODULE_18__.Validators.required,]],
            pagamento_forma: [pagamento_forma, [_angular_forms__WEBPACK_IMPORTED_MODULE_18__.Validators.required,]],
            acrescimo_desconto: [acrescimo_desconto, []],
            descricao: [descricao, []],
            quantidade: [itens_prestacao_servico[0].quantidade, [_angular_forms__WEBPACK_IMPORTED_MODULE_18__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.Validators.min(1)]],
            local: [local, [_angular_forms__WEBPACK_IMPORTED_MODULE_18__.Validators.required]],
            data_inicio: [, []],
            data_fim: [, []],
            cep: [agendamento_servico.endereco?.cep, []],
            endereco: [agendamento_servico.endereco?.endereco, []],
            numero: [agendamento_servico.endereco?.numero, []],
            complemento: [agendamento_servico.endereco?.complemento, []],
            bairro: [agendamento_servico.endereco?.bairro, []],
            cidade: [agendamento_servico.endereco?.cidade, []],
            estado: [agendamento_servico.endereco?.estado, []],
        });
        if (this.selectedStatusServico == _constants_status_constant__WEBPACK_IMPORTED_MODULE_4__.StatusServicoEnum.AGENDADO) {
            this.showAgendamento = true;
            this.form.get('data_inicio').setValue(new Date(agendamento_servico.compromisso.data_inicio_completa));
            this.form.get('data_fim').setValue(new Date(agendamento_servico.compromisso.data_fim_completa));
            this.form.get('data_inicio').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_18__.Validators.required]);
            this.form.get('data_fim').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_18__.Validators.required]);
            this.form.get('data_inicio').updateValueAndValidity();
            this.form.get('data_fim').updateValueAndValidity();
        }
        this.localChanged();
    }
    ngOnDestroy() {
        this.subscriptions.unsubscribe();
    }
    //#region condominio
    loadcondominios(page = 1, dropdown) {
        const sub = this.condominioService.list({ searchedCondominio: this.searchedcondominio }, { order: _constants_page_constant__WEBPACK_IMPORTED_MODULE_11__.PageOrder.ASC, page, take: 10 })
            .subscribe(data => {
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
        this.searchedCliente = filter;
    }
    blurcondominio(event, dropdown) {
        this.searchedCliente = undefined;
        dropdown.filterValue = undefined;
    }
    //#endregion
    //#region CLIENTE
    loadClients(page = 1) {
        const sub = this.userService.listUsers({ searchedUser: this.searchedCliente, tipo_usuario: _constants_tipo_user_constant__WEBPACK_IMPORTED_MODULE_10__.TipoUsuarioEnum.CLIENTE }, { order: _constants_page_constant__WEBPACK_IMPORTED_MODULE_11__.PageOrder.DESC, page, take: 10 })
            .subscribe(response => {
            this.clients = response;
        });
        this.subscriptions.add(sub);
    }
    paginarClient(event) {
        this.loadClients();
    }
    onClientFilter(event) {
        const filter = event.filter;
        this.searchedCliente = filter;
    }
    blurClient(event, dropdown) {
        this.searchedCliente = undefined;
        dropdown.filterValue = undefined;
    }
    //#endregion
    //#region COLABORADOR
    loadColaboradores(page = 1) {
        const sub = this.userService.listUsers({ searchedUser: this.searchedColaborador, tipo_usuario: _constants_tipo_user_constant__WEBPACK_IMPORTED_MODULE_10__.TipoUsuarioEnum.FUNCIONARIO }, { order: _constants_page_constant__WEBPACK_IMPORTED_MODULE_11__.PageOrder.DESC, page, take: 10 })
            .subscribe(response => {
            this.colaboradores = response;
        });
        this.subscriptions.add(sub);
    }
    paginarColaborador(event) {
        this.loadColaboradores();
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
    //#region SERVICOS
    loadServicos(page = 1, dropdown) {
        const sub = this.servicosService.list({ searchedServico: this.searchedServico }, { order: _constants_page_constant__WEBPACK_IMPORTED_MODULE_11__.PageOrder.ASC, page, take: 10 })
            .subscribe(data => {
            this.servicos = data;
            if (dropdown) {
                dropdown.show();
            }
        });
        this.subscriptions.add(sub);
    }
    paginarServico(event) {
        this.loadServicos();
    }
    onServicoFilter(event) {
        const filter = event.filter;
        this.searchedServico = filter;
    }
    blurServico(event, dropdown) {
        this.searchedServico = undefined;
        dropdown.filterValue = undefined;
    }
    onServicoChange({ value }) {
        if (!value) {
            this.total = 0;
            return;
        }
        const selectedServicoId = this.form.get('servico').value;
        const servico = this.servicos.data.find(s => s.id == selectedServicoId);
        const { preco_servico } = servico;
        const quantidade = this.form.get('quantidade').value;
        this.total = Number(preco_servico) * Number(quantidade);
    }
    detailServico() {
        const selectedServicoId = this.form.get('servico').value;
        this.selectedServico = this.servicos.data.find(s => s.id == selectedServicoId);
        if (!this.selectedServico) {
            this.toastService.presentToast({
                detalhe: `Selecione um serviço primeiro`,
                titulo: `Seleção necessária`,
                duracao: _constants_toast_constant__WEBPACK_IMPORTED_MODULE_14__.ToastEnum.shortDuration,
                gravidade: _constants_toast_constant__WEBPACK_IMPORTED_MODULE_14__.ToastPrimeSeverityEnum.INFORMACAO,
            });
            return;
        }
        this.showDialog = true;
    }
    changeQuantidade() {
        const selectedServicoId = this.form.get('servico').value;
        const servico = this.servicos.data.find(s => s.id == selectedServicoId);
        if (!servico) {
            this.total = 0;
            return;
        }
        const { preco_servico } = servico;
        const quantidade = this.form.get('quantidade').value;
        this.total = Number(preco_servico) * Number(quantidade);
    }
    //#endregion
    //#region AGENDAMENTO
    changeStatusServico(event) {
        if (this.selectedStatusServico == _constants_status_constant__WEBPACK_IMPORTED_MODULE_4__.StatusServicoEnum.AGENDADO) {
            this.showAgendamento = true;
            this.form.get('data_inicio').setValue(new Date());
            this.form.get('data_fim').setValue(undefined);
            this.form.get('data_inicio').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_18__.Validators.required]);
            this.form.get('data_fim').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_18__.Validators.required]);
            this.form.get('data_inicio').updateValueAndValidity();
            this.form.get('data_fim').updateValueAndValidity();
            return;
        }
        this.form.get('local').setValue(_constants_agendamento_constant__WEBPACK_IMPORTED_MODULE_2__.LocalAgendamento.LOCAL);
        this.form.get('data_inicio').clearValidators();
        this.form.get('data_fim').clearValidators();
        this.form.get('data_inicio').updateValueAndValidity();
        this.form.get('data_fim').updateValueAndValidity();
        this.hideEnderecoFields();
        this.showAgendamento = false;
        this.form.updateValueAndValidity({ onlySelf: true });
    }
    resetAgendamento() {
        this.form.get('local').setValue(_constants_agendamento_constant__WEBPACK_IMPORTED_MODULE_2__.LocalAgendamento.LOCAL);
        this.form.get('data_inicio').setValue(new Date());
        this.form.get('data_fim').setValue(undefined);
        this.form.get('data_inicio').clearValidators();
        this.form.get('data_fim').clearValidators();
        this.form.get('cep').setValue(undefined);
        this.form.get('endereco').setValue(undefined);
        this.form.get('numero').setValue(undefined);
        this.form.get('complemento').setValue(undefined);
        this.form.get('bairro').setValue(undefined);
        this.form.get('cidade').setValue(undefined);
        this.form.get('estado').setValue(undefined);
        this.hideEnderecoFields();
        this.form.updateValueAndValidity({ onlySelf: true });
    }
    localChanged() {
        const local = this.form.get('local').value;
        if (local == _constants_agendamento_constant__WEBPACK_IMPORTED_MODULE_2__.LocalAgendamento.EXTERNO) {
            this.showEnderecoFields();
        }
        else {
            this.hideEnderecoFields();
        }
    }
    //#endregion
    //#region FECHAMENTO
    getSubTotal() {
        return this.total;
    }
    getTotal() {
        return Number(this.total) + Number(this.getDescontoAcrescimo());
    }
    disableOpcoesTipo() {
        return this.selectedOpcaoAcrescimoDesconto && this.selectedOpcaoAcrescimoDesconto != _constants_descontos_constant__WEBPACK_IMPORTED_MODULE_7__.OpcoesAcrescimoDescontoEnum.NAO;
    }
    listenOpcaoAcrescimoDesconto() {
        if (this.selectedOpcaoAcrescimoDesconto == _constants_descontos_constant__WEBPACK_IMPORTED_MODULE_7__.OpcoesAcrescimoDescontoEnum.NAO) {
            this.selectedOpcaoTipo = undefined;
            this.form.get('acrescimo_desconto').setValue(undefined);
            this.form.get('acrescimo_desconto').clearValidators();
            this.form.get('descricao').clearValidators();
        }
        else {
            this.form.get('acrescimo_desconto').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_18__.Validators.required]);
            this.form.get('descricao').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_18__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.Validators.minLength(5)]);
        }
        this.form.get('acrescimo_desconto').updateValueAndValidity();
        this.form.get('descricao').updateValueAndValidity();
    }
    listenOpcoesTipoChange() {
        this.form.get('acrescimo_desconto').setValue(undefined);
    }
    getDescontoAcrescimo() {
        let acrescimo_desconto = this.form.get('acrescimo_desconto').value;
        if (!acrescimo_desconto || acrescimo_desconto == 0) {
            return 0;
        }
        if (this.selectedOpcaoTipo == _constants_descontos_constant__WEBPACK_IMPORTED_MODULE_7__.OpcoesTipoEnum.PERCENTUAL) {
            acrescimo_desconto = this.total * (acrescimo_desconto / 100);
        }
        if (this.selectedOpcaoAcrescimoDesconto == _constants_descontos_constant__WEBPACK_IMPORTED_MODULE_7__.OpcoesAcrescimoDescontoEnum.DESCONTO) {
            acrescimo_desconto = acrescimo_desconto * -1;
        }
        return Number(acrescimo_desconto);
    }
    getDescontoAcrescimoTxt() {
        const valor = this.getDescontoAcrescimo();
        if (!valor || valor == 0) {
            return ' -';
        }
        return valor < 0 ? `(-) ${(valor * -1)}` : `(+) ${valor}`;
    }
    //#endregion
    update() {
        const { id } = this.prestacaoServico;
        const cliente_id = this.form.get('cliente_id').value;
        const colaborador_id = this.form.get('colaborador_id').value;
        const condominio_id = this.form.get('condominio_id').value;
        const servico_id = this.form.get('servico').value;
        const quantidade = Number(this.form.get('quantidade').value);
        const descricao = this.form.get('descricao').value;
        const acrescimo_desconto = this.form.get('acrescimo_desconto').value;
        const pagamento_forma = this.form.get('pagamento_forma').value;
        const local = this.form.get('local').value;
        const itens_prestacao_servico = [{
                servico_id,
                quantidade,
            }];
        let prestacao_servico = {
            cliente_id,
            colaborador_id,
            descricao,
            condominio_id,
            pagamento_forma,
            itens_prestacao_servico,
            local,
        };
        prestacao_servico = _shared_utils_ServicoUtils__WEBPACK_IMPORTED_MODULE_16__.ServicoUtils.setAcrescimoDesconto(this.selectedOpcaoAcrescimoDesconto, this.selectedOpcaoTipo, prestacao_servico, acrescimo_desconto);
        if (this.selectedStatusServico == _constants_status_constant__WEBPACK_IMPORTED_MODULE_4__.StatusServicoEnum.FINALIZADO) {
            this.prestacaoServicosService.updateFinalized(id, prestacao_servico)
                .subscribe(data => {
                this.toastService.presentToast({
                    detalhe: `Sucesso`,
                    titulo: `Prestação de serviço registrada com sucesso`,
                    duracao: _constants_toast_constant__WEBPACK_IMPORTED_MODULE_14__.ToastEnum.mediumDuration,
                    gravidade: _constants_toast_constant__WEBPACK_IMPORTED_MODULE_14__.ToastPrimeSeverityEnum.SUCESSO,
                });
                this.close(true);
            });
            return;
        }
        if (this.selectedStatusServico == _constants_status_constant__WEBPACK_IMPORTED_MODULE_4__.StatusServicoEnum.INICIADO) {
            this.prestacaoServicosService.update(id, prestacao_servico)
                .subscribe(data => {
                this.toastService.presentToast({
                    detalhe: `Sucesso`,
                    titulo: `Prestação de serviço iniciada com sucesso`,
                    duracao: _constants_toast_constant__WEBPACK_IMPORTED_MODULE_14__.ToastEnum.mediumDuration,
                    gravidade: _constants_toast_constant__WEBPACK_IMPORTED_MODULE_14__.ToastPrimeSeverityEnum.SUCESSO,
                });
                this.close(true);
            });
            return;
        }
        if (this.selectedStatusServico == _constants_status_constant__WEBPACK_IMPORTED_MODULE_4__.StatusServicoEnum.AGENDADO) {
            this.prestacaoServicosService.update(id, prestacao_servico)
                .subscribe(data => {
                this.toastService.presentToast({
                    detalhe: `Sucesso`,
                    titulo: `Prestação de serviço agendada com sucesso`,
                    duracao: _constants_toast_constant__WEBPACK_IMPORTED_MODULE_14__.ToastEnum.mediumDuration,
                    gravidade: _constants_toast_constant__WEBPACK_IMPORTED_MODULE_14__.ToastPrimeSeverityEnum.INFORMACAO,
                });
                this.close(true);
            });
            return;
        }
    }
    close(hasUpdate = false) {
        this.modal.dismiss(hasUpdate);
    }
    //#region INPUT-CTRL
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
    clearForm() {
        this.form.reset();
        this.selectedFormaPagamento = undefined;
        this.selectedOpcaoAcrescimoDesconto = undefined;
        this.selectedOpcaoTipo = undefined;
        this.total = undefined;
        this.resetAgendamento();
        this.showAgendamento = false;
        this.selectedStatusServico = _constants_status_constant__WEBPACK_IMPORTED_MODULE_4__.StatusServicoEnum.FINALIZADO;
        this.selectedOpcaoAcrescimoDesconto = _constants_descontos_constant__WEBPACK_IMPORTED_MODULE_7__.OpcoesAcrescimoDescontoEnum.NAO;
        const { condominio, id: colaborador_id } = this.storage.getCompleteLocalUser();
        this.form.get('condominio_id').setValue(condominio.id);
        this.form.get('colaborador_id').setValue(colaborador_id);
        this.form.get('quantidade').setValue(1);
        this.form.get('local').setValue(_constants_agendamento_constant__WEBPACK_IMPORTED_MODULE_2__.LocalAgendamento.LOCAL);
        this.form.updateValueAndValidity({ onlySelf: true });
    }
    generateAgendamentoServicoObject() {
        const data_inicio = this.form.get('data_inicio').value;
        const data_fim = this.form.get('data_fim').value;
        let endereco_compromisso = undefined;
        const local = this.form.get('local').value;
        if (local == _constants_agendamento_constant__WEBPACK_IMPORTED_MODULE_2__.LocalAgendamento.EXTERNO) {
            const cep = this.form.get('cep').value;
            const endereco = this.form.get('endereco').value;
            const numero = this.form.get('numero').value;
            const complemento = this.form.get('complemento').value;
            const bairro = this.form.get('bairro').value;
            const cidade = this.form.get('cidade').value;
            const estado = this.form.get('estado').value;
            endereco_compromisso = {
                cep,
                endereco,
                numero,
                complemento,
                bairro,
                cidade,
                estado,
            };
        }
        return {
            data_inicio,
            data_fim,
            endereco_compromisso,
        };
    }
    showEnderecoFields() {
        this.form.get('cep').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_18__.Validators.required]);
        this.form.get('endereco').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_18__.Validators.required]);
        this.form.get('numero').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_18__.Validators.required]);
        this.form.get('complemento').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_18__.Validators.required]);
        this.form.get('bairro').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_18__.Validators.required]);
        this.form.get('cidade').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_18__.Validators.required]);
        this.form.get('estado').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_18__.Validators.required]);
        this.form.updateValueAndValidity({ onlySelf: true });
        this.liberateEndereco = true;
    }
    hideEnderecoFields() {
        this.form.get('cep').clearValidators();
        this.form.get('cep').setErrors(null);
        this.form.get('endereco').clearValidators();
        this.form.get('endereco').setErrors(null);
        this.form.get('numero').clearValidators();
        this.form.get('numero').setErrors(null);
        this.form.get('complemento').clearValidators();
        this.form.get('complemento').setErrors(null);
        this.form.get('bairro').clearValidators();
        this.form.get('bairro').setErrors(null);
        this.form.get('cidade').clearValidators();
        this.form.get('cidade').setErrors(null);
        this.form.get('estado').clearValidators();
        this.form.get('estado').setErrors(null);
        this.form.updateValueAndValidity({ onlySelf: true });
        this.liberateEndereco = false;
    }
};
ServicosUpdateComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_18__.UntypedFormBuilder },
    { type: _services_user_user_service__WEBPACK_IMPORTED_MODULE_13__.UserService },
    { type: _services_condominio_condominio_service__WEBPACK_IMPORTED_MODULE_12__.CondominioService },
    { type: _services_servico_servicos_service__WEBPACK_IMPORTED_MODULE_8__.ServicosService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_19__.ModalController },
    { type: _services_auth_storage_service__WEBPACK_IMPORTED_MODULE_9__.StorageService },
    { type: _services_toast_toast_message_service__WEBPACK_IMPORTED_MODULE_15__.ToastMessageService },
    { type: _services_prestacao_servicos_prestacao_servicos_service__WEBPACK_IMPORTED_MODULE_5__.PrestacaoServicosService }
];
ServicosUpdateComponent.propDecorators = {
    prestacaoServico: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_20__.Input }]
};
ServicosUpdateComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_21__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_20__.Component)({
        selector: 'app-servicos-update',
        template: _servicos_update_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_servicos_update_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ServicosUpdateComponent);



/***/ }),

/***/ 91391:
/*!**********************************************************!*\
  !*** ./src/app/shared/constants/agendamento.constant.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LocalAgendamento": () => (/* binding */ LocalAgendamento),
/* harmony export */   "LocalAgendamentoItens": () => (/* binding */ LocalAgendamentoItens),
/* harmony export */   "TipoAgendamento": () => (/* binding */ TipoAgendamento),
/* harmony export */   "TipoAgendamentoItens": () => (/* binding */ TipoAgendamentoItens)
/* harmony export */ });
var TipoAgendamento;
(function (TipoAgendamento) {
    TipoAgendamento["PESSOAL"] = "Compromisso Pessoal";
    TipoAgendamento["EVENTO"] = "Evento";
    TipoAgendamento["SERVICO"] = "Servi\u00E7o";
})(TipoAgendamento || (TipoAgendamento = {}));
var LocalAgendamento;
(function (LocalAgendamento) {
    LocalAgendamento["LOCAL"] = "Local";
    LocalAgendamento["EXTERNO"] = "Externo";
    LocalAgendamento["REMOTO"] = "Remoto";
})(LocalAgendamento || (LocalAgendamento = {}));
const TipoAgendamentoItens = [
    {
        label: TipoAgendamento.EVENTO,
        value: TipoAgendamento.EVENTO,
    },
    {
        label: TipoAgendamento.PESSOAL,
        value: TipoAgendamento.PESSOAL,
    },
    {
        label: TipoAgendamento.SERVICO,
        value: TipoAgendamento.SERVICO,
    },
];
const LocalAgendamentoItens = [
    {
        label: "Local",
        value: LocalAgendamento.LOCAL,
    },
    {
        label: "Externo",
        value: LocalAgendamento.EXTERNO,
    },
    {
        label: "Remoto",
        value: LocalAgendamento.REMOTO,
    },
];


/***/ }),

/***/ 50735:
/*!********************************************************!*\
  !*** ./src/app/shared/constants/descontos.constant.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OpcoesAcrescimoDesconto": () => (/* binding */ OpcoesAcrescimoDesconto),
/* harmony export */   "OpcoesAcrescimoDescontoEnum": () => (/* binding */ OpcoesAcrescimoDescontoEnum),
/* harmony export */   "OpcoesTipo": () => (/* binding */ OpcoesTipo),
/* harmony export */   "OpcoesTipoEnum": () => (/* binding */ OpcoesTipoEnum)
/* harmony export */ });
var OpcoesAcrescimoDescontoEnum;
(function (OpcoesAcrescimoDescontoEnum) {
    OpcoesAcrescimoDescontoEnum["NAO"] = "NAO";
    OpcoesAcrescimoDescontoEnum["DESCONTO"] = "DESCONTO";
    OpcoesAcrescimoDescontoEnum["ACRESCIMO"] = "ACRESCIMO";
})(OpcoesAcrescimoDescontoEnum || (OpcoesAcrescimoDescontoEnum = {}));
;
var OpcoesTipoEnum;
(function (OpcoesTipoEnum) {
    OpcoesTipoEnum["FIXO"] = "FIXO";
    OpcoesTipoEnum["PERCENTUAL"] = "PERCENTUAL";
})(OpcoesTipoEnum || (OpcoesTipoEnum = {}));
;
const OpcoesAcrescimoDesconto = [
    {
        label: 'Não',
        value: OpcoesAcrescimoDescontoEnum.NAO
    },
    {
        label: 'Desconto',
        value: OpcoesAcrescimoDescontoEnum.DESCONTO
    },
    {
        label: 'Acréscimo',
        value: OpcoesAcrescimoDescontoEnum.ACRESCIMO
    }
];
const OpcoesTipo = [
    {
        label: 'Fixo',
        value: OpcoesTipoEnum.FIXO
    },
    {
        label: 'Percentual',
        value: OpcoesTipoEnum.PERCENTUAL
    }
];


/***/ }),

/***/ 11177:
/*!*****************************************************!*\
  !*** ./src/app/shared/constants/estado.constant.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Estados": () => (/* binding */ Estados)
/* harmony export */ });
const Estados = [
    { nome: "Acre", sigla: "AC" },
    { nome: "Alagoas", sigla: "AL" },
    { nome: "Amapá", sigla: "AP" },
    { nome: "Amazonas", sigla: "AM" },
    { nome: "Bahia", sigla: "BA" },
    { nome: "Ceará", sigla: "CE" },
    { nome: "Distrito Federal", sigla: "DF" },
    { nome: "Espírito Santo", sigla: "ES" },
    { nome: "Goiás", sigla: "GO" },
    { nome: "Maranhão", sigla: "MA" },
    { nome: "Mato Grosso", sigla: "MT" },
    { nome: "Mato Grosso do Sul", sigla: "MS" },
    { nome: "Minas Gerais", sigla: "MG" },
    { nome: "Pará", sigla: "PA" },
    { nome: "Paraíba", sigla: "PB" },
    { nome: "Paraná", sigla: "PR" },
    { nome: "Pernambuco", sigla: "PE" },
    { nome: "Piauí", sigla: "PI" },
    { nome: "Rio de Janeiro", sigla: "RJ" },
    { nome: "Rio Grande do Norte", sigla: "RN" },
    { nome: "Rio Grande do Sul", sigla: "RS" },
    { nome: "Rondônia", sigla: "RO" },
    { nome: "Roraima", sigla: "RR" },
    { nome: "Santa Catarina", sigla: "SC" },
    { nome: "São Paulo", sigla: "SP" },
    { nome: "Sergipe", sigla: "SE" },
    { nome: "Tocantins", sigla: "TO" }
];


/***/ }),

/***/ 16137:
/*!***************************************************************!*\
  !*** ./src/app/shared/constants/pagamento-formas.constant.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PagamentoFormasEnum": () => (/* binding */ PagamentoFormasEnum),
/* harmony export */   "PagamentoFormasMenu": () => (/* binding */ PagamentoFormasMenu)
/* harmony export */ });
var PagamentoFormasEnum;
(function (PagamentoFormasEnum) {
    PagamentoFormasEnum["DINHEIRO"] = "DINHEIRO";
    PagamentoFormasEnum["CARTAO_CREDITO"] = "CARTAO_CREDITO";
    PagamentoFormasEnum["CARTAO_DEBITO"] = "CARTAO_DEBITO";
    PagamentoFormasEnum["PIX"] = "PIX";
    PagamentoFormasEnum["BOLETO"] = "BOLETO";
})(PagamentoFormasEnum || (PagamentoFormasEnum = {}));
const PagamentoFormasMenu = [
    {
        label: 'Dinheiro',
        value: PagamentoFormasEnum.DINHEIRO
    },
    {
        label: 'Cartão de Crédito',
        value: PagamentoFormasEnum.CARTAO_CREDITO
    },
    {
        label: 'Cartão de Débito',
        value: PagamentoFormasEnum.CARTAO_DEBITO
    },
    {
        label: 'PIX',
        value: PagamentoFormasEnum.PIX
    },
    {
        label: 'Boleto',
        value: PagamentoFormasEnum.BOLETO
    },
];


/***/ }),

/***/ 54692:
/*!*****************************************************!*\
  !*** ./src/app/shared/constants/status.constant.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CargaStatus": () => (/* binding */ CargaStatus),
/* harmony export */   "StatusCliente": () => (/* binding */ StatusCliente),
/* harmony export */   "StatusPatrimonio": () => (/* binding */ StatusPatrimonio),
/* harmony export */   "StatusServico": () => (/* binding */ StatusServico),
/* harmony export */   "StatusServicoEnum": () => (/* binding */ StatusServicoEnum),
/* harmony export */   "StatusServicoWithNoCancelOption": () => (/* binding */ StatusServicoWithNoCancelOption),
/* harmony export */   "StatusTransacao": () => (/* binding */ StatusTransacao),
/* harmony export */   "StatusUser": () => (/* binding */ StatusUser),
/* harmony export */   "StatusUsuarioEnum": () => (/* binding */ StatusUsuarioEnum)
/* harmony export */ });
const StatusTransacao = [
    { nome: "PENDENTE", value: 0 },
    { nome: "REJEITADO", value: 1 },
    { nome: "APROVADO", value: 2 },
];
var CargaStatus;
(function (CargaStatus) {
    CargaStatus["FALHA"] = "FALHA";
    CargaStatus["EM_EXECUCAO"] = "EM EXECUCAO";
    CargaStatus["CONCLUIDO"] = "CONCLUIDO";
})(CargaStatus || (CargaStatus = {}));
;
var StatusUsuarioEnum;
(function (StatusUsuarioEnum) {
    StatusUsuarioEnum["ATIVO"] = "ATIVO";
    StatusUsuarioEnum["AFASTADO"] = "AFASTADO";
    StatusUsuarioEnum["FERIAS"] = "FERIAS";
    StatusUsuarioEnum["DESLIGADO"] = "DESLIGADO";
    StatusUsuarioEnum["DELETADO"] = "DELETADO";
})(StatusUsuarioEnum || (StatusUsuarioEnum = {}));
;
const StatusUser = [
    { label: "Ativo", value: StatusUsuarioEnum.ATIVO },
    { label: "Afastado", value: StatusUsuarioEnum.AFASTADO },
    { label: "Férias", value: StatusUsuarioEnum.FERIAS },
    { label: "Desligado", value: StatusUsuarioEnum.DESLIGADO },
    { label: "Deletado", value: StatusUsuarioEnum.DELETADO },
];
const StatusCliente = [
    { label: "Ativo", value: StatusUsuarioEnum.ATIVO },
    { label: "Inativo", value: StatusUsuarioEnum.DELETADO },
];
var StatusPatrimonioEnum;
(function (StatusPatrimonioEnum) {
    StatusPatrimonioEnum["ATIVO"] = "ATIVO";
    StatusPatrimonioEnum["EM_MANUTENCAO"] = "EM MANUTENCAO";
    StatusPatrimonioEnum["VENDIDO"] = "VENDIDO";
    StatusPatrimonioEnum["FORA_DE_OPERACAO"] = "FORA DE OPERACAO";
})(StatusPatrimonioEnum || (StatusPatrimonioEnum = {}));
;
const StatusPatrimonio = [
    { nome: "ATIVO", value: StatusPatrimonioEnum.ATIVO },
    { nome: "EM_MANUTENCAO", value: StatusPatrimonioEnum.EM_MANUTENCAO },
    { nome: "VENDIDO", value: StatusPatrimonioEnum.VENDIDO },
    { nome: "FORA_DE_OPERACAO", value: StatusPatrimonioEnum.FORA_DE_OPERACAO },
];
var StatusServicoEnum;
(function (StatusServicoEnum) {
    StatusServicoEnum["INICIADO"] = "INICIADO";
    StatusServicoEnum["AGENDADO"] = "AGENDADO";
    StatusServicoEnum["FINALIZADO"] = "FINALIZADO";
    StatusServicoEnum["CANCELADO"] = "CANCELADO";
})(StatusServicoEnum || (StatusServicoEnum = {}));
;
const StatusServico = [
    { label: "Iniciado", value: StatusServicoEnum.INICIADO },
    { label: "Agendar", value: StatusServicoEnum.AGENDADO },
    { label: "Finalizado", value: StatusServicoEnum.FINALIZADO },
    { label: "Cancelado", value: StatusServicoEnum.CANCELADO },
];
const StatusServicoWithNoCancelOption = [
    { label: "Iniciado", value: StatusServicoEnum.INICIADO },
    { label: "Agendar", value: StatusServicoEnum.AGENDADO },
    { label: "Finalizado", value: StatusServicoEnum.FINALIZADO },
];


/***/ }),

/***/ 18109:
/*!********************************************************!*\
  !*** ./src/app/shared/constants/tipo-user.constant.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TipoMoradorEnum": () => (/* binding */ TipoMoradorEnum),
/* harmony export */   "TipoUsuarioEnum": () => (/* binding */ TipoUsuarioEnum)
/* harmony export */ });
var TipoUsuarioEnum;
(function (TipoUsuarioEnum) {
    TipoUsuarioEnum["FUNCIONARIO"] = "FUNCIONARIO";
    TipoUsuarioEnum["CLIENTE"] = "CLIENTE";
    TipoUsuarioEnum["USUARIO"] = "USUARIO";
})(TipoUsuarioEnum || (TipoUsuarioEnum = {}));
var TipoMoradorEnum;
(function (TipoMoradorEnum) {
    TipoMoradorEnum["INQUILINO"] = "INQUILINO";
    TipoMoradorEnum["PREPONENTE1"] = "PREPONENTE1";
    TipoMoradorEnum["PREPONENTE2"] = "PREPONENTE2";
    TipoMoradorEnum["PREPONENTE3"] = "PREPONENTE3";
    TipoMoradorEnum["REPASSE"] = "REPASSE";
})(TipoMoradorEnum || (TipoMoradorEnum = {}));


/***/ }),

/***/ 91475:
/*!**********************************************************************************!*\
  !*** ./src/app/shared/services/prestacao-servicos/prestacao-servicos.service.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrestacaoServicosService": () => (/* binding */ PrestacaoServicosService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _interfaces_others_pageable_dto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../interfaces/others/pageable.dto */ 40199);
/* harmony import */ var _utils_PageUtils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/PageUtils */ 55583);
/* harmony import */ var _config_api_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../config/api.config */ 99038);






let PrestacaoServicosService = class PrestacaoServicosService {
    constructor(http) {
        this.http = http;
    }
    createFinalized(dto) {
        return this.http.post(`${_config_api_config__WEBPACK_IMPORTED_MODULE_2__.API_CONFIG.baseURL}/prestacao/servicos/finalized`, dto, {
            responseType: 'json',
        });
    }
    create(dto) {
        return this.http.post(`${_config_api_config__WEBPACK_IMPORTED_MODULE_2__.API_CONFIG.baseURL}/prestacao/servicos`, dto, {
            responseType: 'json',
        });
    }
    updateFinalized(id, dto) {
        return this.http.put(`${_config_api_config__WEBPACK_IMPORTED_MODULE_2__.API_CONFIG.baseURL}/prestacao/servicos/${id}/finalized`, dto, {
            responseType: 'json',
        });
    }
    update(id, dto) {
        return this.http.put(`${_config_api_config__WEBPACK_IMPORTED_MODULE_2__.API_CONFIG.baseURL}/prestacao/servicos/${id}`, dto, {
            responseType: 'json',
        });
    }
    list(filterDto, pageOptions = new _interfaces_others_pageable_dto__WEBPACK_IMPORTED_MODULE_0__.PageOptionsDto()) {
        let params = _utils_PageUtils__WEBPACK_IMPORTED_MODULE_1__.PageUtils.getPageOptionsParams(pageOptions);
        if (filterDto) {
            if (filterDto.acrescimo_desconto) {
                params = params.append('acrescimo_desconto', filterDto.acrescimo_desconto);
            }
            if (filterDto.cliente_id) {
                params = params.append('cliente_id', filterDto.cliente_id);
            }
            if (filterDto.colaborador_id) {
                params = params.append('colaborador_id', filterDto.colaborador_id);
            }
            if (filterDto.created_at) {
                params = params.append('created_at', filterDto.created_at.toDateString());
            }
            if (filterDto.local) {
                params = params.append('local', filterDto.local);
            }
            if (filterDto.condominio_id) {
                params = params.append('condominio_id', filterDto.condominio_id);
            }
            if (filterDto.max_total) {
                params = params.append('max_total', filterDto.max_total);
            }
            if (filterDto.min_total) {
                params = params.append('min_total', filterDto.min_total);
            }
            if (filterDto.pagamento_forma) {
                params = params.append('pagamento_forma', filterDto.pagamento_forma);
            }
            if (filterDto.searchedCliente) {
                params = params.append('searchedCliente', filterDto.searchedCliente);
            }
            if (filterDto.searchedColaborador) {
                params = params.append('searchedColaborador', filterDto.searchedColaborador);
            }
            if (filterDto.searchedCondominio) {
                params = params.append('searchedCondominio', filterDto.searchedCondominio);
            }
            if (filterDto.searchedPrestacaoServico) {
                params = params.append('searchedPrestacaoServico', filterDto.searchedPrestacaoServico);
            }
            if (filterDto.status_servico) {
                params = params.append('status_servico', filterDto.status_servico);
            }
        }
        return this.http.get(`${_config_api_config__WEBPACK_IMPORTED_MODULE_2__.API_CONFIG.baseURL}/prestacao/servicos`, {
            responseType: 'json',
            params,
        });
    }
    findById(id) {
        return this.http.get(`${_config_api_config__WEBPACK_IMPORTED_MODULE_2__.API_CONFIG.baseURL}/prestacao/servicos/${id}`, {
            responseType: 'json',
        });
    }
    initiateById(id) {
        return this.http.patch(`${_config_api_config__WEBPACK_IMPORTED_MODULE_2__.API_CONFIG.baseURL}/prestacao/servicos/${id}/initiate`, {
            responseType: 'json',
        });
    }
    finalizeById(id) {
        return this.http.patch(`${_config_api_config__WEBPACK_IMPORTED_MODULE_2__.API_CONFIG.baseURL}/prestacao/servicos/${id}/finalize`, {
            responseType: 'json',
        });
    }
    cancelById(id) {
        return this.http.delete(`${_config_api_config__WEBPACK_IMPORTED_MODULE_2__.API_CONFIG.baseURL}/prestacao/servicos/${id}`, {
            responseType: 'json',
        });
    }
};
PrestacaoServicosService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient }
];
PrestacaoServicosService = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable)({
        providedIn: 'root'
    })
], PrestacaoServicosService);



/***/ }),

/***/ 7475:
/*!*************************************************************!*\
  !*** ./src/app/shared/services/servico/servicos.service.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ServicosService": () => (/* binding */ ServicosService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_config_api_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/config/api.config */ 99038);
/* harmony import */ var _interfaces_others_pageable_dto__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../interfaces/others/pageable.dto */ 40199);
/* harmony import */ var _utils_PageUtils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/PageUtils */ 55583);






let ServicosService = class ServicosService {
    constructor(http) {
        this.http = http;
    }
    create(dto) {
        return this.http.post(`${src_config_api_config__WEBPACK_IMPORTED_MODULE_0__.API_CONFIG.baseURL}/servicos`, dto, {
            responseType: 'json',
        });
    }
    update(id, dto) {
        return this.http.put(`${src_config_api_config__WEBPACK_IMPORTED_MODULE_0__.API_CONFIG.baseURL}/servicos/${id}`, dto, {
            responseType: 'json',
        });
    }
    list(filterDto, pageOptions = new _interfaces_others_pageable_dto__WEBPACK_IMPORTED_MODULE_1__.PageOptionsDto()) {
        let params = _utils_PageUtils__WEBPACK_IMPORTED_MODULE_2__.PageUtils.getPageOptionsParams(pageOptions);
        if (filterDto && filterDto.searchedServico) {
            params = params.append('searchedServico', filterDto.searchedServico);
        }
        if (filterDto && filterDto.nome) {
            params = params.append('nome', filterDto.nome);
        }
        if (filterDto && filterDto.descricao) {
            params = params.append('descricao', filterDto.descricao);
        }
        return this.http.get(`${src_config_api_config__WEBPACK_IMPORTED_MODULE_0__.API_CONFIG.baseURL}/servicos`, {
            responseType: 'json',
            params,
        });
    }
    listBasic() {
        return this.http.get(`${src_config_api_config__WEBPACK_IMPORTED_MODULE_0__.API_CONFIG.baseURL}/servicos/basic/list`, {
            responseType: 'json',
        });
    }
    findById(id) {
        return this.http.get(`${src_config_api_config__WEBPACK_IMPORTED_MODULE_0__.API_CONFIG.baseURL}/servicos/${id}`, {
            responseType: 'json',
        });
    }
};
ServicosService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient }
];
ServicosService = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable)({
        providedIn: 'root'
    })
], ServicosService);



/***/ }),

/***/ 5241:
/*!**********************************************!*\
  !*** ./src/app/shared/utils/ServicoUtils.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ServicoUtils": () => (/* binding */ ServicoUtils)
/* harmony export */ });
/* harmony import */ var _constants_descontos_constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/descontos.constant */ 50735);

class ServicoUtils {
    static setAcrescimoDesconto(opcao, tipo, servico, acrescimo_desconto) {
        if (opcao == _constants_descontos_constant__WEBPACK_IMPORTED_MODULE_0__.OpcoesAcrescimoDescontoEnum.NAO) {
            delete servico.descricao;
            return servico;
        }
        if (opcao == _constants_descontos_constant__WEBPACK_IMPORTED_MODULE_0__.OpcoesAcrescimoDescontoEnum.ACRESCIMO) {
            if (tipo == _constants_descontos_constant__WEBPACK_IMPORTED_MODULE_0__.OpcoesTipoEnum.FIXO) {
                servico.valor_acrescimo = acrescimo_desconto;
            }
            else {
                servico.percentual_acrescimo = acrescimo_desconto;
            }
        }
        else {
            if (tipo == _constants_descontos_constant__WEBPACK_IMPORTED_MODULE_0__.OpcoesTipoEnum.FIXO) {
                servico.valor_desconto = acrescimo_desconto;
            }
            else {
                servico.percentual_desconto = acrescimo_desconto;
            }
        }
        return servico;
    }
}


/***/ }),

/***/ 73514:
/*!************************************************************************************************************************************!*\
  !*** ./src/app/shared/components/prestacao-servicos-module/simplificado/servicos-update/servicos-update.component.scss?ngResource ***!
  \************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZXJ2aWNvcy11cGRhdGUuY29tcG9uZW50LnNjc3MifQ== */";

/***/ }),

/***/ 75324:
/*!************************************************************************************************************************************!*\
  !*** ./src/app/shared/components/prestacao-servicos-module/simplificado/servicos-update/servicos-update.component.html?ngResource ***!
  \************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-content appScrollTheme>\n  <form *ngIf=\"prestacaoServico\" [formGroup]=\"form\" (ngSubmit)=\"$event.preventDefault()\">\n    <div class=\"wall-background px-4 py-6 md:px-6 lg:px-8\">\n      <div class=\"text-900 font-medium text-xl mb-3\">Atualizar</div>\n      <div class=\"surface-card p-4 shadow-2 border-round p-fluid\">\n        <div class=\"grid formgrid p-fluid\">\n          <div id=\"loja\" *ngIf=\"lojas\" class=\"field mb-4 col-12 justify-content-start\">\n            <label for=\"loja_id\">Loja</label>\n            <p-dropdown id=\"loja_id\" #drop_loja [options]=\"lojas.data\" formControlName=\"loja_id\" optionLabel=\"nome\"\n              [filter]=\"true\" placeholder=\"Selecione a loja de atendimento\" optionValue=\"id\" [virtualScroll]=\"true\"\n              [virtualScrollItemSize]=\"38\" [lazy]=\"true\"\n              [virtualScrollOptions]=\"{ showLoader: true, loading: loading, delay: 250 }\"\n              (onLazyLoad)=\"paginarLoja($event)\" (onFilter)=\"onLojaFilter($event)\"\n              (onFocus)=\"blurLoja($event, drop_loja)\">\n              <ng-template pTemplate=\"loader\" let-options=\"options\">\n                <div class=\"flex align-items-center py-2 px-3\" style=\"height: 38px\">\n                  <p-skeleton [width]=\"options.even ? '60%' : '50%'\" height=\"1rem\"></p-skeleton>\n                </div>\n              </ng-template>\n            </p-dropdown>\n          </div>\n          <p-divider class=\"w-full px-2 mb-3\"></p-divider>\n\n          <div *ngIf=\"colaboradores\" class=\"col-12 field mb-5\">\n            <label for=\"colaboradores\" class=\"text-900 font-medium mb-3\">Prestador</label>\n            <p-dropdown id=\"colaboradores\" #drop_colaborador [options]=\"colaboradores.data\"\n              formControlName=\"colaborador_id\" optionLabel=\"nome\" optionValue=\"id\" [filter]=\"true\"\n              placeholder=\"Selecione o colaborador que fará o serviço\" [virtualScroll]=\"true\"\n              [virtualScrollItemSize]=\"38\" [lazy]=\"true\"\n              [virtualScrollOptions]=\"{ showLoader: true, loading: loading, delay: 250 }\"\n              (onLazyLoad)=\"paginarColaborador($event)\" (onFilter)=\"onColaboradorFilter($event)\"\n              (onFocus)=\"blurColaborador($event, drop_colaborador)\">\n              <ng-template pTemplate=\"loader\" let-options=\"options\">\n                <div class=\"flex align-items-center py-2 px-3\" style=\"height: 38px\">\n                  <p-skeleton [width]=\"options.even ? '60%' : '50%'\" height=\"1rem\"></p-skeleton>\n                </div>\n              </ng-template>\n            </p-dropdown>\n          </div>\n          <p-divider class=\"w-full px-2 mb-3\"></p-divider>\n\n          <div *ngIf=\"clients\" class=\"col-12 field mb-5\">\n            <label for=\"clients\" class=\"text-900 font-medium mb-3\">Cliente</label>\n            <p-dropdown id=\"clients\" #drop_client [options]=\"clients.data\" formControlName=\"cliente_id\"\n              optionLabel=\"nome\" [filter]=\"true\" placeholder=\"Selecione um cliente\" optionValue=\"id\"\n              [virtualScroll]=\"true\" [virtualScrollItemSize]=\"38\" [lazy]=\"true\"\n              [virtualScrollOptions]=\"{ showLoader: true, loading: loading, delay: 250 }\"\n              (onLazyLoad)=\"paginarClient($event)\" (onFilter)=\"onClientFilter($event)\"\n              (onFocus)=\"blurClient($event, drop_client)\">\n              <ng-template pTemplate=\"loader\" let-options=\"options\">\n                <div class=\"flex align-items-center py-2 px-3\" style=\"height: 38px\">\n                  <p-skeleton [width]=\"options.even ? '60%' : '50%'\" height=\"1rem\"></p-skeleton>\n                </div>\n              </ng-template>\n            </p-dropdown>\n          </div>\n          <p-divider class=\"w-full px-2 mb-3\"></p-divider>\n\n          <div *ngIf=\"servicos\" class=\"col-8 lg:col-10 field mb-5\">\n            <label for=\"servicos\" class=\"text-900 font-medium mb-3\">Serviço a ser prestado</label>\n            <div class=\"ml-3 cursor-pointer pi pi-question-circle\" (click)=\"detailServico()\"></div>\n            <p-dropdown id=\"servicos\" #drop_client [options]=\"servicos.data\" formControlName=\"servico\"\n              optionLabel=\"nome\" optionValue=\"id\" [filter]=\"true\" placeholder=\"Selecione um serviço\" [virtualScroll]=\"true\"\n              [virtualScrollItemSize]=\"38\" [lazy]=\"true\"\n              [virtualScrollOptions]=\"{ showLoader: true, loading: loading, delay: 250 }\"\n              (onLazyLoad)=\"paginarServico($event)\" (onFilter)=\"onServicoFilter($event)\"\n              (onFocus)=\"blurServico($event, drop_client)\" (onChange)=\"onServicoChange($event)\">\n              <ng-template pTemplate=\"loader\" let-options=\"options\">\n                <div class=\"flex align-items-center py-2 px-3\" style=\"height: 38px\">\n                  <p-skeleton [width]=\"options.even ? '60%' : '50%'\" height=\"1rem\"></p-skeleton>\n                </div>\n              </ng-template>\n            </p-dropdown>\n          </div>\n          <div *ngIf=\"servicos\" class=\"col-4 lg:col-2 field mb-5\">\n            <label for=\"quantidade\" class=\"text-900 font-medium mb-3\">Quantidade</label>\n            <p-inputNumber id=\"quantidade\" [showButtons]=\"true\" buttonLayout=\"horizontal\" spinnerMode=\"horizontal\"\n              min=\"1\" inputStyleClass=\"w-2rem text-center py-2 px-1 border-transparent\"\n              class=\"border-1 surface-border border-round\" formControlName=\"quantidade\"\n              decrementButtonClass=\"p-button-text text-600 hover:text-primary py-1 px-1\"\n              incrementButtonClass=\"p-button-text text-600 hover:text-primary py-1 px-1\"\n              incrementButtonIcon=\"pi pi-plus\" decrementButtonIcon=\"pi pi-minus\" (onBlur)=\"changeQuantidade()\"\n              (onInput)=\"changeQuantidade()\">\n            </p-inputNumber>\n          </div>\n          <p-divider class=\"w-full px-2 mb-3\"></p-divider>\n\n          <div class=\"col-12 field\">\n            <label for=\"pagamento_forma\" class=\"text-900 font-medium mb-2 font-bold\">Forma de pagamento</label>\n            <p-dropdown id=\"pagamento_forma\" [options]=\"formasPagamento\" formControlName=\"pagamento_forma\"\n              placeholder=\"Forma de pagamento\">\n            </p-dropdown>\n          </div>\n          <p-divider class=\"w-full px-2 mb-3\"></p-divider>\n\n          <ng-container id=\"acrescimo_desconto\">\n            <div class=\"col-12 md:col-6 field mb-3\">\n              <label for=\"desconto_acrescimo\" class=\"text-900 font-medium mb-1 font-bold\">Acréscimo/Desconto?</label>\n              <p-dropdown id=\"desconto_acrescimo\" [options]=\"opcoesAcrescimoDesconto\"\n                [(ngModel)]=\"selectedOpcaoAcrescimoDesconto\" [ngModelOptions]=\"{standalone: true}\"\n                placeholder=\"Selecione\" (onChange)=\"listenOpcaoAcrescimoDesconto()\">\n              </p-dropdown>\n            </div>\n            <div *ngIf=\"disableOpcoesTipo()\" class=\"col-12 md:col-6 field mb-3\">\n              <label for=\"tipo_desconto_acrescimo\" class=\"text-900 font-medium mb-1 font-bold\">Tipo de\n                Acréscimo/Desconto</label>\n              <p-dropdown id=\"tipo_desconto_acrescimo\" [options]=\"opcoesTipo\" [(ngModel)]=\"selectedOpcaoTipo\"\n                [ngModelOptions]=\"{standalone: true}\" placeholder=\"Selecione\" (onChange)=\"listenOpcoesTipoChange()\">\n              </p-dropdown>\n            </div>\n\n            <div *ngIf=\"selectedOpcaoTipo == 'FIXO'\" class=\"field mb-4 col-12\">\n              <label for=\"acrescimo_desconto\" class=\"font-medium text-900\">Valor (FIXO)</label>\n              <p-inputNumber id=\"acrescimo_desconto\" formControlName=\"acrescimo_desconto\" mode=\"decimal\"\n                [minFractionDigits]=\"2\" [maxFractionDigits]=\"2\"></p-inputNumber>\n            </div>\n            <div *ngIf=\"selectedOpcaoTipo == 'PERCENTUAL'\" class=\"field mb-4 col-12\">\n              <label for=\"acrescimo_desconto\" class=\"font-medium text-900\">Valor (PERCENTUAL)</label>\n              <p-inputNumber id=\"acrescimo_desconto\" formControlName=\"acrescimo_desconto\" max=\"100\"></p-inputNumber>\n            </div>\n            <div *ngIf=\"selectedOpcaoTipo\" class=\"field mb-4 col-12\">\n              <label for=\"descricao\" class=\"font-medium text-900\">Justificativa</label>\n              <input id=\"descricao\" type=\"text\" pInputText formControlName=\"descricao\">\n            </div>\n          </ng-container>\n          <p-divider class=\"w-full px-2 mb-3\"></p-divider>\n\n          <div class=\"col-12 md:col-6 field\">\n            <label for=\"status_servico\" class=\"text-900 font-medium mb-2 font-bold\">Status do serviço</label>\n            <div class=\"ml-3 cursor-pointer pi pi-question-circle\" (click)=\"showStatusDialog = true\"></div>\n            <p-dropdown id=\"status_servico\" [options]=\"statusServico\" [(ngModel)]=\"selectedStatusServico\"\n              [ngModelOptions]=\"{standalone: true}\" placeholder=\"Status do serviço\"\n              (onChange)=\"changeStatusServico($event)\">\n            </p-dropdown>\n          </div>\n          <div *ngIf=\"selectedStatusServico == 'AGENDADO'\" class=\"col-12 md:col-6 field\">\n            <label for=\"local\" class=\"text-900 font-medium mb-2 font-bold\">Local da prestação</label>\n            <p-dropdown inputId=\"local\" [options]=\"localAgendamentos\" optionLabel=\"label\" formControlName=\"local\"\n              optionValue=\"value\" [showClear]=\"true\" placeholder=\"Selecione o local\" (onChange)=\"localChanged()\">\n              <ng-template let-local pTemplate=\"item\">\n                <div class=\"flex align-items-center\">\n                  <div>{{local.label}}</div>\n                </div>\n              </ng-template>\n            </p-dropdown>\n          </div>\n          <p-divider class=\"w-full px-2 mb-3\"></p-divider>\n\n          <ng-container *ngIf=\"showAgendamento\" id=\"agendamento\">\n            <p-panel class=\"mb-4 col-12\" header=\"Agendamento\" [toggleable]=\"true\" [collapsed]=\"false\" iconPos=\"end\">\n              <ng-template pTemplate=\"icons\">\n                <button pButton class=\"p-panel-header-icon p-link\" (click)=\"menu.toggle($event)\">\n                  <span class=\"pi pi-cog\"></span>\n                </button>\n                <p-menu #menu id=\"config_menu\" [model]=\"menuAgendamento\" [popup]=\"true\" appendTo=\"body\"></p-menu>\n              </ng-template>\n\n              <ng-template pTemplate=\"content\">\n                <div class=\"grid formgrid p-fluid\">\n                  <div class=\"field mb-4 col-12 md:col-6\">\n                    <label for=\"data_inicio\" class=\"font-medium text-900\">Prev. Início</label>\n                    <p-calendar id=\"data_inicio\" [showTime]=\"true\" [showIcon]=\"true\" formControlName=\"data_inicio\"\n                      showButtonBar=\"true\">\n                    </p-calendar>\n                  </div>\n                  <div class=\"field mb-4 col-12 md:col-6\">\n                    <label for=\"data_fim\" class=\"font-medium text-900\">Prev. Fim</label>\n                    <p-calendar id=\"data_fim\" [showTime]=\"true\" [showIcon]=\"true\" formControlName=\"data_fim\"\n                      showButtonBar=\"true\"></p-calendar>\n                  </div>\n\n\n                  <ng-container *ngIf=\"liberateEndereco\">\n                    <div class=\"field mb-4 col-12 md:col-6\">\n                      <label for=\"cep\" class=\"font-medium text-900\">Cep</label>\n                      <input id=\"cep\" type=\"text\" pInputText formControlName=\"cep\">\n                    </div>\n                    <div class=\"field mb-4 col-12 md:col-6\">\n                      <label for=\"endereco\" class=\"font-medium text-900\">Endereço</label>\n                      <input id=\"endereco\" type=\"text\" pInputText formControlName=\"endereco\">\n                    </div>\n                    <div class=\"field mb-4 col-12 md:col-6\">\n                      <label for=\"numero\" class=\"font-medium text-900\">Número</label>\n                      <input id=\"numero\" type=\"text\" pInputText formControlName=\"numero\">\n                    </div>\n                    <div class=\"field mb-4 col-12 md:col-6\">\n                      <label for=\"complemento\" class=\"font-medium text-900\">Complemento</label>\n                      <input id=\"complemento\" type=\"text\" pInputText formControlName=\"complemento\">\n                    </div>\n                    <div class=\"field mb-4 col-12 md:col-6\">\n                      <label for=\"bairro\" class=\"font-medium text-900\">Bairro</label>\n                      <input id=\"bairro\" type=\"text\" pInputText formControlName=\"bairro\">\n                    </div>\n                    <div class=\"field mb-4 col-12 md:col-6\">\n                      <label for=\"cidade\" class=\"font-medium text-900\">Cidade</label>\n                      <input id=\"cidade\" type=\"text\" pInputText formControlName=\"cidade\">\n                    </div>\n                    <div class=\"field mb-4 col-12 md:col-6\">\n                      <label for=\"estados\" class=\"font-medium text-900\">Estado</label>\n                      <p-dropdown inputId=\"estados\" [options]=\"listEstados\" formControlName=\"estado\" optionLabel=\"nome\"\n                        optionValue=\"sigla\" [showClear]=\"true\" placeholder=\"Selecione o estado\">\n                        <ng-template let-estado pTemplate=\"item\">\n                          <div class=\"flex align-items-center\">\n                            <div>{{estado.nome}}</div>\n                          </div>\n                        </ng-template>\n                      </p-dropdown>\n                    </div>\n                    <div class=\"surface-border border-top-1 opacity-50 mb-4 col-12\"></div>\n                  </ng-container>\n                </div>\n              </ng-template>\n            </p-panel>\n          </ng-container>\n          <p-divider class=\"w-full px-2 mb-3\"></p-divider>\n\n          <div class=\"col-6 ml-auto py-2 mt-3 border-bottom-1 border-primary\">\n            <div class=\"flex justify-content-between align-items-center mb-3\">\n              <span class=\"text-900\">Subtotal</span>\n              <span class=\"text-900\">R$ {{ getSubTotal() | currency:'BRL': '' }}</span>\n            </div>\n            <div class=\"flex justify-content-between align-items-center mb-3\">\n              <span class=\"text-900\">Desconto/Acréscimo</span>\n              <span class=\"text-900\">R${{ getDescontoAcrescimoTxt() }}</span>\n            </div>\n            <div class=\"flex justify-content-between align-items-center mb-3\">\n              <span class=\"text-900\">Total</span>\n              <span class=\"text-900 font-bold\">R$ {{ getTotal() | currency:'BRL': '' }}</span>\n            </div>\n          </div>\n          <p-divider class=\"w-full px-2 mb-3 border-primary\"></p-divider>\n        </div>\n        <div class=\"flex justify-content-between\">\n          <button pButton pRipple label=\"Fechar\" icon=\"pi pi-times\" iconPos=\"right\" class=\"w-auto p-button-danger p-button-outlined\" \n          (click)=\"close()\" ></button>\n          <button pButton pRipple label=\"Atualizar\" icon=\"pi pi-send\" iconPos=\"right\" class=\"w-auto\" (click)=\"update()\"\n            [disabled]=\"disableCreateBtn()\"></button>\n        </div>\n      </div>\n    </div>\n  </form>\n</ion-content>\n\n<app-question-servico [showDialog]=\"showDialog\" [selectedServico]=\"selectedServico\"\n  (closeEvent)=\"selectedServico = undefined; showDialog = false;\"></app-question-servico>\n<app-question-status-servico [showDialog]=\"showStatusDialog\"\n  (closeEvent)=\"showStatusDialog = false\"></app-question-status-servico>";

/***/ })

}]);
//# sourceMappingURL=default-src_app_shared_components_prestacao-servicos-module_simplificado_servicos-update_serv-3fc7e5.js.map