"use strict";
(self["webpackChunkmy_docs"] = self["webpackChunkmy_docs"] || []).push([[2247],{

/***/ 4292:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_scripting_scene_npc_creating_md_f1b_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-scripting-scene-npc-creating-md-f1b.json
const site_docs_scripting_scene_npc_creating_md_f1b_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"scripting/scene/npc/creating","title":"Создание Персонажа","description":"Создайте себе функционального персонажа.","source":"@site/docs/scripting/scene/npc/creating.md","sourceDirName":"scripting/scene/npc","slug":"/scripting/scene/npc/creating","permalink":"/hollowengine.github.io/docs/scripting/scene/npc/creating","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/scripting/scene/npc/creating.md","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1,"title":"Создание Персонажа"},"sidebar":"tutorialSidebar","previous":{"title":"Персонажи","permalink":"/hollowengine.github.io/docs/category/персонажи"},"next":{"title":"Действия Персонажей","permalink":"/hollowengine.github.io/docs/scripting/scene/npc/npc-actions"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(8453);
;// ./docs/scripting/scene/npc/creating.md


const frontMatter = {
	sidebar_position: 1,
	title: 'Создание Персонажа'
};
const contentTitle = 'Создание Персонажа';

const assets = {

};




const toc = [{
  "value": "Подробности",
  "id": "подробности",
  "level": 2
}, {
  "value": "📦 Модель (model)",
  "id": "-модель-model",
  "level": 3
}, {
  "value": "🎨 Текстуры (textures)",
  "id": "-текстуры-textures",
  "level": 3
}, {
  "value": "🎞 Анимации (animations)",
  "id": "-анимации-animations",
  "level": 3
}, {
  "value": "🔧 Трансформация (transform)",
  "id": "-трансформация-transform",
  "level": 3
}, {
  "value": "Возвращаемое значение",
  "id": "возвращаемое-значение",
  "level": 3
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
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)("div", {
      align: "center",
      children: [(0,jsx_runtime.jsx)(_components.header, {
        children: (0,jsx_runtime.jsx)(_components.h1, {
          id: "создание-персонажа",
          children: "Создание Персонажа"
        })
      }), (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Создайте себе функционального персонажа."
        })
      }), (0,jsx_runtime.jsx)("link", {
        rel: "prefetch",
        as: "image",
        href: "@site/static/img/headers/npc-creating.webp"
      }), (0,jsx_runtime.jsx)("div", {
        className: "cont",
        children: (0,jsx_runtime.jsx)("div", {
          className: "show",
          id: "mask",
          children: (0,jsx_runtime.jsx)(_components.p, {
            children: (0,jsx_runtime.jsx)(_components.img, {
              alt: "Welcome",
              src: (__webpack_require__(8356)/* ["default"] */ .A) + "",
              width: "960",
              height: "540"
            })
          })
        })
      }), (0,jsx_runtime.jsx)(_components.hr, {})]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Для создания персонажа, управляемого скриптом (НИПа), используется функция ", (0,jsx_runtime.jsx)(_components.code, {
        children: "npc(...)"
      }), ", которая позволяет гибко задать\nвнешний вид, поведение, атрибуты, положение в мире и другие параметры. Ниже — описание всех доступных полей с примерами\nи пояснениями."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Поле"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Тип"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Значение по умолчанию"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Описание"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "pos"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "Pos"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Отсутствует"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Координаты спавна НИПа. Задаются через ", (0,jsx_runtime.jsx)(_components.code, {
              children: "pos(x, y, z)"
            }), "."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "name"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "String"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"NPC\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Имя НИПа, отображается в чате и (по умолчанию) над головой."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "model"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "String"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["\"hollowengine", ":models", "/entity/player_model.gltf\""]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Путь до ", (0,jsx_runtime.jsx)(_components.code, {
              children: ".gltf"
            }), "-модели НИПа. Поддерживается ", (0,jsx_runtime.jsx)(_components.code, {
              children: "mod_id:path"
            }), "."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "rotation"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "Rotation"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "rotation(0, 0)"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Направление взгляда НИПа: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "rotation(yaw, pitch)"
            }), "."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "world"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "String"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["\"minecraft", ":overworld", "\""]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Измерение, в котором заспавнится НИП."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "size"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "Pair<Float, Float>"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.6f to 1.8f"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Размер хитбокса НИПа: ширина и высота."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "attributes"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "Map<String, Float>"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "emptyMap()"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Кастомные атрибуты НИПа. Ключи — ID атрибутов, значения — их числовое значение."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "textures"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "Map<String, String>"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "emptyMap()"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Заменяет текстуры в модели. Ключ — ID текстуры в ", (0,jsx_runtime.jsx)(_components.code, {
              children: ".gltf"
            }), ", значение — путь до файла."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "animations"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "Map<AnimationType, String>"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "emptyMap()"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Привязка анимаций. Позволяет задать имя анимации для стандартных типов (например, ", (0,jsx_runtime.jsx)(_components.code, {
              children: "IDLE"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "WALK"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "ATTACK"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "DEATH"
            }), ")."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "transform"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "Transform"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Transform()"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Смещение, масштаб и поворот модели. Используется для точной подгонки позиций в модели."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "showName"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "Boolean"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "true"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Показывать ли имя НИПа над головой (", (0,jsx_runtime.jsx)(_components.code, {
              children: "true"
            }), " по умолчанию)."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "inverseHeadRotation"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "Boolean"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "false"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Переключатель для моделей, у которых голова вращается неправильно."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Все параметры указываются в скобках после названия функции через запятую в том же порядке, либо через их имя, например:\n", (0,jsx_runtime.jsx)(_components.code, {
        children: "npc(pos=pos(x, y, z), model=\"hollowengine:models/your_model.gltf\")"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Пример:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-kts",
        children: "val npcID = npc(\n    pos = pos(29, 85, 23),\n    name = \"НИП\",\n    model = \"my_mo_id:path/to/my_top_model.gltf\",\n    rotation = rotation(180, 0),\n    world = \"my_mod_id:my_dimension_id\",\n    size = 1f to 1.2f,\n    attributes = mapOf(\n        \"my_mod_id:my.best.attribute_one\" to 10f,\n        \"my_mod_id:my.best.attribute_two\" to 0.5f,\n    ),\n    textures = mapOf(\n        \"model/texture_id_one\" to \"my_mod_id:path/to/my_best_texture.png\",\n        \"model/texture_id_two\" to \"my_mod_id:path/to/my_another_texture.png\",\n    ),\n    animations = mapOf(\n        AnimationType.IDLE to \"bestIdleAnimation\",\n        AnimationType.WALK to \"walkAnimLoop\",\n    ),\n    transform = Transform(\n        tX = 1.1f, tY = 0.4f, tZ = 3f,\n        rX = 90f, rY = 2.4f, rZ = 194f,\n        sX = 0.1f, sY = 1.001f, sZ = 9.2f\n    ),\n    showName = false,\n    inverseHeadRotation = true\n)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "подробности",
      children: "Подробности"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "-модель-model",
      children: "📦 Модель (model)"
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
      id: "-текстуры-textures",
      children: "🎨 Текстуры (textures)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Позволяют заменить встроенные текстуры модели. Используйте ID, указанные в .gltf, например:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-kts",
        children: "textures = mapOf(\n    \"model/base\" to \"my_mod:textures/npc_base.png\",\n    \"model/hat\" to \"my_mod:textures/hat.png\"\n)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Посмотреть названия оригинальных текстур можно командой ", (0,jsx_runtime.jsx)(_components.code, {
        children: "/hollowengine model <Путь к модели>"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "-анимации-animations",
      children: "🎞 Анимации (animations)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Пока не используются, в связи с переходом на полноценные контроллеры анимаций. Ждите отдельный раздел с ними."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "-трансформация-transform",
      children: "🔧 Трансформация (transform)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Используется, если модель смещена, перевёрнута или имеет неправильный масштаб:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-kts",
        children: "transform = Transform(\n    tX = 0f, tY = -1.2f, tZ = 0f, // смещение\n    rX = 0f, rY = 180f, rZ = 0f,  // поворот\n    sX = 1f, sY = 1f, sZ = 1f     // масштаб\n)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "возвращаемое-значение",
      children: "Возвращаемое значение"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Функция npc(...) возвращает ", (0,jsx_runtime.jsx)(_components.code, {
        children: "NpcEntity"
      }), " — игровую сущность наследованную от ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Mob"
      }), ", которую можно использовать для вызова функций в других частях скрипта:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-kts",
        children: "val npc = npc(pos(x, y, z)) \nvitalik move pos(x1, y1, z1)\nvitalik say \"Я прибыл!\"\n"
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

/***/ 8356:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/npc-creating-0a08ca02065e6d7305d4e29fec580361.webp");

/***/ })

}]);