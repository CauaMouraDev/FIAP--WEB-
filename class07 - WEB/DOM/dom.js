const listaProduto = document.querySelector('.id');
const produtos = ['Notebook', 'Mouse', 'Teclado'];

if (listaProduto) {
    produtos.forEach((produto) => {
    listaProduto.innerHTML += `
    <div>
        <h1>${produtos}</h1>
    </div>
    `;
});
}