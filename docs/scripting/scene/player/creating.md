---
sidebar_position: 1
title: Работа с игроками
---

import '@site/src/css/pages/img-show.css';

<div align="center">

# Работа с игроками

**Получите любого игрока напрямую с сервера!**

<link rel="prefetch" as="image" href="@site/static/img/headers/player.png" />
<div className="cont"><div className="show" id="mask">
![Welcome](@site/static/img/headers/player.png)
</div></div>

---

</div>

# 🎮 Игроки

Модуль работы с игроками предоставляет удобные утилиты и расширения для взаимодействия с объектами `ServerPlayer`.

## 📥 Получение игроков

Для получения всех подключённых игроков:

```kotlin
val players: MutableList<ServerPlayer> = server.players
```

Чтобы найти игрока по имени или UUID:

```kotlin
val playerByName = server.players["HollowHorizon"]
val playerByUuid = server.players[uuid]
```

> ⚠️ Методы выбрасывают исключение, если игрок не найден!

---

## ✅ Действия игрока

### ⏳ Ожидание позиции

```kotlin
suspend fun Player.waitPos(pos: Vec3, radius: Float = 1f, inverse: Boolean = false)
```

Позволяет приостановить скрипт, пока игрок не подойдёт (или не отойдёт, если `inverse = true`) от заданной позиции:

```kotlin
player.waitPos(pos(100.0, 64.0, 200.0), radius = 2f)
```

### ⏳ Ожидание сообщения

```kotlin
suspend fun Player.input(): String
```

Позволяет приостановить скрипт, пока игрок не напишет любое сообщение в чат. Возвращает строку с самим сообщением.

```kotlin
val message = player.input()
player.notify("[${player.name}] Я сказал - $message.")
```

---

### 💬 Отправка сообщений

#### 💡 Сказать от имени игрока:

```kotlin
player.say("Привет, мир!")
```

> Выведет сообщение как: `[Игрок] Привет, мир!`

#### 📩 Отправить обычное сообщение в чат:

```kotlin
player send "Вы получили сообщение"
```

#### 🔔 Показать тост-уведомление:

```kotlin
player.notify("Новое задание!")
```

---

## 🧍 Внешний вид

### 🧬 Модель

```kotlin
var Player.model: String
```

Пример:

```kotlin
player.model = "hollowengine:models/player.gltf"
player.resetModel() // сбрасывает модель
```

Используются .gltf или .glb файлы.

Файл должен быть доступен в ресурсах мода (через путь вида mod_id:models/path/to/file.gltf).

Вы можете добавить файл модели через загрузчик мода по пути `.minecraft/hollowengine/assets/your_project/models/file.gltf`, тогда путь в моде будет выглядеть так: `your_project:models/file.gltf`. Не забудьте перезагрузить ресурсы через F3+T, перед запуском скрипта.

Модель должна содержать нужные анимации и текстуры, если они планируются.

### 🖼️ Текстуры

Позволяют заменить встроенные текстуры модели. Используйте ID, указанные в .gltf, например:

```kts
player.textures = mapOf(
    "model/base" to "my_mod:textures/npc_base.png",
    "model/hat" to "my_mod:textures/hat.png"
)
```

Посмотреть названия оригинальных текстур можно командой `/hollowengine model <Путь к модели>`.

### 🧱 Трансформация

```kotlin
var Player.transform: Transform
```

Используется, если модель смещена, перевёрнута или имеет неправильный масштаб:

```kts
player.transform = Transform(
    tX = 0f, tY = -1.2f, tZ = 0f, // смещение
    rX = 0f, rY = 180f, rZ = 0f,  // поворот
    sX = 1f, sY = 1f, sZ = 1f     // масштаб
)
```
---

## 🕺 Анимации

Анимации поддерживаются конкретно при изменённой модели игрока

### ▶️ Воспроизведение:

```kotlin
player.play("animation_name")
```

Параметры:

* `layer`: слой анимации (`BlendMode.Additional` или `BlendMode.Override`)
* `mode`: режим воспроизведения (`WrapMode.Once`, `WrapMode.Loop`, `WrapMode.PingPong`, `WrapMode.ClampForever`)
* `speed`: скорость воспроизведения

#### Альтернативные способы:

```kotlin
player playOnce "wave"
player playLooped "idle"
player playFreeze "pose"
player playPingPong "dance"
```

### ⏹️ Остановка анимации:

```kotlin
player stop "wave"
```

### Сохранение игроков

По умолчанию никакие игроки не запоминаются движком, но движок предоставляет метод `rememberEntity()` для запоминания сущности:

```kts
script {
    val player = rememberEntity("Halva") { server.players["HollowHorizon"] }
    
    state("main") {
        player say "Привет!"
    }
}
```

В данном случае движок создаст переменную только в том случае если игрока нет в сохранении. Иначе же движок будет ждать, пока игрок не зайдёт в мир.

