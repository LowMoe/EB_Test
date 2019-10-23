var urlFilms = "https://api.themoviedb.org/3/movie/upcoming?api_key=e082a5c50ed38ae74299db1d0eb822fe";
var requestAPI = new XMLHttpRequest();
requestAPI.open('GET', urlFilms);
requestAPI.responseType = 'json';
requestAPI.send();
requestAPI.onload = function(){
    var listeFilms = requestAPI.response;
    bgSlider(listeFilms);
    contentSlider(listeFilms)
    console.log(listeFilms);
}

function bgSlider(jsonObj) {
    var bgSlide = $('#slider');
    console.log(bgSlide)
    var pictToDisplay = jsonObj.results[0].poster_path;
    console.log(pictToDisplay)
    $(document).ready(function(){
        bgSlide.css("background", `url(https://image.tmdb.org/t/p/w500/${pictToDisplay}) no-repeat`); 
    })
}

function contentSlider(jsonObj) {
    var titleSlide = $('#slider h1');
    var titleToDisplay = jsonObj.results[0].original_title;


    var paraSlide = $('#slider > p');
    var paraToDisplay = jsonObj.results[0].overview;

    var starsSlide = $('#slider #stars p');
    var starsToDisplay = Math.round(jsonObj.results[0].vote_average);

    $(document).ready(function(){
        titleSlide.text(titleToDisplay); 
        paraSlide.text(paraToDisplay); 
        for (let i = 0; i < starsToDisplay; i++) {
            starsSlide.append("*"); 
        }
    })

}



/*var check = (listeFilms.results[0].poster_path);
    bgSlide.css('background-image', `url(https://image.tmdb.org/t/p/w500/${check})`); */
