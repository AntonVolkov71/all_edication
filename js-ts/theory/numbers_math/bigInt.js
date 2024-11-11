'use strict';

console.log('Big int',)

const bigInt = 23742873894  // не удобная запись
const bigInt2 = 23_742_873_894  // Удобная запись, НО НЕ ИСПОЛЬЗВАТЬ МОГУТ БЫТЬ ОШИБКИ

const payment = 15_10 // типа 15 рублей 10 копеек
const paymentInt = 15.10 // разные с верхним числом
const paymentInt2 = 1_5.1_0 // так тоже можно

console.log('From string to Number ', Number('23_742_873_894')) // NaN
console.log('Не получится parse...', Number.parseFloat('23_742_873_894')) // 23
console.log('Не получится parse...', Number.parseInt('23_742_873_894')) // 23

const max = 2 ** 53 - 1

console.log('максимальное число', Number.MAX_SAFE_INTEGER)
console.log('максимальное число', max)
console.log('прибавление к максимальному числу', max + 1)
console.log('прибавление к максимальному числу', max + 2) // не отрабатывает
console.log('прибавление к максимальному числу', max + 4)

console.log('минимальное число', Number.MIN_SAFE_INTEGER)

// ВСЕ ОПЕРАЦИИ с число не входящим в этот диапазон БУДЕТ НЕКОРЕКТНО

console.log('BIgInt', 9007199254740992223123n)
console.log('Создание BIgInt не корректно, ломается число', BigInt(9007199254740992223123)) // но некорректно
console.log('Создание BIgInt', BigInt('9007199254740992223123')) // лучше передавать число

// ЧТО МОЖНО ДЕЛАТЬ С большими числами

console.log('Sum bigint', 10n + 10n )
//console.log('Sum bigint', 10n + 10 ) будет ошибка типов
console.log('Sum bigint', 10n + BigInt(10) ) // так корректно
console.log('Mult ', 9007199254740992223123n * BigInt('9007199254740992223123' ))

console.log('Не надо приводить при сравнении ', 50n > 30 )
console.log('Не надо приводить при сравнении ', 50n === 30 )
console.log('Typeof ', typeof  5n ) // bigint

// console.log('С плавающей точкой не может быть BigInt', 10.55n)
console.log('Деление, хуета, 10n / 3n = 3n, остаток отбрасывается ',10n / 3n )
