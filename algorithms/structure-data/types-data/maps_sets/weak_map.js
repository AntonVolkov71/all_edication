console.log('WeakMap')

/*
    WeakMap - урезанный Map
        - ключ только Объект или Массив
        - хранит значение пока обьект доступен
        - реализация Кеша - например по обьекту, а когда объект будет удален где-то коде,
            в WeakMap очиститься значению по ключу объекта
 */

let a = {a: 1}
let b = {b: 1}
const weakMap = new WeakMap()

// const key
weakMap.set(a, 'testA')
weakMap.set(b, 'testB')

console.log('weakMap', weakMap)
console.log('get', weakMap.get(a))
console.log('has a', weakMap.has(a))
console.log('has b', weakMap.has(b))
console.log('delete a', weakMap.delete(a))

b = null

console.log('has b', weakMap.has(b))


let cache = new WeakMap()

// реализация Кеша
function getValue(obj) {
    if(!cache.has(obj)) { // если уже не было расчета и запись данных
        const res = 1 +2 // дорогостоящее вычисление
        cache.set(obj,res)
    }

    return cache.get(obj)
}

const res = getValue(a)
console.log('res getValue',  res)
const res2 = getValue(a)
console.log('res getValue cache',  res2) // здесь результат из кеша,а когда obj 'a' удалится, то удалить из WeakMap!!
