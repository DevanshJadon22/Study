let arr=[250,645,300,900,50];
for (let count = 0; count < arr.length; count++) {
    arr[count]=arr[count]-0.1*arr[count];
}

for (let count = 0; count < arr.length; count++) {
    console.log(arr[count]);
}