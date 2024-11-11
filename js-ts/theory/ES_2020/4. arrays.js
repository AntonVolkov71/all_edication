const nested = ["a", "b", ["c", "d"], ["e", ["f", "g"]]]

// плоский массив 1 уровня
console.log("flat", nested.flat())

// плоский массив многоуровневый (добавить параметр количество уровней)
// работает через рекурсию
console.log("flat", nested.flat(3))

// разбиввка через пробел
const techs = ["react redux", 'angular', 'vue', "deno and node"]
console.log(techs.map(tech => tech.split(' ')).flat()) // старый способ
console.log(techs.flatMap(tech => tech.split(' '))) // новый способ