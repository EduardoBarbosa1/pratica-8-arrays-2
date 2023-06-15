// 5. Crie uma função que recebe um vetor de inteiros e um número
// inteiro e retorne verdadeiro se o número faz parte do vetor ou falso
// se não faz parte.

let vetor = [1, 2, 3, 4, 5]
let numero = 4
let encontrado = false

for (num of vetor) {
    if (numero === num) {
        encontrado = true
    }
} if (encontrado) {
    console.log("Numero faz parte do vetor")
} else {
    console.log("Numero não faz parte do vetor");
}
