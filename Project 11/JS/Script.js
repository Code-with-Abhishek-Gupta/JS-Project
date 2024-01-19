const apikey = "appid=270e2e22c4af70cffb18e552660865ad";
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?&';

// console.log(apiUrl + apikey)


const searchBox = document.getElementById('input');
const button =  document.addEventListener('click', function(){

    const weatherData =  searchBox.value;
    checkWeater(weatherData)
})

const buttonenter =  document.addEventListener('keypress', function(keypress){
console.log(keypress)
const weatherData =  searchBox.value;
if(keypress.key === 'Enter'){

    
    checkWeater(weatherData)  
}

})


async function checkWeater(dets){


    const response = await fetch(apiUrl + apikey + `&q=${dets}` );
    var data = await response.json();
    console.log(data)
   
    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.temp').innerHTML = Math.round(data.main.temp)+ '°C';
    document.querySelector('.humidity').innerHTML = data.main.humidity + '%';
    document.querySelector('.wind').innerHTML = data.wind.speed + 'Km/h';

}

checkWeater()