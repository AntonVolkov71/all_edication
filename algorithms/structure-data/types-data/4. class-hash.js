class HashTable {
    constructor(size) {
        if (!size || size < 0) {
            throw new Error('Размер должен быть положительным числом');
        }

        this.size = size;
        this.memory = new Array();
    }

    // Добавляет пару [key, value] в хеш-таблицу.
    // Если ключ существует, перезаписывает значение.
    set(key, value) {
        const index = hash(key, this.size)
        const node = [key, value]

        if (!this.memory[index]) {
            this.memory[index] = [node]
            return
        }

        const findELem = this.memory[index].find(elem => elem[0] === key)

        if (findELem) {
            findELem[1] = value
        } else {
            this.memory[index].push(node)
        }

    }

    // Возвращает значение в хеш-таблице по ключу.
    // Если ключа нет, возвращает undefined.
    get(key) {
        const index = hash(key , this.size);

        if(!this.memory[index]){
            return undefined;
        }

        const findElem = this.memory[index].find(elem => elem[0] === key)

        return findElem && findElem[1]
    }

    // Удаляет значение из хеш-таблице по ключу.
    remove(key) {
        const index = hash(key, this.size);

        if(!this.memory[index]) {
            return;
        }

        const findElemIndex = this.memory[index].findIndex(elem => elem[0] === key);

        if(findElemIndex === - 1) {
            return
        }

        this.memory[index].splice(findElemIndex, 1)

        if(!this.memory[index].length) {
            delete this.memory[index]
        }
    }
}

// Хеширующая функция.
function hash(key, size) {
    const MAX_LENGTH = 200;

    const start = key.length > MAX_LENGTH ?
        Math.floor((key.length % MAX_LENGTH) / 2) : 0;
    const end = Math.min(key.length, MAX_LENGTH);

    let total = 0;

    for (let i = 0; i < end; i++) {
        const charCode = key.charCodeAt(start + i);
        total = (total + charCode * (i + 1)) % size;
    }

    return total;
}

export const startHash = () => {
    console.log('startHash')
    const hashTable = new HashTable(2)

    hashTable.set('anton', 32)
    hashTable.set('anton', 3)
    hashTable.set('Diana', 6)
    console.log('hashTable get', hashTable.get('anton'))

    hashTable.remove('anton')
    console.log('hashtable', hashTable);
}

// class HashTable {
//     constructor(size) {
//         if (!size || size < 0) {
//             throw new Error('Размер должен быть положительным числом');
//         }
//
//         this.size = size;
//         this.memory = new Array();
//     }
//
//     // Добавляет пару [key, value] в хеш-таблицу.
//     // Если ключ существует, перезаписывает значение.
//     set(key, value) {
//         const index = hash(key, this.size);
//         const node = [key, value];
//
//         // если не существует по данному хешу данных, создаем массив и вставляем туда ноду
//         // можно этого не делать, но так быстрее выйти если элемента не существует, чем далее делать find
//         if (!this.memory[index]) {
//             this.memory[index] = [node]
//             return;
//         }
//
//         const elem = this.memory[index].find(item => item[0] === key);
//
//         if (elem) {
//             elem[1] = value
//         } else {
//             this.memory[index].push(node)
//         }
//     }
//
//     // Возвращает ЗНАЧЕНИЕ в хеш-таблице по ключу.
//     // Если ключа нет, возвращает undefined.
//     get(key) {
//         const index = hash(key, this.size);
//
//         // опять же можно не делать, но лучше так если нет элемента чем find
//         if(!this.memory[index]) {
//             return undefined;
//         }
//
//         const pair = this.memory[index].find(item=> item[0] === key)
//
//         return pair && pair[1]
//     }
//
//     // Удаляет значение из хеш-таблице по ключу.
//     remove(key) {
//         const index = hash(key, this.size);
//
//         // опять же можно не делать, но лучше так если нет элемента чем find
//         if(!this.memory[index]) {
//             return;
//         }
//
//         const itemIndex = this.memory[index].findIndex(item => item[0] === key);
//
//         if(itemIndex === -1) {
//             return
//         }
//
//         this.memory[index].splice(itemIndex, 1)
//
//         // если у хеша нет элементов, удаляем хеш
//         if(!this.memory[index].length) {
//             delete this.memory[index]
//         }
//     }
// }
//
// // Хеширующая функция.
// function hash(key, size) {
//     const MAX_LENGTH = 200;
//
//     const start = key.length > MAX_LENGTH ?
//         Math.floor((key.length % MAX_LENGTH) / 2) : 0;
//     const end = Math.min(key.length, MAX_LENGTH);
//
//     let total = 0;
//
//     for (let i = 0; i < end; i++) {
//         const charCode = key.charCodeAt(start + i);
//         total = (total + charCode * (i + 1)) % size;
//     }
//
//     return total;
// }


