function determinarVencedor(alice, beto, clara) {
    if (alice !== beto && alice !== clara) {
        return "jogador 1 é o vencedor(a)!";
    } else if (beto !== alice && beto !== clara) {
        return "Jogador 2 é o vencedor(a)!";
    } else if (clara !== alice && clara !== beto) {
        return "Jogador 3 é o vencedor(a)!";
    } else {
        return "Ninguém ganhou. Todos inseriram o mesmo valor.";
    }
}
document.getElementById("playButton").addEventListener("click", function() {
    const alice = parseInt(document.getElementById("aliceInput").value);
    const beto = parseInt(document.getElementById("betoInput").value);
    const clara = parseInt(document.getElementById("claraInput").value);

    if (isNaN(alice) || isNaN(beto) || isNaN(clara) || (alice !== 0 && alice !== 1) || (beto !== 0 && beto !== 1) || (clara !== 0 && clara !== 1)) {
        document.getElementById("result").textContent = "Por favor, insira valores válidos (0 ou 1) para os jogadores.";
    } else {
        const resultado = determinarVencedor(alice, beto, clara);
        document.getElementById("result").textContent = resultado;
    }
})
