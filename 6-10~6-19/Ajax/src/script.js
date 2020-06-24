const BASE_URL = "http://api.openweathermap.org/data/2.5/weather";
const APP_ID = "2bea3d3ebe2c30f886caa303394d20d7";

function generateIconURL(iconId) {
  return `http://openweathermap.org/img/wn/${iconId}@2x.png`
}

const place = "london"

const divElement = document.getElementById("root");
const kion = document.createElement("h1");
const tenki = document.createElement("p");
const youbi = document.createElement("h2");
const syutokujikan = document.createElement("p");
const weatherIcon = document.createElement("img");
const weatherCord = document.createElement("span");

weatherCord.appendChild(youbi);
weatherCord.appendChild(syutokujikan);
weatherCord.appendChild(weatherIcon);
weatherCord.appendChild(kion);
weatherCord.appendChild(tenki);
divElement.appendChild(weatherCord);

const now = new Date();
syutokujikan.innerText = `${now.getMonth()}/${now.getDay()}`
syutokujikan.classList.add("time");
weatherCord.classList.add("weatherCord");

async function callback(response) {
  const json = await response.json();

  kion.innerText = Math.floor(json.main.temp - 273.15)+"℃";
  youbi.innerText = json.name;
  tenki.innerText = json.weather[0].description;
  weatherIcon.src = generateIconURL(json.weather[0].icon)
}

fetch(`${BASE_URL}?q=${place}&appid=${APP_ID}`).then(callback);
