import { getAnimeSelected } from "./cache.js";


const animeSelected = getAnimeSelected();


await onInit();


async function onInit(){
    loadAnimeInfo();
}


function loadAnimeInfo(){
    const title = document.querySelector(".anime-title");
    const animePoster = document.querySelector(".anime-poster");
    const genre = document.querySelector(".genre");
    const year = document.querySelector(".year");
    const seasons = document.querySelector(".seasons");
    const episodes = document.querySelector(".episodes");
    const description = document.querySelector(".anime-description");


    title.innerHTML = animeSelected.title + " " + animeSelected.title_japanese;
    animePoster.src = animeSelected.images.webp.large_image_url ||  animeSelected.images.jpg.large_image_url;
    genre.innerHTML = animeSelected.genres.length > 1 ? animeSelected.genres[0].name : animeSelected.genres.name;
    year.innerHTML = animeSelected.year;
    seasons.innerHTML = "Several";
    episodes.innerHTML = `<span class="number">${animeSelected.episodes}</span> Episodes`;
    description.innerHTML = animeSelected.synopsis;

}