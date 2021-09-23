function nossosFilmes (nameIngles) {
    return $.ajax({url: `https://www.omdbapi.com/?S=${nameIngles}&apikey=c377b618`, async: false}).responseJSON
}