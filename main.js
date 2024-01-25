(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["main"],{

/***/ 90158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _guards_auth_guard_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./guards/auth-guard.guard */ 38660);
/* harmony import */ var _shared_constants_role_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/constants/role.constants */ 34057);

/* eslint-disable max-len */




const routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_primeng_fesm2020_primeng-checkbox_mjs"), __webpack_require__.e("default-node_modules_capacitor_core_dist_index_js"), __webpack_require__.e("default-node_modules_primeng_fesm2020_primeng-carousel_mjs"), __webpack_require__.e("src_app_pages_login_login_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/login/login.module */ 21053)).then(m => m.LoginPageModule)
    },
    {
        path: 'password-reset',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_primeng_fesm2020_primeng-message_mjs-node_modules_primeng_fesm2020_prime-a8a636"), __webpack_require__.e("default-node_modules_primeng_fesm2020_primeng-steps_mjs"), __webpack_require__.e("src_app_pages_password-reset_password-reset_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/password-reset/password-reset.module */ 8373)).then(m => m.PasswordResetPageModule),
    },
    {
        path: 'home',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_primeng_fesm2020_primeng-message_mjs-node_modules_primeng_fesm2020_prime-a8a636"), __webpack_require__.e("default-node_modules_primeng_fesm2020_primeng-dropdown_mjs-node_modules_primeng_fesm2020_prim-3f7cdc"), __webpack_require__.e("default-node_modules_primeng_fesm2020_primeng-calendar_mjs-node_modules_primeng_fesm2020_prim-bea40d"), __webpack_require__.e("default-node_modules_primeng_fesm2020_primeng-menu_mjs-node_modules_primeng_fesm2020_primeng--44111c"), __webpack_require__.e("default-node_modules_primeng_fesm2020_primeng-dataview_mjs"), __webpack_require__.e("default-node_modules_primeng_fesm2020_primeng-confirmdialog_mjs"), __webpack_require__.e("default-src_app_shared_services_condominio_condominio_service_ts-node_modules_primeng_fesm202-6cbfe1"), __webpack_require__.e("default-node_modules_primeng_fesm2020_primeng-checkbox_mjs"), __webpack_require__.e("default-node_modules_primeng_fesm2020_primeng-table_mjs"), __webpack_require__.e("default-src_app_shared_components_utils_attention-surface_attention-surface_module_ts-node_mo-9feefa"), __webpack_require__.e("default-node_modules_primeng_fesm2020_primeng-inputmask_mjs-node_modules_primeng_fesm2020_pri-07470e"), __webpack_require__.e("default-node_modules_primeng_fesm2020_primeng-steps_mjs"), __webpack_require__.e("default-src_app_shared_components_authorization-module_authorization-module_module_ts-src_app-dafcf0"), __webpack_require__.e("default-src_app_shared_components_endereco-module_endereco_module_ts"), __webpack_require__.e("default-node_modules_capacitor_core_dist_index_js"), __webpack_require__.e("default-src_app_shared_constants_system_constant_ts-src_app_shared_services_adm-financeira_co-66b025"), __webpack_require__.e("default-src_app_shared_components_adm-recurso-module_adm-recurso-module_module_ts"), __webpack_require__.e("default-src_app_shared_constants_tipo-user_constant_ts-node_modules_primeng_fesm2020_primeng--8d0424"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_home_home_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/home/home.module */ 57994)).then(m => m.HomePageModule),
        canLoad: [_guards_auth_guard_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuardGuard],
    },
    {
        path: 'perfil',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_primeng_fesm2020_primeng-message_mjs-node_modules_primeng_fesm2020_prime-a8a636"), __webpack_require__.e("default-node_modules_primeng_fesm2020_primeng-dropdown_mjs-node_modules_primeng_fesm2020_prim-3f7cdc"), __webpack_require__.e("default-node_modules_primeng_fesm2020_primeng-calendar_mjs-node_modules_primeng_fesm2020_prim-bea40d"), __webpack_require__.e("default-node_modules_primeng_fesm2020_primeng-menu_mjs-node_modules_primeng_fesm2020_primeng--44111c"), __webpack_require__.e("default-node_modules_primeng_fesm2020_primeng-dataview_mjs"), __webpack_require__.e("default-node_modules_primeng_fesm2020_primeng-confirmdialog_mjs"), __webpack_require__.e("default-src_app_shared_services_condominio_condominio_service_ts-node_modules_primeng_fesm202-6cbfe1"), __webpack_require__.e("default-node_modules_primeng_fesm2020_primeng-checkbox_mjs"), __webpack_require__.e("default-node_modules_primeng_fesm2020_primeng-table_mjs"), __webpack_require__.e("default-src_app_shared_components_utils_attention-surface_attention-surface_module_ts-node_mo-9feefa"), __webpack_require__.e("default-node_modules_primeng_fesm2020_primeng-inputmask_mjs-node_modules_primeng_fesm2020_pri-07470e"), __webpack_require__.e("default-node_modules_primeng_fesm2020_primeng-steps_mjs"), __webpack_require__.e("default-src_app_shared_components_authorization-module_authorization-module_module_ts-src_app-dafcf0"), __webpack_require__.e("default-src_app_shared_components_endereco-module_endereco_module_ts"), __webpack_require__.e("default-node_modules_capacitor_core_dist_index_js"), __webpack_require__.e("default-src_app_shared_constants_system_constant_ts-src_app_shared_services_adm-financeira_co-66b025"), __webpack_require__.e("default-src_app_shared_components_adm-recurso-module_adm-recurso-module_module_ts"), __webpack_require__.e("src_app_pages_perfil_perfil_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/perfil/perfil.module */ 16217)).then(m => m.PerfilPageModule),
        canLoad: [_guards_auth_guard_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuardGuard],
    },
    {
        path: 'administracao-financeira',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_primeng_fesm2020_primeng-message_mjs-node_modules_primeng_fesm2020_prime-a8a636"), __webpack_require__.e("default-node_modules_primeng_fesm2020_primeng-dropdown_mjs-node_modules_primeng_fesm2020_prim-3f7cdc"), __webpack_require__.e("default-node_modules_primeng_fesm2020_primeng-calendar_mjs-node_modules_primeng_fesm2020_prim-bea40d"), __webpack_require__.e("default-node_modules_primeng_fesm2020_primeng-menu_mjs-node_modules_primeng_fesm2020_primeng--44111c"), __webpack_require__.e("default-node_modules_primeng_fesm2020_primeng-dataview_mjs"), __webpack_require__.e("default-node_modules_primeng_fesm2020_primeng-confirmdialog_mjs"), __webpack_require__.e("default-src_app_shared_services_condominio_condominio_service_ts-node_modules_primeng_fesm202-6cbfe1"), __webpack_require__.e("default-node_modules_primeng_fesm2020_primeng-checkbox_mjs"), __webpack_require__.e("default-node_modules_primeng_fesm2020_primeng-table_mjs"), __webpack_require__.e("default-src_app_shared_components_utils_attention-surface_attention-surface_module_ts-node_mo-9feefa"), __webpack_require__.e("default-node_modules_primeng_fesm2020_primeng-inputmask_mjs-node_modules_primeng_fesm2020_pri-07470e"), __webpack_require__.e("default-node_modules_primeng_fesm2020_primeng-steps_mjs"), __webpack_require__.e("default-src_app_shared_components_authorization-module_authorization-module_module_ts-src_app-dafcf0"), __webpack_require__.e("default-src_app_shared_components_endereco-module_endereco_module_ts"), __webpack_require__.e("default-node_modules_capacitor_core_dist_index_js"), __webpack_require__.e("default-src_app_shared_constants_system_constant_ts-src_app_shared_services_adm-financeira_co-66b025"), __webpack_require__.e("default-src_app_shared_components_adm-recurso-module_adm-recurso-module_module_ts"), __webpack_require__.e("default-node_modules_primeng_fesm2020_primeng-multiselect_mjs-node_modules_primeng_fesm2020_p-eeedc2"), __webpack_require__.e("default-src_app_shared_services_relatorio_report_service_ts-node_modules_primeng_fesm2020_pri-acda3b"), __webpack_require__.e("default-src_app_shared_components_adm-financeira-module_pagamentos_pagamentos_module_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_administracao-financeira_administracao-financeira_module_ts-src_app_shared_serv-297cf4")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/administracao-financeira/administracao-financeira.module */ 93785)).then(m => m.AdministracaoFinanceiraPageModule),
        // canLoad: [AuthGuardGuard],
        canLoad: [false],
        canActivate: [_guards_auth_guard_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuardGuard],
        data: {
            role: [_shared_constants_role_constants__WEBPACK_IMPORTED_MODULE_1__.Role.ADMIN, _shared_constants_role_constants__WEBPACK_IMPORTED_MODULE_1__.Role.SUPERVISOR, _shared_constants_role_constants__WEBPACK_IMPORTED_MODULE_1__.Role.ADMIN_TI],
        }
    },
    {
        path: 'administracao-recurso',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_primeng_fesm2020_primeng-message_mjs-node_modules_primeng_fesm2020_prime-a8a636"), __webpack_require__.e("default-node_modules_primeng_fesm2020_primeng-dropdown_mjs-node_modules_primeng_fesm2020_prim-3f7cdc"), __webpack_require__.e("default-node_modules_primeng_fesm2020_primeng-calendar_mjs-node_modules_primeng_fesm2020_prim-bea40d"), __webpack_require__.e("default-node_modules_primeng_fesm2020_primeng-menu_mjs-node_modules_primeng_fesm2020_primeng--44111c"), __webpack_require__.e("default-node_modules_primeng_fesm2020_primeng-dataview_mjs"), __webpack_require__.e("default-node_modules_primeng_fesm2020_primeng-confirmdialog_mjs"), __webpack_require__.e("default-src_app_shared_services_condominio_condominio_service_ts-node_modules_primeng_fesm202-6cbfe1"), __webpack_require__.e("default-node_modules_primeng_fesm2020_primeng-checkbox_mjs"), __webpack_require__.e("default-node_modules_primeng_fesm2020_primeng-table_mjs"), __webpack_require__.e("default-src_app_shared_components_utils_attention-surface_attention-surface_module_ts-node_mo-9feefa"), __webpack_require__.e("default-node_modules_primeng_fesm2020_primeng-inputmask_mjs-node_modules_primeng_fesm2020_pri-07470e"), __webpack_require__.e("default-node_modules_primeng_fesm2020_primeng-steps_mjs"), __webpack_require__.e("default-src_app_shared_components_authorization-module_authorization-module_module_ts-src_app-dafcf0"), __webpack_require__.e("default-src_app_shared_components_endereco-module_endereco_module_ts"), __webpack_require__.e("default-node_modules_capacitor_core_dist_index_js"), __webpack_require__.e("default-src_app_shared_constants_system_constant_ts-src_app_shared_services_adm-financeira_co-66b025"), __webpack_require__.e("default-src_app_shared_components_adm-recurso-module_adm-recurso-module_module_ts"), __webpack_require__.e("src_app_pages_administracao-recurso_administracao-recurso_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/administracao-recurso/administracao-recurso.module */ 11169)).then(m => m.AdministracaoRecursoPageModule),
        canLoad: [_guards_auth_guard_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuardGuard],
    },
    {
        path: 'administracao-geral',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_primeng_fesm2020_primeng-message_mjs-node_modules_primeng_fesm2020_prime-a8a636"), __webpack_require__.e("default-node_modules_primeng_fesm2020_primeng-dropdown_mjs-node_modules_primeng_fesm2020_prim-3f7cdc"), __webpack_require__.e("default-node_modules_primeng_fesm2020_primeng-calendar_mjs-node_modules_primeng_fesm2020_prim-bea40d"), __webpack_require__.e("default-node_modules_primeng_fesm2020_primeng-dataview_mjs"), __webpack_require__.e("default-node_modules_primeng_fesm2020_primeng-confirmdialog_mjs"), __webpack_require__.e("default-src_app_shared_services_condominio_condominio_service_ts-node_modules_primeng_fesm202-6cbfe1"), __webpack_require__.e("default-node_modules_primeng_fesm2020_primeng-checkbox_mjs"), __webpack_require__.e("default-node_modules_primeng_fesm2020_primeng-table_mjs"), __webpack_require__.e("default-node_modules_primeng_fesm2020_primeng-inputmask_mjs-node_modules_primeng_fesm2020_pri-07470e"), __webpack_require__.e("default-node_modules_primeng_fesm2020_primeng-steps_mjs"), __webpack_require__.e("default-src_app_shared_components_endereco-module_endereco_module_ts"), __webpack_require__.e("src_app_pages_administracao-geral_administracao-geral_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/administracao-geral/administracao-geral.module */ 79826)).then(m => m.AdministracaoGeralPageModule),
        canLoad: [_guards_auth_guard_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuardGuard],
    },
    {
        path: 'administracao-operacao',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_primeng_fesm2020_primeng-message_mjs-node_modules_primeng_fesm2020_prime-a8a636"), __webpack_require__.e("default-node_modules_primeng_fesm2020_primeng-dropdown_mjs-node_modules_primeng_fesm2020_prim-3f7cdc"), __webpack_require__.e("default-node_modules_primeng_fesm2020_primeng-calendar_mjs-node_modules_primeng_fesm2020_prim-bea40d"), __webpack_require__.e("default-node_modules_primeng_fesm2020_primeng-menu_mjs-node_modules_primeng_fesm2020_primeng--44111c"), __webpack_require__.e("default-node_modules_primeng_fesm2020_primeng-dataview_mjs"), __webpack_require__.e("default-node_modules_primeng_fesm2020_primeng-confirmdialog_mjs"), __webpack_require__.e("default-src_app_shared_services_condominio_condominio_service_ts-node_modules_primeng_fesm202-6cbfe1"), __webpack_require__.e("default-node_modules_primeng_fesm2020_primeng-checkbox_mjs"), __webpack_require__.e("default-node_modules_primeng_fesm2020_primeng-table_mjs"), __webpack_require__.e("default-src_app_shared_components_utils_attention-surface_attention-surface_module_ts-node_mo-9feefa"), __webpack_require__.e("default-node_modules_primeng_fesm2020_primeng-inputmask_mjs-node_modules_primeng_fesm2020_pri-07470e"), __webpack_require__.e("default-node_modules_primeng_fesm2020_primeng-steps_mjs"), __webpack_require__.e("default-src_app_shared_components_authorization-module_authorization-module_module_ts-src_app-dafcf0"), __webpack_require__.e("default-node_modules_capacitor_core_dist_index_js"), __webpack_require__.e("default-src_app_shared_services_relatorio_report_service_ts-node_modules_primeng_fesm2020_pri-acda3b"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_administracao-operacao_administracao-operacao_module_ts-src_app_shared_services-f3bb78")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/administracao-operacao/administracao-operacao.module */ 19984)).then(m => m.AdministracaoOperacaoPageModule),
        canLoad: [_guards_auth_guard_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuardGuard],
    },
    {
        path: 'carga-dados',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_carga-dados_carga-dados_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/carga-dados/carga-dados.module */ 92446)).then(m => m.CargaDadosPageModule),
        // canLoad: [AuthGuardGuard],
        canLoad: [false],
    },
    {
        path: 'administracao-ti',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_primeng_fesm2020_primeng-carousel_mjs"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_administracao-ti_administracao-ti_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/administracao-ti/administracao-ti.module */ 71776)).then(m => m.AdministracaoTiPageModule),
        canLoad: [_guards_auth_guard_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuardGuard],
    },
    {
        path: 'comunicacao-email',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_primeng_fesm2020_primeng-message_mjs-node_modules_primeng_fesm2020_prime-a8a636"), __webpack_require__.e("default-node_modules_primeng_fesm2020_primeng-dropdown_mjs-node_modules_primeng_fesm2020_prim-3f7cdc"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_comunicacao-email_comunicacao-email_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/comunicacao-email/comunicacao-email.module */ 64428)).then(m => m.ComunicacaoEmailPageModule),
        // canLoad: [AuthGuardGuard],
        canLoad: [false],
    },
    {
        path: 'prestacao-servico-simples',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_primeng_fesm2020_primeng-message_mjs-node_modules_primeng_fesm2020_prime-a8a636"), __webpack_require__.e("default-node_modules_primeng_fesm2020_primeng-dropdown_mjs-node_modules_primeng_fesm2020_prim-3f7cdc"), __webpack_require__.e("default-node_modules_primeng_fesm2020_primeng-calendar_mjs-node_modules_primeng_fesm2020_prim-bea40d"), __webpack_require__.e("default-node_modules_primeng_fesm2020_primeng-menu_mjs-node_modules_primeng_fesm2020_primeng--44111c"), __webpack_require__.e("default-node_modules_primeng_fesm2020_primeng-dataview_mjs"), __webpack_require__.e("default-src_app_shared_services_condominio_condominio_service_ts-node_modules_primeng_fesm202-6cbfe1"), __webpack_require__.e("default-node_modules_primeng_fesm2020_primeng-checkbox_mjs"), __webpack_require__.e("default-node_modules_primeng_fesm2020_primeng-multiselect_mjs-node_modules_primeng_fesm2020_p-eeedc2"), __webpack_require__.e("default-src_app_shared_components_prestacao-servicos-module_simplificado_servicos-update_serv-3fc7e5"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_prestacao-servico-simples_prestacao-servico-simples_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/prestacao-servico-simples/prestacao-servico-simples.module */ 24330)).then(m => m.PrestacaoServicoSimplesPageModule),
        // canLoad: [AuthGuardGuard],
        canLoad: [false],
    },
    {
        path: 'prestacao-servico-avancado',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_prestacao-servico-avancado_prestacao-servico-avancado_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/prestacao-servico-avancado/prestacao-servico-avancado.module */ 39969)).then(m => m.PrestacaoServicoAvancadoPageModule),
        // canLoad: [AuthGuardGuard],
        canLoad: [false],
    },
    {
        path: 'prestacao-servico-gestao',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_primeng_fesm2020_primeng-message_mjs-node_modules_primeng_fesm2020_prime-a8a636"), __webpack_require__.e("default-node_modules_primeng_fesm2020_primeng-dropdown_mjs-node_modules_primeng_fesm2020_prim-3f7cdc"), __webpack_require__.e("default-node_modules_primeng_fesm2020_primeng-calendar_mjs-node_modules_primeng_fesm2020_prim-bea40d"), __webpack_require__.e("default-node_modules_primeng_fesm2020_primeng-menu_mjs-node_modules_primeng_fesm2020_primeng--44111c"), __webpack_require__.e("default-node_modules_primeng_fesm2020_primeng-dataview_mjs"), __webpack_require__.e("default-node_modules_primeng_fesm2020_primeng-confirmdialog_mjs"), __webpack_require__.e("default-src_app_shared_services_condominio_condominio_service_ts-node_modules_primeng_fesm202-6cbfe1"), __webpack_require__.e("default-node_modules_primeng_fesm2020_primeng-inputmask_mjs-node_modules_primeng_fesm2020_pri-07470e"), __webpack_require__.e("default-src_app_shared_components_prestacao-servicos-module_simplificado_servicos-update_serv-3fc7e5"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_prestacao-servico-gestao_prestacao-servico-gestao_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/prestacao-servico-gestao/prestacao-servico-gestao.module */ 59260)).then(m => m.PrestacaoServicoGestaoPageModule),
        // canLoad: [AuthGuardGuard],
        canLoad: [false],
    },
    {
        path: 'administracao-pagamento',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_primeng_fesm2020_primeng-message_mjs-node_modules_primeng_fesm2020_prime-a8a636"), __webpack_require__.e("default-node_modules_primeng_fesm2020_primeng-dropdown_mjs-node_modules_primeng_fesm2020_prim-3f7cdc"), __webpack_require__.e("default-node_modules_primeng_fesm2020_primeng-calendar_mjs-node_modules_primeng_fesm2020_prim-bea40d"), __webpack_require__.e("default-node_modules_primeng_fesm2020_primeng-menu_mjs-node_modules_primeng_fesm2020_primeng--44111c"), __webpack_require__.e("default-node_modules_primeng_fesm2020_primeng-dataview_mjs"), __webpack_require__.e("default-node_modules_primeng_fesm2020_primeng-confirmdialog_mjs"), __webpack_require__.e("default-src_app_shared_components_utils_attention-surface_attention-surface_module_ts-node_mo-9feefa"), __webpack_require__.e("default-node_modules_primeng_fesm2020_primeng-multiselect_mjs-node_modules_primeng_fesm2020_p-eeedc2"), __webpack_require__.e("default-src_app_shared_components_fluxo-pagamento-module_solicitacoes_solicitacoes_module_ts"), __webpack_require__.e("default-src_app_shared_components_adm-financeira-module_pagamentos_pagamentos_module_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_administracao-pagamento_administracao-pagamento_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/administracao-pagamento/administracao-pagamento.module */ 30098)).then(m => m.AdministracaoPagamentoPageModule),
        // canLoad: [AuthGuardGuard],
        canLoad: [false],
    },
    {
        path: 'fluxo-pagamento',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_primeng_fesm2020_primeng-message_mjs-node_modules_primeng_fesm2020_prime-a8a636"), __webpack_require__.e("default-node_modules_primeng_fesm2020_primeng-dropdown_mjs-node_modules_primeng_fesm2020_prim-3f7cdc"), __webpack_require__.e("default-node_modules_primeng_fesm2020_primeng-calendar_mjs-node_modules_primeng_fesm2020_prim-bea40d"), __webpack_require__.e("default-node_modules_primeng_fesm2020_primeng-menu_mjs-node_modules_primeng_fesm2020_primeng--44111c"), __webpack_require__.e("default-node_modules_primeng_fesm2020_primeng-dataview_mjs"), __webpack_require__.e("default-node_modules_primeng_fesm2020_primeng-confirmdialog_mjs"), __webpack_require__.e("default-src_app_shared_components_utils_attention-surface_attention-surface_module_ts-node_mo-9feefa"), __webpack_require__.e("default-node_modules_primeng_fesm2020_primeng-multiselect_mjs-node_modules_primeng_fesm2020_p-eeedc2"), __webpack_require__.e("default-src_app_shared_components_fluxo-pagamento-module_solicitacoes_solicitacoes_module_ts"), __webpack_require__.e("src_app_pages_fluxo-pagamento_fluxo-pagamento_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/fluxo-pagamento/fluxo-pagamento.module */ 44437)).then(m => m.FluxoPagamentoPageModule),
        // canLoad: [AuthGuardGuard],
        canLoad: [false],
    },
    {
        path: 'administracao-cliente',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_primeng_fesm2020_primeng-message_mjs-node_modules_primeng_fesm2020_prime-a8a636"), __webpack_require__.e("default-node_modules_primeng_fesm2020_primeng-dropdown_mjs-node_modules_primeng_fesm2020_prim-3f7cdc"), __webpack_require__.e("default-node_modules_primeng_fesm2020_primeng-calendar_mjs-node_modules_primeng_fesm2020_prim-bea40d"), __webpack_require__.e("default-node_modules_primeng_fesm2020_primeng-menu_mjs-node_modules_primeng_fesm2020_primeng--44111c"), __webpack_require__.e("default-node_modules_primeng_fesm2020_primeng-dataview_mjs"), __webpack_require__.e("default-node_modules_primeng_fesm2020_primeng-confirmdialog_mjs"), __webpack_require__.e("default-src_app_shared_services_condominio_condominio_service_ts-node_modules_primeng_fesm202-6cbfe1"), __webpack_require__.e("default-node_modules_primeng_fesm2020_primeng-checkbox_mjs"), __webpack_require__.e("default-node_modules_primeng_fesm2020_primeng-table_mjs"), __webpack_require__.e("default-src_app_shared_components_utils_attention-surface_attention-surface_module_ts-node_mo-9feefa"), __webpack_require__.e("default-node_modules_primeng_fesm2020_primeng-inputmask_mjs-node_modules_primeng_fesm2020_pri-07470e"), __webpack_require__.e("default-node_modules_primeng_fesm2020_primeng-steps_mjs"), __webpack_require__.e("default-src_app_shared_components_authorization-module_authorization-module_module_ts-src_app-dafcf0"), __webpack_require__.e("default-src_app_shared_components_endereco-module_endereco_module_ts"), __webpack_require__.e("default-src_app_shared_constants_system_constant_ts-src_app_shared_services_adm-financeira_co-66b025"), __webpack_require__.e("default-src_app_shared_constants_tipo-user_constant_ts-node_modules_primeng_fesm2020_primeng--8d0424"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_administracao-cliente_administracao-cliente_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/administracao-cliente/administracao-cliente.module */ 57958)).then(m => m.AdministracaoClientePageModule),
        canLoad: [_guards_auth_guard_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuardGuard],
    },
    {
        path: 'consulta-rapida',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_primeng_fesm2020_primeng-message_mjs-node_modules_primeng_fesm2020_prime-a8a636"), __webpack_require__.e("default-node_modules_primeng_fesm2020_primeng-dropdown_mjs-node_modules_primeng_fesm2020_prim-3f7cdc"), __webpack_require__.e("default-node_modules_primeng_fesm2020_primeng-calendar_mjs-node_modules_primeng_fesm2020_prim-bea40d"), __webpack_require__.e("default-node_modules_primeng_fesm2020_primeng-menu_mjs-node_modules_primeng_fesm2020_primeng--44111c"), __webpack_require__.e("default-node_modules_primeng_fesm2020_primeng-table_mjs"), __webpack_require__.e("default-src_app_shared_constants_tipo-user_constant_ts-node_modules_primeng_fesm2020_primeng--8d0424"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_consulta-rapida_consulta-rapida_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/consulta-rapida/consulta-rapida.module */ 16305)).then(m => m.ConsultaRapidaPageModule),
        canLoad: [_guards_auth_guard_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuardGuard],
    },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_4__.PreloadAllModules, useHash: true })
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
    })
], AppRoutingModule);



/***/ }),

/***/ 55041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _home_m4estro_Documentos_Code_Neg_cios_StandIO_Conds_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.html?ngResource */ 33383);
/* harmony import */ var _app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component.scss?ngResource */ 79259);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! primeng/api */ 14356);
/* harmony import */ var primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! primeng/dynamicdialog */ 62648);
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! chart.js */ 73905);
/* harmony import */ var chartjs_plugin_datalabels__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! chartjs-plugin-datalabels */ 59007);
/* harmony import */ var _shared_services_preferences_preferences_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/services/preferences/preferences.service */ 9683);
/* harmony import */ var _shared_services_theme_theme_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/services/theme/theme.service */ 8601);
/* harmony import */ var _shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/services/auth/auth.service */ 16256);
/* harmony import */ var _shared_services_auth_storage_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/services/auth/storage.service */ 54452);
/* harmony import */ var _shared_webSocket_start_start_socket_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared/webSocket/start/start-socket.service */ 91303);
/* harmony import */ var _config_app_config__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./../config/app.config */ 49264);
/* harmony import */ var _shared_services_user_user_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./shared/services/user/user.service */ 34758);
/* harmony import */ var _shared_webSocket_cargas_cargas_socket_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./shared/webSocket/cargas/cargas-socket.service */ 79688);
/* harmony import */ var _shared_webSocket_mails_mails_socket_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./shared/webSocket/mails/mails-socket.service */ 54392);
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./app.config */ 49670);
/* harmony import */ var _shared_webSocket_solicitacao_aprovacao_solicitacao_aprovacao_socket_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./shared/webSocket/solicitacao-aprovacao/solicitacao-aprovacao-socket.service */ 65133);
/* harmony import */ var _shared_services_toast_toast_message_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./shared/services/toast/toast-message.service */ 12973);
























let AppComponent = class AppComponent {
  constructor(
  //public readonly loaderService: LoaderService,
  dialogService, preferencesService, themeService, auth, storage, userService, startSocketService, cargasSocketService, mailsSocketService, solicitacaoAprovacaoSocketService, primengConfig, translateService, menuController, renderer, elementRef, appConfig, toastService) {
    this.dialogService = dialogService;
    this.preferencesService = preferencesService;
    this.themeService = themeService;
    this.auth = auth;
    this.storage = storage;
    this.userService = userService;
    this.startSocketService = startSocketService;
    this.cargasSocketService = cargasSocketService;
    this.mailsSocketService = mailsSocketService;
    this.solicitacaoAprovacaoSocketService = solicitacaoAprovacaoSocketService;
    this.primengConfig = primengConfig;
    this.translateService = translateService;
    this.menuController = menuController;
    this.renderer = renderer;
    this.elementRef = elementRef;
    this.appConfig = appConfig;
    this.toastService = toastService;
    this.isDarkTheme = false;
    this.transacoesPendentes = 0;
    this.obs = new rxjs__WEBPACK_IMPORTED_MODULE_17__.Subject();
    this.blockUI = false;
    this.chartJs = chart_js__WEBPACK_IMPORTED_MODULE_3__;
    this.chartLabelPlugin = chartjs_plugin_datalabels__WEBPACK_IMPORTED_MODULE_4__;
    this.statusSocketColor = 'warning';
    this.socketStatus = 'OFF';
    this.appPages = [{
      title: 'Home',
      url: '/home',
      icon: 'home'
    }, {
      title: 'Consulta Rápida',
      url: '/consulta-rapida',
      icon: 'search-circle'
    }, {
      title: 'Administração',
      icon: 'business',
      children: [{
        title: 'ADM. Moradores',
        url: '/administracao-cliente',
        icon: 'id-card'
      }, {
        title: 'ADM. Operação',
        url: '/administracao-operacao',
        icon: 'cog'
      }, {
        title: 'ADM. Recurso',
        url: '/administracao-recurso',
        icon: 'people'
      }, {
        title: 'ADM. Geral',
        url: '/administracao-geral',
        icon: 'business'
      },
      // { title: 'ADM. Financeira', url: '/administracao-financeira', icon: 'wallet' },
      // { title: 'ADM. Pagamento', url: '/administracao-pagamento', icon: 'cash' },
      {
        title: 'ADM. T.I',
        url: '/administracao-ti',
        icon: 'terminal'
      }]
    },
    /*{
      title: 'Operações', icon: 'business', children: [
        { title: 'Flux. Pagamentos', url: '/fluxo-pagamento', icon: 'shuffle' },
      ]
    },
    {
      title: 'Serviços', icon: 'business', children: [
        { title: 'Gestão', url: '/prestacao-servico-gestao', icon: 'id-card' },
        { title: 'Simplificado', url: '/prestacao-servico-simples', icon: 'build' },
        // { title: 'Avançado', url: '/prestacao-servico-avancado', icon: 'construct' },
      ]
    },*/
    {
      title: 'Usuário',
      icon: 'business',
      children: [{
        title: 'Perfil',
        url: '/perfil',
        icon: 'person'
      }
      // { title: 'E-mail', url: '/comunicacao-email', icon: 'mail' },
      ]
    }];

    this.scale = 16;
    this.scales = [12, 13, 14, 15, 16];
    const theme = this.preferencesService.getThemePreference();
    document.body.setAttribute('color-theme', theme);
    if (theme === 'dark') {
      this.isDarkTheme = true;
      const themeName = this.preferencesService.getThemeName() || 'arya-blue';
      this.preferencesService.setThemePreference('dark', themeName);
      this.themeService.switchTheme(themeName);
    } else {
      this.isDarkTheme = false;
      const themeName = this.preferencesService.getThemeName() || 'saga-blue';
      this.preferencesService.setThemePreference('light', themeName);
      this.themeService.switchTheme(themeName);
    }
    this.listenPwaPrompt();
  }
  ngOnInit() {
    this.setupTranslation();
    this.setupWebSocket();
    this.setupPrimengConfigs();
  }
  ngAfterViewInit() {}
  ionWillOpen() {
    //const { id: user_final_id } = this.storage.getLocalUser();
  }
  ionDidClose() {
    // this.obs.next();
    this.obs.complete();
  }
  listenPwaPrompt() {
    window.addEventListener('beforeinstallprompt', event => {
      event.preventDefault();
      this.deferredPrompt = event;
    });
  }
  toggleDetails(p) {
    if (p.showDetails) {
      p.showDetails = false;
      p.icon = 'ios-arrow-down';
    } else {
      p.showDetails = true;
      p.icon = 'ios-arrow-up';
    }
  }
  toggleThemes(event) {
    var _this = this;
    return (0,_home_m4estro_Documentos_Code_Neg_cios_StandIO_Conds_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.visibleSidebar = true;
      const {
        isEnabled,
        isOpen
      } = _this.menuController;
      if ((yield isEnabled()) && (yield isOpen())) {
        yield _this.menuController.close();
      }
      /*
      const { checked } = event.detail;
      if (checked) {
        document.body.setAttribute('color-theme', 'dark');
        this.themeService.switchTheme('arya-orange');
        this.preferencesService.setThemePreference('dark');
      } else {
        document.body.setAttribute('color-theme', 'light');
        this.preferencesService.setThemePreference('light');
        this.themeService.switchTheme('saga-blue');
      }*/
    })();
  }

  logout() {
    this.auth.logout();
  }
  setupWebSocket() {
    this.startSocketService.listenConneciton().subscribe(data => {
      const {
        connection
      } = data;
      console.log(`Socket connection: ${connection}`);
      this.socketStatus = connection;
    });
    this.cargasSocketService.listenCargaStarted().subscribe(data => {});
    this.cargasSocketService.listenCargaFinish().subscribe(data => {});
    this.mailsSocketService.listenMailFinish().subscribe(data => {});
    this.solicitacaoAprovacaoSocketService.listenSolicitacaoAprovacao().subscribe(data => {});
  }
  setupTranslation() {
    this.translateService.setDefaultLang('pt-BR');
    this.translateService.use('pt-BR');
    this.translateService.get('primeng').subscribe(res => {
      this.primengConfig.setTranslation(res);
    });
  }
  sincronizar() {
    const {
      id
    } = this.storage.getLocalUser();
    this.startSocketService.emitNewConnection(id);
    this.userService.findById(id).subscribe(data => {
      this.storage.setCompleteLocalUser(data);
    });
  }
  getSocketConexao() {
    switch (this.socketStatus) {
      case 'ON':
        this.statusSocketColor = 'success';
        return this.socketStatus;
      case 'OFF':
        this.statusSocketColor = 'warning';
        return this.socketStatus;
      default:
        this.statusSocketColor = 'danger';
        return 'ERRO';
    }
  }
  getSystemInfo() {
    return _config_app_config__WEBPACK_IMPORTED_MODULE_10__.SYSTEM_INFO;
  }
  setupPrimengConfigs() {
    this.primengConfig.ripple = true;
    this.applyScale();
  }
  changeTheme(event, theme, dark) {
    const mode = dark ? 'dark' : 'light';
    document.body.setAttribute('color-theme', mode);
    this.themeService.switchTheme(theme);
    this.preferencesService.setThemePreference(mode, theme);
    this.appConfig.theme = theme;
    this.appConfig.dark = dark;
    event.preventDefault();
  }
  decrementScale() {
    this.scale--;
    this.applyScale();
  }
  incrementScale() {
    this.scale++;
    this.applyScale();
  }
  applyScale() {
    document.documentElement.style.fontSize = this.scale + 'px';
  }
  changeBackground({
    checked
  }) {
    const wallBackgroundElements = this.elementRef.nativeElement.querySelectorAll('.wall-background');
    wallBackgroundElements.forEach(element => {
      if (checked) {
        this.renderer.addClass(element, 'gradient');
      } else {
        this.renderer.removeClass(element, 'gradient');
      }
    });
  }
  installPwa() {
    this.deferredPrompt.prompt();
    this.deferredPrompt.userChoice.then(result => {
      this.deferredPrompt = null;
    });
  }
};
AppComponent.ctorParameters = () => [{
  type: primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_18__.DialogService
}, {
  type: _shared_services_preferences_preferences_service__WEBPACK_IMPORTED_MODULE_5__.PreferencesService
}, {
  type: _shared_services_theme_theme_service__WEBPACK_IMPORTED_MODULE_6__.ThemeService
}, {
  type: _shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_7__.AuthService
}, {
  type: _shared_services_auth_storage_service__WEBPACK_IMPORTED_MODULE_8__.StorageService
}, {
  type: _shared_services_user_user_service__WEBPACK_IMPORTED_MODULE_11__.UserService
}, {
  type: _shared_webSocket_start_start_socket_service__WEBPACK_IMPORTED_MODULE_9__.StartSocketService
}, {
  type: _shared_webSocket_cargas_cargas_socket_service__WEBPACK_IMPORTED_MODULE_12__.CargasSocketService
}, {
  type: _shared_webSocket_mails_mails_socket_service__WEBPACK_IMPORTED_MODULE_13__.MailsSocketService
}, {
  type: _shared_webSocket_solicitacao_aprovacao_solicitacao_aprovacao_socket_service__WEBPACK_IMPORTED_MODULE_15__.SolicitacaoAprovacaoSocketService
}, {
  type: primeng_api__WEBPACK_IMPORTED_MODULE_19__.PrimeNGConfig
}, {
  type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_20__.TranslateService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_21__.MenuController
}, {
  type: _angular_core__WEBPACK_IMPORTED_MODULE_22__.Renderer2
}, {
  type: _angular_core__WEBPACK_IMPORTED_MODULE_22__.ElementRef
}, {
  type: _app_config__WEBPACK_IMPORTED_MODULE_14__.AppConfig
}, {
  type: _shared_services_toast_toast_message_service__WEBPACK_IMPORTED_MODULE_16__.ToastMessageService
}];
AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_23__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_22__.Component)({
  selector: 'app-root',
  template: _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], AppComponent);


/***/ }),

/***/ 49670:
/*!*******************************!*\
  !*** ./src/app/app.config.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppConfig": () => (/* binding */ AppConfig)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);


let AppConfig = class AppConfig {
    constructor() {
        this.theme = 'lara-light-indigo';
        this.dark = false;
        this.inputStyle = 'outlined';
        this.ripple = true;
        this.backgrounColorOn = false;
    }
};
AppConfig = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)({
        providedIn: 'root',
    })
], AppConfig);



/***/ }),

/***/ 36747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule),
/* harmony export */   "HttpLoaderFactory": () => (/* binding */ HttpLoaderFactory)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/platform-browser */ 34497);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_common_locales_br__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/locales/br */ 95882);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/platform-browser/animations */ 37146);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _ionic_pwa_elements_loader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic/pwa-elements/loader */ 38763);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/http-loader */ 58319);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 19200);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ 9306);
/* harmony import */ var _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @fortawesome/free-regular-svg-icons */ 2898);
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ 72257);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! primeng/api */ 14356);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! primeng/toast */ 29129);
/* harmony import */ var primeng_blockui__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! primeng/blockui */ 40081);
/* harmony import */ var primeng_progressbar__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! primeng/progressbar */ 88395);
/* harmony import */ var primeng_progressspinner__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! primeng/progressspinner */ 22901);
/* harmony import */ var primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! primeng/dynamicdialog */ 62648);
/* harmony import */ var primeng_sidebar__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! primeng/sidebar */ 34179);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! primeng/button */ 76328);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! primeng/ripple */ 84538);
/* harmony import */ var primeng_radiobutton__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! primeng/radiobutton */ 69902);
/* harmony import */ var primeng_inputswitch__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! primeng/inputswitch */ 13585);
/* harmony import */ var primeng_divider__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! primeng/divider */ 1154);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 55041);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ 90158);
/* harmony import */ var _shared_interceptors_auth_interceptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/interceptors/auth-interceptor */ 73000);
/* harmony import */ var _shared_interceptors_error_interceptor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/interceptors/error-interceptor */ 94730);
/* harmony import */ var _shared_pipes_pipe_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/pipes/pipe.module */ 67361);
/* harmony import */ var _shared_directive_directives_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/directive/directives.module */ 9406);
/* harmony import */ var _shared_interceptors_loading_interceptor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/interceptors/loading-interceptor */ 10491);




































(0,_angular_common__WEBPACK_IMPORTED_MODULE_8__.registerLocaleData)(_angular_common_locales_br__WEBPACK_IMPORTED_MODULE_9__["default"], 'pt-BR');
(0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.enableProdMode)();
function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_11__.TranslateHttpLoader(http);
}
let AppModule = class AppModule {
    constructor(library) {
        library.addIconPacks(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_12__.fas);
        library.addIconPacks(_fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_13__.far);
        library.addIconPacks(_fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_14__.fab);
    }
};
AppModule.ctorParameters = () => [
    { type: _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_15__.FaIconLibrary }
];
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_16__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.NgModule)({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_17__.BrowserModule,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_18__.BrowserAnimationsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_19__.IonicModule.forRoot(),
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_20__.TranslateModule.forRoot({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_20__.TranslateLoader,
                    useFactory: HttpLoaderFactory,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_21__.HttpClient]
                }
            }),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__.AppRoutingModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_21__.HttpClientModule,
            primeng_toast__WEBPACK_IMPORTED_MODULE_22__.ToastModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_23__.FormsModule,
            primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_24__.DynamicDialogModule,
            primeng_blockui__WEBPACK_IMPORTED_MODULE_25__.BlockUIModule,
            primeng_button__WEBPACK_IMPORTED_MODULE_26__.ButtonModule,
            primeng_ripple__WEBPACK_IMPORTED_MODULE_27__.RippleModule,
            primeng_divider__WEBPACK_IMPORTED_MODULE_28__.DividerModule,
            primeng_radiobutton__WEBPACK_IMPORTED_MODULE_29__.RadioButtonModule,
            primeng_inputswitch__WEBPACK_IMPORTED_MODULE_30__.InputSwitchModule,
            primeng_button__WEBPACK_IMPORTED_MODULE_26__.ButtonModule,
            primeng_sidebar__WEBPACK_IMPORTED_MODULE_31__.SidebarModule,
            _shared_pipes_pipe_module__WEBPACK_IMPORTED_MODULE_5__.PipeModule,
            primeng_progressbar__WEBPACK_IMPORTED_MODULE_32__.ProgressBarModule,
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_15__.FontAwesomeModule,
            primeng_progressspinner__WEBPACK_IMPORTED_MODULE_33__.ProgressSpinnerModule,
            _shared_directive_directives_module__WEBPACK_IMPORTED_MODULE_6__.DirectivesModule,
        ],
        providers: [
            { provide: _angular_router__WEBPACK_IMPORTED_MODULE_34__.RouteReuseStrategy, useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_19__.IonicRouteStrategy },
            primeng_api__WEBPACK_IMPORTED_MODULE_35__.MessageService,
            primeng_api__WEBPACK_IMPORTED_MODULE_35__.ConfirmationService,
            primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_24__.DialogService,
            _shared_interceptors_loading_interceptor__WEBPACK_IMPORTED_MODULE_7__.loadingInterceptorProvider,
            _shared_interceptors_auth_interceptor__WEBPACK_IMPORTED_MODULE_3__.authInterceptorProvider,
            _shared_interceptors_error_interceptor__WEBPACK_IMPORTED_MODULE_4__.errorInterceptorProvider,
            {
                provide: _angular_core__WEBPACK_IMPORTED_MODULE_10__.LOCALE_ID,
                useValue: 'pt-BR'
            },
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent],
        exports: [primeng_toast__WEBPACK_IMPORTED_MODULE_22__.ToastModule, _shared_pipes_pipe_module__WEBPACK_IMPORTED_MODULE_5__.PipeModule, primeng_progressbar__WEBPACK_IMPORTED_MODULE_32__.ProgressBarModule]
    })
], AppModule);

(0,_ionic_pwa_elements_loader__WEBPACK_IMPORTED_MODULE_0__.defineCustomElements)(window);


/***/ }),

/***/ 38660:
/*!********************************************!*\
  !*** ./src/app/guards/auth-guard.guard.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthGuardGuard": () => (/* binding */ AuthGuardGuard)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 59295);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 19337);
/* harmony import */ var _shared_constants_toast_constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/constants/toast.constant */ 98739);
/* harmony import */ var _shared_services_auth_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/services/auth/storage.service */ 54452);
/* harmony import */ var _shared_services_toast_toast_message_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/services/toast/toast-message.service */ 12973);







let AuthGuardGuard = class AuthGuardGuard {
    constructor(storageService, router, toastMessageService) {
        this.storageService = storageService;
        this.router = router;
        this.toastMessageService = toastMessageService;
    }
    canActivate(next, state) {
        let url = state.url;
        return this.checkUserRole(next, url);
    }
    canActivateChild(next, state) {
        return this.canActivate(next, state);
    }
    canLoad(route, segments) {
        const url = segments.map(s => `/${s}`).join('');
        return this.checkAuthState(url).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.take)(1));
    }
    checkAuthState(redirect) {
        return this.storageService.isLogedInObs().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(is => {
            if (!is) {
                this.toastMessageService.presentToast({
                    titulo: '401 - Não autenticado',
                    detalhe: 'Por favor, realize login',
                    gravidade: _shared_constants_toast_constant__WEBPACK_IMPORTED_MODULE_0__.ToastPrimeSeverityEnum.ATENCAO,
                    duracao: _shared_constants_toast_constant__WEBPACK_IMPORTED_MODULE_0__.ToastEnum.mediumDuration,
                });
                this.router.navigate(['/login'], { queryParams: { redirect } });
            }
        }));
    }
    checkUserRole(route, url) {
        if (this.storageService.isLogedIn()) {
            /* const isAdmin = this.storageService.getUserIsAdmin();
             if (isAdmin) {
               return true;
             }*/
            const userRole = this.storageService.getRole();
            if ((route.data.role && route.data.role.indexOf(userRole) === -1)) {
                this.toastMessageService.presentToast({
                    titulo: '403 - Não autorizado',
                    detalhe: `Você não possui autorização para realizar esta operação.`,
                    gravidade: _shared_constants_toast_constant__WEBPACK_IMPORTED_MODULE_0__.ToastPrimeSeverityEnum.ATENCAO,
                    duracao: _shared_constants_toast_constant__WEBPACK_IMPORTED_MODULE_0__.ToastEnum.mediumDuration,
                });
                this.router.navigate(['/home']);
                return false;
            }
            return true;
        }
        this.toastMessageService.presentToast({
            titulo: '401 - Não autenticado',
            detalhe: 'Por favor, realize login',
            gravidade: _shared_constants_toast_constant__WEBPACK_IMPORTED_MODULE_0__.ToastPrimeSeverityEnum.ATENCAO,
            duracao: _shared_constants_toast_constant__WEBPACK_IMPORTED_MODULE_0__.ToastEnum.mediumDuration,
        });
        this.router.navigate(['/login']);
        return false;
    }
};
AuthGuardGuard.ctorParameters = () => [
    { type: _shared_services_auth_storage_service__WEBPACK_IMPORTED_MODULE_1__.StorageService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: _shared_services_toast_toast_message_service__WEBPACK_IMPORTED_MODULE_2__.ToastMessageService }
];
AuthGuardGuard = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Injectable)({
        providedIn: 'root'
    })
], AuthGuardGuard);



/***/ }),

/***/ 58817:
/*!************************************************************************************!*\
  !*** ./src/app/shared/components/utils/generic-dialog/generic-dialog.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GenericDialogComponent": () => (/* binding */ GenericDialogComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _generic_dialog_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./generic-dialog.component.html?ngResource */ 86601);
/* harmony import */ var _generic_dialog_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./generic-dialog.component.scss?ngResource */ 47520);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/dynamicdialog */ 62648);





let GenericDialogComponent = class GenericDialogComponent {
    constructor(ref, config) {
        this.ref = ref;
        this.config = config;
        this.message = '';
        this.showDialog = true;
    }
    ngOnInit() {
        this.message = this.config.data;
        //this.config.footer = '<button type="button" (click)="close()">OK</button>';
    }
    close() {
        // Lógica a ser executada quando o botão for clicado
        this.ref.close(); // Feche o dialog se necessário
    }
};
GenericDialogComponent.ctorParameters = () => [
    { type: primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_2__.DynamicDialogRef },
    { type: primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_2__.DynamicDialogConfig }
];
GenericDialogComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-generic-dialog',
        template: _generic_dialog_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_generic_dialog_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], GenericDialogComponent);



/***/ }),

/***/ 24658:
/*!**********************************************************!*\
  !*** ./src/app/shared/constants/notificacao.constant.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotificacaoStatus": () => (/* binding */ NotificacaoStatus),
/* harmony export */   "NotificacaoTipoEnum": () => (/* binding */ NotificacaoTipoEnum)
/* harmony export */ });
var NotificacaoTipoEnum;
(function (NotificacaoTipoEnum) {
    NotificacaoTipoEnum["MENSAGEM_COMUM"] = "MENSAGEM_COMUM";
    NotificacaoTipoEnum["MENSAGEM_PRIORITARIA"] = "MENSAGEM_PRIORITARIA";
    NotificacaoTipoEnum["MENSAGEM_PROGRAMADA"] = "MENSAGEM_PROGRAMADA";
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

/***/ 59136:
/*!***************************************************!*\
  !*** ./src/app/shared/constants/page.constant.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageOrder": () => (/* binding */ PageOrder)
/* harmony export */ });
var PageOrder;
(function (PageOrder) {
    PageOrder["ASC"] = "ASC";
    PageOrder["DESC"] = "DESC";
})(PageOrder || (PageOrder = {}));


/***/ }),

/***/ 34057:
/*!****************************************************!*\
  !*** ./src/app/shared/constants/role.constants.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Role": () => (/* binding */ Role)
/* harmony export */ });
var Role;
(function (Role) {
    Role["COLABORADOR"] = "COLABORADOR";
    Role["SUPERVISOR"] = "SUPERVISOR";
    Role["GERENTE"] = "GERENTE";
    Role["ADMIN"] = "ADMIN";
    Role["ADMIN_TI"] = "ADMIN-TI";
    Role["CLIENTE"] = "CLIENTE";
})(Role || (Role = {}));


/***/ }),

/***/ 98739:
/*!****************************************************!*\
  !*** ./src/app/shared/constants/toast.constant.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ToastEnum": () => (/* binding */ ToastEnum),
/* harmony export */   "ToastIonicSeverityEnum": () => (/* binding */ ToastIonicSeverityEnum),
/* harmony export */   "ToastPrimeSeverityEnum": () => (/* binding */ ToastPrimeSeverityEnum)
/* harmony export */ });
var ToastEnum;
(function (ToastEnum) {
    ToastEnum[ToastEnum["shortDuration"] = 3000] = "shortDuration";
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

/***/ 9406:
/*!*******************************************************!*\
  !*** ./src/app/shared/directive/directives.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DirectivesModule": () => (/* binding */ DirectivesModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _scroll_theme_scroll_theme_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scroll-theme/scroll-theme.directive */ 49405);




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

/***/ 49405:
/*!*************************************************************************!*\
  !*** ./src/app/shared/directive/scroll-theme/scroll-theme.directive.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ScrollThemeDirective": () => (/* binding */ ScrollThemeDirective)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);


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

/***/ 73000:
/*!*********************************************************!*\
  !*** ./src/app/shared/interceptors/auth-interceptor.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthInterceptor": () => (/* binding */ AuthInterceptor),
/* harmony export */   "authInterceptorProvider": () => (/* binding */ authInterceptorProvider)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _config_api_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../config/api.config */ 99038);
/* harmony import */ var _services_auth_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth/storage.service */ 54452);





let AuthInterceptor = class AuthInterceptor {
    constructor(storage) {
        this.storage = storage;
    }
    intercept(req, next) {
        let response;
        const localUser = this.storage.getLocalUser();
        const N = _config_api_config__WEBPACK_IMPORTED_MODULE_0__.API_CONFIG.baseURL.length;
        const reqToApi = req.url.substring(0, N) === _config_api_config__WEBPACK_IMPORTED_MODULE_0__.API_CONFIG.baseURL;
        if (localUser && reqToApi) {
            const authReq = req.clone({
                headers: req.headers.set('Authorization', 'Bearer ' + localUser.refresh_token),
            });
            response = authReq;
        }
        else {
            response = req;
        }
        return next.handle(response);
    }
};
AuthInterceptor.ctorParameters = () => [
    { type: _services_auth_storage_service__WEBPACK_IMPORTED_MODULE_1__.StorageService }
];
AuthInterceptor = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root',
    })
], AuthInterceptor);

const authInterceptorProvider = {
    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true,
};


/***/ }),

/***/ 94730:
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
/* harmony import */ var _home_m4estro_Documentos_Code_Neg_cios_StandIO_Conds_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 26078);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 25474);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 53158);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 23408);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 32313);
/* harmony import */ var _constants_toast_constant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/toast.constant */ 98739);
/* harmony import */ var src_config_api_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/config/api.config */ 99038);
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth/auth.service */ 16256);
/* harmony import */ var _services_toast_toast_message_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/toast/toast-message.service */ 12973);












let ErrorInterceptor = class ErrorInterceptor {
  constructor(alertContr, authService, router, menu, toastMessageService) {
    this.alertContr = alertContr;
    this.authService = authService;
    this.router = router;
    this.menu = menu;
    this.toastMessageService = toastMessageService;
    this.timeoutTiming = 10000;
    this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subscription();
    this.authorizationsCount = 0;
  }
  intercept(req, next) {
    var _this = this;
    let gotError = false;
    return next.handle(req)
    //Pipe para Erros
    .pipe().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.catchError)( /*#__PURE__*/function () {
      var _ref = (0,_home_m4estro_Documentos_Code_Neg_cios_StandIO_Conds_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (response) {
        const {
          statusText
        } = response;
        if (statusText === 'Unknown Error') {
          return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.throwError)(() => new Error('Timeout'));
        }
        const {
          status
        } = response;
        if (response.error instanceof Blob) {
          response.error = JSON.parse(yield response.error.text());
        }
        const {
          message
        } = response.error;
        const convertedMessage = _this.convertErrorList(message);
        switch (Number(status)) {
          case 400:
            _this.handle400(convertedMessage);
            break;
          case 403:
            _this.handle403(convertedMessage);
            break;
          case 401:
            _this.handle401(convertedMessage);
            break;
          case 422:
            _this.handle422(convertedMessage);
            break;
          case 404:
            _this.handle404(convertedMessage);
            break;
          case 409:
            _this.handle409(convertedMessage);
            break;
          default:
            _this.handleDefaultError(convertedMessage, status);
        }
        gotError = true;
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.throwError)(() => new Error(convertedMessage));
      });
      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }()))
    //Pipe para Timeout
    .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.timeout)(this.timeoutTiming), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.catchError)(response => {
      if (response !== 'Timeout') {
        return;
      }
      const e = `Tempo de espera excedido: ${src_config_api_config__WEBPACK_IMPORTED_MODULE_2__.API_CONFIG.baseURL}`;
      this.handle408(e);
      gotError = true;
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.throwError)(() => new Error(e));
    }))
    //Pipe para loading de requisições
    .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.finalize)( /*#__PURE__*/(0,_home_m4estro_Documentos_Code_Neg_cios_StandIO_Conds_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!gotError) {
        _this.authorizationsCount = 0;
      }
    })));
  }
  handle400(error) {
    this.toastMessageService.presentToast({
      titulo: '[400] - Atenção',
      detalhe: error,
      gravidade: _constants_toast_constant__WEBPACK_IMPORTED_MODULE_1__.ToastPrimeSeverityEnum.ATENCAO,
      duracao: _constants_toast_constant__WEBPACK_IMPORTED_MODULE_1__.ToastEnum.mediumDuration
    });
  }
  handle401(error) {
    if (error.toLowerCase().includes('inexistente')) {
      this.toastMessageService.presentToast({
        titulo: '[401] - Acesse novamente',
        detalhe: 'É preciso autenticar-se novamente',
        gravidade: _constants_toast_constant__WEBPACK_IMPORTED_MODULE_1__.ToastPrimeSeverityEnum.ATENCAO,
        duracao: _constants_toast_constant__WEBPACK_IMPORTED_MODULE_1__.ToastEnum.longDuration
      });
      this.menu.close();
      this.authService.logout();
      this.router.navigateByUrl('login');
    } else {
      this.toastMessageService.presentToast({
        titulo: '[401] - Não autorizado',
        detalhe: error,
        gravidade: _constants_toast_constant__WEBPACK_IMPORTED_MODULE_1__.ToastPrimeSeverityEnum.ATENCAO,
        duracao: _constants_toast_constant__WEBPACK_IMPORTED_MODULE_1__.ToastEnum.mediumDuration
      });
    }
  }
  handle403(error) {
    var _this2 = this;
    this.toastMessageService.presentToast({
      titulo: '[403] - Não autorizado',
      detalhe: error,
      gravidade: _constants_toast_constant__WEBPACK_IMPORTED_MODULE_1__.ToastPrimeSeverityEnum.ATENCAO,
      duracao: _constants_toast_constant__WEBPACK_IMPORTED_MODULE_1__.ToastEnum.mediumDuration
    });
    if (error.toLowerCase().includes('inexistente') || error.toLowerCase().includes('suspenso') || error.toLowerCase().includes('inválido')) {
      this.authService.logout();
      this.router.navigateByUrl('login');
    }
    this.authorizationsCount++;
    if (this.authorizationsCount >= 5) {
      try {
        const sub = this.authService.refreshToken().subscribe({
          next: function () {
            var _ref3 = (0,_home_m4estro_Documentos_Code_Neg_cios_StandIO_Conds_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (response) {
              yield _this2.authService.loginSucesso(response);
            });
            return function next(_x2) {
              return _ref3.apply(this, arguments);
            };
          }(),
          error: error => {
            this.menu.enable(true);
            this.menu.close();
            this.menu.enable(false);
            this.authService.logout();
            this.router.navigateByUrl('login');
          }
        });
        this.subscriptions.add(sub);
      } catch (e) {
        this.menu.enable(true);
        this.menu.close();
        this.menu.enable(false);
        this.router.navigateByUrl('login');
      }
      this.authorizationsCount = 0;
    }
  }
  handle404(error) {
    this.toastMessageService.presentToast({
      titulo: '[404] - Não encontrado',
      detalhe: error,
      gravidade: _constants_toast_constant__WEBPACK_IMPORTED_MODULE_1__.ToastPrimeSeverityEnum.ATENCAO,
      duracao: _constants_toast_constant__WEBPACK_IMPORTED_MODULE_1__.ToastEnum.mediumDuration
    });
  }
  handle408(error) {
    this.toastMessageService.presentToast({
      titulo: '[408] - Tempo de espera excedido',
      detalhe: error,
      gravidade: _constants_toast_constant__WEBPACK_IMPORTED_MODULE_1__.ToastPrimeSeverityEnum.ERRO,
      duracao: _constants_toast_constant__WEBPACK_IMPORTED_MODULE_1__.ToastEnum.longDuration
    });
  }
  handle409(error) {
    this.toastMessageService.presentInfoOverlay({
      header: 'Atenção!',
      closable: true,
      modal: true,
      data: error,
      width: '50%',
      footer: '.',
      contentStyle: {
        "max-height": "500px",
        "overflow": "auto"
      },
      baseZIndex: 10000
    });
  }
  handle422(error) {
    var _this3 = this;
    return (0,_home_m4estro_Documentos_Code_Neg_cios_StandIO_Conds_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this3.toastMessageService.presentToast({
        titulo: '[422] - Não processável',
        detalhe: error,
        gravidade: _constants_toast_constant__WEBPACK_IMPORTED_MODULE_1__.ToastPrimeSeverityEnum.ERRO,
        duracao: _constants_toast_constant__WEBPACK_IMPORTED_MODULE_1__.ToastEnum.longDuration
      });
    })();
  }
  handleDefaultError(message, status = 500) {
    this.toastMessageService.presentToast({
      gravidade: _constants_toast_constant__WEBPACK_IMPORTED_MODULE_1__.ToastPrimeSeverityEnum.ERRO,
      detalhe: message,
      duracao: _constants_toast_constant__WEBPACK_IMPORTED_MODULE_1__.ToastEnum.longDuration,
      titulo: status.toString()
    });
  }
  createAlert(error) {
    var _this4 = this;
    return (0,_home_m4estro_Documentos_Code_Neg_cios_StandIO_Conds_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let titulo = error.error;
      let message = error.msg;
      if (!titulo) {
        titulo = 'Falha';
      }
      if (!message) {
        message = error.message;
      }
      const alert = yield _this4.alertContr.create({
        header: error.status + ': ' + titulo,
        message,
        backdropDismiss: false,
        buttons: [{
          text: 'OK'
        }]
      });
      yield alert.present();
    })();
  }
  convertErrorList(error) {
    if (!error.length || !Array.isArray(error)) {
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
ErrorInterceptor.ctorParameters = () => [{
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.AlertController
}, {
  type: _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_11__.Router
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.MenuController
}, {
  type: _services_toast_toast_message_service__WEBPACK_IMPORTED_MODULE_4__.ToastMessageService
}];
ErrorInterceptor = (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_13__.Injectable)()], ErrorInterceptor);

const errorInterceptorProvider = {
  provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_14__.HTTP_INTERCEPTORS,
  useClass: ErrorInterceptor,
  multi: true
};

/***/ }),

/***/ 10491:
/*!************************************************************!*\
  !*** ./src/app/shared/interceptors/loading-interceptor.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoadingInterceptor": () => (/* binding */ LoadingInterceptor),
/* harmony export */   "loadingInterceptorProvider": () => (/* binding */ loadingInterceptorProvider)
/* harmony export */ });
/* harmony import */ var _home_m4estro_Documentos_Code_Neg_cios_StandIO_Conds_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _config_app_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../config/app.config */ 49264);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 19337);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 32313);
/* harmony import */ var _constants_toast_constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/toast.constant */ 98739);








let LoadingInterceptor = class LoadingInterceptor {
  constructor(toastController, loadingController) {
    this.toastController = toastController;
    this.loadingController = loadingController;
    this.defaultLoaderId = 'main-loader';
    this.defaultDuration = _config_app_config__WEBPACK_IMPORTED_MODULE_1__.MODE.CURRENT_MODE == 'PROD' ? _constants_toast_constant__WEBPACK_IMPORTED_MODULE_2__.ToastEnum.longDuration : _constants_toast_constant__WEBPACK_IMPORTED_MODULE_2__.ToastEnum.shortDuration;
  }
  intercept(req, next) {
    var _this = this;
    this.finalizeLoader();
    if (!req.url.toLowerCase().includes('http')) {
      return next.handle(req);
    }
    return next.handle(req).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.tap)( /*#__PURE__*/function () {
      var _ref = (0,_home_m4estro_Documentos_Code_Neg_cios_StandIO_Conds_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (event) {
        if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpResponse) {
          yield _this.finalizeLoader();
        } else {
          yield _this.startLoader();
          if (req.method.toUpperCase().includes('POST') || req.method.toUpperCase().includes('PATCH') || req.method.toUpperCase().includes('PUT')) {
            yield _this.showLoadingMessage();
          }
        }
      });
      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }())).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.finalize)( /*#__PURE__*/(0,_home_m4estro_Documentos_Code_Neg_cios_StandIO_Conds_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let flag = true;
      do {
        const top = yield _this.loadingController.getTop();
        yield new Promise(resolve => setTimeout(() => resolve(top ? false : true), 1000));
        if (top) {
          yield _this.finalizeLoader();
        } else {
          flag = false;
          break;
        }
      } while (flag);
      yield _this.finalizeLoader();
    })));
  }
  showLoadingMessage() {
    var _this2 = this;
    return (0,_home_m4estro_Documentos_Code_Neg_cios_StandIO_Conds_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const toast = yield _this2.toastController.create({
        message: `Aguarde um momento`,
        id: _this2.defaultLoaderId,
        duration: _this2.defaultDuration
      });
      yield toast.present();
    })();
  }
  dimissMessage() {
    var _this3 = this;
    return (0,_home_m4estro_Documentos_Code_Neg_cios_StandIO_Conds_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const topOverlay = yield _this3.toastController.getTop();
        if (topOverlay) {
          yield topOverlay.dismiss();
          yield _this3.toastController.dismiss('', '', _this3.defaultLoaderId);
        }
      } catch (e) {}
    })();
  }
  startLoader() {
    var _this4 = this;
    return (0,_home_m4estro_Documentos_Code_Neg_cios_StandIO_Conds_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const topOverlay = yield _this4.loadingController.getTop();
      if (!topOverlay) {
        const overlay = yield _this4.loadingController.create({
          spinner: 'circular',
          translucent: true,
          id: _this4.defaultLoaderId,
          duration: _this4.defaultDuration
        });
        yield overlay.present();
      } else {
        yield topOverlay.dismiss();
      }
    })();
  }
  finalizeLoader() {
    var _this5 = this;
    return (0,_home_m4estro_Documentos_Code_Neg_cios_StandIO_Conds_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        yield _this5.dimissMessage();
      } catch (e) {}
      try {
        const topOverlay = yield _this5.loadingController.getTop();
        if (topOverlay) {
          yield topOverlay.dismiss();
          yield _this5.loadingController.dismiss('', '', _this5.defaultLoaderId);
        }
      } catch (e) {}
    })();
  }
};
LoadingInterceptor.ctorParameters = () => [{
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ToastController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.LoadingController
}];
LoadingInterceptor = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Injectable)({
  providedIn: 'root'
})], LoadingInterceptor);

const loadingInterceptorProvider = {
  provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HTTP_INTERCEPTORS,
  useClass: LoadingInterceptor,
  multi: true
};

/***/ }),

/***/ 40199:
/*!**********************************************************!*\
  !*** ./src/app/shared/interfaces/others/pageable.dto.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageOptionsDto": () => (/* binding */ PageOptionsDto)
/* harmony export */ });
/* harmony import */ var _constants_page_constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../constants/page.constant */ 59136);

class PageOptionsDto {
    constructor() {
        this.order = _constants_page_constant__WEBPACK_IMPORTED_MODULE_0__.PageOrder.ASC;
        this.page = 1;
        this.take = 10;
    }
}


/***/ }),

/***/ 67361:
/*!*********************************************!*\
  !*** ./src/app/shared/pipes/pipe.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PipeModule": () => (/* binding */ PipeModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _utils_empty_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/empty.pipe */ 80585);
/* harmony import */ var _utils_notificacao_convert_status_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/notificacao/convert-status.pipe */ 20151);
/* harmony import */ var _utils_time_since_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/time-since.pipe */ 65);
/* harmony import */ var _utils_limit_chars_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/limit-chars.pipe */ 35700);







let PipeModule = class PipeModule {
};
PipeModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        declarations: [_utils_empty_pipe__WEBPACK_IMPORTED_MODULE_0__.EmptyPipe, _utils_notificacao_convert_status_pipe__WEBPACK_IMPORTED_MODULE_1__.ConvertStatusPipe, _utils_time_since_pipe__WEBPACK_IMPORTED_MODULE_2__.TimeSincePipe, _utils_limit_chars_pipe__WEBPACK_IMPORTED_MODULE_3__.LimitCharsPipe],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,],
        exports: [_utils_empty_pipe__WEBPACK_IMPORTED_MODULE_0__.EmptyPipe, _utils_notificacao_convert_status_pipe__WEBPACK_IMPORTED_MODULE_1__.ConvertStatusPipe, _utils_time_since_pipe__WEBPACK_IMPORTED_MODULE_2__.TimeSincePipe, _utils_limit_chars_pipe__WEBPACK_IMPORTED_MODULE_3__.LimitCharsPipe],
    })
], PipeModule);



/***/ }),

/***/ 80585:
/*!**************************************************!*\
  !*** ./src/app/shared/pipes/utils/empty.pipe.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmptyPipe": () => (/* binding */ EmptyPipe)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);


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

/***/ 35700:
/*!********************************************************!*\
  !*** ./src/app/shared/pipes/utils/limit-chars.pipe.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LimitCharsPipe": () => (/* binding */ LimitCharsPipe)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);


let LimitCharsPipe = class LimitCharsPipe {
    transform(value, cutPoint) {
        if (typeof value == 'string' && value.trim().length >= 1) {
            if (cutPoint && cutPoint <= 0) {
                cutPoint = value.trim().length;
                return value.trim().substring(0);
            }
            return value.trim().substring(0, cutPoint) + '...';
        }
        return value;
    }
};
LimitCharsPipe = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Pipe)({
        name: 'limitCharsPipe'
    })
], LimitCharsPipe);



/***/ }),

/***/ 20151:
/*!***********************************************************************!*\
  !*** ./src/app/shared/pipes/utils/notificacao/convert-status.pipe.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConvertStatusPipe": () => (/* binding */ ConvertStatusPipe)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_app_shared_constants_notificacao_constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/constants/notificacao.constant */ 24658);



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

/***/ 65:
/*!*******************************************************!*\
  !*** ./src/app/shared/pipes/utils/time-since.pipe.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TimeSincePipe": () => (/* binding */ TimeSincePipe)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var dayjs_plugin_relativeTime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs/plugin/relativeTime */ 12362);
/* harmony import */ var dayjs_plugin_relativeTime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs_plugin_relativeTime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var dayjs_plugin_updateLocale__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dayjs/plugin/updateLocale */ 23267);
/* harmony import */ var dayjs_plugin_updateLocale__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dayjs_plugin_updateLocale__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! dayjs */ 16901);
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

/***/ 16256:
/*!******************************************************!*\
  !*** ./src/app/shared/services/auth/auth.service.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthService": () => (/* binding */ AuthService)
/* harmony export */ });
/* harmony import */ var _home_m4estro_Documentos_Code_Neg_cios_StandIO_Conds_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jwt-decode */ 79168);
/* harmony import */ var src_config_api_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/config/api.config */ 99038);
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./storage.service */ 54452);
/* harmony import */ var _preferences_preferences_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../preferences/preferences.service */ 9683);
/* harmony import */ var _webSocket_start_start_socket_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../webSocket/start/start-socket.service */ 91303);
/* harmony import */ var _user_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../user/user.service */ 34758);










let AuthService = class AuthService {
  constructor(http, storage, preferencesService, startSocketService, userService) {
    this.http = http;
    this.storage = storage;
    this.preferencesService = preferencesService;
    this.startSocketService = startSocketService;
    this.userService = userService;
  }
  authenticate(credenciais) {
    return this.http.post(`${src_config_api_config__WEBPACK_IMPORTED_MODULE_2__.API_CONFIG.baseURL}/auth/login`, credenciais, {
      responseType: 'json'
    });
  }
  refreshToken() {
    try {
      const token = {
        token: this.storage.getLocalUser().refresh_token
      };
      return this.http.post(`${src_config_api_config__WEBPACK_IMPORTED_MODULE_2__.API_CONFIG.baseURL}/auth/refresh`, token, {
        responseType: 'json'
      });
    } catch (e) {}
  }
  loginSucesso(loginDto) {
    var _this = this;
    return (0,_home_m4estro_Documentos_Code_Neg_cios_StandIO_Conds_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      //email, perfil_id, perfil_nome, avatar, id, nome
      const {
        email,
        perfil_id,
        perfil_nome,
        avatar,
        id,
        nome
      } = (0,jwt_decode__WEBPACK_IMPORTED_MODULE_1__["default"])(loginDto.token);
      const localUser = {
        email,
        perfil_id,
        perfil_nome,
        avatar,
        id,
        nome,
        refresh_token: loginDto.refresh_token
      };
      _this.storage.setLocalUser(localUser);
      const data = yield _this.userService.findById(id).toPromise();
      _this.storage.setCompleteLocalUser(data);
      _this.startSocketService.emitNewConnection(id);
    })();
  }
  logout() {
    //this.preferencesService.setThemePreference('light');
    this.storage.setLocalUser(null);
    this.storage.setCompleteLocalUser(null);
  }
};
AuthService.ctorParameters = () => [{
  type: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClient
}, {
  type: _storage_service__WEBPACK_IMPORTED_MODULE_3__.StorageService
}, {
  type: _preferences_preferences_service__WEBPACK_IMPORTED_MODULE_4__.PreferencesService
}, {
  type: _webSocket_start_start_socket_service__WEBPACK_IMPORTED_MODULE_5__.StartSocketService
}, {
  type: _user_user_service__WEBPACK_IMPORTED_MODULE_6__.UserService
}];
AuthService = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Injectable)({
  providedIn: 'root'
})], AuthService);


/***/ }),

/***/ 54452:
/*!*********************************************************!*\
  !*** ./src/app/shared/services/auth/storage.service.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StorageService": () => (/* binding */ StorageService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 10745);
/* harmony import */ var src_config_storageKeys_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/config/storageKeys.config */ 27364);




let StorageService = class StorageService {
    constructor() {
        this.wsIsActive = false;
    }
    getLocalUser() {
        const user = localStorage.getItem(src_config_storageKeys_config__WEBPACK_IMPORTED_MODULE_0__.STORAGE_KEYS.localUser);
        if (user == null) {
            return null;
        }
        else {
            return JSON.parse(user);
        }
    }
    setLocalUser(obj) {
        if (obj == null) {
            localStorage.removeItem(src_config_storageKeys_config__WEBPACK_IMPORTED_MODULE_0__.STORAGE_KEYS.localUser);
        }
        else {
            localStorage.setItem(src_config_storageKeys_config__WEBPACK_IMPORTED_MODULE_0__.STORAGE_KEYS.localUser, JSON.stringify(obj));
        }
    }
    getCompleteLocalUser() {
        const user = localStorage.getItem(src_config_storageKeys_config__WEBPACK_IMPORTED_MODULE_0__.STORAGE_KEYS.user);
        if (user == null) {
            return null;
        }
        else {
            return JSON.parse(user);
        }
    }
    setCompleteLocalUser(obj) {
        if (obj == null) {
            localStorage.removeItem(src_config_storageKeys_config__WEBPACK_IMPORTED_MODULE_0__.STORAGE_KEYS.user);
        }
        else {
            if (!obj.avatar_url) {
                obj.avatar_url = "assets/imgs/outros/default-user.jpg";
            }
            localStorage.setItem(src_config_storageKeys_config__WEBPACK_IMPORTED_MODULE_0__.STORAGE_KEYS.user, JSON.stringify(obj));
        }
    }
    isLogedIn() {
        const user = JSON.parse(localStorage.getItem(src_config_storageKeys_config__WEBPACK_IMPORTED_MODULE_0__.STORAGE_KEYS.localUser));
        if (user) {
            return true;
        }
        else {
            return false;
        }
    }
    isLogedInObs() {
        const user = JSON.parse(localStorage.getItem(src_config_storageKeys_config__WEBPACK_IMPORTED_MODULE_0__.STORAGE_KEYS.localUser));
        if (user) {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(true);
        }
        else {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(false);
        }
    }
    getRole() {
        const localUser = JSON.parse(localStorage.getItem(src_config_storageKeys_config__WEBPACK_IMPORTED_MODULE_0__.STORAGE_KEYS.localUser));
        const { perfil_nome } = localUser;
        return perfil_nome;
    }
    turnWsOn() {
        this.wsIsActive = true;
    }
    getWs() {
        return this.wsIsActive;
    }
};
StorageService.ctorParameters = () => [];
StorageService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], StorageService);



/***/ }),

/***/ 9683:
/*!********************************************************************!*\
  !*** ./src/app/shared/services/preferences/preferences.service.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PreferencesService": () => (/* binding */ PreferencesService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 26067);



let PreferencesService = class PreferencesService {
    constructor() {
        this.themeSubscriber = new rxjs__WEBPACK_IMPORTED_MODULE_0__.ReplaySubject();
        this.lightSurface = 'rgba(255, 255, 255, 0)';
        this.darkSurface = 'rgba(42, 50, 61, 0)';
        this.defaultAssetImgTheme = `assets/imgs/${this.getThemePreference()}`;
    }
    setThemePreference(themePreference, themeName) {
        this.surfaceBackground = themePreference == 'dark' ? this.darkSurface : this.lightSurface;
        localStorage.setItem('theme_preference', themePreference);
        localStorage.setItem('theme_name', themeName);
        this.defaultAssetImgTheme = `assets/imgs/${themePreference}`;
        this.themeSubscriber.next(themePreference);
    }
    getThemePreference() {
        return localStorage.getItem('theme_preference') || 'light';
    }
    getThemeName() {
        return localStorage.getItem('theme_name');
    }
    getDefaultAssetImgTheme() {
        return this.defaultAssetImgTheme;
    }
    getDashboardTheme(dashboard) {
        const theme = this.getThemePreference();
        dashboard.backgroundColor = this.surfaceBackground;
        return {
            dashboard,
            theme: theme == 'dark' ? theme : undefined
        };
    }
};
PreferencesService.ctorParameters = () => [];
PreferencesService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], PreferencesService);



/***/ }),

/***/ 8601:
/*!********************************************************!*\
  !*** ./src/app/shared/services/theme/theme.service.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ThemeService": () => (/* binding */ ThemeService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 94666);



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

/***/ 12973:
/*!****************************************************************!*\
  !*** ./src/app/shared/services/toast/toast-message.service.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ToastMessageService": () => (/* binding */ ToastMessageService)
/* harmony export */ });
/* harmony import */ var _home_m4estro_Documentos_Code_Neg_cios_StandIO_Conds_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/api */ 14356);
/* harmony import */ var primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/dynamicdialog */ 62648);
/* harmony import */ var _components_utils_generic_dialog_generic_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/utils/generic-dialog/generic-dialog.component */ 58817);







let ToastMessageService = class ToastMessageService {
  constructor(toastService, toastController, dialogService) {
    this.toastService = toastService;
    this.toastController = toastController;
    this.dialogService = dialogService;
  }
  presentToast(toast, key = 'main') {
    this.toastService.clear();
    this.toastService.add({
      severity: toast.gravidade,
      summary: toast.titulo,
      detail: toast.detalhe,
      life: toast.duracao,
      key
    });
  }
  clearToast() {
    this.toastService.clear();
  }
  presentNotification(toast) {
    var _this = this;
    return (0,_home_m4estro_Documentos_Code_Neg_cios_StandIO_Conds_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const toastOverlay = yield _this.toastController.create({
        header: toast.titulo,
        message: toast.detalhe,
        duration: toast.duracao,
        color: toast.gravidade,
        position: 'top',
        keyboardClose: true,
        translucent: true
      });
      toastOverlay.present();
    })();
  }
  presentInfoOverlay(config) {
    this.ref = this.dialogService.open(_components_utils_generic_dialog_generic_dialog_component__WEBPACK_IMPORTED_MODULE_1__.GenericDialogComponent, config);
  }
  presentConfirmationOverlay(toast, key = 'confirmation-overlay') {
    this.toastService.add({
      key,
      sticky: true,
      severity: toast.gravidade,
      summary: toast.titulo,
      detail: toast.detalhe,
      icon: toast.icon || 'pi pi-exclamation-triangle'
    });
  }
  closeConfirmationOverlay() {
    this.toastService.clear('confirmation-overlay');
  }
  closeOverlay() {
    if (this.ref) {
      this.ref.close();
    }
  }
};
ToastMessageService.ctorParameters = () => [{
  type: primeng_api__WEBPACK_IMPORTED_MODULE_2__.MessageService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.ToastController
}, {
  type: primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_4__.DialogService
}];
ToastMessageService = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Injectable)({
  providedIn: 'root'
})], ToastMessageService);


/***/ }),

/***/ 34758:
/*!******************************************************!*\
  !*** ./src/app/shared/services/user/user.service.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserService": () => (/* binding */ UserService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_config_api_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/config/api.config */ 99038);
/* harmony import */ var _interfaces_others_pageable_dto__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../interfaces/others/pageable.dto */ 40199);
/* harmony import */ var _utils_PageUtils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/PageUtils */ 55583);
/* harmony import */ var _utils_strings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/strings */ 35326);







let UserService = class UserService {
    constructor(http) {
        this.http = http;
    }
    findById(user_id) {
        return this.http.get(`${src_config_api_config__WEBPACK_IMPORTED_MODULE_0__.API_CONFIG.baseURL}/users/${user_id}`, {
            responseType: 'json',
        });
    }
    listUsers(searchUserDto, pageOptions = new _interfaces_others_pageable_dto__WEBPACK_IMPORTED_MODULE_1__.PageOptionsDto()) {
        let params = _utils_PageUtils__WEBPACK_IMPORTED_MODULE_2__.PageUtils.getPageOptionsParams(pageOptions);
        if (searchUserDto && searchUserDto.searchedUser) {
            params = params.append('searchedUser', searchUserDto.searchedUser);
        }
        if (searchUserDto && searchUserDto.status) {
            params = params.append('status', searchUserDto.status);
        }
        if (searchUserDto && searchUserDto.nome) {
            params = params.append('nome', searchUserDto.nome);
        }
        if (searchUserDto && searchUserDto.cpf) {
            params = params.append('cpf', searchUserDto.cpf);
        }
        if (searchUserDto && searchUserDto.email) {
            params = params.append('email', searchUserDto.email);
        }
        if (searchUserDto && searchUserDto.condominio_id) {
            params = params.append('condominio_id', searchUserDto.condominio_id);
        }
        if (searchUserDto && searchUserDto.tipo_usuario) {
            params = params.append('tipo_usuario', searchUserDto.tipo_usuario);
        }
        if (searchUserDto &&
            searchUserDto.load_cliente_nao_identificado == false || searchUserDto.load_cliente_nao_identificado == true) {
            params = params.append('load_cliente_nao_identificado', searchUserDto.load_cliente_nao_identificado);
        }
        return this.http.get(`${src_config_api_config__WEBPACK_IMPORTED_MODULE_0__.API_CONFIG.baseURL}/users`, {
            responseType: 'json',
            params,
        });
    }
    createUser(dto) {
        dto.tel1 = _utils_strings__WEBPACK_IMPORTED_MODULE_3__.StringsUtils.ClearSpecialCharacters(dto.tel1);
        dto.tel2 = _utils_strings__WEBPACK_IMPORTED_MODULE_3__.StringsUtils.ClearSpecialCharacters(dto.tel2);
        if (dto.tel2?.length == 0) {
            dto.tel2 = undefined;
        }
        if (!dto.cpf || dto.cpf == '') {
            dto.cpf = undefined;
        }
        if (!dto.identidade || dto.identidade == '') {
            dto.identidade = undefined;
        }
        return this.http.post(`${src_config_api_config__WEBPACK_IMPORTED_MODULE_0__.API_CONFIG.baseURL}/users`, dto, {
            responseType: 'json',
        });
    }
    updateUser(dto, idUser) {
        dto.tel1 = _utils_strings__WEBPACK_IMPORTED_MODULE_3__.StringsUtils.ClearSpecialCharacters(dto.tel1);
        dto.tel2 = _utils_strings__WEBPACK_IMPORTED_MODULE_3__.StringsUtils.ClearSpecialCharacters(dto.tel2);
        if (dto.tel2?.length == 0) {
            dto.tel2 = undefined;
        }
        return this.http.put(`${src_config_api_config__WEBPACK_IMPORTED_MODULE_0__.API_CONFIG.baseURL}/users/${idUser}`, dto, {
            responseType: 'json',
        });
    }
    createEndereco(newEndereco, user_id) {
        return this.http.post(`${src_config_api_config__WEBPACK_IMPORTED_MODULE_0__.API_CONFIG.baseURL}/users/${user_id}/endereco`, newEndereco, {
            responseType: 'json',
        });
    }
    updateEndereco(newEndereco, user_id) {
        return this.http.post(`${src_config_api_config__WEBPACK_IMPORTED_MODULE_0__.API_CONFIG.baseURL}/users/${user_id}/endereco`, newEndereco, {
            responseType: 'json',
        });
    }
    updatePassword(newPassword) {
        return this.http.patch(`${src_config_api_config__WEBPACK_IMPORTED_MODULE_0__.API_CONFIG.baseURL}/users/password`, { senha: newPassword }, {
            responseType: 'json',
        });
    }
    uploadAvatar(anexo, id) {
        const formData = new FormData();
        formData.append('file', anexo);
        const url = id ? `${src_config_api_config__WEBPACK_IMPORTED_MODULE_0__.API_CONFIG.baseURL}/users/${id}/avatar` : `${src_config_api_config__WEBPACK_IMPORTED_MODULE_0__.API_CONFIG.baseURL}/users/avatar`;
        return this.http.patch(url, formData);
    }
    addDependente(responsavel_id, dto) {
        return this.http.patch(`${src_config_api_config__WEBPACK_IMPORTED_MODULE_0__.API_CONFIG.baseURL}/users/${responsavel_id}/dependente`, dto, {
            responseType: 'json',
        });
    }
    removeDependente(responsavel_id, dependente_id) {
        return this.http.delete(`${src_config_api_config__WEBPACK_IMPORTED_MODULE_0__.API_CONFIG.baseURL}/users/${responsavel_id}/dependente/${dependente_id}`, {
            responseType: 'json',
        });
    }
};
UserService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient }
];
UserService = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Injectable)({
        providedIn: 'root'
    })
], UserService);



/***/ }),

/***/ 55583:
/*!*******************************************!*\
  !*** ./src/app/shared/utils/PageUtils.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageUtils": () => (/* binding */ PageUtils)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 58987);

class PageUtils {
    static getPageOptionsParams({ order, page, take }) {
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpParams()
            .set('order', order)
            .set('page', page)
            .set('take', take);
        return params;
    }
}


/***/ }),

/***/ 35326:
/*!*****************************************!*\
  !*** ./src/app/shared/utils/strings.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StringsUtils": () => (/* binding */ StringsUtils)
/* harmony export */ });
class StringsUtils {
    static checkIfEmail(str) {
        const regexExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/gi;
        return regexExp.test(str);
    }
    static ClearSpecialCharacters(inputString) {
        if (!inputString || inputString.trim().length <= 0) {
            return '';
        }
        const outputString = inputString.replace(/[^a-zA-Z0-9]/g, '').trim();
        return outputString;
    }
}


/***/ }),

/***/ 85146:
/*!*************************************************!*\
  !*** ./src/app/shared/webSocket/SocketStart.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "io": () => (/* binding */ io)
/* harmony export */ });
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! socket.io-client */ 34769);
/* harmony import */ var _config_api_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../config/api.config */ 99038);


const io = (0,socket_io_client__WEBPACK_IMPORTED_MODULE_0__.io)(_config_api_config__WEBPACK_IMPORTED_MODULE_1__.API_CONFIG.socketURL, { reconnection: true, });



/***/ }),

/***/ 79688:
/*!******************************************************************!*\
  !*** ./src/app/shared/webSocket/cargas/cargas-socket.service.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CargasSocketService": () => (/* binding */ CargasSocketService)
/* harmony export */ });
/* harmony import */ var _home_m4estro_Documentos_Code_Neg_cios_StandIO_Conds_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 90833);
/* harmony import */ var _SocketStart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../SocketStart */ 85146);
/* harmony import */ var _constants_notificacao_constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../constants/notificacao.constant */ 24658);
/* harmony import */ var _constants_toast_constant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../constants/toast.constant */ 98739);
/* harmony import */ var _services_toast_toast_message_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/toast/toast-message.service */ 12973);








let CargasSocketService = class CargasSocketService {
  constructor(toastMessageService) {
    this.toastMessageService = toastMessageService;
    this.socket = _SocketStart__WEBPACK_IMPORTED_MODULE_1__.io;
  }
  listenCargaStarted() {
    var _this = this;
    return new rxjs__WEBPACK_IMPORTED_MODULE_5__.Observable(observer => {
      this.socket.on("carga_started", /*#__PURE__*/function () {
        var _ref = (0,_home_m4estro_Documentos_Code_Neg_cios_StandIO_Conds_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (data) {
          const {
            carga_nome,
            job_id,
            message
          } = data;
          _this.toastMessageService.presentNotification({
            titulo: `[${job_id}] - ${carga_nome}`,
            detalhe: message,
            gravidade: _constants_toast_constant__WEBPACK_IMPORTED_MODULE_3__.ToastIonicSeverityEnum.INFORMACAO,
            duracao: _constants_toast_constant__WEBPACK_IMPORTED_MODULE_3__.ToastEnum.mediumDuration
          });
          observer.next(data);
        });
        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }());
    });
  }
  listenCargaFinish() {
    var _this2 = this;
    return new rxjs__WEBPACK_IMPORTED_MODULE_5__.Observable(observer => {
      this.socket.on("carga_end", /*#__PURE__*/function () {
        var _ref2 = (0,_home_m4estro_Documentos_Code_Neg_cios_StandIO_Conds_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (data) {
          const {
            carga_nome,
            job_id,
            message,
            status
          } = data;
          const situacao = {
            notificacaoStatus: _constants_notificacao_constant__WEBPACK_IMPORTED_MODULE_2__.NotificacaoStatus.SUCESSO,
            toastStatus: _constants_toast_constant__WEBPACK_IMPORTED_MODULE_3__.ToastIonicSeverityEnum.SUCESSO
          };
          if (status != 'completed') {
            situacao.notificacaoStatus = _constants_notificacao_constant__WEBPACK_IMPORTED_MODULE_2__.NotificacaoStatus.ERRO;
            situacao.toastStatus = _constants_toast_constant__WEBPACK_IMPORTED_MODULE_3__.ToastIonicSeverityEnum.ERRO;
          }
          _this2.toastMessageService.presentNotification({
            titulo: `[${job_id}] - ${carga_nome}`,
            detalhe: message,
            gravidade: situacao.toastStatus,
            duracao: _constants_toast_constant__WEBPACK_IMPORTED_MODULE_3__.ToastEnum.mediumDuration
          });
          observer.next(data);
        });
        return function (_x2) {
          return _ref2.apply(this, arguments);
        };
      }());
    });
  }
};
CargasSocketService.ctorParameters = () => [{
  type: _services_toast_toast_message_service__WEBPACK_IMPORTED_MODULE_4__.ToastMessageService
}];
CargasSocketService = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Injectable)({
  providedIn: 'root'
})], CargasSocketService);


/***/ }),

/***/ 54392:
/*!****************************************************************!*\
  !*** ./src/app/shared/webSocket/mails/mails-socket.service.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MailsSocketService": () => (/* binding */ MailsSocketService)
/* harmony export */ });
/* harmony import */ var _home_m4estro_Documentos_Code_Neg_cios_StandIO_Conds_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 90833);
/* harmony import */ var _SocketStart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../SocketStart */ 85146);
/* harmony import */ var _constants_notificacao_constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../constants/notificacao.constant */ 24658);
/* harmony import */ var _constants_toast_constant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../constants/toast.constant */ 98739);
/* harmony import */ var _services_toast_toast_message_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/toast/toast-message.service */ 12973);








let MailsSocketService = class MailsSocketService {
  constructor(toastMessageService) {
    this.toastMessageService = toastMessageService;
    this.socket = _SocketStart__WEBPACK_IMPORTED_MODULE_1__.io;
  }
  listenMailFinish() {
    var _this = this;
    return new rxjs__WEBPACK_IMPORTED_MODULE_5__.Observable(observer => {
      this.socket.on("send-email_finished", /*#__PURE__*/function () {
        var _ref = (0,_home_m4estro_Documentos_Code_Neg_cios_StandIO_Conds_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (data) {
          console.log('EMAIL SEND SOCKET');
          const {
            subject,
            job_id,
            message,
            status
          } = data;
          const situacao = {
            notificacaoStatus: _constants_notificacao_constant__WEBPACK_IMPORTED_MODULE_2__.NotificacaoStatus.SUCESSO,
            toastStatus: _constants_toast_constant__WEBPACK_IMPORTED_MODULE_3__.ToastIonicSeverityEnum.SUCESSO
          };
          if (status != 'completed') {
            situacao.notificacaoStatus = _constants_notificacao_constant__WEBPACK_IMPORTED_MODULE_2__.NotificacaoStatus.ERRO;
            situacao.toastStatus = _constants_toast_constant__WEBPACK_IMPORTED_MODULE_3__.ToastIonicSeverityEnum.ERRO;
          }
          _this.toastMessageService.presentNotification({
            titulo: `[${job_id}] - ${subject.substring(0, 10)}...`,
            detalhe: message,
            gravidade: situacao.toastStatus,
            duracao: _constants_toast_constant__WEBPACK_IMPORTED_MODULE_3__.ToastEnum.mediumDuration
          });
          observer.next(data);
        });
        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }());
    });
  }
};
MailsSocketService.ctorParameters = () => [{
  type: _services_toast_toast_message_service__WEBPACK_IMPORTED_MODULE_4__.ToastMessageService
}];
MailsSocketService = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Injectable)({
  providedIn: 'root'
})], MailsSocketService);


/***/ }),

/***/ 65133:
/*!************************************************************************************************!*\
  !*** ./src/app/shared/webSocket/solicitacao-aprovacao/solicitacao-aprovacao-socket.service.ts ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SolicitacaoAprovacaoSocketService": () => (/* binding */ SolicitacaoAprovacaoSocketService)
/* harmony export */ });
/* harmony import */ var _home_m4estro_Documentos_Code_Neg_cios_StandIO_Conds_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 90833);
/* harmony import */ var _SocketStart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../SocketStart */ 85146);
/* harmony import */ var _constants_toast_constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../constants/toast.constant */ 98739);
/* harmony import */ var _services_toast_toast_message_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/toast/toast-message.service */ 12973);







let SolicitacaoAprovacaoSocketService = class SolicitacaoAprovacaoSocketService {
  constructor(toastMessageService) {
    this.toastMessageService = toastMessageService;
    this.socket = _SocketStart__WEBPACK_IMPORTED_MODULE_1__.io;
  }
  listenSolicitacaoAprovacao() {
    var _this = this;
    return new rxjs__WEBPACK_IMPORTED_MODULE_4__.Observable(observer => {
      this.socket.on("new_aprovacao_requested", /*#__PURE__*/function () {
        var _ref = (0,_home_m4estro_Documentos_Code_Neg_cios_StandIO_Conds_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (data) {
          const solicitacao = data.solicitacao;
          _this.toastMessageService.presentNotification({
            titulo: `Nova aprovação de pagamento de "${solicitacao.operacao.nome}"`,
            detalhe: `Aprovação de R$ ${solicitacao.custo.toFixed(2)} está pendente da sua aprovação`,
            gravidade: _constants_toast_constant__WEBPACK_IMPORTED_MODULE_2__.ToastIonicSeverityEnum.INFORMACAO,
            duracao: _constants_toast_constant__WEBPACK_IMPORTED_MODULE_2__.ToastEnum.mediumDuration
          });
          observer.next(data);
        });
        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }());
    });
  }
};
SolicitacaoAprovacaoSocketService.ctorParameters = () => [{
  type: _services_toast_toast_message_service__WEBPACK_IMPORTED_MODULE_3__.ToastMessageService
}];
SolicitacaoAprovacaoSocketService = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Injectable)({
  providedIn: 'root'
})], SolicitacaoAprovacaoSocketService);


/***/ }),

/***/ 91303:
/*!****************************************************************!*\
  !*** ./src/app/shared/webSocket/start/start-socket.service.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StartSocketService": () => (/* binding */ StartSocketService)
/* harmony export */ });
/* harmony import */ var _home_m4estro_Documentos_Code_Neg_cios_StandIO_Conds_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 90833);
/* harmony import */ var _SocketStart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../SocketStart */ 85146);





let StartSocketService = class StartSocketService {
  constructor() {
    this.socketStatus = 'OFF';
    this.socket = _SocketStart__WEBPACK_IMPORTED_MODULE_1__.io;
  }
  emitNewConnection(user_id) {
    this.socket.emit("start", {
      user_id
    });
  }
  listenConneciton() {
    var _this = this;
    return new rxjs__WEBPACK_IMPORTED_MODULE_2__.Observable(observer => {
      this.socket.on("socket_connected", /*#__PURE__*/function () {
        var _ref = (0,_home_m4estro_Documentos_Code_Neg_cios_StandIO_Conds_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (data) {
          _this.socketStatus = data.connection;
          observer.next(data);
        });
        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }());
    });
  }
};
StartSocketService.ctorParameters = () => [];
StartSocketService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
  providedIn: 'root'
})], StartSocketService);


/***/ }),

/***/ 99038:
/*!**********************************!*\
  !*** ./src/config/api.config.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "API_CONFIG": () => (/* binding */ API_CONFIG),
/* harmony export */   "CURRENT_DATE": () => (/* binding */ CURRENT_DATE),
/* harmony export */   "changeBaseURL": () => (/* binding */ changeBaseURL)
/* harmony export */ });
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.config */ 49264);

let API_CONFIG;
let CURRENT_DATE;
if (_app_config__WEBPACK_IMPORTED_MODULE_0__.MODE.CURRENT_MODE == 'PROD') {
    API_CONFIG = {
        baseURL: 'http://192.168.0.30:3000',
        socketURL: 'http://192.168.0.30:3000',
    };
    CURRENT_DATE = new Date();
}
else {
    API_CONFIG = {
        baseURL: 'http://192.168.0.30:3000',
        socketURL: 'http://192.168.0.30:3000',
    };
    CURRENT_DATE = new Date('2023-02-01');
}
function changeBaseURL(newUrl) {
    API_CONFIG.baseURL = newUrl;
    API_CONFIG.socketURL = newUrl;
}



/***/ }),

/***/ 49264:
/*!**********************************!*\
  !*** ./src/config/app.config.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DOCS_DIR": () => (/* binding */ DOCS_DIR),
/* harmony export */   "IMAGE_DIR": () => (/* binding */ IMAGE_DIR),
/* harmony export */   "MODE": () => (/* binding */ MODE),
/* harmony export */   "ROOT_DIR": () => (/* binding */ ROOT_DIR),
/* harmony export */   "SYSTEM_INFO": () => (/* binding */ SYSTEM_INFO),
/* harmony export */   "SYSTEM_LOGO": () => (/* binding */ SYSTEM_LOGO),
/* harmony export */   "SYSTEM_NAME": () => (/* binding */ SYSTEM_NAME),
/* harmony export */   "SYSTEM_NICKNAME": () => (/* binding */ SYSTEM_NICKNAME),
/* harmony export */   "SYSTEM_VERSION": () => (/* binding */ SYSTEM_VERSION)
/* harmony export */ });
const ROOT_DIR = 'stand-conds-files';
const IMAGE_DIR = `${ROOT_DIR}/imagens`;
const DOCS_DIR = `${ROOT_DIR}/documentos`;
const SYSTEM_NICKNAME = 'CONDs';
const SYSTEM_NAME = 'Stand.Io - Conds';
const SYSTEM_VERSION = '0.0.1';
const SYSTEM_LOGO = 'assets/icon/app-icon/512.png';
//DEV || PROD
const MODE = { CURRENT_MODE: 'DEV' };
const SYSTEM_INFO = {
    MODE: MODE.CURRENT_MODE,
    SYSTEM_NICKNAME,
    SYSTEM_NAME,
    SYSTEM_VERSION,
    SYSTEM_LOGO,
};


/***/ }),

/***/ 27364:
/*!******************************************!*\
  !*** ./src/config/storageKeys.config.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "STORAGE_KEYS": () => (/* binding */ STORAGE_KEYS)
/* harmony export */ });
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.config */ 49264);

const STORAGE_KEYS = {
    localUser: `localUser${_app_config__WEBPACK_IMPORTED_MODULE_0__.SYSTEM_NICKNAME}`,
    user: `user${_app_config__WEBPACK_IMPORTED_MODULE_0__.SYSTEM_NICKNAME}`,
};


/***/ }),

/***/ 92340:
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

/***/ 14431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 76057);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 36747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 92340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.log(err));


/***/ }),

/***/ 50863:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \******************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./ion-accordion_2.entry.js": [
		70079,
		"common",
		"node_modules_ionic_core_dist_esm_ion-accordion_2_entry_js"
	],
	"./ion-action-sheet.entry.js": [
		25593,
		"common",
		"node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"
	],
	"./ion-alert.entry.js": [
		13225,
		"common",
		"node_modules_ionic_core_dist_esm_ion-alert_entry_js"
	],
	"./ion-app_8.entry.js": [
		4812,
		"common",
		"node_modules_ionic_core_dist_esm_ion-app_8_entry_js"
	],
	"./ion-avatar_3.entry.js": [
		86655,
		"node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"
	],
	"./ion-back-button.entry.js": [
		44856,
		"common",
		"node_modules_ionic_core_dist_esm_ion-back-button_entry_js"
	],
	"./ion-backdrop.entry.js": [
		13059,
		"node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"
	],
	"./ion-breadcrumb_2.entry.js": [
		58648,
		"common",
		"node_modules_ionic_core_dist_esm_ion-breadcrumb_2_entry_js"
	],
	"./ion-button_2.entry.js": [
		98308,
		"node_modules_ionic_core_dist_esm_ion-button_2_entry_js"
	],
	"./ion-card_5.entry.js": [
		44690,
		"node_modules_ionic_core_dist_esm_ion-card_5_entry_js"
	],
	"./ion-checkbox.entry.js": [
		64090,
		"node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"
	],
	"./ion-chip.entry.js": [
		36214,
		"node_modules_ionic_core_dist_esm_ion-chip_entry_js"
	],
	"./ion-col_3.entry.js": [
		69447,
		"node_modules_ionic_core_dist_esm_ion-col_3_entry_js"
	],
	"./ion-datetime-button.entry.js": [
		17950,
		"default-node_modules_ionic_core_dist_esm_data-cb72448c_js-node_modules_ionic_core_dist_esm_th-29e28e",
		"node_modules_ionic_core_dist_esm_ion-datetime-button_entry_js"
	],
	"./ion-datetime_3.entry.js": [
		79689,
		"default-node_modules_ionic_core_dist_esm_data-cb72448c_js-node_modules_ionic_core_dist_esm_th-29e28e",
		"common",
		"node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"
	],
	"./ion-fab_3.entry.js": [
		18840,
		"common",
		"node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"
	],
	"./ion-img.entry.js": [
		40749,
		"node_modules_ionic_core_dist_esm_ion-img_entry_js"
	],
	"./ion-infinite-scroll_2.entry.js": [
		69667,
		"common",
		"node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"
	],
	"./ion-input.entry.js": [
		83288,
		"common",
		"node_modules_ionic_core_dist_esm_ion-input_entry_js"
	],
	"./ion-item-option_3.entry.js": [
		35473,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"
	],
	"./ion-item_8.entry.js": [
		53634,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item_8_entry_js"
	],
	"./ion-loading.entry.js": [
		22855,
		"node_modules_ionic_core_dist_esm_ion-loading_entry_js"
	],
	"./ion-menu_3.entry.js": [
		495,
		"common",
		"node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"
	],
	"./ion-modal.entry.js": [
		58737,
		"common",
		"node_modules_ionic_core_dist_esm_ion-modal_entry_js"
	],
	"./ion-nav_2.entry.js": [
		99632,
		"common",
		"node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"
	],
	"./ion-picker-column-internal.entry.js": [
		54446,
		"common",
		"node_modules_ionic_core_dist_esm_ion-picker-column-internal_entry_js"
	],
	"./ion-picker-internal.entry.js": [
		32275,
		"node_modules_ionic_core_dist_esm_ion-picker-internal_entry_js"
	],
	"./ion-popover.entry.js": [
		48050,
		"common",
		"node_modules_ionic_core_dist_esm_ion-popover_entry_js"
	],
	"./ion-progress-bar.entry.js": [
		18994,
		"node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"
	],
	"./ion-radio_2.entry.js": [
		23592,
		"node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"
	],
	"./ion-range.entry.js": [
		35454,
		"common",
		"node_modules_ionic_core_dist_esm_ion-range_entry_js"
	],
	"./ion-refresher_2.entry.js": [
		290,
		"common",
		"node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"
	],
	"./ion-reorder_2.entry.js": [
		92666,
		"common",
		"node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"
	],
	"./ion-ripple-effect.entry.js": [
		64816,
		"node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"
	],
	"./ion-route_4.entry.js": [
		45534,
		"node_modules_ionic_core_dist_esm_ion-route_4_entry_js"
	],
	"./ion-searchbar.entry.js": [
		94902,
		"common",
		"node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"
	],
	"./ion-segment_2.entry.js": [
		91938,
		"common",
		"node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"
	],
	"./ion-select_3.entry.js": [
		78179,
		"node_modules_ionic_core_dist_esm_ion-select_3_entry_js"
	],
	"./ion-slide_2.entry.js": [
		90668,
		"node_modules_ionic_core_dist_esm_ion-slide_2_entry_js"
	],
	"./ion-spinner.entry.js": [
		61624,
		"common",
		"node_modules_ionic_core_dist_esm_ion-spinner_entry_js"
	],
	"./ion-split-pane.entry.js": [
		19989,
		"node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"
	],
	"./ion-tab-bar_2.entry.js": [
		28902,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"
	],
	"./ion-tab_2.entry.js": [
		70199,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"
	],
	"./ion-text.entry.js": [
		48395,
		"node_modules_ionic_core_dist_esm_ion-text_entry_js"
	],
	"./ion-textarea.entry.js": [
		96357,
		"node_modules_ionic_core_dist_esm_ion-textarea_entry_js"
	],
	"./ion-toast.entry.js": [
		38268,
		"node_modules_ionic_core_dist_esm_ion-toast_entry_js"
	],
	"./ion-toggle.entry.js": [
		15269,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toggle_entry_js"
	],
	"./ion-virtual-scroll.entry.js": [
		32875,
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
webpackAsyncContext.id = 50863;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 55899:
/*!**************************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/pwa-elements/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \**************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./pwa-action-sheet.entry.js": [
		45464,
		"node_modules_ionic_pwa-elements_dist_esm_pwa-action-sheet_entry_js"
	],
	"./pwa-camera-modal-instance.entry.js": [
		68724,
		"node_modules_ionic_pwa-elements_dist_esm_pwa-camera-modal-instance_entry_js"
	],
	"./pwa-camera-modal.entry.js": [
		8145,
		"node_modules_ionic_pwa-elements_dist_esm_pwa-camera-modal_entry_js"
	],
	"./pwa-camera.entry.js": [
		30527,
		"node_modules_ionic_pwa-elements_dist_esm_pwa-camera_entry_js"
	],
	"./pwa-toast.entry.js": [
		44389,
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
webpackAsyncContext.id = 55899;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 79259:
/*!***********************************************!*\
  !*** ./src/app/app.component.scss?ngResource ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = "ion-menu ion-content {\n  --background: var(--ion-item-background, var(--ion-background-color, #fff));\n}\n\nion-menu.md ion-content {\n  --padding-start: 8px;\n  --padding-end: 8px;\n  --padding-top: 20px;\n  --padding-bottom: 20px;\n}\n\nion-menu.md ion-list {\n  padding: 20px 0;\n}\n\nion-menu.md ion-note {\n  margin-bottom: 30px;\n}\n\nion-menu.md ion-list-header,\nion-menu.md ion-note {\n  padding-left: 10px;\n}\n\nion-menu.md ion-list#inbox-list {\n  border-bottom: 1px solid var(--ion-color-step-150, #d7d8da);\n}\n\nion-menu.md ion-list#inbox-list ion-list-header {\n  font-size: 22px;\n  font-weight: 600;\n  min-height: 20px;\n}\n\nion-menu.md ion-list#labels-list ion-list-header {\n  font-size: 16px;\n  margin-bottom: 18px;\n  color: #757575;\n  min-height: 26px;\n}\n\nion-menu.md ion-item {\n  --padding-start: 10px;\n  --padding-end: 10px;\n  border-radius: 4px;\n}\n\nion-menu.md ion-item.selected {\n  --background: rgba(var(--ion-color-primary-rgb), 0.14);\n}\n\nion-menu.md ion-item.selected ion-icon {\n  color: var(--ion-color-primary);\n}\n\nion-menu.md ion-item ion-icon {\n  color: #616e7e;\n}\n\nion-menu.md ion-item ion-label {\n  font-weight: 500;\n}\n\nion-menu.ios ion-content {\n  --padding-bottom: 20px;\n}\n\nion-menu.ios ion-list {\n  padding: 20px 0 0 0;\n}\n\nion-menu.ios ion-note {\n  line-height: 24px;\n  margin-bottom: 20px;\n}\n\nion-menu.ios ion-item {\n  --padding-start: 16px;\n  --padding-end: 16px;\n  --min-height: 50px;\n}\n\nion-menu.ios ion-item.selected ion-icon {\n  color: var(--ion-color-primary);\n}\n\nion-menu.ios ion-item ion-icon {\n  font-size: 24px;\n  color: #73849a;\n}\n\nion-menu.ios ion-list#labels-list ion-list-header {\n  margin-bottom: 8px;\n}\n\nion-menu.ios ion-list-header,\nion-menu.ios ion-note {\n  padding-left: 16px;\n  padding-right: 16px;\n}\n\nion-menu.ios ion-note {\n  margin-bottom: 8px;\n}\n\nion-note {\n  display: inline-block;\n  font-size: 16px;\n  color: var(--ion-color-medium-shade);\n}\n\nion-item.selected {\n  --color: var(--ion-color-primary);\n}\n\n.loader-bar-container {\n  z-index: 1032;\n}\n\n.loader-spinnner-container {\n  position: fixed;\n  z-index: 999;\n  height: 2em;\n  width: 2em;\n  overflow: show;\n  margin: auto;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  /* or: left: 50%; */\n  opacity: 0.8;\n  pointer-events: none;\n}\n\n.block-load {\n  pointer-events: none;\n}\n\n:host ::ng-deep ion-content {\n  pointer-events: var(--load-block);\n}\n\n:host ::ng-deep ion-menu ion-content {\n  pointer-events: all !important;\n}\n\n.system_logo {\n  width: 64px;\n  height: 64px;\n}\n\n.active {\n  --ion-text-color: var(--ion-color-primary);\n}\n\n.active ion-icon {\n  --ion-text-color-rgb: var(--ion-color-primary) ;\n}\n\n.sub-item {\n  padding-top: 0;\n  padding-left: 20px;\n}\n\n.layout-config .p-sidebar {\n  overflow: auto;\n}\n\n.layout-config .p-sidebar .p-sidebar-content {\n  padding: 0 2rem;\n}\n\n.layout-config .p-sidebar .p-sidebar-close {\n  top: 2rem;\n  right: 2rem;\n  z-index: 1;\n}\n\n.layout-config .grid > div {\n  padding: 1rem;\n  text-align: center;\n}\n\n.layout-config .grid > div span {\n  display: block;\n}\n\n.layout-config .grid > div button {\n  position: relative;\n  display: inline-flex;\n  justify-content: center;\n}\n\n.layout-config .themes-grid img {\n  width: 50px;\n  border-radius: 4px;\n  transition: transform 0.2s;\n}\n\n.layout-config .themes-grid img:hover {\n  transform: scale(1.1);\n}\n\n.layout-config .themes-grid span {\n  font-size: 0.875rem;\n  margin-top: 0.25rem;\n}\n\n.layout-config .config-title {\n  font-weight: 700;\n  font-size: 1.25rem;\n  margin: 2rem 0rem 1rem 0rem;\n}\n\n.layout-config .config-title:first-child {\n  margin-top: 0;\n}\n\n.layout-config .config-scale {\n  display: flex;\n  align-items: center;\n}\n\n.layout-config .config-scale .p-button {\n  margin-right: 0.5rem;\n}\n\n.layout-config .config-scale i {\n  margin-right: 0.5rem;\n  font-size: 0.75rem;\n  color: var(--text-color-secondary);\n}\n\n.layout-config .config-scale i.scale-active {\n  font-size: 1.25rem;\n  color: var(--primary-color);\n}\n\n.layout-config-button {\n  display: block;\n  position: fixed;\n  width: 52px;\n  height: 52px;\n  line-height: 52px;\n  background-color: var(--primary-color);\n  text-align: center;\n  color: var(--primary-color-text);\n  top: 270px;\n  right: 0;\n  z-index: 100;\n  overflow: hidden;\n  cursor: pointer;\n  outline: 0 none;\n  border-top-left-radius: 3px;\n  border-top-right-radius: 3px;\n  border-bottom-left-radius: 3px;\n  border-bottom-right-radius: 3px;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n\n.layout-config-button i {\n  font-size: 26px;\n  line-height: inherit;\n  cursor: pointer;\n  transform: rotate(360deg);\n  transition: transform 1s;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uLy4uLy4uL05lZyVDMyVCM2Npb3MvU3RhbmRJTy1Db25kcy9mcm9udGVuZC9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDJFQUFBO0FDQ0Y7O0FERUE7RUFDRSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtBQ0NGOztBREVBO0VBQ0UsZUFBQTtBQ0NGOztBREVBO0VBQ0UsbUJBQUE7QUNDRjs7QURFQTs7RUFFRSxrQkFBQTtBQ0NGOztBREVBO0VBQ0UsMkRBQUE7QUNDRjs7QURFQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUVBLGdCQUFBO0FDQUY7O0FER0E7RUFDRSxlQUFBO0VBRUEsbUJBQUE7RUFFQSxjQUFBO0VBRUEsZ0JBQUE7QUNIRjs7QURNQTtFQUNFLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ0hGOztBRE1BO0VBQ0Usc0RBQUE7QUNIRjs7QURNQTtFQUNFLCtCQUFBO0FDSEY7O0FETUE7RUFDRSxjQUFBO0FDSEY7O0FETUE7RUFDRSxnQkFBQTtBQ0hGOztBRE1BO0VBQ0Usc0JBQUE7QUNIRjs7QURNQTtFQUNFLG1CQUFBO0FDSEY7O0FETUE7RUFDRSxpQkFBQTtFQUNBLG1CQUFBO0FDSEY7O0FETUE7RUFDRSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUNIRjs7QURNQTtFQUNFLCtCQUFBO0FDSEY7O0FETUE7RUFDRSxlQUFBO0VBQ0EsY0FBQTtBQ0hGOztBRE1BO0VBQ0Usa0JBQUE7QUNIRjs7QURNQTs7RUFFRSxrQkFBQTtFQUNBLG1CQUFBO0FDSEY7O0FETUE7RUFDRSxrQkFBQTtBQ0hGOztBRE1BO0VBQ0UscUJBQUE7RUFDQSxlQUFBO0VBRUEsb0NBQUE7QUNKRjs7QURPQTtFQUNFLGlDQUFBO0FDSkY7O0FET0E7RUFDRSxhQUFBO0FDSkY7O0FET0E7RUFDRSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7QUNKRjs7QURPQTtFQUNFLG9CQUFBO0FDSkY7O0FET0E7RUFDRSxpQ0FBQTtBQ0pGOztBRE9BO0VBQ0UsOEJBQUE7QUNKRjs7QURPQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FDSkY7O0FET0E7RUFDRSwwQ0FBQTtBQ0pGOztBRE1FO0VBQ0UsK0NBQUE7QUNKSjs7QURVQTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtBQ1BGOztBRFdFO0VBQ0UsY0FBQTtBQ1JKOztBRFVJO0VBQ0UsZUFBQTtBQ1JOOztBRFdJO0VBQ0UsU0FBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0FDVE47O0FEYUU7RUFDRSxhQUFBO0VBQ0Esa0JBQUE7QUNYSjs7QURhSTtFQUNFLGNBQUE7QUNYTjs7QURjSTtFQUNFLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSx1QkFBQTtBQ1pOOztBRGlCSTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLDBCQUFBO0FDZk47O0FEaUJNO0VBQ0UscUJBQUE7QUNmUjs7QURtQkk7RUFDRSxtQkFBQTtFQUNBLG1CQUFBO0FDakJOOztBRHFCRTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQkFBQTtBQ25CSjs7QURxQkk7RUFDRSxhQUFBO0FDbkJOOztBRHVCRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBQ3JCSjs7QUR1Qkk7RUFDRSxvQkFBQTtBQ3JCTjs7QUR3Qkk7RUFDRSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0NBQUE7QUN0Qk47O0FEd0JNO0VBQ0Usa0JBQUE7RUFDQSwyQkFBQTtBQ3RCUjs7QUQ0QkE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLDhCQUFBO0VBQ0EsK0JBQUE7RUFDQSxxSEFBQTtBQ3pCRjs7QUQyQkU7RUFDRSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSx3QkFBQTtBQ3pCSiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tbWVudSBpb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWl0ZW0tYmFja2dyb3VuZCwgdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IsICNmZmYpKTtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWNvbnRlbnQge1xuICAtLXBhZGRpbmctc3RhcnQ6IDhweDtcbiAgLS1wYWRkaW5nLWVuZDogOHB4O1xuICAtLXBhZGRpbmctdG9wOiAyMHB4O1xuICAtLXBhZGRpbmctYm90dG9tOiAyMHB4O1xufVxuXG5pb24tbWVudS5tZCBpb24tbGlzdCB7XG4gIHBhZGRpbmc6IDIwcHggMDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLW5vdGUge1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuXG5pb24tbWVudS5tZCBpb24tbGlzdC1oZWFkZXIsXG5pb24tbWVudS5tZCBpb24tbm90ZSB7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWxpc3QjaW5ib3gtbGlzdCB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3Itc3RlcC0xNTAsICNkN2Q4ZGEpO1xufVxuXG5pb24tbWVudS5tZCBpb24tbGlzdCNpbmJveC1saXN0IGlvbi1saXN0LWhlYWRlciB7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcblxuICBtaW4taGVpZ2h0OiAyMHB4O1xufVxuXG5pb24tbWVudS5tZCBpb24tbGlzdCNsYWJlbHMtbGlzdCBpb24tbGlzdC1oZWFkZXIge1xuICBmb250LXNpemU6IDE2cHg7XG5cbiAgbWFyZ2luLWJvdHRvbTogMThweDtcblxuICBjb2xvcjogIzc1NzU3NTtcblxuICBtaW4taGVpZ2h0OiAyNnB4O1xufVxuXG5pb24tbWVudS5tZCBpb24taXRlbSB7XG4gIC0tcGFkZGluZy1zdGFydDogMTBweDtcbiAgLS1wYWRkaW5nLWVuZDogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuXG5pb24tbWVudS5tZCBpb24taXRlbS5zZWxlY3RlZCB7XG4gIC0tYmFja2dyb3VuZDogcmdiYSh2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1yZ2IpLCAwLjE0KTtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWl0ZW0uc2VsZWN0ZWQgaW9uLWljb24ge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuXG5pb24tbWVudS5tZCBpb24taXRlbSBpb24taWNvbiB7XG4gIGNvbG9yOiAjNjE2ZTdlO1xufVxuXG5pb24tbWVudS5tZCBpb24taXRlbSBpb24tbGFiZWwge1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG5pb24tbWVudS5pb3MgaW9uLWNvbnRlbnQge1xuICAtLXBhZGRpbmctYm90dG9tOiAyMHB4O1xufVxuXG5pb24tbWVudS5pb3MgaW9uLWxpc3Qge1xuICBwYWRkaW5nOiAyMHB4IDAgMCAwO1xufVxuXG5pb24tbWVudS5pb3MgaW9uLW5vdGUge1xuICBsaW5lLWhlaWdodDogMjRweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1pdGVtIHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxNnB4O1xuICAtLXBhZGRpbmctZW5kOiAxNnB4O1xuICAtLW1pbi1oZWlnaHQ6IDUwcHg7XG59XG5cbmlvbi1tZW51LmlvcyBpb24taXRlbS5zZWxlY3RlZCBpb24taWNvbiB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG5cbmlvbi1tZW51LmlvcyBpb24taXRlbSBpb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgY29sb3I6ICM3Mzg0OWE7XG59XG5cbmlvbi1tZW51LmlvcyBpb24tbGlzdCNsYWJlbHMtbGlzdCBpb24tbGlzdC1oZWFkZXIge1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG59XG5cbmlvbi1tZW51LmlvcyBpb24tbGlzdC1oZWFkZXIsXG5pb24tbWVudS5pb3MgaW9uLW5vdGUge1xuICBwYWRkaW5nLWxlZnQ6IDE2cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDE2cHg7XG59XG5cbmlvbi1tZW51LmlvcyBpb24tbm90ZSB7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbn1cblxuaW9uLW5vdGUge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtc2l6ZTogMTZweDtcblxuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS1zaGFkZSk7XG59XG5cbmlvbi1pdGVtLnNlbGVjdGVkIHtcbiAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuXG4ubG9hZGVyLWJhci1jb250YWluZXIge1xuICB6LWluZGV4OiAxMDMyO1xufVxuXG4ubG9hZGVyLXNwaW5ubmVyLWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgei1pbmRleDogOTk5O1xuICBoZWlnaHQ6IDJlbTtcbiAgd2lkdGg6IDJlbTtcbiAgb3ZlcmZsb3c6IHNob3c7XG4gIG1hcmdpbjogYXV0bztcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBib3R0b206IDA7XG4gIHJpZ2h0OiAwO1xuICAvKiBvcjogbGVmdDogNTAlOyAqL1xuICBvcGFjaXR5OiAwLjg7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG4uYmxvY2stbG9hZCB7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgaW9uLWNvbnRlbnQge1xuICBwb2ludGVyLWV2ZW50czogdmFyKC0tbG9hZC1ibG9jayk7XG59XG5cbjpob3N0IDo6bmctZGVlcCBpb24tbWVudSBpb24tY29udGVudCB7XG4gIHBvaW50ZXItZXZlbnRzOiBhbGwgIWltcG9ydGFudDtcbn1cblxuLnN5c3RlbV9sb2dvIHtcbiAgd2lkdGg6IDY0cHg7XG4gIGhlaWdodDogNjRweDtcbn1cblxuLmFjdGl2ZSB7XG4gIC0taW9uLXRleHQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcblxuICBpb24taWNvbiB7XG4gICAgLS1pb24tdGV4dC1jb2xvci1yZ2I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KVxuICB9XG59XG5cbi5hY3RpdmUtcGFyZW50IHt9XG5cbi5zdWItaXRlbSB7XG4gIHBhZGRpbmctdG9wOiAwO1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG59XG5cbi5sYXlvdXQtY29uZmlnIHtcbiAgLnAtc2lkZWJhciB7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG5cbiAgICAucC1zaWRlYmFyLWNvbnRlbnQge1xuICAgICAgcGFkZGluZzogMCAycmVtO1xuICAgIH1cblxuICAgIC5wLXNpZGViYXItY2xvc2Uge1xuICAgICAgdG9wOiAycmVtO1xuICAgICAgcmlnaHQ6IDJyZW07XG4gICAgICB6LWluZGV4OiAxO1xuICAgIH1cbiAgfVxuXG4gIC5ncmlkPmRpdiB7XG4gICAgcGFkZGluZzogMXJlbTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgICBzcGFuIHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cblxuICAgIGJ1dHRvbiB7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIH1cbiAgfVxuXG4gIC50aGVtZXMtZ3JpZCB7XG4gICAgaW1nIHtcbiAgICAgIHdpZHRoOiA1MHB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC4ycztcblxuICAgICAgJjpob3ZlciB7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBzcGFuIHtcbiAgICAgIGZvbnQtc2l6ZTogLjg3NXJlbTtcbiAgICAgIG1hcmdpbi10b3A6IC4yNXJlbTtcbiAgICB9XG4gIH1cblxuICAuY29uZmlnLXRpdGxlIHtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgICBtYXJnaW46IDJyZW0gMHJlbSAxcmVtIDByZW07XG5cbiAgICAmOmZpcnN0LWNoaWxkIHtcbiAgICAgIG1hcmdpbi10b3A6IDA7XG4gICAgfVxuICB9XG5cbiAgLmNvbmZpZy1zY2FsZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgLnAtYnV0dG9uIHtcbiAgICAgIG1hcmdpbi1yaWdodDogLjVyZW07XG4gICAgfVxuXG4gICAgaSB7XG4gICAgICBtYXJnaW4tcmlnaHQ6IC41cmVtO1xuICAgICAgZm9udC1zaXplOiAuNzVyZW07XG4gICAgICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvci1zZWNvbmRhcnkpO1xuXG4gICAgICAmLnNjYWxlLWFjdGl2ZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4ubGF5b3V0LWNvbmZpZy1idXR0b24ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IGZpeGVkO1xuICB3aWR0aDogNTJweDtcbiAgaGVpZ2h0OiA1MnB4O1xuICBsaW5lLWhlaWdodDogNTJweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3ItdGV4dCk7XG4gIHRvcDogMjcwcHg7XG4gIHJpZ2h0OiAwO1xuICB6LWluZGV4OiAxMDA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgb3V0bGluZTogMCBub25lO1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAzcHg7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAzcHg7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDNweDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDNweDtcbiAgYm94LXNoYWRvdzogMCA1cHggNXB4IC0zcHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDhweCAxMHB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDNweCAxNHB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xuXG4gIGkge1xuICAgIGZvbnQtc2l6ZTogMjZweDtcbiAgICBsaW5lLWhlaWdodDogaW5oZXJpdDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMXM7XG4gIH1cbn1cbiIsImlvbi1tZW51IGlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24taXRlbS1iYWNrZ3JvdW5kLCB2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvciwgI2ZmZikpO1xufVxuXG5pb24tbWVudS5tZCBpb24tY29udGVudCB7XG4gIC0tcGFkZGluZy1zdGFydDogOHB4O1xuICAtLXBhZGRpbmctZW5kOiA4cHg7XG4gIC0tcGFkZGluZy10b3A6IDIwcHg7XG4gIC0tcGFkZGluZy1ib3R0b206IDIwcHg7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1saXN0IHtcbiAgcGFkZGluZzogMjBweCAwO1xufVxuXG5pb24tbWVudS5tZCBpb24tbm90ZSB7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1saXN0LWhlYWRlcixcbmlvbi1tZW51Lm1kIGlvbi1ub3RlIHtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xufVxuXG5pb24tbWVudS5tZCBpb24tbGlzdCNpbmJveC1saXN0IHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1zdGVwLTE1MCwgI2Q3ZDhkYSk7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1saXN0I2luYm94LWxpc3QgaW9uLWxpc3QtaGVhZGVyIHtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBtaW4taGVpZ2h0OiAyMHB4O1xufVxuXG5pb24tbWVudS5tZCBpb24tbGlzdCNsYWJlbHMtbGlzdCBpb24tbGlzdC1oZWFkZXIge1xuICBmb250LXNpemU6IDE2cHg7XG4gIG1hcmdpbi1ib3R0b206IDE4cHg7XG4gIGNvbG9yOiAjNzU3NTc1O1xuICBtaW4taGVpZ2h0OiAyNnB4O1xufVxuXG5pb24tbWVudS5tZCBpb24taXRlbSB7XG4gIC0tcGFkZGluZy1zdGFydDogMTBweDtcbiAgLS1wYWRkaW5nLWVuZDogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuXG5pb24tbWVudS5tZCBpb24taXRlbS5zZWxlY3RlZCB7XG4gIC0tYmFja2dyb3VuZDogcmdiYSh2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1yZ2IpLCAwLjE0KTtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWl0ZW0uc2VsZWN0ZWQgaW9uLWljb24ge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuXG5pb24tbWVudS5tZCBpb24taXRlbSBpb24taWNvbiB7XG4gIGNvbG9yOiAjNjE2ZTdlO1xufVxuXG5pb24tbWVudS5tZCBpb24taXRlbSBpb24tbGFiZWwge1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG5pb24tbWVudS5pb3MgaW9uLWNvbnRlbnQge1xuICAtLXBhZGRpbmctYm90dG9tOiAyMHB4O1xufVxuXG5pb24tbWVudS5pb3MgaW9uLWxpc3Qge1xuICBwYWRkaW5nOiAyMHB4IDAgMCAwO1xufVxuXG5pb24tbWVudS5pb3MgaW9uLW5vdGUge1xuICBsaW5lLWhlaWdodDogMjRweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1pdGVtIHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxNnB4O1xuICAtLXBhZGRpbmctZW5kOiAxNnB4O1xuICAtLW1pbi1oZWlnaHQ6IDUwcHg7XG59XG5cbmlvbi1tZW51LmlvcyBpb24taXRlbS5zZWxlY3RlZCBpb24taWNvbiB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG5cbmlvbi1tZW51LmlvcyBpb24taXRlbSBpb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgY29sb3I6ICM3Mzg0OWE7XG59XG5cbmlvbi1tZW51LmlvcyBpb24tbGlzdCNsYWJlbHMtbGlzdCBpb24tbGlzdC1oZWFkZXIge1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG59XG5cbmlvbi1tZW51LmlvcyBpb24tbGlzdC1oZWFkZXIsXG5pb24tbWVudS5pb3MgaW9uLW5vdGUge1xuICBwYWRkaW5nLWxlZnQ6IDE2cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDE2cHg7XG59XG5cbmlvbi1tZW51LmlvcyBpb24tbm90ZSB7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbn1cblxuaW9uLW5vdGUge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tc2hhZGUpO1xufVxuXG5pb24taXRlbS5zZWxlY3RlZCB7XG4gIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cblxuLmxvYWRlci1iYXItY29udGFpbmVyIHtcbiAgei1pbmRleDogMTAzMjtcbn1cblxuLmxvYWRlci1zcGlubm5lci1jb250YWluZXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHotaW5kZXg6IDk5OTtcbiAgaGVpZ2h0OiAyZW07XG4gIHdpZHRoOiAyZW07XG4gIG92ZXJmbG93OiBzaG93O1xuICBtYXJnaW46IGF1dG87XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiAwO1xuICByaWdodDogMDtcbiAgLyogb3I6IGxlZnQ6IDUwJTsgKi9cbiAgb3BhY2l0eTogMC44O1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuLmJsb2NrLWxvYWQge1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIGlvbi1jb250ZW50IHtcbiAgcG9pbnRlci1ldmVudHM6IHZhcigtLWxvYWQtYmxvY2spO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgaW9uLW1lbnUgaW9uLWNvbnRlbnQge1xuICBwb2ludGVyLWV2ZW50czogYWxsICFpbXBvcnRhbnQ7XG59XG5cbi5zeXN0ZW1fbG9nbyB7XG4gIHdpZHRoOiA2NHB4O1xuICBoZWlnaHQ6IDY0cHg7XG59XG5cbi5hY3RpdmUge1xuICAtLWlvbi10ZXh0LWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG4uYWN0aXZlIGlvbi1pY29uIHtcbiAgLS1pb24tdGV4dC1jb2xvci1yZ2I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KSA7XG59XG5cbi5zdWItaXRlbSB7XG4gIHBhZGRpbmctdG9wOiAwO1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG59XG5cbi5sYXlvdXQtY29uZmlnIC5wLXNpZGViYXIge1xuICBvdmVyZmxvdzogYXV0bztcbn1cbi5sYXlvdXQtY29uZmlnIC5wLXNpZGViYXIgLnAtc2lkZWJhci1jb250ZW50IHtcbiAgcGFkZGluZzogMCAycmVtO1xufVxuLmxheW91dC1jb25maWcgLnAtc2lkZWJhciAucC1zaWRlYmFyLWNsb3NlIHtcbiAgdG9wOiAycmVtO1xuICByaWdodDogMnJlbTtcbiAgei1pbmRleDogMTtcbn1cbi5sYXlvdXQtY29uZmlnIC5ncmlkID4gZGl2IHtcbiAgcGFkZGluZzogMXJlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmxheW91dC1jb25maWcgLmdyaWQgPiBkaXYgc3BhbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLmxheW91dC1jb25maWcgLmdyaWQgPiBkaXYgYnV0dG9uIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4ubGF5b3V0LWNvbmZpZyAudGhlbWVzLWdyaWQgaW1nIHtcbiAgd2lkdGg6IDUwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnM7XG59XG4ubGF5b3V0LWNvbmZpZyAudGhlbWVzLWdyaWQgaW1nOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xufVxuLmxheW91dC1jb25maWcgLnRoZW1lcy1ncmlkIHNwYW4ge1xuICBmb250LXNpemU6IDAuODc1cmVtO1xuICBtYXJnaW4tdG9wOiAwLjI1cmVtO1xufVxuLmxheW91dC1jb25maWcgLmNvbmZpZy10aXRsZSB7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgbWFyZ2luOiAycmVtIDByZW0gMXJlbSAwcmVtO1xufVxuLmxheW91dC1jb25maWcgLmNvbmZpZy10aXRsZTpmaXJzdC1jaGlsZCB7XG4gIG1hcmdpbi10b3A6IDA7XG59XG4ubGF5b3V0LWNvbmZpZyAuY29uZmlnLXNjYWxlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5sYXlvdXQtY29uZmlnIC5jb25maWctc2NhbGUgLnAtYnV0dG9uIHtcbiAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XG59XG4ubGF5b3V0LWNvbmZpZyAuY29uZmlnLXNjYWxlIGkge1xuICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcbiAgZm9udC1zaXplOiAwLjc1cmVtO1xuICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvci1zZWNvbmRhcnkpO1xufVxuLmxheW91dC1jb25maWcgLmNvbmZpZy1zY2FsZSBpLnNjYWxlLWFjdGl2ZSB7XG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xufVxuXG4ubGF5b3V0LWNvbmZpZy1idXR0b24ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IGZpeGVkO1xuICB3aWR0aDogNTJweDtcbiAgaGVpZ2h0OiA1MnB4O1xuICBsaW5lLWhlaWdodDogNTJweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3ItdGV4dCk7XG4gIHRvcDogMjcwcHg7XG4gIHJpZ2h0OiAwO1xuICB6LWluZGV4OiAxMDA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgb3V0bGluZTogMCBub25lO1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAzcHg7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAzcHg7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDNweDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDNweDtcbiAgYm94LXNoYWRvdzogMCA1cHggNXB4IC0zcHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDhweCAxMHB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDNweCAxNHB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xufVxuLmxheW91dC1jb25maWctYnV0dG9uIGkge1xuICBmb250LXNpemU6IDI2cHg7XG4gIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAxcztcbn0iXX0= */";

/***/ }),

/***/ 47520:
/*!*************************************************************************************************!*\
  !*** ./src/app/shared/components/utils/generic-dialog/generic-dialog.component.scss?ngResource ***!
  \*************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJnZW5lcmljLWRpYWxvZy5jb21wb25lbnQuc2NzcyJ9 */";

/***/ }),

/***/ 33383:
/*!***********************************************!*\
  !*** ./src/app/app.component.html?ngResource ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-app>\n  <ion-split-pane contentId=\"main-content\" when=\"(max-width: 0px)\">\n    <ion-menu (ionWillOpen)=\"ionWillOpen()\" (ionDidClose)=\"ionDidClose()\" contentId=\"main-content\" type=\"overlay\">\n      <ion-content appScrollTheme>\n        <ion-list id=\"inbox-list\">\n          <ion-item>\n            <img class=\"system_logo\" [src]=\"getSystemInfo().SYSTEM_LOGO\" />\n            <ion-list-header>{{ getSystemInfo().SYSTEM_NICKNAME }}</ion-list-header>\n          </ion-item>\n          <br />\n          <ion-note>{{ getSystemInfo().SYSTEM_NAME }}</ion-note>\n\n          <div *ngFor=\"let p of appPages\">\n            <ion-menu-toggle *ngIf=\"p.url\">\n              <ion-item routerDirection=\"root\" [routerLink]=\"[p.url]\" lines=\"none\" detail=\"false\"\n                routerLinkActive=\"active\">\n                <ion-icon slot=\"start\" [ios]=\"p.icon + '-outline'\" [md]=\"p.icon + '-outline'\"></ion-icon>\n                <ion-label>{{ p.title }}</ion-label>\n              </ion-item>\n            </ion-menu-toggle>\n\n            <ion-item button *ngIf=\"p.children?.length > 0\" (click)=\"p.open = !p.open\" [class.active-parent]=\"p.open\"\n              detail=\"false\" lines=\"none\">\n              <ion-icon slot=\"start\" name=\"arrow-forward\" *ngIf=\"!p.open\"></ion-icon>\n              <ion-icon slot=\"start\" name=\"arrow-down\" *ngIf=\"p.open\" color=\"primary\"></ion-icon>\n              <ion-label>{{ p.title }}</ion-label>\n            </ion-item>\n\n            <ion-list *ngIf=\"p.open\">\n              <ion-menu-toggle>\n                <ion-item class=\"sub-item\" *ngFor=\"let sub of p.children\" routerDirection=\"root\"\n                  [routerLink]=\"[sub.url]\" lines=\"none\" detail=\"false\" routerLinkActive=\"active\">\n                  <ion-icon slot=\"start\" [ios]=\"sub.icon + '-outline'\" [md]=\"sub.icon + '-outline'\"></ion-icon>\n                  <ion-label>{{ sub.title }}</ion-label>\n                </ion-item>\n              </ion-menu-toggle>\n            </ion-list>\n          </div>\n\n        </ion-list>\n        <ion-list id=\"labels-list\">\n          <ion-list-header>Preferências</ion-list-header>\n          <ion-item button=\"true\" lines=\"full\" (click)=\"toggleThemes($event)\">\n            <ion-icon slot=\"start\" name=\"cog\"></ion-icon>\n            <ion-label> Opções </ion-label>\n            <ion-icon slot=\"end\" name=\"open-outline\"></ion-icon>\n          </ion-item>\n          <ion-item lines=\"full\">\n            <ion-icon slot=\"start\" name=\"wifi-outline\"></ion-icon>\n            <ion-label> Conexão real </ion-label>\n            <ion-badge [color]=\"statusSocketColor\" slot=\"end\">{{ getSocketConexao() }}</ion-badge>\n          </ion-item>\n          <br />\n          <ion-button color=\"primary\" id=\"logout\" size=\"small\" expand=\"block\" (click)=\"sincronizar()\"\n            routerDirection=\"root\" routerLinkActive=\"selected\">\n            Sincronizar\n            <ion-icon slot=\"end\" name=\"sync-outline\"></ion-icon>\n          </ion-button>\n\n          <br />\n          <!--\n          <ion-button *ngIf=\"!deferredPrompt\" color=\"dark\" id=\"logout\" size=\"small\" expand=\"block\"\n            (click)=\"installPwa()\" routerDirection=\"root\" routerLinkActive=\"selected\">\n            Instalar APP\n            <ion-icon slot=\"end\" name=\"download-outline\"></ion-icon>\n          </ion-button>\n          <br />-->\n          <ion-button color=\"primary\" id=\"logout\" size=\"small\" expand=\"block\" (click)=\"logout()\" routerDirection=\"root\"\n            routerLinkActive=\"selected\" [routerLink]=\"'login'\" fill=\"outline\">\n            Logout\n            <ion-icon slot=\"end\" name=\"walk-outline\"></ion-icon>\n          </ion-button>\n        </ion-list>\n\n      </ion-content>\n    </ion-menu>\n\n    <ion-router-outlet id=\"main-content\"\n      [ngClass]=\"{'p-input-filled': appConfig.inputStyle === 'filled', 'p-ripple-disabled': !appConfig.ripple, 'layout-wrapper-dark': appConfig.dark}\"></ion-router-outlet>\n\n  </ion-split-pane>\n</ion-app>\n\n\n<p-sidebar [(visible)]=\"visibleSidebar\" position=\"right\" class=\"layout-config\" styleClass=\"p-sidebar-md\">\n\n  <div class=\"config-title\" style=\"margin-top:0\">Escala do APP</div>\n  <div class=\"config-scale\">\n    <button icon=\"pi pi-minus\" type=\"button\" pButton pRipple (click)=\"decrementScale()\" class=\"p-button-text\"\n      [disabled]=\"scale === scales[0]\"></button>\n    <i class=\"pi pi-circle-on\" *ngFor=\"let s of scales\" [ngClass]=\"{'scale-active': s === scale}\"></i>\n    <button icon=\"pi pi-plus\" type=\"button\" pButton pRipple (click)=\"incrementScale()\" class=\"p-button-text\"\n      [disabled]=\"scale === scales[scales.length - 1]\"></button>\n  </div>\n\n  <div class=\"config-title\">Estilo de entrada</div>\n  <div class=\"formgroup-inline\">\n    <div class=\"field-radiobutton\">\n      <p-radioButton name=\"inputstyle\" value=\"outlined\" [(ngModel)]=\"appConfig.inputStyle\"\n        inputId=\"input_outlined\"></p-radioButton>\n      <label for=\"input_outlined\">Delineado</label>\n    </div>\n    <div class=\"field-radiobutton\">\n      <p-radioButton name=\"inputstyle\" value=\"filled\" [(ngModel)]=\"appConfig.inputStyle\"\n        inputId=\"input_filled\"></p-radioButton>\n      <label for=\"input_filled\">Preenchido</label>\n    </div>\n  </div>\n\n  <div class=\"config-title\">Efeito de click</div>\n  <p-inputSwitch [(ngModel)]=\"appConfig.ripple\"></p-inputSwitch>\n\n  <!--\n    <div class=\"config-title\">Cor de fundo</div>\n    <p-inputSwitch [(ngModel)]=\"appConfig.backgrounColorOn\" (onChange)=\"changeBackground($event)\"></p-inputSwitch>\n-->\n\n  <div class=\"config-title\">Claro com Azul</div>\n  <div class=\"grid themes-grid\">\n    <div class=\"col-6 sm:col-3\">\n      <button class=\"p-link\" (click)=\"changeTheme($event, 'bootstrap4-light-blue', false)\">\n        <img src=\"assets/imgs/themes/bootstrap4-light-blue.svg\" alt=\"Bootstrap Light Blue\" />\n      </button>\n      <span>Blue</span>\n    </div>\n    <div class=\"col-6 sm:col-3\">\n      <button class=\"p-link\" (click)=\"changeTheme($event, 'fluent-light', false)\">\n        <img src=\"assets/imgs/themes/fluent-light.png\" alt=\"Fluent Light\" />\n      </button>\n      <span>Light</span>\n    </div>\n    <div class=\"col-6 sm:col-3\">\n      <button class=\"p-link\" (click)=\"changeTheme($event, 'lara-light-blue', false)\">\n        <img src=\"assets/imgs/themes/lara-light-blue.png\" alt=\"Lara Light Blue\" />\n      </button>\n      <span>Lara Light Blue</span>\n    </div>\n    <div class=\"col-6 sm:col-3\">\n      <button class=\"p-link\" (click)=\"changeTheme($event, 'saga-blue', false)\">\n        <img src=\"assets/imgs/themes/saga-blue.png\" alt=\"Saga Blue\" />\n      </button>\n      <span>Saga Blue</span>\n    </div>\n  </div>\n\n  <div class=\"config-title\">Claro com Roxo</div>\n  <div class=\"grid themes-grid\">\n    <div class=\"col-6 sm:col-3\">\n      <button class=\"p-link\" (click)=\"changeTheme($event, 'bootstrap4-light-purple', false)\">\n        <img src=\"assets/imgs/themes/bootstrap4-light-purple.svg\" alt=\"Bootstrap Light Purple\" />\n      </button>\n      <span>Purple</span>\n    </div>\n    <div class=\"col-6 sm:col-3\">\n      <button class=\"p-link\" (click)=\"changeTheme($event, 'tailwind-light', false)\">\n        <img src=\"assets/imgs/themes/tailwind-light.png\" alt=\"Tailwind Light\" />\n      </button>\n      <span>Light</span>\n    </div>\n    <div class=\"col-6 sm:col-3\">\n      <button class=\"p-link\" (click)=\"changeTheme($event, 'saga-purple', false)\">\n        <img src=\"assets/imgs/themes/saga-purple.png\" alt=\"Saga Purple\" />\n      </button>\n      <span>Saga Purple</span>\n    </div>\n    <div class=\"col-6 sm:col-3\">\n      <button class=\"p-link\" (click)=\"changeTheme($event, 'lara-light-purple', false)\">\n        <img src=\"assets/imgs/themes/lara-light-purple.png\" alt=\"Lara Light Purple\" />\n      </button>\n      <span>Lara Light Purple</span>\n    </div>\n  </div>\n\n  <div class=\"config-title\">Claro com Verde</div>\n  <div class=\"grid themes-grid\">\n    <div class=\"col-6 sm:col-3\">\n      <button class=\"p-link\" (click)=\"changeTheme($event, 'saga-green', false)\">\n        <img src=\"assets/imgs/themes/saga-green.png\" alt=\"Saga Green\" />\n      </button>\n      <span>Saga Green</span>\n    </div>\n  </div>\n\n  <div class=\"config-title\">Claro com Laranja</div>\n  <div class=\"grid themes-grid\">\n    <div class=\"col-6 sm:col-3\">\n      <button class=\"p-link\" (click)=\"changeTheme($event, 'saga-orange', false)\">\n        <img src=\"assets/imgs/themes/saga-orange.png\" alt=\"Saga Orange\" />\n      </button>\n      <span>Saga Orange</span>\n    </div>\n  </div>\n\n  <div class=\"config-title\">Claro com Verde-azulado</div>\n  <div class=\"grid themes-grid\">\n    <div class=\"col-6 sm:col-3\">\n      <button class=\"p-link\" (click)=\"changeTheme($event, 'lara-light-teal', false)\">\n        <img src=\"assets/imgs/themes/lara-light-teal.png\" alt=\"Lara Light Teal\" />\n      </button>\n      <span>Lara Light Teal</span>\n    </div>\n  </div>\n\n  <div class=\"config-title\">Claro com Índigo</div>\n  <div class=\"grid themes-grid\">\n    <div class=\"col-6 sm:col-4\">\n      <button class=\"p-link\" (click)=\"changeTheme($event, 'lara-light-indigo', false)\">\n        <img src=\"assets/imgs/themes/lara-light-indigo.png\" alt=\"Lara Light Indigo\" />\n      </button>\n      <span>Lara Light Indigo</span>\n    </div>\n    <div class=\"col-6 sm:col-4\">\n      <button class=\"p-link\" (click)=\"changeTheme($event, 'md-light-indigo', false)\">\n        <img src=\"assets/imgs/themes/md-light-indigo.svg\" alt=\"Material Light Indigo\" />\n      </button>\n      <span>Indigo</span>\n    </div>\n    <div class=\"col-6 sm:col-4\">\n      <button class=\"p-link\" (click)=\"changeTheme($event, 'md-light-deeppurple', false)\">\n        <img src=\"assets/imgs/themes/md-light-deeppurple.svg\" alt=\"Material Light Deep Purple\" />\n      </button>\n      <span>Deep Purple</span>\n    </div>\n    <div class=\"col-6 sm:col-4\">\n      <button class=\"p-link\" (click)=\"changeTheme($event, 'mdc-light-indigo', false)\">\n        <img src=\"assets/imgs/themes/md-light-indigo.svg\" alt=\"Material Compact Light Indigo\" />\n      </button>\n      <span>Indigo Compact</span>\n    </div>\n    <div class=\"col-6 sm:col-4\">\n      <button class=\"p-link\" (click)=\"changeTheme($event, 'mdc-light-deeppurple', false)\">\n        <img src=\"assets/imgs/themes/md-light-deeppurple.svg\" alt=\"Material Compact Deep Purple\" />\n      </button>\n      <span>Deep Purple Compact</span>\n    </div>\n  </div>\n\n  <p-divider class=\"w-full px-2 mb-3\"></p-divider>\n\n  <div class=\"config-title\">Escuro com Azul</div>\n  <div class=\"grid themes-grid\">\n    <div class=\"col-6 sm:col-3\">\n      <button class=\"p-link\" (click)=\"changeTheme($event, 'bootstrap4-dark-blue', true)\">\n        <img src=\"assets/imgs/themes/bootstrap4-dark-blue.svg\" alt=\"Bootstrap Dark Blue\" />\n      </button>\n      <span>Blue</span>\n    </div>\n    <div class=\"col-6 sm:col-3\">\n      <button class=\"p-link\" (click)=\"changeTheme($event, 'lara-dark-blue', true)\">\n        <img src=\"assets/imgs/themes/lara-dark-blue.png\" alt=\"Lara Dark Blue\" />\n      </button>\n      <span>Lara Dark Blue</span>\n    </div>\n    <div class=\"col-6 sm:col-3\">\n      <button class=\"p-link\" (click)=\"changeTheme($event, 'vela-blue', true)\">\n        <img src=\"assets/imgs/themes/vela-blue.png\" alt=\"Vela Blue\" />\n      </button>\n      <span>Vela Blue</span>\n    </div>\n    <div class=\"col-6 sm:col-3\">\n      <button class=\"p-link\" (click)=\"changeTheme($event, 'arya-blue', true)\">\n        <img src=\"assets/imgs/themes/arya-blue.png\" alt=\"Arya Blue\" />\n      </button>\n      <span>Arya Blue</span>\n    </div>\n  </div>\n\n  <div class=\"config-title\">Escuro com Roxo</div>\n  <div class=\"grid themes-grid\">\n    <div class=\"col-6 sm:col-3\">\n      <button class=\"p-link\" (click)=\"changeTheme($event, 'bootstrap4-dark-purple', true)\">\n        <img src=\"assets/imgs/themes/bootstrap4-dark-purple.svg\" alt=\"Bootstrap Dark Purple\" />\n      </button>\n      <span>Purple</span>\n    </div>\n    <div class=\"col-6 sm:col-3\">\n      <button class=\"p-link\" (click)=\"changeTheme($event, 'lara-dark-purple', true)\">\n        <img src=\"assets/imgs/themes/lara-dark-purple.png\" alt=\"Lara Dark Purple\" />\n      </button>\n      <span>Lara Dark Purple</span>\n    </div>\n    <div class=\"col-6 sm:col-3\">\n      <button class=\"p-link\" (click)=\"changeTheme($event, 'vela-purple', true)\">\n        <img src=\"assets/imgs/themes/vela-purple.png\" alt=\"Vela Purple\" />\n      </button>\n      <span>Vela Purple</span>\n    </div>\n    <div class=\"col-6 sm:col-3\">\n      <button class=\"p-link\" (click)=\"changeTheme($event, 'arya-purple', true)\">\n        <img src=\"assets/imgs/themes/arya-purple.png\" alt=\"Arya Purple\" />\n      </button>\n      <span>Arya Purple</span>\n    </div>\n  </div>\n\n  <div class=\"config-title\">Escuro com Verde</div>\n  <div class=\"grid themes-grid\">\n    <div class=\"col-6 sm:col-3\">\n      <button class=\"p-link\" (click)=\"changeTheme($event, 'vela-green', true)\">\n        <img src=\"assets/imgs/themes/vela-green.png\" alt=\"Vela Green\" />\n      </button>\n      <span>Vela Green</span>\n    </div>\n    <div class=\"col-6 sm:col-3\">\n      <button class=\"p-link\" (click)=\"changeTheme($event, 'arya-green', true)\">\n        <img src=\"assets/imgs/themes/arya-green.png\" alt=\"Arya Green\" />\n      </button>\n      <span>Arya Green</span>\n    </div>\n  </div>\n\n  <div class=\"config-title\">Escuro com Laranja</div>\n  <div class=\"grid themes-grid\">\n    <div class=\"col-6 sm:col-3\">\n      <button class=\"p-link\" (click)=\"changeTheme($event, 'vela-orange', true)\">\n        <img src=\"assets/imgs/themes/vela-orange.png\" alt=\"Vela Orange\" />\n      </button>\n      <span>Vela Orange</span>\n    </div>\n    <div class=\"col-6 sm:col-3\">\n      <button class=\"p-link\" (click)=\"changeTheme($event, 'arya-orange', true)\">\n        <img src=\"assets/imgs/themes/arya-orange.png\" alt=\"Arya Orange\" />\n      </button>\n      <span>Arya Orange</span>\n    </div>\n  </div>\n\n  <div class=\"config-title\">Escuro com Verde-azulado</div>\n  <div class=\"grid themes-grid\">\n    <div class=\"col-6 sm:col-3\">\n      <button class=\"p-link\" (click)=\"changeTheme($event, 'lara-dark-teal', true)\">\n        <img src=\"assets/imgs/themes/lara-dark-teal.png\" alt=\"Lara Dark Teal\" />\n      </button>\n      <span>Lara Dark Teal</span>\n    </div>\n  </div>\n\n  <div class=\"config-title\">Escuro com Índigo</div>\n  <div class=\"grid themes-grid\">\n    <div class=\"col-6 sm:col-4\">\n      <button class=\"p-link\" (click)=\"changeTheme($event, 'lara-dark-indigo', true)\">\n        <img src=\"assets/imgs/themes/lara-dark-indigo.png\" alt=\"Lara Dark Indigo\" />\n      </button>\n      <span>Lara Dark Indigo</span>\n    </div>\n    <div class=\"col-6 sm:col-4\">\n      <button class=\"p-link\" (click)=\"changeTheme($event, 'md-dark-indigo', true)\">\n        <img src=\"assets/imgs/themes/md-dark-indigo.svg\" alt=\"Material Dark Indigo\" />\n      </button>\n      <span>Indigo</span>\n    </div>\n    <div class=\"col-6 sm:col-4\">\n      <button class=\"p-link\" (click)=\"changeTheme($event, 'md-dark-deeppurple', true)\">\n        <img src=\"assets/imgs/themes/md-dark-deeppurple.svg\" alt=\"Material Dark Deep Purple\" />\n      </button>\n      <span>Deep Purple</span>\n    </div>\n    <div class=\"col-6 sm:col-4\">\n      <button class=\"p-link\" (click)=\"changeTheme($event, 'mdc-dark-indigo', true)\">\n        <img src=\"assets/imgs/themes/md-dark-indigo.svg\" alt=\"Material Compact Dark Indigo\" />\n      </button>\n      <span>Indigo Compact</span>\n    </div>\n    <div class=\"col-6 sm:col-4\">\n      <button class=\"p-link\" (click)=\"changeTheme($event, 'mdc-dark-deeppurple', true)\">\n        <img src=\"assets/imgs/themes/md-dark-deeppurple.svg\" alt=\"Material Compact Dark Deep Purple\" />\n      </button>\n      <span>Deep Purple Compact</span>\n    </div>\n  </div>\n\n</p-sidebar>\n\n<p-toast key=\"main\" position=\"top-right\"></p-toast>\n<p-toast key=\"down\" position=\"bottom-center\"></p-toast>\n\n<p-toast position=\"center\" key=\"confirmation-overlay\" (onClose)=\"toastService.closeConfirmationOverlay()\"\n  [baseZIndex]=\"5000\">\n  <ng-template let-message pTemplate=\"message\">\n    <div class=\"flex flex-column\" style=\"flex: 1\">\n      <div class=\"text-center\">\n        <i class=\"pi pi-exclamation-triangle\" style=\"font-size: 3rem\"></i>\n        <h4>{{message.summary}}</h4>\n        <p>{{message.detail}}</p>\n      </div>\n      <div class=\"grid p-fluid\">\n        <div class=\"col-12\">\n          <button type=\"button\" pButton (click)=\"toastService.closeConfirmationOverlay()\" label=\"OK\"\n            class=\"p-button-success\"></button>\n        </div>\n      </div>\n    </div>\n  </ng-template>\n</p-toast>";

/***/ }),

/***/ 86601:
/*!*************************************************************************************************!*\
  !*** ./src/app/shared/components/utils/generic-dialog/generic-dialog.component.html?ngResource ***!
  \*************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"p-dialog-content\">\n  <span class=\"font-medium text-2xl text-900\">{{ message }}</span>\n</div>";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(14431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map