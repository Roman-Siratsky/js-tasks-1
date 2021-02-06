// common([1, 2, 3], [5, 3, 2], [7, 3, 2]) = 5
// common([1, 2, 2, 3], [5, 3, 2, 2], [7, 3, 2, 2]) = 7
let total = 0;

function common(array1, array2, array3) {
    for (let i = 0; i < array1.length; i++) {
        if (array1.includes(array2[i]) && array1.includes(array3[i])) {
            total += array1[i];
        }
    }
}

common([1, 2, 3], [5, 3, 2], [7, 3, 2])

console.log(total)