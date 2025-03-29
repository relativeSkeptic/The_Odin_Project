import "./styles.css";
import { dateButtons, weatherInfo, display} from "./elements";
import { apiKeys } from "../../api_keys";

async function getWeatherData(location = "huntsville") {
    const apiUrl = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}/next7days?unitGroup=us&elements=datetime%2CresolvedAddress%2Ctempmax%2Ctempmin%2Ctemp%2Chumidity%2Cprecipprob%2Cpreciptype%2Cwindspeed%2Cconditions%2Cdescription%2Cicon&include=days&key=${apiKeys.get("visualCrossing")}&contentType=json`;

    try {
        const response = await fetch(apiUrl);
        if (response.ok === false) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        const data = await response.json();
        return data; 
    } 
    catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
    }
}

async function initialize() {
    const weatherData = await getWeatherData();
    console.log(weatherData);
    
    const daysOfWeek = [];
    for (let i = 0; i < weatherData.days.length; i++) {
        daysOfWeek.push(weatherData.days[i].datetime);
    }
    updateDates(daysOfWeek);
    updateWeatherInfo(weatherData.days[0]);
    updateDisplay(weatherData.days[0], weatherData.resolvedAddress);
}

async function query(newLocation) {

}

function updateDates(daysOfWeek) {
    const week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    Object.values(dateButtons.names).forEach((element, index) => {
        const date = new Date(daysOfWeek[index + 1]);
        element.textContent = week[date.getDay()];
    });

    Object.values(dateButtons.dates).forEach((element, index) => {
        const date = new Date(daysOfWeek[index + 1]);
        element.textContent = date.toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
    });
}

function updateWeatherInfo(currentData) {
    weatherInfo.minTemp.textContent = currentData.tempmin + "\u00B0";;
    weatherInfo.maxTemp.textContent = currentData.tempmax + "\u00B0";;
    weatherInfo.precipProb.textContent = currentData.precipprob + "%";
    weatherInfo.precipType.textContent = currentData.preciptype;
    weatherInfo.humidity.textContent = currentData.humidity + "%";
    weatherInfo.windSpeed.textContent = currentData.windspeed + " MPH";
}

function updateDisplay(currentData, address) {
    display.location.textContent = address;
    display.date.textContent = currentData.datetime;
    const iconPath = require(`../icons/${currentData.icon}.svg`);
    display.weatherIcon.src = iconPath;
    display.temperature.textContent = currentData.temp + "\u00B0";;
    display.weatherCondition.textContent = currentData.conditions;
    display.weatherDescription.textContent = currentData.description;
}

display.searchButton.addEventListener("click", function() {
    query(searchText.value);
});

initialize();