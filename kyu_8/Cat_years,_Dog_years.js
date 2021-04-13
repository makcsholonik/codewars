//Cat years, Dog years
//I have a cat and a dog.
//
// I got them at the same time as kitten/puppy. That was humanYears years ago.
//
// Return their respective ages now as [humanYears,catYears,dogYears]
//
// NOTES:
//
// humanYears >= 1
// humanYears are whole numbers only
// Cat Years
// 15 cat years for first year
// +9 cat years for second year
// +4 cat years for each year after that
// Dog Years
// 15 dog years for first year
// +9 dog years for second year
// +5 dog years for each year after that

let humanYearsCatYearsDogYears = function (humanYears) {
    let catYears = 0;
    let dogYears = 0;
    if (humanYears === 1) {
        catYears = 15;
        dogYears = 15;
    } else if (humanYears === 2) {
        catYears = 24;
        dogYears = 24;
    } else if (humanYears >= 3) {
        catYears = 4 * (humanYears - 2) + 24;
        dogYears = 5 * (humanYears - 2) + 24;
    }
    return [humanYears, catYears, dogYears];
}

console.log(humanYearsCatYearsDogYears(1));
console.log(humanYearsCatYearsDogYears(2));
console.log(humanYearsCatYearsDogYears(10));

//BEST
// var humanYearsCatYearsDogYears = function (y) {
//     if (y == 1) return [1, 15, 15]
//     if (y == 2) return [2, 24, 24]
//     return [y, (y - 2) * 4 + 24, (y - 2) * 5 + 24]
// }
//
// const humanYearsCatYearsDogYears = humanYears => [
//     humanYears,
//     (humanYears - 1 ? 16 : 11) + 4 * humanYears,
//     (humanYears - 1 ? 14 : 10) + 5 * humanYears,
// ];
//
// function humanYearsCatYearsDogYears(humanYears) {
//     switch (humanYears) {
//         case 1:
//             return [1, 15, 15]
//         case 2:
//             return [2, 24, 24];
//         default:
//             return [humanYears, (humanYears - 2) * 4 + 24, (humanYears - 2) * 5 + 24];
//     }
// }