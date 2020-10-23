const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const sleep = ms => {
    return new Promise(res => setTimeout(res,ms));
}
const drawMaze = async(maze,delay) => {
    ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.beginPath();
    for(let i = 0; i < maze.Edges.length; i++){
        let currEdge = maze.Edges[i];
       //console.log(currEdge);
        ctx.moveTo(currEdge.x1,currEdge.y1);
        ctx.lineTo(currEdge.x2,currEdge.y2);
        ctx.stroke();
        await sleep(delay*5);
    }
}
const initMaze = () => {
    let x = document.getElementById("x").value;
    let y = document.getElementById("y").value;
    let delay = document.getElementById("delay").value;
    let maze = new Graph();
    const dx = 1800/y;
    const dy = 960/x;
    //canvas width = 1800, height = 960 
    for(let i = 0; i < x-1; i++){
        for(let j = 0; j < y; j++){
            let w = Math.floor(Math.random()*(x*y*10));
            maze.addEdge(i*y+j+1,(i+1)*y+j+1,w,j*dx,i*dy+dy,j*dx+dx,i*dy+dy);
        }
    }
    for(let i = 0; i < x; i++){
        for(let j = 0; j < y-1; j++){
            let w = Math.floor(Math.random()*(x*y*10));
            maze.addEdge(i*y+j+1,i*y+j+2,w,j*dx+dx,i*dy,j*dx+dx,i*dy+dy);
        }
    }
    Kruskal(x,y,maze);
    drawMaze(maze,delay);
}

