Что и зачем такое микросервисы:
1. Модули разбитые на отдельные на сервисы
2. Большая система
3. Масштабировать отдельный функционал

Нотация (стандартизация) :
1. Диаграмма классов - не всегда удобно
2. c4model - используем 3 (компонент) и 4 (код) уровни - хорош для монолита и мискросервисов
3. Не усложняем связи между компонентами.

Компонент - отдельная сущность (инкапсулированная) - чаще всего Класс (контроллер, репозиторий, сервис)
На схеме стрелкой указывается связь одного компонента от другого (НЕ НАДО указывать методы, ибо захломит всё). Возможно двунаправленные -ЭТО ГОВНО КОД.
Сплошная линия внутренние связи между компонентами. Пунктирные внешние - запрос http.

Модули - группа компонентов, которые относятся к одной доменной области. Связей между модулями должно быть минимальными.

Приложения - микросервисы -> модули -> компоненты. Связи между приложениями всегда внешние (http, kafka, rabbit).

Передаваемые объекты - DTO - data transfer object - класс данных.

Детализация - структура данных или полей БД, список зависимостей, список команд принимаемых контроллером. Как можно реже используем!!!

Monolith vs Microservices
1. Монолит - старый стек, горизонтальное масштабирование требует ресурсов, решение конфликтов (пере использование).
2. Микросервис - отказоустойчивость, так маленький кусок, agile разработка, простая поддержка.
   Минусы:
   - если ошиблись с архитектурой придется везде переделывать
   - сложная выкладка и обновление, масштабирование - типа крутой devops
   - жесткая поддержка контрактов
   - неизвестно все ли сервисы запущены, точнее корректно ли запущены

Характеристики сервисов:
- слабая связанность между сервисами
- стабильные контракты взаимодействия

Точки взаимодействия:
Входные -
* команды - изменяют состояние, получают ответ
* запросы - ничего не изменяют, только получают ответ
Выходные - События

Декомпозиция:
- по бизнес задачам
- по доменной модели - DDD - замкнутая область, которая касается одного объекта;
- командные (не очень)

Пример декомпозиции - приложение Покупатели/продавцы (wildberries):
- бизнес модели - сервис пользователей, сервис расчетов
- доменная - сервис продавцы, сервис покупатели
- взаимная - вынести общую логику в отдельную бизнес логику

НЕ НАДО каждый чих выносить в отдельный - сервис пользователи, роли, управление должностями - НЕ НУЖНО, все это домен пользователи

Для декомпозиции выделить:
- СЦЕНАРИИ системы (может делиться еще на мелкие) - я как ... хочу .. сделать что для .... --- описание use-кейсов.
- ОБЪЕКТЫ (блоки) - наборы сущностей из чего состоит приложение: ученик, курс, видео, отзывы и так далее.

Объединение в доменные области - по типам сущностям - есть отдельный сервис (урок и курс это один сервис,
а ученики и учителя разные НО лучше их объединить а не делить, т.к. они похожи!!).

Обязательно делать оптимизацию, объединять по смыслу области!!!

Дальше после выделения доменных областей - рисуем схему приложений.

МоноРепозиторий или отдельные приложения?!:
- большой порог вхождения (настройка дикая и большая)

Монорепа плюсы:
- пере использование кода (типы, интерфейсы)
- удобная работа с контрактами
- централизация зависимостей (ну самом деле чаще будет конфликты версий)
- до 15 сервисов,
- централизованная сборка приложений
МИНУСЫ:
- разрастается проект
- ограничения языков (нельзя разные языки или фреймворки).

Крутые монорепы: Nx, Lerna, npm, yarn (workspaces), Turborepo (больше сборка чем управление), Rush (мало инфы).
В Nestjs - под капотом npm workspaces. Если вместе с фронтом то Nx or Lerna.

Преимущества
NX: +++ лучше скорее всего!!
- сразу создает например для React, Nest - удобненько
- удобный тулинг
- простая работа
- готовый конфигуратор (но особо не изменишь) - webpack с чем-то вместе не даст сделать
- ограничивает, но дает много конфигов
- зависимости, точно знает какие нужны версии пакетов один package.json - один для всех, но боль менять везде во всех
Lerna:
- на каждый фреймворк своя сборка
- не только Typescript
- использовать можно любые настройки, но это будет КАСТОМ, не готовый конфиг!!
- не ограничивает, но надо делать все ручками
- отдельный package.json для каждого пакета

NestJS - фрейворк:
- modules - модули, группировка providers, controllers, зависимостей
- controllers - обработчик запросов (http, rmq, kafka) - входная точка модуля - НЕ ПЕРЕИСПОЛЬЗУЕТСЯ
- provider - классы сервисов (бизнес логика), переменная, фабрика классов, репозиторий - экспортируется ПЕРЕИСПОЛЬЗУЕТСЯ
- middleware - доп функционал входящих запросов
- guard - ограничитель, валидность auth, доступ - ограничение роутов
- interceptor - перехватчик до / после запроса, изменяют/преобразовывают/расширяют логику
- pipes - преобразуют запрос, строку в JSON, XML
- exception - обработчик ошибок

Паттерн репозиторий
- описание моделей в виде классов с декораторами
- описание схемы
- используем репозиторий с ограниченными методами

Паттерн Entity
- класс - помимо репозитория содержит дополнительную бизнес логику
- централизованные методы для модели.

Создание проекта:
- установка nx - npm i -g nx
- установка nesjs - npm i -g @nestjs/cli
- создаем workspace - npx create-nx-workspace name_test --preset=nest (preset - пресет для какого либо фреймворка ангуляр, реакт и т.д.)

Команды NX:
- nx generate resource - генерацаия кода как у Nestjs
- nx run-many --target=serve --all --parallel=10 - запуск всех приложений (максимум 10 приложений parallel=10)
- nx serve name-test - тоже запуск одного приложения в режиме разработки
- nx run name-test:serve - запуск одного приложения, в режиме отладчика и watchEngine
- nx run name-test:test - запуск теста
- nx run name-test:build - сборка
- nx run name-test:build:production - сборка в прод
- nx g @nrwl/nest:lib libs/interfaces (либо contracts) - создание библиотеки интерфейсов, общие для всех проектов
- nx g @nrwl/nest:app nameService- создание сервиса
- nx g module app/user --project=name-test - создаем автоматом, выбираем @nx/nest:service

Зависимости:
- npm i bcryptjs jsonwebtoken passport @nestjs/passport passport-jwt @nestjs/jwt  - для авторизации
- npm i -D @types/bcryptjs - типы bcryptjs
- npm i -D @types/passport-jwt - типы для паспорт jwt
- npm i  @nestjs/config - для конфига
- npm i class-transformer class-validator - валидация входящих данных
- npm i mongoose @nestjs/mongoose - установка БД Монго
- npm i nestjs-rmq - библиотека для RabbitMQ
- npm i @nestjs/schedule - библиотека Cron

Docker:
- docker ps  - запущенные контейнеры
- docker-compose up -d - запуск docker-compose.yml (-d - чтобы не находиться в этом процессе)

Все, что используется (либо экспортится из одного приложения в другое) должно быть вынесено в библиотеки.

Методы обмена:
Синхронный - один с другим (1-1) редко, один со многими (рассылка без ответа)(1-*) часто
Асинхронный - ожидание ответа запрос/ответ (не ждем ответ)(1-1) часто, уведомление (1-1) часто, подписка на событие(1-*) часто, событие с ожиданием ответа(1-*) редко

Формат данных обмена:
- текстовый (JSON, XML) простой - приоритетный - малые обмены
- бинарный - (буфер) компактность, закодированное, сильная типизация, сложно изменить данные - большая нагрузка

Контракты - договоренность запроса и ответа (JSON схема, классы), что и как должны знать все микросервисы
Если используется в нескольких шарим в общую библиотеку

Транспорты данных обмена:
1. HTTP, gRPC (удаленный вызов процедур)
- относятся к синхронным запрос/ответ
- плюсы готовый инструментарий
- минусы не является асинхронным (не знаем о состоянии другого сервиса)
2. RabbitMQ, Redis, Kafka - брокеры
- RabbitMQ - amqp - большая пропускная способность, персистенсость (данные не потеряются)
- Redis - БД внутри памяти и очереди, по сути шина (прост чем RabbitMQ, быстр, потеря сообщений)
- Kafka - надежность, реплей вызовов, сохранение в лог действий (вызовов), производительность хуже, чем RabbitMQ, не большая пропускная способность

Простая коммуникация HTTP, gRPC:
Проблемы:
- каждый сервис должен знать кто где запущен
- отказоусточивость, один упал второй также будет не доступен
- балансировка - если несколько инстансов запущено, надо настраивать

Решение простой коммуникации:
- таймаут - если одни сервис не доступен, через некоторое время говорим что он не в доступе
- нагрузка - накапливание числа запросов, сброс сообщение на каком-то лимите
- коммуникация - паттерн Service Discovery - саморегистрация сервисов (я такой, поднялся на таком порту, ip) - Apache ZooKeeper, Consul
- коммуникация - авторегистрация - докер, кубернетес - когда подымается сервис в внутри докера, роутер докера сам разруливает сервисы (адресацию)

HTTP, gRPC когда использовать:
- слабая связанность, небольшой сервис
- есть готовый Service Discovery
- хочется использовать документацию (swagger)

Коммуникация через БРОКЕРЫ, асинхронные обмены:
- много уведомлений, не требующих ответа
- посредник решает проблему Service Discovery
- коммуникация не по адресу, а через брокера по заголовку сообщения

Запрос/ответ асинхронный через Брокера (1-1):
- при запросе один сервис кидает сообщение в брокере (заголовок (доп параметры навигации), тело, id сообщения, канал куда ответить)
- при ответе другой сервис кладет в заголовок сообщение id сообщения запроса и также кидает сообщение в брокер
- при этом не нужно ждать ответа, ответ будет получен и распознан по id сообщения запроса

Уведомление через Брокера (1-1):
- не нужно ждать ответа, просто один сервис кидает сообщение в брокер (рассылка пользователям)

Подписка на событие (1-*):
- похож на уведомления тем, что сообщение приходит нескольким сервисам

Событие с содержанием ответа (1-*):
- кидаем сообщение в брокер, в заголовке id для ответа
- когда будет готов ответ,в брокет кидаем сообщение с помимо id, будет автор, который ответил

Что дает брокеры:
- слабая связанность, никто не знает сколько и что слушает
- буферизация сообщений
- разные паттерны коммуникаций (один ко многим, уведомление, асинхронные и другие)
- персистенсость - если сообщение улетело, а другой сервис упал или сам брокер, то брокер восстановит сообщение

Проблемы брокеров:
- работа с несколькими инстансами сервиса (в RabbitMQ - решается RoundRobin на канал, балансировщик - 1 сообщение первому, 2 второму и так далее может быть по-разному)
- повторные сообщения, ОДНО сообщение может отправиться несколько раз (если например сервис упал) - решение ack - обработано или нет, доп проверки в логике программы (статус доставки)
- сообщение записано, что отправлено, а оно не дошло - не консистентность данных - решение паттерн OutBox - одновременно делается запись об сообщении и в табличку Outbox с записью со статусом - и это для одной транзакции

Минимизация синхронности:
- нужно сделать 1 действие, затем 2, 3
- в монолите, что-то типа await await await аля цепочка - в микросервисах так только если использовать синхронный запросы, но это накладно и сложно
- в микросервисах - убираем цепочку взаимодействия - присваивание ID транзакции (сценарию), и по ней проверяем закончилось 1,
если успешно, если нет ждем и так далее - ОТКАЗОУСТОЙЧИВОСТЬ

Типы запросов (эвентов) для брокера:
- command - запрос изменения/управления, получаем ответ и модифицируем данные (типа login)
- query - запрос чего-либо, требуется ответ (типа получение getInfo)
- event - подписка на событие

RabbitMQ:
- запуск через docker-compose up -d - важно интерфейс rabbitmq:3-management - веб интерфейс (3 смотри dockerHub)

Publisher - который публикует сообщения
Exchange - обменный ящик (типа почтовое отделение), куда кладутся сообщения
Queue - очередь (типа почтовый ящик получателя), куда перенаправляются сообщения
Routing key - маршрут передачи сообщения,
Binding - связь очереди с маршрутом (если routing key - допустим key=courses, то шлем эти сообщение в очередb courses)
Channel - канал передачи, когда подключаемся создавать канал
Connection - соединение клиента с RabbitMQ
Subscriber - получатель (подписчик) сообщение

Exchange: - можно и без него (отправить сразу в очередь) - ПЛОХО нет логики распределения
- direct - точно перенаправляет по роутингу (роутинг точно совпадает с binding), то есть одна очередь один роут
- fanout - отправляет всем независимо хотят они этого или нет, массовая рассылка всем
- topic - похож на direct, но можно делать роут типа *.event, my.*, # - любое число, * любое слово, то есть не прям точно а типа расширенный
- headers - неважно про роутинг, а важно что лежит в header сообщения, будет доставлено в ту очередь у которой в подписке есть такие заголовки

    - default - НЕЛЬЗЯ создать, публиковать напрямую в очередь один к одному,
    - dead letter - собирает все мертвые сообщения, которые были отправлены, но не было подписчиков на очередь, если вдруг кто подпишется или просто обработать
    - match, headers
    - rabbitmq-trace - ДЛЯ ЛОГОВ!!!! прибиднить из одного exchange в другой, забирает копию сообщения к себе

* Durable - устойчива к перезагрузке
* Internal - true - не могут публиковть напрямую сообщения без exchange

Выбор exchange:
- если выбирать между DIRECT & TOPIC, то лучше TOPIC
- FANOUT - не очень из-за не соблюдения роутинга
- HEADERS - при очень сложной маршрутизации

Можно разделить хосты RabbitMQ для разных групп приложений.
Через API (доступно через веб, внизу HTTP API) можно управлять настройкой Rabbit через HTTP - бекап, создавать exchange (лучше не создавать так)

Queue - без названия будет создана атвоматом, параметр exclusive - будет удалена после использования
Для запроса/ответа
- publisher - создаем вторую очередь пустое название и слушаем эту очередь
- publisher - в сообщении указываем correlationId (уникальным uuid), не забыааем ack=true
- subscriber - проверяем есть ли у сообщения replyTo, если есть отвечаем
- subscriber - отвечает напрямую в очередь
channel
.sendToQueue(
message.properties.replyTo,
Buffer.from('Ответочка'), {
correlationId: message.properties.correlationId
})
Параметр prefetchCount - одновременно обрабатываемые сообщения
Параметр serviceName - какой сервис отправил сообщение

Точка входа для прослушки Controller - с точки зрения логики.
Контракты - схема взаимодействия - названия топика, тип запроса/ответа

Библиотека для RabbitMQ - NestJS-rmq

Стратегии API:
- паттерн APi - gateway
- централизованная сервис принимает все запросы, делает авторизацию и делает запросы в конкретные сервисы
- проблема - разделения логики (сбор данных из разных сервисов) - получается большой разбитый монолит
- можно применить паттерн command/query разделение запросов и роутов (каждый роут для отдельног сервиса
- в API выноситься
- авторизация
- ограничение число запросов, ограниченность ресурсов
- кеширование в одном месте
- сбор метрик, логирование, пометка запросов - слежка за всеми запросами
- в API НЕ ВЫНОСИТЬСЯ
- бизнес логика
- вместо одной API - тоже можно
- BFF (back for frontend) - апишка для фронта отдельно для мобилы (НО!! только при большой команде)
- GraphQL - gateway - особо не большая разница от API
- GraphQL federation - схема реализуется конкретно внутри каждого микросервиса

Паттерны получения данных:
- композиция(агрегация) на API:
- различные БД для каждого микросервиса (можно одна БД, но разные таблицы НЕ ЗАВИСЯЩИЕ друг от друга)
- проблема композиции данных на API - мерж данных с разных сервисов и API содержит бизнес логику - агрегация не в БД
- композиция на сервисах:
- микросервисы сами ходят в другие сервисы
- проблема - агрегация данных не в БД, а в сервисах (в БД быстрее делается агрегация данных)
- плюс - легкая реализация
- Паттерн Command query - Command query responsibility segregation (CQRS):
- No CQRS - используется всегда CRUD
- разделить команды и запросы:
- CRUD - делить на CUD & R
- CUD - команды, модифицирующие данные - тип COMMAND
- R - команды, не модифицирующие данные- тип QUERY
- R - можно опустить/добавить некоторые поля, можно агрегировать с другими данными
- ПЛЮС - разделение ответственности - получение (отображение данных) и изменения данных
- доп сервис:
- подписан на события CUD,
- строит структуру (хранилку VIEW) в то формате в котором надо отдавать добавляю/ убирая/ аггрегируя данные в своей БД
- типа "связанная таблица" - VIEW Database в БД, которая хранит список из разных таблиц
- handler - сам собирает данные (агрегирует) при каждом событии CUD
- не надо делать join из разных таблиц при запросе, а сразу добавляются при прослушке
- МИНУС
- временный лаг обновления данных,
- сложность системы - не было дублирования обработки (update всеравно, а вот добавление проблема)
- проверка идентификатора события
- может быть не консистентной, так как задержка обработки события)
- CRU - данные в определенной структуре и пишутся в БД

Стратегия Авторизация:
- сервис авторизации - создает и отдает токен, созданный по ключ-секрету
- любой сервис - знает ключ-секрет и может прочитать/провалидировать токен. В таком случае необязательно ему стучаться в сервис авторизации

Отлов исключений:
- используем try catch - для отлова в конкретном месте, и делаем здесь обработку ошибок
- для try catch - await ибо не отловиться

Запуск просто приложения без порта:
- const app = await NestFactory.create(AppModule);
- await app.init();

САГИ: = консистентность данных
- паттерн, выполнять набор действий, а также противодействия на эти действия
- если что-то пошло не так по логике алгоритма, то включается процесс другой на это действие
- компенсация - реализует логику при сбое например, необязательно для всего компенсация

Планирование Саги:
- сервисы - методы(транзакции) для них - компенсация
- 1 вариант реализация - ХОРЕОГРАФИЧЕСКИЙ
- знания о каждом этапе храниться в сервисе
- каждый последующий метод отрабатывает по EVENT (но этот event вызывает метод)
- связанность методов из-за пункта выше
- реализация простая
- восприятие сложно - не понятно кто на что реагирует, использовать когда 2-3 участника
- 2 вариант - ОРКЕТСРИРУЕМЫЙ
- есть централизованный оркестратор, который хранит всю информацию, последовательность шагов
- в одном месте видны все шаги
- можно выделить отдельную очередь, в которой он слушает все event саги
- слабая связываемость, простое восприятие
- минусы - сервис начинает знать о других сервисах, эти знания не часть этого сервиса (опять приход к монолиту)
- Большие саги делать на событиях

Сложности САГИ:
- одна сага может перетереть другую - КОНФЛИКТНЫЕ ДАННЫЕ
- нужно делать ЛОГ логики работы сервиса

Паттерн STATE - СОСТОЯНИЕ:
- набор состояний - реагирование на ЕВЕНТЫ (Сага - как раз и реализует этот паттерн)

Выкладка и эксплуатация:
- Монолит
- все данные в одной БД
- данные делятся на модули
- используется Single DB
- 1 тип базы
- ограничение 1 инстанса базы
- нужно ограничивать доступ одного модуля чтобы не имел доступ к данным БД другого модуля
- Микросервисы
- можно использовать
- Multiple Type DB
- любой сервис может использовать любой тип данных и тип  БД
- все плюсы Single DB
- минус - масштабирование, т.к. один тип БД в одном инстансе,
- Multiple DB
- для каждого сервиса свой инстанс
- лучше комбинировать похожие легкие сервисы в один инстанс БД и большая нагрузка в отдельный инстанс БД
- сложный JOIN, большая нагрузка
- ПРИ ВСЕМ ЭТОМ, можно в каждом инстансе БД использовать свои БД, без разных типов инстансов

Периодические задачи:
- проблема если задача из разных сервисов - может быть конфликт, необходима синхронизация
- сделать один сервис мастер, сделать конфигуратор мастер/не мастер - ТАК СЕБЕ
- ХОРОШО - CRON как отдельный сервис (в одном экземпляре)

Логирование и метрики:
- Монолит
- API request, repository - цепочка проглядывается метод1-метод2-метод3
- Микросервисы
- передавать ID одного действия - метод1 (сервис1) + ID-10 -> метод2 (сервис2) с тем же ID-10, так будет видна цепочка
- добавлять requestID
- собирать логи - Агрегация логов: GPL - Loki + Prometheus + Grafana (более частый), либо  ELK - elasticSearch + lohStash+ kibana
- сервис агрегирует логи в одно + отображает

Выкладка и эксплуатация
- Монолит - просто запустить
- Микросервисы
- масштабировать, и изолировать, объединять в кластер
- Docker Swarm, kubernetes, + оркестрация
- не должно быть локально состояния в сервисе - ИБО при поднятии нескольких экземпляров будет БЕДА. СОСТОЯНИЯ ТОЛЬКО В БД
- только внешнее хранения (картинки, состояния)
- необходимость бесшовного деплоя - все контракты должны обратно совестимы - от версии к версии
- HealthCheck - сервис проверяющий состояния сервис (даже тупо стучатсья по URL) если все плохо перезапустить в оркестре




1. Сценарии
   Ручки
- обрабатывают запросы
- делать выплаты
- рассылают веб-сервисы

Админ
- следит за финансами
- закрывает / открывает доступы к веб-сервисам
- блочит юзеров

Слоны
- пользуются веб-сервисами
- переводят бабки

2. Блоки
   Пользователи - админ, ручка, слон
   Финансы - управление бабками
   Веб-сервисы