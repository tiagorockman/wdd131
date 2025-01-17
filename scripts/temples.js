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