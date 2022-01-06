
//

class usuario{
    #nombre
    #apellidoPater
    #apellidoMater
    #edad
    #altura
    constructor(nombre,apellidoPater,apellidoMater,edad,altura){
        this.#nombre=nombre
        this.#apellidoPater=apellidoPater
        this.#apellidoMater=apellidoMater
        this.#edad=edad
        this.#altura=altura
    }
    setNombre(nombre) {
        this.#nombre = nombre
    }
    getNombre() {
        return this.#nombre
    }
    setApellidoPa(apellidoPater) {
        this.#apellidoPater = apellidoPater
    }
    getApellidoPa() {
        return this.#apellidoPater
    }
    setApellidoMa(apellidoMater) {
        this.#apellidoMater = apellidoMater
    }
    getApellidoMa() {
        return this.#apellidoMater
    }
    setEdad(edad) {
        this.#edad = edad
    }
    getEdad() {
        return this.#edad
    }
    setAltura(altura){
        this.#altura=altura
    }
    getAltura(){
        return this.#altura
    }
    

}
function onClic(){
    var sinletras=/^([0-9])*$/;
    var alturaLimit=/^[0-8][.][0-9][0-9]$/;
    us.setNombre(document.contenedor.namep.value);
    us.setApellidoPa(document.contenedor.apellidoPap.value);
    us.setApellidoMa(document.contenedor.apellidoMap.value);
    us.setEdad(document.contenedor.edadp.value);
    us.setAltura(document.contenedor.alturap.value);
    if(sinletras.test(document.contenedor.edadp.value) && alturaLimit.test(document.contenedor.alturap.value)){
        document.getElementById("all").innerHTML ="{ <br>nombre: "+us.getNombre()+" <br>pellidoPa: "+us.getApellidoPa()+" <br>apellidoMa: "+us.getApellidoMa()+" <br>edad:"+us.getEdad()+" <br>altura: "+us.getAltura()+"<br>}";
       var all=document.getElementById("all");
       var usepoo=document.getElementById("usepoo");
       var aviso=document.getElementById("aviso");
       all.style.color="Blue" 
       usepoo.style.color="red"
       aviso.style.color="Green"    
    }else{
        alert("Ingrese bien sus datos: "+us.getEdad()+" "+us.getAltura())
        document.getElementById("all").innerHTML ="";
    }
    }
function nextPage(){
    var sinletras=/^([0-9])*$/;
    var alturaLimit=/^[0-8][.][0-9][0-9]$/;
    us.setNombre(document.contenedor.namep.value);
    us.setApellidoPa(document.contenedor.apellidoPap.value);
    us.setApellidoMa(document.contenedor.apellidoMap.value);
    us.setEdad(document.contenedor.edadp.value);
    us.setAltura(document.contenedor.alturap.value);
    if(sinletras.test(document.contenedor.edadp.value) && alturaLimit.test(document.contenedor.alturap.value)){
        let person={
            nombre: us.getNombre(),
            apelldioPa: us.getApellidoPa(),
            apellidoMa: us.getApellidoMa(),
            edad: document.contenedor.edadp.value,
            altura: document.contenedor.alturap.value
        }
        localStorage.setItem("Person",JSON.stringify(person))
        document.pooform.submit();
    }else{
        alert("Escriba bien sus datos: "+us.getEdad()+" "+us.getAltura())
        document.getElementById("all").innerHTML ="";
    }
    
}

let nombre = localStorage.getItem("Nombre")
let apellidoPater=localStorage.getItem("ApellidoPaterno")
let apellidoMater=localStorage.getItem("ApellidoMaterno")
const us = new usuario(nombre,apellidoPater,apellidoMater,document.contenedor.edadp.value,document.contenedor.alturap.value);
document.getElementById("pe").innerHTML = "Bienvenido "+nombre+" "+apellidoPater+" "+apellidoMater;

document.contenedor.namep.value=nombre;
document.contenedor.apellidoPap.value=apellidoPater;
document.contenedor.apellidoMap.value=apellidoMater;
document.getElementById("aviso").innerHTML = "Se almacenan los datos ingresados que pueden ser modificados";
document.getElementById("usepoo").innerHTML ="Uso de Programacion Orientada a Objetos al igual que el uso de DOOM que cambia al momento de la validacion ";
