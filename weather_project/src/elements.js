const dateButtons = {
    buttons: {
        dayOne: document.getElementById('dayOne'),
        dayTwo: document.getElementById('dayTwo'),
        dayThree: document.getElementById('dayThree'),
        dayFour: document.getElementById('dayFour'),
        dayFive: document.getElementById('dayFive'),
        daySix: document.getElementById('daySix'),
        daySeven: document.getElementById('daySeven')
    },
    names: {
        dayOne: document.getElementById('dayOneName'),
        dayTwo: document.getElementById('dayTwoName'),
        dayThree: document.getElementById('dayThreeName'),
        dayFour: document.getElementById('dayFourName'),
        dayFive: document.getElementById('dayFiveName'),
        daySix: document.getElementById('daySixName'),
        daySeven: document.getElementById('daySevenName')
    },
    dates: {
        dayOne: document.getElementById('dayOneDate'),
        dayTwo: document.getElementById('dayTwoDate'),
        dayThree: document.getElementById('dayThreeDate'),
        dayFour: document.getElementById('dayFourDate'),
        dayFive: document.getElementById('dayFiveDate'),
        daySix: document.getElementById('daySixDate'),
        daySeven: document.getElementById('daySevenDate')
    }
}

const weatherInfo = {
    minTemp: document.getElementById('minTemp'),
    maxTemp: document.getElementById('maxTemp'),
    precipProb: document.getElementById('precipProb'),
    precipType: document.getElementById('precipType'),
    humidity: document.getElementById('humidity'),
    windSpeed: document.getElementById('windSpeed')
}

const display = {
    location: document.getElementById('location'),
    date: document.getElementById('date'),
    weatherIcon: document.getElementById('weatherIcon'),
    temperature: document.getElementById('temperature'),
    weatherCondition: document.getElementById('weatherCondition'),
    weatherDescription: document.getElementById('weatherDescription'),
    searchButton: document.getElementById('searchButton')
}

export { dateButtons, weatherInfo, display };