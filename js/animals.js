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
                  '<div class="dot dot-top-right"></div>'+
                  '<div class="dot dot-right"></div>'+
                  '<div class="dot dot-bottom-right"></div>'+
                  '<div class="dot dot-bottom"></div>'+
                  '<div class="dot dot-bottom-left"></div>'+
                  '<div class="dot dot-left"></div>'+
                  '<div class="dot dot-top-left"></div>';
  return el;
}
function elephant(player){
  var el = document.createElement("div");
  el.className = "animal elephant " + getPlayerColor(player);
  el.innerHTML =  '<div class="symbol"></div>'+
                  '<div class="dot dot-top-right"></div>'+
                  '<div class="dot dot-bottom-right"></div>'+
                  '<div class="dot dot-bottom-left"></div>'+
                  '<div class="dot dot-top-left"></div>';
  return el;
}
function chicken(player){
  var el = document.createElement("div");
  el.className = "animal chicken " + getPlayerColor(player);
  el.innerHTML =  '<div class="symbol"></div>'+
                  '<div class="dot dot-top"></div>';
  return el;
}
 function renderAnimal(animal, player, cell){
   var el;
   switch (animal) {
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
   cell.innerHTML = "";
   if(el !== undefined){
     cell.appendChild(el);
   }
 }
