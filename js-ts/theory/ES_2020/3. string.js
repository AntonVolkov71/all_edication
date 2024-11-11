const start = "    Hello trim"
const end = "This is new features       "

// убрать лишние пробелы
console.log(start.trimStart() + end.trimEnd())
console.log((start + end).trim())


// Добавление и заполнение пустого пространства
console.log("vk".padStart(6))
console.log("vk".padStart(6, "www."))
console.log("vk".padStart(16, "www."))
console.log("vk".padEnd(16, "!"))
console.log("vk".padEnd(6, ".com"))


// принимает строковые куски (массивом), и параметры
// для дополнителдьной обработки
function tag(strings, name, age) {
  const [s1, s2, s3] = strings // строковые значения
  const ageStr = age > 42 ? "старшим" : "младшим"
  return `${s1}${name}${s2}${ageStr}${s3}`
}
w
const person = {
  name: "Максим",
  age: 60
}

const output = tag`Человек по имени ${person.name} является ${person.age} в семье`
console.log(output);