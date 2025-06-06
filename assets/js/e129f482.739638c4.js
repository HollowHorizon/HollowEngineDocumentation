"use strict";
(self["webpackChunkmy_docs"] = self["webpackChunkmy_docs"] || []).push([[1094],{

/***/ 8377:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/audio-60eee82e730f820984f5adb6b8577937.webp");

/***/ }),

/***/ 8825:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_scripting_scene_effect_audio_md_e12_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-scripting-scene-effect-audio-md-e12.json
const site_docs_scripting_scene_effect_audio_md_e12_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"scripting/scene/effect/audio","title":"Аудио","description":"Воспроизводите любое аудио прямо в игре!","source":"@site/docs/scripting/scene/effect/audio.md","sourceDirName":"scripting/scene/effect","slug":"/scripting/scene/effect/audio","permalink":"/HollowEngineDocumentation/docs/scripting/scene/effect/audio","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/scripting/scene/effect/audio.md","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1,"title":"Аудио"},"sidebar":"tutorialSidebar","previous":{"title":"Эффекты","permalink":"/HollowEngineDocumentation/docs/category/эффекты"},"next":{"title":"Bedrock-партиклы","permalink":"/HollowEngineDocumentation/docs/scripting/scene/effect/bedrock-particles"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(8453);
;// ./docs/scripting/scene/effect/audio.md


const frontMatter = {
	sidebar_position: 1,
	title: 'Аудио'
};
const contentTitle = '🔊 Аудио';

const assets = {

};




const toc = [{
  "value": "📁 Поддерживаемые форматы",
  "id": "-поддерживаемые-форматы",
  "level": 2
}, {
  "value": "▶️ Воспроизведение звука",
  "id": "️-воспроизведение-звука",
  "level": 2
}, {
  "value": "📌 Для мира / уровня (<code>Level</code>)",
  "id": "-для-мира--уровня-level",
  "level": 3
}, {
  "value": "Или с параметрами:",
  "id": "или-с-параметрами",
  "level": 4
}, {
  "value": "👤 Для конкретного игрока (<code>Player</code>)",
  "id": "-для-конкретного-игрока-player",
  "level": 3
}, {
  "value": "Или с дополнительными параметрами:",
  "id": "или-с-дополнительными-параметрами",
  "level": 4
}, {
  "value": "🧠 Обработка на клиенте",
  "id": "-обработка-на-клиенте",
  "level": 2
}, {
  "value": "⚙️ Пример скрипта",
  "id": "️-пример-скрипта",
  "level": 2
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
          id: "-аудио",
          children: "🔊 Аудио"
        })
      }), (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Воспроизводите любое аудио прямо в игре!"
        })
      }), (0,jsx_runtime.jsx)("link", {
        rel: "prefetch",
        as: "image",
        href: "@site/static/img/headers/audio.webp"
      }), (0,jsx_runtime.jsx)("div", {
        className: "cont",
        children: (0,jsx_runtime.jsx)("div", {
          className: "show",
          id: "mask",
          children: (0,jsx_runtime.jsx)(_components.p, {
            children: (0,jsx_runtime.jsx)(_components.img, {
              alt: "Welcome",
              src: (__webpack_require__(8377)/* ["default"] */ .A) + "",
              width: "960",
              height: "540"
            })
          })
        })
      }), (0,jsx_runtime.jsx)(_components.hr, {})]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Система позволяет воспроизводить настраиваемые звуки (в формате ", (0,jsx_runtime.jsx)(_components.code, {
        children: ".mp3"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: ".ogg"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: ".wav"
      }), ") как для конкретного игрока, так и глобально по определённым координатам в мире."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-поддерживаемые-форматы",
      children: "📁 Поддерживаемые форматы"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: ".mp3"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: ".ogg"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: ".wav"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Файлы должны быть размещены в ресурсах для аудио (", (0,jsx_runtime.jsx)(_components.code, {
        children: "/hollowengine/assets/modid/audio"
      }), "), и использовать ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ResourceLocation"
      }), " (", (0,jsx_runtime.jsx)(_components.code, {
        children: "modid:audio/path/to/sound.ogg"
      }), ") в скриптах."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Эта система отличается от ванильной и не требует ", (0,jsx_runtime.jsx)(_components.code, {
        children: "sounds.json"
      }), ", к тому же она поддерживает больше форматов."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "️-воспроизведение-звука",
      children: "▶️ Воспроизведение звука"
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "-для-мира--уровня-level",
      children: ["📌 Для мира / уровня (", (0,jsx_runtime.jsx)(_components.code, {
        children: "Level"
      }), ")"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-kotlin",
        children: "level playSound \"modid:audio/ambient.ogg\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "или-с-параметрами",
      children: "Или с параметрами:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-kotlin",
        children: "level.playSound(\n    location = \"modid:audio/explosion.mp3\",\n    volume = 2.0f,\n    pitch = 0.8f,\n    position = pos(10.0, 64.0, -5.0),\n    velocity = pos(0.0, 0.0, 0.0),\n    relative = false\n)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "🔄 Звук проигрывается для всех игроков в мире."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "-для-конкретного-игрока-player",
      children: ["👤 Для конкретного игрока (", (0,jsx_runtime.jsx)(_components.code, {
        children: "Player"
      }), ")"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-kotlin",
        children: "player playSound \"modid:audio/voice.wav\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "или-с-дополнительными-параметрами",
      children: "Или с дополнительными параметрами:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-kotlin",
        children: "player.playSound(\n    location = \"modid:audio/footstep.ogg\",\n    volume = 1.5f,\n    pitch = 1.2f,\n    position = Vec3(5.0, 70.0, 5.0),\n    velocity = null,\n    relative = true\n)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["☝️ ", (0,jsx_runtime.jsx)(_components.code, {
          children: "relative = true"
        }), " — звук будет восприниматься как \"играющий внутри головы\" (без пространственной привязки).\n", (0,jsx_runtime.jsx)(_components.code, {
          children: "relative = false"
        }), " — позиция и направление движения будут учитываться."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-обработка-на-клиенте",
      children: "🧠 Обработка на клиенте"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "На стороне клиента, когда звук воспроизводится:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Он ищется в кэше (", (0,jsx_runtime.jsx)(_components.code, {
          children: "SOUNDS"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Если не найден — загружается и кэшируется"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Автоматически определяется формат (", (0,jsx_runtime.jsx)(_components.code, {
          children: ".mp3"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".ogg"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".wav"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Настраивается громкость, высота, позиция и вектор скорости"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "️-пример-скрипта",
      children: "⚙️ Пример скрипта"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-kotlin",
        children: "suspend fun dramaticEntrance(player: Player) {\n    player.playSound(\"modid:sounds/stinger.ogg\", volume = 2f, pitch = 0.95f)\n    player.say(\"Ты пришёл…\")\n}\n"
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



/***/ })

}]);