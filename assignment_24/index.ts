/*
More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. 
Have at least one True and one False result for each of the following:
• Tests for equality and inequality with strings
• Tests using the lower case function
• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
• Tests using "and" and "or" operators
• Test whether an item is in a array
• Test whether an item is not in a array
*/

// Test 11

let success = 'Happiness';

console.log("Money is success? I predict False.");

console.log(success == "Money");

// Test 12

let month = 'July';

console.log("This month isn't August? I predict True.");

console.log(month != 'August');

// Test 13

let name1 = 'ali raza';
let name2 = 'Ali Raza';

console.log("Name 1 and Name 2 are same? I predict it's true");

console.log(name1 == name2.toLowerCase());

// Test 14

let cityName = 'Dubai';
let anotherCityName = 'BANGKOK';

console.log("CityName and anotherCityName are same? I predict false.");

console.log(cityName.toLowerCase ==  anotherCityName.toLowerCase);

// Test 15

let myAge = 21;

console.log("I'm an adult? I predict true.")

console.log(myAge > 18);

// Test 16

let expenses = 5000;
let revenue = 3000;

console.log("Our expenses are 5,000 and our revenue is 3,000. I predict we are making a profit.")

console.log(expenses < revenue);

// Test 17

let cousinsAge = 21;

console.log("My age is equal to are greater than my cousin's?")

console.log(myAge >= cousinsAge);

// Test 18

let myGrades = 840;
let friendsGrades = 875;

console.log("I think my grades are more than or equal to my freind's.");

console.log(friendsGrades <= myGrades);

// Test 19

let cousinsGrades = 820;

console.log("My and my cousins grades are more than my Friends Grades. I predict it's false.");

console.log(myGrades > friendsGrades && cousinsGrades > friendsGrades);

// Test 20

console.log("My friends grades are more than mine and my cousines grades. I predict it's true.")

console.log(friendsGrades > myGrades && friendsGrades > cousinsAge);

// Test 21

console.log("My Grades are higher than my friend's grades or my cousin's grades. I predict it's true.");

console.log(myGrades > friendsGrades || myGrades > cousinsGrades);

// Test 21

console.log("My friend's grades are less than my grades or my cousin's grades. I predict it's false.")

console.log(friendsGrades < myGrades || friendsGrades < cousinsGrades);

// Test 22

let favCities: string[] = ["Dubai", "New Your", "Toronto", "London", "Seoul"];

console.log("Seoul is my favorite city? I predict true.")

console.log(favCities.indexOf("Seoul") !== -1);

// Test 23

console.log("Dubai isn't my favorite city? I predict it's false");

console.log(favCities.indexOf('Dubai') == -1);

// Test 24

console.log("Tokyo is not my fav city? I predict true");

console.log(favCities.indexOf('Tokyo') == -1);

// Test 25

console.log("New Your not in my fav cities? I predict false.");

console.log(favCities.indexOf('New Your') == -1);





