import { showTaskForm, showProjectForm } from '../modules/UI.js'
const makeElement = require('./makeElement.js')

export function navBar() {
    const nav = makeElement('nav')

    const logo = makeElement('h1', ['nav-logo'], 'Do-it-all')
    nav.appendChild(logo)

    const addProjectButton = makeElement('button',['btn','add-project'],'Add Project', {
        'id': 'add-project'
    })
    nav.appendChild(addProjectButton)
    addProjectButton.addEventListener('click', () => showProjectForm())

    const addTaskButton = makeElement('button',['btn','add-task'],'Add Task', {
        'id': 'add-task'
    })
    nav.appendChild(addTaskButton)
    addTaskButton.addEventListener('click', () => showTaskForm())

    return nav
}