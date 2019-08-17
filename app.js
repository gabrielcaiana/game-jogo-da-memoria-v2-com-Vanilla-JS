//selecino todos os items com a classe card e armazeno 
const cartas = document.querySelectorAll(".cartas")

// função para virar o card
function flipCard() {
    this.classList.toggle('flip')
}

/* criando um loop forEach para percorrer todos os
 cards e chamo um evento de tipo click para adicionar
 a função de flipCard */
cartas.forEach(cartas => cartas.addEventListener('click', flipCard));