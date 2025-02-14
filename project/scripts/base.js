/*APIS*/
const jikanApi = "https://api.jikan.moe/v4";
const animeAPI = "https://2anime.xyz";

const apisPaths = {
    news: `${jikanApi}/anime/1/news`,
    full: `${jikanApi}/anime/{id}/full`,
    embed: `${animeAPI}/embed/{title}-episode-{number}`,
    byName: `${jikanApi}/anime?q={animeName}&limit={number}`
}


onInit();






function onInit() {
    setCurrentYear();
    setHamburger();
    loadNews();
    loadRecentEpisodes();
    loadRecentAnimes();

}


function setCurrentYear() {

    const currentYear = document.getElementById('currentyear');
    currentYear.textContent = new Date().getFullYear();

}

function setHamburger() {
    /*HAMBURGER*/
    const hamButton = document.querySelector('#menu');
    const navLinks = document.querySelector('.nav-links');  // FIXED SELECTOR

    hamButton.addEventListener('click', () => {
        navLinks.classList.toggle('open');  // Toggle .open on .nav-links
        hamButton.classList.toggle('open');
    });

}

function loadNews() {
    fetch(apisPaths.news)
        .then(response => response.json())
        .then(news => {
            if (Array.isArray(news.data) && news.data.length > 0) {
                loadNewsSection(news.data);
            }
        })
        .catch(err => console.error(err))
}


function loadNewsSection(news) {
    const newsContainer = document.querySelector(".news-container");
    news.forEach(item => {
        const newsCard = document.createElement("article");
        newsCard.classList.add("news-card");


        const figure = document.createElement("figure");
        const img = document.createElement("img");
        img.loading = "lazy";
        img.src = item.images.jpg.image_url;
        img.alt = item.title;

        //when does't has image
        img.onerror = function () {
            this.error = null; //prevents fallback
            this.src = "images/noimage.webp";
        }

        figure.appendChild(img);
        newsCard.appendChild(figure);


        const span = document.createElement("span");
        span.innerText = item.excerpt.substring(0, 50) + '...'; //only shows 50 caracteres
        newsCard.append(span);

        newsCard.addEventListener('click', () => {
            window.open(item.url);
        });

        newsContainer.append(newsCard);

    });


}

function loadRecentAnimes() {
    const animeNames = [
        "My Hero Academia",
        "Solo Leveling",
        "Dragon Ball Daima",
        "Kinnikuman Perfect Origin Arc",
        "CARDFIGHT"
    ];

    animeNames.forEach(name => getAnimeDatabyName(name));
}

function loadRecentEpisodes(){
const episodesAnimesNames = [
    "DragonBall"
]

episodesAnimesNames.forEach(anime=>{
    const endpoint = apisPaths.byName.replace('{animeName}', anime).replace('{number}', 1);
    fetch(endpoint)
    .then(response => response.json())
    .then(data => {
        if (Array.isArray(data.data) && data.data.length > 0)
            episodeSectionConstruct(data.data[0]);
    })
    .catch(err => console.error(err));
});
}


function episodeSectionConstruct(episode){
        const epContainer = document.querySelector(".episodes-container");

            const epCard = document.createElement("div");
            epCard.classList.add("episode-card");    
    
            const video = document.createElement("video");
            video.src = episode.trailer.url;
            video.poster = episode.trailer.images.medium_image_url;
            epCard.appendChild(video);

            const play = document.createElement("div");
            play.classList.add("play-btn");
            play.innerHTML = "▶";
            epCard.appendChild(play);

            setAnimeListener(episode, epCard);    

            epContainer.appendChild(epCard);
    
}

function loadRecentAnimesContainer(animeData) {
    const item = animeData;
    const animesContainer = document.querySelector(".animes-container");
        const animeCard = document.createElement("div");
        animeCard.classList.add("anime-card");

        const img = document.createElement("img");
        img.loading = "lazy";
        img.src = item.images.webp.image_url;
        img.alt = item.title;

        //when does't has image
        img.onerror = function () {
            this.error = null; //prevents fallback
            this.src = "images/noimage.webp";
        }

        animeCard.appendChild(img);

        const p = document.createElement("p");
        p.innerText = item.title;

        animeCard.appendChild(p);

        setAnimeListener(item, animeCard);

        animesContainer.append(animeCard);

}

function setAnimeListener(item, htmlobject){
    htmlobject.addEventListener('click', () => {
        setLocaltionStoreAnimeSearch(item);
        window.location.href = "anime.html";
    });
}


function setLocaltionStoreAnimeSearch(animeData){
    localStorage.setItem("anime", JSON.stringify(animeData));
}

function setLocaltionStoreAnimeSearch(animeData){
    const storedAnime = JSON.parse(localStorage.getItem("anime") || {});
}

function getAnimeDatabyName(name) {

    const endpoint = apisPaths.byName.replace('{animeName}', name).replace('{number}', 1);

   fetch(endpoint)
        .then(response => response.json())
        .then(data => {
            if (Array.isArray(data.data) && data.data.length > 0)
                loadRecentAnimesContainer(data.data[0]);
        })
        .catch(err => console.error(err));

}