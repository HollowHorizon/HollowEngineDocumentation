"use strict";
(self["webpackChunkmy_docs"] = self["webpackChunkmy_docs"] || []).push([[4583],{

/***/ 8198:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Home)
});

// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(4164);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Link.js
var Link = __webpack_require__(8774);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/useDocusaurusContext.js
var useDocusaurusContext = __webpack_require__(4586);
// EXTERNAL MODULE: ./src/theme/Layout/index.tsx + 72 modules
var Layout = __webpack_require__(2176);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(6540);
// EXTERNAL MODULE: ./node_modules/react-router/esm/react-router.js
var react_router = __webpack_require__(6347);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Heading/index.js + 1 modules
var Heading = __webpack_require__(1107);
;// ./src/pages/index.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const index_module = ({"heroBanner":"heroBanner_qdFl","heroTitle":"heroTitle_qg2I","heroBackground":"heroBackground_hR4R","buttons":"buttons_AeoN"});
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
;// ./src/pages/index.tsx
function HomepageHeader(){const{siteConfig}=(0,useDocusaurusContext/* default */.A)();return/*#__PURE__*/(0,jsx_runtime.jsxs)("header",{className:(0,clsx/* default */.A)('hero hero--primary',index_module.heroBanner),children:[/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:index_module.heroBackground}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"container",children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Heading/* default */.A,{as:"h1",className:index_module.heroTitle,children:siteConfig.title}),/*#__PURE__*/(0,jsx_runtime.jsx)("p",{className:"hero__subtitle",children:siteConfig.tagline}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:index_module.buttons,children:/*#__PURE__*/(0,jsx_runtime.jsx)(Link/* default */.A,{className:"button button--secondary button--lg",to:"/docs/intro",children:"\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0430\u0446\u0438\u044E"})})]})]});}function Home(){const location=(0,react_router/* useLocation */.zy)();const history=(0,react_router/* useHistory */.W6)();const{siteConfig}=(0,useDocusaurusContext/* default */.A)();return/*#__PURE__*/(0,jsx_runtime.jsx)(Layout/* default */.A,{title:`Hello from ${siteConfig.title}`,description:"Description will go into a meta tag in <head />",children:/*#__PURE__*/(0,jsx_runtime.jsx)(HomepageHeader,{})});}

/***/ })

}]);