// Change Guest List
// Date: 9th July 2023
// Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. 
// You’ll have to think of someone else to invite.
// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
// • Print a second set of invitation messages, one for each person who is still in your list.
var guests = [" Jules Verne", " Walter isaacson", " Fredrick Nietze"];
var notComing = guests.slice(1, 3);
guests.forEach(function (element) {
    console.log("Dear" + element + ", I'm really excited to invite my favorite authors on a dinner party and you are one of them.");
});
console.log("I'm really sorry to announce that " + notComing + " cannot join us due to their tight schedule");
guests.splice(1, 2, " Benjamin Franklin", " Mark Twain");
guests.forEach(function (element) {
    console.log("Dear" + element + ", I'm really excited to invite my favorite authors on a dinner party and you are one of them.");
});
