

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

let header = document.querySelector(".naav-principal")

window.addEventListener("scroll", () => {

    if( window.scrollY > 60 ){
       
    }
})

