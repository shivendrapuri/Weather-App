document.addEventListener('DOMContentLoaded', () => {
    const inputBox = document.querySelector('.input-box');
    const searchBtn = document.getElementById('search-btn');
    const weather_img = document.querySelector('.weather-img');
    const temperature = document.querySelector('.temperature');
    const description = document.querySelector('.description');
    const humidity = document.getElementById('humidity');
    const wind_speed = document.getElementById('wind-speed');
    const location_not_found = document.querySelector('.location-not-found');
    const weather_body = document.querySelector('.weather-body');

    async function checkWeather(city) {
        const api_key = "417f61a63a471dd77a741dd3ff8561f6";
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;
        const weather_data = await fetch(url).then(response => response.json());

        if (weather_data.cod === '404') {
            location_not_found.style.display = "flex";
            weather_body.style.display = "none";
            console.log("error");
            return;
        }

        location_not_found.style.display = "none";
        weather_body.style.display = "flex";


        temperature.innerHTML = `${Math.round(weather_data.main.temp - 275.15)}°C`;
        description.innerHTML = `${weather_data.weather[0].description}`;
        humidity.innerHTML = `${weather_data.main.humidity}%`;
        wind_speed.innerHTML = `${weather_data.wind.speed}Km/H`;
        switch (weather_data.weather[0].main) {
            case 'Clouds':
                weather_img.src = "./cloud.jpg"
                break;
            case 'Mist':
                weather_img.src = "./mist.png"
                break;
            case 'Rain':
                weather_img.src = "./rain.png"
                break;
            case 'Snow':
                weather_img.src = "./snow.png"
                break;
            case 'Clear':
                weather_img.src = "./clear.webp"
                break;

        }
    }
    searchBtn.addEventListener('click', () => {
        checkWeather(inputBox.value);
    });
});

// ___________for enter key_____________

document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('.input-box').addEventListener('keypress', function (event) {
        if (event.keyCode === 13) { // Enter key pressed
            document.querySelector('#search-btn').click(); // Click search button
        }
    });
});

// ________for pressing the enter key_____________

$(document).ready(function () {
    $('.input-box').keypress(function (event) {
        if (event.keyCode === 13) { // Check if Enter key is pressed
            $('#search-btn').click(); // Trigger click event of search button
        }
    });
});
