function nossosFilmes (nameIngles) {
    return $.ajax({url: `https://www.omdbapi.com/?t=${nameIngles}&apikey=c377b618`, async: false}).responseJSON
}