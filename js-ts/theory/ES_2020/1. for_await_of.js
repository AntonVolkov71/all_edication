const emulate = (id, ms) => new Promise(resolve => {
  setTimeout(() => {
    resolve(id)
  }, ms)

})

const promises = [
  emulate(1, 250),
  emulate(2, 500),
  emulate(3, 1500),
]
// Старый способ обработки нескольких промисов
async function old() {
  for (const promise of await Promise.all(promises)) {
    console.log('old', promise) //ждем все промисы и работаем с каждым
  }
}
// old()


//  новый синтаксис
async function modern() {
  for await (const promise of promises){
    console.log("modern", promise )
  }
}

modern()