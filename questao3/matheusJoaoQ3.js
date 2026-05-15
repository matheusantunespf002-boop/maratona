function solucao() {
    const campo = document.getElementById("campo").value;

    // transforma o texto em vetor
    let vetor = campo.split(",");

    let saida = [];

    // percorre de trás para frente
    for (let i = vetor.length - 1; i >= 0; i--) {
        saida.push(vetor[i]);
    }

    document.getElementById("saida").innerHTML =
        "[" + saida.join(", ") + "]";
}