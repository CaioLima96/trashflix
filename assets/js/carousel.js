function caousel() {
    let omdb = $.ajax({url: `https://www.omdbapi.com/?t=${element.target.getAttribute('data-title')}&apikey=c377b618`, async: false}).responseJSON
    console.log(omdb)

    //innerHTML += P OMDM.TITLE P <img data-poster="psycho">
}