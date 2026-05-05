let input = document.querySelector(".txt")
let title = document.querySelector(".titulo")
console.log(input, title)

function copiar(){
    title.innerHTML = input.value
}

input.addEventListener("input",copiar)