async function fetchWeatherData() {
    console.log("Sending request...");
    const requestURL = "https://api.weatherapi.com/v1/current.json?key=657a30cb69d44cdba9a01524231401&q=89141"
    const request = new Request(requestURL);
    const response = await fetch(request);
    const data = await response.json();
    console.log(data);
}

