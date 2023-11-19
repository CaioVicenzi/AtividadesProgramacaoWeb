function multiplicarMatrizes (matrizA, matrizB) {
    const linhasA = matrizA.length
    const colunasA = matrizA[0].length

    const linhasB = matrizB.length
    const colunasB = matrizB[0].length


    if colunasA !== colunasB || linhasA !== linhasB {
        console.log("não é possível calcular multiplicação")
        return
    }

    const resultado = new Array(linhasA)

    for (let i = 0; i < linhasA; i++) {
          result[i] = new Array(colunasB);
          for (let j = 0; j < colunasB; j++) {
            let soma = 0;
            for (let k = 0; k < colunasA; k++) {
              soma += matrizA[i][k] * matrizB[k][j];
            }
            resultado[i][j] = soma;
          }
        }
  
    return resultado;

}


const A = [
    [1, 2],
    [3, 4]
]

const B = [
    [5, 6],
    [7, 8]
]
  
console.log(multiplicarMatrizes(A, B))

  