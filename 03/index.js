const numeros = [1, 98, -76, 0, 12, 19, 5, 60, 44];

const maiorValor = numeros.reduce((acumulador, valorAtual) => {
    if(valorAtual > acumulador) {
        acumulador = valorAtual;
    }
    return acumulador;

});

console.log(maiorValor);