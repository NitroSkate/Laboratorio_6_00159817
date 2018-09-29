var p = [];

function persona(){
    f=true;
    while(f){
        console.log("1. Ingrese una persona: ");
        console.log("2. Buscar persona: ");
        console.log("3. Modificar persona: ");
        console.log("4. Eliminar una persona: ");
        console.log("5. Mostrar todo: ");
        console.log('6. Salir');
        var v = prompt("Ingrese una opcion: ");
        switch(parseInt(v)){
            case 1:
                Ingresar();
                break;
            case 2:
                Buscar();
                break;
            case 3:
                Modificar();
                break;
            case 4:
                Eliminar();
                break;
            case 5:
                Mostrar();
                break;
            case 6:
                f=false;
                break;
            default:
                console.log("Ingreso algo incorrecto.");
                break;
        }
    }
    alert(p.length);
}

function Ingresar(){
    Nombre = prompt("Ingrese un nombre: ");
    Apellido = prompt("Ingrese el apellido: ");
    FechaNac = prompt("Ingrese su fecha de nacimiento: ");
    Telefono = prompt("Ingrese su telefono: ");
    Correo = prompt("Ingrese el correo: ");
    p.push({Nombre, Apellido, FechaNac, Telefono, Correo});
}

function Buscar(){
    var n = prompt("Ingrese el nombre a buscar: ");
    var f = false;
    for (let x of p){
        if(x.Nombre == n){
            console.log(x.Nombre);
            console.log(x.Apellido);
            console.log(x.FechaNac);
            console.log(x.Telefono);
            console.log(x.Correo); 
            f = true;
        }
    }
    if(f==false){
        alert("No se encontro al usuario");
    }
}

function Modificar(){
    var n = prompt("Ingrese el nombre a buscar: ");
    var f = false;
    for (let x of p){
        if(x.Nombre == n){
            var nn = prompt("Ingrese el nombre a cambiar: ")
            var ap = prompt("Ingrese el apellido a cambiar: ")
            var fe = prompt("Ingrese la fecha a cambiar: ")
            var te = prompt("Ingrese el telefono a cambiar: ")
            var co = prompt("Ingrese el correo a cambiar: ")
            x.Nombre = nn;
            x.Apellido = ap;
            x.FechaNac = fe;
            x.Telefono = te;
            x.Correo = co;
            f = true;
        }
    }
    if(f==false){
        alert("No se encontro al usuario");
    }
}

function Eliminar(){
    var f = false;
    var m = p.length;
    var n = prompt("Ingrese el nombre para eliminar: ");
    for(let i = 0; i < m; i++){
        if(p[i].Nombre == n){
            if(i==0){
               p.shift();
            }
            else if(i == m){
                p.pop();
            }
            else{
                let aux = p.slice(i+1);
                p.splice(i+1);
                p.pop();
                p = p.concat(aux);
                i = m-1;
            }
        f = true;
        }
    }
    if(!f){
        alert("No se encontro el elemento a eliminar");
    }
}

function Mostrar(){
    if(p.length == 0){
        alert("No hay elementos");
    }
    else{
        for(let x of p){
            alert(x.Nombre);
        }
    }
}

persona();