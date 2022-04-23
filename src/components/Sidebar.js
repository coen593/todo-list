import { showTaskForm, showProjectForm } from '../modules/UI.js'
const makeElement = require('../helpers/makeElement.js')

export function sidebar() {
    const side = makeElement('div',['sidebar'])
    const addProjectButton = makeElement('button',['btn','add-project'],'Add Project', {
        'id': 'add-project'
    })
    side.appendChild(addProjectButton)
    addProjectButton.addEventListener('click', () => showProjectForm())

    const addTaskButton = makeElement('button',['btn','add-task'],'Add Task', {
        'id': 'add-task'
    })
    side.appendChild(addTaskButton)
    addTaskButton.addEventListener('click', () => showTaskForm())

    return side
}