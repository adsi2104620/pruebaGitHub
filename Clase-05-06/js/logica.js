console.log('Logica inicio sesion');

const usuario = 'admin'
const clave = '1234'
let contador =0

let usuarios =[
    {"usuario":"OzKr", "clave":"1234","edad":15},
    {"usuario":"admin", "clave":"4567","edad":20},
    {"usuario":"otro", "clave":"1111","edad":18},
    {"usuario":"otro", "clave":"1111","edad":10}
]

let frutas = ['Manzana','Pera','Sandia']

function pruebaBoton(){
    let frutasMayus= frutas.map(fruta=>fruta.toLocaleUpperCase())

    let usuariosEdad= usuarios.map(usuario=>{
        return{
            ...usuario,
            edadRta:usuario.edad >=18 ? "Mayor Edad" :"Menor Edad"
        }
    })

    console.log(usuariosEdad);
}


// function pruebaBoton(){
//     let user = document.getElementById('user').value
//     let buscarUsuario= usuarios.find(usuario=> usuario.usuario===user)

//     console.log(buscarUsuario);
// }


// function pruebaBoton(){
//     let user = document.getElementById('user').value.toLocaleUpperCase()
//     let pw = document.getElementById('pw').value

//     let usuarioLogueado= usuarios.some(usuario=> usuario.usuario.toLocaleUpperCase()==user && usuario.clave==pw)

//     if(usuarioLogueado){
//         setUser()
//         window.open('localStorage.html')  
//     }else{
//         bloquearCuenta()
//         console.log('error de credenciales'); 
//     }

// }


// function pruebaBoton(){

//     let user = document.getElementById('user').value.toLocaleUpperCase()
//     let pw = document.getElementById('pw').value

//     if(usuario.toLocaleUpperCase()==user && clave==pw){
//         //logueado
//         setUser()
//         window.open('localStorage.html')  
//     }else{
             
//         bloquearCuenta()
//         console.log('error de credenciales'); 
//     }
// }
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