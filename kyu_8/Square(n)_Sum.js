//Square(n) Sum

//Complete the square sum function so that it squares each number passed into it and then sums the results together.
// For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.

function squareSum(numbers) {
    if (numbers.length !== 0) {
        const square = numbers.map(n => n * n);
        const reducer = (a, c) => a + c;
        const sum = square.reduce(reducer);
        return sum
    } else {
        return 0
    }
}

/*
function squareSum(numbers){
    return numbers.reduce(function(sum, n){
        return (n*n) + sum;
    }, 0)
}
*/
/*
function squareSum(numbers){
    return numbers.reduce((sum,num) => sum + (num * num), 0);
}
*/