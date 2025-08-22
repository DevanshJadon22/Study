function number_of_vovels(s){
    let number_of_vov=0;
    let n=s.length;
    for(let i=0;i<n;i++){
        if(s[i]==='a'){
            number_of_vov++;
        }
        else if (s[i]==='e') {
            number_of_vov++;
        }
        else if (s[i]==='i') {
            number_of_vov++;
        }
        else if (s[i]==='o') {
            number_of_vov++;
        }
        else if (s[i]==='u') {
            number_of_vov++;
        }
    }
    console.log(number_of_vov);
}