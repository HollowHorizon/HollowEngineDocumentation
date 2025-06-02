---
sidebar_position: 2

title: Действия Персонажей
id: npc-actions
desc: 'NaN'
---

import '@site/src/css/pages/pc-phone-ver.css';


<div align="center">

# Действия Персонажей

**Научите его писать за вас скрипты.**

<link rel="prefetch" as="image" href="@site/static/img/headers/npc-actions.webp" />
<div className="cont"><div className="show" id="mask">
![Welcome](@site/static/img/headers/npc-actions.webp)
</div></div>

---

</div>

Вот улучшенный и доработанный вариант страницы документации. Он стал компактнее, понятнее и структурирован логичнее. Удалены дублирующиеся HTML-элементы и избыточные комментарии, примеры оформлены лаконично, а блоки разделены визуально без лишней верстки.

---

## 📦 Перемещение НИПа

### Функции

```kts
fun NPCEntity.move(pos: Vec3, dist: Double = 1.5, speed: Double = 1.0)
fun NPCEntity.move(entity: Entity, dist: Double = 1.5, speed: Double = 1.0)
```

НИП начинает двигаться к заданной позиции (`Vec3`) или к сущности (`Entity`) и останавливается, когда расстояние до цели становится меньше `dist`. Аргумент `speed` задаёт скорость передвижения.

### Примеры

```kts
// Движение в точку
npcID move pos(92, 23, 56)

// Следование за игроком
val player = server.playerList.players.first()
npcID move player

// С заданной дистанцией и скоростью
npcID.move(pos(25, 64, 2), dist = 3.0, speed = 2.0)
npcID.move(player, dist = 3.0, speed = 2.0)
```

---

## 👀 Поворот головы

### Функции

```kts
fun NPCEntity.look(pos: Vec3)
fun NPCEntity.look(entity: Entity)
```

НИП поворачивается в сторону заданной точки или сущности.

### Примеры

```kts
// Смотреть в точку
npcID look pos(92, 3, 24)

// Смотреть на игрока
val player = server.playerList.players.first()
npcID look player
```

---

## 🧱 Взаимодействие с миром

### Использовать блок

```kts
fun NPCEntity.useBlock(pos: Vec3)
```

НИП кликает **ПКМ** по блоку, как игрок.

```kts
npcID useBlock pos(92, 93, 241)
```

---

### Сломать блок

```kts
fun NPCEntity.destroyBlock(pos: Vec3)
```

НИП ломает блок, как игрок без инструментов.

```kts
npcID destroyBlock pos(92, 46, 24)
```

---

## 🎁 Бросить предмет

```kts
fun NPCEntity.dropItem(item: ItemStack)
```

НИП бросает предмет, как будто выбрасывает его из инвентаря.

```kts
npcID dropItem item("golden_apple")
```

---

## 💬 Реплики НИПа

```kts
fun NPCEntity.say(text: String)
```

НИП произносит фразу — она отображается в чате и/или в облачке над головой (если включено отображение имени).

```kts
npcID say "Привет!"
```

