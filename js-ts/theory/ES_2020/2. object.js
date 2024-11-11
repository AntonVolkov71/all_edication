const person = {
  name: "Max",
  age: 30
}

// Новый метод - просмотра скрытых свойств полей
// все скрытые свойтва - одного поля объекта
console.log("new method", Object.getOwnPropertyDescriptor(person, "age"))
//{ value: 30, writable: true, enumerable: true, configurable: true }

// информация по всем полям
console.log("new method", Object.getOwnPropertyDescriptors(person))


// массив массивов ключ-значение
console.log(Object.entries(person)); // [ [ 'name', 'Max' ], [ 'age', 30 ] ]

//  создание объекта из масиива массивов ключ-значение
console.log(Object.fromEntries([ [ 'name', 'Max' ], [ 'age', 30 ] ])); //{ name: 'Max', age: 30 }

// создание массива массивов ключ (индекс) - значение
console.log(Object.entries(["m", "a", "x"])) //[ [ '0', 'm' ], [ '1', 'a' ], [ '2', 'x' ] ]

// удобное взаимодействие с объектом
for(const [key, value] of Object.entries(person)){
  // console.log("key", key)
  // console.log("value", value)
  console.log(`${JSON.stringify(key)}: ${JSON.stringify(value)}`)
}

console.log("Object value", Object.values(person))
console.log("Object value", Object.keys(person))

