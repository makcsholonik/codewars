//Remove exclamation marks
//Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

function removeExclamationMarks(s) {
    return s.replace(/!+$/, "");
}

console.log(removeExclamationMarks("wo!!!!!wo"));