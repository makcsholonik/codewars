//Square Every Digit

//Welcome. In this kata, you are asked to square every digit of a number and concatenate them.
// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.
// Note: The function accepts an integer and returns an integer

function squareDigits(num) {
    let numStr = String(num);
    let res = '';
    for (let i = 0; i < numStr.length; i++) {
        let squared = parseInt(numStr[i]) * parseInt(numStr[i]);
        res = res + String(squared)
    }
    return parseInt(res)
}

//top
//function squareDigits(num){
//   return Number(('' + num).split('').map(function (val) { return val * val;}).join(''));
//
// }