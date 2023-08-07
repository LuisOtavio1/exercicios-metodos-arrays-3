const cidades = [
    "Salvador",
    "São Paulo",
    "Brasilia",
    "Recife",
    "Rio de Janeiro",
];

const maiorString = cidades.reduce((acumulador, valorAtual) => {
    if(valorAtual.length > acumulador.length) {
        acumulador = valorAtual;
    }
    return acumulador;

});

console.log(maiorString);




