// 2. Desenvolva um algoritmo para percorrer um vetor de 20 elementos
// inteiros e no final mostre a soma de todos os elementos.

let vetor = [1, 2, 3, 4, 5, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
let soma = 0
for (const num of vetor) {
    soma += num
}
console.log(soma)