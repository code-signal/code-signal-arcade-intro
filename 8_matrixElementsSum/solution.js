function matrixElementsSum(matrix) {
    return matrix.map((line,j) =>  
        line.map((el, i) => 
        (matrix.slice(0,j).every(l => l[i]!==0)) ? el: 0)).reduce((a,b) => a+b.reduce((c,d) => c+d), 0);
}


function solution(matrix) {
    let result = 0;
    console.log('matrix:', matrix)
    for (let i = 0; i < matrix.length; i++){
        for (let j = 0; j < matrix[i].length; j++){
            if (matrix[i][j] == 0) {
                for (let k = i; k < matrix.length; k++)  {
                    matrix[k][j] = 0;
                }
            }
        }
    }
    console.log('matrix:', matrix)
    for (let i = 0; i < matrix.length; i++){
        for (let j = 0; j < matrix[i].length; j++){
            result += matrix[i][j]
        }
    }
    return result;