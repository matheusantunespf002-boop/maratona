function resultadopalavras() {
    const frase = document.getElementById("campo").value.trim();

    let palavras = frase.split(" ");

    let total = palavras.length;

    let menor = palavras[0];
    let maior = palavras[0];

    for (let i = 1; i < palavras.length; i++) {
        if (palavras[i].length > maior.length) {
            maior = palavras[i];
        }

        if (palavras[i].length < menor.length) {
            menor = palavras[i];
        }
    }

    document.getElementById("saida").innerHTML =
        "Total: " + total +
        " · Mais longa: " + maior +
        " · Mais curta: " + menor;
}
