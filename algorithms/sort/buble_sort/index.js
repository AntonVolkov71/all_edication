const array = Array(100).fill(null).map(() => Math.floor(Math.random() * 20000 - 10000))

// const sorted = bubbleSort(array)
// console.log(sorted)


console.time("standart sort")
array.slice().sort()
console.timeEnd("standart sort")

console.time("very quick sort")
bubbleSort(array)
console.timeEnd("very quick sort")

function bubbleSort(array) {
  // Проход по всему массиву
  for (let n = 0; n < array.length; n++) {
    // сравнение элементов и перестановка их местами
    for (let i = 0; i < array.length - 1 - n; i++) { // -n чтобы не перебирать уже отсортирпованные элементы
      if (array[i] > array[i + 1]) {
        // алгоритм свап - замена 2 элементов массива местами
        // const buff = array[i]
        // array[i] = array[i + 1]
        // array[i + 1] = buff

        [array[i], array[i + 1]] = [array[i + 1], array[i]] // не использование третьей переменной
      }
    }
  }
  return array
}