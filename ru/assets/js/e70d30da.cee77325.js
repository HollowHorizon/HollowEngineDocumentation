"use strict";
(self["webpackChunkmy_docs"] = self["webpackChunkmy_docs"] || []).push([[3179],{

/***/ 3957:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_scripting_scene_npc_actions_md_e70_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-scripting-scene-npc-actions-md-e70.json
const site_docs_scripting_scene_npc_actions_md_e70_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"scripting/scene/npc/npc-actions","title":"Действия Персонажей","description":"Научите его писать за вас скрипты.","source":"@site/docs/scripting/scene/npc/actions.md","sourceDirName":"scripting/scene/npc","slug":"/scripting/scene/npc/npc-actions","permalink":"/HollowEngineDocumentation/ru/docs/scripting/scene/npc/npc-actions","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/scripting/scene/npc/actions.md","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_position":2,"title":"Действия Персонажей","id":"npc-actions","desc":"NaN"},"sidebar":"tutorialSidebar","previous":{"title":"Создание Персонажа","permalink":"/HollowEngineDocumentation/ru/docs/scripting/scene/npc/creating"},"next":{"title":"Контроллер анимаций","permalink":"/HollowEngineDocumentation/ru/docs/scripting/scene/npc/controller"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(8453);
;// ./docs/scripting/scene/npc/actions.md


const frontMatter = {
	sidebar_position: 2,
	title: 'Действия Персонажей',
	id: 'npc-actions',
	desc: 'NaN'
};
const contentTitle = 'Действия Персонажей';

const assets = {

};




const toc = [{
  "value": "📦 Перемещение НИПа",
  "id": "-перемещение-нипа",
  "level": 2
}, {
  "value": "Функции",
  "id": "функции",
  "level": 3
}, {
  "value": "Примеры",
  "id": "примеры",
  "level": 3
}, {
  "value": "👀 Поворот головы",
  "id": "-поворот-головы",
  "level": 2
}, {
  "value": "Функции",
  "id": "функции-1",
  "level": 3
}, {
  "value": "Примеры",
  "id": "примеры-1",
  "level": 3
}, {
  "value": "🧱 Взаимодействие с миром",
  "id": "-взаимодействие-с-миром",
  "level": 2
}, {
  "value": "Использовать блок",
  "id": "использовать-блок",
  "level": 3
}, {
  "value": "Сломать блок",
  "id": "сломать-блок",
  "level": 3
}, {
  "value": "🎁 Бросить предмет",
  "id": "-бросить-предмет",
  "level": 2
}, {
  "value": "💬 Реплики НИПа",
  "id": "-реплики-нипа",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    hr: "hr",
    img: "img",
    p: "p",
    pre: "pre",
    strong: "strong",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)("div", {
      align: "center",
      children: [(0,jsx_runtime.jsx)(_components.header, {
        children: (0,jsx_runtime.jsx)(_components.h1, {
          id: "действия-персонажей",
          children: "Действия Персонажей"
        })
      }), (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Научите его писать за вас скрипты."
        })
      }), (0,jsx_runtime.jsx)("link", {
        rel: "prefetch",
        as: "image",
        href: "@site/static/img/headers/npc-actions.webp"
      }), (0,jsx_runtime.jsx)("div", {
        className: "cont",
        children: (0,jsx_runtime.jsx)("div", {
          className: "show",
          id: "mask",
          children: (0,jsx_runtime.jsx)(_components.p, {
            children: (0,jsx_runtime.jsx)(_components.img, {
              alt: "Welcome",
              src: (__webpack_require__(7322)/* ["default"] */ .A) + "",
              width: "960",
              height: "540"
            })
          })
        })
      }), (0,jsx_runtime.jsx)(_components.hr, {})]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Вот улучшенный и доработанный вариант страницы документации. Он стал компактнее, понятнее и структурирован логичнее. Удалены дублирующиеся HTML-элементы и избыточные комментарии, примеры оформлены лаконично, а блоки разделены визуально без лишней верстки."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-перемещение-нипа",
      children: "📦 Перемещение НИПа"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "функции",
      children: "Функции"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-kts",
        children: "fun NPCEntity.move(pos: Vec3, dist: Double = 1.5, speed: Double = 1.0)\nfun NPCEntity.move(entity: Entity, dist: Double = 1.5, speed: Double = 1.0)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["НИП начинает двигаться к заданной позиции (", (0,jsx_runtime.jsx)(_components.code, {
        children: "Vec3"
      }), ") или к сущности (", (0,jsx_runtime.jsx)(_components.code, {
        children: "Entity"
      }), ") и останавливается, когда расстояние до цели становится меньше ", (0,jsx_runtime.jsx)(_components.code, {
        children: "dist"
      }), ". Аргумент ", (0,jsx_runtime.jsx)(_components.code, {
        children: "speed"
      }), " задаёт скорость передвижения."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "примеры",
      children: "Примеры"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-kts",
        children: "// Движение в точку\nnpcID move pos(92, 23, 56)\n\n// Следование за игроком\nval player = server.playerList.players.first()\nnpcID move player\n\n// С заданной дистанцией и скоростью\nnpcID.move(pos(25, 64, 2), dist = 3.0, speed = 2.0)\nnpcID.move(player, dist = 3.0, speed = 2.0)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-поворот-головы",
      children: "👀 Поворот головы"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "функции-1",
      children: "Функции"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-kts",
        children: "fun NPCEntity.look(pos: Vec3)\nfun NPCEntity.look(entity: Entity)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "НИП поворачивается в сторону заданной точки или сущности."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "примеры-1",
      children: "Примеры"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-kts",
        children: "// Смотреть в точку\nnpcID look pos(92, 3, 24)\n\n// Смотреть на игрока\nval player = server.playerList.players.first()\nnpcID look player\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-взаимодействие-с-миром",
      children: "🧱 Взаимодействие с миром"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "использовать-блок",
      children: "Использовать блок"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-kts",
        children: "fun NPCEntity.useBlock(pos: Vec3)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["НИП кликает ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "ПКМ"
      }), " по блоку, как игрок."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-kts",
        children: "npcID useBlock pos(92, 93, 241)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "сломать-блок",
      children: "Сломать блок"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-kts",
        children: "fun NPCEntity.destroyBlock(pos: Vec3)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "НИП ломает блок, как игрок без инструментов."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-kts",
        children: "npcID destroyBlock pos(92, 46, 24)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-бросить-предмет",
      children: "🎁 Бросить предмет"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-kts",
        children: "fun NPCEntity.dropItem(item: ItemStack)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "НИП бросает предмет, как будто выбрасывает его из инвентаря."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-kts",
        children: "npcID dropItem item(\"golden_apple\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-реплики-нипа",
      children: "💬 Реплики НИПа"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-kts",
        children: "fun NPCEntity.say(text: String)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "НИП произносит фразу — она отображается в чате и/или в облачке над головой (если включено отображение имени)."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-kts",
        children: "npcID say \"Привет!\"\n"
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

/***/ 7322:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/npc-actions-eebe567c37a446ec2d05e8f016e20877.webp");

/***/ })

}]);