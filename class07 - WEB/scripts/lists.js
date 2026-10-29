const produtos = [
{
    nome: 'Teclado Mecânico',
    preco: 130.99,
    categoria: 'perifericos',
},
{
    nome: 'Monitor',
    preco: 1250.99,
    categoria: 'perifericos',
},
{
    nome: 'Cadeira',
    preco: 2500.99,
    categoria: 'perifericos',
},
];

produtos.forEach((produto) => {
console.log(`${produto.nome} - R$ ${produto.preco.toFixed(2)}`);
});

const pegarUrl = async () => {
const response = await fetch('https://api.github.com/users/octocat');
const data = await response.json();

console.log(data);
console.log(response);
};

pegarUrl();