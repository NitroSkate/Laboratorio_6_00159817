function sum(a){
    var cont2=a.length-1;
    for(let i = 0; i < a.length/2; i++){
        s= a[i]+a[cont2];
        cont2 -= 1;
        alert(s);
    }
}

sum([1,2,3,4,5,6]);