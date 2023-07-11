// More Guests
// Date: 9th July 2023
// Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.
var guests = [" Jules Verne", " Walter isaacson", " Fredrick Nietze"];
var message = ", I'm really excited to invite my favorite authors on a dinner party and you are one of them.";
var notComing = guests.slice(1, 3);
guests.forEach(function (element) {
    console.log("Dear" + element + message);
});
console.log("I'm really sorry to announce that " + notComing + " cannot join us due to their tight schedule");
guests.splice(1, 2, " Benjamin Franklin", " Mark Twain");
guests.forEach(function (element) {
    console.log("Dear" + element + message);
});
console.log("Sorry to inturupt you again, I had to make an announcement that our table limit increased and we are now inviting more guests. Excited!");
guests.unshift(" Albert Camus");
guests.splice(2, 0, " James Clear");
guests.push(" William Shakespeare", " Nizam Gajnavi");
guests.forEach(function (element) {
    console.log("Dear" + element + message);
});
// New Code
console.log("We have invited ".concat(guests.length, " guests for dinner tonight!"));
