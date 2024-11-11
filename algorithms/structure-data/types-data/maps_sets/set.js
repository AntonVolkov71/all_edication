console.log('Set')

// Set - это Множество, неупорядоченный набор данных

const flights = ['Russia', 'USA', 'London', 'London', 'USA']

// уникальные значения
let setFlights = new Set(flights) // получает итерируемый объект,

console.log('setF',setFlights )
console.log('size',setFlights.size ) // оно же уникальное число объектов
console.log('has',setFlights.has('Russia') )
console.log('add',setFlights.add('Chine') )
console.log('delete',setFlights.delete('USA') )
console.log('keys',setFlights.keys() )
console.log('values',setFlights.values() )
console.log('entries(',setFlights.entries() )
console.log('clear',setFlights.clear() )

setFlights = new Set(flights)

console.log('foreeach', )
setFlights.forEach(item=>console.log(item))


console.log('for of:', )
for (const flight of setFlights) {
    console.log(flight )
}

console.log([...setFlights]) // из Set в массив

const setObj = new Set([{a:1}, {b: 2}, {b: 2}]) // {b: 2} не равны друг другу {b: 2}

console.log('setObj',setObj )
console.log('string', new Set('abcd')) // =>  { 'a', 'b', 'c', 'd' }


