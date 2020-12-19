/* ++ -- __ == ** ~~ ++ -- __ == ** ~~ ++ -- __ == ** ~~ ++ -- __ == ** ~~ // 
https://github.com/wesbos/JavaScript30/tree/master/15%20-%20LocalStorage
++ -- __ == ** ~~ ++ -- __ == ** ~~ ++ -- __ == ** ~~ ++ -- __ == ** ~~ // */

/*=======================================
## Get Elements 
=======================================*/

const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const items = JSON.parse(localStorage.getItem('items')) || []; 

const checkBoxes = document.querySelectorAll('input'); 

/*=======================================
## Build Functions 
=======================================*/

function addItem(e) {
  e.preventDefault(); 
  const text = (this.querySelector('[name=item]')).value;
  const item = {
    text,
    done: false
  };
  
  items.push(item);
  populateList(items, itemsList); 
  localStorage.setItem('items', JSON.stringify(items));
  this.reset();
  
}

function populateList(plates = [], platesList) {
  platesList.innerHTML = plates.map((plate, i) => {
    return `
      <li>
        <input type="checkbox" data-index=${i} id="item${i}" ${plate.done ? 'checked' : ''} />
        <label for="item${i}">${plate.text}</label>
      </li>
    `;
  }).join('');
}

function toggleDone(e) {
  if(!e.target.matches('input')) return; // skip this unless it 
  const el = e.target; 
  const index = el.dataset.index;
  items[index].done = !items[index].done; 
  localStorage.setItem('items', JSON.stringify(items));
  populateList(items, itemsList);
}


/*=======================================
## Hook Event Listeners
=======================================*/

addItems.addEventListener('submit', addItem); 
itemsList.addEventListener('click', toggleDone); 
populateList(items, itemsList);