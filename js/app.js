const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
var maze,dx,dy;
const sleep = ms => {
    return new Promise(res => setTimeout(res,ms));
}
const drawMaze = async(delay) => {
    ctx.beginPath();
    ctx.strokeStyle = "#000000";
    ctx.clearRect(0,0,canvas.width,canvas.height);
    for(let i = 0; i < maze.Edges.length; i++){
        let currEdge = maze.Edges[i];
       //console.log(currEdge);
        ctx.moveTo(currEdge.x1,currEdge.y1);
        ctx.lineTo(currEdge.x2,currEdge.y2);
        ctx.stroke();
        await sleep(delay*25);
    }
    ctx.closePath();
    let button = document.getElementById("solution");
    button.style.display='block';
    button.disabled=false;
}
const initMaze = () => {
    let x = document.getElementById("x").value;
    let y = document.getElementById("y").value;
    dx = canvas.width/y;
    dy = canvas.height/x;
    let delay = document.getElementById("delay").value;
    maze = new Graph(x,y);
    //canvas width = 1800, height = 700
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
    Kruskal(x,y);
    drawMaze();
}

