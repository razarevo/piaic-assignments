
// My name is Ali Raza
// It's 8th July 2023
// This is a simple program which prints my name along with whitespace aside. Here I used escape sequences to add the space and newline. Then the challenge was to print this same text without the space and newline while they are still there. So, I used JSON.Stingify() method for that purpose.

let personName = "\n \t \t \t Ali Raza \n \t \t \t";

console.log(personName)
console.log(JSON.stringify(personName))