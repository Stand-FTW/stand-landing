(self["webpackChunkgtl"] = self["webpackChunkgtl"] || []).push([["src_app_pages_applications_applications_module_ts"],{

/***/ 7914:
/*!*********************************************************!*\
  !*** ./node_modules/primeng/fesm2015/primeng-dialog.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Dialog": () => (/* binding */ Dialog),
/* harmony export */   "DialogModule": () => (/* binding */ DialogModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ 8638);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6274);
/* harmony import */ var primeng_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/dom */ 938);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/api */ 1388);
/* harmony import */ var primeng_focustrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/focustrap */ 2325);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/ripple */ 4796);
/* harmony import */ var primeng_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/utils */ 3821);













const _c0 = ["titlebar"];
const _c1 = ["content"];
const _c2 = ["footer"];

function Dialog_div_0_div_1_div_2_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("id", ctx_r9.id + "-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r9.header);
  }
}

function Dialog_div_0_div_1_div_2_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("id", ctx_r10.id + "-label");
  }
}

function Dialog_div_0_div_1_div_2_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}

const _c3 = function () {
  return {
    "p-dialog-header-icon p-dialog-header-maximize p-link": true
  };
};

function Dialog_div_0_div_1_div_2_button_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Dialog_div_0_div_1_div_2_button_6_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15);
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
      return ctx_r14.maximize();
    })("keydown.enter", function Dialog_div_0_div_1_div_2_button_6_Template_button_keydown_enter_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15);
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
      return ctx_r16.maximize();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c3));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r12.maximized ? ctx_r12.minimizeIcon : ctx_r12.maximizeIcon);
  }
}

const _c4 = function () {
  return {
    "p-dialog-header-icon p-dialog-header-close p-link": true
  };
};

function Dialog_div_0_div_1_div_2_button_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Dialog_div_0_div_1_div_2_button_7_Template_button_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18);
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
      return ctx_r17.close($event);
    })("keydown.enter", function Dialog_div_0_div_1_div_2_button_7_Template_button_keydown_enter_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18);
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
      return ctx_r19.close($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c4));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx_r13.closeAriaLabel)("tabindex", ctx_r13.closeTabindex);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r13.closeIcon);
  }
}

function Dialog_div_0_div_1_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11, 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function Dialog_div_0_div_1_div_2_Template_div_mousedown_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21);
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
      return ctx_r20.initDrag($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, Dialog_div_0_div_1_div_2_span_2_Template, 2, 2, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, Dialog_div_0_div_1_div_2_span_3_Template, 2, 1, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, Dialog_div_0_div_1_div_2_ng_container_4_Template, 1, 0, "ng-container", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, Dialog_div_0_div_1_div_2_button_6_Template, 2, 3, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, Dialog_div_0_div_1_div_2_button_7_Template, 2, 5, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r3.headerFacet && !ctx_r3.headerTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.headerFacet);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r3.headerTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.maximizable);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.closable);
  }
}

function Dialog_div_0_div_1_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}

function Dialog_div_0_div_1_div_7_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}

function Dialog_div_0_div_1_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22, 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, Dialog_div_0_div_1_div_7_ng_container_3_Template, 1, 0, "ng-container", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r6.footerTemplate);
  }
}

function Dialog_div_0_div_1_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function Dialog_div_0_div_1_div_8_Template_div_mousedown_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25);
      const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
      return ctx_r24.initResize($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}

const _c5 = function (a1, a2, a3, a4) {
  return {
    "p-dialog p-component": true,
    "p-dialog-rtl": a1,
    "p-dialog-draggable": a2,
    "p-dialog-resizable": a3,
    "p-dialog-maximized": a4
  };
};

const _c6 = function (a0, a1) {
  return {
    transform: a0,
    transition: a1
  };
};

const _c7 = function (a1) {
  return {
    value: "visible",
    params: a1
  };
};

function Dialog_div_0_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("@animation.start", function Dialog_div_0_div_1_Template_div_animation_animation_start_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27);
      const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return ctx_r26.onAnimationStart($event);
    })("@animation.done", function Dialog_div_0_div_1_Template_div_animation_animation_done_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27);
      const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return ctx_r28.onAnimationEnd($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, Dialog_div_0_div_1_div_2_Template, 8, 5, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 6, 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, Dialog_div_0_div_1_ng_container_6_Template, 1, 0, "ng-container", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, Dialog_div_0_div_1_div_7_Template, 4, 1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, Dialog_div_0_div_1_div_8_Template, 1, 0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r1.styleClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction4"](15, _c5, ctx_r1.rtl, ctx_r1.draggable, ctx_r1.resizable, ctx_r1.maximized))("ngStyle", ctx_r1.style)("pFocusTrapDisabled", ctx_r1.focusTrap === false)("@animation", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](23, _c7, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](20, _c6, ctx_r1.transformOptions, ctx_r1.transitionOptions)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-labelledby", ctx_r1.id + "-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.showHeader);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r1.contentStyleClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", "p-dialog-content")("ngStyle", ctx_r1.contentStyle);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.contentTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.footerFacet || ctx_r1.footerTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.resizable);
  }
}

const _c8 = function (a1, a2, a3, a4, a5, a6, a7, a8, a9, a10) {
  return {
    "p-dialog-mask": true,
    "p-component-overlay p-component-overlay-enter": a1,
    "p-dialog-mask-scrollblocker": a2,
    "p-dialog-left": a3,
    "p-dialog-right": a4,
    "p-dialog-top": a5,
    "p-dialog-top-left": a6,
    "p-dialog-top-right": a7,
    "p-dialog-bottom": a8,
    "p-dialog-bottom-left": a9,
    "p-dialog-bottom-right": a10
  };
};

function Dialog_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Dialog_div_0_div_1_Template, 9, 25, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r0.maskStyleClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunctionV"](4, _c8, [ctx_r0.modal, ctx_r0.modal || ctx_r0.blockScroll, ctx_r0.position === "left", ctx_r0.position === "right", ctx_r0.position === "top", ctx_r0.position === "topleft" || ctx_r0.position === "top-left", ctx_r0.position === "topright" || ctx_r0.position === "top-right", ctx_r0.position === "bottom", ctx_r0.position === "bottomleft" || ctx_r0.position === "bottom-left", ctx_r0.position === "bottomright" || ctx_r0.position === "bottom-right"]));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.visible);
  }
}

const _c9 = ["*", [["p-header"]], [["p-footer"]]];
const _c10 = ["*", "p-header", "p-footer"];
const showAnimation = (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.animation)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.style)({
  transform: '{{transform}}',
  opacity: 0
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.animate)('{{transition}}')]);
const hideAnimation = (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.animation)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.animate)('{{transition}}', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.style)({
  transform: '{{transform}}',
  opacity: 0
}))]);

class Dialog {
  constructor(el, renderer, zone, cd, config) {
    this.el = el;
    this.renderer = renderer;
    this.zone = zone;
    this.cd = cd;
    this.config = config;
    this.draggable = true;
    this.resizable = true;
    this.closeOnEscape = true;
    this.closable = true;
    this.showHeader = true;
    this.blockScroll = false;
    this.autoZIndex = true;
    this.baseZIndex = 0;
    this.minX = 0;
    this.minY = 0;
    this.focusOnShow = true;
    this.keepInViewport = true;
    this.focusTrap = true;
    this.transitionOptions = '150ms cubic-bezier(0, 0, 0.2, 1)';
    this.closeIcon = 'pi pi-times';
    this.closeTabindex = "-1";
    this.minimizeIcon = 'pi pi-window-minimize';
    this.maximizeIcon = 'pi pi-window-maximize';
    this.onShow = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.onHide = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.visibleChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.onResizeInit = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.onResizeEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.onDragEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.onMaximize = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.id = (0,primeng_utils__WEBPACK_IMPORTED_MODULE_2__.UniqueComponentId)();
    this._style = {};
    this._position = "center";
    this.transformOptions = "scale(0.7)";
  }

  get positionLeft() {
    return 0;
  }

  set positionLeft(_positionLeft) {
    console.log("positionLeft property is deprecated.");
  }

  get positionTop() {
    return 0;
  }

  set positionTop(_positionTop) {
    console.log("positionTop property is deprecated.");
  }

  get responsive() {
    return false;
  }

  set responsive(_responsive) {
    console.log("Responsive property is deprecated.");
  }

  get breakpoint() {
    return 649;
  }

  set breakpoint(_breakpoint) {
    console.log("Breakpoint property is not utilized and deprecated, use breakpoints or CSS media queries instead.");
  }

  ngAfterContentInit() {
    this.templates.forEach(item => {
      switch (item.getType()) {
        case 'header':
          this.headerTemplate = item.template;
          break;

        case 'content':
          this.contentTemplate = item.template;
          break;

        case 'footer':
          this.footerTemplate = item.template;
          break;

        default:
          this.contentTemplate = item.template;
          break;
      }
    });
  }

  ngOnInit() {
    if (this.breakpoints) {
      this.createStyle();
    }
  }

  get visible() {
    return this._visible;
  }

  set visible(value) {
    this._visible = value;

    if (this._visible && !this.maskVisible) {
      this.maskVisible = true;
    }
  }

  get style() {
    return this._style;
  }

  set style(value) {
    if (value) {
      this._style = Object.assign({}, value);
      this.originalStyle = value;
    }
  }

  get position() {
    return this._position;
  }

  set position(value) {
    this._position = value;

    switch (value) {
      case 'topleft':
      case 'bottomleft':
      case 'left':
        this.transformOptions = "translate3d(-100%, 0px, 0px)";
        break;

      case 'topright':
      case 'bottomright':
      case 'right':
        this.transformOptions = "translate3d(100%, 0px, 0px)";
        break;

      case 'bottom':
        this.transformOptions = "translate3d(0px, 100%, 0px)";
        break;

      case 'top':
        this.transformOptions = "translate3d(0px, -100%, 0px)";
        break;

      default:
        this.transformOptions = "scale(0.7)";
        break;
    }
  }

  focus() {
    let focusable = primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.findSingle(this.container, '[autofocus]');

    if (focusable) {
      this.zone.runOutsideAngular(() => {
        setTimeout(() => focusable.focus(), 5);
      });
    }
  }

  close(event) {
    this.visibleChange.emit(false);
    event.preventDefault();
  }

  enableModality() {
    if (this.closable && this.dismissableMask) {
      this.maskClickListener = this.renderer.listen(this.wrapper, 'mousedown', event => {
        if (this.wrapper && this.wrapper.isSameNode(event.target)) {
          this.close(event);
        }
      });
    }

    if (this.modal) {
      primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.addClass(document.body, 'p-overflow-hidden');
    }
  }

  disableModality() {
    if (this.wrapper) {
      if (this.dismissableMask) {
        this.unbindMaskClickListener();
      }

      if (this.modal) {
        primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.removeClass(document.body, 'p-overflow-hidden');
      }

      if (!this.cd.destroyed) {
        this.cd.detectChanges();
      }
    }
  }

  maximize() {
    this.maximized = !this.maximized;

    if (!this.modal && !this.blockScroll) {
      if (this.maximized) primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.addClass(document.body, 'p-overflow-hidden');else primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.removeClass(document.body, 'p-overflow-hidden');
    }

    this.onMaximize.emit({
      'maximized': this.maximized
    });
  }

  unbindMaskClickListener() {
    if (this.maskClickListener) {
      this.maskClickListener();
      this.maskClickListener = null;
    }
  }

  moveOnTop() {
    if (this.autoZIndex) {
      primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ZIndexUtils.set('modal', this.container, this.baseZIndex + this.config.zIndex.modal);
      this.wrapper.style.zIndex = String(parseInt(this.container.style.zIndex, 10) - 1);
    }
  }

  createStyle() {
    if (!this.styleElement) {
      this.styleElement = document.createElement('style');
      this.styleElement.type = 'text/css';
      document.head.appendChild(this.styleElement);
      let innerHTML = '';

      for (let breakpoint in this.breakpoints) {
        innerHTML += `
                    @media screen and (max-width: ${breakpoint}) {
                        .p-dialog[${this.id}] {
                            width: ${this.breakpoints[breakpoint]} !important;
                        }
                    }
                `;
      }

      this.styleElement.innerHTML = innerHTML;
    }
  }

  initDrag(event) {
    if (primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.hasClass(event.target, 'p-dialog-header-icon') || primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.hasClass(event.target.parentElement, 'p-dialog-header-icon')) {
      return;
    }

    if (this.draggable) {
      this.dragging = true;
      this.lastPageX = event.pageX;
      this.lastPageY = event.pageY;
      this.container.style.margin = '0';
      primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.addClass(document.body, 'p-unselectable-text');
    }
  }

  onKeydown(event) {
    if (this.focusTrap) {
      if (event.which === 9) {
        event.preventDefault();
        let focusableElements = primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.getFocusableElements(this.container);

        if (focusableElements && focusableElements.length > 0) {
          if (!focusableElements[0].ownerDocument.activeElement) {
            focusableElements[0].focus();
          } else {
            let focusedIndex = focusableElements.indexOf(focusableElements[0].ownerDocument.activeElement);

            if (event.shiftKey) {
              if (focusedIndex == -1 || focusedIndex === 0) focusableElements[focusableElements.length - 1].focus();else focusableElements[focusedIndex - 1].focus();
            } else {
              if (focusedIndex == -1 || focusedIndex === focusableElements.length - 1) focusableElements[0].focus();else focusableElements[focusedIndex + 1].focus();
            }
          }
        }
      }
    }
  }

  onDrag(event) {
    if (this.dragging) {
      let containerWidth = primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.getOuterWidth(this.container);
      let containerHeight = primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.getOuterHeight(this.container);
      let deltaX = event.pageX - this.lastPageX;
      let deltaY = event.pageY - this.lastPageY;
      let offset = primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.getOffset(this.container);
      let leftPos = offset.left + deltaX;
      let topPos = offset.top + deltaY;
      let viewport = primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.getViewport();
      this.container.style.position = 'fixed';

      if (this.keepInViewport) {
        if (leftPos >= this.minX && leftPos + containerWidth < viewport.width) {
          this._style.left = leftPos + 'px';
          this.lastPageX = event.pageX;
          this.container.style.left = leftPos + 'px';
        }

        if (topPos >= this.minY && topPos + containerHeight < viewport.height) {
          this._style.top = topPos + 'px';
          this.lastPageY = event.pageY;
          this.container.style.top = topPos + 'px';
        }
      } else {
        this.lastPageX = event.pageX;
        this.container.style.left = leftPos + 'px';
        this.lastPageY = event.pageY;
        this.container.style.top = topPos + 'px';
      }
    }
  }

  endDrag(event) {
    if (this.dragging) {
      this.dragging = false;
      primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.removeClass(document.body, 'p-unselectable-text');
      this.cd.detectChanges();
      this.onDragEnd.emit(event);
    }
  }

  resetPosition() {
    this.container.style.position = '';
    this.container.style.left = '';
    this.container.style.top = '';
    this.container.style.margin = '';
  } //backward compatibility


  center() {
    this.resetPosition();
  }

  initResize(event) {
    if (this.resizable) {
      this.resizing = true;
      this.lastPageX = event.pageX;
      this.lastPageY = event.pageY;
      primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.addClass(document.body, 'p-unselectable-text');
      this.onResizeInit.emit(event);
    }
  }

  onResize(event) {
    if (this.resizing) {
      let deltaX = event.pageX - this.lastPageX;
      let deltaY = event.pageY - this.lastPageY;
      let containerWidth = primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.getOuterWidth(this.container);
      let containerHeight = primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.getOuterHeight(this.container);
      let contentHeight = primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.getOuterHeight(this.contentViewChild.nativeElement);
      let newWidth = containerWidth + deltaX;
      let newHeight = containerHeight + deltaY;
      let minWidth = this.container.style.minWidth;
      let minHeight = this.container.style.minHeight;
      let offset = primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.getOffset(this.container);
      let viewport = primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.getViewport();
      let hasBeenDragged = !parseInt(this.container.style.top) || !parseInt(this.container.style.left);

      if (hasBeenDragged) {
        newWidth += deltaX;
        newHeight += deltaY;
      }

      if ((!minWidth || newWidth > parseInt(minWidth)) && offset.left + newWidth < viewport.width) {
        this._style.width = newWidth + 'px';
        this.container.style.width = this._style.width;
      }

      if ((!minHeight || newHeight > parseInt(minHeight)) && offset.top + newHeight < viewport.height) {
        this.contentViewChild.nativeElement.style.height = contentHeight + newHeight - containerHeight + 'px';

        if (this._style.height) {
          this._style.height = newHeight + 'px';
          this.container.style.height = this._style.height;
        }
      }

      this.lastPageX = event.pageX;
      this.lastPageY = event.pageY;
    }
  }

  resizeEnd(event) {
    if (this.resizing) {
      this.resizing = false;
      primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.removeClass(document.body, 'p-unselectable-text');
      this.onResizeEnd.emit(event);
    }
  }

  bindGlobalListeners() {
    if (this.draggable) {
      this.bindDocumentDragListener();
      this.bindDocumentDragEndListener();
    }

    if (this.resizable) {
      this.bindDocumentResizeListeners();
    }

    if (this.closeOnEscape && this.closable) {
      this.bindDocumentEscapeListener();
    }
  }

  unbindGlobalListeners() {
    this.unbindDocumentDragListener();
    this.unbindDocumentDragEndListener();
    this.unbindDocumentResizeListeners();
    this.unbindDocumentEscapeListener();
  }

  bindDocumentDragListener() {
    this.zone.runOutsideAngular(() => {
      this.documentDragListener = this.onDrag.bind(this);
      window.document.addEventListener('mousemove', this.documentDragListener);
    });
  }

  unbindDocumentDragListener() {
    if (this.documentDragListener) {
      window.document.removeEventListener('mousemove', this.documentDragListener);
      this.documentDragListener = null;
    }
  }

  bindDocumentDragEndListener() {
    this.zone.runOutsideAngular(() => {
      this.documentDragEndListener = this.endDrag.bind(this);
      window.document.addEventListener('mouseup', this.documentDragEndListener);
    });
  }

  unbindDocumentDragEndListener() {
    if (this.documentDragEndListener) {
      window.document.removeEventListener('mouseup', this.documentDragEndListener);
      this.documentDragEndListener = null;
    }
  }

  bindDocumentResizeListeners() {
    this.zone.runOutsideAngular(() => {
      this.documentResizeListener = this.onResize.bind(this);
      this.documentResizeEndListener = this.resizeEnd.bind(this);
      window.document.addEventListener('mousemove', this.documentResizeListener);
      window.document.addEventListener('mouseup', this.documentResizeEndListener);
    });
  }

  unbindDocumentResizeListeners() {
    if (this.documentResizeListener && this.documentResizeEndListener) {
      window.document.removeEventListener('mousemove', this.documentResizeListener);
      window.document.removeEventListener('mouseup', this.documentResizeEndListener);
      this.documentResizeListener = null;
      this.documentResizeEndListener = null;
    }
  }

  bindDocumentEscapeListener() {
    const documentTarget = this.el ? this.el.nativeElement.ownerDocument : 'document';
    this.documentEscapeListener = this.renderer.listen(documentTarget, 'keydown', event => {
      if (event.which == 27) {
        this.close(event);
      }
    });
  }

  unbindDocumentEscapeListener() {
    if (this.documentEscapeListener) {
      this.documentEscapeListener();
      this.documentEscapeListener = null;
    }
  }

  appendContainer() {
    if (this.appendTo) {
      if (this.appendTo === 'body') document.body.appendChild(this.wrapper);else primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.appendChild(this.wrapper, this.appendTo);
    }
  }

  restoreAppend() {
    if (this.container && this.appendTo) {
      this.el.nativeElement.appendChild(this.wrapper);
    }
  }

  onAnimationStart(event) {
    switch (event.toState) {
      case 'visible':
        this.container = event.element;
        this.wrapper = this.container.parentElement;
        this.appendContainer();
        this.moveOnTop();
        this.bindGlobalListeners();
        this.container.setAttribute(this.id, '');

        if (this.modal) {
          this.enableModality();
        }

        if (!this.modal && this.blockScroll) {
          primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.addClass(document.body, 'p-overflow-hidden');
        }

        if (this.focusOnShow) {
          this.focus();
        }

        break;

      case 'void':
        if (this.modal) {
          primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.addClass(this.wrapper, 'p-component-overlay-leave');
        }

        break;
    }
  }

  onAnimationEnd(event) {
    switch (event.toState) {
      case 'void':
        this.onContainerDestroy();
        this.onHide.emit({});
        break;

      case 'visible':
        this.onShow.emit({});
        break;
    }
  }

  onContainerDestroy() {
    this.unbindGlobalListeners();
    this.dragging = false;
    this.maskVisible = false;

    if (this.maximized) {
      primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.removeClass(document.body, 'p-overflow-hidden');
      this.maximized = false;
    }

    if (this.modal) {
      this.disableModality();
    }

    if (this.blockScroll) {
      primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.removeClass(document.body, 'p-overflow-hidden');
    }

    if (this.container && this.autoZIndex) {
      primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ZIndexUtils.clear(this.container);
    }

    this.container = null;
    this.wrapper = null;
    this._style = this.originalStyle ? Object.assign({}, this.originalStyle) : {};
  }

  destroyStyle() {
    if (this.styleElement) {
      document.head.removeChild(this.styleElement);
      this.styleElement = null;
    }
  }

  ngOnDestroy() {
    if (this.container) {
      this.restoreAppend();
      this.onContainerDestroy();
    }

    this.destroyStyle();
  }

}

Dialog.ɵfac = function Dialog_Factory(t) {
  return new (t || Dialog)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_4__.PrimeNGConfig));
};

Dialog.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: Dialog,
  selectors: [["p-dialog"]],
  contentQueries: function Dialog_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, primeng_api__WEBPACK_IMPORTED_MODULE_4__.Header, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, primeng_api__WEBPACK_IMPORTED_MODULE_4__.Footer, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, primeng_api__WEBPACK_IMPORTED_MODULE_4__.PrimeTemplate, 4);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.headerFacet = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.footerFacet = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.templates = _t);
    }
  },
  viewQuery: function Dialog_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c2, 5);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.headerViewChild = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.contentViewChild = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.footerViewChild = _t.first);
    }
  },
  hostAttrs: [1, "p-element"],
  inputs: {
    header: "header",
    draggable: "draggable",
    resizable: "resizable",
    positionLeft: "positionLeft",
    positionTop: "positionTop",
    contentStyle: "contentStyle",
    contentStyleClass: "contentStyleClass",
    modal: "modal",
    closeOnEscape: "closeOnEscape",
    dismissableMask: "dismissableMask",
    rtl: "rtl",
    closable: "closable",
    responsive: "responsive",
    appendTo: "appendTo",
    breakpoints: "breakpoints",
    styleClass: "styleClass",
    maskStyleClass: "maskStyleClass",
    showHeader: "showHeader",
    breakpoint: "breakpoint",
    blockScroll: "blockScroll",
    autoZIndex: "autoZIndex",
    baseZIndex: "baseZIndex",
    minX: "minX",
    minY: "minY",
    focusOnShow: "focusOnShow",
    maximizable: "maximizable",
    keepInViewport: "keepInViewport",
    focusTrap: "focusTrap",
    transitionOptions: "transitionOptions",
    closeIcon: "closeIcon",
    closeAriaLabel: "closeAriaLabel",
    closeTabindex: "closeTabindex",
    minimizeIcon: "minimizeIcon",
    maximizeIcon: "maximizeIcon",
    visible: "visible",
    style: "style",
    position: "position"
  },
  outputs: {
    onShow: "onShow",
    onHide: "onHide",
    visibleChange: "visibleChange",
    onResizeInit: "onResizeInit",
    onResizeEnd: "onResizeEnd",
    onDragEnd: "onDragEnd",
    onMaximize: "onMaximize"
  },
  ngContentSelectors: _c10,
  decls: 1,
  vars: 1,
  consts: [[3, "class", "ngClass", 4, "ngIf"], [3, "ngClass"], ["pFocusTrap", "", "role", "dialog", 3, "ngClass", "ngStyle", "class", "pFocusTrapDisabled", 4, "ngIf"], ["pFocusTrap", "", "role", "dialog", 3, "ngClass", "ngStyle", "pFocusTrapDisabled"], ["container", ""], ["class", "p-dialog-header", 3, "mousedown", 4, "ngIf"], [3, "ngClass", "ngStyle"], ["content", ""], [4, "ngTemplateOutlet"], ["class", "p-dialog-footer", 4, "ngIf"], ["class", "p-resizable-handle", "style", "z-index: 90;", 3, "mousedown", 4, "ngIf"], [1, "p-dialog-header", 3, "mousedown"], ["titlebar", ""], ["class", "p-dialog-title", 4, "ngIf"], [1, "p-dialog-header-icons"], ["type", "button", "tabindex", "-1", "pRipple", "", 3, "ngClass", "click", "keydown.enter", 4, "ngIf"], ["type", "button", "pRipple", "", 3, "ngClass", "click", "keydown.enter", 4, "ngIf"], [1, "p-dialog-title"], ["type", "button", "tabindex", "-1", "pRipple", "", 3, "ngClass", "click", "keydown.enter"], [1, "p-dialog-header-maximize-icon", 3, "ngClass"], ["type", "button", "pRipple", "", 3, "ngClass", "click", "keydown.enter"], [1, "p-dialog-header-close-icon", 3, "ngClass"], [1, "p-dialog-footer"], ["footer", ""], [1, "p-resizable-handle", 2, "z-index", "90", 3, "mousedown"]],
  template: function Dialog_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, Dialog_div_0_Template, 2, 15, "div", 0);
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.maskVisible);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, primeng_focustrap__WEBPACK_IMPORTED_MODULE_6__.FocusTrap, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgStyle, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgTemplateOutlet, primeng_ripple__WEBPACK_IMPORTED_MODULE_7__.Ripple],
  styles: [".p-dialog-mask{position:fixed;top:0;left:0;width:100%;height:100%;display:flex;justify-content:center;align-items:center;pointer-events:none}.p-dialog,.p-dialog-mask.p-component-overlay{pointer-events:auto}.p-dialog{display:flex;flex-direction:column;max-height:90%;transform:scale(1);position:relative}.p-dialog-content{overflow-y:auto;flex-grow:1}.p-dialog-header{display:flex;align-items:center;justify-content:space-between;flex-shrink:0}.p-dialog-footer{flex-shrink:0}.p-dialog .p-dialog-header-icons{display:flex;align-items:center}.p-dialog .p-dialog-header-icon{display:flex;align-items:center;justify-content:center;overflow:hidden;position:relative}.p-fluid .p-dialog-footer .p-button{width:auto}.p-dialog-bottom-left .p-dialog,.p-dialog-bottom-right .p-dialog,.p-dialog-bottom .p-dialog,.p-dialog-left .p-dialog,.p-dialog-right .p-dialog,.p-dialog-top-left .p-dialog,.p-dialog-top-right .p-dialog,.p-dialog-top .p-dialog{margin:.75rem;transform:translateZ(0)}.p-dialog-maximized{transition:none;transform:none;width:100vw!important;height:100vh!important;top:0!important;left:0!important;max-height:100%;height:100%}.p-dialog-maximized .p-dialog-content{flex-grow:1}.p-dialog-left{justify-content:flex-start}.p-dialog-right{justify-content:flex-end}.p-dialog-top,.p-dialog-top-left{align-items:flex-start}.p-dialog-top-left{justify-content:flex-start}.p-dialog-top-right{justify-content:flex-end;align-items:flex-start}.p-dialog-bottom{align-items:flex-end}.p-dialog-bottom-left{justify-content:flex-start;align-items:flex-end}.p-dialog-bottom-right{justify-content:flex-end;align-items:flex-end}.p-dialog .p-resizable-handle{position:absolute;font-size:.1px;display:block;cursor:se-resize;width:12px;height:12px;right:1px;bottom:1px}.p-confirm-dialog .p-dialog-content{display:flex;align-items:center}"],
  encapsulation: 2,
  data: {
    animation: [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.trigger)('animation', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.transition)('void => visible', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.useAnimation)(showAnimation)]), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.transition)('visible => void', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.useAnimation)(hideAnimation)])])]
  },
  changeDetection: 0
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Dialog, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'p-dialog',
      template: `
        <div *ngIf="maskVisible" [class]="maskStyleClass"
            [ngClass]="{'p-dialog-mask': true, 'p-component-overlay p-component-overlay-enter': this.modal, 'p-dialog-mask-scrollblocker': this.modal || this.blockScroll,
                'p-dialog-left': position === 'left',
                'p-dialog-right': position === 'right',
                'p-dialog-top': position === 'top',
                'p-dialog-top-left': position === 'topleft' || position === 'top-left',
                'p-dialog-top-right': position === 'topright' || position === 'top-right',
                'p-dialog-bottom': position === 'bottom',
                'p-dialog-bottom-left': position === 'bottomleft' || position === 'bottom-left',
                'p-dialog-bottom-right': position === 'bottomright' || position === 'bottom-right'}">
            <div #container [ngClass]="{'p-dialog p-component':true, 'p-dialog-rtl':rtl,'p-dialog-draggable':draggable,'p-dialog-resizable':resizable, 'p-dialog-maximized': maximized}"
                [ngStyle]="style" [class]="styleClass" *ngIf="visible" pFocusTrap [pFocusTrapDisabled]="focusTrap === false"
                [@animation]="{value: 'visible', params: {transform: transformOptions, transition: transitionOptions}}" (@animation.start)="onAnimationStart($event)" (@animation.done)="onAnimationEnd($event)" role="dialog" [attr.aria-labelledby]="id + '-label'">
                <div #titlebar class="p-dialog-header" (mousedown)="initDrag($event)" *ngIf="showHeader">
                    <span [attr.id]="id + '-label'" class="p-dialog-title" *ngIf="!headerFacet && !headerTemplate">{{header}}</span>
                    <span [attr.id]="id + '-label'" class="p-dialog-title" *ngIf="headerFacet">
                        <ng-content select="p-header"></ng-content>
                    </span>
                    <ng-container *ngTemplateOutlet="headerTemplate"></ng-container>
                    <div class="p-dialog-header-icons">
                        <button *ngIf="maximizable" type="button" [ngClass]="{'p-dialog-header-icon p-dialog-header-maximize p-link':true}" (click)="maximize()" (keydown.enter)="maximize()" tabindex="-1" pRipple>
                            <span class="p-dialog-header-maximize-icon" [ngClass]="maximized ? minimizeIcon : maximizeIcon"></span>
                        </button>
                        <button *ngIf="closable" type="button" [ngClass]="{'p-dialog-header-icon p-dialog-header-close p-link':true}" [attr.aria-label]="closeAriaLabel" (click)="close($event)" (keydown.enter)="close($event)" [attr.tabindex]="closeTabindex" pRipple>
                            <span class="p-dialog-header-close-icon" [ngClass]="closeIcon"></span>
                        </button>
                    </div>
                </div>
                <div #content [ngClass]="'p-dialog-content'" [ngStyle]="contentStyle" [class]="contentStyleClass">
                    <ng-content></ng-content>
                    <ng-container *ngTemplateOutlet="contentTemplate"></ng-container>
                </div>
                <div #footer class="p-dialog-footer" *ngIf="footerFacet || footerTemplate">
                    <ng-content select="p-footer"></ng-content>
                    <ng-container *ngTemplateOutlet="footerTemplate"></ng-container>
                </div>
                <div *ngIf="resizable" class="p-resizable-handle" style="z-index: 90;" (mousedown)="initResize($event)"></div>
            </div>
        </div>
    `,
      animations: [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.trigger)('animation', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.transition)('void => visible', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.useAnimation)(showAnimation)]), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.transition)('visible => void', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.useAnimation)(hideAnimation)])])],
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      styleUrls: ['../dialog/dialog.css'],
      host: {
        'class': 'p-element'
      }
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }, {
      type: primeng_api__WEBPACK_IMPORTED_MODULE_4__.PrimeNGConfig
    }];
  }, {
    header: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    draggable: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    resizable: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    positionLeft: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    positionTop: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    contentStyle: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    contentStyleClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    modal: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    closeOnEscape: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    dismissableMask: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    rtl: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    closable: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    responsive: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    appendTo: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    breakpoints: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    styleClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    maskStyleClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    showHeader: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    breakpoint: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    blockScroll: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    autoZIndex: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    baseZIndex: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    minX: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    minY: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    focusOnShow: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    maximizable: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    keepInViewport: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    focusTrap: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    transitionOptions: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    closeIcon: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    closeAriaLabel: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    closeTabindex: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    minimizeIcon: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    maximizeIcon: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    headerFacet: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
      args: [primeng_api__WEBPACK_IMPORTED_MODULE_4__.Header]
    }],
    footerFacet: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
      args: [primeng_api__WEBPACK_IMPORTED_MODULE_4__.Footer]
    }],
    templates: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren,
      args: [primeng_api__WEBPACK_IMPORTED_MODULE_4__.PrimeTemplate]
    }],
    headerViewChild: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['titlebar']
    }],
    contentViewChild: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['content']
    }],
    footerViewChild: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['footer']
    }],
    onShow: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onHide: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    visibleChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onResizeInit: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onResizeEnd: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onDragEnd: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onMaximize: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    visible: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    style: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    position: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();

class DialogModule {}

DialogModule.ɵfac = function DialogModule_Factory(t) {
  return new (t || DialogModule)();
};

DialogModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: DialogModule,
  declarations: [Dialog],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, primeng_focustrap__WEBPACK_IMPORTED_MODULE_6__.FocusTrapModule, primeng_ripple__WEBPACK_IMPORTED_MODULE_7__.RippleModule],
  exports: [Dialog, primeng_api__WEBPACK_IMPORTED_MODULE_4__.SharedModule]
});
DialogModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, primeng_focustrap__WEBPACK_IMPORTED_MODULE_6__.FocusTrapModule, primeng_ripple__WEBPACK_IMPORTED_MODULE_7__.RippleModule], primeng_api__WEBPACK_IMPORTED_MODULE_4__.SharedModule]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DialogModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, primeng_focustrap__WEBPACK_IMPORTED_MODULE_6__.FocusTrapModule, primeng_ripple__WEBPACK_IMPORTED_MODULE_7__.RippleModule],
      exports: [Dialog, primeng_api__WEBPACK_IMPORTED_MODULE_4__.SharedModule],
      declarations: [Dialog]
    }]
  }], null, null);
})();
/**
 * Generated bundle index. Do not edit.
 */


 //# sourceMappingURL=primeng-dialog.js.map

/***/ }),

/***/ 2325:
/*!************************************************************!*\
  !*** ./node_modules/primeng/fesm2015/primeng-focustrap.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FocusTrap": () => (/* binding */ FocusTrap),
/* harmony export */   "FocusTrapModule": () => (/* binding */ FocusTrapModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6274);
/* harmony import */ var primeng_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! primeng/dom */ 938);





class FocusTrap {
  constructor(el) {
    this.el = el;
  }

  onkeydown(e) {
    if (this.pFocusTrapDisabled !== true) {
      e.preventDefault();
      let focusableElements = primeng_dom__WEBPACK_IMPORTED_MODULE_0__.DomHandler.getFocusableElements(this.el.nativeElement);

      if (focusableElements && focusableElements.length > 0) {
        if (!focusableElements[0].ownerDocument.activeElement) {
          focusableElements[0].focus();
        } else {
          let focusedIndex = focusableElements.indexOf(focusableElements[0].ownerDocument.activeElement);

          if (e.shiftKey) {
            if (focusedIndex == -1 || focusedIndex === 0) focusableElements[focusableElements.length - 1].focus();else focusableElements[focusedIndex - 1].focus();
          } else {
            if (focusedIndex == -1 || focusedIndex === focusableElements.length - 1) focusableElements[0].focus();else focusableElements[focusedIndex + 1].focus();
          }
        }
      }
    }
  }

}

FocusTrap.ɵfac = function FocusTrap_Factory(t) {
  return new (t || FocusTrap)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef));
};

FocusTrap.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
  type: FocusTrap,
  selectors: [["", "pFocusTrap", ""]],
  hostAttrs: [1, "p-element"],
  hostBindings: function FocusTrap_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keydown.tab", function FocusTrap_keydown_tab_HostBindingHandler($event) {
        return ctx.onkeydown($event);
      })("keydown.shift.tab", function FocusTrap_keydown_shift_tab_HostBindingHandler($event) {
        return ctx.onkeydown($event);
      });
    }
  },
  inputs: {
    pFocusTrapDisabled: "pFocusTrapDisabled"
  }
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](FocusTrap, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive,
    args: [{
      selector: '[pFocusTrap]',
      host: {
        'class': 'p-element'
      }
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef
    }];
  }, {
    pFocusTrapDisabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    onkeydown: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.HostListener,
      args: ['keydown.tab', ['$event']]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.HostListener,
      args: ['keydown.shift.tab', ['$event']]
    }]
  });
})();

class FocusTrapModule {}

FocusTrapModule.ɵfac = function FocusTrapModule_Factory(t) {
  return new (t || FocusTrapModule)();
};

FocusTrapModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: FocusTrapModule,
  declarations: [FocusTrap],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule],
  exports: [FocusTrap]
});
FocusTrapModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](FocusTrapModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule,
    args: [{
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule],
      exports: [FocusTrap],
      declarations: [FocusTrap]
    }]
  }], null, null);
})();
/**
 * Generated bundle index. Do not edit.
 */


 //# sourceMappingURL=primeng-focustrap.js.map

/***/ }),

/***/ 6219:
/*!***********************************************************!*\
  !*** ./node_modules/primeng/fesm2015/primeng-galleria.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Galleria": () => (/* binding */ Galleria),
/* harmony export */   "GalleriaContent": () => (/* binding */ GalleriaContent),
/* harmony export */   "GalleriaItem": () => (/* binding */ GalleriaItem),
/* harmony export */   "GalleriaItemSlot": () => (/* binding */ GalleriaItemSlot),
/* harmony export */   "GalleriaModule": () => (/* binding */ GalleriaModule),
/* harmony export */   "GalleriaThumbnails": () => (/* binding */ GalleriaThumbnails)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6274);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/api */ 1388);
/* harmony import */ var primeng_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/utils */ 3821);
/* harmony import */ var primeng_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/dom */ 938);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/ripple */ 4796);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/animations */ 8638);











const _c0 = ["mask"];

const _c1 = function (a0, a1) {
  return {
    showTransitionParams: a0,
    hideTransitionParams: a1
  };
};

const _c2 = function (a1) {
  return {
    value: "visible",
    params: a1
  };
};

function Galleria_div_0_div_1_p_galleriaContent_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p-galleriaContent", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("@animation.start", function Galleria_div_0_div_1_p_galleriaContent_2_Template_p_galleriaContent_animation_animation_start_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
      return ctx_r6.onAnimationStart($event);
    })("@animation.done", function Galleria_div_0_div_1_p_galleriaContent_2_Template_p_galleriaContent_animation_animation_done_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
      return ctx_r8.onAnimationEnd($event);
    })("maskHide", function Galleria_div_0_div_1_p_galleriaContent_2_Template_p_galleriaContent_maskHide_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
      return ctx_r9.onMaskHide();
    })("activeItemChange", function Galleria_div_0_div_1_p_galleriaContent_2_Template_p_galleriaContent_activeItemChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
      return ctx_r10.onActiveItemChange($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@animation", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](5, _c1, ctx_r5.showTransitionOptions, ctx_r5.hideTransitionOptions)))("value", ctx_r5.value)("activeIndex", ctx_r5.activeIndex)("numVisible", ctx_r5.numVisible)("ngStyle", ctx_r5.containerStyle);
  }
}

const _c3 = function (a1) {
  return {
    "p-galleria-mask p-component-overlay p-component-overlay-enter": true,
    "p-galleria-visible": a1
  };
};

function Galleria_div_0_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, Galleria_div_0_div_1_p_galleriaContent_2_Template, 1, 10, "p-galleriaContent", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r3.maskClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c3, ctx_r3.visible));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.visible);
  }
}

function Galleria_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Galleria_div_0_div_1_Template, 3, 6, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.maskVisible);
  }
}

function Galleria_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p-galleriaContent", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("activeItemChange", function Galleria_ng_template_1_Template_p_galleriaContent_activeItemChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return ctx_r11.onActiveItemChange($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r2.value)("activeIndex", ctx_r2.activeIndex)("numVisible", ctx_r2.numVisible);
  }
}

function GalleriaContent_div_0_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GalleriaContent_div_0_button_1_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return ctx_r5.maskHide.emit();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}

function GalleriaContent_div_0_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "p-galleriaItemSlot", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("templates", ctx_r2.galleria.templates);
  }
}

function GalleriaContent_div_0_p_galleriaThumbnails_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p-galleriaThumbnails", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onActiveIndexChange", function GalleriaContent_div_0_p_galleriaThumbnails_5_Template_p_galleriaThumbnails_onActiveIndexChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return ctx_r7.onActiveIndexChange($event);
    })("stopSlideShow", function GalleriaContent_div_0_p_galleriaThumbnails_5_Template_p_galleriaThumbnails_stopSlideShow_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return ctx_r9.stopSlideShow();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("containerId", ctx_r3.id)("value", ctx_r3.value)("activeIndex", ctx_r3.activeIndex)("templates", ctx_r3.galleria.templates)("numVisible", ctx_r3.numVisible)("responsiveOptions", ctx_r3.galleria.responsiveOptions)("circular", ctx_r3.galleria.circular)("isVertical", ctx_r3.isVertical())("contentHeight", ctx_r3.galleria.verticalThumbnailViewPortHeight)("showThumbnailNavigators", ctx_r3.galleria.showThumbnailNavigators)("slideShowActive", ctx_r3.slideShowActive);
  }
}

function GalleriaContent_div_0_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "p-galleriaItemSlot", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("templates", ctx_r4.galleria.templates);
  }
}

const _c4 = function (a1, a2, a3) {
  return {
    "p-galleria p-component": true,
    "p-galleria-fullscreen": a1,
    "p-galleria-indicator-onitem": a2,
    "p-galleria-item-nav-onhover": a3
  };
};

const _c5 = function () {
  return {};
};

function GalleriaContent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GalleriaContent_div_0_button_1_Template, 2, 0, "button", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, GalleriaContent_div_0_div_2_Template, 2, 1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p-galleriaItem", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onActiveIndexChange", function GalleriaContent_div_0_Template_p_galleriaItem_onActiveIndexChange_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return ctx_r10.onActiveIndexChange($event);
    })("startSlideShow", function GalleriaContent_div_0_Template_p_galleriaItem_startSlideShow_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return ctx_r12.startSlideShow();
    })("stopSlideShow", function GalleriaContent_div_0_Template_p_galleriaItem_stopSlideShow_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return ctx_r13.stopSlideShow();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, GalleriaContent_div_0_p_galleriaThumbnails_5_Template, 1, 11, "p-galleriaThumbnails", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, GalleriaContent_div_0_div_6_Template, 2, 1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r0.galleriaClass());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](20, _c4, ctx_r0.galleria.fullScreen, ctx_r0.galleria.showIndicatorsOnItem, ctx_r0.galleria.showItemNavigatorsOnHover && !ctx_r0.galleria.fullScreen))("ngStyle", !ctx_r0.galleria.fullScreen ? ctx_r0.galleria.containerStyle : _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](24, _c5));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("id", ctx_r0.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.galleria.fullScreen);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.galleria.templates && ctx_r0.galleria.headerFacet);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r0.value)("activeIndex", ctx_r0.activeIndex)("circular", ctx_r0.galleria.circular)("templates", ctx_r0.galleria.templates)("showIndicators", ctx_r0.galleria.showIndicators)("changeItemOnIndicatorHover", ctx_r0.galleria.changeItemOnIndicatorHover)("indicatorFacet", ctx_r0.galleria.indicatorFacet)("captionFacet", ctx_r0.galleria.captionFacet)("showItemNavigators", ctx_r0.galleria.showItemNavigators)("autoPlay", ctx_r0.galleria.autoPlay)("slideShowActive", ctx_r0.slideShowActive);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.galleria.showThumbnails);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.galleria.templates && ctx_r0.galleria.footerFacet);
  }
}

function GalleriaItemSlot_ng_container_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}

function GalleriaItemSlot_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GalleriaItemSlot_ng_container_0_ng_container_1_Template, 1, 0, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r0.contentTemplate)("ngTemplateOutletContext", ctx_r0.context);
  }
}

const _c6 = function (a1) {
  return {
    "p-galleria-item-prev p-galleria-item-nav p-link": true,
    "p-disabled": a1
  };
};

function GalleriaItem_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GalleriaItem_button_2_Template_button_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return ctx_r4.navBackward($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c6, ctx_r0.isNavBackwardDisabled()))("disabled", ctx_r0.isNavBackwardDisabled());
  }
}

const _c7 = function (a1) {
  return {
    "p-galleria-item-next p-galleria-item-nav p-link": true,
    "p-disabled": a1
  };
};

function GalleriaItem_button_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GalleriaItem_button_4_Template_button_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return ctx_r6.navForward($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c7, ctx_r1.isNavForwardDisabled()))("disabled", ctx_r1.isNavForwardDisabled());
  }
}

function GalleriaItem_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "p-galleriaItemSlot", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("item", ctx_r2.activeItem)("templates", ctx_r2.templates);
  }
}

function GalleriaItem_ul_6_li_1_button_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "button", 16);
  }
}

const _c8 = function (a1) {
  return {
    "p-galleria-indicator": true,
    "p-highlight": a1
  };
};

function GalleriaItem_ul_6_li_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GalleriaItem_ul_6_li_1_Template_li_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);
      const index_r10 = restoredCtx.index;
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return ctx_r12.onIndicatorClick(index_r10);
    })("mouseenter", function GalleriaItem_ul_6_li_1_Template_li_mouseenter_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);
      const index_r10 = restoredCtx.index;
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return ctx_r14.onIndicatorMouseEnter(index_r10);
    })("keydown.enter", function GalleriaItem_ul_6_li_1_Template_li_keydown_enter_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);
      const index_r10 = restoredCtx.index;
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return ctx_r15.onIndicatorKeyDown(index_r10);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GalleriaItem_ul_6_li_1_button_1_Template, 1, 0, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "p-galleriaItemSlot", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const index_r10 = ctx.index;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c8, ctx_r8.isIndicatorItemActive(index_r10)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r8.indicatorFacet);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("index", index_r10)("templates", ctx_r8.templates);
  }
}

function GalleriaItem_ul_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GalleriaItem_ul_6_li_1_Template, 3, 6, "li", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.value);
  }
}

const _c9 = ["itemsContainer"];

const _c10 = function (a1) {
  return {
    "p-galleria-thumbnail-prev p-link": true,
    "p-disabled": a1
  };
};

const _c11 = function (a1, a2) {
  return {
    "p-galleria-thumbnail-prev-icon pi": true,
    "pi-chevron-left": a1,
    "pi-chevron-up": a2
  };
};

function GalleriaThumbnails_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GalleriaThumbnails_button_2_Template_button_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return ctx_r4.navBackward($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c10, ctx_r0.isNavBackwardDisabled()))("disabled", ctx_r0.isNavBackwardDisabled());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](5, _c11, !ctx_r0.isVertical, ctx_r0.isVertical));
  }
}

const _c12 = function (a1, a2, a3, a4) {
  return {
    "p-galleria-thumbnail-item": true,
    "p-galleria-thumbnail-item-current": a1,
    "p-galleria-thumbnail-item-active": a2,
    "p-galleria-thumbnail-item-start": a3,
    "p-galleria-thumbnail-item-end": a4
  };
};

function GalleriaThumbnails_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GalleriaThumbnails_div_6_Template_div_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);
      const index_r7 = restoredCtx.index;
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return ctx_r8.onItemClick(index_r7);
    })("keydown.enter", function GalleriaThumbnails_div_6_Template_div_keydown_enter_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);
      const index_r7 = restoredCtx.index;
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return ctx_r10.onItemClick(index_r7);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "p-galleriaItemSlot", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const item_r6 = ctx.$implicit;
    const index_r7 = ctx.index;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction4"](4, _c12, ctx_r2.activeIndex === index_r7, ctx_r2.isItemActive(index_r7), ctx_r2.firstItemAciveIndex() === index_r7, ctx_r2.lastItemActiveIndex() === index_r7));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("tabindex", ctx_r2.getTabIndex(index_r7));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("item", item_r6)("templates", ctx_r2.templates);
  }
}

const _c13 = function (a1) {
  return {
    "p-galleria-thumbnail-next p-link": true,
    "p-disabled": a1
  };
};

const _c14 = function (a1, a2) {
  return {
    "p-galleria-thumbnail-next-icon pi": true,
    "pi-chevron-right": a1,
    "pi-chevron-down": a2
  };
};

function GalleriaThumbnails_button_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GalleriaThumbnails_button_7_Template_button_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return ctx_r11.navForward($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c13, ctx_r3.isNavForwardDisabled()))("disabled", ctx_r3.isNavForwardDisabled());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](5, _c14, !ctx_r3.isVertical, ctx_r3.isVertical));
  }
}

const _c15 = function (a0) {
  return {
    "height": a0
  };
};

class Galleria {
  constructor(element, cd, config) {
    this.element = element;
    this.cd = cd;
    this.config = config;
    this.fullScreen = false;
    this.numVisible = 3;
    this.showItemNavigators = false;
    this.showThumbnailNavigators = true;
    this.showItemNavigatorsOnHover = false;
    this.changeItemOnIndicatorHover = false;
    this.circular = false;
    this.autoPlay = false;
    this.transitionInterval = 4000;
    this.showThumbnails = true;
    this.thumbnailsPosition = "bottom";
    this.verticalThumbnailViewPortHeight = "300px";
    this.showIndicators = false;
    this.showIndicatorsOnItem = false;
    this.indicatorsPosition = "bottom";
    this.baseZIndex = 0;
    this.showTransitionOptions = '150ms cubic-bezier(0, 0, 0.2, 1)';
    this.hideTransitionOptions = '150ms cubic-bezier(0, 0, 0.2, 1)';
    this.activeIndexChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.visibleChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this._visible = false;
    this._activeIndex = 0;
    this.maskVisible = false;
  }

  get activeIndex() {
    return this._activeIndex;
  }

  set activeIndex(activeIndex) {
    this._activeIndex = activeIndex;
  }

  get visible() {
    return this._visible;
  }

  set visible(visible) {
    this._visible = visible;

    if (this._visible && !this.maskVisible) {
      this.maskVisible = true;
    }
  }

  ngAfterContentInit() {
    this.templates.forEach(item => {
      switch (item.getType()) {
        case 'header':
          this.headerFacet = item.template;
          break;

        case 'footer':
          this.footerFacet = item.template;
          break;

        case 'indicator':
          this.indicatorFacet = item.template;
          break;

        case 'caption':
          this.captionFacet = item.template;
          break;
      }
    });
  }

  ngOnChanges(simpleChanges) {
    var _a;

    if (simpleChanges.value && ((_a = simpleChanges.value.currentValue) === null || _a === void 0 ? void 0 : _a.length) < this.numVisible) {
      this.numVisible = simpleChanges.value.currentValue.length;
    }
  }

  onMaskHide() {
    this.visible = false;
    this.visibleChange.emit(false);
  }

  onActiveItemChange(index) {
    if (this.activeIndex !== index) {
      this.activeIndex = index;
      this.activeIndexChange.emit(index);
    }
  }

  onAnimationStart(event) {
    switch (event.toState) {
      case 'visible':
        this.enableModality();
        break;

      case 'void':
        primeng_dom__WEBPACK_IMPORTED_MODULE_1__.DomHandler.addClass(this.mask.nativeElement, 'p-component-overlay-leave');
        break;
    }
  }

  onAnimationEnd(event) {
    switch (event.toState) {
      case 'void':
        this.disableModality();
        break;
    }
  }

  enableModality() {
    primeng_dom__WEBPACK_IMPORTED_MODULE_1__.DomHandler.addClass(document.body, 'p-overflow-hidden');
    this.cd.markForCheck();

    if (this.mask) {
      primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ZIndexUtils.set('modal', this.mask.nativeElement, this.baseZIndex || this.config.zIndex.modal);
    }
  }

  disableModality() {
    primeng_dom__WEBPACK_IMPORTED_MODULE_1__.DomHandler.removeClass(document.body, 'p-overflow-hidden');
    this.maskVisible = false;
    this.cd.markForCheck();

    if (this.mask) {
      primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ZIndexUtils.clear(this.mask.nativeElement);
    }
  }

  ngOnDestroy() {
    if (this.fullScreen) {
      primeng_dom__WEBPACK_IMPORTED_MODULE_1__.DomHandler.removeClass(document.body, 'p-overflow-hidden');
    }

    if (this.mask) {
      this.disableModality();
    }
  }

}

Galleria.ɵfac = function Galleria_Factory(t) {
  return new (t || Galleria)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_3__.PrimeNGConfig));
};

Galleria.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: Galleria,
  selectors: [["p-galleria"]],
  contentQueries: function Galleria_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, primeng_api__WEBPACK_IMPORTED_MODULE_3__.PrimeTemplate, 4);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.templates = _t);
    }
  },
  viewQuery: function Galleria_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 5);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.mask = _t.first);
    }
  },
  hostAttrs: [1, "p-element"],
  inputs: {
    activeIndex: "activeIndex",
    fullScreen: "fullScreen",
    id: "id",
    value: "value",
    numVisible: "numVisible",
    responsiveOptions: "responsiveOptions",
    showItemNavigators: "showItemNavigators",
    showThumbnailNavigators: "showThumbnailNavigators",
    showItemNavigatorsOnHover: "showItemNavigatorsOnHover",
    changeItemOnIndicatorHover: "changeItemOnIndicatorHover",
    circular: "circular",
    autoPlay: "autoPlay",
    transitionInterval: "transitionInterval",
    showThumbnails: "showThumbnails",
    thumbnailsPosition: "thumbnailsPosition",
    verticalThumbnailViewPortHeight: "verticalThumbnailViewPortHeight",
    showIndicators: "showIndicators",
    showIndicatorsOnItem: "showIndicatorsOnItem",
    indicatorsPosition: "indicatorsPosition",
    baseZIndex: "baseZIndex",
    maskClass: "maskClass",
    containerClass: "containerClass",
    containerStyle: "containerStyle",
    showTransitionOptions: "showTransitionOptions",
    hideTransitionOptions: "hideTransitionOptions",
    visible: "visible"
  },
  outputs: {
    activeIndexChange: "activeIndexChange",
    visibleChange: "visibleChange"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
  decls: 3,
  vars: 2,
  consts: [[4, "ngIf", "ngIfElse"], ["windowed", ""], [3, "ngClass", "class", 4, "ngIf"], [3, "ngClass"], ["mask", ""], [3, "value", "activeIndex", "numVisible", "ngStyle", "maskHide", "activeItemChange", 4, "ngIf"], [3, "value", "activeIndex", "numVisible", "ngStyle", "maskHide", "activeItemChange"], [3, "value", "activeIndex", "numVisible", "activeItemChange"]],
  template: function Galleria_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, Galleria_div_0_Template, 2, 1, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Galleria_ng_template_1_Template, 1, 3, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    }

    if (rf & 2) {
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.fullScreen)("ngIfElse", _r1);
    }
  },
  directives: function () {
    return [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, GalleriaContent, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgStyle];
  },
  styles: [".p-galleria-content,.p-galleria-item-wrapper{display:flex;flex-direction:column}.p-galleria-item-wrapper{position:relative}.p-galleria-item-container{position:relative;display:flex;height:100%}.p-galleria-item-nav{position:absolute;top:50%;margin-top:-.5rem;display:inline-flex;justify-content:center;align-items:center;overflow:hidden}.p-galleria-item-prev{left:0;border-top-left-radius:0;border-bottom-left-radius:0}.p-galleria-item-next{right:0;border-top-right-radius:0;border-bottom-right-radius:0}.p-galleria-item{display:flex;justify-content:center;align-items:center;height:100%;width:100%}.p-galleria-item-nav-onhover .p-galleria-item-nav{pointer-events:none;opacity:0;transition:opacity .2s ease-in-out}.p-galleria-item-nav-onhover .p-galleria-item-wrapper:hover .p-galleria-item-nav{pointer-events:all;opacity:1}.p-galleria-item-nav-onhover .p-galleria-item-wrapper:hover .p-galleria-item-nav.p-disabled{pointer-events:none}.p-galleria-caption{position:absolute;bottom:0;left:0;width:100%}.p-galleria-thumbnail-wrapper{display:flex;flex-direction:column;overflow:auto;flex-shrink:0}.p-galleria-thumbnail-next,.p-galleria-thumbnail-prev{align-self:center;flex:0 0 auto;overflow:hidden;position:relative}.p-galleria-thumbnail-next,.p-galleria-thumbnail-next span,.p-galleria-thumbnail-prev,.p-galleria-thumbnail-prev span{display:flex;justify-content:center;align-items:center}.p-galleria-thumbnail-container{display:flex;flex-direction:row}.p-galleria-thumbnail-items-container{overflow:hidden;width:100%}.p-galleria-thumbnail-items{display:flex}.p-galleria-thumbnail-item{overflow:auto;display:flex;align-items:center;justify-content:center;cursor:pointer;opacity:.5}.p-galleria-thumbnail-item:hover{opacity:1;transition:opacity .3s}.p-galleria-thumbnail-item-current{opacity:1}.p-galleria-thumbnails-left .p-galleria-content,.p-galleria-thumbnails-left .p-galleria-item-wrapper,.p-galleria-thumbnails-right .p-galleria-content,.p-galleria-thumbnails-right .p-galleria-item-wrapper{flex-direction:row}.p-galleria-thumbnails-left p-galleriaitem,.p-galleria-thumbnails-top p-galleriaitem{order:2}.p-galleria-thumbnails-left p-galleriathumbnails,.p-galleria-thumbnails-top p-galleriathumbnails{order:1}.p-galleria-thumbnails-left .p-galleria-thumbnail-container,.p-galleria-thumbnails-right .p-galleria-thumbnail-container{flex-direction:column;flex-grow:1}.p-galleria-thumbnails-left .p-galleria-thumbnail-items,.p-galleria-thumbnails-right .p-galleria-thumbnail-items{flex-direction:column;height:100%}.p-galleria-thumbnails-left .p-galleria-thumbnail-wrapper,.p-galleria-thumbnails-right .p-galleria-thumbnail-wrapper{height:100%}.p-galleria-indicators{display:flex;align-items:center;justify-content:center}.p-galleria-indicator>button{display:inline-flex;align-items:center}.p-galleria-indicators-left .p-galleria-item-wrapper,.p-galleria-indicators-right .p-galleria-item-wrapper{flex-direction:row;align-items:center}.p-galleria-indicators-left .p-galleria-item-container,.p-galleria-indicators-top .p-galleria-item-container{order:2}.p-galleria-indicators-left .p-galleria-indicators,.p-galleria-indicators-top .p-galleria-indicators{order:1}.p-galleria-indicators-left .p-galleria-indicators,.p-galleria-indicators-right .p-galleria-indicators{flex-direction:column}.p-galleria-indicator-onitem .p-galleria-indicators{position:absolute;display:flex;z-index:1}.p-galleria-indicator-onitem.p-galleria-indicators-top .p-galleria-indicators{top:0;left:0;width:100%;align-items:flex-start}.p-galleria-indicator-onitem.p-galleria-indicators-right .p-galleria-indicators{right:0;top:0;height:100%;align-items:flex-end}.p-galleria-indicator-onitem.p-galleria-indicators-bottom .p-galleria-indicators{bottom:0;left:0;width:100%;align-items:flex-end}.p-galleria-indicator-onitem.p-galleria-indicators-left .p-galleria-indicators{left:0;top:0;height:100%;align-items:flex-start}.p-galleria-mask{position:fixed;left:0;width:100%;height:100%;background-color:transparent;transition-property:background-color}.p-galleria-close,.p-galleria-mask{top:0;display:flex;align-items:center;justify-content:center}.p-galleria-close{position:absolute;right:0;overflow:hidden}.p-galleria-mask .p-galleria-item-nav{position:fixed;top:50%;margin-top:-.5rem}.p-galleria-mask.p-galleria-mask-leave{background-color:transparent}.p-items-hidden .p-galleria-thumbnail-item{visibility:hidden}.p-items-hidden .p-galleria-thumbnail-item.p-galleria-thumbnail-item-active{visibility:visible}"],
  encapsulation: 2,
  data: {
    animation: [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.trigger)('animation', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.transition)('void => visible', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.style)({
      transform: 'scale(0.7)',
      opacity: 0
    }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.animate)('{{showTransitionParams}}')]), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.transition)('visible => void', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.animate)('{{hideTransitionParams}}', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.style)({
      transform: 'scale(0.7)',
      opacity: 0
    }))])])]
  },
  changeDetection: 0
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Galleria, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'p-galleria',
      template: `
        <div *ngIf="fullScreen;else windowed">
            <div *ngIf="maskVisible" #mask [ngClass]="{'p-galleria-mask p-component-overlay p-component-overlay-enter':true, 'p-galleria-visible': this.visible}" [class]="maskClass">
                <p-galleriaContent *ngIf="visible" [@animation]="{value: 'visible', params: {showTransitionParams: showTransitionOptions, hideTransitionParams: hideTransitionOptions}}" (@animation.start)="onAnimationStart($event)" (@animation.done)="onAnimationEnd($event)"
                    [value]="value" [activeIndex]="activeIndex" [numVisible]="numVisible" (maskHide)="onMaskHide()" (activeItemChange)="onActiveItemChange($event)" [ngStyle]="containerStyle"></p-galleriaContent>
            </div>
        </div>

        <ng-template #windowed>
            <p-galleriaContent [value]="value" [activeIndex]="activeIndex" [numVisible]="numVisible" (activeItemChange)="onActiveItemChange($event)"></p-galleriaContent>
        </ng-template>
    `,
      animations: [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.trigger)('animation', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.transition)('void => visible', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.style)({
        transform: 'scale(0.7)',
        opacity: 0
      }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.animate)('{{showTransitionParams}}')]), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.transition)('visible => void', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.animate)('{{hideTransitionParams}}', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.style)({
        transform: 'scale(0.7)',
        opacity: 0
      }))])])],
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      styleUrls: ['./galleria.css'],
      host: {
        'class': 'p-element'
      }
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }, {
      type: primeng_api__WEBPACK_IMPORTED_MODULE_3__.PrimeNGConfig
    }];
  }, {
    activeIndex: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    fullScreen: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    id: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    value: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    numVisible: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    responsiveOptions: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    showItemNavigators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    showThumbnailNavigators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    showItemNavigatorsOnHover: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    changeItemOnIndicatorHover: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    circular: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    autoPlay: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    transitionInterval: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    showThumbnails: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    thumbnailsPosition: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    verticalThumbnailViewPortHeight: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    showIndicators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    showIndicatorsOnItem: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    indicatorsPosition: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    baseZIndex: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    maskClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    containerClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    containerStyle: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    showTransitionOptions: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    hideTransitionOptions: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    mask: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['mask']
    }],
    visible: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    activeIndexChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    visibleChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    templates: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren,
      args: [primeng_api__WEBPACK_IMPORTED_MODULE_3__.PrimeTemplate]
    }]
  });
})();

class GalleriaContent {
  constructor(galleria, cd) {
    this.galleria = galleria;
    this.cd = cd;
    this.value = [];
    this.maskHide = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.activeItemChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.id = this.galleria.id || (0,primeng_utils__WEBPACK_IMPORTED_MODULE_2__.UniqueComponentId)();
    this.slideShowActicve = false;
    this._activeIndex = 0;
    this.slideShowActive = true;
  }

  get activeIndex() {
    return this._activeIndex;
  }

  set activeIndex(activeIndex) {
    this._activeIndex = activeIndex;
  }

  galleriaClass() {
    const thumbnailsPosClass = this.galleria.showThumbnails && this.getPositionClass('p-galleria-thumbnails', this.galleria.thumbnailsPosition);
    const indicatorPosClass = this.galleria.showIndicators && this.getPositionClass('p-galleria-indicators', this.galleria.indicatorsPosition);
    return (this.galleria.containerClass ? this.galleria.containerClass + " " : '') + (thumbnailsPosClass ? thumbnailsPosClass + " " : '') + (indicatorPosClass ? indicatorPosClass + " " : '');
  }

  startSlideShow() {
    this.interval = setInterval(() => {
      let activeIndex = this.galleria.circular && this.value.length - 1 === this.activeIndex ? 0 : this.activeIndex + 1;
      this.onActiveIndexChange(activeIndex);
      this.activeIndex = activeIndex;
    }, this.galleria.transitionInterval);
    this.slideShowActive = true;
  }

  stopSlideShow() {
    if (this.interval) {
      clearInterval(this.interval);
    }

    this.slideShowActive = false;
  }

  getPositionClass(preClassName, position) {
    const positions = ['top', 'left', 'bottom', 'right'];
    const pos = positions.find(item => item === position);
    return pos ? `${preClassName}-${pos}` : '';
  }

  isVertical() {
    return this.galleria.thumbnailsPosition === 'left' || this.galleria.thumbnailsPosition === 'right';
  }

  onActiveIndexChange(index) {
    if (this.activeIndex !== index) {
      this.activeIndex = index;
      this.activeItemChange.emit(this.activeIndex);
    }
  }

}

GalleriaContent.ɵfac = function GalleriaContent_Factory(t) {
  return new (t || GalleriaContent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](Galleria), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef));
};

GalleriaContent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: GalleriaContent,
  selectors: [["p-galleriaContent"]],
  inputs: {
    activeIndex: "activeIndex",
    value: "value",
    numVisible: "numVisible"
  },
  outputs: {
    maskHide: "maskHide",
    activeItemChange: "activeItemChange"
  },
  decls: 1,
  vars: 1,
  consts: [[3, "ngClass", "ngStyle", "class", 4, "ngIf"], [3, "ngClass", "ngStyle"], ["type", "button", "class", "p-galleria-close p-link", "pRipple", "", 3, "click", 4, "ngIf"], ["class", "p-galleria-header", 4, "ngIf"], [1, "p-galleria-content"], [3, "value", "activeIndex", "circular", "templates", "showIndicators", "changeItemOnIndicatorHover", "indicatorFacet", "captionFacet", "showItemNavigators", "autoPlay", "slideShowActive", "onActiveIndexChange", "startSlideShow", "stopSlideShow"], [3, "containerId", "value", "activeIndex", "templates", "numVisible", "responsiveOptions", "circular", "isVertical", "contentHeight", "showThumbnailNavigators", "slideShowActive", "onActiveIndexChange", "stopSlideShow", 4, "ngIf"], ["class", "p-galleria-footer", 4, "ngIf"], ["type", "button", "pRipple", "", 1, "p-galleria-close", "p-link", 3, "click"], [1, "p-galleria-close-icon", "pi", "pi-times"], [1, "p-galleria-header"], ["type", "header", 3, "templates"], [3, "containerId", "value", "activeIndex", "templates", "numVisible", "responsiveOptions", "circular", "isVertical", "contentHeight", "showThumbnailNavigators", "slideShowActive", "onActiveIndexChange", "stopSlideShow"], [1, "p-galleria-footer"], ["type", "footer", 3, "templates"]],
  template: function GalleriaContent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, GalleriaContent_div_0_Template, 7, 25, "div", 0);
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.value && ctx.value.length > 0);
    }
  },
  directives: function () {
    return [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgStyle, GalleriaItem, primeng_ripple__WEBPACK_IMPORTED_MODULE_6__.Ripple, GalleriaItemSlot, GalleriaThumbnails];
  },
  encapsulation: 2,
  changeDetection: 0
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GalleriaContent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'p-galleriaContent',
      template: `
        <div [attr.id]="id" *ngIf="value && value.length > 0" [ngClass]="{'p-galleria p-component': true, 'p-galleria-fullscreen': this.galleria.fullScreen,
            'p-galleria-indicator-onitem': this.galleria.showIndicatorsOnItem, 'p-galleria-item-nav-onhover': this.galleria.showItemNavigatorsOnHover && !this.galleria.fullScreen}"
            [ngStyle]="!galleria.fullScreen ? galleria.containerStyle : {}" [class]="galleriaClass()">
            <button *ngIf="galleria.fullScreen" type="button" class="p-galleria-close p-link" (click)="maskHide.emit()" pRipple>
                <span class="p-galleria-close-icon pi pi-times"></span>
            </button>
            <div *ngIf="galleria.templates && galleria.headerFacet" class="p-galleria-header">
                <p-galleriaItemSlot type="header" [templates]="galleria.templates"></p-galleriaItemSlot>
            </div>
            <div class="p-galleria-content">
                <p-galleriaItem [value]="value" [activeIndex]="activeIndex" [circular]="galleria.circular" [templates]="galleria.templates" (onActiveIndexChange)="onActiveIndexChange($event)"
                    [showIndicators]="galleria.showIndicators" [changeItemOnIndicatorHover]="galleria.changeItemOnIndicatorHover" [indicatorFacet]="galleria.indicatorFacet"
                    [captionFacet]="galleria.captionFacet" [showItemNavigators]="galleria.showItemNavigators" [autoPlay]="galleria.autoPlay" [slideShowActive]="slideShowActive"
                    (startSlideShow)="startSlideShow()" (stopSlideShow)="stopSlideShow()"></p-galleriaItem>

                <p-galleriaThumbnails *ngIf="galleria.showThumbnails" [containerId]="id" [value]="value" (onActiveIndexChange)="onActiveIndexChange($event)" [activeIndex]="activeIndex" [templates]="galleria.templates"
                    [numVisible]="numVisible" [responsiveOptions]="galleria.responsiveOptions" [circular]="galleria.circular"
                    [isVertical]="isVertical()" [contentHeight]="galleria.verticalThumbnailViewPortHeight" [showThumbnailNavigators]="galleria.showThumbnailNavigators"
                    [slideShowActive]="slideShowActive" (stopSlideShow)="stopSlideShow()"></p-galleriaThumbnails>
            </div>
            <div *ngIf="galleria.templates && galleria.footerFacet" class="p-galleria-footer">
                <p-galleriaItemSlot type="footer" [templates]="galleria.templates"></p-galleriaItemSlot>
            </div>
        </div>
    `,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush
    }]
  }], function () {
    return [{
      type: Galleria
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }];
  }, {
    activeIndex: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    value: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    numVisible: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    maskHide: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    activeItemChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }]
  });
})();

class GalleriaItemSlot {
  get item() {
    return this._item;
  }

  set item(item) {
    this._item = item;

    if (this.templates) {
      this.templates.forEach(item => {
        if (item.getType() === this.type) {
          switch (this.type) {
            case 'item':
            case 'caption':
            case 'thumbnail':
              this.context = {
                $implicit: this.item
              };
              this.contentTemplate = item.template;
              break;
          }
        }
      });
    }
  }

  ngAfterContentInit() {
    this.templates.forEach(item => {
      if (item.getType() === this.type) {
        switch (this.type) {
          case 'item':
          case 'caption':
          case 'thumbnail':
            this.context = {
              $implicit: this.item
            };
            this.contentTemplate = item.template;
            break;

          case 'indicator':
            this.context = {
              $implicit: this.index
            };
            this.contentTemplate = item.template;
            break;

          default:
            this.context = {};
            this.contentTemplate = item.template;
            break;
        }
      }
    });
  }

}

GalleriaItemSlot.ɵfac = function GalleriaItemSlot_Factory(t) {
  return new (t || GalleriaItemSlot)();
};

GalleriaItemSlot.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: GalleriaItemSlot,
  selectors: [["p-galleriaItemSlot"]],
  inputs: {
    templates: "templates",
    index: "index",
    item: "item",
    type: "type"
  },
  decls: 1,
  vars: 1,
  consts: [[4, "ngIf"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"]],
  template: function GalleriaItemSlot_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, GalleriaItemSlot_ng_container_0_Template, 2, 2, "ng-container", 0);
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.contentTemplate);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgTemplateOutlet],
  encapsulation: 2,
  changeDetection: 0
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GalleriaItemSlot, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'p-galleriaItemSlot',
      template: `
        <ng-container *ngIf="contentTemplate">
            <ng-container *ngTemplateOutlet="contentTemplate; context: context"></ng-container>
        </ng-container>
    `,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush
    }]
  }], null, {
    templates: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    index: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    item: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    type: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();

class GalleriaItem {
  constructor() {
    this.circular = false;
    this.showItemNavigators = false;
    this.showIndicators = true;
    this.slideShowActive = true;
    this.changeItemOnIndicatorHover = true;
    this.autoPlay = false;
    this.startSlideShow = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.stopSlideShow = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.onActiveIndexChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this._activeIndex = 0;
  }

  get activeIndex() {
    return this._activeIndex;
  }

  set activeIndex(activeIndex) {
    this._activeIndex = activeIndex;
    this.activeItem = this.value[this._activeIndex];
  }

  ngOnInit() {
    if (this.autoPlay) {
      this.startSlideShow.emit();
    }
  }

  next() {
    let nextItemIndex = this.activeIndex + 1;
    let activeIndex = this.circular && this.value.length - 1 === this.activeIndex ? 0 : nextItemIndex;
    this.onActiveIndexChange.emit(activeIndex);
  }

  prev() {
    let prevItemIndex = this.activeIndex !== 0 ? this.activeIndex - 1 : 0;
    let activeIndex = this.circular && this.activeIndex === 0 ? this.value.length - 1 : prevItemIndex;
    this.onActiveIndexChange.emit(activeIndex);
  }

  stopTheSlideShow() {
    if (this.slideShowActive && this.stopSlideShow) {
      this.stopSlideShow.emit();
    }
  }

  navForward(e) {
    this.stopTheSlideShow();
    this.next();

    if (e && e.cancelable) {
      e.preventDefault();
    }
  }

  navBackward(e) {
    this.stopTheSlideShow();
    this.prev();

    if (e && e.cancelable) {
      e.preventDefault();
    }
  }

  onIndicatorClick(index) {
    this.stopTheSlideShow();
    this.onActiveIndexChange.emit(index);
  }

  onIndicatorMouseEnter(index) {
    if (this.changeItemOnIndicatorHover) {
      this.stopTheSlideShow();
      this.onActiveIndexChange.emit(index);
    }
  }

  onIndicatorKeyDown(index) {
    this.stopTheSlideShow();
    this.onActiveIndexChange.emit(index);
  }

  isNavForwardDisabled() {
    return !this.circular && this.activeIndex === this.value.length - 1;
  }

  isNavBackwardDisabled() {
    return !this.circular && this.activeIndex === 0;
  }

  isIndicatorItemActive(index) {
    return this.activeIndex === index;
  }

}

GalleriaItem.ɵfac = function GalleriaItem_Factory(t) {
  return new (t || GalleriaItem)();
};

GalleriaItem.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: GalleriaItem,
  selectors: [["p-galleriaItem"]],
  inputs: {
    circular: "circular",
    value: "value",
    showItemNavigators: "showItemNavigators",
    showIndicators: "showIndicators",
    slideShowActive: "slideShowActive",
    changeItemOnIndicatorHover: "changeItemOnIndicatorHover",
    autoPlay: "autoPlay",
    templates: "templates",
    indicatorFacet: "indicatorFacet",
    captionFacet: "captionFacet",
    activeIndex: "activeIndex"
  },
  outputs: {
    startSlideShow: "startSlideShow",
    stopSlideShow: "stopSlideShow",
    onActiveIndexChange: "onActiveIndexChange"
  },
  decls: 7,
  vars: 6,
  consts: [[1, "p-galleria-item-wrapper"], [1, "p-galleria-item-container"], ["type", "button", "pRipple", "", 3, "ngClass", "disabled", "click", 4, "ngIf"], ["type", "item", 1, "p-galleria-item", 3, "item", "templates"], ["class", "p-galleria-caption", 4, "ngIf"], ["class", "p-galleria-indicators p-reset", 4, "ngIf"], ["type", "button", "pRipple", "", 3, "ngClass", "disabled", "click"], [1, "p-galleria-item-prev-icon", "pi", "pi-chevron-left"], [1, "p-galleria-item-next-icon", "pi", "pi-chevron-right"], [1, "p-galleria-caption"], ["type", "caption", 3, "item", "templates"], [1, "p-galleria-indicators", "p-reset"], ["tabindex", "0", 3, "ngClass", "click", "mouseenter", "keydown.enter", 4, "ngFor", "ngForOf"], ["tabindex", "0", 3, "ngClass", "click", "mouseenter", "keydown.enter"], ["type", "button", "tabIndex", "-1", "class", "p-link", 4, "ngIf"], ["type", "indicator", 3, "index", "templates"], ["type", "button", "tabIndex", "-1", 1, "p-link"]],
  template: function GalleriaItem_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, GalleriaItem_button_2_Template, 2, 4, "button", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "p-galleriaItemSlot", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, GalleriaItem_button_4_Template, 2, 4, "button", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, GalleriaItem_div_5_Template, 2, 2, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, GalleriaItem_ul_6_Template, 2, 1, "ul", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showItemNavigators);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("item", ctx.activeItem)("templates", ctx.templates);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showItemNavigators);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.captionFacet);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showIndicators);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, GalleriaItemSlot, primeng_ripple__WEBPACK_IMPORTED_MODULE_6__.Ripple, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf],
  encapsulation: 2,
  changeDetection: 0
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GalleriaItem, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'p-galleriaItem',
      template: `
        <div class="p-galleria-item-wrapper">
            <div class="p-galleria-item-container">
                <button *ngIf="showItemNavigators" type="button" [ngClass]="{'p-galleria-item-prev p-galleria-item-nav p-link': true, 'p-disabled': this.isNavBackwardDisabled()}" (click)="navBackward($event)" [disabled]="isNavBackwardDisabled()" pRipple>
                    <span class="p-galleria-item-prev-icon pi pi-chevron-left"></span>
                </button>
                <p-galleriaItemSlot type="item" [item]="activeItem" [templates]="templates" class="p-galleria-item"></p-galleriaItemSlot>
                <button *ngIf="showItemNavigators" type="button" [ngClass]="{'p-galleria-item-next p-galleria-item-nav p-link': true,'p-disabled': this.isNavForwardDisabled()}" (click)="navForward($event)"  [disabled]="isNavForwardDisabled()" pRipple>
                    <span class="p-galleria-item-next-icon pi pi-chevron-right"></span>
                </button>
                <div class="p-galleria-caption" *ngIf="captionFacet">
                    <p-galleriaItemSlot type="caption" [item]="activeItem" [templates]="templates"></p-galleriaItemSlot>
                </div>
            </div>
            <ul *ngIf="showIndicators" class="p-galleria-indicators p-reset">
                <li *ngFor="let item of value; let index = index;" tabindex="0"
                    (click)="onIndicatorClick(index)" (mouseenter)="onIndicatorMouseEnter(index)" (keydown.enter)="onIndicatorKeyDown(index)"
                    [ngClass]="{'p-galleria-indicator': true,'p-highlight': isIndicatorItemActive(index)}">
                    <button type="button" tabIndex="-1" class="p-link" *ngIf="!indicatorFacet">
                    </button>
                    <p-galleriaItemSlot type="indicator" [index]="index" [templates]="templates"></p-galleriaItemSlot>
                </li>
            </ul>
        </div>
    `,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush
    }]
  }], null, {
    circular: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    value: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    showItemNavigators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    showIndicators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    slideShowActive: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    changeItemOnIndicatorHover: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    autoPlay: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    templates: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    indicatorFacet: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    captionFacet: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    startSlideShow: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    stopSlideShow: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onActiveIndexChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    activeIndex: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();

class GalleriaThumbnails {
  constructor(cd) {
    this.cd = cd;
    this.isVertical = false;
    this.slideShowActive = false;
    this.circular = false;
    this.contentHeight = "300px";
    this.showThumbnailNavigators = true;
    this.onActiveIndexChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.stopSlideShow = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.startPos = null;
    this.thumbnailsStyle = null;
    this.sortedResponsiveOptions = null;
    this.totalShiftedItems = 0;
    this.page = 0;
    this._numVisible = 0;
    this.d_numVisible = 0;
    this._oldNumVisible = 0;
    this._activeIndex = 0;
    this._oldactiveIndex = 0;
  }

  get numVisible() {
    return this._numVisible;
  }

  set numVisible(numVisible) {
    this._numVisible = numVisible;
    this._oldNumVisible = this.d_numVisible;
    this.d_numVisible = numVisible;
  }

  get activeIndex() {
    return this._activeIndex;
  }

  set activeIndex(activeIndex) {
    this._oldactiveIndex = this._activeIndex;
    this._activeIndex = activeIndex;
  }

  ngOnInit() {
    this.createStyle();

    if (this.responsiveOptions) {
      this.bindDocumentListeners();
    }
  }

  ngAfterContentChecked() {
    let totalShiftedItems = this.totalShiftedItems;

    if ((this._oldNumVisible !== this.d_numVisible || this._oldactiveIndex !== this._activeIndex) && this.itemsContainer) {
      if (this._activeIndex <= this.getMedianItemIndex()) {
        totalShiftedItems = 0;
      } else if (this.value.length - this.d_numVisible + this.getMedianItemIndex() < this._activeIndex) {
        totalShiftedItems = this.d_numVisible - this.value.length;
      } else if (this.value.length - this.d_numVisible < this._activeIndex && this.d_numVisible % 2 === 0) {
        totalShiftedItems = this._activeIndex * -1 + this.getMedianItemIndex() + 1;
      } else {
        totalShiftedItems = this._activeIndex * -1 + this.getMedianItemIndex();
      }

      if (totalShiftedItems !== this.totalShiftedItems) {
        this.totalShiftedItems = totalShiftedItems;
      }

      if (this.itemsContainer && this.itemsContainer.nativeElement) {
        this.itemsContainer.nativeElement.style.transform = this.isVertical ? `translate3d(0, ${totalShiftedItems * (100 / this.d_numVisible)}%, 0)` : `translate3d(${totalShiftedItems * (100 / this.d_numVisible)}%, 0, 0)`;
      }

      if (this._oldactiveIndex !== this._activeIndex) {
        primeng_dom__WEBPACK_IMPORTED_MODULE_1__.DomHandler.removeClass(this.itemsContainer.nativeElement, 'p-items-hidden');
        this.itemsContainer.nativeElement.style.transition = 'transform 500ms ease 0s';
      }

      this._oldactiveIndex = this._activeIndex;
      this._oldNumVisible = this.d_numVisible;
    }
  }

  ngAfterViewInit() {
    this.calculatePosition();
  }

  createStyle() {
    if (!this.thumbnailsStyle) {
      this.thumbnailsStyle = document.createElement('style');
      this.thumbnailsStyle.type = 'text/css';
      document.body.appendChild(this.thumbnailsStyle);
    }

    let innerHTML = `
            #${this.containerId} .p-galleria-thumbnail-item {
                flex: 1 0 ${100 / this.d_numVisible}%
            }
        `;

    if (this.responsiveOptions) {
      this.sortedResponsiveOptions = [...this.responsiveOptions];
      this.sortedResponsiveOptions.sort((data1, data2) => {
        const value1 = data1.breakpoint;
        const value2 = data2.breakpoint;
        let result = null;
        if (value1 == null && value2 != null) result = -1;else if (value1 != null && value2 == null) result = 1;else if (value1 == null && value2 == null) result = 0;else if (typeof value1 === 'string' && typeof value2 === 'string') result = value1.localeCompare(value2, undefined, {
          numeric: true
        });else result = value1 < value2 ? -1 : value1 > value2 ? 1 : 0;
        return -1 * result;
      });

      for (let i = 0; i < this.sortedResponsiveOptions.length; i++) {
        let res = this.sortedResponsiveOptions[i];
        innerHTML += `
                    @media screen and (max-width: ${res.breakpoint}) {
                        #${this.containerId} .p-galleria-thumbnail-item {
                            flex: 1 0 ${100 / res.numVisible}%
                        }
                    }
                `;
      }
    }

    this.thumbnailsStyle.innerHTML = innerHTML;
  }

  calculatePosition() {
    if (this.itemsContainer && this.sortedResponsiveOptions) {
      let windowWidth = window.innerWidth;
      let matchedResponsiveData = {
        numVisible: this._numVisible
      };

      for (let i = 0; i < this.sortedResponsiveOptions.length; i++) {
        let res = this.sortedResponsiveOptions[i];

        if (parseInt(res.breakpoint, 10) >= windowWidth) {
          matchedResponsiveData = res;
        }
      }

      if (this.d_numVisible !== matchedResponsiveData.numVisible) {
        this.d_numVisible = matchedResponsiveData.numVisible;
        this.cd.markForCheck();
      }
    }
  }

  getTabIndex(index) {
    return this.isItemActive(index) ? 0 : null;
  }

  navForward(e) {
    this.stopTheSlideShow();
    let nextItemIndex = this._activeIndex + 1;

    if (nextItemIndex + this.totalShiftedItems > this.getMedianItemIndex() && (-1 * this.totalShiftedItems < this.getTotalPageNumber() - 1 || this.circular)) {
      this.step(-1);
    }

    let activeIndex = this.circular && this.value.length - 1 === this._activeIndex ? 0 : nextItemIndex;
    this.onActiveIndexChange.emit(activeIndex);

    if (e.cancelable) {
      e.preventDefault();
    }
  }

  navBackward(e) {
    this.stopTheSlideShow();
    let prevItemIndex = this._activeIndex !== 0 ? this._activeIndex - 1 : 0;
    let diff = prevItemIndex + this.totalShiftedItems;

    if (this.d_numVisible - diff - 1 > this.getMedianItemIndex() && (-1 * this.totalShiftedItems !== 0 || this.circular)) {
      this.step(1);
    }

    let activeIndex = this.circular && this._activeIndex === 0 ? this.value.length - 1 : prevItemIndex;
    this.onActiveIndexChange.emit(activeIndex);

    if (e.cancelable) {
      e.preventDefault();
    }
  }

  onItemClick(index) {
    this.stopTheSlideShow();
    let selectedItemIndex = index;

    if (selectedItemIndex !== this._activeIndex) {
      const diff = selectedItemIndex + this.totalShiftedItems;
      let dir = 0;

      if (selectedItemIndex < this._activeIndex) {
        dir = this.d_numVisible - diff - 1 - this.getMedianItemIndex();

        if (dir > 0 && -1 * this.totalShiftedItems !== 0) {
          this.step(dir);
        }
      } else {
        dir = this.getMedianItemIndex() - diff;

        if (dir < 0 && -1 * this.totalShiftedItems < this.getTotalPageNumber() - 1) {
          this.step(dir);
        }
      }

      this.activeIndex = selectedItemIndex;
      this.onActiveIndexChange.emit(this.activeIndex);
    }
  }

  step(dir) {
    let totalShiftedItems = this.totalShiftedItems + dir;

    if (dir < 0 && -1 * totalShiftedItems + this.d_numVisible > this.value.length - 1) {
      totalShiftedItems = this.d_numVisible - this.value.length;
    } else if (dir > 0 && totalShiftedItems > 0) {
      totalShiftedItems = 0;
    }

    if (this.circular) {
      if (dir < 0 && this.value.length - 1 === this._activeIndex) {
        totalShiftedItems = 0;
      } else if (dir > 0 && this._activeIndex === 0) {
        totalShiftedItems = this.d_numVisible - this.value.length;
      }
    }

    if (this.itemsContainer) {
      primeng_dom__WEBPACK_IMPORTED_MODULE_1__.DomHandler.removeClass(this.itemsContainer.nativeElement, 'p-items-hidden');
      this.itemsContainer.nativeElement.style.transform = this.isVertical ? `translate3d(0, ${totalShiftedItems * (100 / this.d_numVisible)}%, 0)` : `translate3d(${totalShiftedItems * (100 / this.d_numVisible)}%, 0, 0)`;
      this.itemsContainer.nativeElement.style.transition = 'transform 500ms ease 0s';
    }

    this.totalShiftedItems = totalShiftedItems;
  }

  stopTheSlideShow() {
    if (this.slideShowActive && this.stopSlideShow) {
      this.stopSlideShow.emit();
    }
  }

  changePageOnTouch(e, diff) {
    if (diff < 0) {
      // left
      this.navForward(e);
    } else {
      // right
      this.navBackward(e);
    }
  }

  getTotalPageNumber() {
    return this.value.length > this.d_numVisible ? this.value.length - this.d_numVisible + 1 : 0;
  }

  getMedianItemIndex() {
    let index = Math.floor(this.d_numVisible / 2);
    return this.d_numVisible % 2 ? index : index - 1;
  }

  onTransitionEnd() {
    if (this.itemsContainer && this.itemsContainer.nativeElement) {
      primeng_dom__WEBPACK_IMPORTED_MODULE_1__.DomHandler.addClass(this.itemsContainer.nativeElement, 'p-items-hidden');
      this.itemsContainer.nativeElement.style.transition = '';
    }
  }

  onTouchEnd(e) {
    let touchobj = e.changedTouches[0];

    if (this.isVertical) {
      this.changePageOnTouch(e, touchobj.pageY - this.startPos.y);
    } else {
      this.changePageOnTouch(e, touchobj.pageX - this.startPos.x);
    }
  }

  onTouchMove(e) {
    if (e.cancelable) {
      e.preventDefault();
    }
  }

  onTouchStart(e) {
    let touchobj = e.changedTouches[0];
    this.startPos = {
      x: touchobj.pageX,
      y: touchobj.pageY
    };
  }

  isNavBackwardDisabled() {
    return !this.circular && this._activeIndex === 0 || this.value.length <= this.d_numVisible;
  }

  isNavForwardDisabled() {
    return !this.circular && this._activeIndex === this.value.length - 1 || this.value.length <= this.d_numVisible;
  }

  firstItemAciveIndex() {
    return this.totalShiftedItems * -1;
  }

  lastItemActiveIndex() {
    return this.firstItemAciveIndex() + this.d_numVisible - 1;
  }

  isItemActive(index) {
    return this.firstItemAciveIndex() <= index && this.lastItemActiveIndex() >= index;
  }

  bindDocumentListeners() {
    if (!this.documentResizeListener) {
      this.documentResizeListener = () => {
        this.calculatePosition();
      };

      window.addEventListener('resize', this.documentResizeListener);
    }
  }

  unbindDocumentListeners() {
    if (this.documentResizeListener) {
      window.removeEventListener('resize', this.documentResizeListener);
      this.documentResizeListener = null;
    }
  }

  ngOnDestroy() {
    if (this.responsiveOptions) {
      this.unbindDocumentListeners();
    }

    if (this.thumbnailsStyle) {
      this.thumbnailsStyle.parentNode.removeChild(this.thumbnailsStyle);
    }
  }

}

GalleriaThumbnails.ɵfac = function GalleriaThumbnails_Factory(t) {
  return new (t || GalleriaThumbnails)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef));
};

GalleriaThumbnails.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: GalleriaThumbnails,
  selectors: [["p-galleriaThumbnails"]],
  viewQuery: function GalleriaThumbnails_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c9, 5);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.itemsContainer = _t.first);
    }
  },
  inputs: {
    containerId: "containerId",
    value: "value",
    isVertical: "isVertical",
    slideShowActive: "slideShowActive",
    circular: "circular",
    responsiveOptions: "responsiveOptions",
    contentHeight: "contentHeight",
    showThumbnailNavigators: "showThumbnailNavigators",
    templates: "templates",
    numVisible: "numVisible",
    activeIndex: "activeIndex"
  },
  outputs: {
    onActiveIndexChange: "onActiveIndexChange",
    stopSlideShow: "stopSlideShow"
  },
  decls: 8,
  vars: 6,
  consts: [[1, "p-galleria-thumbnail-wrapper"], [1, "p-galleria-thumbnail-container"], ["type", "button", "pRipple", "", 3, "ngClass", "disabled", "click", 4, "ngIf"], [1, "p-galleria-thumbnail-items-container", 3, "ngStyle"], [1, "p-galleria-thumbnail-items", 3, "transitionend", "touchstart", "touchmove", "touchend"], ["itemsContainer", ""], [3, "ngClass", 4, "ngFor", "ngForOf"], ["type", "button", "pRipple", "", 3, "ngClass", "disabled", "click"], [3, "ngClass"], [1, "p-galleria-thumbnail-item-content", 3, "click", "keydown.enter"], ["type", "thumbnail", 3, "item", "templates"]],
  template: function GalleriaThumbnails_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, GalleriaThumbnails_button_2_Template, 2, 8, "button", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("transitionend", function GalleriaThumbnails_Template_div_transitionend_4_listener() {
        return ctx.onTransitionEnd();
      })("touchstart", function GalleriaThumbnails_Template_div_touchstart_4_listener($event) {
        return ctx.onTouchStart($event);
      })("touchmove", function GalleriaThumbnails_Template_div_touchmove_4_listener($event) {
        return ctx.onTouchMove($event);
      })("touchend", function GalleriaThumbnails_Template_div_touchend_4_listener($event) {
        return ctx.onTouchEnd($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, GalleriaThumbnails_div_6_Template, 3, 9, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, GalleriaThumbnails_button_7_Template, 2, 8, "button", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showThumbnailNavigators);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c15, ctx.isVertical ? ctx.contentHeight : ""));
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.value);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showThumbnailNavigators);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgStyle, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, primeng_ripple__WEBPACK_IMPORTED_MODULE_6__.Ripple, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, GalleriaItemSlot],
  encapsulation: 2,
  changeDetection: 0
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GalleriaThumbnails, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'p-galleriaThumbnails',
      template: `
        <div class="p-galleria-thumbnail-wrapper">
            <div class="p-galleria-thumbnail-container">
                <button *ngIf="showThumbnailNavigators" type="button" [ngClass]="{'p-galleria-thumbnail-prev p-link': true, 'p-disabled': this.isNavBackwardDisabled()}" (click)="navBackward($event)" [disabled]="isNavBackwardDisabled()" pRipple>
                    <span [ngClass]="{'p-galleria-thumbnail-prev-icon pi': true, 'pi-chevron-left': !this.isVertical, 'pi-chevron-up': this.isVertical}"></span>
                </button>
                <div class="p-galleria-thumbnail-items-container" [ngStyle]="{'height': isVertical ? contentHeight : ''}">
                    <div #itemsContainer class="p-galleria-thumbnail-items" (transitionend)="onTransitionEnd()"
                        (touchstart)="onTouchStart($event)" (touchmove)="onTouchMove($event)" (touchend)="onTouchEnd($event)">
                        <div *ngFor="let item of value; let index = index;" [ngClass]="{'p-galleria-thumbnail-item': true, 'p-galleria-thumbnail-item-current': activeIndex === index, 'p-galleria-thumbnail-item-active': isItemActive(index),
                            'p-galleria-thumbnail-item-start': firstItemAciveIndex() === index, 'p-galleria-thumbnail-item-end': lastItemActiveIndex() === index }">
                            <div class="p-galleria-thumbnail-item-content" [attr.tabindex]="getTabIndex(index)" (click)="onItemClick(index)" (keydown.enter)="onItemClick(index)">
                                <p-galleriaItemSlot type="thumbnail" [item]="item" [templates]="templates"></p-galleriaItemSlot>
                            </div>
                        </div>
                    </div>
                </div>
                <button *ngIf="showThumbnailNavigators" type="button" [ngClass]="{'p-galleria-thumbnail-next p-link': true, 'p-disabled': this.isNavForwardDisabled()}" (click)="navForward($event)" [disabled]="isNavForwardDisabled()" pRipple>
                    <span [ngClass]="{'p-galleria-thumbnail-next-icon pi': true, 'pi-chevron-right': !this.isVertical, 'pi-chevron-down': this.isVertical}"></span>
                </button>
            </div>
        </div>
    `,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }];
  }, {
    containerId: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    value: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    isVertical: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    slideShowActive: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    circular: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    responsiveOptions: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    contentHeight: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    showThumbnailNavigators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    templates: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    onActiveIndexChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    stopSlideShow: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    itemsContainer: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['itemsContainer']
    }],
    numVisible: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    activeIndex: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();

class GalleriaModule {}

GalleriaModule.ɵfac = function GalleriaModule_Factory(t) {
  return new (t || GalleriaModule)();
};

GalleriaModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: GalleriaModule,
  declarations: [Galleria, GalleriaContent, GalleriaItemSlot, GalleriaItem, GalleriaThumbnails],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, primeng_api__WEBPACK_IMPORTED_MODULE_3__.SharedModule, primeng_ripple__WEBPACK_IMPORTED_MODULE_6__.RippleModule],
  exports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, Galleria, GalleriaContent, GalleriaItemSlot, GalleriaItem, GalleriaThumbnails, primeng_api__WEBPACK_IMPORTED_MODULE_3__.SharedModule]
});
GalleriaModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, primeng_api__WEBPACK_IMPORTED_MODULE_3__.SharedModule, primeng_ripple__WEBPACK_IMPORTED_MODULE_6__.RippleModule], _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, primeng_api__WEBPACK_IMPORTED_MODULE_3__.SharedModule]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GalleriaModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, primeng_api__WEBPACK_IMPORTED_MODULE_3__.SharedModule, primeng_ripple__WEBPACK_IMPORTED_MODULE_6__.RippleModule],
      exports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, Galleria, GalleriaContent, GalleriaItemSlot, GalleriaItem, GalleriaThumbnails, primeng_api__WEBPACK_IMPORTED_MODULE_3__.SharedModule],
      declarations: [Galleria, GalleriaContent, GalleriaItemSlot, GalleriaItem, GalleriaThumbnails]
    }]
  }], null, null);
})();
/**
 * Generated bundle index. Do not edit.
 */


 //# sourceMappingURL=primeng-galleria.js.map

/***/ }),

/***/ 3170:
/*!********************************************************!*\
  !*** ./node_modules/primeng/fesm2015/primeng-image.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Image": () => (/* binding */ Image),
/* harmony export */   "ImageModule": () => (/* binding */ ImageModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6274);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/api */ 1388);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/animations */ 8638);
/* harmony import */ var primeng_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/dom */ 938);
/* harmony import */ var primeng_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/utils */ 3821);









const _c0 = ["mask"];

function Image_div_2_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}

function Image_div_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Image_div_2_ng_container_1_ng_container_1_Template, 1, 0, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r2.indicatorTemplate);
  }
}

function Image_div_2_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 8);
  }
}

function Image_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Image_div_2_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return ctx_r6.onImageClick();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Image_div_2_ng_container_1_Template, 2, 1, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, Image_div_2_ng_template_2_Template, 1, 0, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);

    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.indicatorTemplate)("ngIfElse", _r3);
  }
}

const _c1 = function (a0, a1) {
  return {
    showTransitionParams: a0,
    hideTransitionParams: a1
  };
};

const _c2 = function (a1) {
  return {
    value: "visible",
    params: a1
  };
};

function Image_div_3_div_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("@animation.start", function Image_div_3_div_13_Template_div_animation_animation_start_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return ctx_r10.onAnimationStart($event);
    })("@animation.done", function Image_div_3_div_13_Template_div_animation_animation_done_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return ctx_r12.onAnimationEnd($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "img", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Image_div_3_div_13_Template_img_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return ctx_r13.onPreviewImageClick();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@animation", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](3, _c1, ctx_r9.showTransitionOptions, ctx_r9.hideTransitionOptions)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx_r9.imagePreviewStyle());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("src", ctx_r9.src, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
  }
}

function Image_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Image_div_3_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15);
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return ctx_r14.onMaskClick();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Image_div_3_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15);
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return ctx_r16.rotateRight();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Image_div_3_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15);
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return ctx_r17.rotateLeft();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Image_div_3_Template_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15);
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return ctx_r18.zoomOut();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Image_div_3_Template_button_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15);
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return ctx_r19.zoomIn();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, Image_div_3_div_13_Template, 2, 8, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r1.zoomDisabled());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r1.zoomDisabled());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.previewVisible);
  }
}

class Image {
  constructor(config, cd) {
    this.config = config;
    this.cd = cd;
    this.preview = false;
    this.showTransitionOptions = '150ms cubic-bezier(0, 0, 0.2, 1)';
    this.hideTransitionOptions = '150ms cubic-bezier(0, 0, 0.2, 1)';
    this.onShow = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.onHide = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.maskVisible = false;
    this.previewVisible = false;
    this.rotate = 0;
    this.scale = 1;
    this.previewClick = false;
  }

  ngAfterContentInit() {
    this.templates.forEach(item => {
      switch (item.getType()) {
        case 'indicator':
          this.indicatorTemplate = item.template;
          break;

        default:
          this.indicatorTemplate = item.template;
          break;
      }
    });
  }

  onImageClick() {
    if (this.preview) {
      this.maskVisible = true;
      this.previewVisible = true;
    }
  }

  onMaskClick() {
    if (!this.previewClick) {
      this.previewVisible = false;
      this.rotate = 0;
      this.scale = 1;
    }

    this.previewClick = false;
  }

  onPreviewImageClick() {
    this.previewClick = true;
  }

  rotateRight() {
    this.rotate += 90;
    this.previewClick = true;
  }

  rotateLeft() {
    this.rotate -= 90;
    this.previewClick = true;
  }

  zoomIn() {
    this.scale = this.scale + 0.1;
    this.previewClick = true;
  }

  zoomOut() {
    this.scale = this.scale - 0.1;
    this.previewClick = true;
  }

  zoomDisabled() {
    return this.scale <= 0.5 || this.scale >= 1.5;
  }

  onAnimationStart(event) {
    switch (event.toState) {
      case 'visible':
        this.container = event.element;
        this.wrapper = this.container.parentElement;
        this.appendContainer();
        this.moveOnTop();
        break;

      case 'void':
        primeng_dom__WEBPACK_IMPORTED_MODULE_1__.DomHandler.addClass(this.wrapper, 'p-component-overlay-leave');
        break;
    }
  }

  onAnimationEnd(event) {
    switch (event.toState) {
      case 'void':
        primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ZIndexUtils.clear(this.container);
        this.maskVisible = false;
        this.container = null;
        this.wrapper = null;
        this.cd.markForCheck();
        this.onHide.emit({});
        break;

      case 'visible':
        this.onShow.emit({});
        break;
    }
  }

  moveOnTop() {
    primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ZIndexUtils.set('modal', this.container, this.config.zIndex.modal);
    this.wrapper.style.zIndex = String(parseInt(this.container.style.zIndex, 10) - 1);
  }

  appendContainer() {
    if (this.appendTo) {
      if (this.appendTo === 'body') document.body.appendChild(this.wrapper);else primeng_dom__WEBPACK_IMPORTED_MODULE_1__.DomHandler.appendChild(this.wrapper, this.appendTo);
    }
  }

  imagePreviewStyle() {
    return {
      transform: 'rotate(' + this.rotate + 'deg) scale(' + this.scale + ')'
    };
  }

  containerClass() {
    return {
      'p-image p-component': true,
      'p-image-preview-container': this.preview
    };
  }

}

Image.ɵfac = function Image_Factory(t) {
  return new (t || Image)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_3__.PrimeNGConfig), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef));
};

Image.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: Image,
  selectors: [["p-image"]],
  contentQueries: function Image_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, primeng_api__WEBPACK_IMPORTED_MODULE_3__.PrimeTemplate, 4);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.templates = _t);
    }
  },
  viewQuery: function Image_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 5);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.mask = _t.first);
    }
  },
  hostAttrs: [1, "p-element"],
  inputs: {
    imageClass: "imageClass",
    imageStyle: "imageStyle",
    styleClass: "styleClass",
    style: "style",
    src: "src",
    alt: "alt",
    width: "width",
    height: "height",
    appendTo: "appendTo",
    preview: "preview",
    showTransitionOptions: "showTransitionOptions",
    hideTransitionOptions: "hideTransitionOptions"
  },
  outputs: {
    onShow: "onShow",
    onHide: "onHide"
  },
  decls: 4,
  vars: 13,
  consts: [[3, "ngClass", "ngStyle"], [3, "ngStyle"], ["class", "p-image-preview-indicator", 3, "click", 4, "ngIf"], ["class", "p-image-mask p-component-overlay p-component-overlay-enter", 3, "click", 4, "ngIf"], [1, "p-image-preview-indicator", 3, "click"], [4, "ngIf", "ngIfElse"], ["defaultTemplate", ""], [4, "ngTemplateOutlet"], [1, "p-image-preview-icon", "pi", "pi-eye"], [1, "p-image-mask", "p-component-overlay", "p-component-overlay-enter", 3, "click"], ["mask", ""], [1, "p-image-toolbar"], ["type", "button", 1, "p-image-action", "p-link", 3, "click"], [1, "pi", "pi-refresh"], [1, "pi", "pi-undo"], ["type", "button", 1, "p-image-action", "p-link", 3, "disabled", "click"], [1, "pi", "pi-search-minus"], [1, "pi", "pi-search-plus"], ["type", "button", 1, "p-image-action", "p-link"], [1, "pi", "pi-times"], [4, "ngIf"], [1, "p-image-preview", 3, "ngStyle", "click"]],
  template: function Image_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, Image_div_2_Template, 4, 2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, Image_div_3_Template, 14, 3, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.styleClass);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.containerClass())("ngStyle", ctx.style);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.imageClass);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx.imageStyle);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("src", ctx.src, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", ctx.alt)("width", ctx.width)("height", ctx.height);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.preview);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.maskVisible);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgStyle, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgTemplateOutlet],
  styles: [".p-image-mask{display:flex;align-items:center;justify-content:center}.p-image-preview-container{position:relative;display:inline-block}.p-image-preview-indicator{position:absolute;left:0;top:0;width:100%;height:100%;display:flex;align-items:center;justify-content:center;opacity:0;transition:opacity .3s}.p-image-preview-icon{font-size:1.5rem}.p-image-preview-container:hover>.p-image-preview-indicator{opacity:1;cursor:pointer}.p-image-preview-container>img{cursor:pointer}.p-image-toolbar{position:absolute;top:0;right:0;display:flex}.p-image-action.p-link{display:flex;justify-content:center;align-items:center}.p-image-preview{transition:transform .15s;max-width:100vw;max-height:100vh}"],
  encapsulation: 2,
  data: {
    animation: [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.trigger)('animation', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.transition)('void => visible', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.style)({
      transform: 'scale(0.7)',
      opacity: 0
    }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.animate)('{{showTransitionParams}}')]), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.transition)('visible => void', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.animate)('{{hideTransitionParams}}', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.style)({
      transform: 'scale(0.7)',
      opacity: 0
    }))])])]
  },
  changeDetection: 0
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Image, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'p-image',
      template: `
        <span [ngClass]="containerClass()" [class]="styleClass" [ngStyle]="style">
            <img [attr.src]="src" [attr.alt]="alt" [attr.width]="width" [attr.height]="height" [ngStyle]="imageStyle" [class]="imageClass" />
            <div class="p-image-preview-indicator" *ngIf="preview" (click)="onImageClick()">
                <ng-container *ngIf="indicatorTemplate;else defaultTemplate">
                    <ng-container *ngTemplateOutlet="indicatorTemplate"></ng-container>
                </ng-container>
                <ng-template #defaultTemplate>
                    <i class="p-image-preview-icon pi pi-eye"></i>
                </ng-template>
            </div>
            <div #mask class="p-image-mask p-component-overlay p-component-overlay-enter" *ngIf="maskVisible" (click)="onMaskClick()">
                <div class="p-image-toolbar">
                    <button class="p-image-action p-link" (click)="rotateRight()" type="button">
                        <i class="pi pi-refresh"></i>
                    </button>
                    <button class="p-image-action p-link" (click)="rotateLeft()" type="button">
                        <i class="pi pi-undo"></i>
                    </button>
                    <button class="p-image-action p-link" (click)="zoomOut()" type="button" [disabled]="zoomDisabled()">
                        <i class="pi pi-search-minus"></i>
                    </button>
                    <button class="p-image-action p-link" (click)="zoomIn()" type="button" [disabled]="zoomDisabled()">
                        <i class="pi pi-search-plus"></i>
                    </button>
                    <button class="p-image-action p-link" type="button">
                        <i class="pi pi-times"></i>
                    </button>
                </div>
                <div *ngIf="previewVisible" [@animation]="{value: 'visible', params: {showTransitionParams: showTransitionOptions, hideTransitionParams: hideTransitionOptions}}"
                    (@animation.start)="onAnimationStart($event)" (@animation.done)="onAnimationEnd($event)">
                    <img [attr.src]="src" class="p-image-preview" [ngStyle]="imagePreviewStyle()" (click)="onPreviewImageClick()"/>
                </div>
            </div>
        </span>
    `,
      animations: [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.trigger)('animation', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.transition)('void => visible', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.style)({
        transform: 'scale(0.7)',
        opacity: 0
      }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.animate)('{{showTransitionParams}}')]), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.transition)('visible => void', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.animate)('{{hideTransitionParams}}', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.style)({
        transform: 'scale(0.7)',
        opacity: 0
      }))])])],
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      styleUrls: ['./image.css'],
      host: {
        'class': 'p-element'
      }
    }]
  }], function () {
    return [{
      type: primeng_api__WEBPACK_IMPORTED_MODULE_3__.PrimeNGConfig
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }];
  }, {
    imageClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    imageStyle: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    styleClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    style: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    src: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    alt: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    width: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    height: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    appendTo: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    preview: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    showTransitionOptions: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    hideTransitionOptions: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    onShow: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onHide: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    mask: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['mask']
    }],
    templates: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren,
      args: [primeng_api__WEBPACK_IMPORTED_MODULE_3__.PrimeTemplate]
    }]
  });
})();

class ImageModule {}

ImageModule.ɵfac = function ImageModule_Factory(t) {
  return new (t || ImageModule)();
};

ImageModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: ImageModule,
  declarations: [Image],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule],
  exports: [Image, primeng_api__WEBPACK_IMPORTED_MODULE_3__.SharedModule]
});
ImageModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule], primeng_api__WEBPACK_IMPORTED_MODULE_3__.SharedModule]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ImageModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule],
      exports: [Image, primeng_api__WEBPACK_IMPORTED_MODULE_3__.SharedModule],
      declarations: [Image]
    }]
  }], null, null);
})();
/**
 * Generated bundle index. Do not edit.
 */


 //# sourceMappingURL=primeng-image.js.map

/***/ }),

/***/ 4584:
/*!*******************************************************************!*\
  !*** ./src/app/pages/applications/applications-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApplicationsPageRoutingModule": () => (/* binding */ ApplicationsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9535);
/* harmony import */ var _applications_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./applications.page */ 4037);




const routes = [
    {
        path: '',
        component: _applications_page__WEBPACK_IMPORTED_MODULE_0__.ApplicationsPage
    }
];
let ApplicationsPageRoutingModule = class ApplicationsPageRoutingModule {
};
ApplicationsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ApplicationsPageRoutingModule);



/***/ }),

/***/ 9849:
/*!***********************************************************!*\
  !*** ./src/app/pages/applications/applications.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApplicationsPageModule": () => (/* binding */ ApplicationsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 4595);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngx-translate/core */ 4236);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/button */ 3103);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/ripple */ 4796);
/* harmony import */ var primeng_galleria__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/galleria */ 6219);
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/dialog */ 7914);
/* harmony import */ var primeng_image__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/image */ 3170);
/* harmony import */ var _applications_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./applications-routing.module */ 4584);
/* harmony import */ var _applications_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./applications.page */ 4037);
/* harmony import */ var _shared_pipes_pipe_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/pipes/pipe.module */ 9502);














let ApplicationsPageModule = class ApplicationsPageModule {
};
ApplicationsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            primeng_ripple__WEBPACK_IMPORTED_MODULE_8__.RippleModule,
            primeng_galleria__WEBPACK_IMPORTED_MODULE_9__.GalleriaModule,
            primeng_image__WEBPACK_IMPORTED_MODULE_10__.ImageModule,
            primeng_button__WEBPACK_IMPORTED_MODULE_11__.ButtonModule,
            primeng_dialog__WEBPACK_IMPORTED_MODULE_12__.DialogModule,
            _applications_routing_module__WEBPACK_IMPORTED_MODULE_0__.ApplicationsPageRoutingModule,
            _shared_pipes_pipe_module__WEBPACK_IMPORTED_MODULE_2__.PipeModule,
        ],
        declarations: [
            _applications_page__WEBPACK_IMPORTED_MODULE_1__.ApplicationsPage,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__.TranslatePipe,
        ]
    })
], ApplicationsPageModule);



/***/ }),

/***/ 4037:
/*!*********************************************************!*\
  !*** ./src/app/pages/applications/applications.page.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApplicationsPage": () => (/* binding */ ApplicationsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _raw_loader_applications_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./applications.page.html */ 4232);
/* harmony import */ var _applications_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./applications.page.scss */ 1694);
/* harmony import */ var _shared_services_mocks_applications_applications_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../shared/services/mocks/applications/applications.service */ 3121);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2741);





let ApplicationsPage = class ApplicationsPage {
    constructor(applicationsService) {
        this.applicationsService = applicationsService;
        this.appName = '';
        this.showDialog = false;
    }
    ngOnInit() {
        this.loadApps();
    }
    loadApps() {
        this.applicationsService.list()
            .subscribe(data => {
            this.apps = data;
        });
    }
    showImgs(app) {
        this.appImages = app.images;
        this.appName = app.title;
        this.showDialog = true;
    }
    closeDialog() {
        this.appImages = undefined;
        this.appName = undefined;
        this.showDialog = false;
    }
};
ApplicationsPage.ctorParameters = () => [
    { type: _shared_services_mocks_applications_applications_service__WEBPACK_IMPORTED_MODULE_2__.ApplicationsService }
];
ApplicationsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-applications',
        template: _raw_loader_applications_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_applications_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ApplicationsPage);



/***/ }),

/***/ 3121:
/*!****************************************************************************!*\
  !*** ./src/app/shared/services/mocks/applications/applications.service.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApplicationsService": () => (/* binding */ ApplicationsService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 1887);
/* harmony import */ var _config_api_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../config/api.config */ 5848);




let ApplicationsService = class ApplicationsService {
    constructor(http) {
        this.http = http;
    }
    list() {
        return this.http.get(`${_config_api_config__WEBPACK_IMPORTED_MODULE_0__.ASSETS_CONFIG.baseURL}/applications.json`);
    }
};
ApplicationsService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient }
];
ApplicationsService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], ApplicationsService);



/***/ }),

/***/ 1694:
/*!***********************************************************!*\
  !*** ./src/app/pages/applications/applications.page.scss ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBsaWNhdGlvbnMucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ 4232:
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/applications/applications.page.html ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>{{ 'app.menu-route-apps' | translate }}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content appScrollTheme>\n\n  <div class=\"surface-ground px-4 py-8 md:px-6 lg:px-8\">\n    <div class=\"text-center text-900 text-5xl font-bold mb-5\">{{ 'application.main-title' | translate }}</div>\n    <div class=\"grid grid-nogutter\">\n      <div *ngFor=\"let a of apps\" class=\"col-12 lg:col-4 p-3\">\n        <div class=\"p-3 shadow-2 border-round surface-card\">\n          <div class=\"flex justify-content-between text-500\">\n            <span>{{ a.title | translate }}</span>\n          </div>\n          <p class=\"line-height-3 mt-3  text-900 font-medium text-xl\">\n            {{ a.description | translate }}\n          </p>\n          <div class=\"line-height-3 mt-3 mb-7 text-900 font-medium text-lg\">\n            <span class=\"text-yellow-800\">{{ 'application.function-title' | translate }}: </span>\n            <span>\n              {{ a.function | translate }}\n            </span>\n          </div>\n          <span *ngFor=\"let t of a.techs\" class=\" font-medium py-1 px-3 mr-3 mt-2 inline-block\"\n            style=\"border-radius: 30px;\" [ngClass]=\"{\n            'green' : 'text-green-500 bg-green-100', \n          'blue' : 'text-blue-500 bg-blue-100', \n          'red' : 'text-pink-500 bg-pink-100', \n          'orange' : 'text-orange-500 bg-orange-100'\n        }[t.color]\">{{\n            t.name | translate }}</span>\n          <div *ngIf=\"a.cover\">\n            <img [src]=\"a.cover\" alt=\"Image\" (click)=\"showImgs(a)\"\n              class=\"block w-full mt-5 border-top-1 pt-3 cursor-pointer\">\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n\n  <p-dialog [(visible)]=\"showDialog\" appendTo=\"body\" [modal]=\"true\" [draggable]=\"false\"\n   [style]=\"{width: '100%', height: '100%'}\" (onHide)=\"closeDialog()\">\n    <ng-template pTemplate=\"header\">\n      <div class=\"flex align-items-center\">\n        <div class=\"text-900 font-medium mb-3 text-xl\">{{ appName | translate }}</div>\n      </div>\n    </ng-template>\n    <p-galleria [(value)]=\"appImages\" \n        [showThumbnails]=\"false\" [showIndicators]=\"true\">\n        <ng-template pTemplate=\"item\" let-item>\n          <div class=\"justify-content-center overflow-hidden text-center\">\n            <p-image style=\"margin: auto;\" [src]=\"item\" class=\" block\" \n             [preview]=\"true\" width=\"70%\" height=\"70%\"></p-image>\n          </div>\n        </ng-template>\n      </p-galleria>\n  </p-dialog>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_applications_applications_module_ts.js.map