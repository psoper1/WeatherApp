// let url = "https://api.openweathermap.org/";
// let apiKey = "82d10d8b9124f9ece3e56c62befeda72";



// function placeHolder() {
let main = document.getElementById("main");
let theStrap = document.createElement("div");
theStrap.className = "mainStrap";
main.appendChild(theStrap);

let aboveButton = document.createElement("div");
let text2 = document.createElement("h3");
text2.textContent = "What's the weather like today? Put in your ZIP and find out!";
text2.className = "font-bold text-danger";
aboveButton.appendChild(text2);
theStrap.appendChild(aboveButton);

let section = document.createElement("div");
section.className = "flex flex-column";
let btn = document.createElement("button");
btn.textContent = "Submit";
section.appendChild(btn);
btn.id = "inputValue";
let btn2 = document.createElement("input");
btn2.id = "inputField";
section.appendChild(btn2);
theStrap.appendChild(section);


let cityInfo = document.createElement("div");
let text = document.createElement("p");
text.textContent = "City:";
text.className = "font-bold text-success";
text.id = "city";
cityInfo.appendChild(text);
theStrap.appendChild(cityInfo);

let setTemp = document.createElement("div");
let text3 = document.createElement("p");
text3.textContent = "Temperature:";
text3.className = "font-bold text-success";
text3.id = "temp";
setTemp.appendChild(text3);
theStrap.appendChild(setTemp);

let setCondition = document.createElement("div");
let text4 = document.createElement("p");
text4.textContent = "Conditions:";
text4.className = "font-bold text-success";
text4.id = "cond";
setCondition.appendChild(text4);
theStrap.appendChild(setCondition);


// City id is city
// Temperature id is temp
// Conditions id is cond

// let cityData = "";
// let temperatureF = "";
// let conditionsW = "";





btn.addEventListener("click", function () {
    axios.get(`https://api.openweathermap.org/data/2.5/weather?zip=${btn2.value}&appid=82d10d8b9124f9ece3e56c62befeda72`)
        // .then(Response => Response.json())
        .then(response => {
            console.log(response.data);
            cityData = response.data.name;
            temperatureK = Math.round(response.data.main.temp * 9 / 5 - 459.67);
            // response.data.main.temp;
            conditionsW = response.data.weather[0].description;
            console.log(response.cityData);
            
            console.log(cityData);
            console.log(temperatureK);
            console.log(conditionsW);

            // (temperatureK * 9) / 5 - 459.67;

            text.innerText = cityData;
            text3.innerText = temperatureK;
            text4.innerText = conditionsW;

        })
        .catch(error => console.log("Error", error));
})



    // }

// placeHolder();












// let bootstrap = document.getElementById("bootstrap");
    // let row = document.createElement("div");
    // let column = document.createElement("div");
    // main.appendChild(theStrap);
    // theStrap.appendChild(row);
    // row.appendChild(column);
    // theStrap.setAttribute("id", "bootstrap");
    // theStrap.classList.add("container");
    // row.classList.add("row");
    // column.innerText = "test3";
    // column.className = "text-success";
    // let btn = document.createElement("button");
    // btn.textContent = "Submit";
    // btn.setAttribute("id", "onButton");
    // btn.appendChild(document.createTextNode('Submit'));
    // section.appendChild(btn);







//create variable for the main div
// let main = document.getElementById("main");
//create a button element using createElement
// let btn = document.createElement("button");
// btn.setAttribute("id", "onButton");
// main.appendChild(btn);
//Set the ID to onButton using setAttribute so I can call to it later
// btn.setAttribute("id", "onButton");






// main.innerText = "What's the weather like? \n Type in your ZIP code to find out!";






// let main = document.getElementById("main");
// let theStrap = document.createElement("div");
// // let bootstrap = document.getElementById("bootstrap");
// let row = document.createElement("div");
// let column = document.createElement("div");
// main.appendChild(theStrap);
// theStrap.appendChild(row);
// row.appendChild(column);
// theStrap.setAttribute("id", "bootstrap");
// theStrap.classList.add("container");
// row.classList.add("row");
// column.classList.add("col-sm");


// theStrap.innerText = "test";
// row.innerText = "test2";
// column.innerText = "test3";























// let theStrap = document.createElement("div");
// let bootstrap = document.getElementById("bootstrap");
// let row = document.createElement("div");
// let column = document.createElement("div");
// main.appendChild(theStrap);
// theStrap.appendChild(row);
// row.appendChild(column);
// theStrap.setAttribute = ("id", "bootstrap");
// theStrap.classList.add("container");
// row.classList.add("row");
// column.classList.add("col-sm");


// theStrap.innerText = "test";
// row.innerText = "test2";
// column.innerText = "test3";