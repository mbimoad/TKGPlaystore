const cardElements = () => {
    return `<div class="card">
        <img src="./assets/image/kukdong.webp" class="card-cover">
        <div class="detail">
            <!-- title -->
            <div class="title">
                <img src="./assets/image/icon.png" class="icon">
                <div class="title-detail">
                    <h3>Lorem ipsum dolor sit amet</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio a quas minus</p>
                </div>
            </div>
        </div>
        <div class="informations">
            <div class="information">
                <img src="./assets/icon/code.svg" class="information-icon">
                <h3>Codeigniter</h3>
            </div>
            <div class="information">
                <img src="./assets/icon/database.svg" class="information-icon">
                <h3>AMES</h3>
            </div>
            <div class="information">
                <img src="./assets/icon/user.svg" class="information-icon">
                <h3>Anonymous</h3>
            </div>
        </div>
    </div>`;
}

const itemsElements = () => {
    return `  <div class="item">
    <img src="./assets/image/kukdong.webp" alt="">
    <div class="item-info">
        <h4>Kukdong Monitoring</h4>
        <div class="informations">
            <div class="information">
                <img src="./assets/icon/code.svg" class="information-icon">
                <h3>Codeigniter</h3>
            </div>
            <div class="information">
                <img src="./assets/icon/user.svg" class="information-icon">
                <h3>Anonymous</h3>
            </div>
        </div>
    </div>
</div>`;
}

// Cards
const desktop = document.querySelectorAll('.devices .cards');
const items   = document.querySelectorAll('.right .items'); 
let elements  = ""; 

// Inner Cards
for(i=1; i<=3; i++) elements += cardElements();
desktop.forEach(item => item.innerHTML = elements)

elements = ""; 
for(i=1; i<=4; i++) elements += itemsElements();
items.forEach(item => item.innerHTML = elements)

