"use strict";
(self["webpackChunkmy_docs"] = self["webpackChunkmy_docs"] || []).push([[3976],{

/***/ 2053:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_intro_md_0e3_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-intro-md-0e3.json
const site_docs_intro_md_0e3_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"intro","title":"Введение","description":"Вы попали в документацию по моду __HollowEngine__!","source":"@site/docs/intro.md","sourceDirName":".","slug":"/intro","permalink":"/hollowengine.github.io/ru/docs/intro","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/intro.md","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1,"title":"Введение"},"sidebar":"tutorialSidebar","next":{"title":"Установка","permalink":"/hollowengine.github.io/ru/docs/install"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(8453);
;// ./docs/intro.md


const frontMatter = {
	sidebar_position: 1,
	title: 'Введение'
};
const contentTitle = 'Добро пожаловать';

const assets = {

};




const toc = [{
  "value": "Навигация",
  "id": "навигация",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    code: "code",
    em: "em",
    h1: "h1",
    h2: "h2",
    header: "header",
    hr: "hr",
    img: "img",
    p: "p",
    strong: "strong",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)("div", {
      align: "center",
      children: [(0,jsx_runtime.jsx)(_components.header, {
        children: (0,jsx_runtime.jsx)(_components.h1, {
          id: "добро-пожаловать",
          children: "Добро пожаловать"
        })
      }), (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsxs)(_components.strong, {
          children: ["Вы попали в документацию по моду ", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "HollowEngine"
            })
          }), "!"]
        })
      }), (0,jsx_runtime.jsx)("link", {
        rel: "prefetch",
        as: "image",
        href: "@site/static/img/headers/welcome.webp"
      }), (0,jsx_runtime.jsx)("div", {
        className: "cont",
        children: (0,jsx_runtime.jsx)("div", {
          className: "show",
          id: "mask",
          children: (0,jsx_runtime.jsx)(_components.p, {
            children: (0,jsx_runtime.jsx)(_components.img, {
              alt: "Welcome",
              src: (__webpack_require__(3903)/* ["default"] */ .A) + "",
              width: "960",
              height: "540"
            })
          })
        })
      }), (0,jsx_runtime.jsx)(_components.hr, {}), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Данная документация научит вас основам скриптинга в моде ", (0,jsx_runtime.jsx)(_components.code, {
          children: "HollowEngine"
        }), "."]
      }), (0,jsx_runtime.jsx)(_components.hr, {}), (0,jsx_runtime.jsxs)(_components.admonition, {
        title: "Прежде чем Вы начнёте изучение движка",
        type: "warning",
        children: [(0,jsx_runtime.jsxs)(_components.p, {
          children: ["Рекомендуем ознакомится с таким языком программирования как ", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://kotlinlang.org/",
            children: (0,jsx_runtime.jsx)(_components.em, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Kotlin"
              })
            })
          }), "."]
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "Изучите его структуру и базовые функции!"
        })]
      }), (0,jsx_runtime.jsx)(_components.hr, {})]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "навигация",
      children: "Навигация"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "На левой панели Вы можете найти различные главы, прежде чем приступать к непосредственно кодингу, советуем ознакомиться со всеми, хотя бы краем глаза. Это поможет вам хотя бы примерно оценить, что где искать, и в целом, как проще реализовать те или иные механики."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Удачи, ждём от Вас интересных проектов!"
      })
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, {
    ...props,
    children: (0,jsx_runtime.jsx)(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}



/***/ }),

/***/ 3903:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/welcome-b25efa21ff4c4c0feb5b42123a6e4b52.webp");

/***/ })

}]);