'use strict';

console.log('Создание дат',)

const date = new Date()
console.log('date без обработки', date)

// ЛУЧШЕ ТАК НЕ ЗАДАВАТЬ
console.log('Задать дату', new Date('01-09-2024'))
console.log('Задать дату', new Date('01/09/2024'))
console.log('Задать дату', new Date('2024/01/09'))
console.log('Задать дату', new Date('10 Jan 2023'))
console.log('Задать дату не корректно', new Date('10 января 2023'))

// ТАК ЛУЧШЕ
console.log('Правильно задать дату',
    new Date(2024, 10, 31) // +1 день, -1 месяц (
)

console.log('Аккуратно задавать дату, +55', new Date(2024, 10, 55))
console.log('Задавать дату, от сегодня + 100', new Date(2024, 10, 10 + 100))

console.log('Задать и время ', new Date(24, 11, 11, 1, 5, 9))

console.log('Сбросить до 1970', new Date(0))
console.log('Получить дату относительно времени 1970 ', new Date(1 * 24 * 60 * 60 * 1000))

console.log('Date now в секундахб timestamp', Date.now())
console.log('Создать дату из timestamp', new Date(Date.now()))

// Методы дат
console.log('Получить год', date.getFullYear())
console.log('Получить месяц', date.getMonth())
console.log('Получить дату', date.getDate())
console.log('Получить час', date.getHours())
console.log('Получить минуты', date.getMinutes())
console.log('Получить секунды', date.getSeconds())
console.log('Получить timestamp', date.getTime())

// модифицировать дату
console.log('Изменить год', new Date(date.setFullYear(2030)))

// операции с датами, сложение, вычитание
console.log('\n операции c датами',)

const date2 = new Date(2023, 11, 10)
const date3 = new Date(2024, 12, 10)
console.log('Timestamp через Number ', Number(date2))
console.log('Timestamp через Number ', +date3)

console.log('Вычитание дат получаем миллисекунды', date3 - date2)

function getDaysBetweenDays(dateFirst, dateSecond) {
    return (dateFirst - dateSecond) / (1000 * 60 * 60 * 24) // из миллисекунд в дни
}

// учитывается високосные дни
console.log('Вычитание дат , получаем дни ', getDaysBetweenDays(date3, date2))

// Проблемы если посчитать месяцы где-то 28, 29, 30, 31
// ИСПОЬЗУЕМ БИБЛИОТЕКИ dateFns, dateJS

// Сравнение дат
console.log('\n Сравнение дат',)
const first = new Date(2024, 10, 2)
const first2 = new Date(2024, 10, 2)
const second = new Date(2024, 10, 31)

console.log('Сравнение дат Плохой способ', first < second) // хотя при это используется timestamp
console.log('Сравнение дат одинаковых ', first <= first2) // не получиться из-за ссылок на объект
console.log('Сравнение дат одинаковых ', first == first2)
console.log('Сравнение дат одинаковых ', first === first2)

console.log('Правильное Сравнение дат ', first.getTime() < first2.getTime())
console.log('Правильное Сравнение дат ', first.getTime() === first2.getTime())
console.log('Правильное Сравнение дат ', Number(first) === Number(first2))

// проверка на День Рожденяи

const user = {
    name: 'a',
    birthday: '11/10/2423'
}

function isTodayBirthday(date) {
    const birthdayDate = new Date(date);
    const now = new Date();

    if (now.getMonth() !== birthdayDate.getMonth()) {
        return false
    }

    if (now.getDate() !== birthdayDate.getDate()) {
        return false
    }

    return true
}

console.log('День рождения сегодня?', isTodayBirthday(user.birthday))

// Интернализация дат
console.log('\n Интернализация дат',)

const dateN = new Date()

console.log('Просто вывод даты', dateN.toString())
console.log('Русская дата  10.11.2023', new Intl.DateTimeFormat('ru-RU').format(dateN))

const options = {
    hour: 'numeric',
    minute: 'numeric',
    month: 'long',
    date: 'short',
    weekday: 'short',
    year: '2-digit'
}

//  10.11.2023 с 17:17
console.log('Русская дата опции', new Intl.DateTimeFormat('ru-RU', options).format(dateN))

const options2 = {
    hour: 'numeric',
    minute: 'numeric',
    month: 'long',
    weekday: 'short'
}
// 10.11.2023 5:17 PM
console.log('Англ дата опции ',
    new Intl.DateTimeFormat('en-US', options2)
        .format(dateN))

//console.log('Получиь опции для локализации', navigator.language )