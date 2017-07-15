function neighbor(id){
  var newState = STATE;
  switch (id) {
    case 0:
      return newState.availableCells = [
        id + 1,
        id + 3,
        id + 4
      ];
      break;
    case 1:
      return newState.availableCells = [
        id - 1,
        id + 1,
        id + 2,
        id + 3,
        id + 4
      ];
      break;
    case 2:
      return newState.availableCells = [
        id - 1,
        id + 2,
        id + 3
      ];
      break;
    case 3:
      return newState.availableCells = [
        id - 3,
        id - 2,
        id + 1,
        id + 3,
        id + 4
      ];
      break;
    case 4:
      return newState.availableCells = [
        id - 4,
        id - 3,
        id - 2,
        id - 1,
        id + 1,
        id + 2,
        id + 3,
        id + 4
      ];
      break;
    case 5:
      return newState.availableCells = [
        id - 4,
        id - 3,
        id - 1,
        id + 2,
        id + 3
      ];
      break;
    case 6:
      return newState.availableCells = [
        id - 3,
        id - 2,
        id + 1,
        id + 3,
        id + 4
      ];
      break;
    case 7:
      return newState.availableCells = [
        id - 4,
        id - 3,
        id - 2,
        id - 1,
        id + 1,
        id + 2,
        id + 3,
        id + 4
      ];
      break;
    case 8:
      return newState.availableCells = [
        id - 4,
        id - 3,
        id - 1,
        id + 2,
        id + 3
      ];
      break;
    case 9:
      return newState.availableCells = [
        id - 3,
        id - 2,
        id + 1
      ];
      break;
    case 10:
      return newState.availableCells = [
        id - 4,
        id - 3,
        id - 2,
        id - 1,
        id + 1
      ];
      break;
    case 11:
      return newState.availableCells = [
        id - 4,
        id - 3,
        id - 1
      ];
      break;
  }
}
