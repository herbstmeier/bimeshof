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

    detailSelected = i
    if (i === -1) {
        detailsContainer.classList.add('hidden')
    } else {
        fillDetails(i)
        centerCard()
        detailsContainer.classList.remove('hidden')
    }
}

function fillDetails(i) {
    const title = document.getElementsByClassName('details-title')[0]
    const text = document.getElementsByClassName('details-text')[0]

    title.innerHTML = details[i].title
    text.innerHTML = details[i].text
}

function centerCard() {
    const detailsCard = document.getElementsByClassName('details-card')[0]
    const cardContainer = document.getElementsByClassName('details-card-container')[0]
    const iconClose = document.getElementsByClassName('icon-close')[0]

    const ratioPercent = 100 * (detailsCard.offsetHeight / cardContainer.offsetHeight)

    iconClose.style.top = (50-ratioPercent/2) + '%';
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