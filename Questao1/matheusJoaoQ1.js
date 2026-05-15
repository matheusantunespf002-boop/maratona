function IdentificarMultiplicador() {
    const resultado = [];
    
    const campo = Number(document.getElementById("campo").value);

    for (let i = 1; i <= campo; i++) {

        if (i % 3 === 0 && i % 5 === 0) {
            resultado.push("FizzBuzz");

        } else if (i % 3 === 0) {
            resultado.push("Fizz");

        } else if (i % 5 === 0) {
            resultado.push("Buzz");
               
        } else if (i % 7 === 0) {
            resultado.push("Boom");

        } else {
            resultado.push(i);
        }
    }

    document.getElementById("saida").innerHTML = resultado.join(", ");
}