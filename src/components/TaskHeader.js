import { deleteProject, showTaskForm } from '../modules/UI'
const makeElement = require('../helpers/makeElement.js')

export function taskHeader(type, filter) {
    const header = makeElement('div',['header-div'])

    let headerText
    if (type == 'all') {
        headerText = makeElement('h2', ['content-header', type], 'All tasks')
    } else if (type == 'p') {
        if (typeof filter !== 'string') filter = filter.title
        if (filter == '_no-project') {
            headerText = makeElement('h2', ['content-header', type], 'Miscellaneous tasks')
        } else {
            headerText = makeElement('h2', ['content-header', type], `${filter} - Tasks`)
        }
    }
    header.appendChild(headerText)

    const buttonDiv = makeElement('div',['button-div'])

    const addTaskButton = makeElement('button',['btn','add-task'],'Add Task', {'id': 'add-task'})
    buttonDiv.appendChild(addTaskButton)
    if (type == 'p') {
        addTaskButton.addEventListener('click', () => showTaskForm(filter))
    } else {
        addTaskButton.addEventListener('click', () => showTaskForm())
    } 
    
    if (type == 'p' && filter != '_no-project') {
        const delButton = makeElement('button', ['delete-project-button', '.btn'], 'Delete project')
        buttonDiv.appendChild(delButton)
        delButton.addEventListener('click', () => deleteProject(filter))
    }

    header.appendChild(buttonDiv)

    return header
    
}