//Grasshopper - Personalized Message
//Create a function that gives a personalized greeting. This function takes two parameters: name and owner.

function greet(name, owner) {
    if (name === owner) {
        return "Hello boss"
    }
    if (name !== owner) {
        return "Hello guest"
    }
}

// function greet (name, owner) {
//     return name === owner ? 'Hello boss' :  'Hello guest';
// }

