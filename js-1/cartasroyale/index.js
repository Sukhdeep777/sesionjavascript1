// Dades del teu projecte Supabase (les trobes a Settings → API)
let supabaseUrl = "https://lvlcgvbwaegbxebkmxyc.supabase.co";   // La URL del projecte
let supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx2bGNndmJ3YWVnYnhlYmtteHljIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzY3NTY4OTUsImV4cCI6MjA5MjMzMjg5NX0.pJejiJ_d7wvnjyxrndVxqeDSqPcUzmHba4kLPl7_1Tg";  // La clau "anon public"

// Creem el client: és l'objecte que ens permet llegir i escriure a la base de dades
let client = supabase.createClient(supabaseUrl, supabaseAnonKey);

function renderitzarCartas(cartas){
  let divCartas = ""
  for(let i = 0; i <cartas.length;i++){
      console.log(cartas[i].id,cartas[i].nombre)
      divCartas += `<div class="cartas border-1 w-[213px] h-[255px] rounded-4xl shadow-lg"><img src="${cartas[i].imagen}" alt=""></div>`
  }
    document.querySelector("#container").innerHTML = divCartas
}

// Funció que demana a Supabase totes les notícies i les pinta a la pàgina
async function carregarCartas() {
  // await = espera a tenir les dades abans de continuar; select("*") = agafa totes les columnes
  let resultat = await client.from("cartas").select("*");
  // resultat.data és l'array de notícies; si hi ha error, posem array buit
  if(resultat.data){
    let arrayCartas = resultat.data
    renderitzarCartas(arrayCartas);
  }
  // Passem l'array a la funció que genera l'HTML i el posa al div #llistaNoticies
}
carregarCartas()


