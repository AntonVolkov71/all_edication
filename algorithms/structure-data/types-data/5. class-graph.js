/*
Реализуйте неориентированный граф с хранением данных в виде списка смежности с операциями добавления и удаления вершин и рёбер.
Вершины в этом графе — всегда строки. Граф должен быть простым (не иметь петель и кратных ребер).
Хранить информацию о графе нужно в объекте data, где ключами являются вершины, а значением, массив смежных вершин.
 */

// class Graph {
//     constructor() {
//         this.data = {};
//     }
//
//     // Добавляет вершину.
//     // Если вершина уже существует, ничего не делает.
//     addVertex(vertex) {
//         if (this.data[vertex]) {
//             return
//         }
//
//         this.data[vertex] = []
//     }
//
//     // Удаляет вершину.
//     removeVertex(vertex) {
//         if (!this.data[vertex]) {
//             return;
//         }
//
//         while (this.data[vertex].length) {
//             this.removeEdge(vertex, this.data[vertex][0]);
//         }
//
//         delete this.data[vertex];
//     }
//
//     // Добавляет грань между двумя вершинами.
//     addEdge(vertex1, vertex2) {
//         if (!this.data[vertex1] || !this.data[vertex2]) {
//             return
//         }
//
//         if (vertex1 === vertex2) {
//             return;
//         }
//
//         if (this.data[vertex1].indexOf(vertex2) === -1) {
//             this.data[vertex1].push(vertex2)
//         }
//
//         if (this.data[vertex2].indexOf(vertex1) === -1) {
//             this.data[vertex2].push(vertex1)
//         }
//     }
//
//     // Удаляет грань между двумя вершинами.
//     removeEdge(vertex1, vertex2) {
//         if (!this.data[vertex1] || !this.data[vertex2]) {
//             return
//         }
//
//         const i1 = this.data[vertex1].indexOf(vertex2)
//
//         if(i1 > -1){
//             this.data[vertex1].splice(i1, 1)
//         }
//
//         const i2 = this.data[vertex2].indexOf(vertex1)
//
//         if(i2 > -1){
//             this.data[vertex2].splice(i2, 1)
//         }
//     }
// }

class Graph {
    constructor() {
        this.data = {};
    }

    // Добавляет вершину.
    // Если вершина уже существует, ничего не делает.
    addVertex(vertex) {
        if (!this.data[vertex]) {
            this.data[vertex] = []
        }
    }

    removeVertex(vertex) {
        if (!this.data[vertex]) {
            return
        }


        while(this.data[vertex].length) {
            this.removeEdge(vertex, this.data[vertex][0])
        }

        delete this.data[vertex]
    }

    removeEdge(vertex1, vertex2){
        if (!this.data[vertex1] || !this.data[vertex2]) {
            return
        }

        const vertexIndex1 = this.data[vertex1].indexOf(vertex2);

        if (vertexIndex1 > -1) {
            this.data[vertex1].splice(vertexIndex1, 1)
        }

        const vertexIndex2 = this.data[vertex2].indexOf(vertex1);

        if (vertexIndex2 > -1) {
            this.data[vertex2].splice(vertexIndex2, 1)
        }
    }


    addEdge(vertex1, vertex2) {
        if (!this.data[vertex1] || !this.data[vertex2]) {
            return
        }

        if (vertex1 === vertex2) {
            return;
        }

        if (this.data[vertex1].indexOf(vertex2) === -1) {
            this.data[vertex1].push(vertex2)
        }

        if (this.data[vertex2].indexOf(vertex1) === -1) {
            this.data[vertex2].push(vertex1)
        }
    }
}

export const startGraph = () => {
    // Пример использования
    const graph = new Graph();

    graph.addVertex('A');
    graph.addVertex('B');
    graph.addVertex('C');
    graph.addVertex('D');

    graph.addEdge('A', 'B');
    graph.addEdge('A', 'C');
    graph.addEdge('B', 'C');
    graph.removeVertex('B')

    console.log(graph.data);
    /*
    {
      A: ['B', 'C'],
      B: ['A', ],
      C: ['A', ],

    }
     */
}
