let select = document.querySelector("#select")
let select1 = document.querySelector("#select1")
let select2 = document.querySelector("#select2")
let camisa = document.querySelector(".sm")
let banyador = document.querySelector(".by")
let sandalia = document.querySelector(".sd")

function cambiar(){
    camisa.innerHTML = `<img src="${select.value}">`
}

function cambiar1(){
    banyador.innerHTML = `<img src="${select1.value}">`
}

function cambiar2(){
    sandalia.innerHTML = `<img src="${select2.value}">`
}

select.addEventListener("change",cambiar)
select1.addEventListener("change",cambiar1)
select2.addEventListener("change",cambiar2)