function adivino(){
    var a = [];
    for(let i = 1; i<=20; i++){
        a.push(Math.floor(Math.random() * 21));
    }
    alert(a.length);
    var n = prompt("Ingrese un numero: ");
    n = parseInt(n);
    if(a.includes(n)){
        alert("Usted gano");
    }
    else{
        alert("Usted perdio");
    }
}

//n=prompt("Meta un numero: ");
adivino();