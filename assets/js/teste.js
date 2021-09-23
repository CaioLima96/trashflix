//pega o nome do filme
// let abc = prompt('digita ae')
// let abcd = prompt('digita ae')


//inseri o nome na url
// let omdb = $.ajax({url: `https://www.omdbapi.com/?s=${abc}&apikey=c377b618`, async: false}).responseJSON

// let omdb2 = $.ajax({url: `https://www.omdbapi.com/?t=${abcd}&apikey=c377b618`, async: false}).responseJSON


// console.log(omdb)
// console.log(omdb2)




/*
=====================================
*/




// try {
//     const omdb = $.ajax({url: `https://www.omdbapi.com/?s=${abc}&apikey=c377b618`, async: false}).responseJSON


//     if(omdb.Response == false) {
//         console.log(omdb.Response)
//         throw new Error('Requisição com erro')
        
//     }

//     console.log(omdb)
// } catch (error) {
//     console.log('Filme não achado, digita direito')
//     console.log(error)
// }

// try {
//     if(this.arr == 0) {
//         throw new Error("Pilha vazia")
//     } else {
//         this.arr.pop()
//     }

// } catch (error) {
//     console.log("ERROR: Não foi possivel retirar itens da pilha")
//     console.log(error)
// }




/*
=====================================
*/




//ESTÁ FUNCIONANDO


//array dos filmes que selecionanos
const arrMovie = [
    {ptbr: 'Centopéia Humana ', ingles:'human centipede'},
    {ptbr: 'Camisinha Assassinas', ingles:'Kondom des Grauens'},
    {ptbr: 'Rubber, Pneu Assassino', ingles:'Rubber'},
    {ptbr: 'Ataque dos tomates assassinos', ingles:'Attack of the Killer Tomatoes'},
    {ptbr: 'Sharknado', ingles:'Sharknado'},
    {ptbr: 'Ataque dos vermes Malditos', ingles:'Tremors'},
    {ptbr: 'Cinderela Baiana', ingles:'cinderela baiana '},
    {ptbr: 'Vagina Dentada', ingles:'Teeth'},
    {ptbr: 'Malditas Aranhas', ingles:'Eight Legged Freaks'},
    {ptbr: 'slender man', ingles:'slender man'},
    {ptbr: 'Dragon Ball evolution', ingles:'DragonBall evolution'},
    {ptbr: 'Pink Flamingos', ingles:'Pink Flamingos'},
    {ptbr: 'À Meia-Noite Levarei Sua Alma', ingles:'At midnight I will take your soul '},
    {ptbr: 'Caderno da Morte', ingles:'death Note'},
    {ptbr: "Velocipastor", ingles: "Velocipastor"},
<<<<<<< HEAD
    {ptbr: "Os maus mortos ", ingles : "the evil dead"},
    {ptbr: " ", ingles : ""},
    {ptbr: " ", ingles : ""},
=======
    {ptbr: "Os maus mortos ", ingles : "the evil dead"}
    {ptbr: " ", ingles : ""}
    {ptbr: " ", ingles : ""}
>>>>>>> 3977e942952b7ccafe5f7a200bc57c94f817ba94
]


//não lembro bem oq essa função ta fazendo
// function filmesReq(filmes) {
//     let omdb = $.ajax({url: `https://www.omdbapi.com/?s=${filmes}&apikey=c377b618`, async: false}).responseJSON
//     console.log(omdb)

//     // $.getJSON(`https://www.omdbapi.com/?t=${filmes}&apikey=c377b618`).then(function(response){
//     //    console.log(response);
//     // })
// }


//pega o valor do que a pessoa digitou em tempo real
document.getElementById('pesqFilmes').addEventListener('keyup', (element) =>{
    filmes(element.target.value)
    
})


//pega o que a pessoa digitou, compara com nosso array de filmes e busca o filme selecionado na api do omdb
//Verificar se essa função é só pro carousel
function filmes(inputText) {

    for (let i = 0; i < arrMovie.length; i++){
        
        if(arrMovie[i].ptbr.toLowerCase().includes(inputText.toLowerCase()) || arrMovie[i].ingles.toLowerCase().includes(inputText.toLowerCase())) {

            let omdb = $.ajax({url: `https://www.omdbapi.com/?t=${arrMovie[i].ingles}&apikey=c377b618`, async: false}).responseJSON
            // document.querySelector('body').innerHTML += `<li>${omdb.poster}</li>`
            console.log(omdb)
        } 
    }    
}


//isso seria pro modal, verificar depois
document.addEventListener('click', (element) =>{
    console.log(element.target.getAttribute('data-title'))

    let omdb = $.ajax({url: `https://www.omdbapi.com/?t=${element.target.getAttribute('data-title')}&apikey=c377b618`, async: false}).responseJSON
    console.log(omdb) //innerHTML += P OMDM.TITLE P
})

//<textarea name="" id="textoInicial" cols="30" rows="10"></textarea>