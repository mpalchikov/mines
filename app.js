startGame(9, 98, 0);
function startGame(WIDHT, HEIGHT, BOMBS){
const field = document.querySelector(".field");
const sellCount = WIDHT * HEIGHT;
field.innerHTML = "<button></button>".repeat (sellCount);
}