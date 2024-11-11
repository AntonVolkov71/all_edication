/*

Алгоритм быстрой сортировки quickSort(arr, start, end):
 1. Принимаем на вход массив arr и индексы начала и конца участка start и end, который нужно отсортировать. При первом запуске они будут 0 и arr.length - 1.
 2. Если end ≤ start, выходим из алгоритма и возвращаем входной массив. Сортировать нечего.
 3. Нужно выбрать опорный элемент и переставить элементы в массиве. Элементы меньшие или равные опорному окажутся слева, большие — справа. Пройдём по шагам:
    3.1 Выбираем опорный элемент как последний элемент на участке pivotValue = arr[end]. Выставляем pivotIndex = start.
    3.2 В цикле от start до end, где текущий индекс будет i, сравниваем arr[i] с pivotValue.
    3.3 Если arr[i] < pivotValue, меняем местами значения с индексами i и pivotIndex, увеличиваем pivotIndex на единицу.
    3.4 После окончания цикла меняем местами значения в pivotIndex и end, возвращаем pivotIndex.
 4. Запускаем алгоритм отдельно на левой и правой частях как quickSort(arr, start, pivotIndex - 1) и quickSort(arr, pivotIndex + 1, end).

*/
function quickSort(arr, start = 0, end = arr.length - 1) {

    if (end <= start) {
        return arr
    }

    const pivotIndex = partition(arr, start, end)

    quickSort(arr, start, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, end);

    return arr;
}

function partition(arr, start = 0, end = arr.length - 1) {
    const pivotValue = arr[end];

    let pivotIndex = start;

    for (let i = start; i < end; i++) {
        if (arr[i] <= pivotValue) {

            swap(arr, i, pivotIndex);
            pivotIndex++;
        }
    }

    swap(arr, pivotIndex, end);

    return pivotIndex;
}

function swap(arr, i, j) {
    const tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
}


export const startQuickSort = (array) => {
    console.log('quick sort res', quickSort(array));
    // quickSort(array);
}

