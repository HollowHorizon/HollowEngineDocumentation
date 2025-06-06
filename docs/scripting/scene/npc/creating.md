---
sidebar_position: 1
title: Создание Персонажа
---

import '@site/src/css/pages/img-show.css';

<div align="center">

# Создание Персонажа

**Создайте себе функционального персонажа.**

<link rel="prefetch" as="image" href="@site/static/img/headers/npc-creating.webp" />
<div className="cont"><div className="show" id="mask">
![Welcome](@site/static/img/headers/npc-creating.webp)
</div></div>

---

</div>

Для создания персонажа, управляемого скриптом (НИПа), используется функция `npc(...)`, которая позволяет гибко задать
внешний вид, поведение, атрибуты, положение в мире и другие параметры. Ниже — описание всех доступных полей с примерами
и пояснениями.

| Поле                  | Тип                          | Значение по умолчанию                          | Описание                                                                                                              |
|-----------------------|------------------------------|------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------|
| `pos`                 | `Pos`                        | Отсутствует                                    | Координаты спавна НИПа. Задаются через `pos(x, y, z)`.                                                                |
| `name`                | `String`                     | "NPC"                                          | Имя НИПа, отображается в чате и (по умолчанию) над головой.                                                           |
| `model`               | `String`                     | "hollowengine:models/entity/player_model.gltf" | Путь до `.gltf`-модели НИПа. Поддерживается `mod_id:path`.                                                            |
| `rotation`            | `Rotation`                   | rotation(0, 0)                                 | Направление взгляда НИПа: `rotation(yaw, pitch)`.                                                                     |
| `world`               | `String`                     | "minecraft:overworld"                          | Измерение, в котором заспавнится НИП.                                                                                 |
| `size`                | `Pair<Float, Float>`         | 0.6f to 1.8f                                   | Размер хитбокса НИПа: ширина и высота.                                                                                |
| `attributes`          | `Map<String, Float>`         | emptyMap()                                     | Кастомные атрибуты НИПа. Ключи — ID атрибутов, значения — их числовое значение.                                       |
| `textures`            | `Map<String, String>`        | emptyMap()                                     | Заменяет текстуры в модели. Ключ — ID текстуры в `.gltf`, значение — путь до файла.                                   |
| `animations`          | `Map<AnimationType, String>` | emptyMap()                                     | Привязка анимаций. Позволяет задать имя анимации для стандартных типов (например, `IDLE`, `WALK`, `ATTACK`, `DEATH`). |
| `transform`           | `Transform`                  | Transform()                                    | Смещение, масштаб и поворот модели. Используется для точной подгонки позиций в модели.                                |
| `showName`            | `Boolean`                    | true                                           | Показывать ли имя НИПа над головой (`true` по умолчанию).                                                             |
| `inverseHeadRotation` | `Boolean`                    | false                                          | Переключатель для моделей, у которых голова вращается неправильно.                                                    |

Все параметры указываются в скобках после названия функции через запятую в том же порядке, либо через их имя, например:
`npc(pos=pos(x, y, z), model="hollowengine:models/your_model.gltf")`.

Пример:

```kts
val npcID = npc(
    pos = pos(29, 85, 23),
    name = "НИП",
    model = "my_mo_id:path/to/my_top_model.gltf",
    rotation = rotation(180, 0),
    world = "my_mod_id:my_dimension_id",
    size = 1f to 1.2f,
    attributes = mapOf(
        "my_mod_id:my.best.attribute_one" to 10f,
        "my_mod_id:my.best.attribute_two" to 0.5f,
    ),
    textures = mapOf(
        "model/texture_id_one" to "my_mod_id:path/to/my_best_texture.png",
        "model/texture_id_two" to "my_mod_id:path/to/my_another_texture.png",
    ),
    animations = mapOf(
        AnimationType.IDLE to "bestIdleAnimation",
        AnimationType.WALK to "walkAnimLoop",
    ),
    transform = Transform(
        tX = 1.1f, tY = 0.4f, tZ = 3f,
        rX = 90f, rY = 2.4f, rZ = 194f,
        sX = 0.1f, sY = 1.001f, sZ = 9.2f
    ),
    showName = false,
    inverseHeadRotation = true
)
```

## Подробности

### 📦 Модель (model)
Используются .gltf или .glb файлы.

Файл должен быть доступен в ресурсах мода (через путь вида mod_id:models/path/to/file.gltf).

Вы можете добавить файл модели через загрузчик мода по пути `.minecraft/hollowengine/assets/your_project/models/file.gltf`, тогда путь в моде будет выглядеть так: `your_project:models/file.gltf`. Не забудьте перезагрузить ресурсы через F3+T, перед запуском скрипта.

Модель должна содержать нужные анимации и текстуры, если они планируются.

### 🎨 Текстуры (textures)
Позволяют заменить встроенные текстуры модели. Используйте ID, указанные в .gltf, например:

```kts
textures = mapOf(
    "model/base" to "my_mod:textures/npc_base.png",
    "model/hat" to "my_mod:textures/hat.png"
)
```

Посмотреть названия оригинальных текстур можно командой `/hollowengine model <Путь к модели>`.

### 🎞 Анимации (animations)

Пока не используются, в связи с переходом на полноценные контроллеры анимаций. Ждите отдельный раздел с ними.

### 🔧 Трансформация (transform)

Используется, если модель смещена, перевёрнута или имеет неправильный масштаб:

```kts
transform = Transform(
    tX = 0f, tY = -1.2f, tZ = 0f, // смещение
    rX = 0f, rY = 180f, rZ = 0f,  // поворот
    sX = 1f, sY = 1f, sZ = 1f     // масштаб
)
```

### Возвращаемое значение

Функция npc(...) возвращает `NpcEntity` — игровую сущность наследованную от `Mob`, которую можно использовать для вызова функций в других частях скрипта:

```kts
val npc = npc(pos(x, y, z)) 
vitalik move pos(x1, y1, z1)
vitalik say "Я прибыл!"
```

### Сохранение персонажей

По умолчанию никакие персонажи не сохраняются в скрипте, но движок предоставляет метод `rememberEntity()` для запоминания сущности:

```kts
script {
    val npc = rememberEntity("vitalik") { npc(pos(x, y, z)) }
    
    state("main") {
        npc say "Привет!"
    }
}
```

В данном случае движок создаст переменную только в том случае если нпс нет в сохранении. Иначе же движок будет ждать, пока прогрузятся чанки с npc

Учтите, что он запоминает нпс по `uuid`, что значит, если вы убьёте нпс и перезайдёте в игру, скрипт будет бесконечно ждать пока прогрузится нпс, которого не существует!
