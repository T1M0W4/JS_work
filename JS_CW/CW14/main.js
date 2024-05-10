function searchCountry() {
    const countryName = document.getElementById('countryInput').value;
    fetch(`https://restcountries.com/v3.1/name/${countryName}`)
        .then(response => response.json())
        .then(data => {
            const country = data[0];
            const countryInfo = document.getElementById('countryInfo');
            const flagDescription = country.flags ? country.flags[0] : 'Information not available';
            countryInfo.innerHTML = `
                <h2 style="text-align: center;">${country.name.official}</h2>
                <img class="flag" src="${country.flags.svg}" alt="Flag">
                <p style="text-align: center;">Population: ${country.population}</p>
                <p style="text-align: center;">Location: ${country.region}</p>
                <p style="text-align: center;">Description of flag: ${flagDescription}</p>
                <div class="show-map-button">
                    <button onclick="showMap(${country.latlng[0]}, ${country.latlng[1]})">Show on map</button>
                </div>
                <button class="favorite-button" onclick="addToFavorites('${country.name.common}')">Add to Favorites</button>
            `;
        })
        .catch(error => {
            console.error('Error fetching country information:', error);
        });
}

// Функция для отображения модального окна с картой
function showMap(lat, lng) {
    const modalBackground = document.getElementById('modalBackground');
    modalBackground.style.display = 'flex';

    // Создание карты OpenStreetMap
    const mapDiv = document.getElementById('map');
    const mapUrl = `https://www.openstreetmap.org/export/embed.html?bbox=${lng-5},${lat-5},${lng+5},${lat+5}&layer=mapnik`;
    mapDiv.innerHTML = `<iframe src="${mapUrl}" width="100%" height="100%" frameborder="0" allowfullscreen></iframe>`;
}

// Функция для скрытия модального окна с картой
function hideMap() {
    const modalBackground = document.getElementById('modalBackground');
    modalBackground.style.display = 'none';
}

// Функция для добавления страны в избранное
function addToFavorites(countryName) {
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    if (!favorites.includes(countryName)) {
        favorites.push(countryName);
        localStorage.setItem('favorites', JSON.stringify(favorites));
        updateFavoritesList();
        alert(`"${countryName}" added to Favorites!`);
    } else {
        alert(`"${countryName}" is already in Favorites!`);
    }
}

// Функция для обновления списка избранных стран
function updateFavoritesList() {
    const favoritesList = document.getElementById('favoritesList');
    favoritesList.innerHTML = '';
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    favorites.forEach(countryName => {
        const li = document.createElement('li');
        li.textContent = countryName;
        li.innerHTML += `<button class="remove-button" onclick="removeFromFavorites('${countryName}')">Remove</button>`;
        favoritesList.appendChild(li);
    });
}

// Функция для удаления страны из избранного
function removeFromFavorites(countryName) {
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    favorites = favorites.filter(name => name !== countryName);
    localStorage.setItem('favorites', JSON.stringify(favorites));
    updateFavoritesList();
}

// Функция для отображения информации о выбранной избранной стране
function showFavorite(event) {
    if (event.target.tagName === 'LI') {
        const countryName = event.target.textContent;
        fetch(`https://restcountries.com/v3.1/name/${countryName}`)
            .then(response => response.json())
            .then(data => {
                const country = data[0];
                const countryInfo = document.getElementById('countryInfo');
                const flagDescription = country.flags ? country.flags[0] : 'Information not available';
                countryInfo.innerHTML = `
                    <h2 style="text-align: center;">${country.name.official}</h2>
                    <img class="flag" src="${country.flags.svg}" alt="Flag">
                    <p style="text-align: center;">Population: ${country.population}</p>
                    <p style="text-align: center;">Location: ${country.region}</p>
                    <p style="text-align: center;">Description of flag: ${flagDescription}</p>
                    <div class="show-map-button">
                        <button onclick="showMap(${country.latlng[0]}, ${country.latlng[1]})">Show on map</button>
                    </div>
                    <button class="favorite-button" onclick="addToFavorites('${country.name.common}')">Add to Favorites</button>
                `;
            })
            .catch(error => {
                console.error('Error fetching country information:', error);
            });
    }
}

// Обновляем список избранных стран при загрузке страницы
window.onload = updateFavoritesList;