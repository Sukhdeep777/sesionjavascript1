// Dades del teu projecte Supabase (les trobes a Settings → API)
let supabaseUrl = "https://lvlcgvbwaegbxebkmxyc.supabase.co/rest/v1/";   // La URL del projecte
let supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx2bGNndmJ3YWVnYnhlYmtteHljIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzY3NTY4OTUsImV4cCI6MjA5MjMzMjg5NX0.pJejiJ_d7wvnjyxrndVxqeDSqPcUzmHba4kLPl7_1Tg";  // La clau "anon public"

// Creem el client: és l'objecte que ens permet llegir i escriure a la base de dades
let client = supabase.createClient(supabaseUrl, supabaseAnonKey);

console.log("Hola cartas")

// Funció que demana a Supabase totes les notícies i les pinta a la pàgina
async function carregarCartas() {
  // await = espera a tenir les dades abans de continuar; select("*") = agafa totes les columnes
  let resultat = await client.from("cartas").select("*");
  // resultat.data és l'array de notícies; si hi ha error, posem array buit
  arrayCartas = resultat.data;
  // Passem l'array a la funció que genera l'HTML i el posa al div #llistaNoticies
  renderitzarCartas(noticies);
}
carregarCartas()
function renderitzarCartas(){
    let divCartas = ""
    for(let i = 0; i <arrayCartas.length;i++){
        console.log(arrayCartas[i].id,arrayCartas[i].nombre)
        divCartas = divCartas + `<div class="cartas border-1 w-[213px] h-[255px] rounded-4xl shadow-lg"><img src="${arrayCartas[i].imagen}" alt=""></div>`
    }
    console.log(divCartas)
    document.querySelector("#container").innerHTML = divCartas
}
renderitzarCartas()
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

