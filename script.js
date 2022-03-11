function showLocalPosition() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(searchLocalDatas, showError);
    } else {
        alert("A geolocalização não é compatível com este navegador.");
    }
}

function searchLocalDatas(position) {
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    let promise = axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=93db0b23cc79799d5e3787d8a40c275d`);
    promise.then(processResponse);
}

function searchCityDatas() {
    nameCity = document.querySelector('.searchLocation input').value
    if (nameCity === "" || nameCity === undefined || nameCity === null) {
        alert("Informe uma localização válida.");
    } else {
        let promise = axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${nameCity}&key=AIzaSyDSIkVLJEi51GClvzMs38wi6ynqZ6p5dIE`);
        promise.then(processDatas, showError);
    }
}

function processDatas(response) {
    let datas = response.data;
    let latitude = datas.results[0].geometry.location.lat;
    let longitude = datas.results[0].geometry.location.lng;
    let promise = axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=93db0b23cc79799d5e3787d8a40c275d`);
    promise.then(processResponse);
}

function showError(error) {
    switch (error.code) {
        case error.PERMISSION_DENIED:
            alert("Usuário rejeitou a solicitação de Geolocalização.");
            break;
        case error.POSITION_UNAVAILABLE:
            alert("Localização indisponível.");
            break;
        case error.TIMEOUT:
            alert("A requisição expirou.");
            break;
        case error.UNKNOWN_ERROR:
            alert("Algum erro desconhecido aconteceu.");
            break;
    }
}

let cidade = "";
let descricao = "";
let icon = "";
let skyVisibility = "";
let humidadeRelativa = 0;
let temperatura = 0;
let temperaturaMaxima = 0;
let temperaturaMinima = 0;
let vento = 0;
let direcao = 0;
let section = document.querySelector("section");

function processResponse(response) {
    let info = response.data;
    cidade = info.name;
    descricao = info.weather[0].description;
    icon = info.weather[0].icon;
    humidadeRelativa = info.main.humidity;
    temperatura = (info.main.temp) - 273;
    temperaturaMaxima = (info.main.temp_max) - 273;
    temperaturaMinima = (info.main.temp_min) - 273;
    vento = info.wind.speed;
    direcao = info.wind.deg;

    validityIcon();
    showClimateDatas();

}


function validityIcon() {
    if (icon === "04n" || icon === "04d") {
        skyVisibility = "Nublado";
    } else if (icon === "03n" || icon === "03d") {
        skyVisibility = "Parcialmente nublado";
    } else if (icon === "02n" || icon === "02d") {
        skyVisibility = "Parcialmente nublado";
    } else if (icon === "01n" || icon === "01d") {
        skyVisibility = "Céu claro";
    }

}

function showClimateDatas() {
    section.innerHTML += `
    <div class="nameCity">
    <p>${cidade}</p>
</div>
<div class="climateDatas">
    <img src="images/${skyVisibility}.JPG" alt="${skyVisibility}" />
    <div>
        <div class="temperature">
            <h2>Temperatura local: ${(temperatura.toFixed(1))}ºC</h2>
            <div>
                <p>Max.: ${(temperaturaMaxima.toFixed(1))}ºC</p>
                <p>Min.: ${(temperaturaMinima.toFixed(1))}ºC</p>
            </div>
        </div>
        <div class="sky">
            <img class="icone" src="http://openweathermap.org/img/wn/${icon}@2x.png">
            <h2>${skyVisibility}</h2>
        </div>
        <div class="wind">
            <div class="textWind">
                <h2>Vento:</h2>
            </div>
            <div class="speedWind">
                <p>Velocidade: ${vento} km/h</p>
                <p>Direção: ${direcao}º</p>
            </div>
        </div>
    </div>
</div>
<button onclick="closedClimateDatas()">Fechar</button>
`
    section.classList.remove("hidden");

}

function closedClimateDatas() {
    section.classList.add("hidden");
    section.innerHTML = "";
}