const draggableList = document.getElementById('draggable-list')
const check = document.getElementById('check')
const hpCounter = document.getElementById('hp')
const message = document.getElementById('message')

const populatedCountry = [
    'China',
    'India',
    'United States',
    'Indonesia',
    'Pakistan',
    'Brazil',
    'Nigeria',
    'bangladesh',
    'Russia',
    'Mexico'
];

let hp = 3;

//store Listitems
const listItems = [];

let dragStartIndex;

createList();

//Insert list items into DOM
function createList() {
    [...populatedCountry]
        .map(a => ({ value: a, sort: Math.random() }))
        .sort((a,b) => a.sort - b.sort)
        .map(a => a.value)
        .forEach((country,index) => {          
            const listItem = document.createElement('li');

            listItem.setAttribute('data-index', index);

            listItem.innerHTML = `
                <span class="number">${index+1}</span>
                <div class="draggable" draggable="true">
                    <p class="country-name">${country}</p>
                    <i class="fas fa-grip-lines"></i>
                </div>
            `;

            listItems.push(listItem);

            draggableList.appendChild(listItem)
        })

        addEventListeners();
}

function dragStart() {
    // console.log('Event: ', 'dragstart');
    dragStartIndex = +this.closest('li').getAttribute('data-index');  
}
function dragEnter() {
    // console.log('Event: ', 'dragenter');
    this.classList.add('over')
}
function dragLeave() {
    // console.log('Event: ', 'dragleave');
    this.classList.remove('over')
}
function dragOver(e) {
    // console.log('Event: ', 'dragover');
    e.preventDefault();

}
function dragDrop() {
    // console.log('Event: ', 'drop');
    const dragEndIndex = +this.getAttribute('data-index');
    swapItems(dragStartIndex, dragEndIndex);

    this.classList.remove('over')
}

function swapItems(fromIndex, toIndex) {
    const itemOne = listItems[fromIndex].querySelector('.draggable')
    const itemTwo = listItems[toIndex].querySelector('.draggable')  
    
    listItems[fromIndex].appendChild(itemTwo)
    listItems[toIndex].appendChild(itemOne);    
}

function checkOrder() {
    listItems.forEach((item,index) => {
        const countryName = item.querySelector('.draggable').innerText.trim();

        if(countryName !== populatedCountry[index]) {
            item.classList.add('wrong')
        } else {
            item.classList.remove('wrong')
            item.classList.add('right')
        }
    })
    checkWinorLose()
}

function checkWinorLose() {
    const checkArr = [];
    listItems.forEach(item => {
        if(item.classList.contains('wrong')){
            checkArr.push(item)
        }
    })
    if(checkArr.length > 0) {
        hp--;
    }
    if(hp <= 0) {
        message.innerText = "Game over!!!"
    }
    hpCounter.innerText = hp
}

function addEventListeners() {
    const draggables = document.querySelectorAll('.draggable');
    const dragListItems = document.querySelectorAll('.draggable-list li');

    draggables.forEach(draggable => {
        draggable.addEventListener('dragstart', dragStart);
    })
    dragListItems.forEach(item => {
        item.addEventListener('dragover', dragOver);
        item.addEventListener('drop', dragDrop);
        item.addEventListener('dragenter', dragEnter);
        item.addEventListener('dragleave', dragLeave);
    })
}

check.addEventListener('click',checkOrder)

//hp
hpCounter.innerText = hp
