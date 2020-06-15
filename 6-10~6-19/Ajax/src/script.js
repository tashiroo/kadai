const divElement = document.getElementById("root");


const kion = document.createElement("h1");

const tenki = document.createElement("p");

const youbi = document.createElement("h2");
youbi.innerText = "Thursday";

const syutokujikan = document.createElement("p");
syutokujikan.innerText = "Mach 1st 1:00 pm"
syutokujikan.classList.add("time");

const weatherIcon = document.createElement("img");
weatherIcon.src = "http://openweathermap.org/img/wn/04n@2x.png";

const weatherCord = document.createElement("span");
weatherCord.appendChild(youbi);
weatherCord.appendChild(syutokujikan);
weatherCord.appendChild(weatherIcon);
weatherCord.appendChild(kion);
weatherCord.appendChild(tenki);
divElement.appendChild(weatherCord);
weatherCord.classList.add("weatherCord");

fetch(
  "http://api.openweathermap.org/data/2.5/weather?q=tokyo&appid=2bea3d3ebe2c30f886caa303394d20d7"
).then((response) => {
  response.json().then((json) => {
    console.log("json", json);
    kion.innerText = Math.floor(json.main.temp - 273.15)+"℃";
    tenki.innerText = json.weather[0].description;
   
  });
});
