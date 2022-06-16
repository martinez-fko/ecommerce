export function scrollNav(){

    let header = document.querySelector("header")

    window.addEventListener("scroll", () => {

        if( window.scrollY > 60 ){
        header.classList.add("scroll-header")
        console.log(window.scrollY);
        }else{
            header.classList.remove("scroll-header")
        }
    })

}