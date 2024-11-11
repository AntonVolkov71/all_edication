/*

Алгоритм сортировки слиянием mergeSort(arr, start, end, buffer):
    1. Принимаем на вход массив arr и индексы начала и конца участка start и end, который нужно отсортировать. При первом запуске они будут 0 и arr.length - 1. Массив-буфер buffer по умолчанию не определён.
    2. Если end ≤ start, выходим из алгоритма и возвращаем входной массив. Сортировать нечего.
    3. Если буфер не определён, создадим его копией входного массива. Это потребуется только на первом вызове.
    4. Определяем середину массива: mid = Math.floor((start + end) / 2);.
    5. Вызываем сортировку левого и правого участков массива: mergeSort(arr, start, mid, buffer) и mergeSort(arr, mid + 1, end, buffer).
    6. Совмещаем результаты отсортированных правой и левой частей:
        6.1 Копируем значения из arr на отрезке от start до end в buffer. Сделав массив buffer в самом начале сортировки, мы сэкономили память. В противном случае, чтобы совместить два результата, на каждом шаге потребовалось бы создать две дополнительные копии arr на участках от start до mid и от mid+1 до end.
        6.2 Создаём: две переменные, чтобы отследить индексом левую и правую части — l = start и r = mid + 1; переменную, чтобы отследить текущую позицию — i = start.
        6.3 Пока l < mid + 1 и r < end + 1, сравниваем значения buffer[l] и buffer[r].
        6.3.1 Если buffer[l] <= buffer[r], присваиваем arr[i] значение buffer[l], инкрементируем l и i.
        6.3.2 В противном случае присваиваем arr[i] значение buffer[r], инкрементируем r и i.
        6.4 Пока l < mid + 1, присваиваем arr[i] значение buffer[l], инкрементируем l и i.
        6.5 Пока r < end + 1, присваиваем arr[i] значение buffer[r], инкрементируем r и i.
    7. Возвращаем отсортированный массив arr.

*/

const size = 50000

const array = Array.from({length: size}, () => Math.floor(Math.random() * size));
console.log('merge sort source array', array)

function mergeSort(arr, start = 0, end = arr.length - 1, buffer) {
    if (end <= start) {
        return arr;
    }

    buffer = buffer || [...arr]

    const mid = Math.floor((start + end) / 2);

    mergeSort(arr, start, mid, buffer)
    mergeSort(arr, mid + 1, end, buffer)

    merge(arr, buffer, start, mid, end)

    return arr
}

function merge(arr = [], buffer, start, mid, end) {
    for (let j = start; j <= end; j++) {
        buffer[j] = arr[j]
    }

    let l = start
    let r = mid + 1
    let i = start;

    while ((l < mid + 1) && (r < end + 1)) {
        if (buffer[l] <= buffer[r]) {
            arr[i] = buffer[l]
            l++;
            i++;
        } else {
            arr[i] = buffer[r]
            r++;
            i++
        }


    }

    while (l < mid + 1) {
        arr[i] = buffer[l]
        l++;
        i++;
    }

    while (r < end + 1) {
        arr[i] = buffer[r]
        r++;
        i++
    }

    return arr


}

const startMergeSort = () => {
    console.log('merge sort res', mergeSort(array));
}

export default startMergeSort
