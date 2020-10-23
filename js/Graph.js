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
    constructor(){
        this.Edges = [] 
    }
    addEdge(node1,node2,weight,x1,y1,x2,y2){
        this.Edges.push(new Edge(node1,node2,weight,x1,y1,x2,y2));
    }
}
