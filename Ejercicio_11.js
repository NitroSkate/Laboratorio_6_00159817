var ar=[];

function datos(Nombre,Apellido,FechaNac,Telefono,Correo){
    ar.push({Nombre,Apellido,FechaNac,Telefono,Correo});
}



n=prompt("Ingrese su nombre: ");
a=prompt("Ingrese su apellido: ");
f=prompt("Ingrese su fecha de nacimiento: ");
t=prompt("Ingrese su telefono: ");
c=prompt("Ingrese su correo: ");

datos(n,a,f,t,c);