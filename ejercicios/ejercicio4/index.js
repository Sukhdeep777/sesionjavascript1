let input = document.querySelector(".txt")
let btn = document.querySelector(".btn")
let div = document.querySelector(".div")

function imagen(){
    div.innerHTML = `<img src="${input.value}">`
}

btn.addEventListener("click",imagen)