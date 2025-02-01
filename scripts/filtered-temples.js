const currentYear = new Date().getFullYear();
document.getElementById('currentyear').appendChild(document.createTextNode(currentYear));

const lastModifiedDate = formatDateTime(new Date(document.lastModified));
document.getElementById('lastModified').appendChild(document.createTextNode(lastModifiedDate));

function formatDateTime(receivedDate) {
  
    const day = String(receivedDate.getDate()).padStart(2, "0");
    const month = String(receivedDate.getMonth() + 1).padStart(2, "0");
    const year = receivedDate.getFullYear();
  
    const hours = String(receivedDate.getHours()).padStart(2, "0");
    const minutes = String(receivedDate.getMinutes()).padStart(2, "0");
    const seconds = String(receivedDate.getSeconds()).padStart(2, "0");
  
    return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
  }

  

const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});



const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Belo Horizonte Brazil",
    location: "Belo Horizonte, Brazil",
    dedicated: "2021, Abril, 4",
    area: 27000,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/belo-horizonte-brazil-temple/belo-horizonte-brazil-temple-22100-main.jpg"
  },
  {
    templeName: "Manila Philippines",
    location: "Quezon City, 1110 Metro Manila",
    dedicated: "1982, August, 25",
    area: 26683,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/_temp/029-Manila-Philippines-Temple.jpg"
  },
  {
    templeName: "Nashville Tennessee",
    location: "Franklin, Tennessee",
    dedicated: "1999, March, 13",
    area: 10700,
    imageUrl:   "https://churchofjesuschristtemples.org/assets/img/temples/nashville-tennessee-temple/nashville-tennessee-temple-38227-main.jpg"
  }
];

const album = document.querySelector(".album");


function loadTemples(filteredTemples){
  album.innerHTML = ''; // Clear the current list
  filteredTemples.forEach(temple=>{

    const templeCard = document.createElement("div");
    templeCard.classList.add("temple-card");

    templeCard.innerHTML = `
      <h3>${temple.templeName}</h3>
      <p class="location">${temple.location}</p>
      <p class="dedicated">Dedicated: ${temple.dedicated}</p>
      <p class="area">Area: ${temple.area} sq. ft.</p>
      <img src="${temple.imageUrl}" alt="${temple.templeName} Temple" loading="lazy" />
    `;

    album.appendChild(templeCard);
  });

}

//menu actions
document.querySelector('#old').addEventListener('click', (e) => {
  e.preventDefault(); // Prevent page reload
  const oldTemples = temples.filter(temple => {
    const year = parseInt(temple.dedicated.split(',')[0]);
    return year < 1900;
  });
  loadTemples(oldTemples);
});

document.querySelector('#new').addEventListener('click', (e) => {
  e.preventDefault(); // Prevent page reload
  const newTemples = temples.filter(temple => {
    const year = parseInt(temple.dedicated.split(',')[0]);
    return year > 2000;
  });
  loadTemples(newTemples);
});

document.querySelector('#large').addEventListener('click', (e) => {
  e.preventDefault(); // Prevent page reload
  const largeTemples = temples.filter(temple => temple.area > 90000);
  loadTemples(largeTemples);
});

document.querySelector('#small').addEventListener('click', (e) => {
  e.preventDefault(); // Prevent page reload
  const smallTemples = temples.filter(temple => temple.area < 10000);
  loadTemples(smallTemples);
});

document.querySelector('#home').addEventListener('click', (e) => {
  e.preventDefault(); // Prevent page reload
  loadTemples(temples);
});

loadTemples(temples);
