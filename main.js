var tablero = document.getElementById("planeta");
var lapiz = tablero.getContext("2d");
var x = 300;
var y = 250;

function imagenes(){
  fotoPlaneta = new Image()
  fotoPlaneta.src = "https://docs.google.com/uc?id=1kmT5R5MaRBD9cXcrAc6UtSgCslJLnvZT"
  fotoPlaneta.onload = dibujarPlaneta;

  rover = new Image();
  rover.src = "https://docs.google.com/uc?id=11MkVDY9DGh6OPAMrn4kaCswwZx4WI87K"
  rover.onload = dibujarRover;

}
function dibujarPlaneta(){
    lapiz.drawImage(fotoPlaneta, 0, 0, 600, 500)
}
function dibujarRover(){
    lapiz.drawImage(rover, x, y, 100, 80)
}

window.addEventListener("keydown", mover)

function mover(tecla){
console.log(tecla)
codigo = tecla.keyCode
if(codigo=="39"){
    x = x + 10;
    dibujarPlaneta();
    dibujarRover(); 
}
if(codigo=="37"){
    x = x - 10;
    dibujarPlaneta();
    dibujarRover(); 
}
if(codigo=="38"){
    y = y - 10;
    dibujarPlaneta();
    dibujarRover(); 
}if(codigo=="40"){
    y = y + 10;
    dibujarPlaneta();
    dibujarRover(); 
}
}