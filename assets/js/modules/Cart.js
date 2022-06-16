export function fcart(){

let btnOpenCart = document.querySelector("#cart-icon")
let btnClosedCart = document.querySelector("#cart-close")
let containerCart = document.querySelector(".container-cart")
    
btnOpenCart.addEventListener("click" , () => {
    containerCart.classList.add("mostrar")
  })
  
  btnClosedCart.addEventListener("click" ,() => {
    containerCart.classList.remove("mostrar")
  
  })

}