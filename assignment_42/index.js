/*
Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding
the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
*/
var magician = ['Adam', 'David', 'John', 'Philip'];
function show_magicians() {
    magician.forEach(function (element) {
        console.log(element);
    });
}
function make_great() {
    for (var i = 0; i < magician.length; i++) {
        magician[i] = "Great ".concat(magician[i]);
    }
}
make_great();
show_magicians();
