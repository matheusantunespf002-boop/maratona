function solucao() {
    const campo = document.getElementById("campo").value;

    let invertida = "";

    for(let i = campo.length - 1; i >= 0; i--) {
        invertida += campo[i];
    }
    if(campo === invertida) {
        document.getElementById("saida").innerHTML = "A palavra é um palíndromo";
    } else{
        document.getElementById("saida").innerHTML = "a palavra nao corresponde a uma palindromo";
    }
}