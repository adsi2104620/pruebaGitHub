console.log('logica storage');

const user =localStorage.getItem('usuario')

document.getElementById('titulo').innerHTML= `Bienvenido ${user}`