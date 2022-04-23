import { showTaskForm, showProjectForm } from '../modules/UI'
import Storage from '../modules/Storage'
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

    const projectHeader = makeElement('h3', null, 'Projects')
    side.appendChild(projectHeader)

    const projectList = makeElement('ul', ['project-list'])
    const projects = Storage.getProjects()
    for (let project of projects) {
        if (project.title !== '_no-project') {
            const p = makeElement('li',['project-link'], project.title)
            projectList.appendChild(p)
        }
    }
    projectList.appendChild(makeElement('hr'))
    const miscProject = makeElement('li', ['project-link','misc-project-link'], 'Miscellaneous projects')
    projectList.appendChild(miscProject)
    side.appendChild(projectList)

    return side
}