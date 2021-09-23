//verificar se é EVENT ou ELEMENT
document.addEventListener('click', (event) =>{

    event.target.getAttribute('data-title')

    // let omdb2 = $.ajax({url: `https://www.omdbapi.com/?t=${event.target.getAttribute('data-title')}&apikey=c377b618`, async: false}).responseJSON
    // console.log(omdb2)

    // if(event.target.id=="testeModal") {
    //     $(".modal-header").html(`

    //         <div id="filmeTituloModal">
    //             <p>${omdb2.Title}</p>
    //             <p>${omdb2.Rated}</p>
    //         </div>

    //         <button type="button"  data-bs-dismiss="modal" aria-label="Close">X</button>
    //     `);
    //     $("#filmePosterModal").html(`
        
    //         <img src="${omdb2.Poster}" alt="${omdb2.Title} Poster">
        
    //     `);
    //     $("#filmeSinopseModal").html(`
    //         <p>${omdb2.Plot}</p>
    //     `);
    //     $("#outrosFilmeModal").html(`
    //         <p>Gênero: ${omdb2.Genre}</p>
    //         <p>Diretor: ${omdb2.Director}</p>
    //         <p>Roteirista: ${omdb2.Writer}</p>
    //         <p>Lançamento: ${omdb2.Released}</p>
    //         <p>Duração: ${omdb2.Runtime}</p>
    //     `);
    //     $("#filmeNotaModal").html(`
        
    //         <div>
    //             <p>IMDB</p>
    //             <p>${omdb2.imdbRating}</p>
    //         </div>

    //     `);
    // } 

    try {
        let omdb2 = $.ajax({url: `https://www.omdbapi.com/?t=${event.target.getAttribute('data-title')}&apikey=c377b618`, async: false}).responseJSON
        console.log(omdb2)
        
        
    
        if(omdb2 == undefined) {
            
            throw new Error('Requisição com erro')

        } else if(event.target.id=="testeModal") {
            $(".modal-header").html(`

                <div id="filmeTituloModal">
                    <p>${omdb2.Title}</p>
                    <p>${omdb2.Rated}</p>
                </div>

                <button type="button"  data-bs-dismiss="modal" aria-label="Close">X</button>
            `);
            $("#filmePosterModal").html(`
            
                <img src="${omdb2.Poster}" alt="${omdb2.Title} Poster">
            
            `);
            $("#filmeSinopseModal").html(`
                <p>${omdb2.Plot}</p>
            `);
            $("#outrosFilmeModal").html(`
                <p>Gênero: ${omdb2.Genre}</p>
                <p>Diretor: ${omdb2.Director}</p>
                <p>Roteirista: ${omdb2.Writer}</p>
                <p>Lançamento: ${omdb2.Released}</p>
                <p>Duração: ${omdb2.Runtime}</p>
            `);
            $("#filmeNotaModal").html(`
            
                <div>
                    <p>IMDB</p>
                    <p>${omdb2.imdbRating ? omdb2.imdbRating : 'NULL'}</p>
                </div>

            `);
        }
    
    } catch (error) {
        $(".modal-header").html(`
            <div id="filmeTituloModal">
                <p>${error}</p>
                <p></p>
            </div>
        `)
        console.log(error)
    }


//     if(event.target.id=="testeModal") {
        
//         $(".modal-header").html(`

//             <div id="filmeTituloModal">
//                 <p>${omdb2.Title}</p>
//                 <p>${omdb2.Rated}</p>
//             </div>

//             <button type="button"  data-bs-dismiss="modal" aria-label="Close">X</button>
//         `);
//         $("#filmePosterModal").html(`
        
//             <img src="${omdb2.Poster}" alt="${omdb2.Title} Poster">
        
//         `);
//         $("#filmeSinopseModal").html(`
//             <p>${omdb2.Plot}</p>
//         `);
//         $("#outrosFilmeModal").html(`
//             <p>Gênero: ${omdb2.Genre}</p>
//             <p>Diretor: ${omdb2.Director}</p>
//             <p>Roteirista: ${omdb2.Writer}</p>
//             <p>Lançamento: ${omdb2.Released}</p>
//             <p>Duração: ${omdb2.Runtime}</p>
//         `);
//         $("#filmeNotaModal").html(`
        
//             <div>
//                 <p>IMDB</p>
//                 <p>${omdb2.imdbRating ? omdb2.imdbRating : 'NULL'}</p>
//             </div>

//             <div>
//                 <p>${omdb2.Ratings[2].Source ? omdb2.Ratings[2].Source : 'NULL'}</p>
//                 <p>${omdb2.Ratings[2].Value ? omdb2.Ratings[2].Value : 'NULL'}</p>
//             </div>

//             <div>
//                 <p>${omdb2.Ratings[1].Source ? omdb2.Ratings[1].Source : 'NULL'}</p>
//                 <p>${omdb2.Ratings[1].Value ? omdb2.Ratings[1].Value : 'NULL'}</p>
//             </div>

//         `);
    
//         // <!--<div>
//         //         <p>${omdb2.Ratings[2].Source ? omdb2.Ratings[2].Source : 'NULL'}</p>
//         //         <p>${omdb2.Ratings[2].Value ? omdb2.Ratings[2].Value : 'NULL'}</p>
//         //     </div>

//         //     <div>
//         //         <p>${omdb2.Ratings[1].Source ? omdb2.Ratings[1].Source : 'NULL'}</p>
//         //         <p>${omdb2.Ratings[1].Value ? omdb2.Ratings[1].Value : 'NULL'}</p>
//         //     </div>-->


//         // for(i = 0; i < omdb2.lenght; i++) {
//         //     $("#filmeNotaModal").html(`
        
//         //     <div>
//         //         <p>IMDB</p>
//         //         <p>${omdb2.imdbRating}</p>
//         //     </div>

//         //     <div>
//         //         <p>${omdb2.Ratings[i].Source}</p>
//         //         <p>${omdb2.Ratings[i].Value}</p>
//         //     </div>

//         //     <div>
//         //         <p>${omdb2.Ratings[i].Source}</p>
//         //         <p>${omdb2.Ratings[i].Value}</p>
//         //     </div>

//         // `);
//         // }

        
//         //$("#").html(``);
    
//    } 

//     try {
//         if(event.target.id=="testeModal"){
            
//             $(".modal-header").html(`
    
//                 <div id="filmeTituloModal">
//                     <p>${omdb2.Title}</p>
//                     <p>${omdb2.Rated}</p>
//                 </div>

//                 <button type="button"  data-bs-dismiss="modal" aria-label="Close">X</button>
//             `);
//             $("#filmePosterModal").html(`
            
//                 <img src="${omdb2.Poster}" alt="${omdb2.Title} Poster">
            
//             `);
//             $("#filmeSinopseModal").html(`
//                 <p>${omdb2.Plot}</p>
//             `);
//             $("#outrosFilmeModal").html(`
//                 <p>Gênero: ${omdb2.Genre}</p>
//                 <p>Diretor: ${omdb2.Director}</p>
//                 <p>Roteirista: ${omdb2.Writer}</p>
//                 <p>Lançamento: ${omdb2.Released}</p>
//                 <p>Duração: ${omdb2.Runtime}</p>
//             `);
//             $("#filmeNotaModal").html(`
            
//                 <div>
//                     <p>IMDB</p>
//                     <p>${omdb2.imdbRating ? omdb2.imdbRating : 'NULL'}</p>
//                 </div>

//             `);
//         }else if(omdb2 != 200){
//             $(".modal-header").html("<p>ERRO: retorno da API inválido.</p>");
//             throw new Error("ERRO: retorno da API inválido.") 
//         }

        
//     } catch (error) {
        
//         alert(error)
//     }

   
})


//primeira linha, mas não nescessariamente - não precisa de return 
//carousel


function caousel() {
    let omdb = $.ajax({url: `https://www.omdbapi.com/?t=${element.target.getAttribute('data-title')}&apikey=c377b618`, async: false}).responseJSON
    console.log(omdb)

    //innerHTML += P OMDM.TITLE P <img data-poster="psycho">
}






/*
=====================
*/



// function testeModal() {
//     let omdb2 = $.ajax({url: 'https://www.omdbapi.com/?i=tt4154796&apikey=c377b618', async: false}).responseJSON
//     console.log(omdb2)

//     $(".modal-content").html(`
//         <div class="modal-header">

//             <div id="filmeTituloModal">
//                 <p>${omdb2.Title}</p>
//                 <p>${omdb2.Rated}</p>
//             </div>

//             <button type="button"  data-bs-dismiss="modal" aria-label="Close">X</button>

//         </div>

//         <div class="modal-body">

//             <div id="filmePosterModal">
//                 <img src="${omdb2.Poster}" alt="${omdb2.Title} Poster">
//             </div>

//             <div id="filmeInfoModal">

//                 <div id="filmeNotaModal">

//                     <div>
//                         <p>IMDB</p>
//                         <p>${omdb2.imdbRating}</p>
//                     </div>

//                     <div>
//                         <p>${omdb2.Ratings[2].Source}</p>
//                         <p>${omdb2.Ratings[2].Value}</p>
//                     </div>

//                     <div>
//                         <p>${omdb2.Ratings[1].Source}</p>
//                         <p>${omdb2.Ratings[1].Value}</p>
//                     </div>

//                 </div>

//                 <div id="filmeSinopseModal">
//                     <p>${omdb2.Plot}</p>
//                 </div>

//                 <hr>

//                 <div id="outrosFilmeModal">

//                     <p>Gênero: ${omdb2.Genre}</p>
//                     <p>Diretor: ${omdb2.Director}</p>
//                     <p>Roteirista: ${omdb2.Writer}</p>
//                     <p>Lançamento: ${omdb2.Released}</p>
//                     <p>Duração: ${omdb2.Runtime}</p>

//                 </div>

//             </div>

//         </div>
   
//    `);
// }




// `<div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel" style="border: 1px solid">

// <div class="carousel-inner">
//   <div class="carousel-item active">
//     <img data-title="avengers" src="./assets/img/bg/2-3.jpg" class="d-block w-100" alt="...">
//   </div>
//   <div class="carousel-item">
//     <img data-title="psycho" src="..." class="d-block w-100" alt="...">
//   </div>
//   <div class="carousel-item">
//     <img data-title="pikomon" src="..." class="d-block w-100" alt="...">
//   </div>
// </div>

// <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
//   <span class="carousel-control-prev-icon" aria-hidden="true"></span>
//   <span class="visually-hidden">Previous</span>
// </button>
// <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
//   <span class="carousel-control-next-icon" aria-hidden="true"></span>
//   <span class="visually-hidden">Next</span>
// </button>
// </div>`