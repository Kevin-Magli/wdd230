// const icon = document.getElementById('weather-icon');
// const temp = document.getElementById('weather-temp');
// const condition = document.getElementById('weather-condition');

// -23.68275281401005, -46.572825967618954

// const url = `https://api.openweathermap.org/data/2.5/weather?lat=-23.68&lon=-46.572&units=metric&appid=7fcc85b72c8797be6d3dacecd03ef862`;

// async function apiFetch() {
//     try {
//         const response = await fetch(url);
//         if (response.ok) {
//             const data = await response.json();
//             console.log(data);
//             displayResults(data);
//         }else{
//             throw Error(await response.text());
//         }
//     }
//     catch (error) {
//         console.error(error);
//     }
// }


// function displayResults(data) {
//     dataIcon = data.weather[0].icon;
//     icon.src = `https://openweathermap.org/img/wn/${dataIcon}@2x.png`;
//     temp.innerHTML = `🌡${data.main.temp}&deg;C`;
//     condition.innerHTML = `${data.weather[0].description}`
// }


// apiFetch();

const icon = document.getElementById('weather-icon');
const temp = document.getElementById('weather-temp');
const condition = document.getElementById('weather-condition');
const nextThreeDays = document.getElementById('next-3-days');

const url = `https://api.openweathermap.org/data/2.5/forecast?lat=-23.68&lon=-46.572&units=metric&appid=7fcc85b72c8797be6d3dacecd03ef862`;

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayCurrentWeather(data);
            displayNextThreeDays(data);
        } else {
            throw Error(await response.text());
        }
    }
    catch (error) {
        console.error(error);
    }
}

function displayCurrentWeather(data) {
    const currentWeather = data.list[0];
    const dataIcon = currentWeather.weather[0].icon;
    icon.src = `https://openweathermap.org/img/wn/${dataIcon}@2x.png`;
    temp.innerHTML = `🌡${currentWeather.main.temp}&deg;C`;
    condition.innerHTML = `${currentWeather.weather[0].description}`;
}

function displayNextThreeDays(data) {
    if (!data.list) {
        console.error('Forecast data is missing');
        return;
    }

    const days = {};
    data.list.forEach(forecast => {
        const date = new Date(forecast.dt * 1000);
        const day = date.toLocaleDateString('en-US', { weekday: 'long' });

        if (!days[day]) {
            days[day] = {
                temp: forecast.main.temp,
                description: forecast.weather[0].description
            };
        }
    });

    const forecastDays = Object.keys(days).slice(0, 3);
    nextThreeDays.innerHTML = forecastDays.map(day => {
        const { temp, description } = days[day];
        return `${day}: ${temp}&deg;C`;
    }).join('<br>');
}

apiFetch();
