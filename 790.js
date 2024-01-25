(self["webpackChunkgtl"] = self["webpackChunkgtl"] || []).push([[790],{

/***/ 790:
/*!******************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/status-tap-9cb487b1.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "startStatusTap": () => (/* binding */ startStatusTap)
/* harmony export */ });
/* harmony import */ var _index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-7a8b7a1c.js */ 5133);
/* harmony import */ var _helpers_1457892a_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers-1457892a.js */ 6521);



const startStatusTap = () => {
  const win = window;
  win.addEventListener('statusTap', () => {
    (0,_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.f)(() => {
      const width = win.innerWidth;
      const height = win.innerHeight;
      const el = document.elementFromPoint(width / 2, height / 2);
      if (!el) {
        return;
      }
      const contentEl = el.closest('ion-content');
      if (contentEl) {
        new Promise(resolve => (0,_helpers_1457892a_js__WEBPACK_IMPORTED_MODULE_1__.c)(contentEl, resolve)).then(() => {
          (0,_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.c)(async () => {
            /**
             * If scrolling and user taps status bar,
             * only calling scrollToTop is not enough
             * as engines like WebKit will jump the
             * scroll position back down and complete
             * any in-progress momentum scrolling.
             */
            contentEl.style.setProperty('--overflow', 'hidden');
            await contentEl.scrollToTop(300);
            contentEl.style.removeProperty('--overflow');
          });
        });
      }
    });
  });
};




/***/ })

}]);
//# sourceMappingURL=790.js.map