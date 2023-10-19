export async function Imagenes() {
    let respuesta = await fetch("../../JS/imagenes.json");
    let images = await respuesta.json();

    let imagen1 = document.querySelector("#Imagen1");
    let imagen2 = document.querySelector("#Imagen2");
    let imagen3 = document.querySelector("#Imagen3");
    let imagen4 = document.querySelector("#Imagen4");
    let imagen5 = document.querySelector("#Imagen5");

    imagen1.src=images.Imagen1;
    imagen2.src=images.Imagen2;
    imagen3.src=images.Imagen3;
    imagen4.src=images.Imagen4;
    imagen5.src=images.Imagen5;

  }
