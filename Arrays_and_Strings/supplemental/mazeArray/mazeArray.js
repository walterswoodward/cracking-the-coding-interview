//  Citation: Codepen, User: @Roni82, Link: https://codepen.io/Roni82/pen/KeVRwG

  function mazeArray(maze) {
    this.answer = null
    this.traverse = function(column, row){
      if(maze[column][row] == 2) {
        console.log("We solved the maze at " + column + ", " + row);
        answer = [column, row]
      } else if(maze[column][row] == 1) {
        console.log("We are on a valid path at ["+column+", "+row+"]");
        maze[column][row] = 9;
        if(column < maze.length - 1); {
          this.traverse(column + 1, row);
        } 
        if(row < maze[column].length - 1){
          this.traverse(column, row + 1);
        }
        if(column > 0){
          this.traverse(column - 1, row);
        }
        if(row > 0) {
          this.traverse(column, row - 1);
        }
      } else {
          console.log("You've hit a wall at ["+column+", "+row+"]")
      }
    }
    traverse(3,0) // Must start on path!
return answer
   
  }

  var myMaze = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 1, 0, 1, 0, 0, 0, 0, 0, 0],
    [0, 1, 0, 1, 0, 0, 0, 1, 1, 2],
    [0, 1, 1, 1, 0, 1, 1, 1, 0, 0],
    [0, 0, 0, 1, 1, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ]; 
  
  console.log(mazeArray(myMaze))

