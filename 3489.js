(self["webpackChunkgtl"] = self["webpackChunkgtl"] || []).push([[3489],{

/***/ 3489:
/*!*****************************************************************************!*\
  !*** ./node_modules/@ionic/pwa-elements/dist/esm/pwa-camera-modal.entry.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "pwa_camera_modal": () => (/* binding */ PWACameraModal)
/* harmony export */ });
/* harmony import */ var _core_f86805ad_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core-f86805ad.js */ 9074);


const PWACameraModal = class {
    constructor(hostRef) {
        (0,_core_f86805ad_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
        this.facingMode = 'user';
        this.onPhoto = (0,_core_f86805ad_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "onPhoto", 7);
        this.noDeviceError = (0,_core_f86805ad_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "noDeviceError", 7);
    }
    async present() {
        const camera = document.createElement('pwa-camera-modal-instance');
        camera.facingMode = this.facingMode;
        camera.addEventListener('onPhoto', async (e) => {
            if (!this._modal) {
                return;
            }
            const photo = e.detail;
            this.onPhoto.emit(photo);
        });
        camera.addEventListener('noDeviceError', async (e) => {
            this.noDeviceError.emit(e);
        });
        document.body.append(camera);
        this._modal = camera;
    }
    async dismiss() {
        if (!this._modal) {
            return;
        }
        this._modal && this._modal.parentNode.removeChild(this._modal);
        this._modal = null;
    }
    render() {
        return ((0,_core_f86805ad_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", null));
    }
    static get style() { return ":host{z-index:1000;position:fixed;top:0;left:0;width:100%;height:100%;contain:strict}.wrapper,:host{display:-ms-flexbox;display:flex}.wrapper{-ms-flex:1;flex:1;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;background-color:rgba(0,0,0,.15)}.content{-webkit-box-shadow:0 0 5px rgba(0,0,0,.2);box-shadow:0 0 5px rgba(0,0,0,.2);width:600px;height:600px}"; }
};




/***/ })

}]);
//# sourceMappingURL=3489.js.map