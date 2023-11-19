# Funções Arrow

As funções de arrow são uma forma simplificada de escrever funções em javascript e se utilizam da programação funcional e são úteis para encurtar a escrita de métodos e passar os mesmos como argumentos de funções, são uma expressão mais sucinta.

### Sintaxe:

(argumento1, argumento2) => {bloco de código}

As funções arrow herdam automaticamente o valor `this` do contexto ao qual pertence.


### Exemplo:
const paises = ['Brasil', 'Argentina', 'Uruguai', 'Bolívia'];

console.log(paises.map((pais) => pais.toUpperCase()));
