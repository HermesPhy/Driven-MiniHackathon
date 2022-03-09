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

function processResponse(response) {
    let info = response.data;
    console.log(info);
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