---
sidebar_position: 2
title: Bedrock-партиклы
---

<div align="center">

# 🌌 Bedrock-партиклы

**Вот вам и кнопка "Сделать красиво"!**

<TitleImg id='particles' />

---

</div>

Система позволяет воспроизводить [Bedrock партиклы](https://learn.microsoft.com/en-us/minecraft/creator/reference/content/particlesreference/) в нужной точке мира или на сущности. Эффекты должны быть заранее подготовлены в формате Bedrock `.bedrock.json` в папке `particles` вашего проекта (`/hollowengine/assets/modid/particles/`).

---

## 💥 Воспроизведение партиклов

### 📍 По координате (`Level.bedrockParticles`)

```kotlin
level.bedrockParticles(pos(0.0, 64.0, 0.0), "modid:particles/portal.bedrock.json")
```

> ☝️ Эффект появится в заданной позиции у всех игроков в измерении.

---

### 🧍‍♂️ На сущности (`LivingEntity.bedrockParticles`)

```kotlin
player.bedrockParticles("modid:particles/fire_aura.bedrock.json")
```

> 🌀 Частицы будут следовать за игроком (или другой `LivingEntity`) с поддержкой анимации через Molang.

---

## 🛠️ Как это работает

* Отправляется `SpawnParticlesPacket` на клиента
* Если указана `pos`, эффект создаётся в заданной позиции
* Если указана `entity`, эффект привязывается к ней
* Партиклы загружаются из кэша `BedrockParticles.PARTICLES`
* На клиенте используется `ParticlesProvider` с `ParticleEffect.fromFile(...)`

---

## ⚠️ Ошибки

Если эффект не найден:

```
Particle modid:particles/missing.json not found!
```

Убедитесь, что имя указано корректно и файл доступен по `ResourceLocation`.

---

## ✨ Пример

```kotlin
fun castSpell(player: Player) {
    player.bedrockParticles("magic:particles/spell_cast.json")
    player.say("💫 Заклинание применено!")
}
```
