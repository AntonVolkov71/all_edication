/*
Алгоритм пузырьковой сортировки, где arr — входной массив, n — его длина:

1. Идём по массиву от 0 до n - 1. Текущий индекс будет i.
2. Если arr[i] > arr[i + 1]:
    2.1 Меняем местами эти элементы массива.
    2.2 Отмечаем флагом swapped = true, что была совершена перестановка.
3. После окончания цикла проверяем, были ли перестановки в этом проходе:
    3.1 Если да — сбрасываем флаг swapped = false и начинаем заново с пункта 1.
    3.2 Если нет — массив отсортирован.

 */

const array = [1,1,1,1,1]
console.log('bubbleSort source array', array)

const startBubbleSort = () => console.log('bubbleSort result', bubbleSort(array))
bubbleSort(array, 0)

function bubbleSort(arr, count) {
    let swapped = false;

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) {
            swap(arr, i, i + 1)
            swapped = true
            count++
        }
    }
    if (swapped || count === 0) {
        console.log(arr.join(" "))
    }

    if (swapped) {

        bubbleSort(arr)
    }


    return arr
}

// function swap(arr, i, j) {
//     const temp = arr[i]
//     arr[i] = arr[j]
//     arr[j] = temp
//
// }


// function bubbleSort(arr) {
//     let swapped = true
//
//     while (swapped) {
//         swapped = false;
//
//         for (let i = 0; i <= arr.length; i++) {
//             if (arr[i] > arr[i + 1]) {
//                 swap(arr, i, i + 1)
//                 swapped = true
//             }
//         }
//     }
//
//     return arr
// }

function swap(arr, i, j) {
    [arr[i], arr[j]] = [arr[j], arr[i]]
}

// startBubbleSort()
// export default startBubbleSort
