# Promise

O objeto Promise representa a conclusão (ou falha) eventual de uma operação assíncrona e seu valor resultante. Ele permite associar manipuladores com o valor de sucesso eventual ou motivo de falha de uma ação assíncrona. Isso possibilita que métodos assíncronos retornem valores como métodos síncronos, ao retornar uma promessa de fornecer o valor em algum momento futuro. Uma Promise pode estar nos estados: pendente (estado inicial, nem cumprida nem rejeitada), cumprida (quando a operação é concluída com sucesso) ou rejeitada (quando a operação falha). Quando uma promessa está pendente, pode ser cumprida com um valor ou rejeitada com um motivo (erro). Ao ser cumprida ou rejeitada, os manipuladores associados são chamados pelo método `then`. Se a promessa já foi cumprida ou rejeitada quando um manipulador correspondente é anexado, ele será chamado, evitando condições de corrida entre a conclusão de uma operação assíncrona e a adição de manipuladores. Uma promessa é considerada resolvida se estiver cumprida ou rejeitada, mas não pendente.

## Aplicação

// Função simulando uma requisição assíncrona para obter dados
function getDataFromServer() {
  return new Promise((resolve, reject) => {
    // Simulando uma requisição assíncrona que leva 2 segundos
    setTimeout(() => {
      const success = true; // simulando o resultado da requisicao
    }, 2000); // Dando um tempo de espera de dois segundos
  });
}

// Chamada da função e uso da Promise
getDataFromServer()
  .then((result) => {
    console.log('Dados recebidos:', result); // imprime os dados recebidos
  })
  .catch((error) => {
    console.error('Erro:', error); // se tiver erros resolva eles
  });
