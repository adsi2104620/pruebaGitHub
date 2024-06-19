console.log('Logica conectada');

const usuario = [{user:'Admin', clave:'1234'},
{user:'root', clave:'123'}]
const clave = '1234'

let frutas = ['Manzana','Pera','Sandia']


function pruebaBoton(){

    let user = document.getElementById('user').value
    let pw = document.getElementById('pw').value

    if(usuario==user && clave==pw){
        window.open('calculadora.html')  
    }else{
        console.log('error de credenciales');        
    }

}
function imprimirArreglo(){
    let posicion= document.getElementById('arrayPosicion').value
    console.log(localStorage.getItem('arregloFrutas'));

    if(posicion>=frutas.length){
        console.log('posicion no valida');
        limpiar()
    }else{
         console.log(frutas[posicion]);
    }
}

function limpiar(){
    document.getElementById('arrayPosicion').value =''
    document.getElementById('arrayPosicion').focus()
}

function agregarFruta(){
    let nombreFruta=document.getElementById('nombreFruta').value.toLocaleUpperCase()
    nombreFruta= nombreFruta.trim()
     if(nombreFruta.trim()!==''){
         frutas.push(nombreFruta)
         guardarStorage(frutas)
         console.log(frutas);
         console.log(`Se agrego la fruta ${nombreFruta}`);
         document.getElementById('nombreFruta').focus()
     }else{
        console.log('Nombre no valido');
     }

}
function eliminarFruta(){
    let posicion= document.getElementById('arrayPosicion').value
    frutas.splice(posicion,1)
    console.log('eliminar  '+frutas);

}

function guardarStorage(arreglo){
    localStorage.setItem('arregloFrutas',arreglo)
    console.log('guardado en storage');
}