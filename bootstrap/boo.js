
let agregarProductoCarrito = document.querySelector(".btn")
const divProductos= document.getElementById("container-productos")

agregarProductoCarrito.addEventListener(`click`,()=>{
    divProductos.classList.toggle(".modal")
})

let carProduct =document.querySelector(".card")
let productoRow =document.querySelector(".modal-content")

let listaProducto= document.getElementById("container-productos")

let allProduct =[];

let valorTotal = document.getElementById("precioTotal")
let countProductos  = document.querySelector(".contador-productos")

listaProducto.addEventListener(`click`, e =>{

    if(e.target.classList.contains(`btn`)){
        const product = e.target.parentElement;
       
        let infoPro ={
          cantidad:1,
            titulo: product.querySelector("h5").textContent,
            precio: product.querySelector(".precio").textContent,
        }

        let esixte =allProduct.some(product => product.titulo === infoPro.titulo)

        allProduct =[...allProduct,infoPro]

        showHtml()
      
    };
   

})

let showHtml =() =>{

    productoRow.innerHTML = ""
    
    let total = 0;
    let totalPro = 0;



    allProduct.forEach(pro =>{
        contenedorPro.innerHTML =
         `<div class="modal-fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h1 class="modal-title fs-5" id="exampleModalLabel">CARRITO</h1>
                 <div class="contador">
                    <span class="contador-productos"></span>
                </div>
                </div>
                <div  class="modal-body">
                    <p id="vistaProducto; ">${pro.cantidad}</p>
                    <p id="vistaProducto">${pro.titulo}</p>
                    <p id="vistaProducto">${pro.precio} </p>
                    <span id="precioTotal">total:${parseInt(total) + parseInt(pro.precio) }</span>
                </div>
                </div>
               
              </div>
            </div>
          </div>
        </div>
        `
        productoRow.append(contenedorPro)
         
    total = total + parseInt(pro.precio)
    totalPro = totalPro + pro.cantidad

    })

    valorTotal.innerText= `${total}`;
    countProductos.innerText = totalPro;

}

