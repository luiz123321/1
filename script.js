const botoesComprar = document.querySelectorAll('.comprar-btn');
let quantidadeProdutos = 0;

botoesComprar.forEach((botao) => {
    botao.addEventListener('click', () => {
        quantidadeProdutos += 1;
        const nomeProduto = botao.dataset.produto;

        alert(`${nomeProduto} foi adicionado ao carrinho!\nTotal de itens: ${quantidadeProdutos}`);
    });
});