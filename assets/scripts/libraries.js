const sortBtn = document.querySelector('.sort-btn'); 
if(sortBtn) {
    sortBtn.addEventListener('click', function() {
        this.nextElementSibling.classList.toggle('active');
    })
}


function sortDataTable(cd, index) {
    if (cd === 'asc') {
        table.order([index, 'desc']).draw(); // Set to descending
    } else {
        table.order([index, 'asc']).draw(); // Set to ascending
    }
}

document.addEventListener('click', function(e) {
    let element = e.target; 
    if(element.classList.contains('item')) {
        document.querySelectorAll('.popup .item').forEach(item => item.classList.remove('active'))
        sortBtn.nextElementSibling.classList.toggle('active'); 
        element.classList.add('active'); 
        var currentOrder     = table.order(); 
        var currentDirection = currentOrder[0][1];
        var userChoosing     = element.lastElementChild.innerText.toUpperCase(); 
        if(userChoosing.includes('NAME'))  sortDataTable(currentDirection, 0); 
        if(userChoosing.includes('DATE'))  sortDataTable(currentDirection, 2); 
        if(userChoosing.includes('CATEGORY'))  sortDataTable(currentDirection, 1); 
    }
})

// library 
const libraryElement = (index) => {
    return `<tr>
                        <td>
                            <div class="card5">
                                <img src="./assets/image/icon1.png">
                                <div class="detail">
                                    <h3>Kukdong Monitoring ${index}</h3>
                                    <h5>Monitoring</h5>
                                </div>
                            </div>
                        </td>
                        <td>Website</td>
                        <td>Acquired 2024/11/01</td>
                        <td>
                            <button>Open</button>
                        </td>
                    </tr>`; 
}

let libraryEl = ""; 
for(i=0; i<15; i++) {
    libraryEl += libraryElement(i); 
}

const myTable = document.querySelector('#myTable tbody'); 
if(myTable) myTable.innerHTML = libraryEl;


let table = new DataTable('#myTable', {
    responsive: true
});

$('.custom-search').keyup(function(){
    table.search($(this).val()).draw() ;
})