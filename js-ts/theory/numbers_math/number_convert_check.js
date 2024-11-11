'use strict'
console.log('Number Convert & Check',)

console.log(10 === 10.0) // число всегда с плавающей точкой

console.log(0.1 + 0.2 === 0.3) // false
console.log(0.1 + 0.2) // 0.30000000000000004
console.log(0.2 + 0.2) // 0.4 , WHAT??

// Ограничения 64 бит
// Проблема 10ричной системы чисел

// Преобразование строки в число
console.log(Number('1')) // лучше использовать явное в 10 ричную систему
console.log(+'22')
console.log(Number.parseInt('10') ) // в какую систему перевести !!! ЛУЧШЕ ИСПОЛЬЗОВАТЬ !!!
console.log(Number.parseInt('10', 2) ) // в какую систему перевести
console.log(Number.parseInt('10', 16) ) // в какую систему перевести
console.log(Number.parseInt('11 sec', 10) ) // вытаскивается только если начинается с числа
console.log(Number.parseInt('sec 11', 10) ) // NaN - вытаскивается только если начинается с числа

console.log(Number.parseInt('22.5', 10) ) // !!! 22.5 !!! обрезает после точки
console.log(Number.parseFloat('21.5 sec', 10) ) // вытаскивается с плавающей точкой
console.log(Number.parseFloat('sec 23.5', 10) )


console.log('' )

console.log('Проверка число или нет ', Number.isNaN(Number('123dsf')))// true
console.log('Проверка число или нет ', Number.isNaN(10 / 0)) // false, так как Infinity
console.log('Проверка число или нет ', Number.isFinite(10 / 0)) // !!! ЛУЧШЕ ЕГО ИСПОЛЬЗОВАТЬ !!!!
console.log('Отлов с плавающей точкой', Number.isInteger(10.4) ) // false
console.log('Отлов с плавающей точкой', Number.isInteger(10) ) // true
