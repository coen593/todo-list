import { deleteProject } from '../modules/UI'
const makeElement = require('../helpers/makeElement.js')

export function taskHeader(type, filter) {
    let text
    let header
    if (type == 'all') {
        header = makeElement('h2', ['content-header', type], 'All tasks')
    } else if (type == 'p') {
        if (filter.title == '_no-project') {
            header = makeElement('h2', ['content-header', type], 'Miscellaneous tasks')
        } else {
            header = makeElement('div',['header-div'])
            const headerText = makeElement('h2', ['content-header', type], `${filter.title} - Tasks`)
            const del = makeElement('button', ['delete-project-button', '.btn'], 'Delete project')
            header.appendChild(headerText)
            header.appendChild(del)
            del.addEventListener('click', () => deleteProject(filter))
        }
        
        
    }

    return header
    
}