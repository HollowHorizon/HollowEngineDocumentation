"use strict";
(self["webpackChunkmy_docs"] = self["webpackChunkmy_docs"] || []).push([[7476],{

/***/ 5044:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_scripting_scene_effect_bedrock_particles_md_dad_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-scripting-scene-effect-bedrock-particles-md-dad.json
const site_docs_scripting_scene_effect_bedrock_particles_md_dad_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"scripting/scene/effect/bedrock-particles","title":"Bedrock-партиклы","description":"Воспроизводите любое аудио прямо в игре!","source":"@site/docs/scripting/scene/effect/bedrock-particles.md","sourceDirName":"scripting/scene/effect","slug":"/scripting/scene/effect/bedrock-particles","permalink":"/HollowEngineDocumentation/docs/scripting/scene/effect/bedrock-particles","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/scripting/scene/effect/bedrock-particles.md","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_position":2,"title":"Bedrock-партиклы"},"sidebar":"tutorialSidebar","previous":{"title":"Аудио","permalink":"/HollowEngineDocumentation/docs/scripting/scene/effect/audio"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(8453);
;// ./docs/scripting/scene/effect/bedrock-particles.md


const frontMatter = {
	sidebar_position: 2,
	title: 'Bedrock-партиклы'
};
const contentTitle = '🌌 Bedrock-партиклы';

const assets = {

};




const toc = [{
  "value": "💥 Воспроизведение партиклов",
  "id": "-воспроизведение-партиклов",
  "level": 2
}, {
  "value": "📍 По координате (<code>Level.bedrockParticles</code>)",
  "id": "-по-координате-levelbedrockparticles",
  "level": 3
}, {
  "value": "🧍‍♂️ На сущности (<code>LivingEntity.bedrockParticles</code>)",
  "id": "️-на-сущности-livingentitybedrockparticles",
  "level": 3
}, {
  "value": "🛠️ Как это работает",
  "id": "️-как-это-работает",
  "level": 2
}, {
  "value": "⚠️ Ошибки",
  "id": "️-ошибки",
  "level": 2
}, {
  "value": "✨ Пример",
  "id": "-пример",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
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
          id: "-bedrock-партиклы",
          children: "🌌 Bedrock-партиклы"
        })
      }), (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Воспроизводите любое аудио прямо в игре!"
        })
      }), (0,jsx_runtime.jsx)("link", {
        rel: "prefetch",
        as: "image",
        href: "@site/static/img/headers/particles.webp"
      }), (0,jsx_runtime.jsx)("div", {
        className: "cont",
        children: (0,jsx_runtime.jsx)("div", {
          className: "show",
          id: "mask",
          children: (0,jsx_runtime.jsx)(_components.p, {
            children: (0,jsx_runtime.jsx)(_components.img, {
              alt: "Welcome",
              src: (__webpack_require__(9755)/* ["default"] */ .A) + "",
              width: "960",
              height: "540"
            })
          })
        })
      }), (0,jsx_runtime.jsx)(_components.hr, {})]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Система позволяет воспроизводить ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://learn.microsoft.com/en-us/minecraft/creator/reference/content/particlesreference/",
        children: "Bedrock партиклы"
      }), " в нужной точке мира или на сущности. Эффекты должны быть заранее подготовлены в формате Bedrock ", (0,jsx_runtime.jsx)(_components.code, {
        children: ".bedrock.json"
      }), " в папке ", (0,jsx_runtime.jsx)(_components.code, {
        children: "particles"
      }), " вашего проекта (", (0,jsx_runtime.jsx)(_components.code, {
        children: "/hollowengine/assets/modid/particles/"
      }), ")."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-воспроизведение-партиклов",
      children: "💥 Воспроизведение партиклов"
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "-по-координате-levelbedrockparticles",
      children: ["📍 По координате (", (0,jsx_runtime.jsx)(_components.code, {
        children: "Level.bedrockParticles"
      }), ")"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-kotlin",
        children: "level.bedrockParticles(pos(0.0, 64.0, 0.0), \"modid:particles/portal.bedrock.json\")\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "☝️ Эффект появится в заданной позиции у всех игроков в измерении."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "️-на-сущности-livingentitybedrockparticles",
      children: ["🧍‍♂️ На сущности (", (0,jsx_runtime.jsx)(_components.code, {
        children: "LivingEntity.bedrockParticles"
      }), ")"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-kotlin",
        children: "player.bedrockParticles(\"modid:particles/fire_aura.bedrock.json\")\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["🌀 Частицы будут следовать за игроком (или другой ", (0,jsx_runtime.jsx)(_components.code, {
          children: "LivingEntity"
        }), ") с поддержкой анимации через Molang."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "️-как-это-работает",
      children: "🛠️ Как это работает"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Отправляется ", (0,jsx_runtime.jsx)(_components.code, {
          children: "SpawnParticlesPacket"
        }), " на клиента"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Если указана ", (0,jsx_runtime.jsx)(_components.code, {
          children: "pos"
        }), ", эффект создаётся в заданной позиции"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Если указана ", (0,jsx_runtime.jsx)(_components.code, {
          children: "entity"
        }), ", эффект привязывается к ней"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Партиклы загружаются из кэша ", (0,jsx_runtime.jsx)(_components.code, {
          children: "BedrockParticles.PARTICLES"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["На клиенте используется ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ParticlesProvider"
        }), " с ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ParticleEffect.fromFile(...)"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "️-ошибки",
      children: "⚠️ Ошибки"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Если эффект не найден:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Particle modid:particles/missing.json not found!\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Убедитесь, что имя указано корректно и файл доступен по ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ResourceLocation"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-пример",
      children: "✨ Пример"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-kotlin",
        children: "fun castSpell(player: Player) {\n    player.bedrockParticles(\"magic:particles/spell_cast.json\")\n    player.say(\"💫 Заклинание применено!\")\n}\n"
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

/***/ 9755:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/particles-4211bd60be0050ab465b0afe47544882.webp");

/***/ })

}]);