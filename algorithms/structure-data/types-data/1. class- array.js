class MyArray {
    constructor(initialSize = 1) {
        if (Number(initialSize) !== initialSize || Math.round(initialSize) !== initialSize) {
            throw new Error('Длина массива должна быть целым числом');
        }

        if (!(initialSize > 0)) {
            throw new Error('Размер массива должен быть больше нуля');
        }

        this.size = initialSize;
        this.memory = allocate(initialSize);
        this.length = 0;
    }

    // Возвращает значение по индексу.
    // Если индекс за пределами — кидает ошибку.
    get(index) {
        this.isOverIndex(index)

        return this.memory[index]
    }

    // Устанавливает значение по индексу.
    // Если индекс за пределами — кидает ошибку.
    set(index, value) {
        this.isOverIndex(index)

        this.memory[index] = value
    }

    // Добавляет новый элемент в массив.
    // Если index не определён — добавляет в конец массива.
    // В противном случае — добавляет по индексу со сдвигом
    // всех последующих элементов.
    // Если индекс за пределами - кидает ошибку.
    // Увеличивает выделенную память вдвое, если необходимо.
    // Возвращает новую длину массива.
    add(value, index) {
        this.isOverIndex(index)

        if (this.length + index >= this.size) {
            this.size *= 2
            this.memory = {...allocate(this.size), ...this.memory}
        }

        Object.entries(this.memory).reduce((acc,[key, valueObj]) => {
            if(key === index.toString()){
                acc = valueObj;
                this.memory[key] = value
                return acc
            } else {
                if(acc) {
                    this.memory[key] = acc;
                    acc = valueObj
                    return acc
                }
            }
        }, null)

        this.length++
        return this.length
    }

    // Удаляет элемент по индексу со сдвигом всех последующих элементов.
    // Если индекс за пределами - кидает ошибку.
    // Возвращает новую длину массива.
    delete(index) {
        this.isOverIndex(index)

        const tt = Object.entries(this.memory)
        tt.splice(index, 1)

        for(const item in tt) {
            this.memory[item] = tt[item][1]
        }

        this.length--
        return this.length
    }

    isOverIndex(index) {
        if (index > this.size) {
            throw new Error();
        }
    }
}


function allocate(size) {
    const memory = {};

    for (let i = 0; i < size; i++) {
        memory[i] = undefined;
    }

    return memory;
}
