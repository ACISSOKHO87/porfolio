const menu = document.querySelector("#menu i")
const showMenu = document.querySelector(".div-toggle")

window.addEventListener("DOMContentLoaded", ()=>{

    window.addEventListener("scroll", () =>{
        menu?.classList.remove("fa-xmark")
        showMenu?.classList.remove("toggle");
    })

    window.addEventListener("resize", () =>{
        menu?.classList.remove("fa-xmark")
        showMenu?.classList.remove("toggle");
    })
    
    // modifier la bars en x lorsqu'on clique sur le menu
    menu?.addEventListener("click", (e:Event) =>{
        e.preventDefault()
        menu.classList.toggle("fa-xmark")
        showMenu?.classList.toggle("toggle")
    })
}) 