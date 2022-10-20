/* Preloader */
setTimeout(function(){
    let preloader=document.querySelector(".preloader")
    let cuerpo=document.getElementById("cuerpo");
    preloader.style.visibility="hidden";
    cuerpo.style.overflow="scroll";
}, 700)

/* Menú hamburguesa */
function llamar(){
    let botonera=document.getElementById("botonera");
        botonera.classList.toggle("botonera-open");
    let menu=document.getElementById("menu");
        menu.querySelector("#menu .fa-bars").classList.toggle("fa-times");
    let noscroll=document.getElementById("cuerpo");
        noscroll.classList.toggle("cuerpofixed");
    let barracambio=document.getElementById("barra");
        barracambio.classList.toggle("header-cambio");
}

/* Cambio de color header */
window.addEventListener("scroll", colorbarra);
function colorbarra(){
    let barrasup=document.getElementById("barra");
        posy=window.pageYOffset;
    if(posy>300){
        barrasup.classList.remove("cheader");
        barrasup.classList.add("header-color");
    }
    else{
        barrasup.classList.add("cheader");
        barrasup.classList.remove("header-color");
    }
}

/* Galería */
let num=1;
function adelante(){
    num += 1;
    if(num>12){
        num=1;
    }
    let img=document.getElementById("imagen");
        img.src="imagenes/"+"img0"+num+".jpg";
}

function atras(){
    num -= 1;
    if(num<1){
        num=12;
    }
    let img=document.getElementById("imagen");
        img.src="imagenes/"+"img0"+num+".jpg";
}

/* Botón subir */
window.addEventListener("scroll", botonSubir)
function botonSubir(){
    let subir=document.getElementById("subir");
        posy=window.pageYOffset;
    if(posy>350){
        subir.style.display="block"
    }
    else{
        subir.style.display="none"
    }
}