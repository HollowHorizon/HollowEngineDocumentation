---
sidebar_position: 1
title: Аудио
---

import '@site/src/css/pages/img-show.css';

<div align="center">

# 🔊 Аудио

**Воспроизводите любое аудио прямо в игре!**

<link rel="prefetch" as="image" href="@site/static/img/headers/audio.webp" />
<div className="cont"><div className="show" id="mask">
![Welcome](@site/static/img/headers/audio.webp)
</div></div>

---

</div>

Система позволяет воспроизводить настраиваемые звуки (в формате `.mp3`, `.ogg`, `.wav`) как для конкретного игрока, так и глобально по определённым координатам в мире.

## 📁 Поддерживаемые форматы

* `.mp3`
* `.ogg`
* `.wav`

Файлы должны быть размещены в ресурсах для аудио (`/hollowengine/assets/modid/audio`), и использовать `ResourceLocation` (`modid:audio/path/to/sound.ogg`) в скриптах.

Эта система отличается от ванильной и не требует `sounds.json`, к тому же она поддерживает больше форматов.

---

## ▶️ Воспроизведение звука

### 📌 Для мира / уровня (`Level`)

```kotlin
level playSound "modid:audio/ambient.ogg"
```

#### Или с параметрами:

```kotlin
level.playSound(
    location = "modid:audio/explosion.mp3",
    volume = 2.0f,
    pitch = 0.8f,
    position = pos(10.0, 64.0, -5.0),
    velocity = pos(0.0, 0.0, 0.0),
    relative = false
)
```

> 🔄 Звук проигрывается для всех игроков в мире.

---

### 👤 Для конкретного игрока (`Player`)

```kotlin
player playSound "modid:audio/voice.wav"
```

#### Или с дополнительными параметрами:

```kotlin
player.playSound(
    location = "modid:audio/footstep.ogg",
    volume = 1.5f,
    pitch = 1.2f,
    position = Vec3(5.0, 70.0, 5.0),
    velocity = null,
    relative = true
)
```

> ☝️ `relative = true` — звук будет восприниматься как "играющий внутри головы" (без пространственной привязки).
> `relative = false` — позиция и направление движения будут учитываться.

---

## 🧠 Обработка на клиенте

На стороне клиента, когда звук воспроизводится:

* Он ищется в кэше (`SOUNDS`)
* Если не найден — загружается и кэшируется
* Автоматически определяется формат (`.mp3`, `.ogg`, `.wav`)
* Настраивается громкость, высота, позиция и вектор скорости

---

## ⚙️ Пример скрипта

```kotlin
suspend fun dramaticEntrance(player: Player) {
    player.playSound("modid:sounds/stinger.ogg", volume = 2f, pitch = 0.95f)
    player.say("Ты пришёл…")
}
```

