// More Guests
// Date: 9th July 2023

// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. 
// • Print a new set of invitation messages, one for each person in your list.

// It's being really exciting for me to work in this way by doing the assignments. I'm learning new methods and making things happen.
// Here I used two more new methods, unshift() and puch(). Unshift() is to add an item at the start of an array while push() is for adding the items at the end.
// I think there is a mistake in the brief because it says that we shoudl use append() to add item at the end of array. I searched about it and came to know that typescript don't have
// that method, intead it has push().
// And lastly I learned a new thing about splice() that we can add items at wherever we want and by using an additional parameter, it doesn't remove that the current item at that index.

let guests = [" Jules Verne", " Walter isaacson", " Fredrick Nietze"];
let message = ", I'm really excited to invite my favorite authors on a dinner party and you are one of them.";
let notComing = guests.slice(1, 3);

guests.forEach(element => {
    console.log("Dear" + element + message)
});

console.log("I'm really sorry to announce that " + notComing + " cannot join us due to their tight schedule");

guests.splice(1, 2, " Benjamin Franklin", " Mark Twain");

guests.forEach(element => {
    console.log("Dear" + element + message)
});

console.log("Sorry to inturupt you again, I had to make an announcement that our table limit increased and we are now inviting more guests. Excited!");

guests.unshift(" Albert Camus");

guests.splice(2, 0, " James Clear");

guests.push(" William Shakespeare", " Nizam Gajnavi");

guests.forEach(element => {
    console.log("Dear" + element + message)
});