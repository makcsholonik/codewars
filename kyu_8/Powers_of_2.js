//Powers of 2
//Complete the function that takes a non-negative integer n as input, and returns a list of all the powers of 2 with the exponent ranging from 0 to n (inclusive).

function powersOfTwo(n) {
    let start = 0;
    let arr = [];
    for (let i = start; i <=n; i++) {
        arr.push(i);
    }
    let newArr = arr.map(function(num) {
        return Math.pow(2,num);
    });
    return newArr;
}


// function powersOfTwo(n) {
//     return Array.from({length: n + 1}, (v, k) => 2 ** k);
// }
