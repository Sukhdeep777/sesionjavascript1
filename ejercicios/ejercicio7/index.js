console.log("hola")
let select = document.querySelector("#select")
let info = document.querySelector(".info")
let img = document.querySelector(".img")
let ct = document.querySelector(".ct")
let div = document.querySelector(".div")

const texto = [
    {
        info: "Mario",
        imagen: "https://static.wikia.nocookie.net/wiki-doblaje-espana/images/7/75/Mario.png/revision/latest?cb=20220523085327&path-prefix=es",
        caracteristicas: "Mario es...."
    },
    {
        info: "Luigi",
        imagen: "https://static.wikia.nocookie.net/heroe/images/b/ba/Luigi_SMPJ.png/revision/latest?cb=20241118210831&path-prefix=es",
        caracteristicas: "Luigi es-......"
    },
    {
        info: "Wario",
        imagen: "https://static.wikia.nocookie.net/mario/images/3/3c/Wario_MP100.png/revision/latest/scale-to-width-down/1200?cb=20171120161202&path-prefix=es",
        caracteristicas: "Wario es....."
    }
]


function cambio(){
    div.innerHTML = texto[select.value].info
}

function cambio2(){
    div.innerHTML = `<img src="${texto[select.value].imagen}" class="object-cover w-full">`
}

function cambio3(){
    div.innerHTML = texto[select.value].caracteristicas
}

info.addEventListener("click",cambio)
img.addEventListener("click",cambio2)
ct.addEventListener("click",cambio3)