const climbingShoes = [
  { url: "https://res.cloudinary.com/dhv5sotva/image/upload/v1651974278/shoes/Five_Ten_NIAD_Moccasym_Climbing_Shoes_Red_FW2853_02_standard_hover_gsanzo.jpg", description: "niad moccasym", id: 0 },
  { url: "https://res.cloudinary.com/dhv5sotva/image/upload/v1651974278/shoes/Five_Ten_NIAD_Moccasym_Climbing_Shoes_Red_FW2853_01_standard_wsdghd.jpg", description: "niad moccasym", id: 1 },
  { url: "https://res.cloudinary.com/dhv5sotva/image/upload/v1651974610/shoes/Five_Ten_Hiangle_Pro_Competition_Climbing_Shoes_Black_FV4744_01_standard_aqirgk.jpg", description: "hiangle pro", id: 2 },
  { url: "https://res.cloudinary.com/dhv5sotva/image/upload/v1651975059/shoes/Five_Ten_Hiangle_Pro_Competition_Climbing_Shoes_Black_FV4744_HM1_yz3wxf.jpg", description: "Janja Garnbret in the hiangle pro", id: 3 },
  { url: "https://res.cloudinary.com/dhv5sotva/image/upload/v1651974611/shoes/Five_Ten_Hiangle_Climbing_Shoes_White_EE9033_01_standard_q34t4t.jpg", description: "hiangle", id: 4 },
  { url: "https://res.cloudinary.com/dhv5sotva/image/upload/v1651974610/shoes/Five_Ten_Hiangle_Climbing_Shoes_White_EE9033_02_standard_hover_j63uup.jpg", description: "hiangle", id: 5 },
]

// create a template to insert
function itemTemplate(item) {
  const html = `
    <div class="item" id="item-${item.id}">
      <img src="${item.url}" alt="image of ${item.description}">
      <p>${item.description}</p>
    </div>
  `
  return html
}

function insertItem(items) {
  const container = document.querySelector('.container')
  for (const item of items) {
    const html = itemTemplate(item)
    container.insertAdjacentHTML('afterbegin', html)
  }
  selectItem()
}

function selectItem() {
  const item = document.querySelector('.container')
  item.addEventListener('click', (evt) => {
    console.log(evt)
    if (evt.target.localName === "img") {
      console.log(evt.target.currentSrc)
      const id = document.querySelector(`#${evt.target.parentNode.id}`)
      console.log(id)
      //id.remove()
    }
  })
}

insertItem(climbingShoes)
