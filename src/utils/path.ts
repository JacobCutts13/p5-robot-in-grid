import {
    cellAt,
    getBottomRightPosition,
    getTopLeftPosition,
    Grid,
    Path,
    Position,
    parseGridStrings
  } from "./grid";
  
  
  function Move(grid: Grid, position: Position, path: Path, allVisted: Position[], startPos: Position, targetPos: Position): Position[] | null{
    allVisted.push({x: position.x, y: position.y})
    //reached target!
    if(position.x === targetPos.x && position.y === targetPos.y){
      return allVisted;  
    }
    //keep moving
    else{ 
      //can we move right
      if(cellAt({x: position.x + 1, y: position.y}, grid) === "."){
        position.x += 1
        const newPos = {x: position.x, y: position.y}
        path.push(["right", newPos]);
      }
      //can we move down
      else if(cellAt({x: position.x, y: position.y + 1}, grid) === "."){
        position.y += 1
        const newPos = {x: position.x, y: position.y}
        path.push(["down", newPos]);
      }
      //can't move right or down
      else{ 
        //if we backtracked to start then no solution return null
          if(position.x === startPos.x && position.y === startPos.y){
          return null
        }
        //backtrack
        else{
          grid.rows[position.y][position.x] = "x"; //remove square
          position.x = path[path.length -2][1].x; //move back 
          position.y = path[path.length -2][1].y;
          path.pop(); //remove previous move from path
          }
        }
      return Move(grid, position, path, allVisted, startPos, targetPos); //find next move from new position
      }
  }
  
  export function solve(grid: Grid): Position[] | null {
    const targetPos = getBottomRightPosition(grid);
    const startPos = getTopLeftPosition(grid);
    const moveStartPos = {x: startPos.x, y: startPos.y} //creating copy to prevent aliasing
    const answer = Move(grid, moveStartPos, [], [], startPos, targetPos);
    return answer;
  }

  const grid_5_5 = parseGridStrings([
    "...x.",
    "..xxx",
    "x.x..",
    ".....",
    "xxx.."
  ])
console.log(solve(grid_5_5))