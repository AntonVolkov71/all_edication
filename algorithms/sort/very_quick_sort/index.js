 const array = Array(1000000).fill(null).map(() => Math.floor(Math.random() * 20000000 - 10000000))

// const array = [
//   421, 873, -956, -249, 951, -865, 758, 680,
//   550, -842, -977, 184, -464, 932, 496, -774,
//   411, 77, -42, -894, 130, -682, -41, 950, 48,
//   -475, 146, 290, -940, -92, 760, -625, -660, -911,
//   -103, 969, 53, 187, -394, -238, -708, 43, 437, 443,
//   65, 440, 139, -553, 79, 262, -75, -106, 783, 703,
//   400, 14, -833, -709, -845, 925, 768, -133, 221, 698,
//   928, 171, -770, -359, 6, -271, 393, -615, 828, 710,
//   -712, 433, 389, -65, 846, -116, 359, 299, 383, 188,
//   -522, 464, 132, -379, 57, -769, 52, -965, 285, -379,
//   952, 569, 809, -125, -622, 424]


// разворачивает массив, на нижнюю и верхнюю границу
const partition = (array, low, hi) => {
  // const pivotPosition = Math.floor(Math.random() * array.length)
  const pivotPosition = Math.floor(Math.random() * (hi - low) + low)
  const pivot = array[pivotPosition]

  // цикл пока верхння точка больше нижней
  while (hi >= low) {
    while (array[hi] > pivot) {// массив болше разворотной точки идем вниз
      hi--
    }
    while (array[low] < pivot) {
      low++
    }
    if (hi >= low) {
      [array[low], array[hi]] = [array[hi], array[low]] //разворот относительно центральной поворотной точки
      hi--
      low++
    }
  }
  return low
}

// Быстрая сортировка 
const veryQuickSort = (array, low = 0, hi = array.length - 1) => {
  if (low < hi) {
    const index = partition(array, low, hi)
    veryQuickSort(array, low, index - 1)
    veryQuickSort(array, index, hi)
  }
  return array
}

