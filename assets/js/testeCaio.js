function validateEmail() {

    const inputEmail = document.querySelector('#email')

    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    try {

        if (inputEmail.value.match(validRegex)) {
  
            // alert("Endereço de email válido!");
        
            //return true;
        
        } else {

            //alert("Invalid email address!");

            throw new Error("Endereço de email inválido")
          
           //return false;
        
        }

    } catch (error) {
        alert(error)
    }
  
}
  
  
//isso seria pro modal, verificar depois
// document.addEventListener('click', (element) =>{
//     console.log(element.target.getAttribute('data-title'))

//     let omdb = $.ajax({url: 'https://www.omdbapi.com/?i=tt4154796&apikey=c377b618', async: false}).responseJSON
//     console.log(omdb) //innerHTML += P OMDM.TITLE P
    
//     document.querySelector('#filmeTituloModal p:nth-child(1)').innerText = omdb.Title;
//     document.querySelector('#filmeTituloModal p:nth-child(2)').innerText = omdb.Rated;    

//     // document.querySelector('.modal-header ').innerText = omdb.Title;

//     //ou fazer um for
//     // document.querySelector('.filmeNotaModal div:nth-child(1)').innerText = omdb.Title;

// })


document.addEventListener('click', (event) =>{

    let omdb2 = $.ajax({url: 'https://www.omdbapi.com/?i=tt4154796&apikey=c377b618', async: false}).responseJSON
    console.log(omdb2)

   if(event.target.id=="testeModal") {
    $(".modal-content").html(`
        <div class="modal-header">

            <div id="filmeTituloModal">
                <p>${omdb2.Title}</p>
                <p>${omdb2.Rated}</p>
            </div>

            <button type="button"  data-bs-dismiss="modal" aria-label="Close">X</button>

        </div>

        <div class="modal-body">

            <div id="filmePosterModal">
                <img src="${omdb2.Poster}" alt="${omdb2.Title} Poster">
            </div>

            <div id="filmeInfoModal">

                <div id="filmeNotaModal">

                    <div>
                        <p>IMDB</p>
                        <p>${omdb2.imdbRating}</p>
                    </div>

                    <div>
                        <p>${omdb2.Ratings[2].Source}</p>
                        <p>${omdb2.Ratings[2].Value}</p>
                    </div>

                    <div>
                        <p>${omdb2.Ratings[1].Source}</p>
                        <p>${omdb2.Ratings[1].Value}</p>
                    </div>

                </div>

                <div id="filmeSinopseModal">
                    <p>${omdb2.Plot}</p>
                </div>

                <hr>

                <div id="outrosFilmeModal">

                    <p>Gênero: ${omdb2.Genre}</p>
                    <p>Diretor: ${omdb2.Director}</p>
                    <p>Roteirista: ${omdb2.Writer}</p>
                    <p>Lançamento: ${omdb2.Released}</p>
                    <p>Duração: ${omdb2.Runtime}</p>

                </div>

            </div>

        </div>

    `);
   }
})


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


//primeira linha, mas não nescessariamente - não precisa de return 
//carousel
function caousel() {
    let omdb = $.ajax({url: `https://www.omdbapi.com/?t=${element.target.getAttribute('data-title')}&apikey=c377b618`, async: false}).responseJSON
    console.log(omdb)

    //innerHTML += P OMDM.TITLE P <img data-poster="psycho">
}





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