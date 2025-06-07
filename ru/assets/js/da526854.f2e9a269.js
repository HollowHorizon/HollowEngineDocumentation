"use strict";
(self["webpackChunkmy_docs"] = self["webpackChunkmy_docs"] || []).push([[6882],{

/***/ 4636:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_scripting_scene_npc_controller_md_da5_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-scripting-scene-npc-controller-md-da5.json
const site_docs_scripting_scene_npc_controller_md_da5_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"scripting/scene/npc/controller","title":"Контроллер анимаций","description":"Контроллер анимаций — это мощный инструмент управления анимациями 3D-моделей. Он позволяет реализовать сложные анимационные системы с поддержкой:","source":"@site/docs/scripting/scene/npc/controller.md","sourceDirName":"scripting/scene/npc","slug":"/scripting/scene/npc/controller","permalink":"/HollowEngineDocumentation/ru/docs/scripting/scene/npc/controller","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/scripting/scene/npc/controller.md","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"sidebar_position":3,"title":"Контроллер анимаций"},"sidebar":"tutorialSidebar","previous":{"title":"Действия Персонажей","permalink":"/HollowEngineDocumentation/ru/docs/scripting/scene/npc/npc-actions"},"next":{"title":"Игроки","permalink":"/HollowEngineDocumentation/ru/docs/category/игроки"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(8453);
;// ./docs/scripting/scene/npc/controller.md


const frontMatter = {
	sidebar_position: 3,
	title: 'Контроллер анимаций'
};
const contentTitle = '🎭 Контроллер анимаций персонажа';

const assets = {

};



const toc = [{
  "value": "🧩 Основные компоненты",
  "id": "-основные-компоненты",
  "level": 2
}, {
  "value": "📘 Molang в контроллере",
  "id": "-molang-в-контроллере",
  "level": 2
}, {
  "value": "🔣 Примеры выражений",
  "id": "-примеры-выражений",
  "level": 3
}, {
  "value": "📊 Поддерживаемые переменные",
  "id": "-поддерживаемые-переменные",
  "level": 3
}, {
  "value": "⚙️ Пример создания контроллера",
  "id": "️-пример-создания-контроллера",
  "level": 2
}, {
  "value": "🧱 Слои анимаций",
  "id": "-слои-анимаций",
  "level": 2
}, {
  "value": "🔁 Состояния и переходы",
  "id": "-состояния-и-переходы",
  "level": 2
}, {
  "value": "Состояния",
  "id": "состояния",
  "level": 3
}, {
  "value": "Переходы",
  "id": "переходы",
  "level": 3
}, {
  "value": "🌈 Дерево смешивания",
  "id": "-дерево-смешивания",
  "level": 2
}, {
  "value": "🧬 Процедурные анимации",
  "id": "-процедурные-анимации",
  "level": 2
}, {
  "value": "🔁 Режимы проигрывания (<code>WrapMode</code>)",
  "id": "-режимы-проигрывания-wrapmode",
  "level": 2
}, {
  "value": "🪶 Маски",
  "id": "-маски",
  "level": 2
}, {
  "value": "🔄 Обновление и отправка",
  "id": "-обновление-и-отправка",
  "level": 2
}, {
  "value": "✅ Заключение",
  "id": "-заключение",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    blockquote: "blockquote",
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    hr: "hr",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
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
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "-контроллер-анимаций-персонажа",
        children: "🎭 Контроллер анимаций персонажа"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Контроллер анимаций — это мощный инструмент управления анимациями 3D-моделей. Он позволяет реализовать сложные анимационные системы с поддержкой:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Состояний и переходов между ними"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Смешивания анимаций (Blend Trees)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Процедурных анимаций"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Масок костей"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Поддержки Molang-выражений"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-основные-компоненты",
      children: "🧩 Основные компоненты"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Компонент"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Описание"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "Controller"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Главный класс, управляющий слоями анимаций."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "Layer"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Отдельный слой анимации (приоритет, маска, смешивание)."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "State"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Состояние: содержит ", (0,jsx_runtime.jsx)(_components.code, {
              children: "Clip"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "BlendTree"
            }), " или ", (0,jsx_runtime.jsx)(_components.code, {
              children: "ProceduralNode"
            }), "."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "Transition"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Переход между состояниями с условиями."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "BlendTree"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Плавное смешивание нескольких клипов по параметру."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "ProceduralNode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Узел для скриптовой анимации на Molang."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "ClipNode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Узел с обычной анимацией."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "Mask"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Маска костей, определяющая влияние слоя."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-molang-в-контроллере",
      children: "📘 Molang в контроллере"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "https://learn.microsoft.com/ru-ru/minecraft/creator/reference/content/molangreference/",
        children: "Molang"
      }), " — язык выражений, используемый для условий переходов, скоростей анимаций и т.п."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["В HollowCore он работает через ", (0,jsx_runtime.jsx)(_components.code, {
        children: "EntityQuery"
      }), ", предоставляющий переменные состояния сущности."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "-примеры-выражений",
      children: "🔣 Примеры выражений"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "q.is_moving"
        }), " — движется ли сущность"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "!q.is_alive"
        }), " — мертва ли сущность"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "min(q.ground_speed / 2, 3f)"
        }), " — ограничение скорости"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "-поддерживаемые-переменные",
      children: "📊 Поддерживаемые переменные"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Переменная"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Описание"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "q.ground_speed"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Скорость по земле"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "q.is_moving"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Движется ли"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "q.is_sneaking"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Приседает ли"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "q.is_sprinting"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Бежит ли"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "q.is_jumping"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Прыгает ли"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "q.velocity_y"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Вертикальная скорость"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "q.is_flying"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Летит ли"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "q.fall_ticks"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Сколько падает"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "q.is_swimming"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Плавает ли"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "q.is_sitting"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Сидит ли (в лодке и т.п.)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "q.is_sleeping"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Спит ли"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "q.is_hurt"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Получил ли урон"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "q.is_swinging"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Атакует ли"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "q.is_alive"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Жив ли"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "q.head_rot"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Поворот головы"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "️-пример-создания-контроллера",
      children: "⚙️ Пример создания контроллера"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-kotlin",
        children: "npc.controller = animationController {\n    layer(\"myLayer\", priority = 0, weight = 1f, mask = Mask.of(\"bone1\", \"!bone2\"), blendMode = Additive) {\n        stateMachine {\n            state(\"idle\") {\n                clip(\"idleAnim\", WrapMode.Loop)\n            }\n            state(\"walk\") {\n                clip(\"walkAnim\", WrapMode.Loop)\n            }\n            transition(\"idle\", \"walk\") {\n                condition(\"query.is_walking\")\n                duration(0.5f)\n            }\n            transition(\"walk\", \"idle\") {\n                condition(\"!query.is_walking\")\n                duration(0.5f)\n            }\n        }\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "✅ Объяснение:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Создается слой с маской костей и режимом ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Additive"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Определены состояния ", (0,jsx_runtime.jsx)(_components.code, {
          children: "idle"
        }), " и ", (0,jsx_runtime.jsx)(_components.code, {
          children: "walk"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Переходы активируются через Molang-выражения"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-слои-анимаций",
      children: "🧱 Слои анимаций"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Слои позволяют управлять приоритетом и избирательностью анимаций:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Имя"
          }), " — уникальный ID слоя"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Приоритет"
          }), " — чем выше, тем позже применяется"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Вес (weight)"
          }), " — степень влияния слоя (0.0 – 1.0)"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Маска"
          }), " — кости, на которые влияет слой"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Режим"
          }), ":"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "Override"
            }), " — замена предыдущих анимаций"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "Additive"
            }), " — добавление к текущей позе"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-состояния-и-переходы",
      children: "🔁 Состояния и переходы"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "состояния",
      children: "Состояния"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-kotlin",
        children: "state(\"run\") {\n    clip(\"runAnim\", WrapMode.Loop)\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Типы:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "clip()"
        }), " — обычная анимация"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "blendTree {}"
        }), " — плавное смешивание"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "procedural {}"
        }), " — процедурная анимация"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "переходы",
      children: "Переходы"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-kotlin",
        children: "transition(\"idle\", \"run\") {\n    condition(\"query.is_running\")\n    duration(0.3f)\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Параметры:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "condition(...)"
        }), " — Molang-выражение"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "duration(...)"
        }), " — длительность перехода"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "exitTime(...)"
        }), " — минимальное время в текущем состоянии"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "clip(...)"
        }), " — необязательный переходный клип"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-дерево-смешивания",
      children: "🌈 Дерево смешивания"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Используется для плавного перехода между клипами на основе переменной:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-kotlin",
        children: "blendTree {\n    clip(\"walkSlow\", threshold = 0f, WrapMode.Loop)\n    clip(\"walkFast\", threshold = 1f, WrapMode.Loop)\n    factor(\"query.ground_speed\", smoothingTime = 0.1f)\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "threshold"
        }), " — порог для клипа"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "factor(...)"
        }), " — переменная для интерполяции"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "smoothingTime"
        }), " — сглаживание перехода"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-процедурные-анимации",
      children: "🧬 Процедурные анимации"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Позволяют на лету изменять кости через Molang:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-kotlin",
        children: "procedural {\n    onEvaluate { context ->\n        context.setBoneRotation(\"head\", \"query.head_rot\")\n        context.setBoneTranslation(\"arm\", \"vec3(query.arm_x, query.arm_y, query.arm_z)\")\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.h2, {
      id: "-режимы-проигрывания-wrapmode",
      children: ["🔁 Режимы проигрывания (", (0,jsx_runtime.jsx)(_components.code, {
        children: "WrapMode"
      }), ")"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Режим"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Поведение"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "Once"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Проигрывается один раз"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "Loop"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Зациклен"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "PingPong"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Вперёд-назад"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "ClampForever"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Замирает на последнем кадре"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-маски",
      children: "🪶 Маски"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Позволяют ограничить влияние анимаций:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-kotlin",
        children: "Mask.of(\"spine\", \"!head\", \"left_arm\")\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Включает ", (0,jsx_runtime.jsx)(_components.code, {
          children: "spine"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "left_arm"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Исключает ", (0,jsx_runtime.jsx)(_components.code, {
          children: "head"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-обновление-и-отправка",
      children: "🔄 Обновление и отправка"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Контроллер:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Обновляется каждый кадр (", (0,jsx_runtime.jsx)(_components.code, {
          children: "update"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Применяет текущие состояния и переходы"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Отправляется автоматически с сервера на клиент"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Molang-компиляция выполняется асинхронно (~300мс)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "🔔 Система оптимизирована и не вызывает зависаний."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-заключение",
      children: "✅ Заключение"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Контроллеры анимаций HollowCore — это гибкая и масштабируемая система, идеально подходящая для создания реалистичных и реактивных NPC. Благодаря Molang, BlendTrees и слоям, можно создать поведение, приближенное к AAA-играм."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-kotlin",
        children: "npc.controller = animationController { ... }\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      title: "Маски",
      type: "note",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "💡 Используйте маски, чтобы изолировать движения частей тела, и BlendTree для плавных переходов!"
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


/***/ })

}]);