class Stack {
    constructor() {
        this.size = 0;
        this.head = null;
        this.tail = null;
    }

    // Кладёт элемент на стек.
    // Возвращает новый размер стека.
    push(value) {
        const node = {value, next: null, prev: null};

        node.prev = this.tail

        if (this.tail) {
            this.tail.next = node
            this.tail = node
        } else {
            this.head = this.tail = node
        }

        return ++this.size
    }

    // Убирает элемент со стека.
    // Если стек пустой, кидает ошибку.
    // Возвращает удалённый элемент.
    pop() {
        if (this.isEmpty()) {
            throw new Error("stack is empty")
        }

        const delNode = this.tail
        this.tail = this.tail.prev

        this.size--

        return delNode
    }

    // Возвращает верхний элемент стека без его удаления.
    peek() {
        return this.tail
    }

    // Если стек пуст, возвращает true. В противном случае –– false.
    isEmpty() {
        return this.size === 0
    }
}


export const stack = () => {
    console.log('start STACK DEQUE',)

    const stack = new Stack()

    console.log('is empty true', stack.isEmpty())
    stack.push(2)
    stack.push(3)
    console.log("size 2 -> ", stack.size)

    console.log('last element 3', stack.tail)
    console.log('first element 2', stack.head)

    stack.push(4)
    const pop = stack.pop()

    console.log('pop 4 ->', pop)
    console.log('size 2 ->', stack.size)
    console.log('last element 3', stack.tail)
    console.log('first element 2', stack.head)

    console.log('peek last 3 ->', stack.peek())
}

