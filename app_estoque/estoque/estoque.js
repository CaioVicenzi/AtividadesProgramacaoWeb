let produtos = Array ();

function criarProduto (id, nome, quantidade) {
    let p = {
        id : id,
        nome : nome,
        quantidade : quantidade
    }

    return p
}

function adicionar_produto (p) {
    produtos.push(p)
}

function listarProdutos () {
    return produtos
}



module.exports = {
    criarProduto,
    adicionar_produto,
    listarProdutos
}