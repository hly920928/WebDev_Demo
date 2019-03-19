function getElements(){
    let Elements={}
    Elements["cityNameInput"]=document.querySelector("#search #city");
    Elements["cityNameInputBtn"]=document.querySelector("#search button");
    Elements["loadDislpayDiv"]=document.querySelector("#load");
    Elements["weatherDislpayDiv"]=document.querySelector("#weather");
    Elements["cityNameDislpayDiv"]=document.querySelector("#weatherCity");
    Elements["cityWeathererDislpayDiv"]=document.querySelector("#weatherDescription");
    Elements["cityTemperDislpayDiv"]=document.querySelector("#weatherTemperature");
    return Elements;

}
export {getElements as getElements_out};