const express = require ('express');
const estoque = require('./estoque/estoque')
const app = express();

app.get("/", function (req, res) {
    res.send("API Estoque")
})


app.get("/adicionarProduto/:id/:nome/:quantidade", function (req, res) {
    let id = req.params.id
    let nome = req.params.nome
    let quantidade = req.params.quantidade

    let produto = estoque.criarProduto(id, nome, quantidade)
    estoque.adicionar_produto(produto)
})

app.get("/api/listar", function (req, res) {
    res.json(estoque.listarProdutos)
})

app.get("/api/editar/:id/:quantidadeAtual", function (req, res){
    let id = req.params.id
    let qtdAtual = req.params.quantidadeAtual

    res.json(estoque.editarProduto(id, quantidadeAtual))
})

app.get("/api/remover/:id", function (req, res) {
    let id = req.params.id
    res.json(estoque.removerProduto(id))
})




const PORT = 8080;
app.listen (PORT, function () {
    console.log("app rodando na porta: " + PORT)
})