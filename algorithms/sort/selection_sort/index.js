const array = Array(10000).fill(null).map(() => Math.floor(Math.random() * 20000 - 10000))

selectionSortMax(array)

// Сортировка по самомму большому числу
function selectionSortMax(array) {
  // минус 1 - если массив из 1 элемента, плюс не проходим по послденму элементу
  for (let j = 0; j < array.length - 1; j++) {
    let max = -Infinity
    let index = null

    /* поиск самого большого числа и его индекса
    * не ищем по отсортированным элементам
    */
    for (let i = 0; i < array.length - j; i++) {
      if (array[i] > max) {
        max = array[i]
        index = i
      }
    }
    // свап местами того числаи последнего
    let buff = array[array.length - 1 - j]
    array[array.length - 1 - j] = max
    array[index] = buff
  }
  return array
}

// Сортировка по самомму меньшему числу
// function selectionSortMin(array) {

//   for (let j = 0; j < array.length - 1; j++) {

//     let min = +Infinity
//     let index = null

//     for (let i = j; i < array.length; i++) {
//       if (array[i] < min) {
//         min = array[i]
//         index = i
//       }
//     }

//     const buff = array[j]
//     array[j] = min
//     array[index] = buff
//   }

//   return array
// }

