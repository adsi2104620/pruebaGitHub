let dataProductos=[
    {nombre:"Manzana",precio:800},
    {nombre:"Pera",precio:900},
    {nombre:"Piña",precio:1700}
]

const selectProductos= document.getElementById('selectProductos')
dataProductos.forEach(element => {
    const option= document.createElement('option')
    option.value=element.precio
    option.text=element.nombre
    selectProductos.appendChild(option)
});


const tablaProductos= document.getElementById('tablaProductos')
const totalPagar= document.getElementById('total')

function agregarProducto(){
    //precio del producto   
    //const nombreProducto = selectProductos.options[selectProductos.selectedIndex].text;
    const nombreProducto = selectProductos.options[selectProductos.selectedIndex].text
    //cantidad producto
    const precioProducto= selectProductos.value
    const cantidad= document.getElementById('cantidad').value

    const subTotal= precioProducto*cantidad

    const fila = document.createElement('tr')

    const nomProduct= document.createElement('td')
    nomProduct.textContent=nombreProducto
    fila.appendChild(nomProduct)

    const priceProduct= document.createElement('td')
    priceProduct.textContent=precioProducto
    fila.appendChild(priceProduct)
    
    const quantityProduct= document.createElement('td')
    quantityProduct.textContent=cantidad
    fila.appendChild(quantityProduct)

    const total= document.createElement('td')
    total.textContent=subTotal
    fila.appendChild(total)

    const botonProduct= document.createElement('td')
    const botonBorrar = document.createElement('button')
    botonBorrar.textContent='Borrar'
    botonBorrar.className='btn btn-danger'

    botonBorrar.addEventListener('click',()=>{
        fila.remove()
        calcularTotal()
        alert('eliminando')
    })

    botonProduct.appendChild(botonBorrar)
    fila.appendChild(botonProduct)
    tablaProductos.appendChild(fila)

    calcularTotal()

}

function calcularTotal(){
    let total=0

    const filas = Array.from(tablaProductos.getElementsByTagName('tr'))


    // for (let i = 0; i < filas.length; i++) {
    //     const valorColumna = filas[i].getElementsByTagName('td')
    //     total+=  parseInt(valorColumna[3].textContent)        
    // }

    filas.forEach(fila => {
        const valorColumna = fila.getElementsByTagName('td')
        total+=  parseInt(valorColumna[3].textContent)
    });

    totalPagar.textContent=total
   // alert(total)

  

}