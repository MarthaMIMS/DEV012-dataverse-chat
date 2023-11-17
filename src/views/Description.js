import { header } from "../components/header.js";
import dataset from "../data/dataset.js";

export const description = (props) => {
    console.log('props', props);
    //AGREGARLE CLASS A BODY PARA CAMBIAR EL COLOR EL CSS
    const body = document.body;
    body.setAttribute('class', "ruta-description");

    //METER LOS ELEMENTOS DE LA VISTA ERROR
    const div_description = document.createElement('div');
    div_description.setAttribute('id', 'viewDescription');

    const img_descriptionFondo = document.createElement('img');
    img_descriptionFondo.setAttribute('src', 'https://img.freepik.com/foto-gratis/fondo-rojo-grunge_1048-8960.jpg?w=1380&t=st=1700177002~exp=1700177602~hmac=7303db24464e6a2c956aeaac0c6433bae02689c745b2106eaa680164b0ba96c0');
    img_descriptionFondo.setAttribute('id', 'imgDescriptionFondo');

    //CREACION DE IMAGEN
    const img_descriptionPersonaje = document.createElement('img');
    img_descriptionPersonaje.setAttribute('id', 'imgDescriptionPersonaje');
    img_descriptionPersonaje.src = props.imageUrl;

    //CREACION DE DIV PARA PARRAFO NOMBRE
    const div_descriptionNombre = document.createElement('div');
    div_descriptionNombre.setAttribute('id', 'divNombre');

    const parrafoNombre = document.createElement('p');
    parrafoNombre.setAttribute('id', 'nombre');
    parrafoNombre.textContent = props.name;
    div_descriptionNombre.appendChild(parrafoNombre);

    //CREACION DE DIV PARA DETALLE
    const div_descriptionDetalle = document.createElement('div');
    div_descriptionDetalle.setAttribute('id', 'divDetalle');
    //CREACION PARRAFO DESCRIPCION
    const parrafoDescription = document.createElement('p');
    parrafoDescription.setAttribute('id', 'description');
    parrafoDescription.textContent = props.shortDescription;
    div_descriptionDetalle.appendChild(parrafoDescription);
    //CREACION PARRAFO HABILIDADES
    const parrafoHabilidades = document.createElement('p');
    parrafoHabilidades.setAttribute('id', 'skills');
    parrafoHabilidades.textContent = "Habilidades: " + props.shortDescription;
    div_descriptionDetalle.appendChild(parrafoHabilidades);
    //CREACION PARRAFO ARMAS
    const parrafoArmas = document.createElement('p');
    parrafoArmas.setAttribute('id', 'armas');
    parrafoArmas.textContent = "Armas: " + props.facts.weapons;
    div_descriptionDetalle.appendChild(parrafoArmas);

    //CREACION PARRAFO APARICION VIDEOJUEGOS
    const parrafoApariciones = document.createElement('p');
    parrafoApariciones.setAttribute('id', 'apariciones');
    parrafoApariciones.textContent = "Apariciones en videojuegos: " + props.videogamesAppearances;
    div_descriptionDetalle.appendChild(parrafoApariciones);

    //CREACION DIV LETALIDAD
    const div_letalidad = document.createElement('div');
    div_letalidad.setAttribute('id', 'divLetalidad');
    const img_letalidad = document.createElement('img');
    img_letalidad.setAttribute('src', 'https://cdn-icons-png.flaticon.com/512/4325/4325956.png');
    img_letalidad.setAttribute('id', 'imgLetalidad');
    div_letalidad.appendChild(img_letalidad);
    const parrafoLetalidad = document.createElement('p');
    parrafoLetalidad.setAttribute('id', 'parrafoLetalidad');
    parrafoLetalidad.textContent = "Letalidad: " + props.facts.lethalityLevel;
    div_letalidad.appendChild(parrafoLetalidad);
    //CREACION DIV REINO
    const div_reino = document.createElement('div');
    div_reino.setAttribute('id', 'divReino');
    const img_reino = document.createElement('img');
    img_reino.setAttribute('src', 'https://cdn-icons-png.flaticon.com/512/5778/5778499.png');
    img_reino.setAttribute('id', 'imgReino');
    div_reino.appendChild(img_reino);
    const parrafoReino= document.createElement('p');
    parrafoReino.setAttribute('id', 'parrafoReino');
    parrafoReino.textContent = "Reino: " + props.facts.kingdom;
    div_reino.appendChild(parrafoReino);




    div_description.appendChild(header());
    div_description.appendChild(img_descriptionFondo);
    div_description.appendChild(img_descriptionPersonaje);
    div_description.appendChild(div_descriptionNombre);
    div_description.appendChild(div_descriptionDetalle);
    div_description.appendChild(div_letalidad);
    div_description.appendChild(div_reino);
    //div_description.appendChild(renderImages(data_personajes));

    return (div_description);

};