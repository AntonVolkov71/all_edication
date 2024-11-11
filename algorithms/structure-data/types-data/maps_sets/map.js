console.log('Map')

/*
 Map
 - на примере JS объект с хешовымы ключами и какими данными по ключам
 - это связный список, где каждое ключ/значение это bucket, где элемент значение
 - быстрый поиск и удаление, добавление -  среднее О(1), худшее О(n)
 - ключом может быть что угодно

Отличие Map & Object
    - Map
        - пустой по умолчанию
        - любой ключ
        - получение size
        - оптимизирован для частых операций!!!!!
        - по умолчанию нет stringify / parse
        - нельзя добавить метод внутрь, только данные
     - Object
        - имеет prototype ключи
        - ключи только string, Symbol
        - руной трекинг размера
        - не оптимизирован
        - есть stringify / parse
 */

const weatherMap = new Map() // пустой

console.log('empty',weatherMap )
weatherMap.set('London', '10')
console.log('set', weatherMap.set('Moscow', '7')) // возвращает обновленную мапу

weatherMap.clear() // ничего не возвращает

weatherMap
    .set('Tula', '22')
    .set('Anapa', '212')
    .set('Adler', '23212')

console.log('get', weatherMap.get('Tula')) // возвращает value || undefined
console.log('has', weatherMap.has('Tula')) // возвращает true/false

console.log('delete', weatherMap.delete('London')) // возвращает true/false
console.log('before delete London',weatherMap )


const arr =[1,2,3]

weatherMap
    .set(1, 4)
    .set(true, 32)
    .set(false, 'no')
    .set(false, 'yes')
    .set([1,2,3], 'Array') // записываем по ссылке, а не по значению массива
    .set({a: 1}, {b: 2})  // записываем по ссылке, а не по значению объекта
    .set(arr, 123) // так можно будет его достать по ключу arr
console.log('any types key', weatherMap)
console.log('size', weatherMap.size )

// Быстрое создание
const weatherMap2 = new Map([
    ['London', '10'],
    ['Anapa', '7'],
])

console.log('weaherMap',weatherMap2 )

// Создание из объекта
const weatherObject = {
    london: 10,
    anapa: 120,
    tula: 120,
}

// Object.entries(object) - выведет то, что задают при быстром создании Map
console.log('entries objec', Object.entries(weatherObject) ) // [ [ 'london', 10 ], [ 'anapa', 120 ], [ 'tula', 120 ] ]

const weatherMap3 = new Map(Object.entries(weatherObject))

console.log('weatherMap3', weatherMap3)


// Итерация Map
const weatherMapIteration = new Map([
    ['London', '10'],
    ['Anapa', '7'],
    ['Paris', '17'],
])

for (const [key, value] of weatherMapIteration) {
    console.log('key', key)
    console.log('value', value)
}

// сконвертировать в массивы
// 1 method
console.log('map to array', [...weatherMapIteration] ) // [ [ 'London', '10' ], [ 'Anapa', '7' ], [ 'Paris', '17' ] ]

console.log('map to array keys', [...weatherMapIteration.keys()])
console.log('map to array values', [...weatherMapIteration.values()])
console.log('map to array entries', [...weatherMapIteration.entries()])

// Упражнение swap
const weatherMapSwap = new Map([
    ['London', '10'],
    ['Anapa', '7'],
    ['Paris', '17'],
])

console.log('weatherMapSwap',weatherMapSwap )

const newWeatherMapSwap = new Map()

for (const [key, value] of weatherMapSwap) {
    newWeatherMapSwap.set(value, key)
}

console.log('newWeatherMapSwap', newWeatherMapSwap)


const newWeatherMapSwap2 =new Map([...weatherMapSwap].map(el=> el.reverse()))

console.log('newWeatherMapSwap2', newWeatherMapSwap2)
