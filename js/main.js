'use strict';



// MARK UP HTML

const slider = document.querySelector('.slider');
let currentSlide = 0;
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

// for (let i = 0; i < images.length; i++) {

//     //slide
//     const slide = document.createElement('div');
//     slide.classList.add('slide');

//     if (i === currentSlide) {
//         slide.classList.add('active');
//     }
// }
//     //img
//     const img = document.createElement('img');
//     img.src = `img/${images[i]}`;
//     img.alt = `Carousel/${images[i]}`;

//     slide.append(img);
//     slider.append(slide);

//}

// OBJECT ARRAY CREATION
let imagesArray = [
    {
        url: 'img/01.jpg',
        title: 'Immagine Carosello 1',
        caption: 'Immagine stupenda',
    },
    {
        url: 'img/02.jpg',
        title: 'Immagine Carosello 2',
        caption: 'Immagine stupenda',
    },
    {
        url: 'img/03.jpg',
        title: 'Immagine Carosello 3',
        caption: 'Immagine stupenda',
    },
    {
        url: 'img/04.jpg',
        title: 'Immagine Carosello 4',
        caption: 'Immagine stupenda',
    },
    {
        url: 'img/05.jpg',
        title: 'Immagine Carosello 5',
        caption: 'Immagine stupenda',
    },
    {
        url: 'img/06.jpg',
        title: 'Immagine Carosello 6',
        caption: 'Immagine stupenda',
    }
];


// loopare su array di oggeti

for (let i = 0; i < imagesArray.length - 1; i++) {
    const slide = imagesArray[i];
    //slide
    const slideElement = document.createElement('div');
    slideElement.classList.add('slide');
    if (i === currentSlide) {
            slideElement.classList.add('active');
        }
    //testo
    console.log(slide.caption);
    const slideElementContent = `
    <img src=${slide.url} alt="">
    <h3>${slide.title}</h3>
    <p>${slide.caption}</p>`;
   
    slideElement.innerHTML = slideElementContent;
    slider.append(slideElement);
    console.log(slider);
}

const domSlides = document.querySelectorAll('.slide');

//  SLIDER EVENTS
prev.addEventListener('click', function () {
    console.log("Ho cliccato su prev");

    if (currentSlide > 0) {

        domSlides[currentSlide].classList.remove('active');
        currentSlide--;
        domSlides[currentSlide].classList.add('active');
    }
});

next.addEventListener('click', function () {
    console.log("Ho cliccato su next");

    if (currentSlide < domSlides.length - 1) {

        domSlides[currentSlide].classList.remove('active');
        currentSlide++;
        domSlides[currentSlide].classList.add('active');

    }
});

