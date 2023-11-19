const matrizA = [
    [1, 2],
    [3, 4],
    [5, 6]
  ];
console.log("MatrizA: ")
imprimirMatriz(matrizA)

console.log("Matriz transposta: ")
imprimirMatriz(transporMatriz(matrizA))


function imprimirMatriz (matriz) {
      for (let row of matrix) {
        console.log(row.join(" "));
    }
}


function transporMatriz(matriz) {
    const linhas = matrix.length;
    const colunas = matrix[0].length;
    const transposta = new Array(colunas).fill(null).map(() => new Array(linhas));
    
    for (let i = 0; i < linhas; i++) {
        for (let j = 0; j < colunas; j++) {
            transposta[j][i] = matriz[i][j];
        }
    }
    
    return transposta;
}

