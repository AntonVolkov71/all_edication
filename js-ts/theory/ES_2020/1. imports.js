// Import без вебпака

(async () => {
  const module = await import('./module.js') // главный импорт

  console.log("import.js", module)
  console.log("import.js", module.secretKey) // export const

  const Person = module.default // по дефолту импорт

  const person = new Person("Anton")
  console.log("person", person.name)
})()

