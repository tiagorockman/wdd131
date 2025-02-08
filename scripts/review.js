const textCount = document.getElementById("count");

let countLocalStorage = Number(window.localStorage.getItem("coutingFormPersist")) || 0;



function sumLocalStorage(){
    //This function will exucate each time the form was sent.
    countLocalStorage ++;
    window.localStorage.setItem("coutingFormPersist", countLocalStorage);
    textCount.textContent = `Thanks! this was your ${getOrdinal(countLocalStorage)} time.`;
}

sumLocalStorage();

function getOrdinal(num) {
    const suffixes = ["th", "st", "nd", "rd"];
    const value = num % 100; // Get the last two digits

    // Determine the correct suffix
    const suffix = (value >= 11 && value <= 13) ? suffixes[0] : suffixes[value % 10] || suffixes[0];

    return num + suffix;
}