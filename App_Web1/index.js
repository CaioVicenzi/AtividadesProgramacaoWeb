const express = require('express')
const calc = require ('./util/calculadora');
const Calculadora = require('./util/calculadora');
const app = express();

app.get('/hello', function(req, res){
    res.send("Welcome")
});

app.get('/ola', function(req, res){
    res.send("hello, world!");
});

app.get ("/somar/:n1/:n2", function (req, res) {
    let n1 = req.params.n1
    let n2 = req.params.n2

    res.send(`${n1 } + ${n2 } = ${Calculadora.somar(n1, n2) }`)
})

app.get ("/subtrair/:n1/:n2", function (req, res) {
    let n1 = req.params.n1
    let n2 = req.params.n2

    res.send(`${n1 } - ${n2 } = ${Calculadora.subtrair(n1, n2) }`)
})

app.get ("/multiplicar/:n1/:n2", function (req, res) {
    let n1 = req.params.n1
    let n2 = req.params.n2

    res.send(`${n1 } * ${n2 } = ${Calculadora.multiplicar(n1, n2) }`)
})

app.get ("/dividir/:n1/:n2", function (req, res) {
    let n1 = req.params.n1
    let n2 = req.params.n2

    res.send(`${n1 } / ${n2 } = ${Calculadora.dividir(n1, n2) }`)
})

const PORT = 8080;
app.listen(PORT, function() {
    console.log('listening on', PORT);
});

