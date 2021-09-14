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
    {ptbr: 'Parque dos Dinossauros', ingles: 'Jurassic Park'},
    {ptbr: 'Psicose', ingles: 'Psycho'}

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
document.getElementById('textoInicial').addEventListener('keyup', (element) =>{
    filmesTrashReq(element.target.value)
})


//pega o que a pessoa digitou, compara com nosso array de filmes e busca o filme selecionado na api do omdb
//Verificar se essa função é só pro carousel
function filmesTrash(inputText) {

    for (let i = 0; i < arrMovie.length; i++){
        
        if(arrMovie[i].ptbr.toLowerCase().includes(inputText.toLowerCase()) || arrMovie[i].ingles.toLowerCase().includes(inputText.toLowerCase())) {

            let omdb = $.ajax({url: `https://www.omdbapi.com/?t=${arrMovie[i].ingles}&apikey=c377b618`, async: false}).responseJSON
            // document.querySelector('body').innerHTML += `<p>${omdb.Director}</p>`
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
