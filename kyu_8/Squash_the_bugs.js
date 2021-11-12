//Squash the bugs

//Simple challenge - eliminate all bugs from the supplied code so that the code runs and outputs the expected value. Output should be the length of the longest word, as a number.
//
// There will only be one 'longest' word.

function findLongest(str) {
    let spl = str.split(" ");
    let longest = 0
    for (let i = 0; i < spl.length; i++) {
        if (spl[i].length > longest) {
            longest = spl[i].length
        }
    }
    return longest
}

//const findLongest = s => Math.max(...s.split(" ").map(x => x.length));

//findLongest = s => s.split(" ").reduce((l, e) => l = l < e.length ? e.length : l, 0);