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

function editarProduto (id, quantidadeAtual) {
    var editado

    produtos.forEach(p => {
        if (p.id == id) {
            p.quantidade = quantidadeAtual
            editado = p
        }
    })

    return editado
}

function removerProduto (id) {
    var removido

    produtos.forEach (p => {
        if (p.id == id) {
            removido = p
        }
    })

    produtos.pop(removido)
}



module.exports = {
    criarProduto,
    adicionar_produto,
    listarProdutos,
    editarProduto,
    removerProduto
}