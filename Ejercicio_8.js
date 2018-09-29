function sumam(m1,m2){
    var aux = [];
    for(let i = 0; i<m1.length; i++){
        for(let j = 0; j<m1.length; j++){
            aux.push(m1[i][j]+m2[i][j]);
        }
    }
    alert(aux);
}

a=[[1,2],[1,2]];
b=[[3,4],[3,4]];

sumam(a,b);