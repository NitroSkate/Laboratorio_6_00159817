function dato(array, t){
    var aux = [];
    for(let x of array){
        if(typeof x == t){
            aux.push(x);
        }
    }
    alert(aux);
}

dato([1,2,3,"asd",true],"number");