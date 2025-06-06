"use strict";
(self["webpackChunkmy_docs"] = self["webpackChunkmy_docs"] || []).push([[8278],{

/***/ 7023:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/player-8134f8bce588853231372a46a5430b13.png");

/***/ }),

/***/ 7048:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_scripting_scene_player_creating_md_a65_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-scripting-scene-player-creating-md-a65.json
const site_docs_scripting_scene_player_creating_md_a65_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"scripting/scene/player/creating","title":"Работа с игроками","description":"Получите любого игрока напрямую с сервера!","source":"@site/docs/scripting/scene/player/creating.md","sourceDirName":"scripting/scene/player","slug":"/scripting/scene/player/creating","permalink":"/HollowEngineDocumentation/docs/scripting/scene/player/creating","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/scripting/scene/player/creating.md","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1,"title":"Работа с игроками"},"sidebar":"tutorialSidebar","previous":{"title":"Игроки","permalink":"/HollowEngineDocumentation/docs/category/игроки"},"next":{"title":"Эффекты","permalink":"/HollowEngineDocumentation/docs/category/эффекты"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(8453);
;// ./docs/scripting/scene/player/creating.md


const frontMatter = {
	sidebar_position: 1,
	title: 'Работа с игроками'
};
const contentTitle = 'Работа с игроками';

const assets = {

};




const toc = [{
  "value": "📥 Получение игроков",
  "id": "-получение-игроков",
  "level": 2
}, {
  "value": "✅ Действия игрока",
  "id": "-действия-игрока",
  "level": 2
}, {
  "value": "⏳ Ожидание позиции",
  "id": "-ожидание-позиции",
  "level": 3
}, {
  "value": "⏳ Ожидание сообщения",
  "id": "-ожидание-сообщения",
  "level": 3
}, {
  "value": "💬 Отправка сообщений",
  "id": "-отправка-сообщений",
  "level": 3
}, {
  "value": "💡 Сказать от имени игрока:",
  "id": "-сказать-от-имени-игрока",
  "level": 4
}, {
  "value": "📩 Отправить обычное сообщение в чат:",
  "id": "-отправить-обычное-сообщение-в-чат",
  "level": 4
}, {
  "value": "🔔 Показать тост-уведомление:",
  "id": "-показать-тост-уведомление",
  "level": 4
}, {
  "value": "🧍 Внешний вид",
  "id": "-внешний-вид",
  "level": 2
}, {
  "value": "🧬 Модель",
  "id": "-модель",
  "level": 3
}, {
  "value": "🖼️ Текстуры",
  "id": "️-текстуры",
  "level": 3
}, {
  "value": "🧱 Трансформация",
  "id": "-трансформация",
  "level": 3
}, {
  "value": "🕺 Анимации",
  "id": "-анимации",
  "level": 2
}, {
  "value": "▶️ Воспроизведение:",
  "id": "️-воспроизведение",
  "level": 3
}, {
  "value": "Альтернативные способы:",
  "id": "альтернативные-способы",
  "level": 4
}, {
  "value": "⏹️ Остановка анимации:",
  "id": "️-остановка-анимации",
  "level": 3
}, {
  "value": "Сохранение игроков",
  "id": "сохранение-игроков",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    blockquote: "blockquote",
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    header: "header",
    hr: "hr",
    img: "img",
    li: "li",
    p: "p",
    pre: "pre",
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
          id: "работа-с-игроками",
          children: "Работа с игроками"
        })
      }), (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Получите любого игрока напрямую с сервера!"
        })
      }), (0,jsx_runtime.jsx)("link", {
        rel: "prefetch",
        as: "image",
        href: "@site/static/img/headers/player.png"
      }), (0,jsx_runtime.jsx)("div", {
        className: "cont",
        children: (0,jsx_runtime.jsx)("div", {
          className: "show",
          id: "mask",
          children: (0,jsx_runtime.jsx)(_components.p, {
            children: (0,jsx_runtime.jsx)(_components.img, {
              alt: "Welcome",
              src: (__webpack_require__(7023)/* ["default"] */ .A) + "",
              width: "1024",
              height: "1024"
            })
          })
        })
      }), (0,jsx_runtime.jsx)(_components.hr, {})]
    }), "\n", (0,jsx_runtime.jsx)(_components.h1, {
      id: "-игроки",
      children: "🎮 Игроки"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Модуль работы с игроками предоставляет удобные утилиты и расширения для взаимодействия с объектами ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ServerPlayer"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-получение-игроков",
      children: "📥 Получение игроков"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Для получения всех подключённых игроков:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-kotlin",
        children: "val players: MutableList<ServerPlayer> = server.players\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Чтобы найти игрока по имени или UUID:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-kotlin",
        children: "val playerByName = server.players[\"HollowHorizon\"]\nval playerByUuid = server.players[uuid]\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "⚠️ Методы выбрасывают исключение, если игрок не найден!"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-действия-игрока",
      children: "✅ Действия игрока"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "-ожидание-позиции",
      children: "⏳ Ожидание позиции"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-kotlin",
        children: "suspend fun Player.waitPos(pos: Vec3, radius: Float = 1f, inverse: Boolean = false)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Позволяет приостановить скрипт, пока игрок не подойдёт (или не отойдёт, если ", (0,jsx_runtime.jsx)(_components.code, {
        children: "inverse = true"
      }), ") от заданной позиции:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-kotlin",
        children: "player.waitPos(pos(100.0, 64.0, 200.0), radius = 2f)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "-ожидание-сообщения",
      children: "⏳ Ожидание сообщения"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-kotlin",
        children: "suspend fun Player.input(): String\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Позволяет приостановить скрипт, пока игрок не напишет любое сообщение в чат. Возвращает строку с самим сообщением."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-kotlin",
        children: "val message = player.input()\nplayer.notify(\"[${player.name}] Я сказал - $message.\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "-отправка-сообщений",
      children: "💬 Отправка сообщений"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "-сказать-от-имени-игрока",
      children: "💡 Сказать от имени игрока:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-kotlin",
        children: "player.say(\"Привет, мир!\")\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Выведет сообщение как: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "[Игрок] Привет, мир!"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "-отправить-обычное-сообщение-в-чат",
      children: "📩 Отправить обычное сообщение в чат:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-kotlin",
        children: "player send \"Вы получили сообщение\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "-показать-тост-уведомление",
      children: "🔔 Показать тост-уведомление:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-kotlin",
        children: "player.notify(\"Новое задание!\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-внешний-вид",
      children: "🧍 Внешний вид"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "-модель",
      children: "🧬 Модель"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-kotlin",
        children: "var Player.model: String\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Пример:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-kotlin",
        children: "player.model = \"hollowengine:models/player.gltf\"\nplayer.resetModel() // сбрасывает модель\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Используются .gltf или .glb файлы."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Файл должен быть доступен в ресурсах мода (через путь вида mod_id", ":models", "/path/to/file.gltf)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Вы можете добавить файл модели через загрузчик мода по пути ", (0,jsx_runtime.jsx)(_components.code, {
        children: ".minecraft/hollowengine/assets/your_project/models/file.gltf"
      }), ", тогда путь в моде будет выглядеть так: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "your_project:models/file.gltf"
      }), ". Не забудьте перезагрузить ресурсы через F3+T, перед запуском скрипта."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Модель должна содержать нужные анимации и текстуры, если они планируются."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "️-текстуры",
      children: "🖼️ Текстуры"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Позволяют заменить встроенные текстуры модели. Используйте ID, указанные в .gltf, например:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-kts",
        children: "player.textures = mapOf(\n    \"model/base\" to \"my_mod:textures/npc_base.png\",\n    \"model/hat\" to \"my_mod:textures/hat.png\"\n)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Посмотреть названия оригинальных текстур можно командой ", (0,jsx_runtime.jsx)(_components.code, {
        children: "/hollowengine model <Путь к модели>"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "-трансформация",
      children: "🧱 Трансформация"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-kotlin",
        children: "var Player.transform: Transform\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Используется, если модель смещена, перевёрнута или имеет неправильный масштаб:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-kts",
        children: "player.transform = Transform(\n    tX = 0f, tY = -1.2f, tZ = 0f, // смещение\n    rX = 0f, rY = 180f, rZ = 0f,  // поворот\n    sX = 1f, sY = 1f, sZ = 1f     // масштаб\n)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-анимации",
      children: "🕺 Анимации"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Анимации поддерживаются конкретно при изменённой модели игрока"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "️-воспроизведение",
      children: "▶️ Воспроизведение:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-kotlin",
        children: "player.play(\"animation_name\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Параметры:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "layer"
        }), ": слой анимации (", (0,jsx_runtime.jsx)(_components.code, {
          children: "BlendMode.Additional"
        }), " или ", (0,jsx_runtime.jsx)(_components.code, {
          children: "BlendMode.Override"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "mode"
        }), ": режим воспроизведения (", (0,jsx_runtime.jsx)(_components.code, {
          children: "WrapMode.Once"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "WrapMode.Loop"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "WrapMode.PingPong"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "WrapMode.ClampForever"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "speed"
        }), ": скорость воспроизведения"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "альтернативные-способы",
      children: "Альтернативные способы:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-kotlin",
        children: "player playOnce \"wave\"\nplayer playLooped \"idle\"\nplayer playFreeze \"pose\"\nplayer playPingPong \"dance\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "️-остановка-анимации",
      children: "⏹️ Остановка анимации:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-kotlin",
        children: "player stop \"wave\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "сохранение-игроков",
      children: "Сохранение игроков"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["По умолчанию никакие игроки не запоминаются движком, но движок предоставляет метод ", (0,jsx_runtime.jsx)(_components.code, {
        children: "rememberEntity()"
      }), " для запоминания сущности:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-kts",
        children: "script {\n    val player = rememberEntity(\"Halva\") { server.players[\"HollowHorizon\"] }\n    \n    state(\"main\") {\n        player say \"Привет!\"\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "В данном случае движок создаст переменную только в том случае если игрока нет в сохранении. Иначе же движок будет ждать, пока игрок не зайдёт в мир."
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