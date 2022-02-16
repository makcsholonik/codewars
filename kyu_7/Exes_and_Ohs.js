//Exes and Ohs

//Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

function XO(str) {
    let arrO = [];
    let arrX = [];
    let strArr = str.split('');
    for (let i = 0; i < strArr.length; i++) {
        if (strArr[i].toLowerCase() === 'o') {
            arrO.push(strArr[i]);
        }
        if (strArr[i].toLowerCase() === 'x') {
            arrX.push(strArr[i]);
        }
    }
    return arrO.length === arrX.length;
}

//function XO(str) {
//   let x = str.match(/x/gi);
//   let o = str.match(/o/gi);
//   return (x && x.length) === (o && o.length);
// }
//Метод match() возвращает получившиеся совпадения при сопоставлении строки с регулярным выражением
//g-Глобальный поиск; i-Регистронезависимый поиск

// const XO = str => {
//     str = str.toLowerCase().split('');
//     return str.filter(x => x === 'x').length === str.filter(x => x === 'o').length;
// }

// function XO(str) {
//     var a = str.replace(/x/gi, ''),
//         b = str.replace(/o/gi, '');
//     return a.length === b.length;
// }
//Метод replace() возвращает новую строку с некоторыми или всеми сопоставлениями с шаблоном, заменёнными на заменитель.