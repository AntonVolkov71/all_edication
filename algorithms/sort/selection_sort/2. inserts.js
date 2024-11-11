/*
Алгоритм сортировки вставками, где arr — входной массив, n — его длина:
1. Идём по массиву от 1 до n. Текущий индекс будет i.
2. Ищем индекс вставки элемента insertionIndex:
    2.1 Выставляем insertionIndex = 0 по умолчанию.
    2.2 Идём по массиву от i - 1 до 0. Текущий индекс будет j.
    2.3 Если arr[j] < arr[i], то insertionIndex = j + 1. Выходим из цикла.
3. Сдвигаем все элементы с insertionIndex до i - 1 включительно на одну позицию вперёд, а элемент с индексом i помещаем в insertionIndex.
 */

const sizeArr = 3

const array = Array.from({length: sizeArr}, () => Math.floor(Math.random() * sizeArr));
console.log('insertSort source array', array)

const startInsertSort = () => console.log('insertSort result', insertionSort(array))

function insertionSort(arr){

    for (let i = 0; i < arr.length; i++) {
        const insertionIndex = findInsertionIndex(arr, i)

        swiftElements(arr, insertionIndex, i)
    }

    return arr
}

function swiftElements(arr, insertionIndex, i) {
    const value = arr[i]

    for (let j = i; j > insertionIndex ; j--) {

        arr[j] = arr[j - 1]
    }

    arr[insertionIndex] = value
}

function findInsertionIndex(arr, i){
    for (let j = i - 1; j >= 0; j--) {
        if(arr[j] < arr[i]) {

            return j + 1
        }
    }

    return 0
}

export default startInsertSort
