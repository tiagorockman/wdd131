export function saveAnimeData(term, data) {
    const storedData = localStorage.getItem("anime");
    let animeData = storedData ? JSON.parse(storedData) : {};

    animeData[term] = data; // Save new search result

    localStorage.setItem("anime", JSON.stringify(animeData));
}

export function getCachedAnimeData(term) {
    const storedData = localStorage.getItem("anime");
    if (storedData) {
        const animeData = JSON.parse(storedData);
        return animeData[term] || {};
    }
    return {};
}

export function saveNews(term, data) {
    const newsObject = {
        data,
        timestamp: Date.now() // Store current time
    };

    localStorage.setItem("newsData", JSON.stringify(newsObject));
}


export function setAnimeSelected(animeData) {
    localStorage.setItem("animeSelected", JSON.stringify(animeData));
}

export function getAnimeSelected() {
    return JSON.parse(localStorage.getItem("animeSelected") || {});
}