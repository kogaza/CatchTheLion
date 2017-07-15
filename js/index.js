//początkowy stan gry
var STATE = {
  isPlaying: true, //gra aktywna
  whoMoves: 0, //czyj ruch: 0 - gracz blue (góra), 1 - gracz dół (green)
  selectedCell: false, //które pole jest kliknięte
  availableCells: [], //dostępne pola do ruchu dla zaznaczonego
  //opis figur na planszy
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

//odczytanie wszystkich pół gry
var cells = document.querySelectorAll("td.cell");

//definicje kolorów gracza: 0 - niebo (blue), 1 - trawa (green)
function getPlayerColor(player){
  return player === 0 ? "blue" : "green";
}

//funkcja renderująca
function render(state){
  var cell; //pole gry
  var animalRow; //odniesienie do numeru pola
  var animal; //jakie zwierze
  var player; //jaki gracz
  var selectedCell = state.selectedCell; //odczytanie wybranego pola ze STATE
  var whoMoves = state.whoMoves; //odczytanie kogo ruch ze STATE
  var availableCells = state.availableCells; //odczytanie dostępnych pól dla zaznaczonego pola ze STATE

  //przejście po koljenych polach gry
  for(var i = 0; i < state.board.length; i++){
    cell = cells[i]; //pole gry
    animalRow = state.board[i]; //pole w board
    animal = animalRow[0]; //odczytanie zwierzaka z board
    player = animalRow[1]; //odczytanie gracza z board
    renderAnimal(animal, player, cell); //wybór zwierzaka
    cell.classList.remove('cell-available'); //wyczyszczenie klasy "dostępny"
    if(selectedCell === i){
      cell.classList.add("cell-selected"); //dodanie klasy "wybrany" dla elementu klikniętego
    }
    else if(player === whoMoves){
      cell.classList.add("cell-move"); //dodanie klasy "czyj ruch" dla zwirzątek gracza mającego prawo ruchu
      cell.classList.remove('cell-selected'); //usunięcie klasy "wybrany" dopuki żadne zwierzątko nei zostanie kliknięte
    }else{
      cell.classList.remove("cell-move");
      cell.classList.remove('cell-selected');
    }
  }
  //dodanie klasy "dostępny" wszystkim polom na które można wykonać ruch klikniętym zwierzątkiem
  for(var i = 0; i < availableCells.length; i++){
    for(var j = 1; j < 2; j++){
      var player = STATE.board[availableCells[i]][j]}; //nazwa gracza

      if(STATE.board[availableCells[i]] == '' || player != STATE.whoMoves){//sprawdzenie, czy sąsiednie pole jest wolne lub stoi figura przeciwnika
      cell = cells[availableCells[i]];
      cell.classList.add('cell-available');
    }
  }
}

function updateState(newState){
  STATE = newState;
  render(STATE);
}

function selectCell(id){
  var newState = STATE; //przypisanie aktualnego stanu w celu jego zmiany
  newState.selectedCell = id; //przypisanie wybranego pola przekazane przez EVENT "kliknięte pole"

  var animalRow; //odniesienie do numeru pola
  var animal; //jakie zwierze

  animalRow = STATE.board[id]; //pole w board
  animal = animalRow[0]; //odczytanie zwierzaka z board

  // console.log(STATE.selectedCell);

  var dostepnePola = document.querySelectorAll('.cell');
  var wybranePole = parseInt(dostepnePola[id].getAttribute("data-id","id")); //uzyskanie dostępu do klikniętego pola

  neighbor(id);//wywołanie funkcji sprawdzających jakiech dane pole ma "sąsiadów"
  dotsMove(id);
  updateState(newState); //przekazane zmienienego stanu do funkcji aktualizującej stan gry
}

//EVENT "kliknięte pole"
document.body.addEventListener('click', function(event){
  if(event.target.classList.contains('cell-move')){
    var id = parseInt(event.target.getAttribute('data-id'));
    selectCell(id);
  }
})

//odczytanie stanu gry
render(STATE);










//symulowanie ruchu
//zmiana zgracza
document.getElementById("playerMove").addEventListener("click", function(){
  console.log(STATE.whoMoves);
  if(STATE.whoMoves == 0) STATE.whoMoves = 1;
  else STATE.whoMoves = 0;
  STATE.availableCells =  [];
  render(STATE);
});
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
