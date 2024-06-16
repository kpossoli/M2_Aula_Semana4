/*Dado um array [5, 8, 3, 6], crie um novo array com o triplo de cada um dos números.*/

// Array original
const numeros = [5, 8, 3, 6];

// Criando um novo array com o triplo de cada número usando o método map
const triploNumeros = numeros.map(numero => numero * 3);

// Exibindo o novo array no console
console.log('Novo array com o triplo de cada número:', triploNumeros);

// Exibindo o resultado na página
const output = document.getElementById('output');
output.textContent = `Novo array com o triplo de cada número: ${triploNumeros.join(', ')}`;
