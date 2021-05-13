//Small enough? - Beginner
// You will be given an array and a limit value. You must check that all values in the array are below or equal to the limit value. If they are, return true. Else, return false.
// You can assume all values in the array are numbers.

function smallEnough(a, limit) {
    return Math.max(...a) <= limit
}

//Метод Math.max() возвращает наибольшее из нуля или более чисел.

//smallEnough = (a, l) => a.every(e => e <= l)
//Метод every() проверяет, удовлетворяют ли все элементы массива условию, заданному в передаваемой функции.

// function smallEnough(array, limit){
//     return array.filter( (value) => value > limit ).length > 0 ? false : true;
// }
//Метод filter() создаёт новый массив со всеми элементами, прошедшими проверку, задаваемую в передаваемой функции.