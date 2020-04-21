class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    addvertex(vertex) {
        if(!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = [];
        }
    }

    addEdge(vertex1, vertex2) {
        if(this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
            this.adjacencyList[vertex1].push(vertex2);
            this.adjacencyList[vertex2].push(vertex1);
        }
    }

    removeVertex(vertex) {
        this.adjacencyList[vertex].forEach(element => {
            this.removeEdge(vertex, element)
        });
        delete this.adjacencyList[vertex];

    }

    removeEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(element => element !== vertex2);
        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(element => element !== vertex1);
    }

    DFSTraversalRecursive(start) {
        const result = [];
        const traversed = {};
        const self = this;

        function abc(vertex) {
            result.push(vertex);
            traversed[vertex] = true;
            self.adjacencyList[vertex].forEach(element => {
                if(!traversed[element]) return abc(element);
            })
        }

        abc(start);
        console.log(result);
    }

    DFSTraversalIterative(vertex) {
        const result = [];
        const traversed = {};
        const stack = [];
        let current = '';

        traversed[vertex] = true;
        stack.push(vertex);
        while(stack.length) {
            current = stack.pop();
            result.push(current);
            
            this.adjacencyList[current].forEach(element => {
                if(!traversed[element]) {
                    traversed[element] = true;
                    stack.push(element);
                }
            })
        }
        console.log(result);
    }

    BFSTraversalIterative(vertex) {
        const result = [];
        const traversed = {};
        const queue = [];
        let current = '';

        traversed[vertex] = true;
        queue.push(vertex);

        while(queue.length) {
            current = queue.shift();
            result.push(current);
            
            this.adjacencyList[current].forEach(element => {
                if(!traversed[element]) {
                    traversed[element] = true;
                    queue.push(element);
                }
            })
        }
        console.log(result);
    }
}

const graph = new Graph();
graph.addvertex('A')
graph.addvertex('B')
graph.addvertex('C')
graph.addvertex('D')
graph.addvertex('E')
graph.addvertex('F');

graph.addEdge('A', 'B')
graph.addEdge('A', 'C')
graph.addEdge('B', 'D')
graph.addEdge('C', 'E')
graph.addEdge('D', 'E')
graph.addEdge('D', 'F')
graph.addEdge('E', 'F')

// graph.DFSTraversalRecursive('A');
// graph.DFSTraversalIterative('A')
graph.BFSTraversalIterative('A')
// console.log(graph);