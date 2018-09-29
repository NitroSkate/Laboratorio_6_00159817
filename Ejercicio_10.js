function datos(n,a,f,t,c){
    var obj = {Nombre: n, Apellido: a, FechadeNacimiento: f, Telefono: t, Correo: c}
    alert(obj.Nombre);
    alert(obj.Apellido);
    alert(obj.FechadeNacimiento);
    alert(obj.Telefono);
    alert(obj.Correo);
}

n=prompt("Ingrese su nombre: ");
a=prompt("Ingrese su apellido: ");
f=prompt("Ingrese su fecha de nacimiento: ");
t=prompt("Ingrese su telefono: ");
c=prompt("Ingrese su correo: ");

datos(n,a,f,t,c);