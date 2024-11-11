class BinaryHeap {
    constructor() {
        // Массив для хранения данных.
        this.data = [];
    }

    // Добавление элемента.
    insert(node) {
        this.data.push(node)

        this._bubbleUp(this.data.length - 1)
    }

    // Удаление корневого элемента.
    // Возвращает корневой элемент, если он есть, в противном случае –– undefined.
    // вершина может быть единственным элементом дерева,
    // то есть первым и последним его элементом
    extract() {
        const rootIndex = 0;
        const root = this.data[rootIndex]
        const last = this.data.pop()

        if (this.data.length > 0) {
            this.data[rootIndex] = last
            this._sinkDown(rootIndex)
        }

        return root
    }

    _bubbleUp(childIndex) {
        const parentIndex = this._getParentIndex(childIndex)

        if (parentIndex < 0) {
            return
        }

        const parentNode = this.data[parentIndex];
        const childNode = this.data[childIndex];

        if (childNode > parentNode) {
            this.data[childIndex] = parentNode
            this.data[parentIndex] = childNode
            this._bubbleUp(parentIndex)
        }
    }

    _sinkDown(parentIndex) {
        const childLeftIndex = this._getChildIndex(parentIndex, true)
        const childRightIndex = this._getChildIndex(parentIndex, false)


        const childLeft = childLeftIndex < this.data.length ? this.data[childLeftIndex] : -Infinity
        const childRight = childRightIndex < this.data.length ? this.data[childRightIndex] : -Infinity

        const node = this.data[parentIndex];


        if (node < childLeft && childLeft >= childRight) {
            this.data[parentIndex] = childLeft
            this.data[childLeftIndex] = node
            this._sinkDown(childLeftIndex)
        } else if (node < childRight && childRight >= childLeft) {
            this.data[parentIndex] = childRight
            this.data[childRightIndex] = node
            this._sinkDown(childRightIndex)
        }
    }

    _getParentIndex(index) {
        return Math.floor((index - 1) / 2)
    }

    _getChildIndex(parentIndex, left = true) {
        if (left) {
            return (2 * parentIndex) + 1
        } else {
            return (2 * parentIndex) + 2
        }
    }
}

export const startBinaryMaxHeap = () => {
    console.log('startBinaryMaxHeap')

    const heap = new BinaryHeap();

    heap.insert(5)
    heap.insert(3)
    heap.insert(6)

    console.log('insert (5,3,6) -> result  [6, 5, 3] === ', heap.data)

    heap.extract()
    console.log('extract result [5, 3]', heap.data)
}