const numeros = [10, 1, 5, 50, 20, 30, 3, 4, 8, 2];
const numerosCrescentes = [...numeros];
const numerosDecrescentes = [...numeros];
const unicodeCrescentes = [...numeros];
const frutas = ["Banana", "Amora", "abacaxi", "uva", "Pera"];
const frutasAlfabeticas = [...frutas]
const frutasAlfabeticasDecrescentes = [...frutas];
const frutasCaracteres = [...frutas];

const ordemCrescente = numerosCrescentes.sort((a,b) =>{
    return a - b;
});

const ordemDecrescente = numerosDecrescentes.sort((a,b) =>{
    return b - a;
});

const ordemAlfabetica = frutasAlfabeticas.sort((a, b) => {
    return a.localeCompare(b);
});
const ordemAlfabeticaDecrescente = frutasAlfabeticasDecrescentes.sort((a, b) => {
    return b.localeCompare(a);
});

frutasCaracteres.sort((a,b) => {
    return a.length - b.length;
});

unicodeCrescentes.sort();


console.log(ordemCrescente);
console.log(ordemDecrescente);
console.log(unicodeCrescentes);
console.log(ordemAlfabetica);
console.log(ordemAlfabeticaDecrescente);
console.log(frutasCaracteres);