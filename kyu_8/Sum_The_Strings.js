//Sum The Strings

//Create a function that takes 2 nonnegative integers in form of a string as an input, and outputs the sum (also as a string):
// Example: (Input1, Input2 -->Output)
// "4",  "5" --> "9"
// "34", "5" --> "39"
// Notes:
// If either input is an empty string, consider it as zero.
// Inputs and the expected output will never exceed the signed 32-bit integer limit (2^31 - 1)

function sumStr(a, b) {
    const numA = Number(a);
    const numB = Number(b);
    const sumNum = numA + numB;
    const sumStr = String(sumNum)
    return sumStr
}

/*
function sumStr(a,b) {
  return String(Number(a)+Number(b));
}
 */

// sumStr = (a,b) => String(+a + +b);

/*
function sumStr(a,b) {
    return (+a+ +b)+''
}
 */