class Edge{
    constructor(parent,child,weight,x1,y1,x2,y2){
        this.parent = parent;
        this.child = child;
        this.weight = weight;
        this.x1=x1;
        this.y1=y1;
        this.x2=x2;
        this.y2=y2;
    }
}
class Graph{
    constructor(x,y){
        this.x=x;
        this.y=y;
        this.Edges = [] 
        this.adjList = new Map();
        for(let i = 0; i < x; i++)
            for(let j = 0; j < y; j++)
                this.adjList.set(i*y+j+1,[]);
    }
    addEdge(node1,node2,weight,x1,y1,x2,y2){
        this.Edges.push(new Edge(node1,node2,weight,x1,y1,x2,y2));
    }
}
