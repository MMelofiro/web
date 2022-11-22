window.onload = pantalla;

let titulo = document.querySelector(".card-title");
    tituB = document.querySelector("#ti-b");
    tituC = document.querySelector("#ti-c");
    tituD = document.querySelector("#ti-d");

let big = document.querySelector(".big");
    bigB = document.querySelector("#big-b");
    bigC = document.querySelector("#big-c");
    bigD = document.querySelector("#big-d");

let small = document.querySelector(".small");
    smallB = document.querySelector("#small-b");
    smallC = document.querySelector("#small-c");
    smallD = document.querySelector("#small-d");


function pantalla(){

    let currentWidth = document.querySelector(".carta").offsetWidth;

    let newTitle = titulo.style.fontSize=(currentWidth/7.64) + "px";
        titleB = tituB.style.fontSize = newTitle;
        titleC = tituC.style.fontSize = newTitle;
        titleD = tituD.style.fontSize = newTitle;

    let newBig = big.style.fontSize=(currentWidth/13.44) + "px";
        granB = bigB.style.fontSize = newBig;
        granC = bigC.style.fontSize = newBig;
        granD = bigD.style.fontSize = newBig;

    let newSmall = small.style.fontSize=(currentWidth/11.2) + "px";
        peqB = smallB.style.fontSize = newSmall;
        peqC = smallC.style.fontSize = newSmall;
        peqD = smallD.style.fontSize = newSmall;

}

window.addEventListener("resize", pantalla);