import "./styles.css";
import { apiKeys } from "../../api_keys";

function getWeatherData(location) {
    location = "huntsville";
    const apiUrl = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}/next7days?unitGroup=us&elements=datetime%2CresolvedAddress%2Ctempmax%2Ctempmin%2Ctemp%2Chumidity%2Cprecipprob%2Cpreciptype%2Cwindspeed%2Cconditions%2Cdescription%2Cicon&include=days&key=${apiKeys.get("visualCrossing")}&contentType=json`;
    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
        });
}

getWeatherData("test");