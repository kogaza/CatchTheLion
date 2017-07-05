var STATE = {
  isPlaying: true,
  whoMoves: 0,
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
// console.log(cells);

function getPlayerColor(player){
  return player === 0 ? "blue" : "green";
}

function giraffe(player){
  var el = document.createElement("div");
  el.className = "animal giraffe " + getPlayerColor(player);
  el.innerHTML =  '<div class="symbol"></div>'+
                  '<div class="dot dot-top"></div>'+
                  '<div class="dot dot-right"></div>'+
                  '<div class="dot dot-bottom"></div>'+
                  '<div class="dot dot-left"></div>';
  return el;
}
function lion(player){
  var el = document.createElement("div");
  el.className = "animal lion " + getPlayerColor(player);
  el.innerHTML =  '<div class="symbol"></div>'+
                  '<div class="dot dot-top"></div>'+
                  '<div class="dot dot-right"></div>'+
                  '<div class="dot dot-bottom"></div>'+
                  '<div class="dot dot-left"></div>';//zmien kropki
  return el;
}
function elephant(player){
  var el = document.createElement("div");
  el.className = "animal elephant " + getPlayerColor(player);
  el.innerHTML =  '<div class="symbol"></div>'+
                  '<div class="dot dot-top"></div>'+
                  '<div class="dot dot-right"></div>'+
                  '<div class="dot dot-bottom"></div>'+
                  '<div class="dot dot-left"></div>';//zmien kropki
  return el;
}
function chicken(player){
  var el = document.createElement("div");
  el.className = "animal chicken " + getPlayerColor(player);
  el.innerHTML =  '<div class="symbol"></div>'+
                  '<div class="dot dot-top"></div>'+
                  '<div class="dot dot-right"></div>'+
                  '<div class="dot dot-bottom"></div>'+
                  '<div class="dot dot-left"></div>';//zmien kropki
  return el;
}

function render(state){
  var cell;
  var animal;
  var el;
  var player;
  for(var i = 0; i < state.board.length; i++){
    cell = cells[i];
    animal = state.board[i];
    el = undefined;
    player = animal[1];
    switch (animal[0]) {
      case "giraffe":
        el = giraffe(player);
        break;
      case "lion":
        el = lion(player);
        break;
      case "elephant":
        el = elephant(player);
        break;
      case "chicken":
        el = chicken(player);
        break;
    }
    console.log(cell,animal,el);
    cell.innerHTML = "";
    if(el !== undefined){
      cell.appendChild(el);
    }
  }
  console.log("rendering", state);
}
render(STATE);
//symulowanie ruchu
document.getElementById("state0").addEventListener("click", function(){
  render(STATE);
});
document.getElementById("state1").addEventListener("click", function(){
  render({
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
