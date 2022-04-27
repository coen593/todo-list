import { createTaskView, toggleSidebar } from '../modules/UI'
const makeElement = require('../helpers/makeElement.js')

export function header() {
    const h = makeElement('header')

    const closeMenu = makeElement('div', ['close-menu', 'hamburger'], '&times;')
    const openMenu = makeElement('div', ['open-menu', 'hamburger'], '&#9776;')
    h.appendChild(closeMenu)
    h.appendChild(openMenu)
    openMenu.addEventListener('click', () => toggleSidebar('close'))
    closeMenu.addEventListener('click', () => toggleSidebar('open'))

    const logo = makeElement('h1', ['header-logo'], 'Do-it-all')
    h.appendChild(logo)
    logo.addEventListener('click', () => createTaskView('all'))

    return h
}