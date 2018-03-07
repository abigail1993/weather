/*/hacer la peticion de la api
const firstAjax = () => {
  const url = "https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/699f93a24e710183b485997925cf150d/37.8267,-122.4233"
  fetch(url)
       .then( response => response.json()).then( json => drawWeather(json));
  };

  const drawWeather = function(json) {
      console.log (json);
      const weatherTodayContainer = document.getElementById('weather-today-container')
      const weatherForecastContainer = document.getElementById('weather-forecast-container')

    let template = `
        <div>${json.currently.apparentTeperature}</div>
        <div>${json.currently.humidity}</div>
        <div>${json.currently.uvIndex}</div>
        <div>${json.currently.pressure}`;
    weatherTodayContainer.innerHTML =  template;

    let templateForcast = json.daily.data.forEach(function(day) {
      console.log(day);

      let currentDay = `
      <div>Icon :${day.icon}</div>
      <div> Temperature-high: ${day.temperatureHigh} and temperature-min ${day.temperatureMin}`;
    weatherForecastContainer = template;

  })



};

firstAjax();
*/
//hacer la peticion de la api
fetch( "https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/699f93a24e710183b485997925cf150d/37.8267,-122.4233"
).then(function(response){
  //console.log(response);
   return response.json();
 })
    .then(function(dataClima){
     console.log(dataClima);
});

const dataClima = (function(json){
  let

})



  /*
  //infoClima(dataClima);
})
   .catch(function(error){
  //  console.log('existe un problema');
});

let infoClima = (dataClima) => {

    dataClima.forEach(function(element){
        let wind = element.wind;
        //console.log(wind);
    })
};*/
