import { details } from "./details.js"

let hamburgerOpen = false
let detailSelected = -1

function toggleHamburger(_val) {
    const header = document.getElementsByClassName('header')[0]

    if (_val === false) {
        hamburgerOpen = _val
    } else {
        hamburgerOpen = !hamburgerOpen
    }

    if (hamburgerOpen) {
        header.classList.add('expanded')
    } else {
        header.classList.remove('expanded')
    }
}

function collapseMenu() {
    toggleHamburger(false)
}

function selectDetail(i) {
    const detailsContainer = document.getElementsByClassName('details-container')[0]
    const categoriesContainer = document.getElementsByClassName('categories-container')[0]

    detailSelected = i
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
    const card = document.getElementsByClassName('details-card')[0]
    if (!e.path.includes(card)) {
        selectDetail(-1)
    }
}

window.toggleHamburger = toggleHamburger
window.collapseMenu = collapseMenu
window.selectDetail = selectDetail
window.detailClick = detailClick

export { selectDetail, toggleHamburger, collapseMenu, detailClick }