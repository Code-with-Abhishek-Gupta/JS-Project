const apikey = "701363f28fde43d0aa4165056242301";
// const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?&';

const apiUrl = `http://api.weatherapi.com/v1/current.json?key=` ;
// console.log(apiUrl + apikey)
// ${(apikey)}&q=Bagodar&aqi=yes

const WeatherIcon = document.getElementById('weather-icon');




const searchBox = document.getElementById('input');
const button =  document.addEventListener('click', function(){

    const weatherData =  searchBox.value;
    checkWeater(weatherData)
})

const buttonenter =  document.addEventListener('keypress', function(keypress){
// console.log(keypress) 
const weatherData =  searchBox.value;
if(keypress.key === 'Enter'){

    
    checkWeater(weatherData)  
}

})


async function checkWeater(dets){


    const response = await fetch(apiUrl + apikey + `&q=${dets}` + '&aqi=yes') ;
    // http://api.weatherapi.com/v1/current.json?key=a701363f28fde43d0aa4165056242301&q=bagodar&aqi=yes
console.log(response)
    var data = await response.json();
    // console.log(data)

    document.querySelector('.city').innerHTML = data.location.name;
    document.querySelector('.temp').innerHTML = Math.round(data.current.temp_c)+ '°C';
    document.querySelector('.humidity').innerHTML = data.current.humidity + '%';
    document.querySelector('.wind').innerHTML = data.current.wind_kph + 'Km/h';

    if(data.current.condition === "Clouds")  {
WeatherIcon.src = '../Image/clouds.png'
}else if(data.current.condition.text === "Clear"){
    WeatherIcon.src = '../Image/clear.png'
}else if(data.current.condition.text === "Mist"){
    WeatherIcon.src = '../Image/mist.png'
}else if(data.current.condition === "Partly cloudy"){
    WeatherIcon.src = '../Image/clouds.png'
}else if(data.current.condition.text === "Freezing fog"){
    WeatherIcon.src = '../Image/snow.png'
}
else if(data.current.condition.text === "Light rain"){
    WeatherIcon.src = '../Image/rain.png'
}
else {
    WeatherIcon.src = '../Image/drizzle.png'
}



}

checkWeater()