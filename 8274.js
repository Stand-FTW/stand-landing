(self["webpackChunkcom_standftw_landingpage"] = self["webpackChunkcom_standftw_landingpage"] || []).push([[8274],{

/***/ 8274:
/*!*****************************************************************************!*\
  !*** ./node_modules/@ionic/pwa-elements/dist/esm/pwa-action-sheet.entry.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "pwa_action_sheet": () => (/* binding */ PWAActionSheet)
/* harmony export */ });
/* harmony import */ var _core_f86805ad_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core-f86805ad.js */ 9074);


const PWAActionSheet = class {
    constructor(hostRef) {
        (0,_core_f86805ad_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
        this.cancelable = true;
        this.options = [];
        this.open = false;
        this.onSelection = (0,_core_f86805ad_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "onSelection", 7);
    }
    componentDidLoad() {
        requestAnimationFrame(() => {
            this.open = true;
        });
    }
    dismiss() {
        if (this.cancelable) {
            this.close();
        }
    }
    close() {
        this.open = false;
        setTimeout(() => {
            this.el.parentNode.removeChild(this.el);
        }, 500);
    }
    handleOptionClick(e, i) {
        e.stopPropagation();
        this.onSelection.emit(i);
        this.close();
    }
    render() {
        return ((0,_core_f86805ad_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: `wrapper${this.open ? ' open' : ''}`, onClick: () => this.dismiss() }, (0,_core_f86805ad_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "content" }, (0,_core_f86805ad_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "title" }, this.header), this.options.map((option, i) => (0,_core_f86805ad_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "action-sheet-option", onClick: (e) => this.handleOptionClick(e, i) }, (0,_core_f86805ad_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "action-sheet-button" }, option.title))))));
    }
    get el() { return (0,_core_f86805ad_js__WEBPACK_IMPORTED_MODULE_0__.g)(this); }
    static get style() { return ":host{z-index:1000;position:fixed;top:0;left:0;width:100%;height:100%;contain:strict;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-family:-apple-system,BlinkMacSystemFont,Helvetica Neue,Roboto,sans-serif}.wrapper,:host{display:-ms-flexbox;display:flex}.wrapper{-ms-flex:1;flex:1;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;background-color:transparent;-webkit-transition:background-color .4s cubic-bezier(.36,.66,.04,1);transition:background-color .4s cubic-bezier(.36,.66,.04,1)}.wrapper.open{background-color:rgba(0,0,0,.32)}.title{color:#999;height:23px;line-height:23px;padding-bottom:17px;-webkit-padding-end:16px;padding-inline-end:16px;-webkit-padding-start:16px;padding-inline-start:16px;padding-left:16px;padding-right:16px;padding-top:20px}.content{width:568px;-ms-flex-item-align:end;align-self:flex-end;background-color:#fff;-webkit-transition:-webkit-transform .4s cubic-bezier(.36,.66,.04,1);transition:-webkit-transform .4s cubic-bezier(.36,.66,.04,1);transition:transform .4s cubic-bezier(.36,.66,.04,1);transition:transform .4s cubic-bezier(.36,.66,.04,1),-webkit-transform .4s cubic-bezier(.36,.66,.04,1);-webkit-transform:translateY(100%);transform:translateY(100%)}.wrapper.open .content{-webkit-transform:translateY(0);transform:translateY(0)}\@media only screen and (max-width:568px){.content{width:100%}}.action-sheet-option{cursor:pointer;height:52px;line-height:52px}.action-sheet-button{color:#262626;font-size:16px;-webkit-padding-end:16px;padding-inline-end:16px;-webkit-padding-start:16px;padding-inline-start:16px;padding-left:16px;padding-right:16px;padding-top:0}.action-sheet-button:hover{background-color:#f6f6f6}"; }
};




/***/ })

}]);
//# sourceMappingURL=8274.js.map