function solucao() {
    const campo = document.getElementById("campo").value;

    // transforma o texto em vetor
    let vetor = campo.split(",");

    let invertido = [];

    // percorre de trás para frente
    for (let i = vetor.length - 1; i >= 0; i--) {
        invertido.push(vetor[i]);
    }

    document.getElementById("saida").innerHTML =
        "[" + invertido.join(", ") + "]";
}