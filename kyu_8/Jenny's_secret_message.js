//Jenny's secret message

//Jenny has written a function that returns a greeting for a user. However, she's in love with Johnny, and would like to greet him slightly different. She added a special case to her function, but she made a mistake.

// function greet(name) {
//     return "Hello, " + name + "!";
//     if (name === "Johnny")
//         return "Hello, my love!";
// }

const greet = (name) => name === 'Johnny' ? "Hello, my love!" : "Hello, " + name + "!"

// let greet = name => `Hello, ${name == "Johnny" ? "my love" : name}!`;
