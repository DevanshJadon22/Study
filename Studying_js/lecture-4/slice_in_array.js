let marvelHero=['thor','ironman','spiderman','antman','doctor strange'];
console.log(marvelHero);
let subhero=marvelHero.slice(0,3);
console.log(subhero);
console.log(marvelHero.slice(1));//this will print all the elements of array from index 1 till last element
//we can also use slice() method to make a copy of array 
//making copy of marvelHero array

let copy=marvelHero.slice();
console.log(copy);