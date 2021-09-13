//pega o nome do filme
let abc = prompt('digita ae')
// let abcd = prompt('digita ae')


//inseri o nome na url
let omdb = $.ajax({url: `https://www.omdbapi.com/?s=${abc}&apikey=c377b618`, async: false}).responseJSON

// let omdb2 = $.ajax({url: `https://www.omdbapi.com/?t=${abcd}&apikey=c377b618`, async: false}).responseJSON


console.log(omdb)
// console.log(omdb2)




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

//como 
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


//======================

//ESTÁ FUNCIONANDO

// const arrMovie = [{ptbr: 'Velocipastor', ingles: 'The Velocipastor'}]

// function filmes() {
//     for (let i = 0; i < arrMovie.length; i++){
        
//         let filme = arrMovie[i].ingles;
//         $.getJSON(`https://www.omdbapi.com/?t=${filme}&apikey=c377b618`).then(function(response){
               
//                 let filme1 = response.Poster;
//                 console.log(filme1);
//             }
//         )
//     }
    
// }

