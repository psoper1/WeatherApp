let url = "https://api.openweathermap.org/";
let apiKey = "82d10d8b9124f9ece3e56c62befeda72";



// function placeHolder() {
    let main = document.getElementById("main");
    let theStrap = document.createElement("div");
    theStrap.className = "mainStrap";
    main.appendChild(theStrap);

    let aboveButton = document.createElement("div");
    let text2 = document.createElement("h2");
    text2.textContent = "What's the weather like today? Put in your ZIP and find out!";
    text2.className = "font-bold text-danger";
    aboveButton.appendChild(text2);
    theStrap.appendChild(aboveButton);

    let section = document.createElement("div");
    section.className = "flex flex-column";
    let btn = document.createElement("button");
    btn.textContent = "Submit";
    section.appendChild(btn);
    let btn2 = document.createElement("input");
    section.appendChild(btn2);
    theStrap.appendChild(section);


    let cityInfo = document.createElement("div");
    let text = document.createElement("p");
    text.textContent = "City:";
    text.className = "font-bold text-danger";
    text.id = "city";
    cityInfo.appendChild(text);
    theStrap.appendChild(cityInfo);

    let setTemp = document.createElement("div");
    let text3 = document.createElement("p");
    text3.textContent = "Temperature:";
    text3.className = "font-bold text-danger";
    text3.id = "temp";
    setTemp.appendChild(text3);
    theStrap.appendChild(setTemp);

    let setCondition = document.createElement("div");
    let text4 = document.createElement("p");
    text4.textContent = "Conditions:";
    text4.className = "font-bold text-danger";
    text4.id = "cond";
    setCondition.appendChild(text4);
    theStrap.appendChild(setCondition);

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