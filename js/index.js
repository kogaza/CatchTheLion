var STATE = {
  isPlaying: true,
  whoMoves: 0,
  selectedCell: false,
  availableCells: [],
  board: [
    ["giraffe", 0],
    ["lion", 0],
    ["elephant", 0],
    [],
    ["chicken", 0],
    [],
    [],
    ["chicken", 1],
    [],
    ["elephant", 1],
    ["lion", 1],
    ["giraffe", 1],
  ]
};
var cells = document.querySelectorAll("td.cell");

function getPlayerColor(player){
  return player === 0 ? "blue" : "green";
}

function render(state){
  var cell;
  var animal;
  var animalRow;
  var player;
  var selectedCell = state.selectedCell;
  var whoMoves = state.whoMoves;
  var availableCells = state.availableCells;

  for(var i = 0; i < state.board.length; i++){
    cell = cells[i];
    animalRow = state.board[i];
    player = animalRow[1];
    animal = animalRow[0];
    renderAnimal(animal, player, cell);
    cell.classList.remove('cell-available');
    if(selectedCell === i){
      cell.classList.add("cell-selected");
    }
    else if(player === whoMoves){
      cell.classList.add("cell-move");
      cell.classList.remove('cell-selected');
    }else{
      cell.classList.remove("cell-move");
      cell.classList.remove('cell-selected');
    }
  }
  for(var i = 0; i < availableCells.length; i++){
    cell = cells[availableCells[i]];
    cell.classList.add('cell-available');
  }
}

function updateState(newState){
  STATE = newState;
  render(STATE);
}

function selectCell(id){
  var newState = STATE;
  newState.selectedCell = id;
  // console.log(STATE.selectedCell);
  newState.availableCells = [id + 3];

  updateState(newState);
}

document.body.addEventListener('click', function(event){
  if(event.target.classList.contains('cell-move')){
    var id = parseInt(event.target.getAttribute('data-id'));
    selectCell(id);
  }
})

render(STATE);










//symulowanie ruchu
document.getElementById("state0").addEventListener("click", function(){
  render(STATE);
});
document.getElementById("state1").addEventListener("click", function(){
  render({
    whoMoves: 1,
    board: [
      ["giraffe", 0],
      ["lion", 0],
      [],
      [],
      ["chicken", 0],
      ["elephant", 0],
      [],
      ["chicken", 1],
      [],
      ["elephant", 1],
      ["lion", 1],
      ["giraffe", 1],
    ]
  });
});
document.getElementById("state2").addEventListener("click", function(){
  render({
    whoMoves: 0,
    board: [
      ["giraffe", 0],
      ["lion", 0],
      [],
      [],
      ["chicken", 0],
      ["elephant", 0],
      [],
      ["chicken", 1],
      ["giraffe", 1],
      ["elephant", 1],
      ["lion", 1],
      [],
    ]
  });
});
document.getElementById("state3").addEventListener("click", function(){
  render({
    whoMoves: 1,
    board: [
      ["giraffe", 0],
      [],
      ["lion", 0],
      [],
      ["chicken", 0],
      ["elephant", 0],
      [],
      ["chicken", 1],
      ["giraffe", 1],
      ["elephant", 1],
      ["lion", 1],
      [],
    ]
  });
});
