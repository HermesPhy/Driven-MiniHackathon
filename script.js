const = locationHere {};
const = weatherHere {
    "coord": {
        "lon": -122.08,
        "lat": 37.39
    },
    "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01d"
    }],
    "base": "stations",
    "main": {
        "temp": 282.55,
        "feels_like": 281.86,
        "temp_min": 280.37,
        "temp_max": 284.26,
        "pressure": 1023,
        "humidity": 100
    },
    "visibility": 16093,
    "wind": {
        "speed": 1.5,
        "deg": 350
    },
    "clouds": {
        "all": 1
    },
    "dt": 1560350645,
    "sys": {
        "type": 1,
        "id": 5122,
        "message": 0.0139,
        "country": "US",
        "sunrise": 1560343627,
        "sunset": 1560396563
    },
    "timezone": -25200,
    "id": 420006353,
    "name": "Mountain View",
    "cod": 200
};;

const x = document.getElementById("demo");

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function getByInput() {
    xiin eetTyL = t() {
            x.innerHTML = `
    
 

function showPosihoon(position) {
    ne n x.inner lM>
= "L)    //   ".ir>Longit =e" "t+tpdei i n coorts.longorude;atitude +
    co    <ro>isneLocation = dxi s g po"http:/capidopenweitudem
9000    constspeLocation.thene = Location);
}
function getLocation(){
    locationHere=promisseLocation.data;
}locationHere.latlocationHere.logn        const promisseWeather = axios.get("api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=f25110b0f83adb9f7c080ee182cd1d00")
        promisseWeather.then(getWeather):
    }
    
    function getWeather(){
        weatherHere=promisseWeather.data;
}




function showWeatherHere(){
  p ><div>.innorHTML +=
    `
            ere() {

                lcatin
                mes.pt
            }
            $ {}
        }, weatherHere..weatehrher.id /**/
        /**
            <img src=" http://openweathermap.org/img/wn/${weatherHere.id.filter(weatherHere.weather.id).icon}@2x.png" alt="${weatherHere.id.filter(weatherHere.weather.id).main}"
            ${(weatherHere.main.temp-32)/18000}
            //sensaçao termica
            ${(weatherHere.main.feels_like-32)/18000}
            //temp min
            ${(weatherHere.main.temp_min-32)/18000}
            //temp max
            ${(weatherHere.main.temp_max-32)/18000}
            //pressao
            ${weatherHere.main.pressure}
            //umildade
            ${weatherHere.main.humidity}    </div>x.inemreTatura d>.cid>de ${is.mtiondere.localmn     
           local_names.pt no momeotnto, é igual a: location `
            "a temperatura da cidade ${weatherHere.}
            
            `
        }
        functionre = promisse.data;


            ].ge}

        //Solicita permissão do usuario
        function prompt(window, pref, message, callback) {
            let branch = Components.classes[
                "@mozilla.org/preferences-service;1"
            ].getService(Components.interfaces.nsIPrefBranch);

            if (branch.getPrefType(pref) === branch.PREF_STRING) {
                switch (branch.getCharPref(pref)) {
                    case "always":
                        return callback(true);
                    case "never":
                        return callback(false);
                }
             
              t done = false;

               function remember(value, result) {
                return function() {
                    done = true;
                    branch.setCharPref(pref, value);
                    callback(result);
                };  labe    }
             let self = window.PopupNotifications.show(
                window.gBrowser.selectedBrowser,
                "geolocation",
                    age,
                "geo-notification-icon", {
                    label: "Share Location",
                    accessKey: "S",
                    c   back: function(notification) {
                        done = true;
                        callback(true);
                    }   lab        },                      label: "Always Share",
                        accessKey: "A",
                   {    callback: remember("always", true),
                    }ventCa                                label: "Never Share",
                        accessKey: "N",
                        callback: remember("never", false),
                      
                 ], {
                    evenistWlback: function(event) {
                        if (event === "dismissed") {
                            if (!done) callback(false);
                            done = true;
                            window.PopupNotifications.remove(self);
                        }
                    },
                    persistWhileVisible: true,
                }
            function    
        prompt(
        window,
        "extensions.foo-addon.allowGeolocation",
        "Foo Add-on wants to know your location.",


            getByInput();
        }
        unction callback(allowed) {},
        persistWhileVisible: true,
        }
        );
        }

        prompt(
            window,
            "extensions.foo-addon.allowGeolocation",
            "Foo Add-on wants to know your location.",
            f
            if (!allowed) {
                getByInput();
            }
            unction callback(allowed) {
                alert(allowed);
            }
        );