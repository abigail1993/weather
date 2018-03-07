//hacer la peticion de la api
fetch( "https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/699f93a24e710183b485997925cf150d/37.8267,-122.4233"
).then(function(response){
  //console.log(response);
   return response;
}) .then(function(data){
  let dataClima = response.response
  console.log(dataClima);
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
};
