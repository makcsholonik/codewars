//List Filtering

//In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

const filter_list = l => l.filter(l => Number.isFinite(l));

// function filter_list(l) {
//     return l.filter(v => typeof v == "number")
// }

// function filter_list(l) {
//     return l.filter(e => Number.isInteger(e));
// }

//Метод Number.isFinite() определяет, является ли переданное значение конечным числом.
//Метод Number.isInteger() определяет, является ли переданное значение целым числом.