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


function actualizar(propiedad) {
    // Apartir de esta linea de codigo sabemos a quien estamos seleccionando en el select. Lo que hace es guardar la información del valor que hemos elegido dentro del array de objetos.
    const personaje = texto[select.value];

    // 2. Lógica para decidir qué mostrar
    if (propiedad === "imagen") {
        div.innerHTML = `<img src="${personaje.imagen}" class="object-cover w-[100px] m-auto">`;
    } else {
        // Usamos la notación de corchetes [] para acceder a 'info' o 'caracteristicas'
        div.innerHTML = personaje[propiedad];
    }
}

info.addEventListener("click", () => actualizar("info"));
img.addEventListener("click", () => actualizar("imagen"));
ct.addEventListener("click", () => actualizar("caracteristicas"));