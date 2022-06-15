
let header = document.querySelector(".naav-principal")

window.addEventListener("scroll", () => {

    if( window.scrollY > 60 ){
       
    }
})


let theme = document.querySelector("body")
let btnTheme = document.querySelector("#btn-theme")

btnTheme.addEventListener("click" , () => {
    theme.classList.toggle("dark")

    let activo = btnTheme.classList.contains("bx-moon")

    if (activo) {
        btnTheme.classList.replace('bx-moon', 'bx-sun')
    } else {
        btnTheme.classList.replace('bx-sun' ,'bx-moon')
    }

})

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
    ,
    {
      id: 5,
      name: 'Sweatshirts',
      price: 30.00,
      image: 'https://academlo-store.netlify.app/assets/img/featured3.png',
      category: 'sweatshirts',
      quantity: 10
    }
]

// 1 buscar cuantas categorias hay en el arreglo
// 2 contar cuantos elementos hay en cada categoria


let ProductosXCategoria = [] // Array para guardar cuantos productos hay por categoria

document.addEventListener("DOMContentLoaded", () => {
    totalProductosPorCategoria()
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
                <div class="categorias__btn">
                    <h3>Show all</h3>
                    <p>show all products</p>
                </div>
              `

      for (const key in ProductosXCategoria) {
      fragment += `
                <div class="categorias__btn" data>
                    <h3>${key}</h3>
                    <p>${ProductosXCategoria[key]} products</p>
                </div>
              `
    }

    boxFiltro.innerHTML = fragment
 
}

mostrarProductoFiltrado("sweatshirts")

function mostrarProductoFiltrado(filtro){

  items.forEach( (productos) => {

    if(productos.category === filtro){
      console.log(productos);
    }

  })

} 




// categorias.forEach( (categoria) => {
//     let producto = categoria

//     if(totalProductos[producto]){
//         totalProductos[producto] +=1
//     }else{
//         totalProductos[producto] = 1
//     }   
    
// })




