const API_KEY = "4e589bbd2b8645c5973115928251602";
const url = `https://www.weatherapi.com/`;
function getWeather(){
    const city = document.getElementById("city").value;

    if(!city){
        alert("Please enter a city name");
        return;
    }
}

fetch(url)
//convert the response to json.. while dealing with apis json returns a structured data
    .then(response => response.json())
    .then(data => {
        document.getElementById("weather-info").inerHTML = `
        
        `
    })