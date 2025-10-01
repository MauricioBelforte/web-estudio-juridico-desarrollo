/* --pocicion inicial */
let ubicacionPrincipal = window.pageYOffset;
let $nav = document.querySelector("nav");
var logo = document.getElementById("logo");


/* --evento scroll */
window.addEventListener("scroll", function() {
    /* --muestra la ubicacion cada vez que hagas scroll */
    //console.log(window.pageYOffset);

    /* --donde nos encontramos actualmente */
    let desplazamientoActual = window.pageYOffset;

    /* --condicon para ocultar o mostrar el menu */
    if(ubicacionPrincipal >= desplazamientoActual) {
        /* --si es mayor o igual se muesta */
        
        logo.style.transform = "scale(1)";
        logo.style.transition = "all ease-in-out 1s";

        $nav.style.top = "0px";
        $nav.style.transition = "all 0.9s ease-in-out 0s"
        
        
        /*
        console.log('Ubicacion Principal')
        console.log(ubicacionPrincipal)
        console.log('desplazamiento')
        console.log(desplazamientoActual)*/
    } else {
        /* --sino lo ocultamos añadiendo un top negativo */
        $nav.style.top = "-89px";
        $nav.style.transition = "all 0.4s ease-in-out 0s"

        logo.style.transform = "scale(0.2)";
        logo.style.transition = "all ease-in-out 1s"

        

        
        
      /*  console.log('Ubicacion Principal')
        console.log(ubicacionPrincipal)
        console.log('desplazamiento')
        console.log(desplazamientoActual)*/
    }

    /* --actulizamos la ubicacion principal */
    ubicacionPrincipal = desplazamientoActual;
});