let arr=[250,645,300,900,50];
let i=0;
for (let value of arr) {
    let offer=value/10;
    arr[i]=arr[i]-offer;
    console.log(`the price of items after offer is ${arr[i]}. `);
    i++;
}

