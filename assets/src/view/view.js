document.getElementById('pesqFilmes').addEventListener('keyup', (element) =>{
    filmes(element.target.value)
    
})


function filmes(inputText) {

    for (let i = 0; i < arrMovie.length; i++){
        
        if(arrMovie[i].ptbr.toLowerCase().includes(inputText.toLowerCase()) || arrMovie[i].ingles.toLowerCase().includes(inputText.toLowerCase())) {

            let filmes = nossosFilmes(arrMovie[i].ingles)

            // for(i =0; i < filmes.length; i++) {


            // }

            let filmeCard = moldeCard(filmes)
            
            $("#lista").html(filmeCard)
            // document.getElementById('lista').innerHTML = filmeCard
            // $("#lista").html(moldeCard(filmes.Poster))
            console.log(filmes)
        } 
    }    
}