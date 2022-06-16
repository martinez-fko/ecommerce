import { darkTheme } from './modules/themeDark.js'
import { scrollNav } from './modules/scrollNav.js'
import { fcart } from './modules/Cart.js' 


let containerProductos = document.querySelector(".categorias__result")

// Funciones para los productos

const items = [
    {
      id: 1,
      name: 'Hoodies',
      price: 14.00,
      image: 'https://academlo-store.netlify.app/assets/img/featured1.png',
      category: 'hoodies',
      quantity: 10
    },
    {
      id: 2,
      name: 'Shirts',
      price: 24.00,
      image: 'https://academlo-store.netlify.app/assets/img/featured2.png',
      category: 'shirts',
      quantity: 15
    },
    {
      id: 3,
      name: 'Sweatshirts',
      price: 24.00,
      image: 'https://academlo-store.netlify.app/assets/img/featured3.png',
      category: 'sweatshirts',
      quantity: 20
    },
    {
      id: 4,
      name: 'Sweatshirts',
      price: 30.00,
      image: 'https://academlo-store.netlify.app/assets/img/featured3.png',
      category: 'sweatshirts',
      quantity: 10
    }

]


let ProductosXCategoria = [] // Array para guardar cuantos productos hay por categoria

document.addEventListener("DOMContentLoaded", () => {
    darkTheme()
    scrollNav()
    fcart()
    totalProductosPorCategoria()
    mostrarProductos("All")
    mostarProductosCart()
})


function totalProductosPorCategoria(){
  //funcion que realiza el conteo de todos los productos por categoria
  let totalCategorias = items.map( (item) => item.category) //obtenemos un array de todas las categorias
  totalCategorias.forEach( (categorias) =>{
  
    if(ProductosXCategoria[categorias]){
      ProductosXCategoria[categorias] +=1
          }else{
            ProductosXCategoria[categorias] = 1
          }   
  })
  mostrarCategorias()
}

function mostrarCategorias(){

let boxFiltro = document.querySelector(".categorias__filtros")
let fragment = `
                <div class="categorias__btn" data-categoria="All">
                    <h3>Show all</h3>
                    <p>show all products</p>
                </div>
              `

      for (const key in ProductosXCategoria) {
      fragment += `
                <div class="categorias__btn" data-categoria=${key}>
                    <h3>${key}</h3>
                    <p>${ProductosXCategoria[key]} products</p>
                </div>
              `
    }

    boxFiltro.innerHTML = fragment
    eventbtnCategoria()
}

function eventbtnCategoria(){
  
  let btncategoria = document.querySelectorAll(".categorias__btn")
  btncategoria.forEach((category)=>{

        category.addEventListener("click", ()=>{
             let filtro = category.getAttribute("data-categoria")
             mostrarProductos(filtro)
        })
  })

}


//mostar productos 
function mostrarProductos(filtro){

  let fragment = ``

  items.map( (producto) => {

      if( producto.category === filtro){
        fragment += `
                <div class="categorias__item-producto" data-categoria="${producto.category}">
                  <div class="categorias__box-img">
                    <img src=${producto.image} alt="" />
                    <button class="btn-add-producto" data-id=${producto.id}><i class='bx bx-plus bx-sm'></i></button>
                  </div>
                  <div class="categorias__box-info">
                    <p> $ ${producto.price} <small> | Stock: ${producto.quantity}</small></p>
                    <p>${producto.name}</p>
                  </div>
                </div>
        `
      }
      if( filtro === "All"){
        fragment += `
        <div class="categorias__item-producto" data-categoria="${producto.category}">
          <div class="categorias__box-img">
            <img src=${producto.image} alt="" />
            <button class="btn-add-producto" data-id=${producto.id}><i class='bx bx-plus bx-sm'></i></button>
          </div>
          <div class="categorias__box-info">
            <p> $ ${producto.price} <small> | Stock: ${producto.quantity}</small></p>
            <p>${producto.name}</p>
          </div>
        </div>
          `
      }

  })
  containerProductos.innerHTML = fragment
  eventoBtnAddProducto()
}


//Guardamos el contenedor de los productor agregados al carrito
let carList = document.querySelector(".cart-list")
//declaramos nuestro carrito vacio
let cart = []
//guardamos el contenedor de cart count
let carcount = document.querySelector(".cart-count-icon")

function eventoBtnAddProducto(){

  //obtenemos todos los botones en un arreglo 
  let btnAddProducto = document.querySelectorAll(".btn-add-producto")
  //iteramos el arreglo de buttons
  btnAddProducto.forEach( (button) =>{
    //agregamos a cada boton el event listener
    button.addEventListener( "click" , () => {
      //obtenemos el atributo id del boton
      let id = parseInt( button.getAttribute("data-id"))
      //obtenemos la información del objeto con el id del arreglo items
      let producto = items.find( item => item.id === id )
      //llamo a la funcion para agregar el producto al carrito y paso el parametro producto
      agregarProducto(producto)
    })
  })

}


function agregarProducto(producto){
  let cartlocal = JSON.parse(localStorage.getItem("cart"))
  if(cartlocal){
    cart = cartlocal
  }

 let productofind = cart.find( item => item.id == producto.id )

 if( productofind){
    cart[productofind.index].quantitySelected += 1
 }else{
    producto.quantitySelected = 1
    producto.index = cart.length
    cart.push(producto)
   
 }
 localStorage.setItem("cart" ,  JSON.stringify(cart))
  mostarProductosCart()
}



function mostarProductosCart(){

  let fragmentoHTML = ``
  let suma = 0
  let cantidadTotal = 0
  let productsStorage = JSON.parse(localStorage.getItem("cart"))
  if(productsStorage){
    productsStorage.forEach( (producto)=>{
      fragmentoHTML += `
        <div class="cart-item">
              <img src=${producto.image} alt="">
              <p>${producto.name}</p>
              <small>Cantidad: ${producto.quantitySelected}</small>
          </div>
        `
        let totalProducto = producto.quantitySelected * producto.price
        suma += totalProducto
        cantidadTotal += producto.quantitySelected
    })

    fragmentoHTML += `
    <div class="cart-price">
        <p>Productos seleccionados:${ cantidadTotal }</p>
        <p>Total $${ suma }</p>
        <button class="btn_comprar">Comprar</button>
    </div>
    `

  }else{
    fragmentoHTML = `
              <div class="carrito-vacio">
                <img src="./assets/images/empty-cart.png" alt="">
                <h5>Aun no has agregado ningun producto a tu carrito</h5>
              </div>`
  }

  carList.innerHTML = fragmentoHTML
  carcount.textContent = cantidadTotal

}


