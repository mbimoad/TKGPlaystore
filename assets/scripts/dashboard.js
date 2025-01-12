
// Dashboard Carousel 
function dotItem(index) {
    return `<span class="${index == 1 ? 'active' : ''}"></span>`; 
}

function carouselItem(index) {
    return `
    <li class="card transition ${index == 3 ? 'big' : ''}">
        <img src="./assets/image/image${index}.jpg">
        <div class="detail">
            <span class="category">Mobile</span>
            <h1>Getting Started</h1>
            <span class="desc">Unleash your new devices power with us</span>
            <button> See Details</button>
        </div>
    </li>`;
}

let carousel = document.querySelector('.carousel'); 
let collection = document.querySelector('.collection .colwrap'); 
let elements = ""; 
let dotEleme = ""; 
let card4Elm = ""; 
let actived  = 1; 
for(i=1; i<8; i++) {
    elements += carouselItem(i);  
    dotEleme += dotItem(i); 
}
carousel.innerHTML= elements; 
carousel.nextElementSibling.innerHTML = dotEleme;  


for(i=1; i<=3; i++) {
    card4Elm += card4(i); 
}
collection.insertAdjacentHTML('beforeend', card4Elm);



const prevCarousel = document.querySelector('.prev')
const nextCarousel = document.querySelector('.next')
let firstmove = 1178; 
let timestamp = 4000; 
const dots = document.querySelectorAll('.dot span'); 

prevCarousel.addEventListener('click', function() {
    clearInterval(carouselAuto); 
    MoveLeft();

    carouselAuto = setInterval(() => {
        MoveLeft(); 
    }, timestamp);
});
nextCarousel.addEventListener('click', function() {
    clearInterval(carouselAuto); 
    MoveRight();

    carouselAuto = setInterval(() => {
        MoveRight(); 
    }, timestamp);
});

let carouselAuto = setInterval(() => {
    MoveLeft(); 
}, timestamp);


function MoveLeft() {
    // Terakhir pindahkan ke yg pertama.
    const card = document.querySelectorAll('.carousel-wrapper .card'); 

    dots[actived-1].classList.remove('active'); 
    actived--; 
    if(actived <= 0) actived = card.length; 
    dots[actived-1].classList.add('active'); 


    prevCarousel.classList.add('disabled');
   
    card.forEach((item, index) => {
        item.classList.add('transition'); 
        item.style.transform = `translate(-${550}px, 0)`; 
        if(index == 1) item.classList.add('big');
        if(index == 2) item.classList.remove('big');
    })

    setTimeout(() => {
        card.forEach((item, index) => item.classList.remove('transition'));
        card.forEach(item => item.style.transform = `translate(-${firstmove}px, 0)`);
        const lastItem  = carousel.lastElementChild; 
        carousel.insertAdjacentHTML('afterbegin', lastItem.outerHTML); 
        lastItem.remove(); 
        prevCarousel.classList.remove('disabled');
    }, 400);
}

function MoveRight() {
    const card = document.querySelectorAll('.carousel-wrapper .card'); 
    dots[actived-1].classList.remove('active'); 
    actived++; 
    if(actived > card.length) actived = 1; 
    dots[actived-1].classList.add('active'); 

     // Terakhir pindahkan ke yg pertama.
     nextCarousel.classList.add('disabled');
     card.forEach((item, index) => {
         item.classList.add('transition'); 
         item.style.transform = `translate(-${1810}px, 0)`; 
         if(index == 3) item.classList.add('big');
         if(index == 2) item.classList.remove('big');
     })
 
     setTimeout(() => {
         card.forEach((item, index) => item.classList.remove('transition'));
         card.forEach(item => item.style.transform = `translate(-${firstmove + 14}px, 0)`);
         const firstItem  = carousel.firstElementChild; 
         carousel.insertAdjacentHTML('beforeend', firstItem.outerHTML); 
         firstItem.remove(); 
         nextCarousel.classList.remove('disabled');
     }, 400);
}


injectElement("cards1", 12); 
createSwiper('cards1', 8, 6, 3, 1, 2000);

injectElement("cards2", 8); 
createSwiper('cards2', 4, 3, 1, 1, 3000);

injectElement("cards3", 8); 
createSwiper('cards3', 4, 3, 1, 1, 4000);