const makeElement = require('../helpers/makeElement.js')

export function taskHeader(type, filter) {
    let header
    if (type == 'all') {
        header = 'All tasks'
    } else if (type == 'p') {
        if (filter.title == '_no-project') {
            header = 'Miscellaneous tasks'
        } else {
            header = `${filter.title} - Tasks`
        }
    }
    return makeElement('h2', ['content-header'], header)
}