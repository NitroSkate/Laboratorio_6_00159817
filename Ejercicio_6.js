function encrip(c){
    var n=["0","1","2","3","4","5","6","7","8","9"];
    var l=["m","u","r","c","i","e","l","a","g","o"];
    var ca = "";
    for(let x of c){
        if(l.includes(x)){
            ca = ca + n[l.indexOf(x)];        
        }
        else{
            ca = ca + x;
        }
    }
    alert(ca);
}

encrip("hola");