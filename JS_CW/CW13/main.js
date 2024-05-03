// 1

// document.addEventListener('DOMContentLoaded', function() {
//     const fetchButton = document.getElementById('fetchButton');
//     fetchButton.addEventListener('click', function() {
//         const username = document.getElementById('usernameInput').value;

//         const xhr = new XMLHttpRequest();
//         xhr.open('GET', `https://api.github.com/users/${username}`);

//         xhr.onload = () => {
//             if (xhr.status === 200) {
//                 const responseData = JSON.parse(xhr.responseText);
//                 console.log(responseData); // Здесь вы можете использовать данные
//             } else {
//                 console.error('Ошибка при получении данных:', xhr.status);
//             }
//         };

//         xhr.send();
//     });
// });

// 2

function getWeather() {
    const longitude = prompt('Введите долготу (от -180 до 180):');
    const latitude = prompt('Введите широту (от -90 до 90):');

    if (longitude && latitude) {
        const unit = document.getElementById('unitSelect').value;
        const apiKey = 'b03a2cfad336d11bd9140ffd92074504';
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${unit}`;

        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                const city = data.name;
                const date = new Date(data.dt * 1000).toLocaleDateString();
                const description = data.weather[0].description;
                const iconUrl = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
                const currentTemp = data.main.temp;
                const minTemp = data.main.temp_min;
                const maxTemp = data.main.temp_max;
                const windSpeed = data.wind.speed;

                const weatherInfoDiv = document.getElementById('weatherInfo');
                weatherInfoDiv.innerHTML = `
                    <div>
                        <img src="${iconUrl}" alt="Weather Icon" class="weather-icon">
                        <div class="weather-data">
                            <p><strong>Город:</strong> ${city}</p>
                            <p><strong>Дата:</strong> ${date}</p>
                            <p><strong>Описание погоды:</strong> ${description}</p>
                            <p><strong>Текущая температура:</strong> ${currentTemp} °</p>
                            <p><strong>Минимальная температура:</strong> ${minTemp} °</p>
                            <p><strong>Максимальная температура:</strong> ${maxTemp} °</p>
                            <p><strong>Скорость ветра:</strong> ${windSpeed} м/с</p>
                        </div>
                    </div>
                `;
            })
            .catch(error => {
                console.error('Произошла ошибка при получении данных:', error);
            });
    } else {
        alert('Вы не ввели долготу и/или широту.');
    }
}