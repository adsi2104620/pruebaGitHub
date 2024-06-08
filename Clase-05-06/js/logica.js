console.log('Logica conectada');

const usuario = 'Admin'
const clave = '1234'


function pruebaBoton(){

    let user = document.getElementById('user').value
    let pw = document.getElementById('pw').value

    if(usuario==user && clave==pw){
        window.open('calculadora.html')  
    }else{
        console.log('error de credenciales');
        
    }

   
}