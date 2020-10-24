parent = []
rank = []
const find = (x) =>{
    if(parent[x]!=x)
        parent[x]=find(parent[x]);
    return parent[x];
}
const union = (x,y) => {
    x = find(x);
    y = find(y);
    if(x==y)
        return false;
    if(rank[x]<rank[y]){
        rank[y]+=rank[x];
        parent[x]=parent[y];
    }
    else{
        rank[x]+=rank[y];
        parent[y]=parent[x];
    }
    return true;
}
const initDS = n => {
    for(let i = 0; i <= n; i++){
        parent[i] = i;
        rank[i] = 1;
    }
}
const Kruskal = (x,y) => {
    initDS(x*y);
    let mst = [];
    maze.Edges.sort((edge1,edge2) => (edge1.weight>edge2.weight) ? 1:-1);
    for(let i = 0; i < maze.Edges.length; i++){
        let currEdge = maze.Edges[i];
        if(find(currEdge.child)!=find(currEdge.parent)){
            union(currEdge.child,currEdge.parent);
            maze.adjList.get(currEdge.child).push(currEdge.parent);
            maze.adjList.get(currEdge.parent).push(currEdge.child);
        }
        else    
            mst.push(currEdge);
    }
    maze.Edges=mst;
}

