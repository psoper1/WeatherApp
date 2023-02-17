let main = document.getElementById("main");
main.className = "center";
let theStrap = document.createElement("div");
theStrap.className = "mainStrap";
main.appendChild(theStrap);

let aboveButton = document.createElement("div");
let text2 = document.createElement("h3");
text2.textContent = "What's the weather like today? Put in your ZIP and find out!";
text2.className = "d-flex justify-content-center";
aboveButton.appendChild(text2);
theStrap.appendChild(aboveButton);

let section = document.createElement("div");
section.className = "d-flex justify-content-center";
let btn2 = document.createElement("input");
btn2.id = "inputField";
section.appendChild(btn2);
theStrap.appendChild(section);
let btn = document.createElement("button");
btn.textContent = "Submit";
section.appendChild(btn);
btn.id = "inputValue";
btn.className = "btn btn-outline-primary";


let cityInfo = document.createElement("div");
let text = document.createElement("p");
text.textContent = "City:";
text.className = "h4 d-flex justify-content-center font-bold text-success";
text.id = "city";
cityInfo.appendChild(text);
theStrap.appendChild(cityInfo);

let setTemp = document.createElement("div");
let text3 = document.createElement("p");
text3.textContent = "Temperature:";
text3.className = "h4 d-flex justify-content-center font-bold text-success";
text3.id = "temp";
setTemp.appendChild(text3);
theStrap.appendChild(setTemp);

let setCondition = document.createElement("div");
let text4 = document.createElement("p");
text4.textContent = "Conditions:";
text4.className = "h4 d-flex justify-content-center font-bold text-success";
text4.id = "cond";
setCondition.appendChild(text4);
theStrap.appendChild(setCondition);


btn.addEventListener("click", function getAPI() {
    axios.get(`https://api.openweathermap.org/data/2.5/weather?zip=${btn2.value}&appid=82d10d8b9124f9ece3e56c62befeda72`)
        .then(response => {

            cityData = response.data.name;
            temperatureK = Math.round(response.data.main.temp * 9 / 5 - 459.67);

            conditionsW = response.data.weather[0].description;

            // Setting conditionW manually to show off if statement
            // conditionsW = "overcast clouds";
            // conditionsW = "broken clouds"

            text.innerText = "City: " + cityData;
            text3.innerText = "It is " + temperatureK + "F outside";
            text4.innerText = "Forecast is: " + conditionsW;
            let imgs = document.createElement("img");
            imgs.id = "img";
            theStrap.appendChild(imgs);
            imgs.src = "";
            imgs.className = "rounded mx-auto d-block";

            if (conditionsW === "overcast clouds") {
                imgs.src = "cloud.png";
            }
            else if (conditionsW === "broken clouds") {
                imgs.src = "clouds.png";
            }
            console.log(cityData);
            console.log(temperatureK);
            console.log(conditionsW);
        })
        .catch(error => alert("Looks like you picked yourself a bouquet of Oopsie Daisies and didn't enter a valid ZIP Code!", error));
})