console.log('WeakSet', )

/*
  - WeakSet похож WeakMap, только значения из уникальных объектов
  - очень редкий
 */

let a = {a:1}
const b = {b:1}

const weakSet = new WeakSet([a, b])

console.log('weakSet', weakSet)

a = null
console.log('weakSet', weakSet) // будет без 'a'

