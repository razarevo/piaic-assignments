/*
They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
*/
var favCountries = ["Canada", "Switzerland", "South Korea", "Norway", "Newzeland", "England", "China", "Japan"];
console.log(favCountries);
var userProfile = {
    username: "Ali Raza",
    age: 21,
    userStatus: "Student",
    favCountries: ["Canada", "Switzerland", "South Korea", "Norway", "Newzeland", "England", "China", "Japan"]
};
console.log("".concat(userProfile.username, " is ").concat(userProfile.age, " years old ").concat(userProfile.userStatus, ", who love to visit ").concat(userProfile.favCountries, "."));
