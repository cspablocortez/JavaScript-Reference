async function fetchWeatherData() {
    console.log("Sending request...");

    const location = document.getElementById('searchInput').value;
    const requestURL = "https://api.weatherapi.com/v1/current.json?key=657a30cb69d44cdba9a01524231401&q=" + location;
    const request = new Request(requestURL);
    const response = await fetch(request);
    const data = await response.json();
    console.log(data);

    // Error handling

    if (data.error) {
        console.error("Unable to complete request");
        alert(`Unable to complete request. ${data.error.message}`);
    } else {
        populateWeatherCard(data);
    }
}

function populateWeatherCard(obj) {
    const searchResults = document.getElementById('search-results');
    const city = document.getElementById('city');
    const temperature = document.getElementById("temperature");
    const forecast = document.getElementById("forecast");
    const icon = document.getElementById("icon");
    const humidity = document.getElementById('humidity');
    
    searchResults.style.visibility = "visible";
    city.textContent = obj.location.name;
    temperature.textContent = `${obj.current.feelslike_f} °F`;
    forecast.textContent = obj.current.condition.text;
    icon.src = obj.current.condition.icon;
    humidity.textContent = `Humidity: ${obj.current.humidity}%`;

}