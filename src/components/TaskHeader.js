const makeElement = require('../helpers/makeElement.js')

export function taskHeader(type) {
    let header
    if (type == 'all') {
        header = 'All tasks'
    }
    return makeElement('h2', ['content-header'], header)
}