// More Guests
// Date: 9th July 2023
// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. 
// • Print a new set of invitation messages, one for each person in your list.
// Here in this assignment I used a new method of arrays called slice, which is to replace the items of an array in just one line. I found the method to do so one by one
// but digging deeper let me know this new method of doing the same thing in just one line. 
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
