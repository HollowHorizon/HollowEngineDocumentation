---
sidebar_position: 1
title: Введение в скриптинг
---

<div align="center">

# Ваш первый скрипт

**Здесь Вы узнаете, как создавать скрипты и запускать их, а также какие есть виды скриптов.**

<TitleImg id='first-script' />

---

</div>

## Как создать скрипт?

Прежде чем открывать папку игры и искать папку со скриптами, Вы можете воспользоваться встроенным редактором!
Для этого откройте меню управления игры и найдите категорию с движком, там Вы найдёте клавишу для открытия редактора, по
умолчанию это `F12`.

Открыв редактор вы увидите слева панель со вкладками, пока там только сам проект и набросок документации. Вам нужен
проект.

Там Вы увидите папку `HollowEngine`, в ней должна быть папка `scripts`. Нажав по ней `пкм` Вы можете создать несколько
видов скриптов. Пока что мы будем говорить про скрипт-сцену.

## Виды скриптов

Пока что в моде стабильно работает только скрипт-сцена, а так в ближайшие недели я вероятно доработаю и остальные:

| Скрипт     | Расширение файла | Описание                                                                                                                                 |
|------------|------------------|------------------------------------------------------------------------------------------------------------------------------------------|
| Сцена      | *.scene.kts      | Основной вид скрипта нацеленный на сюжетные события и взаимодействие с миром. Поддерживает сохранения и корутины.                        |
| Событие    | *.event.kts      | Обработчик события, внутри вы можете обрабатывать различные события HollowCore, вроде установки и ломания блоков, атаку сущностей и т.п. |
| Kool-сцена | *.kool.kts       | Сцена движка Kool, используется для создания интерфейсов, оверлеев, эффектов и всего того, что позволяет сам движок.                     |

## Как запустить скрипт?

Обычно Вы для этого можете использовать сам редактор, выбрав нужный скрипт в правом верхнем углу, но скрипт можно также запустить командой.
Пока что поддерживаются только сцены:
- `/hollowengine start-scene <Путь к скрипту> <Состояние с которого начнётся скрипт>` - Запускает новую сцену.
- `/hollowengine stop-scene <Путь к скрипту>` - Останавливает сцену.
- `/hollowengine active-scenes` - Выводит в чат все запущенные сцены.