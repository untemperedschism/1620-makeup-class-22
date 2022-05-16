// this is your data
const fiveten = [
  { 
    id: 0,
    brand: "fiveten",
    img: "https://res.cloudinary.com/dhv5sotva/image/upload/v1651974610/shoes/Five_Ten_Hiangle_Pro_Competition_Climbing_Shoes_Black_FV4744_01_standard_aqirgk.jpg",
    description: "five ten hiangle pro"
  },
  {
    id: 1,
    brand: "fiveten",
    img: "https://res.cloudinary.com/dhv5sotva/image/upload/v1652069382/shoes/Five_Ten_Hiangle_Pro_Tokyo_Competition_Climbing_Shoes_White_GV7144_03_standard_rwngeo.jpg",
    description: "five ten hiangle pro, Tokyo edition"
  },
  {
    id: 2,
    brand: "fiveten",
    img: "https://res.cloudinary.com/dhv5sotva/image/upload/v1651974611/shoes/Five_Ten_Hiangle_Climbing_Shoes_White_EE9033_01_standard_q34t4t.jpg",
    description: "five ten hiangle"
  },
  {
    id: 3,
    brand: "fiveten",
    img: "https://res.cloudinary.com/dhv5sotva/image/upload/v1651974278/shoes/Five_Ten_NIAD_Moccasym_Climbing_Shoes_Red_FW2853_02_standard_hover_gsanzo.jpg",
    description: "five ten niad moccasym"
  }
]

const scarpa = [
  {
    id: 0,
    brand: "scarpa",
    img: "https://res.cloudinary.com/dhv5sotva/image/upload/v1652069168/shoes/1ipps_instinct_vsr_ext_-_blkazu_2_kdemnv.jpg",
    description: "scarapa instinct vsr"
  },
  {
    id: 1,
    brand: "scarpa",
    img: "https://res.cloudinary.com/dhv5sotva/image/upload/v1652069168/shoes/ipps-web_instinctcts-blackazure-ext_z0gsee.jpg",
    description: "scarpa instinct s new"
  },
  {
    id: 2,
    brand: "scarpa",
    img: "https://res.cloudinary.com/dhv5sotva/image/upload/v1652069168/shoes/ipps_drago_lv_ext_-_white_yg8hu0.jpg",
    description: "scarpa drago lv"
  }
]

// I know global variables, yuck!
const container = document.querySelector('.container')
const shoeList = document.querySelector('header ul')

shoeList.addEventListener('click', showShoeGrid)

// this function creates the initial grid of shoes and contains a switch statement
// you could also use if else, or there is an example of eval() below
function showShoeGrid(evt) {
 switch (evt.target.innerText) {
  case "five ten":
    insertGrid(fiveten)
    break
  case "scarpa":
    insertGrid(scarpa)
    break
  }
}

//template for each shoe articl in the grid
function shoeTemplateGrid(shoe) {
  const html = `
    <article class="item" id="item-${shoe.id}">
      <p>${shoe.description}</p>
      <img class="${shoe.brand}" src="${shoe.img}" alt="image of ${shoe.description}">
    </article>
  `
  return html
}

//templage for large single shoe image
function singleShoeTemplate(shoe) {
  const html = `
    <article class="single-shoe">
    <span id="close" class="fa-solid fa-circle-xmark"></span>
      ${shoe}
    </article>
  `
  return html
}

//This div is used for the grid
//This could also be accomplished with a template like the above examples
function gridContainer(parent) {
  const div = document.createElement('div')
  div.className = 'shoe-grid'
  parent.appendChild(div)
}

// this function removes the contents of the container div
// the container variable is created just below the arrays
function removegrid() {
  while (container.firstChild) {
    container.removeChild(container.firstChild)
  }
}

// this function actually adds the shoe articles to the grid
function insertGrid(shoeArray) {
  removegrid()
  gridContainer(container)
  const grid = document.querySelector('.shoe-grid')
  for(const shoe of shoeArray) {
    const html = shoeTemplateGrid(shoe)
    grid.insertAdjacentHTML('beforeend', html)
  }
  container.addEventListener('click', showSingleShoe)
}

// this inserts a singel shoe
function displayShoe(shoe) {
  const html = singleShoeTemplate(shoe)
  container.insertAdjacentHTML('afterbegin', html)
}

//this function is run when you click a shoe in the grid
//it sort of assembles all of the components 
//cleans up the grid, runs the function that adds the shoe image
//and adds the event listener for the close button
function showSingleShoe(evt) {
  if(evt.target.nodeName === "IMG") {
    removegrid()
    displayShoe(evt.target.outerHTML)
    const closeButton = document.querySelector('#close')
    closeButton.addEventListener('click', removeSingleShoe)
  }
}

// this removes a single shoe item and restores the grid
// a better way to do this might be to hide the grid and bring it back
// but this provides another event object example
// const brand, gets the brand which is used to decide which shoe brand to display in the grid
function removeSingleShoe(evt) {
  const brand = evt.target.nextElementSibling.className
  insertGrid(eval(brand))
}
