const temp = document.querySelector('#temp');
const icon = document.querySelector('#weather-icon');
const condition = document.querySelector('#condition');

-23.68275281401005, -46.572825967618954

const url = `https://api.openweathermap.org/data/2.5/weather?lat=-23.68&lon=-46.572&units=metric&appid=7fcc85b72c8797be6d3dacecd03ef862`;

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data); // this is for testing the call
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

apiFetch();

function displayResults(data) {
    temp.innerHTML = `${data.main.temp}&deg;C`;
    const iconsrc = `https://openweathermap.org/img/w/${icon}@2x.png`;
    let desc = data.weather[0].description;
    icon.setAttribute('src', iconsrc);
    icon.setAttribute('alt', desc);
    condition.innerHTML = `${desc}`;
}