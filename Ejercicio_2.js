function suma(a){
    sum=0;
    for(let x of a){
        sum=sum+x;
    }

    return sum;
}

alert(suma([1,2,3]));