"use strict";
(self["webpackChunkmy_docs"] = self["webpackChunkmy_docs"] || []).push([[3287],{

/***/ 51:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/first-script-9b7c00fc1910d19b07016293f8c0cd45.webp");

/***/ }),

/***/ 4215:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_scripting_creating_first_script_md_212_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-scripting-creating-first-script-md-212.json
const site_docs_scripting_creating_first_script_md_212_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"scripting/creating-first-script","title":"Введение в скриптинг","description":"Здесь Вы узнаете, как создавать скрипты и запускать их, а также какие есть виды скриптов.","source":"@site/docs/scripting/creating-first-script.md","sourceDirName":"scripting","slug":"/scripting/creating-first-script","permalink":"/HollowEngineDocumentation/docs/scripting/creating-first-script","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/scripting/creating-first-script.md","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1,"title":"Введение в скриптинг"},"sidebar":"tutorialSidebar","previous":{"title":"Скриптинг","permalink":"/HollowEngineDocumentation/docs/category/скриптинг"},"next":{"title":"Сцена","permalink":"/HollowEngineDocumentation/docs/category/сцена"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(8453);
;// ./docs/scripting/creating-first-script.md


const frontMatter = {
	sidebar_position: 1,
	title: 'Введение в скриптинг'
};
const contentTitle = 'Ваш первый скрипт';

const assets = {

};




const toc = [{
  "value": "Как создать скрипт?",
  "id": "как-создать-скрипт",
  "level": 2
}, {
  "value": "Виды скриптов",
  "id": "виды-скриптов",
  "level": 2
}, {
  "value": "Как запустить скрипт?",
  "id": "как-запустить-скрипт",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h1: "h1",
    h2: "h2",
    header: "header",
    hr: "hr",
    img: "img",
    li: "li",
    p: "p",
    strong: "strong",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)("div", {
      align: "center",
      children: [(0,jsx_runtime.jsx)(_components.header, {
        children: (0,jsx_runtime.jsx)(_components.h1, {
          id: "ваш-первый-скрипт",
          children: "Ваш первый скрипт"
        })
      }), (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Здесь Вы узнаете, как создавать скрипты и запускать их, а также какие есть виды скриптов."
        })
      }), (0,jsx_runtime.jsx)("link", {
        rel: "prefetch",
        as: "image",
        href: "@site/static/img/headers/first-script.webp"
      }), (0,jsx_runtime.jsx)("div", {
        className: "cont",
        children: (0,jsx_runtime.jsx)("div", {
          className: "show",
          id: "mask",
          children: (0,jsx_runtime.jsx)(_components.p, {
            children: (0,jsx_runtime.jsx)(_components.img, {
              alt: "Welcome",
              src: (__webpack_require__(51)/* ["default"] */ .A) + "",
              width: "960",
              height: "540"
            })
          })
        })
      }), (0,jsx_runtime.jsx)(_components.hr, {})]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "как-создать-скрипт",
      children: "Как создать скрипт?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Прежде чем открывать папку игры и искать папку со скриптами, Вы можете воспользоваться встроенным редактором!\nДля этого откройте меню управления игры и найдите категорию с движком, там Вы найдёте клавишу для открытия редактора, по\nумолчанию это ", (0,jsx_runtime.jsx)(_components.code, {
        children: "F12"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Открыв редактор вы увидите слева панель со вкладками, пока там только сам проект и набросок документации. Вам нужен\nпроект."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Там Вы увидите папку ", (0,jsx_runtime.jsx)(_components.code, {
        children: "HollowEngine"
      }), ", в ней должна быть папка ", (0,jsx_runtime.jsx)(_components.code, {
        children: "scripts"
      }), ". Нажав по ней ", (0,jsx_runtime.jsx)(_components.code, {
        children: "пкм"
      }), " Вы можете создать несколько\nвидов скриптов. Пока что мы будем говорить про скрипт-сцену."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "виды-скриптов",
      children: "Виды скриптов"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Пока что в моде стабильно работает только скрипт-сцена, а так в ближайшие недели я вероятно доработаю и остальные:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Скрипт"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Расширение файла"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Описание"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Сцена"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "*.scene.kts"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Основной вид скрипта нацеленный на сюжетные события и взаимодействие с миром. Поддерживает сохранения и корутины."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Событие"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "*.event.kts"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Обработчик события, внутри вы можете обрабатывать различные события HollowCore, вроде установки и ломания блоков, атаку сущностей и т.п."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Kool-сцена"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "*.kool.kts"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Сцена движка Kool, используется для создания интерфейсов, оверлеев, эффектов и всего того, что позволяет сам движок."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "как-запустить-скрипт",
      children: "Как запустить скрипт?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Обычно Вы для этого можете использовать сам редактор, выбрав нужный скрипт в правом верхнем углу, но скрипт можно также запустить командой.\nПока что поддерживаются только сцены:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "/hollowengine start-scene <Путь к скрипту> <Состояние с которого начнётся скрипт>"
        }), " - Запускает новую сцену."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "/hollowengine stop-scene <Путь к скрипту>"
        }), " - Останавливает сцену."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "/hollowengine active-scenes"
        }), " - Выводит в чат все запущенные сцены."]
      }), "\n"]
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



/***/ })

}]);