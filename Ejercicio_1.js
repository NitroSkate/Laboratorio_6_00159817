function ocurrencia (a, b){
    cont = 0;
    for(let x of b){
        if(x==a){
            cont=cont+1;
        }
    }
    return(cont);
}

alert(ocurrencia(5,[1,2,3,4,5,5]));