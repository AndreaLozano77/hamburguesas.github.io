//===============================================
// La página muéstra una imagen y un botón. Cuando damos click en el botón "Ver menú" se invoca la función mostrarmenu() y desaparece esa imagen y aparecen las tarjetas
//===============================================


function mostrarMenu() {
    const menu = document.getElementById("menu").style.display;
     if (menu == "block") {
        document.getElementById("menu").style.display = "none"
     }else{
        document.getElementById("menu").style.display= "block" 
    }
    
    const promocion = document.getElementById('oferta').style.display;
    if (promocion == "none") {
       document.getElementById("oferta").style.display = "block"
    }else{
       document.getElementById("oferta").style.display= "none"
   }
}

//===================================================================
//  Alimentamos la plantilla desde JS para que aparezcan los objetos que tenemos en el arreglo de objetos cardContent.

//====================================================================

const $principal= document.querySelector('.principal');

const $cards = document.querySelector('.principal');
const $template = document.getElementById('template-card').content;
const $fragment = document.createDocumentFragment();
const cardContent = [
    {
        title: 'Hamburguesa sencilla',
        img: 'images/hamburger1.jpeg',
    },
    {
        title: 'Hamburguesa super',
        img: 'images/hamburguer3.jpeg',
    },
    {
        title: 'Papas fritas',
        img: 'images/francesas2.jpeg',
    },
    {
        title: 'Tocino',
        img: 'images/tocino1.jpeg',
    },
    {
        title: 'Queso Cheddar',
        img: 'images/queso3.jpeg',
    },
    {
        title: 'Queso Gouda',
        img: 'images/queso2.jpeg',
    },
    {
        title: 'Huevo',
        img: 'images/huevo1.jpeg',
    },
    {
        title: 'Pepinillos',
        img: 'images/pepinillo2.jpeg',
    },
];

cardContent.forEach(element => {

    $template.querySelector('img').setAttribute('src', element.img);
    $template.querySelector('img').setAttribute('alt', element.title);
    $template.querySelector('figcaption').textContent = element.title;

    let $clon = document.importNode($template, true);
    $fragment.appendChild($clon);
});

$cards.appendChild($fragment);

//====================================================================



//===============================================
//              Funciones
//===============================================

// function transformarEnEditable {
//     //algo
// }

