console.log("Hola cartas")
let divCartas = ""
const arrayCartas = [
  {
    id: 1,
    created_at: "2026-04-21 10:00:58.593014+00",
    nombre: "Espiritu de Hielo",
    elixir: "1",
    imagen: "https://static.wikia.nocookie.net/clash-royale-esp/images/9/96/Espiritu_de_Hielo.png/revision/latest?cb=20160705173003&path-prefix=es"
  },
  {
    id: 2,
    created_at: "2026-04-21 10:01:39.529597+00",
    nombre: "Esqueletos",
    elixir: "1",
    imagen: "https://static.wikia.nocookie.net/clash-royale-esp/images/0/06/Esqueletos.png/revision/latest?cb=20160617044427&path-prefix=es"
  },
  {
    id: 3,
    created_at: "2026-04-21 10:02:38.592992+00",
    nombre: "MINI P.E.K.K.A",
    elixir: "4",
    imagen: "https://static.wikia.nocookie.net/clash-royale-esp/images/8/8e/MiniPEKKACard.webp/revision/latest?cb=20221210192528&path-prefix=es"
  }
]
console.log(arrayCartas[2].id);
for(let i = 0; i <arrayCartas.length;i++){
    console.log(arrayCartas[i].id,arrayCartas[i].nombre)
    divCartas = divCartas + `<div class="cartas border-1 w-[213px] h-[255px] rounded-4xl shadow-lg"><img src="${arrayCartas[i].imagen}" alt=""></div>`
}
console.log(divCartas)
document.querySelector("#container").innerHTML = divCartas