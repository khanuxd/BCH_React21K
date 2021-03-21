(function () {
    const form = document.querySelector('.form_data');
    const userInput = document.getElementById('searchInput');
    const alert = document.querySelector('.alertNotification');
    document.querySelector('.dataResult').style.display = 'none';

    form.addEventListener('submit', getWeather);

    function getWeather(e) {
        document.querySelector('.dataResult').style.display = 'block';
        alert.style.display = 'none';

        const cityName = userInput.value;
        console.log(cityName);
        
        const key = '2f9b8134b29444707cd1b9b7c2b857c3';

        const url = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${key}`;

        fetch(url)
            .then(response => {
                let data = response.json();
                return data;
            })
            .then(data => {
                weatherData(data);
            })
            .catch(err => {
                console.log(err);
                alert.style.display = 'block';
                alert.innerHTML = `Sorry! <span>${cityName}</span> not found!`;
                document.querySelector('.dataResult').style.display = 'none';
            })

        form.reset();
        e.preventDefault();
    }

    function weatherData(data) {

        const dataResult = document.querySelector('.dataResult');
        dataResult.innerHTML =
            `
        <div class="location">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" width="48px" height="48px"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>

            <div class="cityAndCountry">
            ${data.name}, ${data.sys.country}
            </div>
        </div>
        <div class="temp-area">
            <div class="icon">
                <img src="icons/${data.weather[0].icon}.png" alt="User Location">
            </div>
            <div class="temp-info">
                <div class="temperature">
                    ${Math.round(data.main.temp - 273)}&deg;<span>C</span>
                </div>
                <div class="description">
                    ${data.weather[0].description}
                </div>
            </div>
        </div>
        <div class="separator-line"></div>
        <div class="secondary-temp">
        <div class="realFeel">
            Feels Like: <span>${Math.round(data.main.feels_like - 273)}&deg; C</span>
        </div>
        <div class="humidity">
            Humidity: <span>${data.main.humidity}%</span>
        </div>
        </div>
        `
    }
})()