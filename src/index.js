// You should implement your task here.

module.exports = function towelSort(matrix) {
    let finishArr = [];
    if (!Array.isArray(matrix) || matrix.length === 0) {
        return [];
    } else {
        for (let i = 0; i < matrix.length; i++) {
            for (let j = 0; j < matrix[i].length; j++) {
                let ind
                if (i % 2 === 0) {
                    ind = j
                } else {
                    ind = (matrix[i].length - j - 1)
                }
                finishArr.push(matrix[i][ind]);
            }
        }
        return finishArr
    }
}

// let arr = [
//     [ 1, 2, 3 ],
//     [ 4, 5, 6 ],
//     [ 7, 8, 9 ],
// ];
// console.log(deepCount(arr))
