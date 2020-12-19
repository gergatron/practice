/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
++ https://github.com/john-smilga/javascript-basic-projects/tree/master/8-menu
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/ 
/*%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
{exampleData} .map() .reduce() .currentTarget.dataset
.includes() .join("") .innerHTML
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%*/ 

/*[[[[[[[[[[[[[[[[[[[[[[[[[[[
## Data
]]]]]]]]]]]]]]]]]]]]]]]]]]]]*/
const menu = [
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 15.99,
    img: "https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: "diner double",
    category: "lunch",
    price: 13.99,
    img: "https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "shakes",
    price: 6.99,
    img: "https://images.unsplash.com/photo-1514995428455-447d4443fa7f?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: "country delight",
    category: "breakfast",
    price: 20.99,
    img: "https://images.unsplash.com/photo-1432139509613-5c4255815697?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=632&q=80",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: "egg attack",
    category: "lunch",
    price: 22.99,
    img: "https://images.unsplash.com/photo-1464196290972-3c085498b4d7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: "oreo dream",
    category: "shakes",
    price: 18.99,
    img: "https://images.unsplash.com/photo-1528740096961-3798add19cb7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: "bacon overflow",
    category: "breakfast",
    price: 8.99,
    img: "https://images.unsplash.com/photo-1561758033-563f9666b8c8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: "american classic",
    category: "lunch",
    price: 12.99,
    img: "https://images.unsplash.com/photo-1529042410759-befb1204b468?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=633&q=80",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: "quarantine buddy",
    category: "shakes",
    price: 16.99,
    img: "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
   {
    id: 10,
    title: "everythings at steak",
    category: "dinner",
    price: 39.99,
    img: "https://images.unsplash.com/photo-1565299715199-866c917206bb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
];

/*===============================
## Get Elements 
=================================*/

const sectionCenter = document.querySelector('.section-center');

const container = document.querySelector('.btn-container');

/*==============================
## Build Functions 
=================================*/

const displayMenuItems = (menuItems) => {
  let displayMenu = menuItems.map((item) => {
    return `<article class="menu-item">
      <img src=${item.img} alt=${item.title}  class="photo" />
      <div class="item-info">
        <header>
          <h4>${item.title}</h4>
          <h4 class="price">${item.price}</h4>
        </header>
        <p class="item-text">
         ${item.desc}
        </p>
      </div>
    </article>
    <!-- end of single item -->
    `;
  });
  displayMenu = displayMenu.join(""); 
  sectionCenter.innerHTML = displayMenu;
}

const displayMenuButtons = () => {
  const categories = menu.reduce((values,item) => {
    if(!values.includes(item.category)) {
      values.push(item.category); 
    }
    return values;
  }, ['all']);
  const categoryBtns = categories.map((category) => {
    return `<button type="button" class="filter-btn" data-id=${category}>
              ${category}
            </button>`
  }).join("");
  container.innerHTML = categoryBtns;
  const filterBtns = container.querySelectorAll('.filter-btn');
  // filter items 
filterBtns.forEach((btn) => {
  btn.addEventListener('click', function(e){
    const category = e.currentTarget.dataset.id; 
    const menuCategory = menu.filter((menuItem) => {
      if(menuItem.category === category){
        return menuItem; 
      }    
    });
    if(category === 'all'){
      displayMenuItems(menu)
    } else {
      displayMenuItems(menuCategory)
    }
  })
});
}
  
/*=============================
## Hook Event Listeners
================================*/

// load items
window.addEventListener("DOMContentLoaded", () => {
   displayMenuItems(menu);
   displayMenuButtons();
});

