let url = "https://api.openweathermap.org/";
let apiKey = "82d10d8b9124f9ece3e56c62befeda72";



function placeHolder() {
    let main = document.getElementById("main");
    let theStrap = document.createElement("div");
    // let bootstrap = document.getElementById("bootstrap");
    // let row = document.createElement("div");
    // let column = document.createElement("div");
    main.appendChild(theStrap);
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

    let section = document.createElement("div");
    section.className = "flex flex-column";
    let btn = document.createElement("button");
    btn.textContent = "Submit";
    section.appendChild(btn);
    let btn2 = document.createElement("input");
    section.appendChild(btn2);
    theStrap.appendChild(section);

    let middleSection = document.createElement("div");
    let text = document.createElement("p");
    text.textContent = "Hello";
    text.className = "font-bold text-danger";
    middleSection.appendChild(text);
    theStrap.appendChild(middleSection);
    
}

placeHolder();




















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