import { details } from "./details.js"
import { news } from "./news.js"

let hamburgerOpen = false
let detailSelected = -1

if(document.URL.includes('index.html')) {
    generateNews()
    generateCategories()
}

function generateCategories() {
    const list = document.getElementsByClassName('categories-list')[0]
    
    details.forEach(e => {
        const element = document.createElement('li')
        const text = document.createTextNode(e.title)
        element.appendChild(text)
        element.onclick = function() { selectDetail(details.indexOf(e)) }
        list.appendChild(element)
    });
}

function generateNews() {
    const list = document.getElementsByClassName('news-list')[0]
    
    news.forEach(e => {
        const element = document.createElement('li')
        const dateE = document.createElement('p')
        const titleE = document.createElement('h4')
        const date = document.createTextNode(e.date)
        const title = document.createTextNode(e.title)
        dateE.appendChild(date)
        titleE.appendChild(title)
        element.appendChild(dateE)
        element.appendChild(titleE)
        list.appendChild(element)
    });
}

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
    const detailsCard = document.getElementsByClassName('details-card')[0]

    detailSelected = i
    if (i === -1) {
        detailsContainer.classList.add('hidden')
    } else {
        fillDetails(i)
        centerCard()
        detailsCard.scrollTop = 0
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
    if (!(e.target.className == 'details-card' || e.target.className == 'details-title' || e.target.className == 'details-text')) {
        selectDetail(-1)
    }
}

window.toggleHamburger = toggleHamburger
window.collapseMenu = collapseMenu
window.selectDetail = selectDetail
window.detailClick = detailClick

export { selectDetail, toggleHamburger, collapseMenu, detailClick }