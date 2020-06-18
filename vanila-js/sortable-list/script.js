const draggableList = document.getElementById('draggable-list')
const check = document.getElementById('check')

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
}
