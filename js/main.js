let block = document.querySelector('.blocks')
let menu = document.querySelector('.menu')


const getProduct = (category) => {
fetch(`https://fakestoreapi.com/products/${category === 'ALL' ?  '' : 'category/' + category}`)
.then((res) => res.json())
.then((res) => {
    res.forEach((item) => {
        
        block.innerHTML += `
        <div class="card">
        <img class="card_image" src="${item.image}">
        <div class="card_tittle">
            <p class="card_des">${item.description}</p>
            <p class="card_category">Категория: ${item.category}</p>
            <p class="card_price">Цена: ${item.price}</p>
        </div>
        </div>
        `
    });
})
}
getProduct('ALL')

const getCategories = () => {
    fetch('https://fakestoreapi.com/products/categories')
     .then((res) => res.json())
     .then((res) => {
        res.forEach((item) => {
            menu.innerHTML += `<li class = 'menu_item'>${item}</li>`
    })

    let menuItems = document.querySelectorAll('.menu_item')
    Array.from(menuItems).forEach((item) => {
        item.addEventListener('click', () => {
            block.innerHTML = ''
            getProduct(item.textContent)
        })
    })
})
}
getCategories()