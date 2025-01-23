"use strict";
exports.id = 126;
exports.ids = [126];
exports.modules = {

/***/ 5749:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ layout)
});

// EXTERNAL MODULE: external "/Users/akv2118-admin/Documents/GitHub/methods-in-spatial-research-sp2025/node_modules/react/index.js"
var index_js_ = __webpack_require__(7949);
// EXTERNAL MODULE: ./.cache/gatsby-browser-entry.js + 6 modules
var gatsby_browser_entry = __webpack_require__(5237);
;// ./src/components/layout.module.css
// Exports
var container = "layout-module--container--78b04";
var heading = "layout-module--heading--f158c";
var navLinks = "layout-module--nav-links--1113b";
var navLinkItem = "layout-module--nav-link-item--a5f0a";
var navLinkText = "layout-module--nav-link-text--69cda";
var siteTitle = "layout-module--site-title--e4dea";
var caption = "layout-module--caption--95d12";

;// ./src/components/layout.js
const Layout=({pageTitle,children})=>{const data=(0,gatsby_browser_entry.useStaticQuery)("3159585216");return/*#__PURE__*/index_js_.createElement("div",{className:container},/*#__PURE__*/index_js_.createElement("title",null,pageTitle,"| ",data.site.siteMetadata.title),/*#__PURE__*/index_js_.createElement("header",{className:siteTitle},data.site.siteMetadata.title),/*#__PURE__*/index_js_.createElement("nav",null,/*#__PURE__*/index_js_.createElement("ul",{className:navLinks},/*#__PURE__*/index_js_.createElement("li",{className:navLinkItem},/*#__PURE__*/index_js_.createElement(gatsby_browser_entry.Link,{to:"/",className:navLinkText},"Home")),/*#__PURE__*/index_js_.createElement("li",{className:navLinkItem},/*#__PURE__*/index_js_.createElement(gatsby_browser_entry.Link,{to:"/tutorials",className:navLinkText},"Tutorials")),/*#__PURE__*/index_js_.createElement("li",{className:navLinkItem},/*#__PURE__*/index_js_.createElement(gatsby_browser_entry.Link,{to:"/assignments",className:navLinkText},"Assignments")),/*#__PURE__*/index_js_.createElement("li",{className:navLinkItem},/*#__PURE__*/index_js_.createElement(gatsby_browser_entry.Link,{to:"/resources",className:navLinkText},"Resources")))),/*#__PURE__*/index_js_.createElement("main",null,/*#__PURE__*/index_js_.createElement("h1",{className:heading},pageTitle),children));};/* harmony default export */ const layout = (Layout);

/***/ }),

/***/ 6422:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7949);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5237);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5749);
const AssignmentsPage=({data})=>{return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_layout__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A,{pageTitle:"Assignments"},data.allMdx.nodes.map(node=>/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("article",{key:node.id},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2",null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link,{to:`/assignments/${node.slug}`},node.frontmatter.sequence," ",node.frontmatter.title)))));};const query="1151697409";/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AssignmentsPage);

/***/ })

};
;
//# sourceMappingURL=component---src-pages-assignments-index-js.js.map