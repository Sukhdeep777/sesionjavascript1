// EJERCICIO 2
let nm = document.querySelector(".nombre")
console.log(nm)
let pwd = document.querySelector(".pwd")
console.log(pwd)
let btn = document.querySelector(".btn")
console.log(btn)
let div1 = document.querySelector(".div")
console.log(div1)

function mostarNombre(){
    div1.innerHTML = `Hola ${nm.value}, la teva contrasenya és ${pwd.value}`
    console.log(`Hola ${nm.value}, la teva contrasenya és ${pwd.value}`);
    alert(`Hola ${nm.value}, la teva contrasenya és ${pwd.value}`);
}

btn.addEventListener("click",mostarNombre)
