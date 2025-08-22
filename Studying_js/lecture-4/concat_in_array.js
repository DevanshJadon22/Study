let marvelHero=['hulk','thor','ironman','spiderman'];
let dcHero=['superman','batman'];
let indianhero=['shaktiman','krish'];
let heros=marvelHero.concat(dcHero,indianhero);//here the .concat function does not make any change in marvelHero array.
console.log(heros);
console.log(marvelHero);
console.log(dcHero);//her dc hero array remained unchanged
console.log(indianhero);//indian hero array remained unchanged