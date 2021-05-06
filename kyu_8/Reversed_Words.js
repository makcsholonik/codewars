//Reversed Words
//Complete the solution so that it reverses all of the words within the string passed in.

function reverseWords(str){
    return str.split(" ").reverse().join(" ");
}

// * .split - Метод split() разбивает объект String на массив строк путём разделения строки указанной подстрокой.
// * .reverse - Метод reverse() на месте обращает порядок следования элементов массива. Первый элемент массива становится последним, а последний — первым.
// * .join - Метод join() объединяет все элементы массива (или массивоподобного объекта) в строку.
