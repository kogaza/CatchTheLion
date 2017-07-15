function dotsMove(id){
  var newState = STATE;
  var animal = newState.board[id][0];
  var canMove = [];
  var neighbor = STATE.availableCells;
  var newAvailableCells = [];
  console.log(animal);
  switch (animal) {
    case 'giraffe':
        canMove = [
          id - 3,
          id - 1,
          id + 1,
          id + 3
        ]
      break;
    case 'lion':
        canMove = [
          id - 4,
          id - 3,
          id - 2,
          id - 1,
          id + 1,
          id + 2,
          id + 3,
          id + 4
        ]
      break;
    case 'elephant':
        canMove = [
          id - 4,
          id - 2,
          id + 2,
          id + 4
        ]
      break;
    case 'chicken':
        if(newState.board[id][1] == 0){
          canMove = [
            id + 3
          ]
        }
        else {
          canMove = [
            id - 3
          ]
        };
      break;
    default:
  }

  for(var i = 0; i < neighbor.length; i++){
    for(var j = 0; j < canMove.length; j++){
      if(neighbor[i] == canMove[j]){
        newAvailableCells.push(neighbor[i]);
      }
    }
  }
  console.log(newAvailableCells);
  STATE.availableCells = newAvailableCells;
  // for(var i = 0; i < notMove.length; i++){
  // }
}
