
//hacer la peticion de la api y al final sevuelve allamar esta funcion para que corra el programa.
const peticion = () => {

   fetch( "https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/699f93a24e710183b485997925cf150d/37.8267,-122.4233")
    .then ( response => response.json()).then(json => dataClima(json));// es convertir en json los datos de la api
  };

  const dataClima = json => {
    console.log(json);
//solo se llama a los id done se quiere la informacion
    const today = document.getElementById("today-container");
    const next = document.getElementById("next-container");
//para que se pinte en el html
    let template = `
    <div> Temperature: ${json.currently.apparentTemperature}</div>
    <div> Humidity: ${json.currently.humidity}</div>
    <div> UV index: ${json.currently.uvIndex}</div>
    <div> Presurre: ${json.currently.pressure} `;
  today.innerHTML=template;

  //este es para pintar los pronosticos de lo dias siguientes
let templateForcast = json.daily.data.forEach( day => {// se va recorriendo el array
  //para sacar la fecha actual, y la temperatura min
        let currentDay = `<hr>
            <div>${currentDate(day.time)}</div>
           <div>Icon: ${day.icon}</div>
           <div>Temperature-high: ${day.temperatureHigh} and Temperature-min: ${day.temperatureMin}</>`;
        //se aplican metodos nuevos
        next.insertAdjacentHTML('beforeEnd', currentDay);
  })

};
//esto es para que se ponga en el horario normal
let currentDate =(unixNumber) => new Date (unixNumber*1000).toLocaleString('es-MX',{weekday: 'long'});

peticion();
