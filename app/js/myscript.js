var leftAr = $('#slider #arrowL');
var rightAr = $('#slider #arrowR');
var rightBtn = $('.bullet #bulletR ')
var midBtn = $('.bullet #bulletM ')
var leftBtn = $('.bullet #bulletL ')
var tabResultats;

// Récupération du lien de l'API
var urlFilms = "https://api.themoviedb.org/3/movie/upcoming?api_key=e082a5c50ed38ae74299db1d0eb822fe";
// Découpage de l'API
var requestAPI = new XMLHttpRequest();
requestAPI.open('GET', urlFilms);
requestAPI.responseType = 'json';
requestAPI.send();
// Utilisation de l'API avec les fonctions du slider
requestAPI.onload = function () {
    var listeFilms = requestAPI.response;
    tabResultats = listeFilms.results.length;
    bgSlider(listeFilms);
    contentSlider(listeFilms);
}



// Fonction pour l'image de fond du slider
function bgSlider(jsonObj) {
    var setMovie = 0;
    console.log(requestAPI);
    var bgSlide = $('#slider');
    var pictToDisplay = jsonObj.results[setMovie].poster_path;
    bgSlide.css("background", `url(https://image.tmdb.org/t/p/w500/${pictToDisplay}) no-repeat`);
    var clickMax = tabResultats - 1;
    var clickMin = 0;

    // fonctionnement des flèches pour le background image
    $(document).ready(function () {
        if (setMovie === 0) {
            leftAr.css('visibility', 'hidden');
        } else {
            leftAr.css('visibility', 'visible');
        }

        if (setMovie < clickMax) {
            rightAr.click(function () {
                setMovie++;
                var pictToDisplay = jsonObj.results[setMovie].poster_path;
                bgSlide.css("background", `url(https://image.tmdb.org/t/p/w500/${pictToDisplay}) no-repeat`);
                rightAr.css('visibility', 'visible');
                leftAr.css('visibility', 'visible');
                if (setMovie === clickMax) {
                    rightAr.css('visibility', 'hidden');
                }
            })
        }

        if (setMovie >= clickMin) {
            console.log(setMovie)
            console.log(clickMin)
            leftAr.click(function () {
                console.log(setMovie)
                console.log(clickMin)
                setMovie--;
                console.log(setMovie)
                console.log(clickMin)
                var pictToDisplay = jsonObj.results[setMovie].poster_path;
                bgSlide.css("background", `url(https://image.tmdb.org/t/p/w500/${pictToDisplay}) no-repeat`);
                leftAr.css('visibility', 'visible');
                rightAr.css('visibility', 'visible');
                if (setMovie === clickMin) {
                    leftAr.css('visibility', 'hidden');
                }
            })


        }
    })
}



// fonctions pour les descriptifs du slider
function contentSlider(jsonObj) {
    var setMovie = 0;
    var titleSlide = $('#slider h1');
    var paraSlide = $('#description > p');
    var starsSlide = $('#slider #stars p');
    var clickMax = tabResultats - 1;
    var clickMin = 0;

    // fonctionnement des flèches pour le background image et la mise en page en bullet
    $(document).ready(function () {
        rightBtn.css('color', 'grey');
        leftBtn.css('color', 'black');
        midBtn.css('color', 'grey');
        var setMovie = 0;
        var titleToDisplay = jsonObj.results[setMovie].original_title;
        var paraToDisplay = jsonObj.results[setMovie].overview;
        var starsToDisplay = Math.round(jsonObj.results[setMovie].vote_average);
        titleSlide.text(titleToDisplay);
        paraSlide.text(paraToDisplay);
        for (let i = 0; i < starsToDisplay; i++) {
            starsSlide.append("*");
        }
        if (setMovie < clickMax) {
            rightAr.click(function () {
                starsSlide.empty();
                setMovie++;
                var titleToDisplay = jsonObj.results[setMovie].original_title;
                var paraToDisplay = jsonObj.results[setMovie].overview;
                var starsToDisplay = Math.round(jsonObj.results[setMovie].vote_average);
                rightAr.css('visibility', 'visible');
                leftAr.css('visibility', 'visible');
                titleSlide.text(titleToDisplay);
                paraSlide.text(paraToDisplay);
                rightBtn.css('color', 'grey');
                leftBtn.css('color', 'grey');
                midBtn.css('color', 'black');
                for (let i = 0; i < starsToDisplay; i++) {
                    starsSlide.append("*");
                }
                if (setMovie === clickMax) {
                    rightAr.css('visibility', 'hidden');
                    rightBtn.css('color', 'black');
                    leftBtn.css('color', 'grey');
                    midBtn.css('color', 'grey');
                }
            })
        }

        if (setMovie >= clickMin) {

            leftAr.click(function () {
                starsSlide.empty();
                setMovie--;
                var titleToDisplay = jsonObj.results[setMovie].original_title;
                var paraToDisplay = jsonObj.results[setMovie].overview;
                var starsToDisplay = Math.round(jsonObj.results[setMovie].vote_average);
                leftAr.css('visibility', 'visible');
                rightAr.css('visibility', 'visible');
                titleSlide.text(titleToDisplay);
                paraSlide.text(paraToDisplay);
                for (let i = 0; i < starsToDisplay; i++) {
                    starsSlide.append("*");
                }
                if (setMovie === clickMin) {
                    rightBtn.css('color', 'grey');
                    leftBtn.css('color', 'black');
                    midBtn.css('color', 'grey');
                    leftAr.css('visibility', 'hidden');
                }
            })


        }




    })