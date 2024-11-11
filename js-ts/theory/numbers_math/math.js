'use strict';

console.log('Math',)

console.log('Sqrt ', Math.sqrt(36)) // корень
console.log('Степень  ', (36 ** (1 / 2))) // корень
console.log('Cbrt ', Math.cbrt(27)) // кубический корень
console.log('Степень ', 16 ** (1 / 4))

console.log('Знак от числа ', Math.sign(-100)) // -1 берется только знак от числа
console.log('Знак от числа ', Math.sign(35)) // 1 берется только знак от числа

console.log('Модуль ', Math.abs(-100)) // 100
console.log('Модуль ', Math.abs(100)) // 100

console.log('Ескпонента ', Math.exp(1.4))


console.log('Макс ', Math.max(1, -3, 1, 0, '19', true))
console.log('Макс ', Math.max(1, '19s')) // NaN

const arr = [3, 1231, -35, 12, 12]
console.log('Мин ', Math.min(...arr)) // можно спред массива

console.log('Рандом ', Math.random()) // возвращает от 0 до 1 -> 0,2123 и так далее

console.log('Округление до ближайшего целого ', Math.round(1.4)) // 1
console.log('Округление до ближайшего целого ', Math.round(1.50001)) // 2

console.log('Округление до верхнего значения ', Math.ceil(1.2)) // 2
console.log('Округление до нижнего значения ', Math.floor(1.9)) // 1

console.log('Обрезать число до запятой ', Math.trunc(1.231232)) // 1


console.log('Округлить до определенного знака после запятой- выдает строку ',
    (1.12312312).toFixed(3) // 1.123
)

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

console.log('Случайное число между 2 значениями ', random(1, 33))

console.log('Остаток от деления ', 2 % 3 ) // 2
console.log('Остаток от деления ', 7 % 3 ) // 2

function isEven(n){
    return n % 2 === 0
}

function isOdd(n){
    return n % 2 !== 0
}
console.log('Четность числа ', isEven(5))
console.log('Нечетность числа ', isOdd(5))


