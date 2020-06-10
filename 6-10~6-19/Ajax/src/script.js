
fetch("http://api.openweathermap.org/data/2.5/weather?q=london&appid=2bea3d3ebe2c30f886caa303394d20d7").then((response) =>{
  response.json().then((json) =>{
      console.log("json",json);
      console.log("json.name",json.name);
      console.log("json.weather",json.weather[0].main);
  });

});