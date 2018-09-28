function contadord(a){
    var a1 = [];
    var a2 = [];
    for(let x of a){
        if(a1.includes(typeof x)){
            a2[a1.indexOf(typeof x)] += 1;
        }
        else{
            a1.push(typeof x);
            a2.push(1);
        }
    }
    alert(a1 + "\n " + a2);
}

contadord(["a",1,"b",2,3,4]);