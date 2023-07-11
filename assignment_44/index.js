/*
Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as
many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using
a different number of arguments each time.
*/
function sandwich(ingredients) {
    console.log("Here are the ingredients included in your sandwich: ".concat(ingredients));
}
sandwich(['chicken', 'salad', 'ketchup', 'mayo']);
sandwich(['egg', 'Chipotle', 'olives']);
sandwich(['steak', 'Sauces', 'Onion']);
