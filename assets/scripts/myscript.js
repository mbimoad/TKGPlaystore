
const hamburger = document.querySelector('.hamburger'); 
const sidebar = document.querySelector('aside'); 
const sidebarmenu = sidebar.querySelectorAll('ul li'); 
console.log(sidebarmenu)
sidebarmenu.forEach(item => item.addEventListener('click', function() {
    let elm = item.lastElementChild.innerText.toUpperCase(); 
    if(elm.includes('DARK MODE')) {
        document.body.classList.toggle('light');
    }
}))

hamburger.addEventListener('click', function() {
    hamburger.firstElementChild.classList.toggle('active');
    hamburger.firstElementChild.nextElementSibling.classList.toggle('active');
    hamburger.firstElementChild.nextElementSibling.nextElementSibling.classList.toggle('active');
    sidebar.classList.toggle('active')
})


function card4(index) {
    return `<div class="card card4" style="background-image: url('./assets/image/category${index}.jpg');">
                <h5>Windows Themes</h5>
            </div>`; 
}

function card3(index) {
    return `<div class="card card3">
                <div class="image">
                    <img src="./assets/image/icon${index}.png">
                </div>
                <div class="rated">
                    <h4>Minecreaft Java & Bedrock</h4>
                    <span class="star">4.2 ★</span>
                    <span class="kategori">Mobile</span>
                </div>
            </div>`; 
}

function card6(index) {
    return `<img src="./assets/image/screenshot${index}.jpg">`; 
}

function card2(index) {
    return `<div class="card card2">
                <img src="./assets/image/icon${index}.png">
                <div class="rated">
                    <h4>Minecreaft Java & Bedrock</h4>
                    <span class="star">4.2 ★</span>
                    <span class="kategori">Mobile</span>
                </div>
            </div>`; 
}

function card1(index) {
    return `<div class="card card1" style="background-image: url('./assets/image/item${index}.jpg');">
                <!-- <span class="banner">Best Seller </span> -->
                <span class="banner2">S</span>
        
                <div class="rated">
                    <h4>Minecreaft Java & Bedrock</h4>
                    <span class="star">4.2 ★</span>
                    <span class="kategori">Mobile</span>
                </div>
            </div>`; 
}




function createSwiper(element, w1920, w1028, w480, w450, delay) {
    new Swiper(`.${element}`, {
        loop: true,
        navigation: {
            nextEl: `.${element}-next`, // Selector for the next button
            prevEl: `.${element}-prev`, // Selector for the previous button
        },
        autoplay: {
            delay: delay, // Delay between transitions in milliseconds
            disableOnInteraction: false, // Continue autoplay after user interactions
        },
        nextButton: `.${element}-next`,
        prevButton: `.${element}-prev`,
        slidesPerView: 3,
        paginationClickable: true,
        spaceBetween: 20,
        breakpoints: {
            1920: {
                slidesPerView: w1920,
                spaceBetween: 30
            },
            1028: {
                slidesPerView: w1028,
                spaceBetween: 30
            },
            480: {
                slidesPerView: w480,
                spaceBetween: 10
            }, 
            0: {
                slidesPerView: w450,
                spaceBetween: 10
            }
        }
    });
}

function injectElement(element, length) {
    let el = ""; 
    for(i=1; i<length; i++) {
        el += "<div class='swiper-slide'>"; 
        if(element == "cards1") {
            el += card1(i); 
        } else if(element == "cards2") {
            el += card2(i); 
            el += card2(i); 
        } else if(element == "cards3") {
            el += card3(i); 
        } else if(element == "screenshots1") {
            el += card6(i); 
        }
        el += "</div>"; 
    }
    const swiperWrap = document.querySelector(`.${element}.swiper-container .swiper-wrapper`);
    swiperWrap.innerHTML = el; 
}


