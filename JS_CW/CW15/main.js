let input = document.querySelector('#city')
let btn = document.querySelector('#btn')
let img = document.querySelector('.pict')
let city = document.querySelector('.city')
let temp = document.querySelector('.temp')

let sunny_pict = 'scr/icons8-солнце-48.png'
let cloudy_pict = 'scr/icons8-облака-48.png'
let rainy_pict = 'scr/icons8-дождь-48.png'
let snow_pict = 'scr/icons8-снег-48.png'


let API_KEY = 'cc2d757656721c7838f819f150c7f7e6'

btn.addEventListener('click', async function(){
    let API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=${API_KEY}`
    let res = await fetch(API_URL)
    let data = await res.json();
    if('main' in data){
        console.log(data)
        city.textContent = `В городе:${input.value}`
        if('show' in data){
            img.src = snow_pict
          
        }
        else if('sunny' in data){
            img.src = sunny_pict
        }
        else if('rain' in data){
            img.src = rainy_pict
            
        }
        else{
            img.src = cloudy_pict
        }
        temp.textContent = `Темпамратур: ${Math.round(data.main.temp - 273)}`
    }
    else{
        alert('Ошибке!')
    }
})