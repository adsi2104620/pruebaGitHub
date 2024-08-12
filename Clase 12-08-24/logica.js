//console.log('conectados')

document.getElementById('cargando').innerHTML=('cargando..')
const imagen = document.getElementById('imagen-usuario')
fetch('https://randomuser.me/api/?results=2')
.then(response =>response.json())
.then(data=>{
    const usuario = data.results[0]
    console.log(usuario);
    document.getElementById('cargando').innerHTML=('')
    // console.log(`cedula ${usuario.id.value}`);
    document.getElementById('cedula').value=usuario.id.value || 'Sin valor'
    document.getElementById('nombres').value=`${usuario.name.first} ${usuario.name.last} ` || 'Sin valor'
    document.getElementById('email').value=usuario.email

    const imagenUsuario= document.createElement('img')
    imagenUsuario.src=usuario.picture.large
    imagen.appendChild(imagenUsuario)


})
.catch(error =>{
    console.log('error '.error);
})