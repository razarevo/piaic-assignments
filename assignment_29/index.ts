/*
Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
• Make a array of your three favorite fruits and call it favorite_fruits.
• Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, 
such as You really like bananas!
*/

let favorite_fruits: string[] = ["Banana", "Grapes", "Pineapple", "Cherry", "Lyche"];

if (favorite_fruits.indexOf('Banana') !== -1) {
    console.log(`I really like Bananas.`)
}

if (favorite_fruits.indexOf('Grapes') !== -1) {
    console.log(`I really like Grapes.`)
}

if (favorite_fruits.indexOf('Pineapple') !== -1) {
    console.log(`I really like Pineapple.`)
}

if (favorite_fruits.indexOf('Cherry') !== -1) {
    console.log(`I really like Cherry.`)
}

if (favorite_fruits.indexOf('Lyche') !== -1) {
    console.log(`I really like Lyche.`)
}
