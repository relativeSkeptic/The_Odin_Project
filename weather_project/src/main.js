import "./styles.css";

// Function to fetch data from the API
function fetchData() {
    // URL of the API
    const apiUrl = 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/huntsville?unitGroup=us&elements=tempmax%2Ctempmin%2Ctemp%2Cfeelslike%2Chumidity%2Cprecipprob%2Cpreciptype%2Cwindspeed%2Cconditions%2Cdescription%2Cicon&include=days&key=&contentType=json';

    // Use the Fetch API to GET data
    fetch(apiUrl)
        .then(response => {
            // Check if the response is ok (status 200-299)
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            // Parse the JSON from the response
            return response.json();
        })
        .then(data => {
            // Log the fetched data to the console
            console.log(data);
        })
        .catch(error => {
            // Handle any errors
            console.error('There has been a problem with your fetch operation:', error);
        });
}

// Call the fetchData function
fetchData();