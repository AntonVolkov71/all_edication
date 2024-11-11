//const array = [171, 164, 181, 96, 41, 111, 86, 105, 154, 34, 120, 121, 117, 244, 165, 123, 44, 4]
const array = Array(10000).fill(null).map(()=>Math.floor(Math.random()*100000000 - 5000000))

// быстрая сортировка простой способ
function quickSort(array) {
  if(array.length < 2){
    return array
  }
  //Случайный элемент из массива
  const index = Math.floor(Math.random() * array.length)
  const currentItem = array[index]

  const more = []
  const less = []

  for (let i = 0; i < array.length; i++) {
    if( i === index) {
      continue
    }
    if(array[i] > currentItem){
      more.push(array[i])
    } else {
      less.push(array[i])
    }
  }

  // запускаем рекурсию по массивам more && less
  // если поменять местами less и more, будет по убыванию
  return [
    ...quickSort(less),
    currentItem,
    ...quickSort(more)
  ]
}

//Проверка если уже отсортирован
function isSorted(array) {
  for (let i = 1; i < array.length; i++) {
    if (array[i] < array[i - 1]) {
      return false
    }
  }
  return true
}

