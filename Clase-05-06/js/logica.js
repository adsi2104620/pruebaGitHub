console.log('Logica inicio sesion');

const usuario = 'admin'
const clave = '1234'
let contador =0

let frutas = ['Manzana','Pera','Sandia']


function pruebaBoton(){

    let user = document.getElementById('user').value.toLocaleUpperCase()
    let pw = document.getElementById('pw').value

    if(usuario.toLocaleUpperCase()==user && clave==pw){
        //logueado
        setUser()
        window.open('localStorage.html')  
    }else{
             
        bloquearCuenta()
        console.log('error de credenciales'); 
    }
}
//bloquear el acceso
function bloquearCuenta(){
    let contadorStorage =getStorage()
    console.log(`valor inicial storage ${contadorStorage}`);
    if(contadorStorage==3){
        console.log('cuenta bloqueada');
    }else{
        contarIntentos()  
    }

}
//contar cada vez que se equivoque

function getStorage(){
    return localStorage.getItem('contador') || 0
}
function contarIntentos(){
    let contadorStorage =getStorage()
    contadorStorage++
    // console.log(`contador antes de sumar${ contadorStorage}`);
    imprimir('contador antes de sumar...',contadorStorage)
    setContador(contadorStorage)
}

function imprimir(mensaje,valor){
    console.log(`${mensaje}  ${valor}`);
}

function setUser(){
    localStorage.setItem('usuario',usuario)
}

function setContador(contador){
    localStorage.setItem('contador',contador)
}

function desbloquearCuenta(){
    localStorage.removeItem('contador')
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