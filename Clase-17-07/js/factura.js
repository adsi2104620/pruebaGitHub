let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
let dataServicios=[
    {id:1,nombre:"Lavado General",precio:20000},
    {id:2,nombre:"Polichada",precio:50000},
    {id:3,nombre:"Lavado a presi[on",precio:40000},
    {id:4,nombre:"Servicio Completo",precio:70000},
    {id:5,nombre:"Cambio de aceite",precio:25000}
]

const selectTipoCliente= document.getElementById('tipoCliente')
usuarios.forEach(element => {
    const option= document.createElement('option')
    option.value=element.tipoCliente
    option.text=`${element.nombres} ${element.apellidos}`
    selectTipoCliente.appendChild(option)
});

const selectServicios= document.getElementById('servicios')
dataServicios.forEach(element => {
    const option= document.createElement('option')
    option.value=element.precio
    option.text=element.nombre
    selectServicios.appendChild(option)
});

function calcularTotal(){
    const valorServicio= parseInt(document.getElementById('servicios').value)
    const tipoCliente= document.getElementById('tipoCliente').value
    const mecanico=parseInt(document.getElementById('mecanico').value)
    const repuestos=parseInt(document.getElementById('repuestos').value)
    let total=0
   // console.log(tipoCliente);
    if(tipoCliente=='N'){
        total = valorServicio +mecanico+repuestos
    }else{
        total = (valorServicio +mecanico+repuestos)* 0.9
    }
   // const total= tipoCliente ==='N'? valorServicio +mecanico+repuestos:(valorServicio +mecanico+repuestos)* 0.9
    alert(total);
}