/*
Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding
the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
*/

let magician: string[] = ['Adam', 'David', 'John', 'Philip'];



function show_magicians() {
    magician.forEach(element => {
        console.log(element);
    });
}

function make_great() {
    for (let i = 0; i < magician.length; i++) {
        magician[i] = `Great ${magician[i]}`;
    }
}



make_great();
show_magicians();