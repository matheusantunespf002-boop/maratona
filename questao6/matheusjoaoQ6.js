function solucao() {
    const campo = document.getElementById("campo").value;
    const vetor = campo.split(", ");
    let novoVetor = [];

    for(let i = 0; i < vetor.length; i++){
        let existe = false;
        for(let x = 0; x < novoVetor.length; x++) {
            if(vetor[i] === novoVetor[x]) {
                existe = true;
            }
        }
        if(existe === false) {
            novoVetor.push(vetor[i]);
        }
    }
    document.getElementById("saida").innerHTML = novoVetor.join(", ");
}

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Questão 6</title>
</head>
<body>
    <h1>Questão 6</h1>

    <input type="text" id="campo" placeholder="Digite aqui...">
    <button onclick="solucao()">Corrigir</button>

    <div id="saida"></div>
    <script src="../questao6/q6_julialouie.js"></script>
</body>
</html>