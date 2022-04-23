const makeElement = require('../helpers/makeElement.js')

export function header() {
    const h = makeElement('header')

    const logo = makeElement('h1', ['header-logo'], 'Do-it-all')
    h.appendChild(logo)

    return h
}