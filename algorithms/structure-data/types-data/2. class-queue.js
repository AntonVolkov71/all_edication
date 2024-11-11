class Queue {
    constructor() {
        this.size = 0;
        this.head = null;
        this.tail = null;
    }

    // Ставит элемент в очередь.
    // Возвращает новый размер очереди.
    enqueue(value) {
        const node = {value, next: null, prev: null};


        node.prev = this.tail

        if (this.tail) {
            this.tail.next = node
            this.tail = node
        } else {
            this.head = this.head = node

        }

        return ++this.size
    }

    // Убирает элемент из очереди.
    // Если очередь пустая, кидает ошибку.
    // Возвращает удалённый элемент.
    dequeue() {
        if (this.isEmpty()) {
            throw new Error('queue is empty')
        }

        const node = this.head
        const nextNode = node.next

        if(nextNode){
            node.next = null
            nextNode.prev = null
        }
        this.head = nextNode


        if(this.tail === node){
            this.tail = nextNode
        }

        this.size--

        return node
    }

    // Возвращает элемент в начале очереди.
    peek() {
        return this.head
    }

    // Если очередь пустая, возвращает true. В противном случае –– false.
    isEmpty() {
        return this.size === 0
    }
}

export const queue = () => {
    console.log('start QUEUE',)

    const queue = new Queue()

    queue.enqueue(2)
    queue.enqueue(3)
    console.log('is empty true', queue.isEmpty())
    console.log('first 5 -> ', queue.peek())

}