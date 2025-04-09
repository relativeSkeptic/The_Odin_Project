import "./styles.css";
import { dateData, weatherInfo, display, buttons } from "./elements";
import { apiKeys } from "../../api_keys";

const week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

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
    searchText.value = "";
    const weatherData = await getWeatherData();
    execute(weatherData);
}

async function query(newLocation) {
    searchText.value = "";
    const weatherData = await getWeatherData(newLocation);
    execute(weatherData);
}

function execute(weatherData) {
    const daysOfWeek = [];
    for (let i = 0; i < weatherData.days.length; i++) {
        daysOfWeek.push(weatherData.days[i].datetime);
    }
    updateDates(daysOfWeek);
    updateWeatherInfo(weatherData.days[0]);
    updateDisplay(weatherData.days[0], weatherData.resolvedAddress);
    buttons.dates.dayOne.style.border = "2px solid black";
    setupEventListeners(buttons.dates, weatherData);
}

function updateDates(daysOfWeek) {
    Object.values(dateData.names).forEach((element, index) => {
        const date = new Date(daysOfWeek[index + 1]);
        element.textContent = week[date.getDay()];
    });

    Object.values(dateData.dates).forEach((element, index) => {
        const date = new Date(daysOfWeek[index + 1]);
        element.textContent = date.toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
    });
}

function updateWeatherInfo(currentData) {
    weatherInfo.minTemp.textContent = currentData.tempmin + "\u00B0";;
    weatherInfo.maxTemp.textContent = currentData.tempmax + "\u00B0";;
    weatherInfo.precipProb.textContent = currentData.precipprob + "%";
    if (currentData.preciptype === null) {
        weatherInfo.precipType.textContent = "N/A";
    }
    else {
        weatherInfo.precipType.textContent = currentData.preciptype;
    }
    weatherInfo.humidity.textContent = currentData.humidity + "%";
    weatherInfo.windSpeed.textContent = currentData.windspeed + " MPH";
}

function updateDisplay(currentData, address) {
    display.location.textContent = address;
    display.date.textContent = formatDate(currentData.datetime);
    const iconPath = require(`../icons/${currentData.icon}.svg`);
    display.weatherIcon.src = iconPath;
    display.temperature.textContent = currentData.temp + "\u00B0";;
    display.weatherCondition.textContent = currentData.conditions;
    display.weatherDescription.textContent = currentData.description;
}

function formatDate(datetime) {
    const date = new Date(datetime);
    date.setDate(date.getDate() + 1);
    const dayOfWeek = week[date.getDay()];
    const month = months[date.getMonth()];
    const dayOfMonth = date.getDate();

    const getDaySuffix = (day) => {
        if (day > 3 && day < 21) return 'th';
        switch (day % 10) {
            case 1: return 'st';
            case 2: return 'nd';
            case 3: return 'rd';
            default: return 'th';
        }
    };

    const suffix = getDaySuffix(dayOfMonth);

    return `${dayOfWeek} - ${month} ${dayOfMonth}${suffix}`;
}

function setupEventListeners(dateButtons, weatherData) {
    Object.entries(dateButtons).forEach(([key, dateElement], index) => {
        dateElement.addEventListener('click', () => {
            Object.values(dateButtons).forEach(element => element.style.border = "");
            dateElement.style.border = "2px solid black";
            updateWeatherInfo(weatherData.days[index]);
            updateDisplay(weatherData.days[index], weatherData.resolvedAddress);
        });
    });

    buttons.searchButton.addEventListener("click", function() {
        query(searchText.value);
    });
}

initialize();