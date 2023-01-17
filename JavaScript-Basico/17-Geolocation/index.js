// Ejercicio 17 - Curso de JavaScript Básico - OpenBootcamp | @JoeTheorium - Raggio Fernando Andrés
function initMap() {
    console.log("Inicializando mapa...") // Automáticamente en el momento que carga el sitio web, se lanza la función, por ende el map.
    const position = { // Requisito necesario. Por defecto nos dice que utilicemos estos valores. Son relativamente arbitrarios.
        lat: -25.344, // Latitud
        lng: 131.031 // Longitud
    }

    // Definimos el mapa como una nueva instansación de Google Maps.
    // Le tenemos que pasar 2 parámetros: En qué elemento del DOM lo utilizaremos y un objeto con 2 atributos.
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 4,
        center: position
    })
    // En este caso NO nos deja ver porque debemos tener una cuenta o proyecto con facturación habilitada para Google Cloud.

    // Del siguiente modo haremos que aparezcan 3 chinchetas rojas en el mapa interactivo:
    markers.push(
        new google.maps.Marker({
            position: {
                lat: -29.723705310034834,
                lng: -57.085302290159994,
            },
            map,
            title: "Costanera Paso de los Libres",
        })
    )
    markers.push(
        new google.maps.Marker({
            position: {
                lat: -25.666637905534188,
                lng: -54.450010549235515,
            },
            map,
            title: "Cataratas del Iguazú",
        })
    )
    markers.push(
        new google.maps.Marker({
            position: {
                lat: -41.16532305603815,
                lng: -71.88185796774299,
            },
            map,
            title: "Cerro Tronador, San Carlos de Bariloche",
        })
    )
}
