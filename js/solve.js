found = 0;
const dfs = (cur,par,path) =>{
    if(found)
        return path;
    if(cur==maze.x*maze.y)
        found = 1;
    if(!maze.adjList.get(cur).includes(path[path.length-1])){
        let x = path.pop();
        while(x!=par&&path.length){
            x=path.pop();
        }
        if(x!=undefined)
            path.push(x);
    }
    path.push(cur);
    for(let next = 0; next < maze.adjList.get(cur).length; next++){
        if(maze.adjList.get(cur)[next]==par)
            continue;
        dfs(maze.adjList.get(cur)[next],cur,path);
    }
    return path;
}
const solve = async() =>{
    let button = document.getElementById("solution");
    button.disabled = true;
    found = 0;
    let delay = document.getElementById("delay").value;
    let path = dfs(1,1,[]);
    /*
    for(let i = 0; i < path.length; i++)
        console.log(path[i]);
    */
    let ndx = dx/2, ndy = dy/2;
    ctx.beginPath();
    ctx.strokeStyle = "#FF0000";
    ctx.moveTo(ndx,0);
    await sleep(delay*100);
    ctx.stroke();
    for(let i = 0; i < path.length; i++){
        let nodex = (path[i]-1)%maze.y;
        let nodey = ((path[i]-1)/maze.y)|0;
        ctx.lineTo((nodex+1)*ndx*2-ndx,(nodey+1)*ndy*2-ndy);
        await sleep(delay*100);
        ctx.stroke();
        ctx.moveTo((nodex+1)*ndx*2-ndx,(nodey+1)*ndy*2-ndy);
    }
    ctx.lineTo(ndx*2*maze.y-ndx,ndy*2*maze.x);
    await sleep(delay*100);
    ctx.stroke();
    ctx.closePath();
}

