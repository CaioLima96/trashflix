document.addEventListener('click', (event) =>{
    //
        event.target.getAttribute('data-title')

        console.log(event.target.getAttribute('data-title'))

        try {
            let omdb2 = $.ajax({url: `https://www.omdbapi.com/?t=${event.target.getAttribute('data-title')}&apikey=c377b618`, async: false}).responseJSON
            console.log(omdb2)
            
            
        
            if(omdb2 == undefined) {
                
                throw new Error('Requisição com erro')
    
            } else if(event.target.classList=="filmeModal") {
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
   
})
    