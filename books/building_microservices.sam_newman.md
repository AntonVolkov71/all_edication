# Создание микросервисов Ньюмен Сэм 
# Прочитана

## Глава 8 Тестирование

**Init (module)** - маленький участок тестирования (метод, класс)

**Service** - что-то маленькое целое.
- СДС - consumer-driven-contracts - тест по контрактам
- эксплуатационные - микросервис, регистрация и т.д.

**Сквозное** (UI) - вся система

- > Больше UI - дальше выпуск, тяжелее найти ошибку
- > Unit - больше, быстрее debug, но не известно работает ли вся система

**Лучшая середина:**
- Unit - 40-80%
- Service - 20-30%
- UI - 1-5%

### Веерное тестирование:
```
Service_1 -> Unit->Service-> 
                             ->       UI
Service_2 -> Unit->Service-> 
```

### Сервисы тестирования:
- локально установить
  - mountebank
  - pact
- JVM
  - Spring Cloud Contract

**Дымовое тестирование** - в рамках развертывания и проверки запуска

Канареечное - выборочное на части пользователей

**CRF** - cross-functional-requirements (кросс функциональное - не функции)
- задержка передачи по сети
- производительность
- скорость
- имитация сбоев (сетевых)

CRF - достаточно 1 раз в неделю

--- 

## Глава 9 Мониторинг
- **Наблюдаемость** - степень, в которой можно понять внутренне состояние, основываясь на внешних данных

- Система сама выдает выходные данные - log, metrics

### Агрегация логов

    экзепляр    локально   | период отсылка   
    экзепляр    ---> логи  |  ------------>   логи
    экзепляр               |
    
    - возможность в агрегированных логам фильтровать по составу сообщения

#### Состав логов
- id вызова (путь процедуры, даже если несколько микросервисов) 
- дата, время
- имя микросервиса
- уровень лога

##### Пример записи лога
    - 15-02-2024 16:00:01 Order INFO [abc-123] Customer Message
    - [abc-123] - id вызова

### Сервисы мониторинга:
- Humio
- Datadog

### С чего начать мониторинг:
- инфо о хостах, где запущены микросервисы
- скорость отклика микросервиса

**Синтетические транзакции** - искусственные операции (вместо пользователя)
- собирают всю информацию
- используются как тест

### SLI - service level indicator
- индикатор сервиса услуг
- показатель, что делает ПО
  - время отклика
  - регистрация клиента
  - размещение заказа

--- 

## Глава 10 Безопасность

**Принцип наименьших привилегий** - минимальный доступ на конкретный период, с минимальной функциональностью

### Средства контроля:

- **Превентивный** - предотвращение (безопасное хранение ключей, шифрование)
- **Детективный** - оповещение об атаке
- **Реагирующий** - реакция во время/после атаки

### Разбивка на зоны

    общедоступная <-- <----
                    |     |
    частная --------|     |
    частная <--------     |
                    |     |
    секретная-------|-----|

- От секретной к частной и общедоступной, НО НЕ НАОБОРОТ

### Принципы
- упрощенные данные, обрезанные (например, последние цифры IP)
- имя, пол, например без возраста, только чтение
- хранить данные в зашифрованном виде
- делать бекап данных тоже в зашифрованном виде

- > Если вы не храните данные, никто не сможет их украсть и не сможет запросить.
- > Лучше научиться восстановить систему, чем пытаться избегать падения.

---

## Глава 10 Отказоустойчивость

***Изоляция*** 
- микросервис на отдельном хосте
- у каждого микросервиса своя БД (Отдельная инфраструктура баз данных)

- **Избыточность** - несколько экземпляров запущенного микросервиса
- **Идемпотемпотентость** - постоянные ответы, запросы
- **Распределение рисков** - не класть все яйца в одну корзину

### Теорема CAP - consistency, availability and position tolerance
- **Согласованность** - получим один и тот же ответ, если перейдем к нескольким узлам
- **Доступность** - каждый запрос получает ответ
- **Устойчивость** к разделению - способность системы к тому, что связь между частями иногда невозможна

- > !!! Выбираем 2 из 3 -> CP-AP

### Хаос инжиниринг
- типа учения пожарного поезда, только на рабочей системе
- дисциплина, об экспериментировании с системой с целью укрепления уверенности способности системы выдерживать 
      турбулентные условия в эксплуатации
- типа, давай вырубим одну систему и посмотрим, что будет

- > Системы это не только ПО, а люди, инфрастуктура, процессы

### Dirt - disaster recovery testing
- тестирование аварийного восстановления

### Сервисы для тестирования отказоустойчивости
- ChaosMonkey - в определенное время отключает случайные машины
- Latency Monkey - имитирует медленное сетевое соединение
- Chaos toolkit
- Gremlin, Reliably

--- 

## Глава 13 Масштабирование

- **Вертикальное** - более мощная машина

- **Горизонтальная (дублирование)** - наличие нескольких устройств, способных выполнять одну и ту же работу

- **Разделение данных** - разделение работы на основе какого либо атрибута данных (группы пользователей, А-Н и Н-Я)

- **Функциональная декомпозиция** - разделение работы в зависимости от типа (у монолита выделить часть)

### Шаблон CQRS - command query responsibility segregation
- модели чтения и записи разделены (разные модули)

### Кеш
- хранить на стороне клиента данные
- **Кеш-провал** - когда нет данных в кеше (а они есть), после чего запрос за данными и аннулирование кеша
- **Кеш-промах** - в кеше данные есть, но при работе с этими данными ошибка -> аннулирование кеша

### Хранение кеша
- **плохое** - Кеш можно хранить в каждом сервисе, который его использует, но тогда будет проблема согласованности данных
- **лучше** (но не самое) - на основе Redis, memcached
  - каждый сервис хранит у себя "Кеш сервиса", и несет за него ответственность
  - клиенты все равно делают запрос в этот сервис, но при этом сервис "облегчен"

### Аннулирование кеша
- время жизни TTL - time to live
  - используется при http запросах (заголовок cache-control)
    - условные GET-запросы
    - ETAG - позволяет определить имеется ли ресурс, если у клиента последняя версия ответ "304 not modified"
- на основе уведомлений - через брокер, уведомлять клиента об устаревании
  - проблема при этом - ни клиент ни сервис не знают об уведомлении (брокер может сбоить)
  - решается периодическим запросом "пульс" живой-неживой

- **Сквозное кеширование** - обновление кеша сразу при изменении данных в сервисе
- **Кеш с последующей записью** - сначала заполняется кеш, типа буфера данных, потом запись в БД

### Золотое правило кеширования
- кеширование как оптимизация!!

- > Идеальное количество мест для кеширования равно НУЛЮ.
- > Преждевременная оптимизация может вызвать проблемы

### Автоматическое масштабирование
- вычисляем пики (период времени), автоматически увеличиваем количество экземпляров в эти периоды (AWS - может такое)

- > НАЧИНАЕМ ВСЕ С НАЧАЛА - изменение архитектуры с появившейся нагрузкой
- > Необходимость изменения системы - это признак успеха
- > Не нужно сразу строить супер архитектуру!!!

--- 

## Глава 14 UI - Пользовательский интерфейс

- **GUI** - graphical user interface

### Принцип разделения команд

* **Плохое** 
    - Фронт команда - занимается фронтом всего сервиса
    - Бек команда - занимается беком всего сервиса
    - АБД - занимается всеми БД
  
* **Лучшее** 
    - Фронт, бек, АБД это одна команда - занимаются одним сервисов НО ПОЛНОСТЬЮ (фулстек команда, не путать с фулстек разработчиком)
    - при таком, одна команда отвечает за свою область

### Микрофронтенды, примеры реализации
- **микрофронтенды как сквозные команды**, например, /albums, /bucket это две команды, и каждая отвечает за свою страницу
            и полностью логику за этот сервис
- **виджеты** - каждая часть (блок) это отдельный сервис и встраивается на страницу не зависимо, у каждого виджета 
                    свой API и каждый реагирует на уведомление, типа произошел заказ в блоке "заказ" и полетело уведомление произошел заказ,
                    блок "корзина" отреагировал на это уведомление

#### Взаимодействие front с backend

- **Плохая реализация** - каждый front сервис делает "одинаковый" запрос на backend и сам агрегирует данные

- **Центральный шлюз** 
- собирает запросы от front сервисов и агрегирует данные, объединяет похожие запросы в один шлюз

### BFF - backend for front
- для каждого front сервиса свой шлюз он же "backend for frontend", например, для IOS свой BFF, для Android свой BFF
- один опыт один BFF. Однако если сильно расходятся, то лучше раздельные BFF. 

- > Абсолютно нормально если есть дублирование кода в BFF или в микросервисах

- похожий функционал можно также вынести в BFF (отдельная сущность, BFF for BFF)
  - например, wish_list, который используют другие BFF,
  - при этом этот BFF делает только, что агрегирует запросы в backend, касающиеся wish_list
  - делать такие BFF только при значительном объеме объединения
  
### GraphQL 
- язык запросовЮ позволяющий клиентам создавать запросы для доступа к данным (динамически изменять запросы)
- при этом нет необходимости реализовывать обработку запросов на сервере для каждой сущности

___

## Глава 15 Организационные структуры
- при переходе на микросервисы - НЕОБХОДИМО организовать структуру компании
    - слабо связанные команды (функциональные/потоковые) могут:
        - вносить крупные изменения без разрешения и полагания какого-либо за пределами команды
        - завершить, развертывать свою работу не координируясь с другими
        - тестировать не запрашивая интегрированной тестовой среды

### Закон Конвея
- организация, разрабатывающая систему, неизбежно создает проект, структура которого будет копией коммуникационной структуры организации

- > Другое определение - "Если у вас есть четыре группы, работающие над компилятором, вы получите четырехпроходной компилятор" 

### Размер команды
- идеальный размер, чтобы накормить "одной пиццей"
- 5-10 человек
- также можно выделить крупные компании из небольших команд
    - своя автономность, полномочие, ответственность

### Общее использование сервиса
- в идеале, один сервис одна команда
- если одна другая команда только использует сервис, а он принадлежит другой, нужно передать его команде, которая его использует
- общее использование
    - общий фреймворк - содержит код для "команды А", для "команды Б", каждая команда разворачивает только свою часть
    - библиотеки - одно ядро, но внутри библиотеки для каждой отдельной команды, разворочается один сервис

## Глава 16 Эволюционный архитектор

### Архитектура ПО 
- общее понимание проекта системы
  - система разделена:
    - как компоненты
    - как они взаимодействуют через интерфейсы

### Архитектор как градостроитель
- меньше беспокоится о происходящем внутри зоны (района)
- больше о том, что происходит между зонами
- создает API между сервисами. При таком, изменения внутри сервиса производятся легко
- сокрытие информации о сервисе в связке с открытыми интерфейсами

- > Правила предназначены для послушания глупцов и руководства мудрецов
  
### Правила архитектора

- Методы проектирования
  - Rest/Http
  - Инкапсулировать устаревшее
  - маленькие независимые сервисы
  
- Архитектурные принципы
  - устранить случайные сложности
  - согласованные интерфейсы и потоки данных
  - нет универсального решения
  
- Стратегические цели
  - позволить бизнесу масштабироваться
  - поддержка входа на новые рынки

- > Все микросервисы должны быть частью Одной системы
- > Можно выносить, получать данные мониторинга каждого сервиса в одно место (общее)
- > Наличие одного стандарта Хорошо, 2 и более Плохо 

### Единые правила межсе́рвисного взаимодействия
- единые стандарты ответов (например, успешные 2хх, ошибка 4хх, ошибка сервера 5хх)
- неважно Http или другой протокол

### Документация
- иметь примеры, шаблоны, хотя бы лучшее из частей системы, чтобы можно не просто имитировать пример
- хранить шаблоны, чтобы использовать часть кода из коробки (например, для создания нового сервиса, его первоначальная настройка)
