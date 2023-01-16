import { details } from "./details.js"

let hamburgerOpen = false
let detailSelected = -1

function toggleHamburger() {
    hamburgerOpen = !hamburgerOpen
}

function selectDetail(i) {
    const detailsContainer = document.getElementsByClassName('details-container')[0]
    const categoriesContainer = document.getElementsByClassName('categories-container')[0]

    detailSelected = i
    console.log('show detail ' + i)
    if (i === -1) {
        categoriesContainer.classList.remove('blur')
        detailsContainer.classList.add('hidden')
    } else {
        fillDetails(i)
        categoriesContainer.classList.add('blur')
        detailsContainer.classList.remove('hidden')
    }
}

function fillDetails(i) {
    const title = document.getElementsByClassName('details-title')[0]
    const text = document.getElementsByClassName('details-text')[0]

    title.innerHTML = details[i].title
    text.innerHTML = details[i].text
}

function detailClick(e) {
    const detailsContainer = document.getElementsByClassName('details-container')[0]
    if (e.target == detailsContainer) {
        selectDetail(-1)
    }
}

window.toggleHamburger = toggleHamburger
window.selectDetail = selectDetail
window.detailClick = detailClick

export { selectDetail, toggleHamburger, detailClick }