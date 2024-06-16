// Array de exemplo
const valores = [1, 22, 31, 40, 3, 5];

// Usando reduce para encontrar o maior valor
const maiorValor = valores.reduce((anterior, atual) => {
    return atual > anterior ? atual : anterior;
}, valores[0]);

// Exibindo o maior valor no console
console.log('O maior valor no array é:', maiorValor);

// Exibindo o resultado na página
const output = document.getElementById('output');
output.textContent = `O maior valor no array é: ${maiorValor}`;
