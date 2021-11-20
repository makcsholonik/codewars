//Calculate number of inversions in array

//Array inversion indicates how far the array is from being sorted.
//
// Inversions are pairs of elements in array that are out of order.
//
// Examples
// [1, 2, 3, 4]  =>  0 inversions
// [1, 3, 2, 4]  =>  1 inversion: 2 and 3
// [4, 1, 2, 3]  =>  3 inversions: 4 and 1, 4 and 2, 4 and 3
// [4, 3, 2, 1]  =>  6 inversions: 4 and 3, 4 and 2, 4 and 1, 3 and 2, 3 and 1, 2 and 1
// Goal
// The goal is to come up with a function that can calculate inversions for any arbitrary array

function countInversions(array) {
    let sorted = array.slice().sort((a, b) => a - b).join``
    let count = 0;
    for (let i = 1; array.join`` !== sorted; i++) {
        for (let j = 0; j < array.length; j++) {
            if (array[j] < array[j - 1]) {
                let temp = array[j]
                array[j] = array[j - 1]
                array[j - 1] = temp
                count++
            }
        }
    }
    return count
}

// function countInversions(array) {
//     var numInversions = 0;
//     for (var i = 0; i < array.length; i++) {
//         for (var j = i + 1; j < array.length; j++) {
//             numInversions += array[i] > array[j];
//         }
//     }
//     return numInversions;
// }

// function countInversions(arr) {
//     return arr.map((x, i) => arr.slice(i + 1).filter(y => y < x).length).reduce((a, b) => a + b, 0);
// }

countInversions([2, 1, 3])