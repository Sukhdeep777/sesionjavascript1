console.log("hola")
let info = document.querySelector(".info")
let img = document.querySelector(".img")
let ct = document.querySelector(".ct")
let div = document.querySelector(".div")

const texto = {
    info: "lorem",
    imagen: "https://static.wikia.nocookie.net/wiki-doblaje-espana/images/7/75/Mario.png/revision/latest?cb=20220523085327&path-prefix=es",
    caracteristicas: "lorem 12 12121"
}

function cambio(){
    div.innerHTML = texto.info
}

function cambio2(){
    div.innerHTML = `<img src="${texto.imagen}">`
}

function cambio3(){
    div.innerHTML = texto.caracteristicas
}

info.addEventListener("click",cambio)
img.addEventListener("click",cambio2)
ct.addEventListener("click",cambio3)