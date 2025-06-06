"use strict";
(self["webpackChunkmy_docs"] = self["webpackChunkmy_docs"] || []).push([[2777],{

/***/ 2186:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_install_md_c4d_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-install-md-c4d.json
const site_docs_install_md_c4d_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"install","title":"Установка","description":"Здесь Вы всегда найдёте актуальную информацию по тому, где скачать и как установить мод.","source":"@site/docs/install.md","sourceDirName":".","slug":"/install","permalink":"/HollowEngineDocumentation/ru/docs/install","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/install.md","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_position":2,"title":"Установка"},"sidebar":"tutorialSidebar","previous":{"title":"Введение","permalink":"/HollowEngineDocumentation/ru/docs/intro"},"next":{"title":"Скриптинг","permalink":"/HollowEngineDocumentation/ru/docs/category/скриптинг"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(8453);
;// ./docs/install.md


const frontMatter = {
	sidebar_position: 2,
	title: 'Установка'
};
const contentTitle = 'Установка HollowEngine';

const assets = {

};




const toc = [{
  "value": "Загрузка мода",
  "id": "загрузка-мода",
  "level": 2
}, {
  "value": "Запуск мода",
  "id": "запуск-мода",
  "level": 2
}, {
  "value": "Известные проблемы",
  "id": "известные-проблемы",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    em: "em",
    h1: "h1",
    h2: "h2",
    header: "header",
    hr: "hr",
    img: "img",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)("div", {
      align: "center",
      children: [(0,jsx_runtime.jsx)(_components.header, {
        children: (0,jsx_runtime.jsx)(_components.h1, {
          id: "установка-hollowengine",
          children: "Установка HollowEngine"
        })
      }), (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Здесь Вы всегда найдёте актуальную информацию по тому, где скачать и как установить мод."
        })
      }), (0,jsx_runtime.jsx)("link", {
        rel: "prefetch",
        as: "image",
        href: "@site/static/img/headers/download.webp"
      }), (0,jsx_runtime.jsx)("div", {
        className: "cont",
        children: (0,jsx_runtime.jsx)("div", {
          className: "show",
          id: "mask",
          children: (0,jsx_runtime.jsx)(_components.p, {
            children: (0,jsx_runtime.jsx)(_components.img, {
              alt: "Welcome",
              src: (__webpack_require__(9321)/* ["default"] */ .A) + "",
              width: "960",
              height: "540"
            })
          })
        })
      }), (0,jsx_runtime.jsx)(_components.hr, {})]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "загрузка-мода",
      children: "Загрузка мода"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Самым актуальным местом для загрузки мода является ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "GitHub"
      }), ", поскольку после каждого коммита он сам компилирует мод и выкладывает его в ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://github.com/HollowHorizon/HollowEngine/releases",
        children: "Releases"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Когда я буду уверен, что мод работает стабильно и закончу перевод этой документации на английский, то мод также выйдет на CurseForge и Modrinth."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Ну а пока Вы можете мне в этом помочь, тестируя мод :)"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "запуск-мода",
      children: "Запуск мода"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Для запуска мода вам достаточно просто закинуть ", (0,jsx_runtime.jsx)(_components.code, {
        children: "HollowEngine"
      }), " для нужной ", (0,jsx_runtime.jsx)(_components.em, {
        children: "версии"
      }), " и ", (0,jsx_runtime.jsx)(_components.em, {
        children: "загрузчика"
      }), " в папку ", (0,jsx_runtime.jsx)(_components.code, {
        children: "mods"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Никаких дополнительных модов Вам ставить не надо!"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "известные-проблемы",
      children: "Известные проблемы"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["HollowEngine и Kotlin For Forge: Они оба используют язык Kotlin, но разных версий, Forge такое не позволяет. В качестве временного решения вы можете пингануть ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@HollowHorizon"
        }), " на Discord сервере ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://discord.gg/qKpPhkwGCY",
          children: "Phase Of Horizon"
        }), " и попросить ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Sertain Algorithm That Purifies Classpath And Slays Module System"
        }), " мод!"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["При обнаружении любых багов пишите в Discord в соответствующий канал или на ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://github.com/HollowHorizon/HollowEngine/issues",
        children: "GitHub Issues"
      }), "."]
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

/***/ 8453:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   R: () => (/* binding */ useMDXComponents),
/* harmony export */   x: () => (/* binding */ MDXProvider)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6540);
/**
 * @import {MDXComponents} from 'mdx/types.js'
 * @import {Component, ReactElement, ReactNode} from 'react'
 */

/**
 * @callback MergeComponents
 *   Custom merge function.
 * @param {Readonly<MDXComponents>} currentComponents
 *   Current components from the context.
 * @returns {MDXComponents}
 *   Additional components.
 *
 * @typedef Props
 *   Configuration for `MDXProvider`.
 * @property {ReactNode | null | undefined} [children]
 *   Children (optional).
 * @property {Readonly<MDXComponents> | MergeComponents | null | undefined} [components]
 *   Additional components to use or a function that creates them (optional).
 * @property {boolean | null | undefined} [disableParentContext=false]
 *   Turn off outer component context (default: `false`).
 */



/** @type {Readonly<MDXComponents>} */
const emptyComponents = {}

const MDXContext = react__WEBPACK_IMPORTED_MODULE_0__.createContext(emptyComponents)

/**
 * Get current components from the MDX Context.
 *
 * @param {Readonly<MDXComponents> | MergeComponents | null | undefined} [components]
 *   Additional components to use or a function that creates them (optional).
 * @returns {MDXComponents}
 *   Current components.
 */
function useMDXComponents(components) {
  const contextComponents = react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext)

  // Memoize to avoid unnecessary top-level context changes
  return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(
    function () {
      // Custom merge via a function prop
      if (typeof components === 'function') {
        return components(contextComponents)
      }

      return {...contextComponents, ...components}
    },
    [contextComponents, components]
  )
}

/**
 * Provider for MDX context.
 *
 * @param {Readonly<Props>} properties
 *   Properties.
 * @returns {ReactElement}
 *   Element.
 * @satisfies {Component}
 */
function MDXProvider(properties) {
  /** @type {Readonly<MDXComponents>} */
  let allComponents

  if (properties.disableParentContext) {
    allComponents =
      typeof properties.components === 'function'
        ? properties.components(emptyComponents)
        : properties.components || emptyComponents
  } else {
    allComponents = useMDXComponents(properties.components)
  }

  return react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    MDXContext.Provider,
    {value: allComponents},
    properties.children
  )
}


/***/ }),

/***/ 9321:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/download-fb2b2b4b0c152ecc8a575c4e6a281cf3.webp");

/***/ })

}]);