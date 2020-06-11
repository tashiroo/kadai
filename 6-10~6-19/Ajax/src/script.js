const divElement = document.getElementById("root");

fetch(
  "http://api.openweathermap.org/data/2.5/weather?q=tokyo&appid=2bea3d3ebe2c30f886caa303394d20d7"
).then((response) => {
  response.json().then((json) => {
    console.log("json", json);
    console.log("json.name", json.name);
    let kerubin = json.main.temp;
    let sessi = kerubin - 273.15;
    console.log(sessi);
  });
});

const kion = document.createElement("p");


const weatherIcon = document.createElement("img");
weatherIcon.src = "http://openweathermap.org/img/wn/04n@2x.png";

const weatherCord = document.createElement("span");
weatherCord.appendChild(kion);
weatherCord.appendChild(weatherIcon);
divElement.appendChild(weatherCord);

