function formulas(m){
    cont1=0;
    cont2=0;
    for(let x of m){
        cont1 += x;
    }
    prom = (1/m.length)*cont1;

    for(let x of m){
        cont2 += Math.pow(x-prom,2);
    }
    incert= Math.sqrt((1/(m.length-1)) * cont2);

    alert("Promedio: " + prom + "\n" + "Incerteza: " + incert);
}

formulas([14.4,14.5,14.4,14.3,14.6,14.5]);