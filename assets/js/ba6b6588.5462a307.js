"use strict";
(self["webpackChunkmy_docs"] = self["webpackChunkmy_docs"] || []).push([[3251],{

/***/ 2047:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_scripting_scene_intro_md_ba6_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-scripting-scene-intro-md-ba6.json
const site_docs_scripting_scene_intro_md_ba6_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"scripting/scene/intro","title":"Создание сцены","description":"Всё о том, как создавать сцены и работать с ними.","source":"@site/docs/scripting/scene/intro.md","sourceDirName":"scripting/scene","slug":"/scripting/scene/intro","permalink":"/HollowEngineDocumentation/docs/scripting/scene/intro","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/scripting/scene/intro.md","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1,"title":"Создание сцены"},"sidebar":"tutorialSidebar","previous":{"title":"Сцена","permalink":"/HollowEngineDocumentation/docs/category/сцена"},"next":{"title":"Персонажи","permalink":"/HollowEngineDocumentation/docs/category/персонажи"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(8453);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-mermaid/lib/theme/Mermaid/index.js + 8 modules
var Mermaid = __webpack_require__(6406);
;// ./docs/scripting/scene/intro.md


const frontMatter = {
	sidebar_position: 1,
	title: 'Создание сцены'
};
const contentTitle = 'Что такое сцены и как с ними работать?';

const assets = {

};





const toc = [{
  "value": "Что такое сцена?",
  "id": "что-такое-сцена",
  "level": 2
}, {
  "value": "Как создать сцену?",
  "id": "как-создать-сцену",
  "level": 2
}, {
  "value": "Как настроить сцену?",
  "id": "как-настроить-сцену",
  "level": 2
}, {
  "value": "Переменные",
  "id": "переменные",
  "level": 2
}, {
  "value": "Переходы между состояниями",
  "id": "переходы-между-состояниями",
  "level": 2
}, {
  "value": "Вложенные состояния",
  "id": "вложенные-состояния",
  "level": 2
}, {
  "value": "Сложные переходы",
  "id": "сложные-переходы",
  "level": 2
}, {
  "value": "Циклы, Ветвления, Корутины и прочая логика",
  "id": "циклы-ветвления-корутины-и-прочая-логика",
  "level": 2
}, {
  "value": "Асинхронные действия",
  "id": "асинхронные-действия",
  "level": 2
}, {
  "value": "Пример параллельного запуска",
  "id": "пример-параллельного-запуска",
  "level": 3
}, {
  "value": "Возможности async",
  "id": "возможности-async",
  "level": 3
}, {
  "value": "Функция <code>Deferred.join()</code>",
  "id": "функция-deferredjoin",
  "level": 4
}, {
  "value": "Функция <code>Deferred.start()</code>",
  "id": "функция-deferredstart",
  "level": 4
}, {
  "value": "Функция <code>Deferred.cancel()</code> / Параметр <code>Deferred.isActive</code>",
  "id": "функция-deferredcancel--параметр-deferredisactive",
  "level": 4
}, {
  "value": "Групповое ожидание задач",
  "id": "групповое-ожидание-задач",
  "level": 3
}, {
  "value": "Особенности",
  "id": "особенности",
  "level": 4
}];
function _createMdxContent(props) {
  const _components = {
    admonition: "admonition",
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
          id: "что-такое-сцены-и-как-с-ними-работать",
          children: "Что такое сцены и как с ними работать?"
        })
      }), (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Всё о том, как создавать сцены и работать с ними."
        })
      }), (0,jsx_runtime.jsx)("link", {
        rel: "prefetch",
        as: "image",
        href: "@site/static/img/headers/scene.webp"
      }), (0,jsx_runtime.jsx)("div", {
        className: "cont",
        children: (0,jsx_runtime.jsx)("div", {
          className: "show",
          id: "mask",
          children: (0,jsx_runtime.jsx)(_components.p, {
            children: (0,jsx_runtime.jsx)(_components.img, {
              alt: "Welcome",
              src: (__webpack_require__(8255)/* ["default"] */ .A) + "",
              width: "960",
              height: "540"
            })
          })
        })
      }), (0,jsx_runtime.jsx)(_components.hr, {})]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "что-такое-сцена",
      children: "Что такое сцена?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Сцена — это автономный скрипт-объект, который описывает последовательность состояний (стейт-машину) и логику переходов между ними. Каждая сцена хранит своё внутреннее состояние в виде иерархии узлов."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Сцена определяет логику и последовательность действий (например, диалог, анимация, логика миссии и т. п.) в виде графа узлов, где переходы между узлами могут быть как явными (через ", (0,jsx_runtime.jsx)(_components.code, {
        children: "transition(path)"
      }), "), так и неявными (когда внутри тела узла устанавливается специальный ключ ", (0,jsx_runtime.jsx)(_components.code, {
        children: "__state__"
      }), " в его ", (0,jsx_runtime.jsx)(_components.code, {
        children: "CompoundTag"
      }), ")."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Например, у нас есть определённый квест, состоящий из множества состояний и развилок. В виде графа оно будет выглядеть как-то так:"
    }), "\n", (0,jsx_runtime.jsx)(Mermaid/* default */.A, {
      value: `
graph TB
  Начало(("Начало"))
  Вступление(("Персонаж приходит к игроку и предлагает квест."))
  Выбор_квеста(("Игрок выбирает квест"))
  КвестА(("Спасти заложника"))
  КвестБ(("Похитить артефакт"))
  A1_Скрытность(("Игрок выбрал действовать скрытно."))
  A2_Прямой_бой(("Игрок решил идти напролом."))
  A1_Успех(("Игрок смог спасти заложника."))
  A1_Провал(("Игрока заметили."))
  A2_Успех(("Штурм удался"))
  A2_Провал(("Игрок проиграл"))
  B1_Переговоры(("Игрок решил попытаться договориться"))
  B2_Кража(("Игрок решил незаметно украсть артефакт"))
  B1_Успех(("Договоры прошли успешно"))
  B1_Провал(("Договоры провалились"))
  B2_Успех(("Артефакт украден"))
  B2_Провал(("Игрока заметили"))
  После_Квеста(("После квеста"))
  Финальный_Выбор(("Финальный выбор"))
  Конец_Добро(("Конец: Честь и справедливость"))
  Конец_Нейтрал(("Конец: Свой путь"))
  Конец_Зло(("Конец: Мощь через страх"))
  Начало --> Вступление
  Вступление --> Выбор_квеста
  Выбор_квеста -->|«Спасти заложника»| КвестА
  Выбор_квеста -->|«Похитить артефакт»| КвестБ
  КвестА -->|«Действовать скрытно»| A1_Скрытность
  КвестА -->|«Штурмовать»| A2_Прямой_бой
  A1_Скрытность -->|«Удача»| A1_Успех
  A1_Скрытность -->|«Провал»| A1_Провал
  A2_Прямой_бой -->|«Удача»| A2_Успех
  A2_Прямой_бой -->|«Провал»| A2_Провал
  A1_Успех --> После_Квеста
  A1_Провал --> A2_Прямой_бой
  A2_Успех --> После_Квеста
  A2_Провал -->|«Ранен, эвакуация»| После_Квеста
  КвестБ -->|«Переговоры»| B1_Переговоры
  КвестБ -->|«Кража»| B2_Кража
  B1_Переговоры -->|«Удача»| B1_Успех
  B1_Переговоры -->|«Провал»| B1_Провал
  B2_Кража -->|«Удача»| B2_Успех
  B2_Кража -->|«Провал»| B2_Провал
  B1_Успех --> После_Квеста
  B1_Провал --> B2_Кража
  B2_Успех --> После_Квеста
  B2_Провал -->|«Пойманы и отпущены»| После_Квеста
  После_Квеста --> Финальный_Выбор
  Финальный_Выбор -->|«Вернуться к людям»| Конец_Добро
  Финальный_Выбор -->|«Жить самостоятельно»| Конец_Нейтрал
  Финальный_Выбор -->|«Воспользоваться силой»| Конец_Зло

`
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "В коде вам нужно будет записать все эти состояния с различной логикой внутри каждого состояния, а также переходы между ними."
    }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      title: "Как работают сохранения?",
      type: "warning",
      children: [(0,jsx_runtime.jsx)(_components.p, {
        children: "Если выйти из игры во время сцены, то движок сохранил лишь состояние, в котором находился игрок в этот момент и при перезапуске он начнёт это состояние заново."
      }), (0,jsx_runtime.jsx)(_components.p, {
        children: "Также Вы можете сохранять различные данные в хранилище состояния, об этом будет рассказано ниже."
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "как-создать-сцену",
      children: "Как создать сцену?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Для начала создайте новый скрипт-сцену и укажите в нём такую конструкцию:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-kts",
        children: "script {\n    state(\"main\") {\n        // Тут будет Ваш код\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["По умолчанию при запуске скрипта он переходит в состояние ", (0,jsx_runtime.jsx)(_components.code, {
        children: "main"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Чисто технически вы можете вообще забить на состояния и писать весь код прямо внутри script, но никакого сохранения тогда не будет."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "как-настроить-сцену",
      children: "Как настроить сцену?"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "переменные",
      children: "Переменные"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Прежде всего, помимо самих состояний вы можете также создавать переменные в скрипте."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Обратиться к этой переменной Вы сможете из любого состояния, например:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-kts",
        children: "script {\n    var power = 0\n    \n    state(\"main\") {\n        println(power)\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Но такая переменная будет сброшена при перезапуске, поэтому рекомендуется использовать конструкцию ", (0,jsx_runtime.jsx)(_components.code, {
        children: "remember(name: String, () -> T): Property<T>"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-kts",
        children: "script {\n    var power: Int by remember(\"script_power\") { 0 }\n    \n    state(\"main\") {\n        println(power)\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "В этом случае он запишет вместе с данными скрипта и значение переменной."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Но помните, ", (0,jsx_runtime.jsx)(_components.code, {
        children: "remember"
      }), " может сохранить не все данные, а только сериализуемые. Для этого используется библиотека KotlinX Serialization. Если не хотите в этом всём разбираться, то сохраняйте только примитивные типы (числа и строки)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "переходы-между-состояниями",
      children: "Переходы между состояниями"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Чтобы перейти из одного состояния в другое используется метод ", (0,jsx_runtime.jsx)(_components.code, {
        children: "transition(name: String)"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-kts",
        children: "script {\n    state(\"main\") {\n        transition(\"Ожидание\") // Переходим в состояние \"Ожидание\"\n    }\n    \n    state(\"Ожидание\") {\n        wait(10.sec)\n        transition(\"main\") // Можно вернутся в предыдущее состояние (Оно начнётся заново)\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Учтите, что ", (0,jsx_runtime.jsx)(_components.code, {
        children: "transition"
      }), ", тут же останавливает текущее состояние и переходит в следующее, так что если его запустить в середине первого состояния, то закончив выполнение второго, он не вернётся к первому."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "вложенные-состояния",
      children: "Вложенные состояния"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Вы можете создавать состояния внутри состояний. По умолчанию скрипт сам перейдёт во вложенное состояние:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-kts",
        children: "script {\n    state(\"main\") {\n        wait(10.sec)\n        println(\"Запускаю скрипт\")\n        \n        state(\"main\") {\n            println(\"Это вложенный main, он запустится после того, что прописано выше.\")\n            transition(\"Состояние 2\")\n        }\n        \n        state(\"Состояние 1\") {\n            println(\"Этот код запустится после второго состояния, потому что так прописано в переходе\")\n        }\n        \n        state(\"Состояние 2\") {\n            println(\"Этот код запустится сразу после вложенного main\")\n            transition(\"Состояние 1\")\n        }\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "сложные-переходы",
      children: "Сложные переходы"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "При переходах вы можете спускаться с текущего уровня или подниматься на уровень выше:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-kts",
        children: "script {\n    state(\"main\") {\n        wait(10.sec)\n        println(\"Запускаю скрипт\")\n        \n        state(\"main\") {\n            println(\"Это вложенный main, он запустится после того, что прописано выше.\")\n            transition(\"../Ещё одно состояние\") // Переход на уровень ниже относительно текущего состояния\n        }\n        \n        state(\"Состояние 1\") {\n            println(\"Этот код запустится после второго состояния, потому что так прописано в переходе\")\n        }\n        \n        state(\"Состояние 2\") {\n            println(\"Этот код запустится сразу после вложенного main\")\n            transition(\"Состояние 1\")\n        }\n    }\n    \n    state(\"Ещё одно состояние\") {\n        println(\"Переход сюда будет через вложенный main\")\n        transition(\"main/Состояние 2\") // Переход на уровень выше относительно текущего состояния\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "При необходимости в transition вы можете указывать локальный путь к разным состояниям:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "transition(\"Ещё одно состояние\")"
        }), ": Переход в состояние на том же уровне."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "transition(\"../Ещё одно состояние\")"
        }), ": Переход в состояние на уровень выше относительно текущего."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "transition(\"./Состояние 1\")"
        }), ": Переход во вложенное состояние, которое объявлено внутри текущего (например внутри первого ", (0,jsx_runtime.jsx)(_components.code, {
          children: "main"
        }), "). Учтите, что сначала вам нужно объявить само состояние, а уже потом переходить в него!"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "transition(\"/main/main\")"
        }), ": Переход в состояние начиная с корневого состояния. Как с путём начиная с диска ", (0,jsx_runtime.jsx)(_components.code, {
          children: "С:/"
        }), " в Windows."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "циклы-ветвления-корутины-и-прочая-логика",
      children: "Циклы, Ветвления, Корутины и прочая логика"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Внутри состояний Вы можете писать код при помощи корутин. Это такой подход к разработке, когда Вы можете \"Поставить код на паузу\" до выполнения определённых функций, например:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "wait(3.min + 12.sec)"
        }), ": Приостановить выполнение состояния на 3 минуты 12 секунд"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "npc move pos(x, y, z)"
        }), ": Приостановить выполнение состояния, пока Персонаж не дойдёт до координат [x, y, z]."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "player.waitPos(pos(x, y, z))"
        }), ": Приостановить выполнение состояния, пока Игрок не дойдёт до координат [x, y, z]."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Вы также всегда можете использовать обычные циклы и ветвления в комбинации с приостанавливаемыми методами, например:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-kts",
        children: "script {\n    val npc1 = ...\n    val npc2 = ...\n    val npc3 = ...\n    val npc4 = ...\n    \n    val group = listOf(npc1, npc2, npc3, npc4)\n    \n    state(\"loop\") {\n        group.forEach { it move pos(x, y, z) } // Учтите, что при подобном подходе все нпс будут последовательно идти к точке по одному, а не все сразу\n    }\n    \n    state(\"if\") {\n        group.forEach {\n            if(it.health > it.maxHelth / 2) {\n                it say \"У меня со здоровьем всё хорошо\"\n            } else {\n                it say \"У меня со здоровьем всё плохо\"\n            }\n        }\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "асинхронные-действия",
      children: "Асинхронные действия"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Учитывая, что корутины приостанавливают выполнение скрипта, иногда Вам может потребоваться, чтобы выполнялось несколько приостанавливаемых действий одновременно. Для этого в системе предусмотрена возможность запуска асинхронных задач внутри состояний с помощью функции ", (0,jsx_runtime.jsx)(_components.code, {
        children: "async"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Асинхронная задача не приостанавливает выполнение текущего состояния — вместо этого она запускается параллельно (внутри игрового корутинного контекста) и возвращает объект Deferred, с которым можно работать: ожидать завершения, проверять статус, отменять и т.д."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Но помните, ", (0,jsx_runtime.jsx)(_components.code, {
        children: "async"
      }), " не сохраняется, как и всё кроме ", (0,jsx_runtime.jsx)(_components.code, {
        children: "remeber"
      }), ", внутри state."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "пример-параллельного-запуска",
      children: "Пример параллельного запуска"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-kts",
        children: "script {\n    state(\"parallel\") {\n        val npc1 = ...\n        val npc2 = ...\n\n        // Оба нпс пойдут одновременно\n        val job1 = async { npc1 move pos(10, 64, 10) }\n        val job2 = async { npc2 move pos(15, 64, 15) }\n\n        job1.join() // Ждёт, пока job1 не завершится\n        job2.join()\n\n        // Но код продолжится только когда оба дойдут до точки\n        player.send(\"Оба NPC дошли до точки\")\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["В этом примере оба NPC начинают движение одновременно, и скрипт ждёт их окончания с помощью ", (0,jsx_runtime.jsx)(_components.code, {
        children: "join()"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "возможности-async",
      children: "Возможности async"
    }), "\n", (0,jsx_runtime.jsxs)(_components.h4, {
      id: "функция-deferredjoin",
      children: ["Функция ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Deferred.join()"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Ожидание завершения асинхронной задачи:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-kts",
        children: "val job = async { wait(10.sec) }\njob.join() // Ожидает завершения\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.h4, {
      id: "функция-deferredstart",
      children: ["Функция ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Deferred.start()"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Можно указать, когда начинать выполнение задачи:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-kts",
        children: "val job = async(start = CoroutineStart.LAZY) {\n    npc move pos(10, 64, 10)\n}\n// Здесь задача ещё не запущена\njob.start() // Явный запуск\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Доступны режимы:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "DEFAULT"
        }), " — задача запускается сразу."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "LAZY"
        }), " — задача начнёт выполняться только после вызова ", (0,jsx_runtime.jsx)(_components.code, {
          children: "start()"
        }), " или ", (0,jsx_runtime.jsx)(_components.code, {
          children: "await()"
        }), " / ", (0,jsx_runtime.jsx)(_components.code, {
          children: "join()"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "ATOMIC"
        }), " и ", (0,jsx_runtime.jsx)(_components.code, {
          children: "UNDISPATCHED"
        }), " — для продвинутого использования."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h4, {
      id: "функция-deferredcancel--параметр-deferredisactive",
      children: ["Функция ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Deferred.cancel()"
      }), " / Параметр ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Deferred.isActive"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Можно отменить задачу:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-kts",
        children: "val job = async { ... }\n\nif (!condition) job.cancel()\n\nif (!job.isActive) {\n    say(\"Задача была прервана\")\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "групповое-ожидание-задач",
      children: "Групповое ожидание задач"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Существует удобный способ ожидать множество задач:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-kts",
        children: "val tasks = listOf(\n    async { npc1 move pos(10, 64, 10) },\n    async { npc2 move pos(15, 64, 15) },\n    async { npc3 move pos(20, 64, 20) }\n)\n\ntasks.forEach { it.join() }\n\nsay(\"Все NPC дошли до точки\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "особенности",
      children: "Особенности"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "async"
        }), " работает только внутри состояний, так как использует текущий игровой корутинный контекст."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Вызовы внутри async ", " не блокируют основной поток игры."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Вы можете запускать логически параллельные действия, например:", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Параллельные анимации"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Параллельные диалоги"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Сложные координации персонажей и объектов"
          }), "\n"]
        }), "\n"]
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



/***/ }),

/***/ 8255:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/scene-de0666b5e133868f528651e79c926820.webp");

/***/ })

}]);