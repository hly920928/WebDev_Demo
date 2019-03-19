class Http{
    static fetchData(url){
      return new Promise((res,rej)=>{
        const HTTP=new XMLHttpRequest();
        HTTP.open("GET",url);
        HTTP.onreadystatechange=()=>{
            if(HTTP.readyState==XMLHttpRequest.DONE&&HTTP.status==200){
                   const data=JSON.parse(HTTP.responseText);
                   res(data);
            }else if(HTTP.readyState==XMLHttpRequest.DONE){
                rej("Something wrong with httpRequest!");

            }
        }
        HTTP.send();
      });

    }
}
class weatherData{
    constructor(cityName,description){
        this.cityName=cityName;
        this.description=description;
        this.temperature=""
    }
}
class WeatherData{
    constructor(cityName,description,temperature){
        this.cityName=cityName;
        this.description=description;
    }
}
let weather_proxy_handler={
    get:function(target,property){
        return Reflect.get(target,property);
    },
    set:function(target,property,value){
        value-=273;value=value.toFixed(2);
        value=""+value+ " ℃";
        return Reflect.set(target,property,value);
    }
}
function displayDate(value,Elements){
    Elements["loadDislpayDiv"].classList.toggle("noDisplay");
    Elements["weatherDislpayDiv"].classList.toggle("noDisplay");
    let weatherDate=new WeatherData(value.name,value.weather[0].description);
    let weatherDateP=new Proxy(weatherDate,weather_proxy_handler);
    weatherDateP.temperature=value.main.temp;
    Elements["cityNameDislpayDiv"].innerHTML=weatherDateP.cityName;
    Elements["cityWeathererDislpayDiv"].innerHTML=weatherDateP.description;
    Elements["cityTemperDislpayDiv"].innerHTML=weatherDateP.temperature;

}


function mainFunc(module){
    let Elements=module.getElements_out();
    let getWeather=()=>{
        const city =Elements["cityNameInput"].value.trim();//.trim() remove whitespace
        console.log("Search "+city);
        let weatherUrl="https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid="+"0338faa8b3a3d72602e00e4e0194ca7e";//++"&units=metric" to using metric units
        if(!Elements["weatherDislpayDiv"].classList.contains("noDisplay")){
            Elements["weatherDislpayDiv"].classList.toggle("noDisplay");
        }
        Elements["loadDislpayDiv"].classList.toggle("noDisplay");
        let httpPromise=Http.fetchData(weatherUrl);
        httpPromise.then((value)=>{
            displayDate(value,Elements);
        },
        (error)=>{
          console.log(error);
        }
        )
    }
   //console.log(Elements);
   Elements["cityNameInputBtn"].addEventListener("click",getWeather);
}
import("./getElements.js").then(mainFunc);