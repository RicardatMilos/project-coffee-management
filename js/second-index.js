let productContainer1 = document.getElementById('product-container-1')
let productContainer2 = document.getElementById('product-container-2')
let productContainer3 = document.getElementById('product-container-3')
let productContainer4 = document.getElementById('product-container-4')
let menu = document.getElementById('menu')
let bag = document.getElementById('bag')
let button = document.getElementById('button')
let warningContainer = document.getElementById('warning-container')
let warningButton = document.getElementById('warning-button')

productContainer1.addEventListener('click', (e)=>{
    e.preventDefault
    warningContainer.style.display = "flex"
    warningContainer.style.transition = "all 1s ease-in-out"
    warningButton.addEventListener('click', (e) => {
        e.preventDefault
        warningContainer.style.display = "none"
    })
})

productContainer2.addEventListener('click', (e)=>{
    e.preventDefault
    warningContainer.style.display = "flex"
    warningContainer.style.transition = "all 1s ease-in-out"
    warningButton.addEventListener('click', (e) => {
        e.preventDefault
        warningContainer.style.display = "none"
    })
})

productContainer3.addEventListener('click', (e)=>{
    e.preventDefault
    warningContainer.style.display = "flex"
    warningContainer.style.transition = "all 1s ease-in-out"
    warningButton.addEventListener('click', (e) => {
        e.preventDefault
        warningContainer.style.display = "none"
    })
})

productContainer4.addEventListener('click', (e)=>{
    e.preventDefault
    warningContainer.style.display = "flex"
    warningContainer.style.transition = "all 1s ease-in-out"
    warningButton.addEventListener('click', (e) => {
        e.preventDefault
        warningContainer.style.display = "none"
    })
})

menu.addEventListener('click', (e)=>{
    e.preventDefault
    warningContainer.style.display = "flex"
    warningContainer.style.transition = "all 1s ease-in-out"
    warningButton.addEventListener('click', (e) => {
        e.preventDefault
        warningContainer.style.display = "none"
    })
})

bag.addEventListener('click', (e)=>{
    e.preventDefault
    warningContainer.style.display = "flex"
    warningContainer.style.transition = "all 1s ease-in-out"
    warningButton.addEventListener('click', (e) => {
        e.preventDefault
        warningContainer.style.display = "none"
    })
})

button.addEventListener('submit', (e)=>{
    e.preventDefault
    warningContainer.style.display = "flex"
    warningContainer.style.transition = "all 1s ease-in-out"
    warningButton.addEventListener('click', (e) => {
        e.preventDefault
        warningContainer.style.display = "none"
    })
})