const currentYear = document.getElementById('currentyear');
const lastModified = document.getElementById('lastmodified');
currentYear.textContent = new Date().getFullYear();
lastModified.textContent = `Last modification: ${document.lastModified}`;

//Calculation function of WindChill
function calculateWindChill(temperature, windspeed) {
    // Check if inputs meet the conditions for the formula to apply
    if (temperature > 10 || windspeed <= 4.8) {
      return "Wind chill calculation not applicable.";
    }
  
    // Wind chill formula
    const windChill = (
      13.12 +
      0.6215 * temperature -
      11.37 * Math.pow(windspeed, 0.16) +
      0.3965 * temperature * Math.pow(windspeed, 0.16)
    );
  
    return windChill.toFixed(2); // Round to two decimal places
  }
  

const windchill = document.getElementById("windchill");

windchill.textContent = calculateWindChill(25, 15.0) + " ℃";