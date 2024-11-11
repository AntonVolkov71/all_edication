class DoublyLinkedList {
    constructor() {
        this.size = 0;
        this.head = null;
        this.tail = null;
    }

    // Добавляет элемент в список.
    // Если указан индекс - добавляет по индексу,
    // в противном случае добавляет в конец.
    // Если индекс за пределами — кидает ошибку.
    add(value, index) {
        const node = createNode(value);

        if (index === undefined) {
            if (this.tail) {
                this.tail.next = node;
                node.prev = this.tail;
                this.tail = node;
            } else {
                this.tail = node
                this.head = node
            }
        } else {
            const nodeAtIndex = this.searchByIndex(index)

            node.next = nodeAtIndex
            node.prev = nodeAtIndex.prev

            if (nodeAtIndex.prev) {
                nodeAtIndex.prev.next = node
            }

            nodeAtIndex.prev = node

            if (nodeAtIndex === this.head) {
                this.head = node
            }
        }

        this.size++
    }

    // Удаляет элемент из списка по значению.
    // Удаляет только первый найденный элемент.
    // Если элемент не найден, ничего делать не нужно.
    removeByValue(value) {
        const nodeAtValue = this.searchByValue(value)

        if (nodeAtValue) {
            this._removeNode(nodeAtValue)
        }
    }

    // Удаляет элемент из списка по индексу.
    // Если индекс за пределами — кидает ошибку.
    removeByIndex(index) {
        const nodeAtIndex = this.searchByIndex(index)

        this._removeNode(nodeAtIndex)
    }

    _removeNode(node) {
        const prevNode = node.prev
        const nextNode = node.next

        if (prevNode) {
            prevNode.next = nextNode
        }

        if (nextNode) {
            nextNode.prev = prevNode
        }


        node.prev = null
        node.next = null

        if (node === this.head) {
            this.head = nextNode
        }


        if (node === this.tail) {
            this.tail = prevNode
        }

        this.size--
    }

    // Ищет элемент в списке по индексу.
    // Если индекс за пределами — кидает ошибку.
    searchByIndex(index) {
        this._checkIndex(index)

        let tempNode = this.head

        for (let i = 0; i < index; i++) {
            tempNode = tempNode.next
        }

        return tempNode
    }

    _checkIndex(index) {
        if (index >= this.size) {
            throw new Error('Индекс за пределами списка');
        }
    }

    // Ищет элемент в списке по значению.
    // Возвращает первый найденный элемент.
    // Опционально можно указать индекс начала поиска.
    // Если индекс за пределами — кидает ошибку.
    // Если элемент не найден, нужно вернуть null.
    searchByValue(value, startIndex = 0) {
        let tempNode = startIndex ? this.searchByIndex(startIndex) : this.head

        while (tempNode && tempNode.value !== value) {
            tempNode = tempNode.next
        }

        return tempNode
    }
}

// Создаёт новую ноду, где
// value — её значение,
// next — ссылка на следующую ноду,
// prev — ссылка на предыдущую ноду
function createNode(value) {
    return {
        value, next: null, prev: null,
    };
}

const res = {
    value: 5, prev: null, next: {
        value: -13, prev: `{Ссылка на элемент со значением 5}`, next: {
            value: 3, prev: `{Ссылка на элемент со значением -13}`, next: null
        }
    }
}


const startDoublyLinkedList = () => {
    const list = new DoublyLinkedList();
    list.add(5);
    list.add(3);
    list.add(-13, 1);
    list.add(7, 2);
    list.add(7);

    list.removeByValue(7)
    list.removeByIndex(3)

    let node = list.head
    let index = 0
    while (node !== null) {
        console.log(`node by Index ${index} =`, node.value);
        node = node.next
        index++
    }

    console.log('node1.prev', list.searchByIndex(1).prev.value)
    console.log('node2.prev', list.searchByIndex(2).prev.value)
    console.log('node2.prev.next', list.searchByIndex(2).prev.next.value)
    console.log('search by index 2', list.searchByIndex(2).value)

    try {
        console.log('search out size')
        list.searchByIndex(4).value
    } catch (e) {
        console.log('search out size ERROR: ', e.message)
    }

    console.log('search not exist value', list.searchByValue(33) )
    console.log('size', list.size)
}

export default startDoublyLinkedList



