document.getElementById('pesqFilmes').addEventListener('change', (element) =>{
    filmes(element.target.value)
    
})


function filmes(inputText) {

    for (let i = 0; i < arrMovie.length; i++){
        
        if(arrMovie[i].ptbr.toLowerCase().includes(inputText.toLowerCase()) || arrMovie[i].ingles.toLowerCase().includes(inputText.toLowerCase())) {

            let filmes = nossosFilmes(arrMovie[i].ingles)

            
            document.getElementById('lista').innerHTML += moldeCard(filmes)
            // $("#lista").html(moldeCard(filmes.Poster))
            console.log(filmes)
        } 
    }    
}