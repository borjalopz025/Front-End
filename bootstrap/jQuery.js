let agregarProductoCarrito = $(".btn")
const divProductos= $("container-productos")

agregarProductoCarrito.click(()=>{
    divProductos.classList.toggle(".modal")
})

let carProduct =$(".card")
let productoRow =$(".modal-content")

let listaProducto= $("#container-productos")

let allProduct =[];

let valorTotal =$("#precioTotal")
let countProductos  = $(".contador-productos")

listaProducto.click( e =>{

    if(e.target.classList.contains(`btn`)){
        const product = $(e.target).parent();
       
        let infoPro ={
          cantidad:1,
            titulo: product.find(`.card-title`).text(),
            precio: product.find(".precio").text(),
        }

        

        allProduct.push(infoPro)

        showHtml()
      
    };
   

})

let showHtml =() =>{

    productoRow.innerHTML = ""
    
    let total = 0;
    let totalPro = 0;

    $(".modal-content").empty()

    allProduct.forEach(pro =>{
        let contenedorPro = document.createElement(`div`)
        contenedorPro.classList.add("card-body")

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
        $(".modal-content")
        .append(contenedorPro)
         
    total = total + parseInt(pro.precio)
    totalPro = totalPro + pro.cantidad

    })

    valorTotal.innerText= `${total}`;
    countProductos.innerText = totalPro;

}

