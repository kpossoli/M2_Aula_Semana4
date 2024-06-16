/*Exercício:
Dado um array contendo as idades dos usuários cadastrados, filtre e exiba no console apenas as idades maiores ou iguais que 18 anos.
Array de exemplo: [21, 17, 19, 18, 10, 31, 22, 41, 5]*/

/*Exercício:
Usando o mesmo array do primeiro exercício, filtre agora por valores menores de 18.
Com o resultado desse filter, aplique uma função de map para criar uma nova lista 
contendo quantos anos faltam para atingir a maioridade.*/

// Array de exemplo contendo as idades dos usuários cadastrados
const idades = [21, 17, 19, 18, 10, 31, 22, 41, 5];

// Filtrando as idades maiores ou iguais a 18 anos
const idadesMaioresOuIguais18 = idades.filter(idade => idade >= 18);

// Filtrando as idades menores de 18 anos
const idadesMenoresDe18 = idades.filter(idade => idade < 18);

// Mapeando para uma nova lista contendo quantos anos faltam para atingir a maioridade
const anosParaMaioridade = idadesMenoresDe18.map(idade => 18 - idade);

// Exibindo os arrays no console
console.log('Idades maiores ou iguais a 18 anos:', idadesMaioresOuIguais18);
console.log('Idades menores de 18 anos:', idadesMenoresDe18);
console.log('Anos faltando para atingir a maioridade:', anosParaMaioridade);

// Exibindo os resultados na página
const maioresOutput = document.getElementById('maiores');
maioresOutput.innerHTML = `<h2>Idades maiores ou iguais a 18 anos:</h2>
<p>${idadesMaioresOuIguais18.join(', ')}</p>`;

const menoresOutput = document.getElementById('menores');
menoresOutput.innerHTML = `<h2>Idades menores de 18 anos:</h2>
<p>${idadesMenoresDe18.join(', ')}</p>`;

const anosFaltandoOutput = document.getElementById('anosFaltando');
anosFaltandoOutput.innerHTML = `<h2>Anos faltando para atingir a maioridade:</h2>
<p>${anosParaMaioridade.join(', ')}</p>`;
